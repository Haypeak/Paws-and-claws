from flask import Flask, render_template, send_from_directory, url_for, request
from flask_mail import Mail, Message
from apscheduler.schedulers.background import BackgroundScheduler
from api.auth import auth_blueprint
from api.appointments import appointments_bp  # Imported the blueprint
from api.admins import admins_bp
from api.newsletters import newsletter_bp, send_newsletters
from database.db import app, db, User  # Ensure the app instance is imported correctly
from flask_cors import CORS, cross_origin

# Configuring the Flask application
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'your_email@gmail.com'  # Replace with vet email
app.config['MAIL_PASSWORD'] = 'your_password'  # Replace with your vet password

cors = CORS(app)
mail = Mail(app)
mail.init_app(app)

# Creating a scheduler
scheduler = BackgroundScheduler()
scheduler.add_job(func=lambda: send_newsletters(app, mail), trigger='interval', weeks=1)
scheduler.start()

# Routes for the application
@app.route('/admin')
def admin():
    return "This is the admin page"

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    '''Return index.html for all non-api routes'''
    return send_from_directory(app.static_folder, 'index.html')

# Registering the blueprints with the app
app.register_blueprint(appointments_bp)
app.register_blueprint(auth_blueprint, url_prefix='/auth')
app.register_blueprint(admins_bp, url_prefix='/admin')
app.register_blueprint(newsletter_bp, url_prefix='/newsletters')



# Starting the Flask application
if __name__ == '__main__':
    app.run('127.0.0.1',5000, debug=True)
