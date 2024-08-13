import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUser, FaEnvelope, FaListAlt, FaBox, FaPencilAlt, FaSignOutAlt, FaChevronRight, FaBars } from 'react-icons/fa';
import './Styling.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="logo">
          <img src="/path/to/logo.png" alt="Logo" />
        </div>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
      <ul>
        <li>
          <Link to="/admin/dashboard">
            <FaTachometerAlt />
          Dashboard
          <FaChevronRight />
        </Link>
      </li>
      <li>
        <Link to="/admin/customers">
          <FaUser />
          User
          <FaChevronRight />
        </Link>
      </li>
      <li>
        <Link to="/admin/messages">
          <FaEnvelope />
          Messages
          <FaChevronRight />
        </Link>
      </li>
      <li>
        <Link to="/admin-activities">
          <FaListAlt />
          Activities
          <FaChevronRight />
        </Link>
      </li>
      <li>
        <Link to="/admin/inventory">
          <FaBox />
          Inventory
          <FaChevronRight />
        </Link>
      </li>
      <li>
        <Link to="/admin/post">
          <FaPencilAlt />
          Post
          <FaChevronRight />
        </Link>
      </li>
      <li>
        <Link to="/admin/logout">
          <FaSignOutAlt />
          SIGN OUT
          <FaChevronRight />
        </Link>
      </li>
    </ul>
  </div>
);
};
export default Sidebar;