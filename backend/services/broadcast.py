import json
import boto3
import os
from botocore.exceptions import ClientError
from services.db import get_connection

# Initialize outside to reuse client, but we might need endpoint dynamically?
# Assuming WEBSOCKET_ENDPOINT is always valid here.
apigateway = boto3.client(
    "apigatewaymanagementapi",
    endpoint_url=os.environ["WEBSOCKET_ENDPOINT"]
)

def broadcast_to_room(room_id, message):
    conn = get_connection()
    
    try:
        with conn.cursor() as cursor:
            # Get all connections in the room
            cursor.execute(
                "SELECT connection_id FROM connections WHERE room_id=%s",
                (room_id,)
            )
            connections = cursor.fetchall()
    except Exception as e:
        print(f"Failed to fetch connections for room {room_id}: {e}")
        return
        
    for conn_id in connections:
        cid = conn_id['connection_id']
        try:
            apigateway.post_to_connection(
                ConnectionId=cid,
                Data=json.dumps(message)
            )
        except apigateway.exceptions.GoneException:
            print(f"Connection {cid} is gone. Removing from DB.")
            try:
                with conn.cursor() as cursor:
                    cursor.execute("DELETE FROM connections WHERE connection_id=%s", (cid,))
                conn.commit()
            except Exception as db_e:
                print(f"Failed to delete stale connection {cid}: {db_e}")
        except ClientError as e:
            if e.response.get('Error', {}).get('Code') == 'GoneException':
                print(f"Connection {cid} is gone (ClientError). Removing from DB.")
                try:
                    with conn.cursor() as cursor:
                        cursor.execute("DELETE FROM connections WHERE connection_id=%s", (cid,))
                    conn.commit()
                except Exception as db_e:
                    pass
            else:
                print(f"ClientError sending to {cid}: {e}")
        except Exception as e:
            print(f"Error sending message to {cid}: {e}")