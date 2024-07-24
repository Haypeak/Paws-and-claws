from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from datetime import datetime, UTC

app = Flask(__name__, static_folder='../../front-end/dist', static_url_path='/')

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///pawsandclaws.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Pet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    species = db.Column(db.String(255), nullable=False)
    breed = db.Column(db.String(255), nullable=False)
    age = db.Column(db.Integer, nullable=True)
    medical_history = db.Column(db.Text, nullable=True)
    # vaccinations = db.relationship('PetVaccination', backref='pet', lazy=True)
    appointments = db.relationship('Appointment', backref='pet', lazy=True)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), unique=True, nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(255), nullable=False)
    last_name = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)
    address = db.Column(db.Text, nullable=True)
    role = db.Column(db.String(50), nullable=False, default='user')
    date_joined = db.Column(db.DateTime, default=datetime.now(UTC))
    last_login = db.Column(db.DateTime, nullable=True)
    subscribed = db.Column(db.Boolean, default=False, nullable=True)
    show_newsletter_prompt = db.Column(db.Boolean, default=True, nullable=False)
    pets = db.relationship('Pet', backref='owner', lazy=True)
    appointments = db.relationship('Appointment', backref='owner', lazy=True)
    notifications = db.relationship('Notification', backref='user', lazy=True)
    feedback = db.relationship('Feedback', backref='user', lazy=True)

class Record(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    description = db.Column(db.Text, nullable=False)
    vitals = db.Column(db.Text, nullable=False)
    pet_id = db.Column(db.Integer, db.ForeignKey('pet.id'))
    # pet = db.relationship('Pet', backref=db.backref('records', lazy='dynamic'))

class Notification(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    message = db.Column(db.Text, nullable=False)
    date_sent = db.Column(db.DateTime, default=datetime.now(UTC))
    read = db.Column(db.Boolean, default=False)


class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey('pet.id'), nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    date_time = db.Column(db.DateTime, nullable=False)
    reason = db.Column(db.Text, nullable=False)
    status = db.Column(db.String(50), nullable=False)

@db.validates('status')
def validate_status(self, key, value):
    # set_values = ['confirmed','completed', 'canceled']
    set_values = ['pending','confirmed', 'canceled']
    if str(value.lower()) not in set_values:
        raise ValueError("Invalid status, try again")
    return value

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Numeric(10, 2), nullable=False)
    stock_quantity = db.Column(db.Integer, nullable=False)
    category = db.Column(db.String(255), nullable=False)
    image_url = db.Column(db.String(200), nullable=True)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    date_placed = db.Column(db.DateTime, default=datetime.now(UTC))
    status = db.Column(db.String(50), nullable=False)
    total_amount = db.Column(db.Numeric(10, 2), nullable=False)
    items = db.relationship('OrderItem', backref='order', lazy=True)

class OrderItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Numeric(10, 2), nullable=False)

# class Vaccination(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(255), nullable=False)
#     description = db.Column(db.Text, nullable=False)
#     recommended_age = db.Column(db.Integer, nullable=False)
#     price = db.Column(db.Numeric(10, 2), nullable=False)
#     pet_vaccinations = db.relationship('PetVaccination', backref='vaccination', lazy=True)

class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    message = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    date_submitted = db.Column(db.DateTime, default=datetime.now(UTC))
    
# class PetVaccination(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     pet_id = db.Column(db.Integer, db.ForeignKey('pet.id'), nullable=False)
#     vaccination_id = db.Column(db.Integer, db.ForeignKey('vaccination.id'), nullable=False)
#     date_administered = db.Column(db.DateTime, nullable=False)
#     administered_by_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
