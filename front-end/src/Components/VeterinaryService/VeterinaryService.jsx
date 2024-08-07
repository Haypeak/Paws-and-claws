// import React from 'react'
import './VeterinaryService.css'
import animalBabies from '../../assets/cat and dog.jpeg'
import dentalCare from '../../assets/Dental care.jpeg'
import dogSurgery from '../../assets/dog_surgery.jpg'
import emergencyCare from '../../assets/emergency care.jpeg'
import petDiagnostic from '../../assets/Pet-Diagnostic-Imaging.jpeg'
import wellness from '../../assets/wellness and care.jpeg'


const VeterianaryService =()=>{
    return(
        <div className='VeterinaryService-container'>
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
                        <li><a href="/Pet-wellness-care">Pet and Wellness Care</a></li>
                    </ul>

                </div>
                <div className='service-col-section-2'> 
            <p>As a pet parent, you are held with the responsiblity of ensuring your animal&#39;s happiness and health for as many years as possible.</p><p> At Paws& Claws Veterinary Pet Shop, we&#39;d be honored to assist you in achieving that goal.</p><p> Our suite of services has been developed to provide a lifetime of care, from wellness care to advanced surgery as well as everything in between.</p><p> We&#39;ve got you covered, from the first round of vaccinations to specialized care for the senior years.</p>
            <p>We offer a wide variety of service to ensure that the needs of your pets are met to the fullest.</p> 
            <p>Our veterinary pet shop is equip with the right equipment to provide top-quality care for your pet.</p>       
            <p>
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
                        <img src={wellness} alt="Wellness and Care" />
                        <p style={{fontSize:'20px'}}>Pet Wellness and Care</p>
                        <p><a href="/Pet-wellness-care">READ MORE</a></p>
                    </div>
                    <div className='service-image-wrap'>
                        <img src={dentalCare} alt="Dental Care" />
                        <p style={{fontSize:'20px'}}>Dental Care</p>
                        <p><a href="/dental-care">READ MORE</a></p>
                    </div>
                    <div className='service-image-wrap'>
                        <img src={petDiagnostic} alt="Pet Diagnostic Imaging" />
                        <p style={{fontSize:'20px'}}>Medical Check Up</p>
                        <p><a href="/medical-checkup">READ MORE</a></p>
                    </div>
                </div>
                <div className='service-image-col-2'>
                    <div className='service-image-wrap'>
                        <img src={emergencyCare} alt="Emergency Care" />
                        <p style={{fontSize:'20px'}}>Vaccination Service</p>
                        <p><a href="/vaccinations">READ MORE</a></p>
                    </div>
                    <div className='service-image-wrap'>
                        <img src={dogSurgery} alt="Dog Surgery" />
                        <p style={{fontSize:'20px'}}>Surgery</p>
                        <p><a href="/surgery">READ MORE</a></p>
                    </div>
                    <div className='service-image-wrap'>
                        <img src={animalBabies} alt="Cat and Dog Babies" />
                        <p style={{fontSize:'20px'}}>Pet Grooming</p>
                        <p><a href="/grooming">READ MORE</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default VeterianaryService