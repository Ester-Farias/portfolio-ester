from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/enviar', methods=['POST'])
def enviar():
    nome = request.form['nome']
    email = request.form['email']
    mensagem = request.form['mensagem']

    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('INSERT INTO mensagens (nome, email, mensagem) VALUES (?, ?, ?)',
                   (nome, email, mensagem))
    conn.commit()
    conn.close()

    return 'Mensagem enviada com sucesso!'

if __name__ == '__main__':
    app.run()