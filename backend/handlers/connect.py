def handler(event, context):
    print("User connected:", event['requestContext']['connectionId'])
    return {
        "statusCode": 200,
        "body": "Connected"
    }