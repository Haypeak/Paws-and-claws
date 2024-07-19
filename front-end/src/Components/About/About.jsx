import React from 'react';
import "./About.css"
import { useState,useEffect } from 'react';

const About = () => {

  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  setIsVisible(true);
}, [])

  return (
    <div className='About'>
        <div className={`section ${isVisible ? 'visible' : ''}`}>
        <h2 className='About-h2'>ABOUT US</h2>
        <h3 className='About-h3'>Who's Paws & Claws?</h3>
        <p className='About-intro'>Welcome to Paws and Claws Veterinary Pet Shop, your trusted partner in pet care. At Paws and Claws, we are dedicated to providing exceptional veterinary services and high-quality pet products to ensure the health and happiness of your furry friends. Our team of experienced veterinarians and compassionate staff is committed to treating pets of all kinds, from dogs and cats to exotic animals, with the utmost care and professionalism. With a proven track record of successful treatments and satisfied pet owners, we pride ourselves on our ability to handle a wide range of pet health needs. You can always entrust your beloved pets to us, knowing they will receive the best care possible. Join our community of pet lovers and let Paws and Claws be your go-to destination for all your pet care needs.</p>
      </div>
    </div>
  )
}

export default About
