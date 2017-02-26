from flask import Flask, render_template, request, url_for, redirect
from connectdb import connection
from wtforms import Form

app = Flask(__name__)

@app.route('/')
def homepage():
	return render_template("home.html")

@app.route('/index/')
def index():
	return "Hi"

@app.route('/questions/', methods=['GET','POST'])
def question_form():

	if request.method == "POST":
		submitted_form = request.form['question']
	return render_template("questions.html")

class questionnaire(Form):
	question = TextField('Enter a question')
	response = TextField('Enter a response here')

@app.route('/form/', methods=['GET','POST'])
def connect_db():
	try:
		c, conn = connection()
		return ("test")

	except Exception as e:
		return(str(e))


if __name__ == "__main__":
	app.run()
