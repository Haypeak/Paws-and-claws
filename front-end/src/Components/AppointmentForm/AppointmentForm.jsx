import React, { useState } from 'react';
import "./AppointmentForm.css";



const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        petId: '',
        reason: '',
        service: 'general'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        try{
        const response = await fetch('/api/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'True'
            },
            body: JSON.stringify(formData),
            
        });
        return alert('Appointment Booked Succesfully!');
    }catch (error){
        console.log(response.json());
        return alert('Try again!');
    }

    };

    return (

        <div className="main">
        
     
        <main>
          <section className="appointment">
            <h1>Book an Appointment</h1>
        <form className="appointment-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder='name' required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            
            <label htmlFor="petId">Pet's Id:</label>
            <input type="text" id="petId" name="petId" value={formData.petId} onChange={handleChange} required />

            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />

            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" value={formData.time}
                onChange={handleChange} required />

            <label htmlFor="service">Service:</label>
            <select id="service" name="service" value={formData.service} onChange={handleChange}>
                <option value="general">General Checkup</option>
                <option value="dental">Dental Care</option>
                <option value="surgery">Surgery</option>
                <option value="wellness">Wellness Care</option>
            </select>

            <label htmlFor="reason">reason for appointment:</label>
            <input type="text" id="reason" name="reason" value={formData.reason} onChange={handleChange} required />

            <button type="submit">Book Appointment</button>
        </form>

        </section>
      </main>
    </div>
    
    );
};

export default AppointmentForm;