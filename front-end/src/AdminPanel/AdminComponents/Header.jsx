import React from 'react';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import './Styling.css'

const Header = () => {
  return (
    <header className="admin-header">
      <div className="left-section">
        <img src="../AdminAssets/PAClogo.png" alt="Admin Dashboard" className="logo" />
      </div>
      <div className="right-section">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <div className="user-info">
          <img src="/path/to/profile-pic.jpg" alt="Adaiah" className="profile-pic" />
          <span className="username">Adaiah</span>
          <FaChevronDown className="dropdown-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;