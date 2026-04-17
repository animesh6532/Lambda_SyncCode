import json

def success(data=None, message="Success"):
    return {
        "statusCode": 200,
        "body": json.dumps({
            "status": "success",
            "message": message,
            "data": data
        })
    }

def error(message="Something went wrong", status=400):
    return {
        "statusCode": status,
        "body": json.dumps({
            "status": "error",
            "message": message
        })
    }