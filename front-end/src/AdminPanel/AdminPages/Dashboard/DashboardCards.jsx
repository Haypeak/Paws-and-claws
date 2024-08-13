import React from 'react';
import { FaUser, FaBoxOpen, FaEdit, FaTrashAlt } from 'react-icons/fa';

const DashboardCards = () => (
  <div className="dashboard-cards">
    <div className="card">
      <FaUser />
      <div>
        <h3>Customers</h3>
        <p>123</p>
      </div>
    </div>
    <div className="card">
      <FaBoxOpen />
      <div>
        <h3>Add Product</h3>
        <p>12</p>
      </div>
    </div>
    <div className="card">
      <FaEdit />
      <div>
        <h3>Update</h3>
        <p>54</p>
      </div>
    </div>
    <div className="card">
      <FaTrashAlt />
      <div>
        <h3>Delete</h3>
        <p>3</p>
      </div>
    </div>
  </div>
);

export default DashboardCards;
