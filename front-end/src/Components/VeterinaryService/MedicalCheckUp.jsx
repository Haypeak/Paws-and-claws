import './VeterinaryService.css'
import './vetService.css'
import '../ContactUs/ContactUs.css';
import petDiagnostic from '../../assets/Pet-Diagnostic-Imaging.jpeg'
// import paws from "../../assets/paw.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const MedicalCheckUp =()=>{
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
       <h3>Pet&#39;s Medical Check Up</h3>
       <p>Your pet’s health and well-being are our top priority. We provide compassionate and professional care to ensure your furry friends live happy and healthy lives. Explore our services and let us partner with you in caring for your beloved pets. 
       Trust Paws and Claws to treat your pets like family.
    </p>
    <button className='service-btn'>Book an Appointment</button>
          </div>
        </div>
    <div className='main-container-section'>
        <div className='Header-header'>
            <h2>Pet Medical CheckUp</h2>
        </div>
        <div className='container-highlight'>
            <div className='left-sub-container'>
                <div >
                <img src={petDiagnostic} alt="Pet Diagnostic Imaging"  className='triangle-img' style={{marginTop:'-22px'}}/>
                </div>
            </div>
            <div className='right-sub-container'>
                <p>A wellness examination is a routine medical examination of a dog who appears healthy, as opposed to an examination of a dog who is ill. A wellness examination may also be called a “check-up” or a “physical examination”. The focus of a wellness examination is to make sure your dog is as healthy as possible.</p><br/>

                <h3>How often should my pet have a medical check up?</h3>

                <p>The answer to this question depends on your dog’s age and current health status. During early puppyhood, wellness exams are recommended on a monthly basis, while for the average adult dog, annual wellness examinations are the norm. For middle-aged, senior, and geriatric dogs, twice-yearly examinations are recommended.</p>

                <p>During a routine medical check up examination, the veterinarian will ask you questions about your dog&#39;s diet, exercise, how much they’re drinking, breathing, behavior, habits, elimination patterns (i.e., bowel movements and urination), lifestyle, and general health. Your veterinarian will also perform a physical examination of your dog.</p>

                <p>Based on your pet&#39;s history and physical examination, the veterinarian will then make recommendations for specific preventive medicine treatments. These may include vaccination, parasite control (including preventive treatments for fleas, ticks, intestinal parasites, and heartworm), nutrition, skin and coat care, joint health, weight management, or dental care.</p>

               <p> In addition, the veterinarian will discuss your dog&#39;s individual circumstances and decide whether any other life-stage or lifestyle recommendations are appropriate. Your pet&#39;s health is important to us, hence we make it a priority to we provide all the necessary so to help you with this commitment. Call or book an appointment today to discuss your pet&#39;s dental care needs and how we can help!</p>
            </div>
        </div>

        <div className='vet-notice'>
            <h2 style={{color: '#fff'}}>Routine Medical Check Up</h2>
            <p className='vet-notice-col-1'>At Paws an Claws Veterinary Pet Shop we provide routine medical examination for your pet&#39;s overall health.This services includes dental check ups to vaccination.</p>
            <div className='vet-sub-notice'>
                <p>Dogs cannot tell you how they are feeling and, as a result, disease may be present before you are aware of it. Most dogs will hide signs of disease in early stages. This means that a health condition may become highly advanced before your dog shows any recognizable problems.  Fortunately, this can be easily prevented by regular wellness examinations.</p>
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


export default MedicalCheckUp;