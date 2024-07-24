from flask import Blueprint, request, jsonify
from database.db import db, Appointment, Pet, User
from datetime import datetime

appointments_bp = Blueprint('appointments', __name__, url_prefix='/api')

@appointments_bp.route('/appointments', methods=['POST'])
def create_appointment():
    data = request.get_json()
    if not data:
        return jsonify({"message": "Request body must be in JSON format"}), 400

    try:
        datetime_str = f"{data.get('date')} {data.get('time')}"
        datetime_obj = datetime.strptime(datetime_str, '%Y-%m-%d %H:%M:%S')
        reason = data.get('reason')
        pet_name = data.get('pet_name')
        pet_breed = data.get('Breed')
        pet_species = data.get('pet_species')
        owner_first_name = data.get('owner_first_name')
        owner_last_name = data.get('owner_last_name')
        owner_email = data.get('email')
        owner_name = data.get('owner_name')
        status = data.get('status', 'Pending')  # Default status

        if not all([datetime_obj, reason, pet_name, pet_breed, pet_species, owner_email, owner_name, status]):
            return jsonify({"message": "Missing required fields"}), 400
        
        user = User(
            first_name=owner_first_name, 
            last_name=owner_last_name,  
            email=data.get('email'),
            address=data.get('address'),
            phone_number=data.get('phone_number')
        )
        pet = Pet(
            owner_id=user.id,
            pet_name=pet_name,
            pet_breed=pet_breed,
            pet_species=pet_species
        )
        
        owner_id = User.query.get({'email': owner_email}).first().id
        pet_id = Pet.query.get({'pet_name': pet_name}).first().id
        if not pet_id.exists():
            db.session.add(pet)
            db.commit()
            
        pet_id = Pet.query.get({'pet_name': pet_name, 'owner_id': owner_id}).first().id
        appointment = Appointment(
            date_time=datetime_obj,
            reason=reason,
            pet_id=pet_id,
            owner_id=owner_id,
            status=status
        )

        db.session.add(appointment)
        db.session.commit()

        return jsonify({"message": "Appointment created", "appointment": appointment.id}), 201

    except ValueError as e:
        return jsonify({"message": "Invalid date or time format"}), 400
    except Exception as e:
        return jsonify({"message": str(e)}), 500

@appointments_bp.route('/appointments', methods=['GET'])
def get_appointments():
    appointments = Appointment.query.all()
    return jsonify([{
        "id": appt.id,
        "pet_id": appt.pet_id,
        "owner_id": appt.owner_id,
        "date_time": appt.date_time.strftime('%Y-%m-%d %H:%M:%S'),
        "reason": appt.reason,
        "status": appt.status
    } for appt in appointments]), 200

@appointments_bp.route('/appointments/<int:id>', methods=['GET'])
def get_appointment(id):
    appointment = Appointment.query.get_or_404(id)
    return jsonify({
        "id": appointment.id,
        "date_time": appointment.date_time.strftime('%Y-%m-%d %H:%M:%S'),
        "reason": appointment.reason,
        "pet_id": appointment.pet_id,
        "owner_id": appointment.owner_id,
        "status": appointment.status
    }), 200

@appointments_bp.route('/appointments/<int:id>', methods=['PUT'])
def update_appointment(id):
    appointment = Appointment.query.get_or_404(id)
    data = request.get_json()

    if not data:
        return jsonify({"message": "Request body must be in JSON format"}), 400

    try:
        if 'date' in data and 'time' in data:
            datetime_str = f"{data.get('date')} {data.get('time')}"
            appointment.date_time = datetime.strptime(datetime_str, '%Y-%m-%d %H:%M:%S')

        appointment.reason = data.get('reason', appointment.reason)
        appointment.pet_id = data.get('pet_id', appointment.pet_id)
        appointment.owner_id = data.get('owner_id', appointment.owner_id)
        appointment.status = data.get('status', appointment.status)

        db.session.commit()

        return jsonify({"message": "Appointment updated"}), 200

    except ValueError:
        return jsonify({"message": "Invalid date or time format"}), 400
    except Exception as e:
        return jsonify({"message": str(e)}), 500

@appointments_bp.route('/appointments/<int:id>', methods=['DELETE'])
def delete_appointment(id):
    appointment = Appointment.query.get_or_404(id)
    db.session.delete(appointment)
    db.session.commit()
    return jsonify({"message": "Appointment deleted"}), 200