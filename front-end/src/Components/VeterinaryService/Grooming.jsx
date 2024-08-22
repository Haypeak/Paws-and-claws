import './VeterinaryService.css'
import './vetService.css'
import '../ContactUs/ContactUs.css';
import animalBabies from '../../assets/cat and dog.jpeg'
// import paws from "../../assets/paw.png";
import scissors from "../../assets/icons8-barbershop-48.png";
// import groomedDog from "../../assets/groomedDog.jpg";
// import groomedCat from "../../assets/groomed-cat.jpeg";
// import groom from "../../assets/groom.jpg";
// import groom2 from "../../assets/groom2.jpg"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const DentalCare =()=>{
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
// };
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
       <h3>All Your Pet Need Is Here</h3>
       <p>Your pet’s health and well-being are our top priority. We provide compassionate and professional care to ensure your furry friends live happy and healthy lives. Explore our services and let us partner with you in caring for your beloved pets. 
       Trust Paws and Claws to treat your pets like family.
    </p>
    <button className='service-btn'>Book an Appointment</button>
          </div>
        </div>
    <div className='main-container-section'>
        <div className='Header-header'>
            <h2>Pet Grooming Service</h2>
        </div>
        <div className='container-highlight'>
            <div className='left-sub-container'>
                <div >
                <img src={animalBabies} alt='Dog and Cat Grooming' className='triangle-img' style={{marginTop:'-55px'}}/>
                </div>
            </div>
            <div className='right-sub-container'>
                <p>Is your pet starting to look a little shaggy? Does he or she smell a bit too strong? If so, it might be time for a grooming session. Pet grooming is an important part of taking care of your furry friend, and it&#39;s not as difficult as you might think. Pet grooming is the process of cleaning and caring for your pet&#39;s fur and skin. This can include brushing, shampooing, trimming, and more. Grooming is important for both dogs and cats as it keeps them clean.</p><br/>

                <p>Our professional groomer can provide your pet with all the grooming services they could possibly need to maintain their health and comfort. Every pet deserves good hygiene, and in addition to benefiting their health, regular grooming can also make your pet more comfortable with being brushed and handled. Our groomers are patient and considerate to help your dog feel more at ease and make their grooming experience enjoyable!</p>

                <div className='grooming-service-section' style={{ marginTop:'30px' }}>
              
              <div >
              {/* <h3 style={{ fontSize:'28px', color:'#000F38', marginTop:'30px' }}>Grooming</h3> */}
              <p>Pet grooming includes both the sanitary care and cleaning of the pet and the process of enhancing the pet&#39;s physical appearance.</p>
              <p>The grooming services we offer includes:</p>
              <div className='grooming-service-list'>
              <div className='grooming-service-list-col-2'>
              <ul style={{ listStyle: 'none' , color:'#9E9E9E', fontSize:'15px' }}>
                <li><img src={scissors} alt='Scissors'/>Bathing</li>
                <li><img src={scissors} alt='Scissors'/>Blow dry</li>
                <li><img src={scissors} alt='Scissors'/>Brush out</li>
                <li><img src={scissors} alt='Scissors'/>Hair trim</li>
                <li><img src={scissors} alt='Scissors'/>Dematting</li>
                <li><img src={scissors} alt='Scissors'/>Shave</li>
              </ul>
              </div>
              <div className='grooming-service-list-col-2'>
              <ul style={{ listStyle: 'none', color:'#9E9E9E', fontSize:'15px'}}>
                <li><img src={scissors} alt='Scissors'/>Haircut</li>
                <li><img src={scissors} alt='Scissors'/>Nail trim</li>
                <li><img src={scissors} alt='Scissors'/>Ear cleaning</li>
                <li><img src={scissors} alt='Scissors'/>Anal gland expression</li>
                <li><img src={scissors} alt='Scissors'/>Medicated shampoo</li>
                {/* <li><img src={scissors} alt='Scissors'/>Shave</li> */}
              </ul>
              </div>
              </div>
             
              </div>
             
            </div>
            </div>
        </div>

        {/* <div className='grooming-service-flex-direction'>
       
            <div className='grooming-slide-show'>
            <Slider {...settings}>
            <img src={groomedDog} alt=' ' className='Cat-groomed-image-slide'/>
            <img src={groomedCat} alt='' className='Cat-groomed-image-slide'/>
            <img src={groom} alt='' className='Cat-groomed-image-slide'/>
            <img src={groom2} alt='' className='Cat-groomed-image-slide'/>
            </Slider>
              </div>
        </div> */}
        
        <div className='vet-notice'>
            <h2 style={{color: '#fff'}}>Gentle Grooming Care</h2>
            <p className='vet-notice-col-1'>At Paws an Claws Veterinary Pet Shop we provide gentle grooming services for your pet&#39;s physical care.This services includes Haircut, Nail trim, Bathing, Ear cleaning and more.</p>
            <div className='vet-sub-notice'>
                <p>Grooming you pet ensures not only that your pet looks clean but it&#39;s physical appearance is kept at its best. After all, Every pet deserves good hygiene, and in addition to benefiting their health, regular grooming can also make your pet more comfortable with being brushed and handled.</p>
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


export default DentalCare;