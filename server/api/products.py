from flask import Flask, request, render_template, redirect
from flask_sqlAlchemy import SQLALchemy
from datetime import datetime, timezone
from database import db

app = Flask(__name__)
app.config['SQLACHEMY_DATABASE_URI'] = "sqlite:///test.db"
db = SQLALchemy(app)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Numeric(10, 2), nullable=False)
    stock_quantity = db.Column(db.Integer, nullable=False)
    category = db.Column(db.String(255), nullable=False)
    image_url = db.Column(db.String(200), nullable=True)
    date_created = db.Column(db.DateTime, default = datetime.now(timezone.utc))

    def __ref__(self):
        return '<Task %r>' % self.id
    
    @app.route('/Admin', methods=['POST','GET'])

    def index():

        if request.method == 'POST':
            product_name = request.form['name']
            product_price = request.form['price']
            product_quantity = request.form['stock_quantity']
            product_description = request.form['description']
            product_category = request.form['category']

            new_product = Product(content = product_name)
            new_product = Product(content = product_price)
            new_product = Product(content = product_quantity)
            new_product = Product(content = product_description)
            new_product = Product(content = product_category)
           
            #push to database
            try:
                db.session.add(new_product)
                db.session.commit()
                return redirect('/Admin')
            except:
                return "There was an issue adding new product"
            
            else: 
                products = Product.query.order_by(Product.date_created).all()
                return render_template('/Admin', products=products)

@app.route('/delete/<int:id>')
def delete(id):
    product_to_delete = Product.query.get_or_404(id)

    try:
        db.session.delete(product_to_delete)
        db.session.commit()
        return redirect('/Admin')
    except:
        return "Could not delete product"
    
    
@app.route('/update/<int:id>', methods=['GET','POST'])
def update(id):
    product  = Product.query.get_or_404(id)
    if request.method == 'POST':
        product.name = request.form['name']
        product.price = request.form['price']
        product.quantity = request.form['stock_quantity']
        product.description = request.form['description']
        product.category = request.form['category']

        try:
            db.session.commit()
            return redirect('/Admin')
        except:
            return "There was an issue updating this product"
    else:
        return render_template('/Admin', product=product )
    
if __name__ == "main__":
    app.run(debug=True)