import json
import os
import psycopg2
from datetime import datetime
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Обработка заявок на восстановление Telegram переписок
    Args: event - dict с httpMethod, body, headers
          context - object с request_id, function_name
    Returns: HTTP response dict со статусом и данными
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method == 'POST':
        body_str = event.get('body', '{}')
        data = json.loads(body_str)
        
        database_url = os.environ.get('DATABASE_URL')
        if not database_url:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Database configuration error'}),
                'isBase64Encoded': False
            }
        
        conn = psycopg2.connect(database_url)
        cursor = conn.cursor()
        
        insert_query = '''
            INSERT INTO recovery_requests 
            (user_name, user_phone, user_email, chat_type, chat_name, 
             messages_count, date_from, date_to, description, pricing_plan, status)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            RETURNING id, created_at
        '''
        
        cursor.execute(insert_query, (
            data.get('userName'),
            data.get('userPhone'),
            data.get('userEmail'),
            data.get('chatType'),
            data.get('chatName'),
            int(data.get('messagesCount', 0)) if data.get('messagesCount') else None,
            data.get('dateFrom') if data.get('dateFrom') else None,
            data.get('dateTo') if data.get('dateTo') else None,
            data.get('description'),
            data.get('pricingPlan'),
            'pending'
        ))
        
        request_id, created_at = cursor.fetchone()
        conn.commit()
        
        cursor.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'requestId': request_id,
                'createdAt': created_at.isoformat(),
                'message': 'Заявка успешно создана'
            }),
            'isBase64Encoded': False
        }
    
    if method == 'GET':
        database_url = os.environ.get('DATABASE_URL')
        if not database_url:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Database configuration error'}),
                'isBase64Encoded': False
            }
        
        conn = psycopg2.connect(database_url)
        cursor = conn.cursor()
        
        cursor.execute('''
            SELECT id, user_name, chat_type, pricing_plan, status, created_at 
            FROM recovery_requests 
            ORDER BY created_at DESC 
            LIMIT 50
        ''')
        
        rows = cursor.fetchall()
        requests = []
        for row in rows:
            requests.append({
                'id': row[0],
                'userName': row[1],
                'chatType': row[2],
                'pricingPlan': row[3],
                'status': row[4],
                'createdAt': row[5].isoformat()
            })
        
        cursor.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'requests': requests}),
            'isBase64Encoded': False
        }
    
    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Method not allowed'}),
        'isBase64Encoded': False
    }
