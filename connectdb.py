import sqlite3 as sql
from flask_sqlalchemy import SQLAlchemy

def connection():
    conn = sql.connect('data.db')

    c= conn.cursor()

    return c, conn
