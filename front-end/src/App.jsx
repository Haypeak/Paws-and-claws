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
      <Title title="REVIEWS" subTitle="What customers think"/>
      <Testimonials />
      <Title title="Exciting Discount Offers"/>
      <Discount />
      <Footer />
      </div>

  )
}

export default App

