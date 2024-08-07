from flask import Blueprint, request, jsonify
from database.db import db, Appointment, Pet, User
from datetime import datetime, timedelta

appointments_bp = Blueprint('appointments', __name__, url_prefix='/api')

def check_appointment(datetime_obj):
    if datetime_obj < datetime.now():
        appt_status = "pending"
        return jsonify({"message": "Appointment date must be in the future"}), 400
    already_booked = Appointment.query.filter_by(date_time=datetime_obj).first()
    if already_booked:
        appt_status = "pending"        
        return jsonify({"message": "Appointment already booked"}), 400
    appt_status = 'confirmed'
    return appt_status
    

@appointments_bp.route('/appointments', methods=['POST'])
def create_appointment():
    data = request.get_json()
    # print(data)
    if not data:
        return jsonify({"message": "Request body must be in JSON format"}), 400

    try:
        datetime_str = f"{data.get('date')} {data.get('time')}"
        datetime_obj = datetime.strptime(datetime_str, '%Y-%m-%d %H:%M')
        check_appointment(datetime_obj)
        reason = data.get('reason')
        pet_name = data.get('petName')
        pet_breed = data.get('Breed')
        pet_species = data.get('species')
        owner_first_name = data.get('firstName')
        owner_last_name = data.get('surname')
        owner_email = data.get('email')
        owner_phone_number = data.get('phoneNumber')
        notes = data.get('notes')
        appointmentType = data.get('appointmentType')
        already_booked = Appointment.query.filter_by(date_time=datetime_obj).first()
        last_booked = Appointment.query.order_by(Appointment.id.desc()).filter("date_time" != 'null').first()
        if datetime_obj < datetime.now():
            status = "pending"
            return jsonify({"message": "Appointment date must be in the future"}), 400
        elif already_booked:
            status = "pending"        
            return jsonify({"message": "Appointment already booked"}), 400
        elif last_booked.date_time > datetime_obj and last_booked.date_time - datetime_obj < timedelta(hours=1):
            status = "pending"        
            return jsonify({"message": "Appointment already booked"}), 400
        elif last_booked.date_time < datetime_obj and datetime_obj - last_booked.date_time < timedelta(hours=1):
            status = "pending"        
            return jsonify({"message": "Appointment already booked"}), 400
        else:
            status = 'confirmed'
        # status = 'confirmed'  # Default status
        # if check_appointment(datetime_obj) != None:
        #     status = 'confirmed'  # Default status

        if not all([datetime_obj, reason, pet_name, pet_breed, pet_species, owner_email, owner_phone_number, status]):
            return jsonify({"message": "Missing required fields"}), 400
        status = str(check_appointment(datetime_obj))
        if status == 'pending':
            return jsonify({'message': "Date is already booked"}), 400
        user = User(
            first_name=owner_first_name, 
            last_name=owner_last_name,  
            email=owner_email,
            phone_number=owner_phone_number
        )

        owner = User.query.filter_by(email=owner_email).first()
        if owner is None:
            db.session.add(user)
            db.session.commit()
            owner_id = user.id
        else:
            owner_id = owner.id

        pet = Pet(
            owner_id=owner_id,
            name=pet_name,
            breed=pet_breed,
            species=pet_species
        )

        existing_pet = Pet.query.filter_by(name=pet_name, owner_id=owner_id).first()
        if existing_pet is None:
            db.session.add(pet)
            db.session.commit()
            pet_id = pet.id
        else:
            pet_id = existing_pet.id

        appointment = Appointment(
            date_time=datetime_obj,
            reason=reason,
            pet_id=pet_id,
            owner_id=owner_id,
            status=status,
            appointmentType=appointmentType,
            notes=notes
        )

        db.session.add(appointment)
        db.session.commit()

        return jsonify({"message": "Appointment created", "appointment": appointment.id}), 201

    except ValueError as e:
        return jsonify({"message": "Invalid date or time format"}), 400
    except Exception as e:
        print(e)
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
        "notes": appt.notes,
        "appointmentType": appt.appointmentType,
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