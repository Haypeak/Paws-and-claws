import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Title from './Components/Title/Title';
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Personels from './Components/Personels/Personels';
import Testimonials from './Components/Testimonials/Testimonials';
import Discount from './Components/Discount/Discount';
import HomePage from './Pages/HomePage';
import AppointmentsPage from './Pages/AppointmentPage';
import AdminLogin from './Components/AdminLogin/AdminLogin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/" element={<AdminLogin />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
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
    </Router>
  );
}

export default App;
