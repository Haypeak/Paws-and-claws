import './VeterinaryService.css'
import './vetService.css'
import '../ContactUs/ContactUs.css';
import sprayAndNeuterImg from '../../assets/spray-and-neuter.jpeg'
// import paws from "../../assets/paw.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SprayAndNeuter =()=>{
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
       <h3>Spay And Neuter</h3>
       <p>Your pet’s health and well-being are our top priority. We provide compassionate and professional care to ensure your furry friends live happy and healthy lives. Explore our services and let us partner with you in caring for your beloved pets. 
       Trust Paws and Claws to treat your pets like family.
    </p>
    <button className='service-btn'>Book an Appointment</button>
          </div>
        </div>
    <div className='main-container-section'>
        <div className='Header-header'>
            <h2>Spay And Neuter</h2>
        </div>
        <div className='container-highlight' >
            <div className='left-sub-container'>
                <div >
                <img src={sprayAndNeuterImg} alt="spray And Neuter Img"  className='triangle-img' style={{marginTop:'-22px'}}/>
                </div>
            </div>
            <div className='right-sub-container'>
                <p>Spay and neuter refer to the surgical sterilization of animals.Spaying involves removing the uterus and ovaries of a female animal, and this makes them not able to become pregnant. Neutering involves removing the testicles of a male animal. Both terms refer to the surgical sterilization of an animal, but sometimes neuter is used for both genders. The choice to spay or neuter your pet may be one of the most important decisions you make impacting their long-term health. Deciding whether to spay or neuter your cat or dog can be a difficult decision for some pet owners. Although the thought of your pet having surgery may seem scary, we’re here to assure you that spays and neuters are common surgeries that are safe, simple, and generally quick.</p><br/>

                <h3>How can my pet benefit from Sterilization?</h3>

                <p>Spaying and neutering help pets live long, healthy lives. Having pets sterilized while they’re young reduces their likelihood of developing certain infections and cancers. Plus, it combats overpopulation which, sadly, leads to the euthanasia of pets who cannot be placed in good homes.</p>

              <p>Other common issues that spaying and neutering help prevent include:
              <ul>
                <li>Your pet being inclined to roam to find a mate which could put them in harm’s way. Car accidents, encounters with wild animals, or fights with other males are just some of the possible dangers.</li>
                <li>Cancerous mammary tumors that can spread to other parts of the body. If you spay your female pet prior to her first heat cycle, you’ll significantly reduce the likelihood that she’ll develop tumors.</li>
                <li>Testicular cancer and infections that can lead to malignant or benign swelling of the prostate.</li>
                <li>Unwanted behavioral problems such as aggression, territorial marking, and roaming. Don’t worry — they’ll still remain protective!</li>
              </ul>
              </p><br/> 
            </div>
        </div>

        <div className='vet-notice'>
            <h2 style={{color: '#fff'}}>Safe Spay & Neuter Procedures</h2>
            <p className='vet-notice-col-1'>At Paws an Claws Veterinary Pet Shop we provide safe and generally quick spay and neuter surgrical procedures for your pet&#39;s health care.</p>
            <div className='vet-sub-notice'>
                <p>Deciding whether to spay or neuter your cat or dog can be a difficult decision for some pet owners. Although the thought of your pet having surgery may seem scary, we’re here to assure you that spays and neuters are common surgeries that are safe, simple, and generally quick.</p>
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


export default SprayAndNeuter;