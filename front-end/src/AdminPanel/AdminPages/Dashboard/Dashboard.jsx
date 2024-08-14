import React from 'react';
import Sidebar from '../../AdminComponents/Sidebar';
import Header from '../../AdminComponents/Header';
import DashboardCards from './DashboardCards';
import './Dashboard.css';
import RecentActivities from '../Activities/Intro-Activities.jsx';

const Dashboard = () => (
  <div className="admin-dashboard">
    <Sidebar />
    <div className="main-content">
      <Header />
      <div className="content">
        <>
        <DashboardCards />
        <RecentActivities /> 
        </>
      </div>
    </div>
  </div>
);

export default Dashboard;
