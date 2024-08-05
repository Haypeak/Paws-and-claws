from flask import Blueprint, jsonify
from database.db import *

# Create a blueprint object
admins_bp = Blueprint('admins', __name__)

# Define routes
@admins_bp.route('/admins', methods=['GET'])
def get_admins():
    admins = [
        {'id': 1, 'name': 'John Doe'},
        {'id': 2, 'name': 'Jane Smith'}
    ]
    return jsonify(admins)

@admins_bp.route('/admins/<int:admin_id>', methods=['GET'])
def get_admin(admin_id):
    admin = {'id': admin_id, 'name': 'John Doe'}
    return jsonify(admin)

@admins_bp.route('/users', methods=['GET'])
def get_all_users():
    users = User.query.all()
    return jsonify([{
        "id": user.id,
        "first_name": user.first_name,
        "surname": user.last_name,
        "username" : user.username,
        "email" : user.email,
        "phone_number" : user.phone_number,
        "address": user.address,
        "role": user.role,
        "date_joined": user.date_joined
    } for user in users]), 200

@admins_bp.route('/users/<int:user_id>', methods=['GET'])
def get_single_user(user_id):
    user = User.query.get(user_id)
    if user:
        return jsonify({
            "id": user.id,
            "first_name": user.first_name,
            "surname": user.last_name,
            "username" : user.username,
            "email" : user.email,
            "phone_number" : user.phone_number,
            "address": user.address,
            "role": user.role,
            "date_joined": user.date_joined
        }), 200
    return jsonify({"message": "User not found"}), 404
# Add more routes and functions as needed

# @admins_bp.route('')
