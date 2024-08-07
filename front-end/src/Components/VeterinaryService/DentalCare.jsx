import './VeterinaryService.css'
import './vetService.css'
import '../ContactUs/ContactUs.css';
import Dentalcare from '../../assets/Dental care.jpeg'
// import paws from "../../assets/paw.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const DentalCare =()=>{
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
            <h2>Pet&#39;s Dental Care</h2>
        </div>
        <div className='container-highlight'>
            <div className='left-sub-container'>
                <div >
                <img src={Dentalcare} alt='Dental Care' className='triangle-img'/>
                </div>
            </div>
            <div className='right-sub-container'>
                <p>Dental hygiene is an important part of your pet’s health because dental disease can be associated with other serious health problems such as heart disease and kidney disease. Without proper care,bacteria that leads to plaque and tartar buildup on your pet’s teeth. The causes bad breath, reddened gums, and other common signs of dental disease. As dental disease progresses, other signs can include drooling, discomfort while chewing, and loose or missing teeth. Even if you’re using treats and chews to help control tartar, these are frequently not enough to keep dental disease in check.</p><br/>

                <p>Fortunately, many dental problems can be managed through at-home care and by bringing your pet to us for regular dental checkups and teeth cleanings. We want your pet to live a long, healthy life, and we understand that maintaining a healthy mouth is part of that. Your pet’s health is important to us, hence we make it a priority to we provide all the necessary so to help you with this commitment. Call or book an appointment today to discuss your pet’s dental care needs and how we can help!</p>
            </div>
        </div>

        <div className='vet-notice'>
            <h2 style={{color: '#fff'}}>Comprehensive Dental Care</h2>
            <p className='vet-notice-col-1'>At Paws an Claws Veterinary Pet Shop we provide comprehensive dental services for your pet&#39;s health care.This services includes dental check ups and dental cleaning.</p>
            <div className='vet-sub-notice'>
                <p>Dental disease can also lead to systemic health problems in dogs and cats, including heart disease and kidney disease. Fortunately, this can be easily prevented by regular dental examinations, home care, and regular dental cleanings.</p>
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


export default DentalCare;