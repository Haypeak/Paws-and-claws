// import React from 'react';
import "./LandingPage.css";
import paws from "../../assets/paw.png";
import { useNavigate } from 'react-router-dom';
// import { CgPushChevronDown } from "react-icons/cg";


 const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='Home container'>
      <div className='Home-text'>
   <h1>Animal Care</h1>
   <h3>The One stop Pet Shop</h3>
   <p>Your pet’s health and well-being are our top priority. We provide compassionate and professional care to ensure your furry friends live happy and healthy lives. Explore our services and let us partner with you in caring for your beloved pets. 
   Trust Paws and Claws to treat your pets like family.
</p>
     <button className='btns' onClick={()=> navigate('/Login')}>Get Started 
      <img src={paws} alt='' className='paws'/></button>
      {/* <div className='arrow-container'>
         <button className="arrow-button" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}><CgPushChevronDown className='arrow-icon'/></button>
      </div> */}
      </div>
    </div>
    </>
  )
}

export default LandingPage
