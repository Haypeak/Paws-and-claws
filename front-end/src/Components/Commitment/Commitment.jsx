// import React from 'react';
import "./Commitment.css";
import paws from "../../assets/paw.png";
import { useNavigate } from 'react-router-dom';

const Commitment = () => {
    const navigate = useNavigate();
    return (
        <div className='lowContainer'>
            <h2 className='title'>Commitment to Service</h2>
            <p>Welcome to Paws and Claws Veterinary Pet Shop! We are delighted to have you and your beloved pets as part of our family. Our commitment and loyalty to providing exceptional care and a wide range of quality products and services are unwavering. We are here to ensure your pets receive the best attention and support they deserve. If you have any questions or need assistance with our services, please do not hesitate to contact us. Your satisfaction and your pet&#39;s well-being are our top priorities. Thank you for choosing Paws and Claws!</p> <button className='button'>Book an appointment <img src={paws} alt=''onClick={()=> navigate('../AppointmentForm/AppointmentForm.jsx')}/></button>
        </div>
    )
}

export default Commitment
