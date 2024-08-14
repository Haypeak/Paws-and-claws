import React, { useState } from 'react';
import './Inventory.css';

const AddProduct = () => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState('');
  const [tax, setTax] = useState('');
  const [priceAfterTax, setPriceAfterTax] = useState('');
  const [quantity, setQuantity] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="add-product-page">
      <div className="header">
        <h2>Add New Product</h2>
      </div>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label htmlFor="product-id">Product ID</label>
          <input
            type="text"
            id="product-id"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="product-image">Product Image</label>
          <input type="file" id="product-image" onChange={handleImageUpload} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tax">Tax (%)</label>
          <input
            type="number"
            id="tax"
            value={tax}
            onChange={(e) => setTax(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price-after-tax">Price After Tax</label>
          <input
            type="number"
            id="price-after-tax"
            value={priceAfterTax}
            onChange={(e) => setPriceAfterTax(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="product-description">Product Description</label>
          <textarea
            id="product-description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button type="button" className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;


// // AddProduct.jsx
// import React, { useState } from 'react';

// const AddProduct = ({ onAddProduct }) => {
//   // Form state and logic

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//     const newProduct = {
//       id: productId,
//       name: productName,
//       price: parseFloat(price),
//       stock: parseInt(quantity),
//       // Add other product properties as needed
//     };
//     onAddProduct(newProduct);
//     // Reset the form fields
//     resetForm();
//   };

//   const resetForm = () => {
//     // Reset the form fields
//   };

//   return (
//     <div className="add-product-page">
//       {/* Render the add product form */}
//     </div>
//   );
// };

// export default AddProduct;