import sqlite3 as sql

def connection():
    conn = sql.connect('data.db')

    c= conn.cursor()

    return c, conn
