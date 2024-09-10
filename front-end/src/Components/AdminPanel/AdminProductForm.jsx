import { useState, useEffect } from 'react';
import './AdminProductForm.css';
import plus from '../../assets/icons8-plus-24.png';
import equal from '../../assets/icons8-equal-48.png';
import { useNavigate, useParams } from 'react-router-dom';

const AdminProductForm = () => {
  const { productId } = useParams();
  
  const [productName, setProductName] = useState('');
  const [productIdState, setProductIdState] = useState('');
  const [id, setId] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [cost, setCost] = useState(0.00);
  const [price, setPrice] = useState(0.00);
  const [tax, setTax] = useState(0);
  const [priceAfter, setPriceAfter] = useState(0.00);
  const [quantity, setQuantity] = useState(0);
  const [productDescription, setProductDescription] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      setIsLoading(true);
      const fetchProductData = async () => {
        const getCookie = (name) => {
          const value = `; ${document.cookie}`;
          const parts = value.split(`; ${name}=`);
          if (parts.length === 2) return parts.pop().split(';').shift();
        };

        const token = getCookie('token');
        console.log('Token:', token); // Log the token

        try {
          console.log(`Fetching product data for ID: ${productId}`);
          const response = await fetch(`http://127.0.0.1:5000/admin/products/${productId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
          console.log('Response status:', response.status);
          
          if (response.ok) {
            const product = await response.json();
            console.log('Fetched product data:', product);
            
            // Set state variables
            setProductName(product.name || '');
            setProductIdState(product.id || '');
            setProductImage(product.image || null);
            setCost(product.cost || 0);
            setPrice(product.price || 0);
            setTax(product.tax || 0);
            setPriceAfter(product.price + (product.price * product.tax / 100) || 0);
            setQuantity(product.quantity || 0);
            setProductDescription(product.description || '');
            setCategory(product.category || '');
            
            console.log('State after setting:', { 
              productName, productIdState, cost, price, tax, priceAfter, quantity, productDescription, category 
            });
          } else {
            console.error('Failed to fetch product data');
            const errorText = await response.text();
            console.error('Error response:', errorText);
          }
        } catch (error) {
          console.error('Error fetching product data:', error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchProductData();
    } else {
      console.log('No productId provided, skipping fetch');
      setIsLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    const calculatedPriceAfter = price + (price * tax) / 100;
    setPriceAfter(calculatedPriceAfter);
  }, [price, tax]);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProductImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const productData = {
      productName,
      productId: productIdState,
      productImage,
      productDescription,
      cost,
      price,
      category,
      quantity,
      tax
    };

    const saveProductData = async () => {
      try {
        const getCookie = (name) => {
          const value = `; ${document.cookie}`;
          const parts = value.split(`; ${name}=`);
          if (parts.length === 2) return parts.pop().split(';').shift();
        };

        const token = getCookie('token');
        let url = 'http://127.0.0.1:5000/admin/products';
        let method = 'POST';

        if (productId) {
          url = `http://127.0.0.1:5000/admin/products/${productId}`;
          method = 'PUT';
        }

        const response = await fetch(url, {
          method,
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(productData),
        });

        if (response.ok) {
          console.log('Product data saved successfully');
          alert('Product data saved successfully');
          navigate('/inventory-page');
        } else {
          console.error('Failed to save product data');
        }
      } catch (error) {
        console.error('Error saving product data:', error);
      }
    };

    saveProductData();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className='Admin-Product-container'>
      {/* Form fields */}
      <div>
        <h4>General</h4>
        <label htmlFor="product-name">Product Name:</label>
        <input
          className='product-name'
          type="text"
          id="product-name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder='Product Name'
        />
      </div>
      <div className='id-category-product'>
        <div className='product-category-section'>
          <div className='product-category'>
            <label htmlFor="category">Category:</label>
            <select id="category" value={category} onChange={handleCategoryChange} className='product-category'>
              <option value="">Select Category</option>
              <option value="Dog Food">Dog Food</option>
              <option value="Cat Food">Cat Food</option>
              <option value="Dog Treat">Dog Treat</option>
              <option value="Cat Treat">Cat Treat</option>
              <option value="Toys">Toys</option>
              <option value="Pet Bed">Pet Bed</option>
              <option value="Clothing">Clothing</option>
              <option value="Cleaning Product">Cleaning Product</option>
              <option value="Health Care">Health Care</option>
            </select>
          </div>
        </div>
      </div>

      <div className='product-add-section'>
        <div>
          <label htmlFor="product-image">Product Image (Max file size 2MB):</label>
          <input
            className='product-image-section'
            type="file"
            id="product-image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        {productImage && (
          <div className='product-image-preview'>
            <img src={productImage} alt="Product preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          </div>
        )}
      </div>

      <div>
        <h4>Pricing</h4>
        <div>
          <label htmlFor="cost">Cost:</label>
          <input
            className='tax-category-col'
            type="number"
            id="cost"
            value={cost}
            onChange={(e) => setCost(parseFloat(e.target.value))}
          />
        </div>
        <div className='tax-category'>
          <div>
            <label htmlFor="price-before">Price Before Tax:</label>
            <input
              className='tax-category-col'
              type="number"
              id="price-before"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
          </div>
          <img src={plus} className='tax-image' alt="Plus" />
          <div>
            <label htmlFor="tax">Tax (%):</label>
            <input
              className='tax-category-col'
              type="number"
              id="tax"
              value={tax}
              onChange={(e) => setTax(parseFloat(e.target.value))}
              placeholder='VAT(12.5%)'
            />
          </div>
          <img src={equal} className='tax-image' alt="Equal" />
          <div>
            <label htmlFor="price-after">Price After Tax:</label>
            <input
              className='tax-category-col'
              type="number"
              id="price-after"
              value={priceAfter}
              readOnly
            />
          </div>
        </div>
      </div>

      <div className='stock-description-section'>
        <div>
          <h4>Quantity</h4>
          <label htmlFor="quantity">Current Stock:</label>
          <input
            className='stock-category-col'
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseFloat(e.target.value))}
          />
        </div>
        <div className='description-section'>
          <label htmlFor="product-description">Product Description:</label>
          <textarea
            className='product-form-textarea'
            id="product-description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className='product-form-button-section'>
        <button type="button" className='product-form-button' onClick={() => window.history.back()}>Back</button>
        <button type="submit" className='product-form-button'>Save</button>
      </div>
    </form>
  );
};

export default AdminProductForm;
