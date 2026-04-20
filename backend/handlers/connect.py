def handler(event, context):
    try:
        print("✅ CONNECT EVENT:", event)

        # You can access connectionId if needed
        connection_id = event["requestContext"]["connectionId"]
        print("Connection ID:", connection_id)

        return {
            "statusCode": 200,
            "body": "Connected successfully"
        }

    except Exception as e:
        print("❌ CONNECT ERROR:", str(e))
        return {
            "statusCode": 500,
            "body": "Connection failed"
        }