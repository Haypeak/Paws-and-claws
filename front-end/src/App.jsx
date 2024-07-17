import React from 'react';
// import Navbar from './Components/Navbar/Navbar';
// import LandingPage from './Components/LandingPage/LandingPage';
// import Offers from './Components/Offers/Offers';
// import Title from './Components/Title/Title';
// import Commitment from './Components/Commitment/Commitment';
// import SubProducts from './Components/Products/Products';
// import Services from './Components/Services/Services';
// import Tips from "./Components/Tips/Tips";
// import Footer from "./Components/Footer/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AppointmentsPage from './Pages/AppointmentPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/appointments" element={<AppointmentsPage />} /> */}
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
