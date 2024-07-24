import { useState } from 'react';
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
        try {
            const response = await fetch('/api/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Appointment Booked Successfully!');
            } else {
                const errorData = await response.json();
                console.error('Server Error:', errorData);
                alert('Try again!');
            }
        } catch (error) {
            console.error('Network Error:', error);
            alert('Try again!');
        }
    }

    return (
        <div className="main">
            <main>
                <section className="appointment">
                    <h1 className='appointment title'>Book an Appointment</h1>
                    <form className="appointment-form" onSubmit={handleSubmit}>
                        {/* <label htmlFor="name">Name:</label> */}
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.firstName} 
                            onChange={handleChange} 
                            placeholder='First Name*' 
                            required 
                        />
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.lastName} 
                            onChange={handleChange} 
                            placeholder='Surname*' 
                            required 
                        />
                        
                        <div className='contact-details'>
                        {/* <label htmlFor="email">Email:</label> */}
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            placeholder='Email*' 
                            onChange={handleChange} 
                            required 
                            className='contact-section'
                        />
                         {/* <label htmlFor="email">Email:</label> */}
                        <input 
                            type="text" 
                            id="number" 
                            name="cellphone-number" 
                            value={formData.number} 
                            placeholder='Cellphone*' 
                            onChange={handleChange} 
                            required 
                            className='contact-section'
                        />
                        </div>
                       
                        
                        {/* <label htmlFor="petId">Pet&#39;s Id:</label> */}
                        <input 
                            type="text" 
                            id="petName" 
                            name="petName" 
                            value={formData.petName}
                            placeholder='Pet Name*'  
                            onChange={handleChange} 
                            required 
                        />

                        <div className='animalKind-detail'>
                        {/* <label htmlFor="email">Email:</label> */}
                        <select 
                           type="text"
                           id="species" 
                            name="species" 
                            placeholder='Species:*'
                            value={formData.species} 
                            onChange={handleChange} 
                            required 
                            className='contact-section'
                        >
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                        </select>

                         {/* <label htmlFor="email">Email:</label> */}
                        <input 
                            type="text" 
                            id="Breed" 
                            name="Breed" 
                            value={formData.Breed} 
                            placeholder='Breed*' 
                            onChange={handleChange} 
                            required 
                            className='animalKind-section'
                        />
                        </div>

                    <div className='time-details'>
                    {/* <label htmlFor="date">Date:</label> */}
                        <input 
                            
                            type="date" 
                            id="date" 
                            name="date"
                            value={formData.date} 
                            onChange={handleChange} 
                            required 
                            className='contact-section'
                        />

                        {/* <label htmlFor="time">Time:</label> */}
                        <input 
                           
                            type="time" 
                            id="time" 
                            name="time" 
                            value={formData.time}
                            onChange={handleChange} 
                            required 
                            className='contact-section'
                        />
                    </div>     

                        

                        {/* <label htmlFor="service">Service:</label> */}
                        <select 
                           type="text"
                           id="reason" 
                            name="reason" 
                            placeholder='Reason for Appointment:*'
                            value={formData.reason} 
                            onChange={handleChange} 
                            required 
                        >
                            <option value="general">General Checkup</option>
                            <option value="dental">Dental Care</option>
                            <option value="surgery">Surgery</option>
                            <option value="wellness">Wellness Care</option>
                        </select>

                        {/* <label htmlFor="reason">Reason for Appointment:</label>
                        <input 
                            type="text" 
                            id="reason" 
                            name="reason" 
                             placeholder='*'
                            value={formData.reason} 
                            onChange={handleChange} 
                            required 
                        /> */}


                         <div className='note-submit-btn'>
                         <textarea 
                            id="notes" 
                            name="notes" 
                            placeholder='Additional Notes'
                            value={formData.notes} 
                            onChange={handleChange}
                            className='appointment-textarea'
                        />
                        <div>
                        <p>* Indicates Compulsory</p>
                        <button type="submit" className='appointment button'>Book Appointment</button>
                        </div>
                        
                        </div>   
                        
                    </form>
                </section>
            </main>
        </div>
    );
};

export default AppointmentForm;
