import './VeterinaryService.css'
import './vetService.css'
import '../ContactUs/ContactUs.css';
import emergencyCare from '../../assets/emergency care.jpeg'
// import paws from "../../assets/paw.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Vaccination =()=>{
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
      };
    return(
        <>
        <div className='Vet'>
        
          <div className='Vet-text'>
       <h1>OUR SERVICES</h1>
       <h3>All Your Pet Need Is Here</h3>
       <p>Your pet’s health and well-being are our top priority. We provide compassionate and professional care to ensure your furry friends live happy and healthy lives. Explore our services and let us partner with you in caring for your beloved pets. 
       Trust Paws and Claws to treat your pets like family.
    </p>
    <button className='service-btn'>Book an Appointment</button>
          </div>
        </div>
    <div className='main-container-section'>
        <div className='Header-header'>
            <h2>Vaccination Service</h2>
        </div>
        <div className='container-highlight'>
            <div className='left-sub-container'>
                <div >
                <img src={emergencyCare} alt='Pet Vaccination' className='triangle-img'/>
                </div>
            </div>
            <div className='right-sub-container'>
                <p>Vaccinations are a critical part of your pet&#39;s health, and can help protect your pets from fatal diseases such as rabies and lyme disease. The rabies vaccine is a requirement for every pet.</p><br/>

                <p>Other vaccines are recommended based on an animal&#39;s individual lifestyle. Your veterinarian will make a suggestion about which vaccines your pet should receive during your visit.</p><br/>

                <p>Puppies and kittens are to receive serial vaccines every 3-4 weeks starting at 8 weeks of age, with the last dose between 16 weeks-18 weeks of age. Elderly pets or pets with underlying medical conditions may not be vaccinated. We want your pet to live a long, healthy life and we understand that a healthy  pet requires vaccination.Your pet’s health is important to us, hence we make it a priority to we provide all the necessary to help you with this commitment. Call or book an appointment today to discuss your pet’s dental care needs and how we can help!</p>
            </div>
        </div>

        <div className='vet-notice'>
            <h2 style={{color: '#fff'}}>Pet Preventive Care</h2>
            <p className='vet-notice-col-1'>At Paws an Claws Veterinary Pet Shop we provide a pet preventative care services for your pet&#39;s immune system.This services includes prescribed vaccines instructed by the veterinarian</p>
            <div className='vet-sub-notice'>
                <p>Vaccines are very important to managing the health of your pet.It is very important to discuss with the veterinarian a vaccination protocol that’s right for your pet. Factors that should be examined include age, medical history, environment, travel habits and lifestyle.</p>
            </div>
        </div>
        <div className='vet-divider-container'>
            <hr className='vet-divider' />
            <div className='vet-divider-diamond'></div>
            <hr className='vet-divider' />
        </div>
        <div className='vet-button-container'>
        <button className='vet-button' onClick={() => navigate('/Login')}>
                Book an appointment
        </button>
        </div>

        <div className='vet-message'>
            <h2>Send Us A Message</h2>
            <p style={{textAlign:'center', fontSize:'15px'}}>Let Us Know Your Concerns. Our Team will get back to you shortly</p>
        </div>

        <div className='form-container'>
        <form onSubmit={handleSubmit}>
          
          <input
            type='text'
            id='fname'
            name='Name'
            value={formData.firstname}
            onChange={handleChange}
            placeholder='Name'
          />

          
          <input
            type='email'
            id='email'
            name='Email'
            value={formData.email}
            onChange={handleChange}
            placeholder='amadzai36@gmail.com'
          />

          
          <textarea
            id='subject'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            placeholder='Write something..'
            style={{ height: '200px' }}
          ></textarea>

          <input type='submit' value='Submit' />
        </form>
      </div>

    </div>
        </>
    )
}


export default Vaccination;