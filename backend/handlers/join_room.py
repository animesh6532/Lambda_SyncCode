import json
import boto3

def handler(event, context):
    try:
        print("📥 JOIN ROOM EVENT:", json.dumps(event))

        connection_id = event["requestContext"]["connectionId"]
        domain = event["requestContext"]["domainName"]
        stage = event["requestContext"]["stage"]

        body = json.loads(event.get("body") or "{}")
        room_id = body.get("room_id")

        if not room_id:
            return {"statusCode": 400, "body": "room_id required"}

        # ✅ Send message BACK to client
        apigw = boto3.client(
            "apigatewaymanagementapi",
            endpoint_url=f"https://{domain}/{stage}"
        )

        apigw.post_to_connection(
            ConnectionId=connection_id,
            Data=json.dumps({
                "type": "joined",
                "room_id": room_id
            })
        )

        return {"statusCode": 200}

    except Exception as e:
        print("❌ JOIN ERROR:", str(e))
        return {"statusCode": 500, "body": str(e)}