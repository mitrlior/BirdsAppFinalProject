import sqlite3

connection = sqlite3.connect('data.db')
cursor = connection.cursor()

create_table = "Create TABLE IF NOT EXISTS\
    users (user_id INTEGER PRIMARY KEY,\
        username text(20) NOT NULL UNIQUE, \
        password text(16) NOT NULL,\
        first_name text(20) NOT NULL, \
        last_name text(20) NOT NULL, \
        email text(30) NOT NULL UNIQUE,\
        user_type INTEGER NOT NULL\
        )"
        
cursor.execute(create_table)
connection.commit()
connection.close()

