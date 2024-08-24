// import React from 'react';
import "./AdminHeader.css";
import drawer from "../../../assets/drawer.png";
import search from "../../../assets/searchh.png";
import filter from "../../../assets/filter.png";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <div className='header-name'>
        <h3>Inventory</h3>
        <p>All Products </p><img src={drawer} alt='' />
      </div>
      <div className='searchbar'>
        <p>You have 90 items availabe in stock</p>
        <img src={search} alt='search icon' />
        <div className='search'>
          <input className='searchh' type='search' placeholder='search product' />
        </div>
        
        <div className='filter-container'><img src={filter} alt='filter icon' className='filter-icon' />
          <select className='filter'>
            <option>Filter</option>
            <option>Pet food</option>
            <option>Pet Drugs</option>
            <option>Pet accessoeries</option>
          </select>
        </div>
        <button title='new product' className='new' onClick={() => navigate('/new-product-edit')}> New product</button>
      </div>

      <div className='Inventory-container'>
            <div className='inventory-section-col'>
                <p>Action</p>
                <p>#</p>
                <p>Image</p>
                <div>
                <p>Product Name</p>
                <input type='text'/>
                </div>
                <div>
                <p>Product ID</p>
                <input type=''/>
                </div>
                <div>
                <p>Price After Tax (SP)</p>
                <input type=''/>
                </div>
                <div>
                <p>Categories</p>
                <select id="category" className='product-category'>
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
            </div>
        </div>
    </div>
  )
}

export default AdminHeader
