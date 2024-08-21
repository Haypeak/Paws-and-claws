import React from 'react';
import "./AdminHeader.css";
import drawer from "../../assets/drawer.png";
import search from "../../assets/searchh.png";
import filter from "../../assets/filter.png";

const AdminHeader = () => {
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
          <input className='searchh' type='searchh' placeholder='search product' />
        </div>
        
        <div className='filter-container'><img src={filter} alt='filter icon' className='filter-icon' />
          <select className='filter'>
            <option>Filter</option>
            <option>Pet food</option>
            <option>Pet Drugs</option>
            <option>Pet accessoeries</option>
          </select>
        </div>
        <button title='new product' className='new'> New product</button>
      </div>
    </div>
  )
}

export default AdminHeader
