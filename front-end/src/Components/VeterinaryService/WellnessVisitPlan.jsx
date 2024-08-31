import './VeterinaryService.css'
import './vetService.css'
import '../ContactUs/ContactUs.css';
import wellnessPlanVisitImg from '../../assets/wellnessPlan.jpeg'
// import paws from "../../assets/paw.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const WellnessVisitPlan =()=>{
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
       <h3>Pet&#39;s Wellness Plan & Visits</h3>
       <p>Your pet’s health and well-being are our top priority. We provide compassionate and professional care to ensure your furry friends live happy and healthy lives. Explore our services and let us partner with you in caring for your beloved pets. 
       Trust Paws and Claws to treat your pets like family.
    </p>
    <button className='service-btn'>Book an Appointment</button>
          </div>
        </div>
    <div className='main-container-section'>
        <div className='Header-header'>
            <h2>Pet&#39;s Wellness Plan & Visits</h2>
        </div>
        <div className='container-highlight'>
            <div className='left-sub-container'>
                <div >
                <img src={wellnessPlanVisitImg} alt="wellness Plan Visit Img" className='triangle-img' style={{marginTop:'-2px'}}/>
                </div>
            </div>
            <div className='right-sub-container'>
                <p>At Paws and Claws Veterinary Pet Shop, we believe in the importance of comprehensive wellness care for your beloved pets. Regular veterinary wellness visits are crucial for early detection and prevention of potential health issues, allowing us to provide the best possible care for your pets.</p><br/>

                <p>During these visits, our experienced veterinarians conduct thorough examinations, checking for any signs of illness or discomfort. We also take the time to discuss your pet&#39;s diet, exercise routine, and behavior, offering tailored advice and recommendations to optimize their overall well-being. By partnering with us for veterinary wellness care, you can rest assured that your pets will receive the highest standard of preventive care, helping them lead long, happy, and healthy lives.</p>

                <p>As loving pet parents, we want our animal companions by our side for as many years as possible. At Pet Vet Family Pet Care Center, we believe the best way to ensure this happens is by making a commitment to their ongoing wellness. By bringing your pet in for regular checkups, you&#39;ll help protect him or her from many common ailments that can affect companion animals. You&#39;ll also give us the opportunity to identify and address potential health problems early, before they have chance to develop and worsen.</p>
                
                <p> We want your pet to live a long, healthy life, and we understand that maintaining a healthy mouth is part of that. Your pet&#39;s health is important to us, hence we make it a priority to we provide all the necessary so to help you with this commitment. Call or book an appointment today to discuss your pet&#39;s dental care needs and how we can help!</p>
            </div>
        </div>

        <div className='vet-notice'>
            <h2 style={{color: '#fff'}}>Pet Wellness Care</h2>
            <p className='vet-notice-col-1'>At Paws an Claws Veterinary Pet Shop we provide a comprehensive wellness exam service for your pet&#39;s general wellness.Our veterinary wellness care services encompass a wide range of preventive measures to keep your pets in optimal health.</p>
            <div className='vet-sub-notice'>
                <p>It is recommended for your companion to see a veterinarian at least once each ye ar. For pets 9 years old and older, pets on chronic medication, or pets with underlying medical conditions, biannual examinations are recommended.</p>
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


export default WellnessVisitPlan;