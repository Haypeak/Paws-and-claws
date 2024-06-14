# tests/appointment_test.py
import unittest
import json
from datetime import datetime
from flask import Flask
from dev.api.appointments import appointments_bp
from dev.db import db, Appointment

class TestAppointments(unittest.TestCase):
    def setUp(self):
        self.app = Flask(__name__)
        self.app.register_blueprint(appointments_bp)
        self.client = self.app.test_client()
        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
        self.app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
        db.init_app(self.app)
        with self.app.app_context():
            db.create_all()

    def tearDown(self):
        with self.app.app_context():
            db.session.remove()
            db.drop_all()

    def test_create_appointment(self):
        data = {
            "date": "2023-05-01",
            "time": "10:00:00",
            "description": "Annual checkup",
            "pet_id": 1,
            "admin_id": 1
        }
        response = self.client.post('/appointments', data=json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 201)
        self.assertIn("Appointment created", str(response.data))

    def test_get_appointments(self):
        appointment = Appointment(
            date=datetime.now().date(),
            time=datetime.now().time(),
            description="Annual checkup",
            pet_id=1,
            admin_id=1
        )
        db.session.add(appointment)
        db.session.commit()

        response = self.client.get('/appointments')
        self.assertEqual(response.status_code, 200)
        self.assertIn("Annual checkup", str(response.data))

    def test_get_appointment(self):
        appointment = Appointment(
            date=datetime.now().date(),
            time=datetime.now().time(),
            description="Annual checkup",
            pet_id=1,
            admin_id=1
        )
        db.session.add(appointment)
        db.session.commit()

        response = self.client.get(f'/appointments/{appointment.id}')
        self.assertEqual(response.status_code, 200)
        self.assertIn("Annual checkup", str(response.data))

    def test_update_appointment(self):
        appointment = Appointment(
            date=datetime.now().date(),
            time=datetime.now().time(),
            description="Annual checkup",
            pet_id=1,
            admin_id=1
        )
        db.session.add(appointment)
        db.session.commit()

        data = {
            "date": "2023-05-15",
            "time": "14:30:00",
            "description": "Vaccination"
        }
        response = self.client.put(f'/appointments/{appointment.id}', data=json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertIn("Appointment updated", str(response.data))

    def test_delete_appointment(self):
        appointment = Appointment(
            date=datetime.now().date(),
            time=datetime.now().time(),
            description="Annual checkup",
            pet_id=1,
            admin_id=1
        )
        db.session.add(appointment)
        db.session.commit()

        response = self.client.delete(f'/appointments/{appointment.id}')
        self.assertEqual(response.status_code, 200)
        self.assertIn("Appointment deleted", str(response.data))

if __name__ == '__main__':
    unittest.main()