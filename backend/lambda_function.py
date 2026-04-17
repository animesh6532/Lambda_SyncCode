import json

from handlers.connect import handler as connect_handler
from handlers.disconnect import handler as disconnect_handler
from handlers.join_room import handler as join_room_handler
from handlers.send_code import handler as send_code_handler
from handlers.execute_code import handler as execute_code_handler

from utils.response import error


def lambda_handler(event, context):
    route = event['requestContext']['routeKey']
    
    try:
        if route == "$connect":
            return connect_handler(event, context)
        
        elif route == "$disconnect":
            return disconnect_handler(event, context)
        
        elif route == "joinRoom":
            return join_room_handler(event, context)
        
        elif route == "sendCode":
            return send_code_handler(event, context)
        
        elif route == "executeCode":
            return execute_code_handler(event, context)
        
        else:
            return error("Invalid route", 400)
    
    except Exception as e:
        print("Error:", str(e))
        return error(str(e), 500)