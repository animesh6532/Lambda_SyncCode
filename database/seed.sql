USE sync_code;

-- Insert sample room
INSERT INTO rooms (room_id, code)
VALUES ('room1', 'print("Welcome to SyncCode 🚀")');

-- Insert dummy connection (for testing)
INSERT INTO connections (connection_id, room_id)
VALUES ('test-connection-123', 'room1');

-- Insert sample execution
INSERT INTO executions (room_id, code, output)
VALUES (
    'room1',
    'print("Hello World")',
    'Hello World'
);