'''
Business: Восстановление переписок из Telegram через Telegram API
Args: event - dict с httpMethod, body (request_id, user_phone, chat_name, date_from, date_to)
Returns: HTTP response dict с результатом восстановления
'''

import json
import os
from typing import Dict, Any, Optional
from datetime import datetime
import psycopg2
from telethon.sync import TelegramClient
from telethon.tl.types import InputPeerUser, InputPeerChat, InputPeerChannel
from telethon.errors import SessionPasswordNeededError, PhoneNumberInvalidError


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Request-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    request_id = body_data.get('request_id')
    user_phone = body_data.get('user_phone')
    chat_name = body_data.get('chat_name')
    date_from = body_data.get('date_from')
    date_to = body_data.get('date_to')
    
    if not all([request_id, user_phone, chat_name]):
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Missing required fields'})
        }
    
    api_id = os.environ.get('TELEGRAM_API_ID')
    api_hash = os.environ.get('TELEGRAM_API_HASH')
    database_url = os.environ.get('DATABASE_URL')
    
    if not api_id or not api_hash:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Telegram API credentials not configured'})
        }
    
    conn = None
    messages_data = []
    
    try:
        conn = psycopg2.connect(database_url)
        cur = conn.cursor()
        
        cur.execute(
            "UPDATE recovery_requests SET status = 'processing' WHERE id = %s",
            (request_id,)
        )
        conn.commit()
        
        session_name = f'session_{request_id}'
        client = TelegramClient(session_name, int(api_id), api_hash)
        
        client.connect()
        
        if not client.is_user_authorized():
            client.send_code_request(user_phone)
            return {
                'statusCode': 202,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps({
                    'status': 'awaiting_code',
                    'message': 'Код подтверждения отправлен на телефон'
                })
            }
        
        messages = client.get_messages(
            chat_name,
            limit=None,
            offset_date=datetime.fromisoformat(date_to) if date_to else None,
            min_date=datetime.fromisoformat(date_from) if date_from else None
        )
        
        for msg in messages:
            messages_data.append({
                'date': msg.date.isoformat(),
                'sender_id': msg.sender_id,
                'text': msg.text or '',
                'media': str(msg.media) if msg.media else None
            })
        
        cur.execute(
            "UPDATE recovery_requests SET status = 'completed', messages_data = %s WHERE id = %s",
            (json.dumps(messages_data), request_id)
        )
        conn.commit()
        
        client.disconnect()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({
                'status': 'completed',
                'messages_count': len(messages_data),
                'request_id': request_id
            })
        }
        
    except SessionPasswordNeededError:
        if conn:
            cur = conn.cursor()
            cur.execute(
                "UPDATE recovery_requests SET status = 'error', error_message = %s WHERE id = %s",
                ('Требуется пароль двухфакторной аутентификации', request_id)
            )
            conn.commit()
        
        return {
            'statusCode': 403,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Требуется пароль двухфакторной аутентификации'})
        }
        
    except PhoneNumberInvalidError:
        if conn:
            cur = conn.cursor()
            cur.execute(
                "UPDATE recovery_requests SET status = 'error', error_message = %s WHERE id = %s",
                ('Неверный номер телефона', request_id)
            )
            conn.commit()
        
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Неверный номер телефона'})
        }
        
    except Exception as e:
        if conn:
            cur = conn.cursor()
            cur.execute(
                "UPDATE recovery_requests SET status = 'error', error_message = %s WHERE id = %s",
                (str(e), request_id)
            )
            conn.commit()
        
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': str(e)})
        }
        
    finally:
        if conn:
            conn.close()
