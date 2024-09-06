import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminProductForm from '../../AdminPanel/AdminProductForm'; // Adjust the import path
import './Inventory.css';
import deleteIcon from '../../../assets/delete.png';
import pencil from '../../../assets/icons8-pencil-48.png';

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      const defaultProducts = [
        {
          productId: '001',
          productName: 'Dog Food',
          productImage: 'https://via.placeholder.com/150',
          priceAfter: 20.00,
          category: 'Dog Food'
        },
        {
          productId: '002',
          productName: 'Cat Toy',
          productImage: 'https://via.placeholder.com/150',
          priceAfter: 15.00,
          category: 'Toys'
        }
      ];
      setProducts(defaultProducts);
      localStorage.setItem('products', JSON.stringify(defaultProducts));
    }
  }, []);
  useEffect(() => {
    const fetchProductData = async () => {
          const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        };

        const token = getCookie('token'); // Assuming the token is stored in a cookie named 'token'

        try {
          const response = await fetch('http://127.0.0.1:5000/admin/products',{
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}` // Include the token in the Authorization header
            }
          }
          );
          if (response.ok) {
            const products = await response.json();
            // console.log(products)
            setProducts(products)
          } else {
            console.error('Failed to fetch product data');
          }
        } catch (error) {
          console.error('Error fetching product data:', error);
        }
      };
    fetchProductData();
  }, []);

  const handleSave = (productData) => {
    const updatedProducts = products.map((product) =>
      product.productId === productData.id ? productData : product
    );
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setEditingProductId(null); // Reset editing state
    navigate('/inventory-page'); // Navigate back to inventory after saving
  };

  const handleEdit = (productId) => {
    console.log('Editing product with ID:', productId); // Add this line for debugging
    navigate(`/admin-product-form/${productId}`);
  };

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(product => product.productId !== productId);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <div>
      {editingProductId && (
        <AdminProductForm 
          onSave={handleSave} 
          productId={editingProductId} 
        />
      )}
      <div className='inventory-container'>
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map((product, index) => (
            <div key={product.id} className='inventory-item'>
              <div className='action-btn-btn'>
                <button onClick={() => handleEdit(product.id)} className='action-btn'><img src={pencil} className='action-btn-img' alt='Edit' /></button>
                <button onClick={() => handleDelete(product.id)} className='action-btn'><img src={deleteIcon} className='action-btn-img' alt='Delete' /></button>
              </div>
              <p>{product.id}</p>
              <img src={product.image} alt={product.name} className='inventory-image' />
              <p>{product.name}</p>
              <p>{product.id}</p>
              <p>${Number(product.price + (product.price * product.tax)).toFixed(2)}</p>
              <p>{product.category}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Inventory;
