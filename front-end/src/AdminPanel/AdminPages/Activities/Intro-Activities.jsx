import React from 'react';
import './Activities.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RecentActivities = () => {
  const navigate = useNavigate();

  const handleSeeAll = () => {
    navigate('/admin-activities');
  };
  return(
  <div className="recent-activities">
    <div className="header">
      <h3 className="section-title">Recent Activities</h3>
      <div className="see-all-link">
      <button onClick={handleSeeAll}>See All Activities</button>
      </div>
    </div>
    <div className="activity-list">
      <div className="activity-item">
        <div className="user-avatar">
          <img src="/path/to/user1-pic.jpg" alt="Adaiah" />
        </div>
        <div className="activity-details">
          <p className="activity-text">Adaiah updated product details</p>
        </div>
      </div>
      <div className="activity-item">
        <div className="user-avatar">
          <img src="/path/to/user2-pic.jpg" alt="Yaa" />
        </div>
        <div className="activity-details">
          <p className="activity-text">Yaa created a new product</p>
        </div>
      </div>
      <div className="activity-item">
        <div className="user-avatar">
          <img src="/path/to/user3-pic.jpg" alt="Yaa" />
        </div>
        <div className="activity-details">
          <p className="activity-text">Yaa created a new product</p>
        </div>
      </div>
      <div className="activity-item">
        <div className="user-avatar">
          <img src="/path/to/user3-pic.jpg" alt="Yaa" />
        </div>
        <div className="activity-details">
          <p className="activity-text">Yaa created a new product</p>
        </div>
      </div>
      <div className="activity-item">
        <div className="user-avatar">
          <img src="/path/to/user3-pic.jpg" alt="Yaa" />
        </div>
        <div className="activity-details">
          <p className="activity-text">Yaa created a new product</p>
        </div>
      </div>
    </div>
  </div>
  );
};
export default RecentActivities;