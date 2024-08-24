import os
from flask import Blueprint, jsonify, request
from werkzeug.utils import secure_filename
from database.db import *
import jwt
from functools import wraps
from werkzeug.security import generate_password_hash
import jwt
from functools import wraps
from werkzeug.security import generate_password_hash

# Create a blueprint object
# the above is a useless comment, but then why not
admins_bp = Blueprint('admins', __name__)

def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        header = request.headers.get('Authorization')
        token = header.split(' ')[1]
        if token:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
            user_id = data['id']
            try:
                user = User.query.get(user_id)
                admin = Admin.query.filter_by(user_id=user_id).first()
                if admin:
                    return f(*args, **kwargs)
                return jsonify({"message": "Admin access required"}), 403
            except Exception as e:
                print(e)
                return jsonify({"message": "User not found"}), 404
        return jsonify({"message": "Missing token"}), 401
    return decorated_function

# Define routes

@admins_bp.route('/admins', methods=['POST'])
@admin_required
def create_admin():
    data = request.get_json()
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    hashed_password = generate_password_hash(data['password'])
    phone_number = data.get('phone_number')
    address = data.get('address')
    role = data.get('role')

    if not first_name or not last_name or not username or not email or not password or not phone_number or not address or not role:
        return jsonify({"message": "Missing required fields"}), 400
    try:
        user = User.query.filter_by(email=email).first()
        if user:
            return jsonify({"message": "User already exists"}), 400
    except:
        pass
    user = User(first_name=first_name, last_name=last_name, username=username, email=email, password_hash=hashed_password, phone_number=phone_number, address=address, role='admin')
    db.session.add(user)
    if data.get('role') == 'admin':
        user.make_admin()
    db.session.commit()
 
    return jsonify({"message": "Successfully added admin"}), 201

@admins_bp.route('/admins/<int:admin_id>', methods=['PUT'])
@admin_required
def update_admin(admin_id):
    admin = Admin.query.get(admin_id)
    if not admin:
        return jsonify({"message": "Admin not found"}), 404

    data = request.get_json()
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    phone_number = data.get('phone_number')
    address = data.get('address')
    role = data.get('role')

    if not first_name or not last_name or not username or not email or not password or not phone_number or not address or not role:
        return jsonify({"message": "Missing required fields"}), 400

    user = User.query.get(admin.user_id)
    user.first_name = first_name
    user.last_name = last_name
    user.username = username
    user.email = email
    user.password = password
    user.phone_number = phone_number
    user.address = address
    user.role = role

    db.session.commit()

    return jsonify({"message": "Admin updated successfully"}), 200

@admins_bp.route('/admins/<int:admin_id>', methods=['DELETE'])
@admin_required
def delete_admin(admin_id):
    admin = Admin.query.get(admin_id)
    if not admin:
        return jsonify({"message": "Admin not found"}), 404

    user = User.query.get(admin.user_id)
    user.remove_admin()

    return jsonify({"message": "Admin deleted successfully"}), 200
    
@admins_bp.route('/admins/<int:admin_id>', methods=['GET'])
@admin_required
def get_admin(admin_id):
    try:
        admin = Admin.query.get(admin_id)
        user = User.query.get(admin.user_id)
        return jsonify({
            "id": user.id,
            "first_name": user.first_name,
            "surname": user.last_name,
            "username": user.username,
            "email": user.email,
            "address": user.address if not None else "" ,
            "phone_number": user.phone_number,
            "date_joined": user.date_joined,
            "role": user.role,
            }), 200
    except:
        return jsonify({"message": "User not found"}), 404

    
# @admins_bp.route('/orders', methods=['GET'])
# @admin_required
# def get_all_orders():
#     orders = Order.query.all()
#     order_details = []
#     for order in orders:
#         user = User.query.get(order.user_id)
#         product = Product.query.get(order.product_id)
#         order_details.append({
#             "id": order.id,
#             "user_id": user.id,
#             "user_name": f"{user.first_name} {user.last_name}",
#             "product_id": product.id,
#             "product_name": product.name,
#             "quantity": order.quantity,
#             "total_price": order.quantity * product.price,
#             "order_date": order.order_date
#         })
#     return jsonify(order_details), 200

# @admins_bp.route('/orders/<int:order_id>', methods=['GET'])
# @admin_required
# def get_single_order(order_id):
#     order = Order.query.get(order_id)
#     if order:
#         user = User.query.get(order.user_id)
#         product = Product.query.get(order.product_id)
#         return jsonify({
#             "id": order.id,
#             "user_id": user.id,
#             "user_name": f"{user.first_name} {user.last_name}",
#             "product_id": product.id,
#             "product_name": product.name,
#             "quantity": order.quantity,
#             "total_price": order.quantity * product.price,
#             "order_date": order.order_date
#         }), 200
#     return jsonify({"message": "Order not found"}), 404

# @admins_bp.route('/orders', methods=['POST'])
# @admin_required
# def create_order():
#     data = request.get_json()
#     user_id = data.get('user_id')
#     product_id = data.get('product_id')
#     quantity = data.get('quantity')

#     if not user_id or not product_id or not quantity:
#         return jsonify({"message": "Missing required fields"}), 400

#     user = User.query.get(user_id)
#     product = Product.query.get(product_id)

#     if not user or not product:
#         return jsonify({"message": "User or product not found"}), 404

#     order = Order(user_id=user_id, product_id=product_id, quantity=quantity)
#     db.session.add(order)
#     db.session.commit()

#     return jsonify({"message": "Order created successfully"}), 201

# @admins_bp.route('/orders/<int:order_id>', methods=['PUT'])
# @admin_required
# def update_order(order_id):
#     order = Order.query.get(order_id)
#     if not order:
#         return jsonify({"message": "Order not found"}), 404

#     data = request.get_json()
#     user_id = data.get('user_id')
#     product_id = data.get('product_id')
#     quantity = data.get('quantity')

#     if not user_id or not product_id or not quantity:
#         return jsonify({"message": "Missing required fields"}), 400

#     user = User.query.get(user_id)
#     product = Product.query.get(product_id)

#     if not user or not product:
#         return jsonify({"message": "User or product not found"}), 404

#     order.user_id = user_id
#     order.product_id = product_id
#     order.quantity = quantity

#     db.session.commit()

#     return jsonify({"message": "Order updated successfully"}), 200

# @admins_bp.route('/orders/<int:order_id>', methods=['DELETE'])
# @admin_required
# def delete_order(order_id):
#     order = Order.query.get(order_id)
#     if not order:
#         return jsonify({"message": "Order not found"}), 404

#     db.session.delete(order)
#     db.session.commit()

#     return jsonify({"message": "Order deleted successfully"}), 200
@admins_bp.route('/generate_report', methods=['GET'])
@admin_required
def generate_report():
    # return all the orders, products, appointments, and records
    orders = Order.query.all()
    products = Product.query.all()
    appointments = Appointment.query.all()
    records = Record.query.all()

    report = {
        "orders": [],
        "products": [],
        "appointments": [],
        "records": []
    }

    for order in orders:
        user = User.query.get(order.user_id)
        product = Product.query.get(order.product_id)
        order_details = {
            "id": order.id,
            "user": {
                "id": user.id,
                "first_name": user.first_name,
                "last_name": user.last_name
            },
            "product": {
                "id": product.id,
                "name": product.name
            },
            "quantity": order.quantity,
            "total_price": order.quantity * product.price,
            "order_date": order.order_date
        }
        report["orders"].append(order_details)

    for product in products:
        product_details = {
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "cost": product.cost,
            "tax": product.tax,
            "quantity": product.quantity,
            "category": product.category
        }
        report["products"].append(product_details)

    for appointment in appointments:
        user = User.query.get(appointment.user_id)
        appointment_details = {
            "id": appointment.id,
            "user": {
                "id": user.id,
                "first_name": user.first_name,
                "last_name": user.last_name
            },
            "date": appointment.date,
            "time": appointment.time
        }
        report["appointments"].append(appointment_details)

    for record in records:
        user = User.query.get(record.user_id)
        record_details = {
            "id": record.id,
            "user": {
                "id": user.id,
                "first_name": user.first_name,
                "last_name": user.last_name
            },
            "description": record.description,
            "date": record.date
        }
        report["records"].append(record_details)

    return jsonify(report), 200

@admins_bp.route('/users', methods=['GET'])
@admin_required
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
@admin_required
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

@admins_bp.route('/users/<int:user_id>', methods=['PUT'])
@admin_required
def update_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"message": "User not found"}), 404

    data = request.get_json()
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    phone_number = data.get('phone_number')
    address = data.get('address')
    role = data.get('role')

    if not first_name or not last_name or not username or not email or not password or not phone_number or not address or not role:
        return jsonify({"message": "Missing required fields"}), 400

    user.first_name = first_name
    user.last_name = last_name
    user.username = username
    user.email = email
    user.password = password
    user.phone_number = phone_number
    user.address = address
    user.role = role
    if role == 'admin':
        user.make_admin()
    else:
        try:
            user.remove_admin()
        except:
            pass

    db.session.commit()

    return jsonify({"message": "User updated successfully"}), 200

@admins_bp.route('/users', methods=['POST'])
@admin_required
def create_user():
    data = request.get_json()
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    hashed_password = generate_password_hash(data['password'])
    phone_number = data.get('phone_number')
    address = data.get('address')
    role = data.get('role')

    if not first_name or not last_name or not username or not email or not password or not phone_number or not address or not role:
        return jsonify({"message": "Missing required fields"}), 400

    user = User(first_name=first_name, last_name=last_name, username=username, email=email, password=password, phone_number=phone_number, address=address, role=role)
    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User created successfully"}), 201

@admins_bp.route('/users/<int:user_id>', methods=['DELETE'])
@admin_required
def delete_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"message": "User not found"}), 404

    db.session.delete(user)
    db.session.commit()

    return jsonify({"message": "User deleted successfully"}), 200

# Add more routes and functions as needed
@admins_bp.route('/products', methods=['GET'])
@admin_required
def get_all_products():
    products = Product.query.all()
    return jsonify([{
        "id": product.id,
        "name": product.name,
        "description": product.description,
        "price": product.price,
        "quantity": product.quantity,
        "cost": product.cost,
        "image": product.image_url,
        "tax": product.tax,
        "category": product.category
    } for product in products]), 200

@admins_bp.route('/products/<int:product_id>', methods=['GET'])
@admin_required
def get_single_product(product_id):
    product = Product.query.get(product_id)
    if product:
        return jsonify({
            "id": product.id,
            "name": product.name,
            "description": product.description,
            "price": product.price,
            "quantity": product.quantity,
            "cost": product.cost,
            "image": product.image_url,
            "tax": product.tax,
            "category": product.category
        }), 200
    return jsonify({"message": "Product not found"}), 404

@admins_bp.route('/products', methods=['POST'])
@admin_required
def create_product():
    data = request.get_json()
    name = data.get('name')
    description = data.get('description')
    price = data.get('price')
    quantity = data.get('quantity')
    tax = data.get('tax')
    cost = data.get('cost')
    image = data.get('image')

    if image:
        filename = secure_filename(image.filename)
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        product.image_url = filename

    if not name or not description or not price or not quantity:
        return jsonify({"message": "Missing required fields"}), 400

    product = Product(name=name, description=description, price=price, quantity=quantity, tax=tax, cost=cost)
    db.session.add(product)
    db.session.commit()

    return jsonify({"message": "Product created successfully"}), 201

@admins_bp.route('/products/<int:product_id>', methods=['PUT'])
@admin_required
def update_product(product_id):
    product = Product.query.get(product_id)
    if not product:
        return jsonify({"message": "Product not found"}), 404

    data = request.get_json()
    name = data.get('name')
    description = data.get('description')
    price = data.get('price')
    quantity = data.get('quantity')
    image = data.get('image')
    price = data.get('price')
    cost = data.get('cost')
    tax = data.get('tax')
    

    if not name or not description or not price or not quantity:
        return jsonify({"message": "Missing required fields"}), 400

    product.name = name
    product.description = description
    product.price = price
    product.quantity = quantity
    product.cost = cost
    product.tax = tax
    product.quantity = quantity
    # product.image_url = image

    db.session.commit()

    return jsonify({"message": "Product updated successfully"}), 200

@admins_bp.route('/products/<int:product_id>', methods=['DELETE'])
@admin_required
def delete_product(product_id):
    product = Product.query.get(product_id)
    if not product:
        return jsonify({"message": "Product not found"}), 404

    db.session.delete(product)
    db.session.commit()

    return jsonify({"message": "Product deleted successfully"}), 200
