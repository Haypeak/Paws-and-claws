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
    hashed_password = generate_password_hash(data['password'])
    new_user = User(username=data['username'], email=data['email'], password_hash=hashed_password,
                    first_name=data['first_name'], last_name=data['last_name'], phone_number=data['phone_number'],
                    address=data['address'], role=data['role'], date_joined=datetime.now())
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'Registered successfully!'}), 201

@auth_blueprint.route('/login', methods=['POST'])
def login():
    auth = request.authorization
    if not auth or not auth.username or not auth.password:
        return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required!"'})
    
    user = User.query.filter_by(username=auth.username).first()
    
    if not user:
        return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required!"'})
    
    if check_password_hash(user.password_hash, auth.password):
        token = jwt.encode({
            'id': user.id, 
            'exp': datetime.now(UTC) + timedelta(hours=24)
            },
                           app.config['SECRET_KEY'], algorithm="HS256")
        return jsonify({'token': token})
    
    return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required!"'})