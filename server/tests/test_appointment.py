# tests/test_appointment.py
import json
from datetime import datetime
from flask import Flask
from api.appointments import appointments_bp
from database.db import db, Appointment
import pytest

@pytest.fixture
def client():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.register_blueprint(appointments_bp)
    with app.app_context():
        db.init_app(app)
        db.create_all()
    yield app.test_client() 

def test_create_appointment(client):
    data = {
        "date": "2023-01-01",
        "time": "10:00:00",
        "reason": "Checkup",
        "pet_id": 1,
        "owner_id": 1,
        "status": "Pending"
    }
    response = client.post('/api/appointments', data=json.dumps(data), content_type='application/json')
    assert response.status_code == 201
    assert "Appointment created" in str(response.data)

def test_get_appointments(client):
    app = Flask(__name__)
    app.register_blueprint(appointments_bp)
    client = app.test_client()
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    with app.app_context():
        db.create_all()

    appointment = Appointment(
        date_time=datetime.strptime("2023-01-01 10:00:00", '%Y-%m-%d %H:%M:%S'),
        reason="Annual checkup",
        pet_id=1,
        owner_id=1,
        status="Pending"
    )
    db.session.add(appointment)
    db.session.commit()

    response = client.get('/api/appointments')
    assert response.status_code == 200
    assert "Annual checkup" in str(response.data)

def test_get_appointment(client):
    app = Flask(__name__)
    app.register_blueprint(appointments_bp)
    client = app.test_client()
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    with app.app_context():
        db.create_all()

    appointment = Appointment(
        date_time=datetime.strptime("2023-01-01 10:00:00", '%Y-%m-%d %H:%M:%S'),
        reason="Annual checkup",
        pet_id=1,
        owner_id=1
    )
    db.session.add(appointment)
    db.session.commit()

    response = client.get(f'/api/appointments/{appointment.id}')
    assert response.status_code == 200
    assert "Annual checkup" in str(response.data)

def test_update_appointment(client):
    app = Flask(__name__)
    app.register_blueprint(appointments_bp)
    client = app.test_client()
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    with app.app_context():
        db.create_all()

    appointment = Appointment(
        date_time=datetime.strptime("2023-01-01 10:00:00", '%Y-%m-%d %H:%M:%S'),
        reason="Annual checkup",
        pet_id=1,
        owner_id=1
    )
    db.session.add(appointment)
    db.session.commit()

    data = {
        "date": "2023-01-01",
        "time": "10:00:00",
        "description": "Vaccination"
    }
    response = client.put(f'/api/appointments/{appointment.id}', data=json.dumps(data), content_type='application/json')
    assert response.status_code == 200
    assert "Appointment updated" in str(response.data)

def test_delete_appointment():
    app = Flask(__name__)
    app.register_blueprint(appointments_bp)
    client = app.test_client()
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    with app.app_context():
        db.create_all()

    appointment = Appointment(
        date_time=datetime.strptime("2023-01-01 10:00:00", '%Y-%m-%d %H:%M:%S'),
        reason="Annual checkup",
        pet_id=1,
        owner_id=1
    )
    
    db.session.add(appointment)
    db.session.commit()

    response = client.delete(f'/api/appointments/{appointment.id}')
    assert response.status_code == 200
    assert "Appointment deleted" in str(response.data)