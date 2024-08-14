# # server/tests/test_pets.py
# import json
# import pytest
# from flask import Flask
# from api.pets import pets_bp
# from database.db import db, Pet

# @pytest.fixture(autouse=True, scope="session")
# def client():
#     app = Flask(__name__)
#     app.config['TESTING'] = True
#     app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
#     app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
#     app.register_blueprint(pets_bp)
#     with app.app_context():
#         db.init_app(app)
#         db.create_all()
#     yield app.test_client()

# def test_create_pet(client):
#     data = {
#         "name": "Fluffy",
#         "species": "Dog",
#         "breed":"PitBull",
#         "age": 2,
#         "owner_id": 1
#     }
#     response = client.post('/api/pets', data=json.dumps(data), content_type='application/json')
#     assert response.status_code == 201
#     assert "Pet created" in str(response.data)

# def test_get_pets(client):
#     with client.application.app_context():
#         pet = Pet(
#             name="Fluffy", 
#             species="Dog", 
#             breed="PitBull", 
#             age=2, 
#             owner_id=1
#             )
#         db.session.add(pet)
#         db.session.commit()
#     response = client.get('/api/pets')
#     assert response.status_code == 200
#     assert "Fluffy" in str(response.data)

# def test_get_pet(client):
#     with client.application.app_context():
#         pet = Pet(
#             name="Fluffy",
#             species="Dog", 
#             breed="PitBull", 
#             age=2, 
#             owner_id=1
#             )
#         db.session.add(pet)
#         db.session.commit()
#     response = client.get(f'/api/pets/{pet.id}')
#     assert response.status_code == 200
#     assert "Fluffy" in str(response.data)

# def test_update_pet(client):
#     with client.application.app_context():
#         pet = Pet(
#             name="Fluffy", 
#             species="Dog", 
#             breed="PitBull", 
#             age=2, 
#             owner_id=1
#             )
#         db.session.add(pet)
#         db.session.commit()
#     data = {
#         "name": "Fluffy",
#         "species": "Dog",
#         "breed": "PitBull",
#         "age": 3
#     }
#     response = client.put(f'/api/pets/{pet.id}', data=json.dumps(data), content_type='application/json')
#     assert response.status_code == 200
#     assert "Pet updated" in str(response.data)

# def test_delete_pet(client):
#     with client.application.app_context():
#         pet = Pet(
#             name="Fluffy", 
#             species="Dog", 
#             breed="PitBull",
#             age=2, 
#             owner_id=1
#             )
#         db.session.add(pet)
#         db.session.commit()
#     response = client.delete(f'/api/pets/{pet.id}')
#     assert response.status_code == 200
#     assert "Pet deleted" in str(response.data)