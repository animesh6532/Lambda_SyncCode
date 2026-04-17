import json
from services.db import get_connection
from services.broadcast import broadcast_to_room

def handler(event, context):
    body = json.loads(event['body'])
    
    room_id = body['room_id']
    code = body['code']
    
    conn = get_connection()
    cursor = conn.cursor()
    
    # Update code in DB
    cursor.execute(
        "UPDATE rooms SET code=%s WHERE room_id=%s",
        (code, room_id)
    )
    
    conn.commit()
    conn.close()
    
    # Broadcast to all users in room
    broadcast_to_room(room_id, {
        "type": "code_update",
        "code": code
    })
    
    return {
        "statusCode": 200,
        "body": "Code updated"
    }