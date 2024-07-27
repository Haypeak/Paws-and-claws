import json
import pytest
from flask import Flask
from api.owners import owners_bp
from database.db import db, Owner

@pytest.fixture(autouse=True, scope="session")
def client():
    app = Flask(__name__)
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
    app.register_blueprint(owners_bp)
    with app.app_context():
        db.init_app(app)
        db.create_all()
    yield app.test_client()

def test_create_owner(client):
    data = {
        "name": "Michael Ansah",
        "email": "amichael@gmail.com",
        "phone": "1234567890"
    }
    response = client.post('/api/owners', data=json.dumps(data), content_type='application/json')
    assert response.status_code == 201
    assert "Owner created" in str(response.data)

def test_get_owners(client):
    with client.application.app_context():
        owner = Owner(
            name="Michael Ansah", 
            email="amichael@gmail.com", 
            phone="1234567890"
            )
        db.session.add(owner)
        db.session.commit()
    response = client.get('/api/owners')
    assert response.status_code == 200
    assert "Michael Ansah" in str(response.data)

def test_get_owner(client):
    with client.application.app_context():
        owner = Owner(
            name="Michael Ansah", 
            email="amichael@gmail.com", 
            phone="1234567890"
            )
        db.session.add(owner)
        db.session.commit()
    response = client.get(f'/api/owners/{owner.id}')
    assert response.status_code == 200
    assert "Michael Ansah" in str(response.data)

def test_update_owner(client):
    with client.application.app_context():
        owner = Owner(
            name="Michael Ansah", 
            email="amichael@gmail.com", 
            phone="1234567890"
            )
        db.session.add(owner)
        db.session.commit()
    data = {
        "name": "Michael Ansag",
        "email": "amichael@gmail.com"
    }
    response = client.put(f'/api/owners/{owner.id}', data=json.dumps(data), content_type='application/json')
    assert response.status_code == 200
    assert "Owner updated" in str(response.data)

def test_delete_owner(client):
    with client.application.app_context():
        owner = Owner(
            name="Michael Ansah", 
            email="amichael@gmail.com", 
            phone="1234567890"
            )
        db.session.add(owner)
        db.session.commit()
    response = client.delete(f'/api/owners/{owner.id}')
    assert response.status_code == 200
    assert "Owner deleted" in str(response.data)
