
import LandingPage from './Components/LandingPage/LandingPage';
import Offers from './Components/Offers/Offers';
import Commitment from './Components/Commitment/Commitment';
import SubProducts from './Components/Products/Products';
import Services from './Components/Services/Services';
import Tips from "./Components/Tips/Tips";
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Title from './Components/Title/Title';
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Personels from './Components/Personels/Personels';
import Testimonials from './Components/Testimonials/Testimonials';
import Discount from './Components/Discount/Discount';

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Personels />
      <Title title="REVIEWS" subTitle="What customers think" />
      <Testimonials />
      <Title title="Exciting Discount Offers" />
      <Discount />
      <Footer />
    </div>

  )
}

export default App


/** HOME PAGE */
{/* <Navbar />
<LandingPage />
<Title title="Discover more with us" subTitle="Welcome Pet Lovers"/>
<div className='container'>
<Offers />
<Commitment />
<SubProducts />
 <Services />
 <Tips />
 <Footer /> */}
