// import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import LandingPage from '../Components/LandingPage/LandingPage';
import Offers from '../Components/Offers/Offers';
import Title from '../Components/Title/Title';
import Commitment from '../Components/Commitment/Commitment';
import SubProducts from '../Components/Products/Products';
import Services from '../Components/Services/Services';
import Tips from "../Components/Tips/Tips";
import Footer from "../Components/Footer/Footer"
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div id='home'>
      <LandingPage />
      </div>
      {/* <div className='container'> */}
      <div id='about' style={{padding: '70px'}}>
      <Title title="Discover more with us" subTitle="Welcome Pet Lovers"/>
      <Offers />
      <Commitment />
      </div>
      <div id='products' style={{padding: '20px'}}>
      <SubProducts />
      </div>
      <div id='services'style={{padding: '10px'}}>
       <Services />
       </div>
       <div id='tips' style={{padding: '20px'}}>
       <Tips />
       </div>
       <Footer />
      </div>
    // </div>
  )
}

export default HomePage;
