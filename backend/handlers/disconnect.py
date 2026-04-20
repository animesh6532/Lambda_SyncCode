import pymysql
from services.db import get_connection

def handler(event, context):
    try:
        connection_id = event['requestContext']['connectionId']
        
        conn = get_connection()
        with conn.cursor() as cursor:
            cursor.execute(
                "DELETE FROM connections WHERE connection_id=%s",
                (connection_id,)
            )
            
        conn.commit()
        print("Disconnected:", connection_id)
        
        return {
            "statusCode": 200,
            "body": "Disconnected"
        }
    except Exception as e:
        print(f"Error in disconnect handler: {e}")
        return {
            "statusCode": 500,
            "body": f"Internal server error: {e}"
        }