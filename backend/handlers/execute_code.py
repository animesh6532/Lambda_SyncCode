import json
from services.broadcast import broadcast_to_room


def handler(event, context):
    room_id = None

    try:
        # ✅ Safe JSON parsing
        body = json.loads(event.get("body") or "{}")
        code = body.get("code", "")
        room_id = body.get("room_id")

        if not room_id:
            return {"statusCode": 400, "body": "room_id is required"}

        # ✅ Handle empty code
        if not code.strip():
            broadcast_to_room(room_id, {
                "type": "execution_result",
                "output": "No code provided to execute."
            })
            return {"statusCode": 200, "body": "Empty code handled"}

        # ✅ Safe execution environment
        output = []

        def capture_print(*args):
            output.append(" ".join(map(str, args)))

        safe_globals = {
            "__builtins__": {},  # block dangerous builtins
            "print": capture_print
        }

        try:
            exec(code, safe_globals)
            output_str = "\n".join(output) if output else "Code executed successfully (no output)."
        except Exception as exec_error:
            output_str = f"Execution Error: {str(exec_error)}"

        # ✅ ALWAYS broadcast result
        broadcast_to_room(room_id, {
            "type": "execution_result",
            "output": output_str
        })

        return {
            "statusCode": 200,
            "body": "Execution broadcasted"
        }

    except Exception as e:
        print("ExecuteCode Error:", str(e))

        # ✅ Try to notify client
        if room_id:
            try:
                broadcast_to_room(room_id, {
                    "type": "execution_result",
                    "output": f"System Error: {str(e)}"
                })
            except Exception as broadcast_error:
                print("Broadcast failed:", str(broadcast_error))

        return {
            "statusCode": 500,
            "body": "Internal server error"
        }