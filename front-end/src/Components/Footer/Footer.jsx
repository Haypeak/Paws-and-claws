// import React from 'react';
import logo from "../../assets/Paws&Claws logo.png";
import "./Footer.css";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/insta.png";



const Footer = () => {
  return (
    <div className='footer'>
      <div className='row'>
        <div className='col'>
          <img src={logo} alt='' className='logo' />
          <h3>MEETING HOURS</h3>
          <p>Monday to Friday  8AM - 6PM</p>
          <p> Sunday  2PM - 6PM</p>
        </div>
        <div className='col'>
          <h4 className='cols'>Office</h4>
          <p>Ritz Agbogba Road,Opposite Glory Oil Filling Station</p>
          <p className='email-id'>pawsnclawsgh@gmail.com</p>
          <p>+233 59 405 7497</p>
          <p>+233 59 392 9047 </p>
        </div>
        <div className='col'>
          <h4 className='cols'>Links</h4>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/Veterinary-Care-And-Product'>Products</a></li>
            <li><a href='/VeterinaryService'>Services</a></li>
            <li><a href='/#tips'>Tips & Updates</a></li>
            <li><a href='/login'>Book Appointment</a></li>
          </ul>
        </div>
        <div className='col'>
          <h4 className='cols'>Subscribe to get pet tips & insight</h4>
          <form>
            <input className='emaill' type='email' placeholder='Enter email address' required/>
            <button className='sub'>Subscribe</button>
          </form>
          <h5>PawsnClawsGH</h5>
          <div className='social-icon'>
            <a href='' ><img src={facebook} alt='' /></a>
            <a href='https://www.instagram.com/pawsnclawsgh/'><img src={insta} alt='' /></a>
          </div>
        </div>
      </div>
      <hr></hr>
      <p className='copyright' style={{color: '#BEBEBE'}}>&copy; 2024 Pasw&Claws. All Rights Reserved</p>
    </div>
  )
}

export default Footer
