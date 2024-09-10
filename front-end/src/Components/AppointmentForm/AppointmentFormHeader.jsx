import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AppointmentForm.css';
import Profile from './Profile';
import profileIcon from '../../assets/profile.png'; // Make sure to add this icon to your assets

const AppointmentFormHeader = () => {
  const [isProfileVisible, setProfileVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='Home'>
      <div className='Home-text'>
        <h1>Book An Appointment</h1>
        <h3>All Your Pet Need Is Here</h3>
        <p>Your pet's health and well-being are our top priority. We provide compassionate and professional care to ensure your furry friends live happy and healthy lives. Explore our services and let us partner with you in caring for your beloved pets. 
        Trust Paws and Claws to treat your pets like family.</p>
      </div>
    </div>
  );
};

export default AppointmentFormHeader;
