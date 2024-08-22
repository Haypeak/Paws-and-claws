import base64
from flask import Blueprint, request, jsonify, make_response
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from datetime import datetime, timedelta, UTC
# from flask_sqlalchemy import SQLAlchemy
from database.db import db, app, User  # Import the db instance and app from your main application file

auth_blueprint = Blueprint('auth', __name__)
app.config['SECRET_KEY'] = 'jwt-1234'

# Assuming User model is already defined and imported

@auth_blueprint.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    first_name = data['first_name'] if not None else " " 
    last_name = data['last_name'] if not None else " "
    phone_number = data['phone_number'] if not None else " " 
    address=" "
    hashed_password = generate_password_hash(data['password'])
    new_user = User(email=data['email'], password_hash=hashed_password,
                    first_name=first_name , last_name=last_name, phone_number=phone_number,
                    address=address , date_joined=datetime.now())
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'Registered successfully!'}), 201

@auth_blueprint.route('/login', methods=['POST'])
def login():
    auth = request.authorization
    if not auth or not auth.username or not auth.password:
        print(auth.username, auth.password)
        return make_response('Could not verify from start', 401, {'WWW-Authenticate': 'Basic realm="Login required!"'})
    

    user = User.query.filter_by(email=auth.username).first()
    
    if not user:
        return make_response('Could not verify this user', 401, {'WWW-Authenticate': 'Basic realm="Login required!"'})
    
    if check_password_hash(user.password_hash, auth.password):
        token = jwt.encode({
            'id': user.id, 
            'exp': datetime.now(UTC) + timedelta(hours=24)
            },
                           app.config['SECRET_KEY'], algorithm="HS256")
        return jsonify({'token': token}), 200
    
    return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required!"'})

@auth_blueprint.route('/current_user', methods=['GET'])
def current_user(token):
    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith('Bearer '):
        return jsonify({'message': 'Token is missing!'}), 401
    token = auth_header.split(' ')[1]
    try:
        data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
        user_id = data['id']
        current_user = User.query.get(user_id)
        return jsonify({
            "id": current_user.id,
            "first_name": current_user.first_name,
            "surname": current_user.last_name,
            "username" : current_user.username,
            "email" : current_user.email,
            "phone_number" : current_user.phone_number,
            "address": current_user.address,
            "date_joined": current_user.date_joined
        }), 200
    except jwt.ExpiredSignatureError:
        return jsonify({'message': 'Token has expired!'}), 401
    except jwt.InvalidTokenError:
        return jsonify({'message': 'Invalid token!'}), 401

@auth_blueprint.route('/checkloggedin', methods=['GET'])
def check_logged_in():
    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith('Bearer '):
        return jsonify({'message': 'Token is missing!'}), 401

    token = auth_header.split(' ')[1]
    try:
        data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
        user_id = data['id']
        # Perform additional checks if necessary
        return jsonify({'message': 'User is logged in'}), 200
    except jwt.ExpiredSignatureError:
        return jsonify({'message': 'Token has expired!'}), 401
    except jwt.InvalidTokenError:
        return jsonify({'message': 'Invalid token!'}), 401
