from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/admin')
def admin(request):
    return "This is the admin page"

@app.route('/')
def index():
    return "This is the home page"
    # return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
