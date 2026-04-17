import pymysql
import os

# Global connection (reuse across Lambda invocations)
connection = None

def get_connection():
    global connection
    
    if connection and connection.open:
        return connection
    
    connection = pymysql.connect(
        host=os.environ['DB_HOST'],
        user=os.environ['DB_USER'],
        password=os.environ['DB_PASS'],
        database=os.environ['DB_NAME'],
        cursorclass=pymysql.cursors.DictCursor,
        autocommit=True
    )
    
    return connection