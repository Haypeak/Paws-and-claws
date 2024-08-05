from flask import Flask
import json
import pytest
from api.records import records_bp
from database.db import db, Record

@pytest.fixture(autouse=True, scope="session")
def client():
    app = Flask(__name__)
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
    app.register_blueprint(records_bp)
    with app.app_context():
        db.init_app(app)
        db.create_all()
    yield app.test_client()

def test_create_record(client):
    data = {
        "description": "Annual checkup",
        "date": "2023-01-01",
        "pet_id": 1,
      #  "vet_id": 1 let's say it's needed.
    }
    response = client.post('/api/records', data=json.dumps(data), content_type='application/json')
    assert response.status_code == 201
    assert "Record created" in str(response.data)

def test_get_records(client):
    with client.application.app_context():
        record = Record(
            description="Annual checkup", 
            date="2023-01-01", 
            pet_id=1, 
            #vet_id=1
            )
        db.session.add(record)
        db.session.commit()
    response = client.get('/api/records')
    assert response.status_code == 200
    assert "Annual checkup" in str(response.data)

def test_get_record(client):
    with client.application.app_context():
        record = Record(
            description="Annual checkup", 
            date="2023-01-01", 
            pet_id=1, 
            #vet_id=1
            )
        db.session.add(record)
        db.session.commit()
    response = client.get(f'/api/records/{record.id}')
    assert response.status_code == 200
    assert "Annual checkup" in str(response.data)

def test_update_record(client):
    with client.application.app_context():
        record = Record(
            description="Annual checkup", 
            date="2023-01-01", 
            pet_id=1, 
            #vet_id=1
            )
        db.session.add(record)
        db.session.commit()
    data = {
        "description": "Vaccination",
        "date": "2023-01-01"
    }
    response = client.put(f'/api/records/{record.id}', data=json.dumps(data), content_type='application/json')
    assert response.status_code == 200
    assert "Record updated" in str(response.data)

def test_delete_record(client):
    with client.application.app_context():
        record = Record(
            description="Annual checkup", 
            date="2023-01-01", 
            pet_id=1, 
            #vet_id=1
            )
        db.session.add(record)
        db.session.commit()
    response = client.delete(f'/api/records/{record.id}')
    assert response.status_code == 200
    assert "Record deleted" in str(response.data)


# Assuming records.py handles pet medical records
# Test Cases: Create, Read, Update, Delete operations for records.