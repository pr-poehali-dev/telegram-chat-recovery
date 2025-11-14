ALTER TABLE recovery_requests 
ADD COLUMN IF NOT EXISTS messages_data JSONB,
ADD COLUMN IF NOT EXISTS error_message TEXT;