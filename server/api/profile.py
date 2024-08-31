from flask import Blueprint, render_template, request, redirect, url_for, session, flash
from werkzeug.utils import secure_filename
import os
from database.db import db, User
from flask_login import current_user, login_required

profile_blueprint = Blueprint('profile', __name__)

# Ensure you configure your upload folder and allowed extensions
UPLOAD_FOLDER = 'static/uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@profile_blueprint.route('/profile', methods=['GET'])
@login_required
def profile():
    return render_template('profile.html')

@profile_blueprint.route('/profile/edit', methods=['POST'])
@login_required
def edit_profile():
    user = User.query.get(current_user.id)
    
    if 'profile_image' in request.files:
        file = request.files['profile_image']
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(UPLOAD_FOLDER, filename))
            user.profile_image = os.path.join(UPLOAD_FOLDER, filename)
    
    user.first_name = request.form['first_name']
    user.last_name = request.form['last_name']
    user.address = request.form['address']
    
    db.session.commit()
    flash('Profile updated successfully!')
    return redirect(url_for('profile.profile'))

@profile_blueprint.route('/unsubscribe', methods=['POST'])
@login_required
def unsubscribe():
    user = User.query.get(current_user.id)
    user.subscribed = False
    db.session.commit()
    return redirect(url_for('profile.profile'))

@profile_blueprint.route('/logout')
@login_required
def logout():
    from flask_login import logout_user
    logout_user()
    return redirect(url_for('auth.login'))

