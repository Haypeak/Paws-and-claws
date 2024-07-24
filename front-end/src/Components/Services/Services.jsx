// import React from 'react';
import "./Services.css";
import service1 from "../../assets/service1.jpg";
import service2 from "../../assets/services2.jpg";
import service3 from "../../assets/services3.jpg";
import service4 from "../../assets/services4.jpg";
import icon from "../../assets/service-icon.png";



const Services = () => {
    return (
        <div className='services'>
            <div className='services-left'>
                <h3>WHAT WE OFFER</h3>
                <h2>Treating your pets is our top priority</h2>
                <p>At Paws and Claws, we offer a wide range of services to keep your pets healthy and happy, from vaccinations and check-ups to professional grooming and dental care. Our dedicated team uses the latest techniques and high-quality products to ensure top-notch care for your pets.</p>
                <p>We love animals and strive to make every visit a positive experience. Our friendly staff is always ready to offer advice and support, ensuring your pets get the best attention. Visit Paws and Claws Pet Shop and experience our commitment to your pet&#39;s well-being!  <button className='bb'>Discover more <img src={icon} alt='' className='icon'/></button></p>

            </div>
            <div className='services-right'>
                <img src={service1} alt='' className='jj' />
                <img src={service2} alt='' className='jj'/>
                <img src={service4} alt='' className='jj'/>
                <img src={service3} alt='' className='jj'/>
            </div>

        </div>
    )
}

export default Services
