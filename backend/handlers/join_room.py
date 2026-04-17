import json
from services.db import get_connection

def handler(event, context):
    body = json.loads(event['body'])
    
    connection_id = event['requestContext']['connectionId']
    room_id = body['room_id']
    
    conn = get_connection()
    cursor = conn.cursor()
    
    # Insert connection
    cursor.execute(
        "INSERT INTO connections (connection_id, room_id) VALUES (%s, %s)",
        (connection_id, room_id)
    )
    
    # Ensure room exists
    cursor.execute(
        "INSERT IGNORE INTO rooms (room_id, code) VALUES (%s, '')",
        (room_id,)
    )
    
    conn.commit()
    conn.close()
    
    return {
        "statusCode": 200,
        "body": "Joined room"
    }