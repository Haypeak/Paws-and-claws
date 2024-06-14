from flask import Flask, render_template, url_for
from hashlib import md5
from base58 import b58encode 
from db import db,app
from api.appointments import appointments_bp  # Imported the blueprint




def hash_pass(password):
    addon = 'pn782533hdu04088fdu00234432vrertvvf'
    return md5(b58encode(password + addon)).digest()


@app.route('/login')
def login(request):
    email = request.get('email')
    password = hash_pass(request.get('password'))
    return "This is the Login page"

@app.route('/admin')
def admin():
    return "This is the admin page"

@app.route('/')
def index():
    return "This is the home page"
    # return render_template('index.html')

# Registering the blueprint with the app
app.register_blueprint(appointments_bp)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
