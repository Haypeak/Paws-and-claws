// Inventory Component
import React from 'react';
import './Inventory.css';

const Inventory = () => {
  return (
    <div className="inventory">
      <div className="header">
        <h2>Inventory</h2>
        <button className="btn btn-primary">Add Product</button>
      </div>
      <div className="inventory-table">
        <div className="table-header">
          <div className="column">Product ID</div>
          <div className="column">Product Name</div>
          <div className="column">Price</div>
          <div className="column">Current Stock</div>
          <div className="column">Actions</div>
        </div>
        <div className="table-body">
          <div className="row">
            <div className="column">D01</div>
            <div className="column">Protein Drink</div>
            <div className="column">$4.99</div>
            <div className="column">50</div>
            <div className="column">
              <button className="btn btn-primary">Update</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
          {/* Add more rows as needed */}
        </div>
      </div>
    </div>
  );
};

export default Inventory;

// // Inventory.jsx
// import React, { useState, useEffect } from 'react';

// const Inventory = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch the initial list of products
//     fetchProducts();
//   }, []);

//   const fetchProducts = () => {
//     // Fetch the product data from an API or a backend service
//     const initialProducts = [
//       // Sample product data
//       { id: 'D01', name: 'Protein Drink', price: 4.99, stock: 50 },
//       // Add more products as needed
//     ];
//     setProducts(initialProducts);
//   };

//   const handleAddProduct = (newProduct) => {
//     // Add the new product to the list of products
//     setProducts([...products, newProduct]);
//   };

//   return (
//     <div className="inventory">
//       <div className="header">
//         <h2>Inventory</h2>
//         <button className="btn btn-primary">Add Product</button>
//       </div>
//       <div className="inventory-table">
//         {/* Render the table of products */}
//         {products.map((product) => (
//           <div key={product.id} className="row">
//             <div className="column">{product.id}</div>
//             <div className="column">{product.name}</div>
//             <div className="column">{product.price}</div>
//             <div className="column">{product.stock}</div>
//             <div className="column">
//               <button className="btn btn-primary">Update</button>
//               <button className="btn btn-danger">Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Inventory;