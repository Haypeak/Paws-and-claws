
// import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './AdminProductForm.css';
import plus from '../../assets/icons8-plus-24.png';
  import equal from '../../assets/icons8-equal-48.png';


  // const isAdminAuthenticated = localStorage.getItem('adminAuthenticated');

  // if (!isAdminAuthenticated) {
  //   return <Navigate to="/admin-login" />;
  // }

  
  
  const AdminProductForm = () => {
    const [productName, setProductName] = useState('');
    const [productId, setProductId] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [cost, setCost] = useState(0);
    const [priceBefore, setPriceBefore] = useState(0);
    const [tax, setTax] = useState(0);
    const [priceAfter, setPriceAfter] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [productDescription, setProductDescription] = useState('');
    const [category, setCategory] = useState('');
  
    const handleFileChange = (event) => {
      setProductImage(event.target.files[0]);
    };
  
    const handleCategoryChange = (event) => {
      setCategory(event.target.value);
    };
  
    // Calculate price after tax whenever priceBefore or tax changes
    useEffect(() => {
      const calculatedPriceAfter = priceBefore + (priceBefore * tax / 100);
      setPriceAfter(calculatedPriceAfter);
    }, [priceBefore, tax]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      //  form submission logic
      console.log({
        productName,
        productId,
        productImage,
        cost,
        priceBefore,
        tax,
        priceAfter,
        quantity,
        productDescription,
        category,
      });
    };
  
    return (
      <form onSubmit={handleSubmit} className='Admin-Product-container'>
        <div>
          <h4>General</h4>
          <label htmlFor="product-id">Product Name:</label>
          <input
            className='product-name'
            type="text"
            id="product-name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder='product name'
          />
        </div>
        <div className='id-category-product'> 
          <div className='id-category-section'>
            <label htmlFor="product-id">Product ID:</label>
            <input
              className='id-category'
              type="text"
              id="product-id"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              placeholder='001'
            />
          </div>
          
          <div className='product-category-section'>
            <div className='product-category'>
              <label htmlFor="category">Category:</label>
              <select id="category" value={category} onChange={handleCategoryChange} className='product-category'>
                <option value="">Select Category</option>
                <option value="category1">Dog Food</option>
                <option value="category2">Cat Food</option>
                <option value="category3">Dog Treat</option>
                <option value="category3">Cat Treat</option>
                <option value="category3">Toys</option>
                <option value="category3">Pet Bed</option>
                <option value="category3">Clothing</option>
                <option value="category3">Cleaning Product</option>
                <option value="category3">Health Care</option>
              </select>
            </div>
            <button type="button" onClick={() => setCategory('Add Caterogry')} className='product-category-button'>
              Add Category
            </button>
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
          <div style={{marginTop:'28px'}}>
            <h5>Default</h5>
            <label className="container">
              <input type="radio" checked="checked" name="radio"/>
              <span className="checkmark"></span>
            </label>
          </div>
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
              <label htmlFor="price-before">Price before tax:</label>
              <input
                className='tax-category-col'
                type="number"
                id="price-before"
                value={priceBefore}
                onChange={(e) => setPriceBefore(parseFloat(e.target.value))}
              />
            </div>
            <img src={plus} className='tax-image'/>
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
            <img src={equal} className='tax-image'/>
            <div>
              <label htmlFor="price-after">Price after tax:</label>
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
            <label htmlFor="product-description" >Product Description:</label>
            <textarea 
              className='product-form-textarea'
              id="product-description"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        
        <div className='product-form-button-section'>
          <button type="submit" className='product-form-button'>Back</button>
          <button type="submit" className='product-form-button'>Save</button>
        </div>
      </form>
    );
  };
  
  export default AdminProductForm;
  