// import React from 'react';
import "./AdminNavbar.css";
import logo from "../../../assets/Paws&Claws logo.png";
import notification from "../../../assets/notificationn.png";
import admin from "../../../assets/Admin.jpg";
import dropdown from "../../../assets/dropdown.png";


 const AdminNavbar = () => {
  return (
    <nav className='AdminNavbar'>
        <img src= {logo} className='Logo' alt=''></img>
          <div className='left-section'>
            <img src={notification} className='notification' alt=''/>
            <p className='name'>Mrs Doreen Dodd-Baidoos</p>
            <img src={admin} className='admin' alt=''/>
            <img src={dropdown} className='dropdown' alt=''/>
          </div>
      
    </nav>
  )
}

export default AdminNavbar
