#Web_app with flask 29.09.2021


#Module import
from flask import Flask, render_template, request
import os



app = Flask(__name__)

@app.route('/')
def index(name=None):
    return render_template('index.html', name=name)

@app.route('/dashboard')
def dash():
    return render_template('dashboard.html')

@app.route('/bot')
def stats(name=None):
    return render_template('bot.html', name=name)
