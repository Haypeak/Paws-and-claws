from flask import Blueprint, jsonify

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

# Add more routes and functions as needed

# @admins_bp.route('')
