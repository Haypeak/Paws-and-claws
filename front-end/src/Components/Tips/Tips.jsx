// import React from 'react';
import "./Tips.css";
import health from "../../assets/healths.png";
 

const Tips = () => {
  return (
    <div className='tips'>
        <div className='tips-left'>
            <img src={health} alt='' className='health'/>
        </div>
      <div className='tips-rigt'>
        <h2> Get access free to Health tips & Updates</h2>
        <p>Sign up today to receive helpful tips and updates that will greatly benefit your pets! Stay informed with the latest health advice, grooming techniques, and nutrition insights tailored to keep your furry friends happy and healthy. Our expert team is dedicated to providing you with valuable information to ensure your pets thrive. Join our community and give your pets the best care they deserve!
</p>

      </div>
    </div>
  )
}

export default Tips
