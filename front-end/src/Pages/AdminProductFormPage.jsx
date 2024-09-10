import React from 'react';
import { useParams } from 'react-router-dom';
import AdminProductForm from '../Components/AdminPanel/AdminProductForm';

const AdminProductFormPage = () => {
	const { productId } = useParams();
	
	console.log('ProductId from URL:', productId); // Add this line for debugging

	return (
		<div>
			<h1>{productId ? 'Edit Product' : 'Add New Product'}</h1>
			<AdminProductForm productId={productId} />
		</div>
	);
};

export default AdminProductFormPage;