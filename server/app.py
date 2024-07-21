from flask import Flask, render_template, send_from_directory, url_for
from hashlib import md5
from base58 import b58encode 
from database.db import db,app
from api.auth import auth_blueprint
from api.appointments import appointments_bp  # Imported the blueprint




# def hash_pass(password):
#     addon = 'pn782533hdu04088fdu00234432vrertvvf'
#     return md5(b58encode(password + addon)).digest()


# @app.route('/login')
# def login(request):
#     email = request.get('email')
#     password = hash_pass(request.get('password'))
#     return "This is the Login page"

@app.route('/admin')
def admin():
    return "This is the admin page"

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
  '''Return index.html for all non-api routes'''
  #pylint: disable=unused-argument
  return send_from_directory(app.static_folder, 'index.html')

# Registering the blueprint with the app
app.register_blueprint(appointments_bp)
app.register_blueprint(auth_blueprint, url_prefix='/auth')

if __name__ == '__main__':
    # with app.app_context():
    #     db.create_all()
    app.run(debug=True)
