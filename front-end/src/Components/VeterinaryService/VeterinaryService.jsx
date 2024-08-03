// import React from 'react'
import './VeterinaryService.css'

const VeterianaryService =()=>{
    return(
        <div className='VeterinaryService-container'>
            <div className='ServicesHeader'>
            <h2>We Aim To Provide</h2>
            </div>
            <div className='service-col-container'>
                <div className='service-col-section-1'>
                    <ul>
                        <li>Dog and Cat Grooming</li>
                        <li>Animal Vaccinations</li>
                        <li>Animal Surgery</li>
                        <li>Dental care</li>
                        <li>Animal Medical Check Up</li>
                    </ul>
                </div>
                <div className='service-col-section-2'> 
            <p>
           We work hard to ensure that we provide quality service. What you can expect from Paws and Claws veterinary pet shop:</p>
           <ol>
            <li>Open and transparent with your pet’s healthcare.</li>
            <li>Easy to understand explanation regarding pet’s diagnostics and treatment.</li>
            <li>Advice and tips from our team experts.</li>
            <li>A support community, where we address our customer’s concerns.</li>
           </ol>  
           </div>
            </div>
        </div>
    )
}


export default VeterianaryService