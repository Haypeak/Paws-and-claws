from flask import Blueprint, request, jsonify
from database.db import db, Record
from datetime import datetime
import json

records_bp = Blueprint('records', __name__, url_prefix='/api/records')

@records_bp.route('', methods=['POST'])
def create_record():
    data = request.get_json()
    description = data.get('description')
    date_time = datetime.now()
    pet_id = data.get('pet_id')
    vitals = data.get('vitals')
    # vet_id = data.get('vet_id') Uncomment if vet_id is needed

    # Create a new record
    record = Record(description=description, date=date_time, pet_id=pet_id, vitals=vitals)
    db.session.add(record)
    db.session.commit()

    return jsonify({'message': 'Record created'}), 201

@records_bp.route('', methods=['GET'])
def get_records():
    records = db.session.query(Record).all()
    result = []
    for record in records:
        result.append({
            'id': record.id,
            'description': record.description,
            'date': record.date,
            'pet_id': record.pet_id,
            'vitals': json.dumps(record.vitals)
        })
    return jsonify(result), 200

@records_bp.route('/<int:record_id>', methods=['GET'])
def get_record(record_id):
    record = db.session.get(Record, record_id)
    if record:
        return jsonify({
            'id': record.id,
            'description': record.description,
            'date': record.date,
            'pet_id': record.pet_id,
            'vitals': json.dumps(record.vitals)
        }), 200
    else:
        return jsonify({'message': 'Record not found'}), 404

@records_bp.route('/<int:record_id>', methods=['PUT'])
def update_record(record_id):
    record = db.session.get(Record, record_id)
    if record:
        data = request.get_json()
        description = data.get('description')
        date = data.get('date')
        vitals = data.get('vitals')
        
        # vet_id = data.get('vet_id') Uncomment if vet_id is needed

        # Update the record
        record.description = description
        record.date = datetime.now()
        db.session.commit()

        return jsonify({'message': 'Record updated'}), 200
    else:
        return jsonify({'message': 'Record not found'}), 404

@records_bp.route('/<int:record_id>', methods=['DELETE'])
def delete_record(record_id):
    record = db.session.get(Record, record_id)
    if record:
        db.session.delete(record)
        db.session.commit()
        return jsonify({'message': 'Record deleted'}), 200
    else:
        return jsonify({'message': 'Record not found'}), 404