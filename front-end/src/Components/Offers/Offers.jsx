import React from 'react';
import "./Offers.css";
import pets1 from "../../assets/pets1.jpg";
import pets2 from "../../assets/pets2.jpg";
import pets3 from "../../assets/pets3.jpg";
import peticon1 from "../../assets/pet-icon1.png";
import peticon2 from "../../assets/pet-icon2.png";
import peticon3 from "../../assets/pet-icon3.png";

const Offers = () => {
    return (
        <div className='offers'>
            <div className='offer'>
                <img src={pets1} alt='' />
                <div className='caption'>
                    <img src={peticon1} alt='' />
                    <p>Happy pets, happy smiles</p>
                </div>
            </div>
            <div className='offer'>
                <img src={pets2} alt='' />
                <div className='caption'>
                    <img src={peticon2} alt='' />
                    <p>Healthy pets, Healthy Family</p>
                </div>
            </div>
            <div className='offer'>
                <img src={pets3} alt='' />
                <div className='caption'>
                    <img src={peticon3} alt='' />
                    <p>Great pets deserve greate attention</p>
                </div>
            </div>
        </div>
    )
}

export default Offers
