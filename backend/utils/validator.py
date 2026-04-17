def validate_join_room(body):
    if "room_id" not in body or not body["room_id"]:
        return False, "room_id is required"
    return True, None


def validate_send_code(body):
    if "room_id" not in body:
        return False, "room_id is required"
    if "code" not in body:
        return False, "code is required"
    return True, None


def validate_execute(body):
    if "code" not in body:
        return False, "code is required"
    return True, None