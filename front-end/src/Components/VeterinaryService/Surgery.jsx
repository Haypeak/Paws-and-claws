import './VeterinaryService.css'
import './vetService.css'
import '../ContactUs/ContactUs.css';
import emergencyCare from '../../assets/emergency care.jpeg'
// import paws from "../../assets/paw.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Surgery =()=>{
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
       <h3>Pet&#39;s Surgical Service</h3>
       <p>Your pet’s health and well-being are our top priority. We provide compassionate and professional care to ensure your furry friends live happy and healthy lives. Explore our services and let us partner with you in caring for your beloved pets. 
       Trust Paws and Claws to treat your pets like family.
    </p>
    <button className='service-btn'>Book an Appointment</button>
          </div>
        </div>
    <div className='main-container-section'>
        <div className='Header-header'>
            <h2>Pet Surgrical Service</h2>
        </div>
        <div className='container-highlight'>
            <div className='left-sub-container'>
                <div >
                <img src={emergencyCare} alt="Dog Surgery" className='triangle-img'/>
                </div>
            </div>
            <div className='right-sub-container'>
                <p>Paws and Claws Veterinary pet shop provides veterinary surgical care and services for cats and dogs. Surgeries are performed in our surgery suite, which is equipped with all the right surgical equipment to ensure that your pet&#39;s surgery goes on smoothly and safely. At PawsnClaws We specialize in minor surgery and major surgery of any kind. Every procedure includes a dedicated anesthesia technician to provide constant monitoring and supportive care from start to finish.</p><br/>

                <p>Your pet’s health is important to us, hence we make it a priority to we provide all the necessary so to help you with this commitment. Call or book an appointment today to discuss your pet’s dental care needs and how we can help!</p>
            </div>
        </div>

        <div className='vet-notice'>
            <h2 style={{color: '#fff'}}>Safe Surgical Procedures</h2>
            <p className='vet-notice-col-1'>At Paws an Claws Veterinary Pet Shop when your pet requires surgery, the PawsnClaws team offers the most compassionate surgrical services.</p>
            <div className='vet-sub-notice'>
                <p>When it comes to the health, safety, and well-being of your loved ones, we simply don’t believe in shortcuts. A higher level of care is our goal in all that we do, including some of our most common surgical procedures.</p>
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


export default Surgery;