import React, { useRef } from 'react';
import "./Testimonials.css";
import back_icon from "../../assets/back-icon.jpg";
import next_icon from "../../assets/forward-icon.jpg";
import customer1 from "../../assets/customer1.jpg";
import customer2 from "../../assets/customer2.jpg";
import customer3 from "../../assets/customer3.jpg";
import customer4 from "../../assets/customer4.jpg";

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const slideForward = () =>{
        if(tx > -50) {
            tx -= 25
        }
        slider.current.style.transform = `translate(${tx}%)`;
   
    }
const slideBackward = () =>{
    if(tx < 0) {
        tx += 25
    }
    slider.current.style.transform = `translate(${tx}%)`;        
    }


    return (
        <div className='testimonials'>
            <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
            <img src={back_icon} alt='' className='back-btn'onClick={slideBackward} />
            <div className='slider'>
                <ul ref={slider}>
                    <li><div className="slide">
                        <div className="user-info">
                            <img src={customer1} alt='' />
                            <div>
                                <h3>William Osie </h3>
                                <span>Paws&Claws, Accra</span>
                            </div>
                        </div><p>
                        "I can say that Paws and Claws has been a blessing for my pets! The veterinarians and staff are kind and helpful, especially Dr. Thompson, who performed a risky operation on my dog that others had refused. The clinic is always clean, and the personnel are friendly and welcoming. I highly recommend this clinic."</p>
                    </div>
                    </li>
                    <li><div className="slide">
                        <div className="user-info">
                            <img src={customer2} alt='' />
                            <div>
                                <h3>Pearl Danso </h3>
                                <span>Paws&Claws, Airpot</span>
                            </div>
                        </div><p>
                            For my current four legged baby, I took my German Shepherd to Dr. Rodriguez and I have no complaints at all. The entire team at Paws and Claws is highly professional and caring. If it comes to exotics and or foreign breed pets, she is a wealth of knowledge and takes time to explain any procedures that needs to be done.</p>
                    </div>
                    </li><li><div className="slide">
                        <div className="user-info">
                            <img src={customer3} alt='' />
                            <div>
                                <h3>Ruth Boateng </h3>
                                <span>Paws&Claws, Legon</span>
                            </div>
                        </div><p>
                        "Paws and Claws is the best veterinary clinic I've ever taken my cats to. The care from everyone—technicians, receptionists, doctors, and surgical nurses—is outstanding. Dr. Lee, the internal medicine specialist, always provides exceptional service. I highly recommend this clinic."</p>
                    </div>
                    </li><li><div className="slide">
                        <div className="user-info">
                            <img src={customer4} alt='' />
                            <div>
                                <h3>James Brown </h3>
                                <span>Paws&Claws, Osu</span>
                            </div>
                        </div><p>
                            "I can't say enough good things about Paws and Claws. The staff is incredibly kind and patient, and they genuinely care about the well-being of your pets. My dog had a complex surgery performed by Dr. Patel, and the care he received was outstanding. If you love your pets, take them to Paws and Claws!"</p>
                    </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Testimonials
