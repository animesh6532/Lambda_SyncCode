import json

def handler(event, context):
    body = json.loads(event['body'])
    code = body['code']
    
    try:
        # ⚠️ VERY BASIC SAFE EXECUTION (interview level)
        allowed_globals = {"__builtins__": {"print": print}}
        output = []

        def capture_print(*args):
            output.append(" ".join(map(str, args)))

        allowed_globals["print"] = capture_print
        
        exec(code, allowed_globals)
        
        return {
            "statusCode": 200,
            "body": json.dumps({
                "output": "\n".join(output)
            })
        }
    
    except Exception as e:
        return {
            "statusCode": 200,
            "body": json.dumps({
                "error": str(e)
            })
        }