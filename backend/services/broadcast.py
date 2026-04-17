import json
import boto3
import os
from services.db import get_connection

apigateway = boto3.client(
    "apigatewaymanagementapi",
    endpoint_url=os.environ["WEBSOCKET_ENDPOINT"]
)

def broadcast_to_room(room_id, message):
    conn = get_connection()
    cursor = conn.cursor()
    
    # Get all connections in the room
    cursor.execute(
        "SELECT connection_id FROM connections WHERE room_id=%s",
        (room_id,)
    )
    
    connections = cursor.fetchall()
    
    for conn_id in connections:
        try:
            apigateway.post_to_connection(
                ConnectionId=conn_id['connection_id'],
                Data=json.dumps(message)
            )
        except Exception as e:
            print("Error sending message:", e)