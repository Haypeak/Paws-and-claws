import { useState } from 'react';
import './AppointmentForm.css';
import Profile from './Profile';

const AppointmentFormHeader = () => {
  const [isProfileVisible, setProfileVisible] = useState(false);

  return (
    <div className='Home'>
      <div className='Home-text'>
        <h1>Book An Appointment</h1>
        <h3>All Your Pet Need Is Here</h3>
        <p>Your pet’s health and well-being are our top priority. We provide compassionate and professional care to ensure your furry friends live happy and healthy lives. Explore our services and let us partner with you in caring for your beloved pets. 
        Trust Paws and Claws to treat your pets like family.</p>
        <button className='appointment-btns' onClick={() => setProfileVisible(!isProfileVisible)}>
          {isProfileVisible ? 'Hide Profile' : 'View Profile'}
        </button>
        {isProfileVisible && <Profile />}
      </div>
    </div>
  );
};

export default AppointmentFormHeader;
