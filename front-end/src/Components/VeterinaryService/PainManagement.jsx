import './VeterinaryService.css'
import './vetService.css'
import '../ContactUs/ContactUs.css';
import painManagementImg from '../../assets/pet-pain-managment.jpeg'
// import paws from "../../assets/paw.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const PainManagement =()=>{
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
       <h3>Pet&#39;s Pain Management</h3>
       <p>Your pet’s health and well-being are our top priority. We provide compassionate and professional care to ensure your furry friends live happy and healthy lives. Explore our services and let us partner with you in caring for your beloved pets. 
       Trust Paws and Claws to treat your pets like family.
    </p>
    <button className='service-btn'>Book an Appointment</button>
          </div>
        </div>
    <div className='main-container-section'>
        <div className='Header-header'>
            <h2>Pain Management</h2>
        </div>
        <div className='container-highlight'>
            <div className='left-sub-container'>
                <div >
                <img src={painManagementImg} alt="pain Management Img" className='triangle-img' style={{marginTop:'-22px'}}/>  
                </div>
            </div>
            <div className='right-sub-container'>
                <h3>Providing relief so your pet can enjoy life.</h3>
                <p>Pain has as many manifestations as there are injuries, conditions, and individuals. Pain experts define pain as ``an unpleasant sensory and emotional experience associated with actual or potential tissue damage.``</p>

                <p>Pain is very subjective and difficult to measure. Because dogs instinctively hide their pain to prevent potential predators from targeting them when they are injured, pain assessment in dogs can be challenging. The outward demonstrations of pain vary widely from dog to dog. It is important to recognize that just because a dog does not cry, limp, or show other obvious signs of pain, that does not mean it is not in pain. A good general rule is that if it would hurt you, it would hurt a dog.</p>

                <p>Dogs and cats experience pain just like people. The primary cause is aging, but other reasons include trauma, obesity, high activity, and large breed issues. Some of the signals that your pet is experiencing pain may be difficulty getting up, whining, restlessness, panting, and lameness. A single method to treat pain can be quite effective, but research and experience have shown that putting multiple modalities into use can dramatically help in reducing pain, resulting in a more comfortable and active life for your pet.  We&#39;ve attached some resources below for further information on pain management for your pet.</p><br/>

                <p>If your pet is undergoing a surgical or dental procedure, do not be afraid, we provide pain management services to ensure that your pet&#39; discomfort is brought to a stop. Most of these procedures require some postoperative pain management, though the duration of treatment will vary with the procedure. Generally, your pet will receive pain-relief medications before, during, and after the surgery or a dental procedure. Your pet’s health is important to us, hence we make it a priority to we provide all the necessary so to help you with this commitment. Call or book an appointment today to discuss your pet’s dental care needs and how we can help!</p>
            </div>
        </div>

        <div className='vet-notice'>
            <h2 style={{color: '#fff'}}>Relieving Pain Management</h2>
            <p className='vet-notice-col-1'>At Paws an Claws Veterinary Pet Shop we provide a relieving pain management service for your pet&#39;s general well being.This services includes pain management medications.</p>
            <div className='vet-sub-notice'>
                <p>Pain management procedure is a method to treat pain can be quite effective. It is a way to ease your pet&#39;s discomfort. The duration of treatment will vary with the procedure. Generally, your pet will receive pain-relief medications before, during, and after the surgery or a dental procedure.</p>
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


export default PainManagement;