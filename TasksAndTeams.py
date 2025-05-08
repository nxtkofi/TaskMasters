from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)
DATABASE = 'database.db'

def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

# Endpoint tworzenia zespołu
@app.route('/api/teams', methods=['POST'])
def create_team():
    data = request.get_json()
    team_name = data.get('name')
    if not team_name:
        return jsonify({'message': 'Nazwa zespołu jest wymagana'}), 400

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('INSERT INTO teams (name) VALUES (?)', (team_name,))
    conn.commit()
    team_id = cur.lastrowid
    conn.close()

    return jsonify({'message': 'Zespół utworzony', 'team_id': team_id}), 201

# Endpoint dodawania zadania
@app.route('/api/tasks', methods=['POST'])
def create_task():
    data = request.get_json()
    title = data.get('title')
    description = data.get('description', '')
    points = data.get('points', 0)
    team_id = data.get('team_id')
    pr_link = data.get('pr_link', '')

    if not title or not team_id:
        return jsonify({'message': 'Tytuł zadania i team_id są wymagane'}), 400

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('INSERT INTO tasks (title, description, points, team_id, pr_link, status) VALUES (?, ?, ?, ?, ?, ?)',
                (title, description, points, team_id, pr_link, 'Open'))
    conn.commit()
    task_id = cur.lastrowid
    conn.close()

    return jsonify({'message': 'Zadanie dodane', 'task_id': task_id}), 201

if __name__ == '__main__':
    # Przy pierwszym uruchomieniu utworzyć tabele jeśli nie istnieją
    conn = get_db_connection()
    conn.execute('''
        CREATE TABLE IF NOT EXISTS teams (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )
    ''')
    conn.execute('''
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            points INTEGER DEFAULT 0,
            team_id INTEGER,
            pr_link TEXT,
            status TEXT DEFAULT 'Open',
            FOREIGN KEY(team_id) REFERENCES teams(id)
        )
    ''')
    conn.commit()
    conn.close()
    app.run(debug=True, port=5001)
