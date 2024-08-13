import React from 'react';
import './UserManagement.css';

const UserManagement = () => {
  return (
    <div className="user-management">
      <div className="header">
        <h2>User Management</h2>
      </div>
      <div className="user-list">
        <div className="user-item">
          <div className="user-avatar">
            <img src="/path/to/user1-avatar.jpg" alt="Adaiah" />
          </div>
          <div className="user-info">
            <h3>Adaiah Ohenewaa</h3>
            <p className="role">Admin</p>
          </div>
          <div className="user-actions">
            <button className="btn btn-primary">Update</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
        <div className="user-item">
          <div className="user-avatar">
            <img src="/path/to/user2-avatar.jpg" alt="Yaa" />
          </div>
          <div className="user-info">
            <h3>Yaa Adu</h3>
            <p className="role">Team A1</p>
          </div>
          <div className="user-actions">
            <button className="btn btn-primary">Update</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
        {/* Add more user items as needed */}
      </div>
    </div>
  );
};

export default UserManagement;