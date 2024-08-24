import { useState } from 'react';
import AdminProductForm from '../../AdminPanel/AdminProductForm';
import Inventory from '../InventorySection/Inventory';

const ProductManagement = () => {
  const [productData, setProductData] = useState(null);

  const handleProductSave = (data) => {
    console.log('Setting product data:', data);
    setProductData(data);
  };

  return (
    <div>
      <AdminProductForm onSave={handleProductSave} />
      {/* Conditionally render Inventory with productData */}
      {productData && <Inventory productData={productData} />}
    </div>
  );
};

export default ProductManagement;
