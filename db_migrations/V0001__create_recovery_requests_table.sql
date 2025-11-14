CREATE TABLE IF NOT EXISTS recovery_requests (
    id SERIAL PRIMARY KEY,
    user_telegram_id VARCHAR(255),
    user_name VARCHAR(255),
    user_phone VARCHAR(50),
    user_email VARCHAR(255),
    chat_type VARCHAR(50) NOT NULL,
    chat_name VARCHAR(255),
    messages_count INTEGER,
    date_from DATE,
    date_to DATE,
    description TEXT,
    pricing_plan VARCHAR(50) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_recovery_requests_status ON recovery_requests(status);
CREATE INDEX idx_recovery_requests_created_at ON recovery_requests(created_at);