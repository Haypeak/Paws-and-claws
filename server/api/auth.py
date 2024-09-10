import base64
from flask import Blueprint, request, jsonify, make_response, current_app
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from datetime import datetime, timedelta, UTC
# from flask_sqlalchemy import SQLAlchemy
from database.db import db, app, User, JWT  # Import the db instance and app from your main application file
from werkzeug.utils import secure_filename
import os
import uuid
import hashlib
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token, get_jwt
from flask import current_app

auth_blueprint = Blueprint('auth', __name__)
app.config['SECRET_KEY'] = 'jwt-1234'

# Assuming User model is already defined and imported

jwt_redis_blocklist = set()

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
                    address=address , date_joined=datetime.now(), profile_picture=None)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'Registered successfully!'}), 201

@auth_blueprint.route('/login', methods=['POST'])
def login():
    auth_header = request.headers.get('Authorization')
    if not auth_header:
        return jsonify({"message": "Missing Authorization header"}), 401
    
    try:
        auth_type, auth_string = auth_header.split(' ', 1)
        if auth_type.lower() != 'basic':
            return jsonify({"message": "Invalid authentication type"}), 401
        
        username, password = base64.b64decode(auth_string).decode().split(':', 1)
    except (ValueError, base64.binascii.Error):
        return jsonify({"message": "Invalid Authorization header format"}), 401

    user = User.query.filter_by(email=username).first()
    
    if not user:
        return jsonify({"message": "User not found"}), 401
    
    if check_password_hash(user.password_hash, password):
        token = jwt.encode({
            'id': user.id, 
            'exp': datetime.now(UTC) + timedelta(hours=24)
        }, app.config['SECRET_KEY'], algorithm="HS256")
        return jsonify({'token': token}), 200
    
    return jsonify({"message": "Invalid credentials"}), 401

@auth_blueprint.route('/current_user', methods=['GET'])
def current_user():
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
            "date_joined": current_user.date_joined,
            "profile_picture": current_user.profile_picture
        }), 200
    except jwt.ExpiredSignatureError:
        return jsonify({'message': 'Token has expired!'}), 401
    except jwt.InvalidTokenError:
        return jsonify({'message': 'Invalid token!'}), 401

@auth_blueprint.route('/checkloggedin', methods=['GET'])
def check_logged_in():
    auth_header = request.headers.get('Authorization')
    print(auth_header)
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

@auth_blueprint.route('/update_profile_picture', methods=['POST'])
def update_profile_picture():
    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith('Bearer '):
        return jsonify({'message': 'Token is missing!'}), 401

    token = auth_header.split(' ')[1]
    try:
        data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
        user_id = data['id']
        user = User.query.get(user_id)

        if 'profile_picture' not in request.files:
            return jsonify({'message': 'No file part'}), 400
        
        file = request.files['profile_picture']
        if file.filename == '':
            return jsonify({'message': 'No selected file'}), 400
        
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)
            user.profile_picture = file_path
            db.session.commit()
            return jsonify({'message': 'Profile picture updated successfully'}), 200
        else:
            return jsonify({'message': 'File type not allowed'}), 400

    except jwt.ExpiredSignatureError:
        return jsonify({'message': 'Token has expired!'}), 401
    except jwt.InvalidTokenError:
        return jsonify({'message': 'Invalid token!'}), 401

@auth_blueprint.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    jti = get_jwt()['jti']
    jwt_redis_blocklist.add(jti)
    return jsonify({"message": "Successfully logged out"}), 200

@JWT.token_in_blocklist_loader
def check_if_token_is_revoked(jwt_header, jwt_payload: dict):
    jti = jwt_payload["jti"]
    return jti in jwt_redis_blocklist

def allowed_file(filename):
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@auth_blueprint.route('/update-profile', methods=['PUT'])
def update_profile():
    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith('Bearer '):
        return jsonify({'message': 'Token is missing!'}), 401

    token = auth_header.split(' ')[1]
    try:
        data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
        user_id = data['id']
        user = User.query.get(user_id)
    except jwt.ExpiredSignatureError:
        return jsonify({'message': 'Token has expired!'}), 401
    except jwt.InvalidTokenError:
        return jsonify({'message': 'Invalid token!'}), 401
    if not user:
        return jsonify({'message': 'User not found'}), 404

    data = request.get_json()
    
    # Update fields if they are provided in the request
    if 'first_name' in data:
        user.first_name = data['first_name']
    if 'last_name' in data:
        user.last_name = data['last_name']
    if 'phone_number' in data:
        user.phone_number = data['phone_number']
    if 'address' in data:
        user.address = data['address']
    if 'email' in data:
        user.email = data['email']
    
    # Handle profile picture update
    if 'profilePicture' in data and data['profilePicture']:
        try:
            # Decode the base64 string
            image_data = base64.b64decode(data['profilePicture'])
            
            # Generate a hash of the image data
            image_hash = hashlib.md5(image_data).hexdigest()
            
            # Generate a secure filename with the hash
            filename = secure_filename(f"profile_picture_{user_id}_{image_hash}.jpg")
            
            # Define the path to save the image
            upload_folder = current_app.config['UPLOAD_FOLDER']
            file_path = os.path.join(upload_folder, filename)
            
            # Check if the file already exists
            if not os.path.exists(file_path):
                # Save the image only if it doesn't exist
                with open(file_path, 'wb') as f:
                    f.write(image_data)
            
            # Update the user's profile picture path in the database
            if user.profile_picture != file_path:
                # Delete the old profile picture if it exists and is different
                if user.profile_picture and os.path.exists(user.profile_picture):
                    os.remove(user.profile_picture)
                user.profile_picture = file_path
            
        except Exception as e:
            print(f"Error saving profile picture: {str(e)}")
            return jsonify({'message': 'Error saving profile picture'}), 500
    db.session.add(user)
    db.session.commit()
    return jsonify({
        "firstName": user.first_name,
        "lastName": user.last_name,
        "email": user.email,
        "phoneNumber": user.phone_number,
        "address": user.address,
        "profile_picture": user.profile_picture
    }), 200
