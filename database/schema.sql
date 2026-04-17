-- Create database
CREATE DATABASE IF NOT EXISTS sync_code;
USE sync_code;

-- ----------------------------
-- Table: rooms
-- ----------------------------
CREATE TABLE IF NOT EXISTS rooms (
    room_id VARCHAR(50) PRIMARY KEY,
    code TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ----------------------------
-- Table: connections
-- ----------------------------
CREATE TABLE IF NOT EXISTS connections (
    connection_id VARCHAR(100) PRIMARY KEY,
    room_id VARCHAR(50),
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (room_id) REFERENCES rooms(room_id)
        ON DELETE CASCADE
);

-- ----------------------------
-- Table: executions (optional but HIGH VALUE)
-- ----------------------------
CREATE TABLE IF NOT EXISTS executions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    room_id VARCHAR(50),
    code TEXT,
    output TEXT,
    executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);