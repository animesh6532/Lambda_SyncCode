import json

from handlers.connect import handler as connect_handler
from handlers.disconnect import handler as disconnect_handler

# ⚠️ Lazy imports (IMPORTANT)
# Do NOT import other handlers at top level


def lambda_handler(event, context):
    try:
        print("🔥 FULL EVENT:", json.dumps(event))

        route = event.get("requestContext", {}).get("routeKey")

        # ✅ CRITICAL: Handle connect FIRST and safely
        if route == "$connect":
            return connect_handler(event, context)

        # ✅ Handle disconnect
        if route == "$disconnect":
            return disconnect_handler(event, context)

        # ✅ Safe body parsing (only for non-connect routes)
        body = {}
        if event.get("body"):
            try:
                body = json.loads(event.get("body"))
            except Exception as e:
                print("⚠️ Body parse error:", str(e))
                body = {}

        action = body.get("action")

        print(f"Route: {route}, Action: {action}")

        # ✅ Lazy import handlers (prevents $connect crash)
        if route == "joinRoom" or action == "joinRoom":
            from handlers.join_room import handler as join_room_handler
            return join_room_handler(event, context)

        elif route == "sendCode" or action == "sendCode":
            from handlers.send_code import handler as send_code_handler
            return send_code_handler(event, context)

        elif route == "executeCode" or action == "executeCode":
            from handlers.execute_code import handler as execute_code_handler
            return execute_code_handler(event, context)

        else:
            return {
                "statusCode": 200,
                "body": "Unknown route"
            }

    except Exception as e:
        print("❌ LAMBDA ERROR:", str(e))
        return {
            "statusCode": 500,
            "body": str(e)
        }