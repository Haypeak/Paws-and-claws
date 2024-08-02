import  { useState } from 'react';
import './ContactUs.css';
import calender from '../../assets/calender.png';
import location from '../../assets/location.png';
import phone from '../../assets/phone.png';

const ContactUs = () => {
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

  return (
    <div className='Contact-container'>
      <div className='Contact-container-info'>
        <h2 className='Contact-header-info'>Contact Us</h2>
        <div className='col-section-row'>
          <div className='col-contact-info'>
            <h3>Paws & Claws Veterinary Pet Shop</h3>
            <div className='contact-info'>
              <img src={calender} alt='' className='calender' />
              <div>
                <p>Monday to Friday 8AM - 6PM</p>
                <p>Sunday 2PM - 6PM</p>
              </div>
            </div>
            <div className='contact-info'>
              <img src={location} alt='' className='location' />
              <div>
                <p>Ritz Agbogba Road, Opposite Glory Oil Filling Station</p>
                <p>ECOWAS Rd.</p>
              </div>
            </div>
            <div className='contact-info'>
              <img src={phone} alt='' className='phone' />
              <div>
                <p>+233 59 405 7497</p>
                <p>+233 59 392 9047</p>
              </div>
            </div>
          </div>
          <div className='col-map-section'>
            <div className='map-frame'>
              <iframe
                id='map-canvas'
                width='520'
                height='400'
                frameBorder='0'
                scrolling='no'
                marginHeight='0'
                marginWidth='0'
                src='https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Ecowas%20Rd,%20Accra+(Paws%20&amp;%20Claws%20Veterinary%20Pet%20Shop)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
              >
              </iframe>
            </div>
          </div>
        </div>
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
  );
};

export default ContactUs;
