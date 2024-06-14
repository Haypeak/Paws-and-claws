from flask import Flask
from db import db  # Import the db object (not app)
from api.appointments import appointments_bp  # Import the blueprint

app = Flask(__name__)

# Configure the app
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///pawsandclaws.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the database with the app
db.init_app(app)

@app.route('/admin')
def admin():
    return "This is the admin page"

@app.route('/')
def index():
    return "This is the home page"
    # return render_template('index.html')

# Register the blueprint with the app
app.register_blueprint(appointments_bp)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
