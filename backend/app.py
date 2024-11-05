from flask import Flask
import psycopg2
import sys

app = Flask(__name__)

# Database connection parameters
DB_NAME = "your_database_name"
DB_USER = "your_username"
DB_PASSWORD = "your_password"
DB_HOST = "localhost"
DB_PORT = "5432"

def connect_db():
    return psycopg2.connect(
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT
    )

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