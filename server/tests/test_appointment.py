import json
from datetime import datetime
from flask import Flask, jsonify
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

def test_create_and_get_appointment(client):
    with client.application.app_context():
        # Create an appointment
        appointment = Appointment(
            date_time=datetime.strptime("2025-01-01 10:00", '%Y-%m-%d %H:%M'),
            reason="General",
            pet_id=1,
            owner_id=1,
            status='confirmed',
            notes='',
            appointmentType='Home'
        )
        db.session.add(appointment)
        db.session.commit()
        db.session.refresh(appointment)

        # Ensure the appointment is not None
        assert appointment is not None, "Appointment creation failed, appointment is None"

        # Retrieve the appointment to ensure it was created
        retrieved_appointment = Appointment.query.filter_by(id=appointment.id).first()
        assert retrieved_appointment is not None, "Failed to retrieve the appointment from the database"
        assert retrieved_appointment.date_time == appointment.date_time, "Date time mismatch"

    with client.application.app_context():
        # Make a GET request to retrieve the appointment
        response = client.get(f'/api/appointments/{appointment.id}')
        assert response.status_code == 200, f"Expected status code 200, got {response.status_code}"
        assert "General" in str(response.data), "Expected 'General' in response data"

def test_create_appointment(client):
    data = {
        # "date_time": datetime.strptime("2023-01-01 10:00", '%Y-%m-%d %H:%M'),
        "date": "2025-01-01", 
        "time": "11:00",
        "reason": "General",
        "petName": 'jack',
        "Breed": 'doberman',
        "species": 'dog',
        "firstName": 'michael',
        "surname": 'jordan',
        "email": 'mike23jordan@nbamail.com',
        "phoneNumber": '1234567890',
        "status": "confirmed",
        "notes": " ",
        "appointmentType": "Home"
    }
    with client.application.app_context():
        response = client.post('/api/appointments', data=json.dumps(data), content_type='application/json')
        print(response.data)
        assert response.status_code == 201
        assert "Appointment created" in str(response.data)

def test_get_appointments(client):
    with client.application.app_context():
            appointment = Appointment(
                date_time=datetime.strptime("2025-01-01 10:00", '%Y-%m-%d %H:%M'),
                reason="General",
                pet_id=1,
                owner_id=1,
                status='confirmed',
                notes='',
                appointmentType='Home'
            )
            db.session.add(appointment)
            db.session.commit()
            db.session.refresh(appointment)
    with client.application.app_context():
        response = client.get('/api/appointments')
        assert response.status_code == 200
        assert "General" in str(response.data)

def test_get_appointment(client):
    with client.application.app_context():
            appointment = Appointment(
                date_time=datetime.strptime("2025-01-01 10:00", '%Y-%m-%d %H:%M'),
                reason="General",
                pet_id=1,
                owner_id=1,
                status='confirmed',
                notes='',
                appointmentType='Home'
            )
            db.session.add(appointment)
            db.session.commit()
            db.session.refresh(appointment)
    with client.application.app_context():
        response = client.get(f'/api/appointments/{appointment.id}')
        assert response.status_code == 200
        assert "General" in str(response.data)

def test_update_appointment(client):
    with client.application.app_context():
            appointment = Appointment(
                date_time=datetime.strptime("2025-01-01 10:00", '%Y-%m-%d %H:%M'),
                reason="General",
                pet_id=1,
                owner_id=1,
                status='confirmed',
                notes='',
                appointmentType='Home'
            )
            db.session.add(appointment)
            db.session.commit()
            db.session.refresh(appointment)
    data = {
        "date": "2025-01-01",
        "time": "12:00:00",
        "reason": "Vaccination"
    }
    with client.application.app_context():
        response = client.put(f'/api/appointments/{appointment.id}', data=json.dumps(data), content_type='application/json')
        assert response.status_code == 200
        assert "Appointment updated" in str(response.data)

def test_delete_appointment(client):
    with client.application.app_context():
        appointment = Appointment(
            date_time=datetime.strptime("2025-01-01 10:00", '%Y-%m-%d %H:%M'),
            reason="General",
            pet_id=1,
            owner_id=1,
            status='confirmed',
            notes='',
            appointmentType='Home'
        )
        db.session.add(appointment)
        db.session.commit()
        db.session.refresh(appointment)
    with client.application.app_context():
        response = client.delete(f'/api/appointments/{appointment.id}')
        assert response.status_code == 200
        assert "Appointment deleted" in str(response.data)

# def test_get_appointments_by_pet(client):
#     with client.application.app_context():
#         appointment1 = Appointment(
#             date_time=datetime.strptime("2023-01-01 10:00:00", '%Y-%m-%d %H:%M:%S'),
#             reason="General",
#             pet_id=1,
#             owner_id=1,
#             status="confirmed"
#         )
#         appointment2 = Appointment(
#             date_time=datetime.strptime("2023-02-01 14:00:00", '%Y-%m-%d %H:%M:%S'),
#             reason="Vaccination",
#             pet_id=2,
#             owner_id=1,
#             status="confirmed"
#         )
#         db.session.add(appointment1)
#         db.session.add(appointment2)
#         db.session.commit()
#         db.session.refresh(appointment1)
#         db.session.refresh(appointment2)

#     response = client.get('/api/appointments/pet/1')
#     assert response.status_code == 200
#     assert "General" in str(response.data)
#     assert "Vaccination" not in str(response.data)

# def test_get_appointments_by_owner(client):
#     with client.application.app_context():
#         appointment1 = Appointment(
#             date_time=datetime.strptime("2023-01-01 10:00:00", '%Y-%m-%d %H:%M:%S'),
#             reason="General",
#             pet_id=1,
#             owner_id=1,
#             status="confirmed"
#         )
#         appointment2 = Appointment(
#             date_time=datetime.strptime("2023-02-01 14:00:00", '%Y-%m-%d %H:%M:%S'),
#             reason="Vaccination",
#             pet_id=2,
#             owner_id=1,
#             status="confirmed"
#         )
#         db.session.add(appointment1)
#         db.session.add(appointment2)
#         db.session.commit()
#         db.session.refresh(appointment1)
#         db.session.refresh(appointment2)

#     response = client.get('/api/appointments/owner/1')
#     assert response.status_code == 200
#     assert "General" in str(response.data)
#     assert "Vaccination" in str(response.data)