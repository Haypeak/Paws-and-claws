import React from 'react';
import './Activities.css';
import Header from '../../AdminComponents/Header';

const MainActivities = () => {
  return (
    <> 
    <Header />
    <div className="recent-activities-page">
      <div className="header">
        <h2 className="title">Activities</h2>
      </div>
      <div className="activity-table">
        <div className="table-header">
          <div className="column">Activity</div>
          <div className="column">Date</div>
          <div className="column">Event</div>
          <div className="column">Expand</div>
          <div className="column">Team</div>
          <div className="column">Reset</div>
        </div>
        <div className="table-body">
          <div className="row">
            <div className="column">Adaiah updated product details</div>
            <div className="column">08/29/2024</div>
            <div className="column">Update</div>
            <div className="column">
              <button className="expand-btn">+</button>
            </div>
            <div className="column">Team A1</div>
            <div className="column">
              <button className="reset-btn">Reset</button>
            </div>
          </div>
          {/* Add more rows as needed */}
        </div>
      </div>
    </div>
    </>
  );
};

export default MainActivities;