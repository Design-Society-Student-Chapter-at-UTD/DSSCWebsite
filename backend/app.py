from flask import Flask, jsonify
import psycopg2
import sys
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

def connect_db():
    conn = psycopg2.connect(
        dbname=os.getenv('DB_NAME'),
        user=os.getenv('DB_USER'),
        password=os.getenv('DB_PASSWORD'),
        host=os.getenv('DB_HOST'),
        port=os.getenv('DB_PORT')
    )
    return conn

def create_table():
    conn = connect_db()
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS students (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            class_standing TEXT NOT NULL
        )
    """)
    conn.commit()
    cur.close()
    conn.close()

def insert_data(name, class_standing):
    conn = connect_db()
    cur = conn.cursor()
    cur.execute("INSERT INTO students (name, class_standing) VALUES (%s, %s)", (name, class_standing))
    conn.commit()
    cur.close()
    conn.close()
    print(f"Inserted: {name}, {class_standing}")

@app.route('/')
def hello():
    return "Hello! Use the terminal to input data."

@app.route('/users')
def get_users():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("SELECT id, username, email FROM users;")
    users = cursor.fetchall()
    
    cursor.close()
    conn.close()

    return jsonify([{'id': user[0], 'username': user[1], 'email': user[2]} for user in users])

@app.route('/add_user/<username>/<email>')
def add_user(username, email):
    conn = connect_db()
    cursor = conn.cursor()
    
    cursor.execute("INSERT INTO users (username, email) VALUES (%s, %s);", (username, email))
    conn.commit()
    
    cursor.close()
    conn.close()

    return f"User {username} added successfully!"

if __name__ == '__main__':
    create_table()
    if len(sys.argv) > 1 and sys.argv[1] == 'input':
        while True:
            name = input("Enter name (or 'q' to quit): ")
            if name.lower() == 'q':
                break
            class_standing = input("Enter class standing: ")
            insert_data(name, class_standing)
    else:
        app.run(debug=True)