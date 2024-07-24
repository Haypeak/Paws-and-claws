// import React from 'react';
import "./Personels.css";
import { useNavigate } from 'react-router-dom';
import paws from "../../assets/paw.png";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.jpg";
import person3 from "../../assets/person3.jpg";
import person4 from "../../assets/person4 (3).jpg";


const Personels = () => {
    const navigate = useNavigate();
    return (
        <div className='personel'><h3>OUR PROFESSIONAL DOCTORS</h3>
            <div className='section1'>
                <div className='doctors-left1'>
                    <img src={person1} alt='' /><h4>Dr. Sarah Thompson - Chief Veterinarian</h4>
                    <p>Role: Oversees all medical operations, performs complex surgeries, and provides advanced diagnostics and treatment plans for various pets. She also leads the team of veterinarians, ensuring high standards of care. </p>
                </div>
                <div className='doctors-right1'>
                    <img src={person3} alt='' /><h4>Dr. Michael Lee - Senior Veterinarian</h4><p>Role: Specializes in internal medicine and emergency care. Dr. Lee handles critical cases and provides expert consultations on chronic conditions and illnesses.</p>
                </div>
            </div>
            <div className='section2'>
                <div className='doctors-left2'>
                    <img src={person2} alt='' /><h4>Dr. Emily Rodriguez - Exotic Animal Specialist</h4><p>Role: Focuses on the care and treatment of exotic pets such as birds, reptiles, and small mammals. Dr. Rodriguez is skilled in handling the unique needs and challenges of these species.</p>
                </div>
                <div className='doctors-right2'>
                    <img src={person4} alt='' /><h4>Dr. James Patel - Veterinary Surgeon</h4><p>Role: Performs surgical procedures, ranging from routine spays and neuters to more complex orthopedic and soft tissue surgeries. Dr. Patel also manages post-operative care and recovery.
                    </p>
                </div>
            </div><button className='bton' onClick={()=> navigate('/appointments')}>Book Appointment
            <img src={paws} alt='' className='paws'/></button>

        </div>
    )
}

export default Personels