import './VeterinaryService.css'
import './vetService.css'
import '../ContactUs/ContactUs.css';
import diagnosticsImg from '../../assets/diagnostic-img.jpg'
// import paws from "../../assets/paw.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Diagnostics =()=>{
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
       <h3>Pet&#39;s Dignostics</h3>
       <p>Your pet’s health and well-being are our top priority. We provide compassionate and professional care to ensure your furry friends live happy and healthy lives. Explore our services and let us partner with you in caring for your beloved pets. 
       Trust Paws and Claws to treat your pets like family.
    </p>
    <button className='service-btn'>Book an Appointment</button>
          </div>
        </div>
    <div className='main-container-section'>
        <div className='Header-header'>
            <h2>Pet Diagnostics</h2>
        </div>
        <div className='container-highlight'>
            <div className='left-sub-container'>
                <div >
                <img src={diagnosticsImg} alt="diagnostics Img" className='triangle-img' style={{marginTop:'-1px'}}/>
                </div>
            </div>
            <div className='right-sub-container'>
                <h3>What are pet diagnostics?</h3>
                <p>Pet diagnostics are different kinds of tests that can help provide a general overview of your pet’s health or help to diagnose an illness or disease.</p>

                <p>X-rays, MRIs, CT scans, and labwork are all common diagnostic tools your vet might use to monitor things like your pet’s internal organ function or their complete blood count, or to check for broken bones or identify conditions like Lyme disease. These kinds of imaging technologies and laboratory tests will allow your vet to create a full assessment of your pet’s health. </p><br/>

                <h3>Our Diagnostic Care</h3>
                <p>At Paws and Claws Veterinary Pet Shop, our goal is keeping your pet happy and healthy. Thanks to modern diagnostics and our on-site laboratory, we&#39;re able to do just that for sick and injured pets. We are also able to run a variety of tests that are best suited to your pet’s individual needs. This allows us to get quicker diagnostic results, improving our care and treatment for your pets. With the shared goal of successful recovery, our team of experienced veterinarians works together to return your pet to good health. </p>

                <p>We want your pet to live a long, healthy life, and we understand that ensuring monitoring the internal system is part of that. Your pet’s health is important to us, hence we make it a priority to we provide all the necessary so to help you with this commitment. Call or book an appointment today to discuss your pet’s dental care needs and how we can help!</p>
            </div>
        </div>

        <div className='vet-notice'>
            <h2 style={{color: '#fff'}}>Thorough Diagnostic Care</h2>
            <p className='vet-notice-col-1'>At Paws an Claws Veterinary Pet Shop we provide a thorough diagnostic care for your pet&#39;s health care.This services includes digital radiology and in house laboratory.</p>
            <div className='vet-sub-notice'>
                <p>Without diagnostic test, it will be really chanelling to know the root cause of certian diseases that can develop or lead to systemic health problems in dogs and cats, including heart disease and kidney disease. Fortunately, this can be easily prevented by a diagnostic examinations.</p>
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


export default Diagnostics;