/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import { format, addMinutes } from 'date-fns';

import "./AppointmentForm.css";
// eslint-disable-next-line no-unused-vars
import { Navigate, redirect } from 'react-router-dom';

const AppointmentForm = () => {
    // eslint-disable-next-line no-unused-vars
    const get_current_user = async () => {
        try {
            // Get the token from local storage
            const token = localStorage.getItem('token'); // Retrieve token from local storage

            const response = await fetch('http://127.0.0.1:5000/auth/current_user', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Include the token in the Authorization header
                },
            });

            if (response.status === 200) {
                // User is logged in, do nothing
                current_user = response.json
                return current_user
            } else {
                // User is not logged in, redirect to login page
                current_user = ' '
                console.log(response.json())
                return current_user
            }
        } catch (error) {
            console.error('Network Error:', error);
        }
    };

// trying to implement a function to get current user, not going well as you can see

    // current_user = get_current_user()
    // if (current_user != ''){
    //     firstName = current_user.first_name
    //     surname = current_user.last_name
    //     email = current_user.email
    //     phoneNumber = current_user.phone_number
    // }
    // else{
    //     firstName=''
    //     surname=''
    //     email=''
    //     phoneNumber=''
    // }
    const [formData, setFormData] = useState({
        firstName: '',
        surname: '',
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
    const [isLoading, setIsLoading] = useState(true);

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
                window.location.href = '/appointments'
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

    useEffect(() => {
        const checkLoggedIn = async () => {
            try {
                // Get the token from local storage
                const token = localStorage.getItem('token'); // Retrieve token from local storage

                const response = await fetch('http://127.0.0.1:5000/auth/checkloggedin', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // Include the token in the Authorization header
                    },
                });

                if (response.status === 200) {
                    // User is logged in, do nothing
                    setIsLoading(false);
                } else {
                    // User is not logged in, redirect to login page
                    window.location.href = '/login';
                }
            } catch (error) {
                console.error('Network Error:', error);
                // Redirect to home page
                window.location.href = '/';
            }
        };

        checkLoggedIn();
    }, []);

    const now = new Date();
    const minDate = format(now, 'yyyy-MM-dd');
    const minTime = format(addMinutes(now, 1), 'HH:mm');

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="main">
            <main>
                <section className="appointment">
                    <h1 className='appointment title'>Book an Appointment</h1>
                    <form className="appointment-form"  onSubmit={handleSubmit}>
                       
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
                            <option value='Dog' defaultValue={'Dog'}>Dog</option>
                            <option value='Cat' defaultValue={'Cat'}>Cat</option>
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
                            min={minDate}
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
                            min={minTime}
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
