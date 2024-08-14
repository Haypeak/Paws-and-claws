import { useState } from 'react';
import "./AppointmentForm.css";

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        surname:'',
        email: '',
        phoneNumber: '',
        date: '',
        time: '',
        petName: '',
        Breed: '',
        appointmentType: 'Walk-In',
        reason: 'General Checkup',
        notes: '',
        species: 'Dog',
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
            const response = await fetch('http://127.0.0.1:5000/api/appointments', {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 201) {
                alert('Appointment Booked Successfully!');
            } else {
                const errorData = await response.json();
                console.error('Server Error:', errorData);
                alert(errorData.message);
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
                            name="firstName" 
                            value={formData.firstName} 
                            onChange={handleChange} 
                            placeholder='First Name*' 
                            required 
                        />
                        <input 
                            type="text" 
                            id="name" 
                            name="surname" 
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
                            name="phoneNumber" 
                            value={formData.phoneNumber} 
                            placeholder='Cellphone*' 
                            onChange={handleChange} 
                            required 
                            className='contact-section'
                        />
                        </div>
                       
                        <div className='contact-details'>
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
                        <input 
                            type="text" 
                            id="homeAddress" 
                            name="homeAddress" 
                            value={formData.homeAddress}
                            placeholder='GM-123-45-678*'  
                            onChange={handleChange} 
                            required 
                        />
                        </div>
                       

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
                            <option value='Dog' selected={formData.species === 'Dog'}>Dog</option>
                            <option value='Cat' selected={formData.species === 'Cat'}>Cat</option>
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
                             <option value="general">General Medical Checkup</option>
                             <option value="dental">Dental Care</option>
                             <option value="surgery">Surgery</option>
                             <option value="wellness">Wellness Care</option>
                             <option value="wellness">Grooming</option>
                             <option value="wellness">Vaccination</option>
                        </select>


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
                        <div className='check-in-area'>
                        <p style={{fontSize:'16px'}}>* Indicates Compulsory</p>
                        <label className="col-container">Walk In
                            <input 
                                type="radio" 
                                checked={formData.appointmentType === 'Walk-In'} 
                                name="appointmentType" 
                                value='Walk-In' 
                                onChange={handleChange}
                            />
                            <span className="checkmark"></span>
                        </label>
                            <label className="col-container">Home
                            <input 
                                type="radio" 
                                checked={formData.appointmentType === 'Home'} 
                                name="appointmentType" 
                                value='Home' 
                                onChange={handleChange}
                            />
                            <span className="checkmark"></span>
                            </label>
                        <button type="submit" className='appointment button'>Book Appointment</button>
                        </div>
                        </div>
                        
                        </div>   
                        
                    </form>
                </section>
            </main>
        </div>
    );
};

export default AppointmentForm;
