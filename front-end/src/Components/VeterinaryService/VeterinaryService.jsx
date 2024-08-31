// import React from 'react'
import './VeterinaryService.css'
import animalBabies from '../../assets/cat and dog.jpeg'
import dentalCare from '../../assets/Dental care.jpeg'
import dogSurgery from '../../assets/dog_surgery.jpg'
import emergencyCare from '../../assets/emergency care.jpeg'
import petDiagnostic from '../../assets/Pet-Diagnostic-Imaging.jpeg'
import diagnosticsImg from '../../assets/diagnostic-img.jpg'
import painManagementImg from '../../assets/pet-pain-managment.jpeg'
import wellnessPlanVisitImg from '../../assets/wellnessPlan.jpeg'
import sprayAndNeuterImg from '../../assets/spray-and-neuter.jpeg'
import { useNavigate} from 'react-router-dom'


const  VeterinaryService =()=>{
    const navigate = useNavigate();

    return(
        
        <div className='VeterinaryService-container'>
             <div className='Home'>
          <div className='Home-text'>
       <h1>OUR SERVICES</h1>
       <h3>All Your Pet Need Is Here</h3>
       <p>Your pet’s health and well-being are our top priority. We provide compassionate and professional care to ensure your furry friends live happy and healthy lives. Explore our services and let us partner with you in caring for your beloved pets. 
       Trust Paws and Claws to treat your pets like family.
    </p>
    <button className='service-btn' onClick={() => navigate('/login')}>Book an Appointment</button>
         
          </div>
        </div>
            <div className='ServicesHeader'>
            <h2>Our Veterinary Services</h2>
            </div>
            <div className='service-col-container'>
                <div className='service-col-section-1'>
                    <ul style={{ listStyle: 'none' }} className='service-list'>
                        <li><a href="/grooming">Dog and Cat Grooming</a></li><br/>
                        <li><a href="/vaccinations">Vaccination Service</a></li><br/>
                        <li><a href="/surgery">Surgerical Service</a></li><br/>
                        <li><a href="/dental-care">Dental Care</a></li><br/>
                        <li><a href="/medical-checkup">Medical Check Up</a></li><br/>
                        <li><a href="/diagnostics">Diagnostics</a></li><br/>
                        <li><a href="/pain-management">Pain Management</a></li><br/>
                        <li><a href="/spray-and-neuter">Spay and Neuter</a></li><br/>
                        <li><a href="/wellness-plan">Wellness Visit & Plan</a></li>
                    </ul>

                </div>
                <div className='service-col-section-2'> 
            <p>As a pet parent, you are held with the responsiblity of ensuring your animal&#39;s happiness and health for as many years as possible. At Paws& Claws Veterinary Pet Shop, we&#39;d be honored to assist you in achieving that goal. Our suite of services has been developed to provide a lifetime of care, from wellness care to advanced surgery as well as everything in between. We&#39;ve got you covered, from the first round of vaccinations to specialized care for the senior years.</p>
            <p>We offer a wide variety of service to ensure that the needs of your pets are met to the fullest. 
           Our veterinary pet shop is equip with the right equipment to provide top-quality care for your pet.
            What you can expect from Paws and Claws veterinary pet shop:</p>
           <ul style={{marginLeft:'50px', color:'#A2A2A2', marginTop:'10px'}} className='list'>
            <li>Open and transparent with your pet&#39;s healthcare.</li>
            <li>Easy to understand explanation regarding pet&#39;s diagnostics and treatment.</li>
            <li>Advice and tips from our team experts.</li>
            <li>A support community, where we address our customer&#39;s concerns.</li>
           </ul>  
           </div>
            </div>
            <div className='service-image-container'>
                <div className='service-image-col-1'>
                    <div className='service-image-wrap'>
                        <img src={sprayAndNeuterImg} alt="spray And Neuter Img" />
                        <p style={{fontSize:'20px', textAlign:'center'}}>Spay & Neuter</p>
                        <p style={{textAlign:'center'}}><a href="/spray-and-neuter">READ MORE</a></p>
                    </div>
                    <div className='service-image-wrap'>
                        <img src={dentalCare} alt="Dental Care" />
                        <p style={{fontSize:'20px', textAlign:'center'}}>Dental Care</p>
                        <p style={{textAlign:'center'}}><a href="/dental-care" >READ MORE</a></p>
                    </div>
                    <div className='service-image-wrap'>
                        <img src={petDiagnostic} alt="Pet Diagnostic Imaging" />
                        <p style={{fontSize:'20px', textAlign:'center'}}>Medical Check Up</p>
                        <p style={{textAlign:'center'}}><a href="/medical-checkup" >READ MORE</a></p>
                    </div>
                </div>
                <div className='service-image-col-2'>
                    <div className='service-image-wrap'>
                        <img src={dogSurgery} alt="Dog Surgery" />
                        <p style={{fontSize:'20px', textAlign:'center'}}>Vaccination Service</p>
                        <p style={{textAlign:'center'}}><a href="/vaccinations" >READ MORE</a></p>
                    </div>
                    <div className='service-image-wrap'>
                        <img src={emergencyCare} alt="Emergency Care" />
                        <p style={{fontSize:'20px', textAlign:'center'}}>Surgery</p>
                        <p style={{textAlign:'center'}}><a href="/surgery" >READ MORE</a></p>
                    </div>
                    <div className='service-image-wrap'>
                        <img src={animalBabies} alt="Cat and Dog Babies" />
                        <p style={{fontSize:'20px',textAlign:'center'}}>Pet Grooming</p>
                        <p style={{textAlign:'center'}}><a href="/grooming" >READ MORE</a></p>
                    </div>
                </div>
                <div className='service-image-col-1'>
                    <div className='service-image-wrap'>
                        <img src={diagnosticsImg} alt="diagnostics Img" />
                        <p style={{fontSize:'20px', textAlign:'center'}}>Pet Dignostics</p>
                        <p style={{textAlign:'center'}}><a href="/diagnostics">READ MORE</a></p>
                    </div>
                    <div className='service-image-wrap'>
                        <img src={painManagementImg} alt="pain Management Img" />
                        <p style={{fontSize:'20px', textAlign:'center'}}>Pain Management</p>
                        <p style={{textAlign:'center'}}><a href="/pain-management" >READ MORE</a></p>
                    </div>
                    <div className='service-image-wrap'>
                        <img src={wellnessPlanVisitImg} alt="wellness Plan Visit Img" />
                        <p style={{fontSize:'20px', textAlign:'center'}}>Wellness Plan & Visits</p>
                        <p style={{textAlign:'center'}}><a href="/wellness-plan" >READ MORE</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default VeterinaryService;
