from flask_wtf import Form
from wtforms import StringField, TextField

class SA(Form):
	question = TextField('Enter a question')
	response = TextField('Enter a response here')
