import sqlite3

conn = sqlite3.connect('database.db')
cursor = conn.cursor()

cursor.execute(''' 
    CREATE TABLE IF NOT EXISTS mensagens 
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email, TEXT,
    mensagem TEXT
    )
''')
conn.commit()
conn.close()