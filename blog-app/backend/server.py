from flask import Flask
from flaskext.mysql import MySQL
from src import *;

app = Flask(__name__)

mysql = MySQL()

app.config['MYSQL_DATABASE_USER'] = 'admin'
# app.config['MYSQL_DATABASE_PASSWORD'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'blog'
app.config['MYSQL_DATABASE_HOST'] = 'localhost:3306'
mysql.init_app(app)

@app.route('/signup', methods=["PUT"])
def userSignUp():
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO blog.login (user, password) VALUES ('" +  + "', '" +  + "'); ")

