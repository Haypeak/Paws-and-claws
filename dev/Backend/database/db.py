from flask_sqlalchemy import SQLAlchemy
from flask import Flask

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///pawsandclaws.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Pet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    species = db.Column(db.String(50), nullable=False)
    breed = db.Column(db.String(50))
    age = db.Column(db.Integer)
    owner_id = db.Column(db.Integer, db.ForeignKey('owner.id'))
    appointments = db.Column(db.Integer, db.ForeignKey('appointments.id'))
    record_id = db.Column(db.Integer, db.ForeignKey('record.id'))

class Owner(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False, unique=True)
    password = db.Column(db.String(100), nullable=False)
    pets = db.relationship('Pet', backref='owner', lazy='dynamic')

class Record(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    description = db.Column(db.Text, nullable=False)
    vitals = db.Column(db.Text, nullable=False)
    pet_id = db.Column(db.Integer, db.ForeignKey('pet.id'))
    pet = db.relationship('Pet', backref=db.backref('records', lazy='dynamic'))

class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    time = db.Column(db.Time, nullable=False)
    description = db.Column(db.Text, nullable=False)
    pet_id = db.Column(db.Integer, db.ForeignKey('pet.id'))
    pet = db.relationship('Pet', backref=db.backref('appointments', lazy='dynamic'))
    admin_id = db.Column(db.Integer, db.ForeignKey('admin.id'))

class Admin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    password = db.Column(db.String(100), nullable=False)
    appointments = db.relationship('Appointment', backref='admin', lazy='dynamic')
    access=db.Column(db.String(50), nullable=False)
