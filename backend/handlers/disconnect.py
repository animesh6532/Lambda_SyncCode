import pymysql
from services.db import get_connection

def handler(event, context):
    connection_id = event['requestContext']['connectionId']
    
    conn = get_connection()
    cursor = conn.cursor()
    
    cursor.execute(
        "DELETE FROM connections WHERE connection_id=%s",
        (connection_id,)
    )
    
    conn.commit()
    conn.close()
    
    print("Disconnected:", connection_id)
    
    return {
        "statusCode": 200,
        "body": "Disconnected"
    }