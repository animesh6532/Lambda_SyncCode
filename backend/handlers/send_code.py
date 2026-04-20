import json
from services.db import get_connection
from services.broadcast import broadcast_to_room

def handler(event, context):
    try:
        body = json.loads(event.get('body', '{}'))
        room_id = body.get('room_id')
        code = body.get('code')
        
        if not room_id or code is None:
            return {"statusCode": 400, "body": "room_id and code are required"}
        
        conn = get_connection()
        with conn.cursor() as cursor:
            # Update code in DB
            cursor.execute(
                "UPDATE rooms SET code=%s WHERE room_id=%s",
                (code, room_id)
            )
        
        conn.commit()
        
        # Broadcast to all users in room
        broadcast_to_room(room_id, {
            "type": "code_update",
            "code": code
        })
        
        return {
            "statusCode": 200,
            "body": "Code updated"
        }
    except Exception as e:
        print(f"Error in send_code: {e}")
        return {
            "statusCode": 500,
            "body": f"Internal server error: {str(e)}"
        }