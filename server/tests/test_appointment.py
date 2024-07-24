import json
from datetime import datetime
from flask import Flask
from api.appointments import appointments_bp
from database.db import db, Appointment
import pytest

@pytest.fixture(autouse=True, scope="session")
def client():
    app = Flask(__name__)
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
    app.register_blueprint(appointments_bp)
    with app.app_context():
        db.init_app(app)
        db.create_all()
        # db.session.remove()
        # db.drop_all()
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
    with client.application.app_context():
            appointment = Appointment(
                date_time=datetime.strptime("2023-01-01 10:00:00", '%Y-%m-%d %H:%M:%S'),
                reason="Annual checkup",
                pet_id=1,
                owner_id=1,
                status='pending'
            )
            db.session.add(appointment)
            db.session.commit()
    with client.application.app_context():
        response = client.get('/api/appointments')
        assert response.status_code == 200
        assert "Annual checkup" in str(response.data)

def test_get_appointment(client):
    with client.application.app_context():
            appointment = Appointment(
                date_time=datetime.strptime("2023-01-01 10:00:00", '%Y-%m-%d %H:%M:%S'),
                reason="Annual checkup",
                pet_id=1,
                owner_id=1,
                status='pending'
            )
            db.session.add(appointment)
            db.session.commit()
    with client.application.app_context():
        response = client.get(f'/api/appointments/{appointment.id}')
        assert response.status_code == 200
        assert "Annual checkup" in str(response.data)

def test_update_appointment(client):
    with client.application.app_context():
            appointment = Appointment(
                date_time=datetime.strptime("2023-01-01 10:00:00", '%Y-%m-%d %H:%M:%S'),
                reason="Annual checkup",
                pet_id=1,
                owner_id=1,
                status='pending'
            )
            db.session.add(appointment)
            db.session.commit()
    data = {
        "date": "2023-01-01",
        "time": "10:00:00",
        "reason": "Vaccination"
    }
    with client.application.app_context():
        response = client.put(f'/api/appointments/{appointment.id}', data=json.dumps(data), content_type='application/json')
        assert response.status_code == 200
        assert "Appointment updated" in str(response.data)

def test_delete_appointment(client):
    with client.application.app_context():
        appointment = Appointment(
            date_time=datetime.strptime("2023-01-01 10:00:00", '%Y-%m-%d %H:%M:%S'),
            reason="Annual checkup",
            pet_id=1,
            owner_id=1,
            status='pending'
        )
        db.session.add(appointment)
        db.session.commit()
    with client.application.app_context():
        response = client.delete(f'/api/appointments/{appointment.id}')
        assert response.status_code == 200
        assert "Appointment deleted" in str(response.data)

# def test_get_appointments_by_pet(client):
#     with client.application.app_context():
#         appointment1 = Appointment(
#             date_time=datetime.strptime("2023-01-01 10:00:00", '%Y-%m-%d %H:%M:%S'),
#             reason="Annual checkup",
#             pet_id=1,
#             owner_id=1,
#             status="Pending"
#         )
#         appointment2 = Appointment(
#             date_time=datetime.strptime("2023-02-01 14:00:00", '%Y-%m-%d %H:%M:%S'),
#             reason="Vaccination",
#             pet_id=2,
#             owner_id=1,
#             status="Pending"
#         )
#         db.session.add(appointment1)
#         db.session.add(appointment2)
#         db.session.commit()

#     response = client.get('/api/appointments/pet/1')
#     assert response.status_code == 200
#     assert "Annual checkup" in str(response.data)
#     assert "Vaccination" not in str(response.data)

# def test_get_appointments_by_owner(client):
#     with client.application.app_context():
#         appointment1 = Appointment(
#             date_time=datetime.strptime("2023-01-01 10:00:00", '%Y-%m-%d %H:%M:%S'),
#             reason="Annual checkup",
#             pet_id=1,
#             owner_id=1,
#             status="Pending"
#         )
#         appointment2 = Appointment(
#             date_time=datetime.strptime("2023-02-01 14:00:00", '%Y-%m-%d %H:%M:%S'),
#             reason="Vaccination",
#             pet_id=2,
#             owner_id=1,
#             status="Pending"
#         )
#         db.session.add(appointment1)
#         db.session.add(appointment2)
#         db.session.commit()

#     response = client.get('/api/appointments/owner/1')
#     assert response.status_code == 200
#     assert "Annual checkup" in str(response.data)
#     assert "Vaccination" in str(response.data)