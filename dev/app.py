from flask import Flask

app = Flask(__name__)

@app.route('/admin')
def admin(request):
    return ""

@app.route('/')
def admin(request):
    return ""

if __name__ == '__main__':
    app.run(debug=True)
