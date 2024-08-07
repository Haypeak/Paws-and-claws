from flask import Flask
import json
import pytest
from datetime import datetime
from api.auth import auth_blueprint
from database.db import db, User
from werkzeug.security import generate_password_hash

@pytest.fixture(autouse=True, scope="session")
def client():
    app = Flask(__name__)
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
    app.config['SECRET_KEY'] = 'jwt-1234'
    app.register_blueprint(auth_blueprint)
    with app.app_context():
        db.init_app(app)
        db.create_all()
    yield app.test_client()

def test_register(client):
    data = {
        "username": "testuser",
        "email": "test@example.com",
        "password": "password123",
        "first_name": "Test",
        "last_name": "User",
        "phone_number": "1234567890",
        "address": "123 Test Street",
        "role": "user"
    }
    response = client.post('/register', data=json.dumps(data), content_type='application/json')
    assert response.status_code == 201
    assert "Registered successfully!" in str(response.data)

def test_login(client):
    # with client.application.app_context():
    #     hashed_password = generate_password_hash("password123")
    #     # user = User(
    #     #     username="testuser",
    #     #     email="test@example.com",
    #     #     password_hash=hashed_password,
    #     #     first_name="Test",
    #     #     last_name="User",
    #     #     phone_number="1234567890",
    #     #     address="123 Test Street",
    #     #     role="user",
    #     #     date_joined=datetime.now()
    #     # )
    #     # db.session.add(user)
    #     # db.session.commit()
    
    data = {
        "username": "testuser",
        "password": "password123"
    }
    response = client.post('/login', auth=(data['username'], data['password']))
    assert response.status_code == 200
    assert "token" in json.loads(response.data)

def test_invalid_login(client):
    data = {
        "username": "wronguser",
        "password": "wrongpassword"
    }
    response = client.post('/login', auth=(data['username'], data['password']))
    assert response.status_code == 401
    assert "Could not verify" in str(response.data)

# Assuming auth.py handles user authentication (login, registration)
# Test Cases: Register, Login, Invalid Login.