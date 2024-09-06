from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from database.db import db, Pet, User


pets = Blueprint('pets', __name__)

@pets.route('/api/pets', methods=['GET'])
@jwt_required()
def get_user_pets():
    current_user_id = get_jwt_identity()
    user_pets = Pet.query.filter_by(user_id=current_user_id).all()
    return jsonify([pet.to_dict() for pet in user_pets]), 200

@pets.route('/api/pets', methods=['POST'])
@jwt_required()
def add_pet():
    current_user_id = get_jwt_identity()
    data = request.get_json()

    new_pet = Pet(
        name=data['name'],
        species=data['species'],
        breed=data['breed'],
        age=data['age'],
        user_id=current_user_id
    )

    db.session.add(new_pet)
    db.session.commit()

    return jsonify(new_pet.to_dict()), 201

@pets.route('/api/pets/<int:pet_id>', methods=['PUT'])
@jwt_required()
def update_pet(pet_id):
    current_user_id = get_jwt_identity()
    pet = Pet.query.filter_by(id=pet_id, user_id=current_user_id).first()

    if not pet:
        return jsonify({"message": "Pet not found or you don't have permission to edit this pet"}), 404

    data = request.get_json()
    pet.name = data.get('name', pet.name)
    pet.species = data.get('species', pet.species)
    pet.breed = data.get('breed', pet.breed)
    pet.age = data.get('age', pet.age)

    db.session.commit()

    return jsonify(pet.to_dict()), 200

@pets.route('/api/pets/<int:pet_id>', methods=['DELETE'])
@jwt_required()
def delete_pet(pet_id):
    current_user_id = get_jwt_identity()
    pet = Pet.query.filter_by(id=pet_id, user_id=current_user_id).first()

    if not pet:
        return jsonify({"message": "Pet not found or you don't have permission to delete this pet"}), 404

    db.session.delete(pet)
    db.session.commit()

    return jsonify({"message": "Pet deleted successfully"}), 200
