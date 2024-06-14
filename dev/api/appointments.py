from flask import Blueprint, request, jsonify
from db import db, Appointment
from datetime import datetime

appointments_bp = Blueprint('appointments', __name__)

@appointments_bp.route('/appointments', methods=['POST'])
def create_appointment():
    data = request.get_json()
    if not data:
        return jsonify({"message": "Request body must be in JSON format"}), 400

    try:
        # Parse the date and time from strings to datetime.date and datetime.time objects
        date_str = data.get('date')
        time_str = data.get('time')
        description = data.get('description')
        pet_id = data.get('pet_id')
        admin_id = data.get('admin_id')
        
        # email
        # pet_name
        # cell_phone_number
        # Species
        # Breed

        if not all([date_str, time_str, description, pet_id, admin_id]):
            return jsonify({"message": "Missing required fields"}), 400

        try:
            date = datetime.strptime(date_str, '%Y-%m-%d').date()
        except ValueError:
            return jsonify({"message": "Invalid date format. Use YYYY-MM-DD."}), 400

        try:
            time = datetime.strptime(time_str, '%H:%M:%S').time()
        except ValueError:
            return jsonify({"message": "Invalid time format. Use HH:MM:SS."}), 400
        
         # Create a new Appointment object
        appointment = Appointment(
            date=date,
            time=time, 
            description=description, 
            pet_id=pet_id, 
            admin_id=admin_id)


        
        # Add the new appointment to the session and commit
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
        "date": appt.date.strftime('%Y-%m-%d'),
        "time": appt.time.strftime('%H:%M:%S'),
        "description": appt.description,
        "pet_id": appt.pet_id,
        "admin_id": appt.admin_id
    } for appt in appointments]), 200

@appointments_bp.route('/appointments/<int:id>', methods=['GET'])
def get_appointment(id):
    appointment = Appointment.query.get_or_404(id)
    return jsonify({
        "id": appointment.id,
        "date": appointment.date.strftime('%Y-%m-%d'),
        "time": appointment.time.strftime('%H:%M:%S'),
        "description": appointment.description,
        "pet_id": appointment.pet_id,
        "admin_id": appointment.admin_id
    }), 200

@appointments_bp.route('/appointments/<int:id>', methods=['PUT'])
def update_appointment(id):
    appointment = Appointment.query.get_or_404(id)
    data = request.get_json()
    if not data:
        return jsonify({"message": "Request body must be in JSON format"}), 400

    try:
        date = datetime.strptime(data.get('date'), '%Y-%m-%d').date() if 'date' in data else appointment.date
        time = datetime.strptime(data.get('time'), '%H:%M:%S').time() if 'time' in data else appointment.time
        description = data.get('description') if 'description' in data else appointment.description
        pet_id = data.get('pet_id') if 'pet_id' in data else appointment.pet_id
        admin_id = data.get('admin_id') if 'admin_id' in data else appointment.admin_id
        
        appointment.date = date
        appointment.time = time
        appointment.description = description
        appointment.pet_id = pet_id
        appointment.admin_id = admin_id

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
