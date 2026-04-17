from services.db import get_connection

def create_room_if_not_exists(room_id):
    conn = get_connection()
    cursor = conn.cursor()
    
    cursor.execute(
        "INSERT IGNORE INTO rooms (room_id, code) VALUES (%s, '')",
        (room_id,)
    )

def get_room_code(room_id):
    conn = get_connection()
    cursor = conn.cursor()
    
    cursor.execute(
        "SELECT code FROM rooms WHERE room_id=%s",
        (room_id,)
    )
    
    result = cursor.fetchone()
    
    return result['code'] if result else ""