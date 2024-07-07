import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Offers from './Components/Offers/Offers';
import Title from './Components/Title/Title';
import Commitment from './Components/Commitment/Commitment';
import SubProducts from './Components/Products/Products';
import Services from './Components/Services/Services';
import Tips from "./Components/Tips/Tips";
import Footer from "./Components/Footer/Footer"
const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Title title="Discover more with us" subTitle="Welcome Pet Lovers"/>
      <div className='container'>
      <Offers />
      <Commitment />
      <SubProducts />
       <Services />
       <Tips />
       <Footer />
      </div>
    </div>
  )
}

export default App
