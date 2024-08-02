from flask import Blueprint, request, jsonify, current_app
from flask_mail import Message, Mail
from database.db import db, User
from apscheduler.schedulers.background import BackgroundScheduler
import requests

newsletter_bp = Blueprint('newsletter_bp', __name__)
mail = Mail()

@newsletter_bp.route('/debug-subscribed')
def debug_subscribed():
    users = User.query.all()
    user_data = [{"email": user.email, "subscribed": user.subscribed} for user in users]
    return jsonify(user_data)

@newsletter_bp.route('/subscribe', methods=['POST'])
def newsletter_signup():
    print('Subscribing to newsletter')
    data = request.get_json()
    email = data.get('email')
    
    if not email:
        return jsonify({'error': 'Email is required'}), 400
    
    user = User.query.filter_by(email=email).first()
    
    if user:
        if user.subscribed:
            return jsonify({'error': 'Already subscribed'}), 400
        else:
            user.subscribed = True
    else:
        user = User(email=email, subscribed=True)
        db.session.add(user)
    
    db.session.commit()
    confirm_newsletter_signup(email)
    return jsonify({'message': 'You have successfully signed up for the newsletter'}), 201

def confirm_newsletter_signup(email):
    msg = Message('Newsletter Subscription Confirmation',
                  sender='your_email@gmail.com', 
                  recipients=[email])
    msg.body = 'You have successfully signed up for the newsletter.'
    try:
        mail.send(msg)
    except Exception as e:
        print(f"Error sending email: {e}")

@newsletter_bp.route('/unsubscribe', methods=['POST'])
def newsletter_unsubscribe():
    data = request.get_json()
    email = data.get('email')
    
    if not email:
        return jsonify({'error': 'Email is required'}), 400
    
    user = User.query.filter_by(email=email).first()
    
    if not user:
        return jsonify({'error': 'User not found'}), 404
    
    if not user.subscribed:
        return jsonify({'error': 'User is not subscribed'}), 400
    
    user.subscribed = False
    db.session.commit()
    confirm_newsletter_unsubscribe(email)
    return jsonify({'message': 'You have successfully unsubscribed from the newsletter'}), 200

def confirm_newsletter_unsubscribe(email):
    msg = Message('Newsletter Unsubscription Confirmation',
                  sender='your_email@gmail.com', 
                  recipients=[email])
    msg.body = 'You have successfully unsubscribed from the newsletter.'
    try:
        mail.send(msg)
    except Exception as e:
        print(f"Error sending email: {e}")

def send_newsletters():
    with current_app.app_context():
        try:
            response = requests.get('https://api.api-ninjas.com/v1/facts?limit=1', headers={'X-Api-Key': 'your_api_key'})
            response.raise_for_status()
            fact = response.json()[0]['fact']
        except requests.RequestException as e:
            print(f"Error fetching fact: {e}")
            return

        # Compose the newsletter
        subject = 'Weekly Newsletter'
        body = f"Here are some interesting facts about animals:\n\n{fact}"

        subscribers = User.query.filter_by(subscribed=True).all()
        for subscriber in subscribers:
            msg = Message(subject, sender='your_email@gmail.com', recipients=[subscriber.email])
            msg.body = body
            try:
                mail.send(msg)
            except Exception as e:
                print(f"Error sending email to {subscriber.email}: {e}")

@newsletter_bp.route('/send', methods=['POST'])
def send_custom_newsletter():
    data = request.get_json()
    subject = data.get('subject')
    body = data.get('body')

    if not subject or not body:
        return jsonify({'error': 'Subject and body are required'}), 400
    
    subscribers = User.query.filter_by(subscribed=True).all()

    for subscriber in subscribers:
        msg = Message(subject, sender='your_email@gmail.com', recipients=[subscriber.email])
        msg.body = body
        try:
            mail.send(msg)
        except Exception as e:
            print(f"Error sending email to {subscriber.email}: {e}")

    return jsonify({'message': 'Newsletters sent successfully'}), 200
