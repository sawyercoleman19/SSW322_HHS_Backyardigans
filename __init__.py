from flask import Flask, render_template, request, url_for, redirect
from flask_bootstrap import Bootstrap
from flask_wtf import Form
from wtforms.validators import InputRequired
from connectdb import connection
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
Bootstrap(app)
db = SQLAlchemy(app)

class Question(db.Model):
	QuestionID = db.Column(db.Integer, primary_key = True)
	question = db.Column(db.String())
	answer = db.Column(db.String())
class CreateSA(Form):
	question = TextField('Enter a question', validators = [InputRequired()])

class CreateTF(Form):
	question = TextField('Enter a question', validators = [InputRequired()])

class Essay(Form):
	question = TextField('Enter a question', validators = [InputRequired()])

@app.route('/')
def homepage():
	return render_template("home.html")

@app.route('/index/')
def index():
	return "Hi"

@app.route('/questions/', methods=['GET','POST'])
def questions():

	if request.method == "POST":
		submitted_form = request.form['question']
	return render_template("questions.html")

@app.route('/form/', methods=['GET','POST'])
def connect_db():
	try:
		c, conn = connection()
		return ("test")

	except Exception as e:
		return(str(e))


if __name__ == "__main__":
	app.run()
