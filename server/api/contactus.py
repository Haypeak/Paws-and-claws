# contactus.py
from flask import Blueprint, request, jsonify, current_app
from database.db import db, Feedback  # Ensure db is imported correctly
from flask_mail import Message
import logging

contactus_blueprint = Blueprint('contactus', __name__)

@contactus_blueprint.route('/send-message', methods=['POST'])
def send_message():
    from app import mail  # Import mail here to avoid circular import

    print('Received a message')
    print(request.form)
    
    try:
        name = request.form['Name']
        email = request.form['Email']
        message_content = request.form['Message']
    except KeyError as e:
        return jsonify({'error': f'Missing field: {str(e)}'}), 400

    user_id = request.form.get('user_id')

    if not name or not email or not message_content:
        return jsonify({'error': 'All fields are required: name, email, message'}), 400

    # Save the message to the database
    new_message = Feedback(name=name, email=email, content=message_content)
    db.session.add(new_message)
    db.session.commit()

    # Send the email to the owner
    try:
        msg = Message(
            subject=f"Message from {name} {email} via contact us", 
            sender = current_app.config['MAIL_USERNAME'],
            recipients=['adipahosei@gmail.com'],  # Replace with the owner's email
            body=f"Message: {message_content}\n\nFrom: {name}\nEmail: {email}"
        )
        mail.send(msg)
    except Exception as e:
        logging.error(f"Failed to send email: {str(e)}")
        return jsonify({'error': 'Failed to send email'}), 500

    return jsonify({'message': 'Message sent successfully!'}), 200
