import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import AppointmentPage from './Pages/AppointmentPage';
// import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import AdminLoginPage from './AdminPanel/AdminPages/AdminLogin';
import ContactUsPage from './Pages/ContactUsPage'
import VeterianaryServicePage from './Pages/VeterinaryServicePage';
import DentalCarePage from './Pages/DentalCarePage';
import GroomingPage from './Pages/GroomingPage';
import MedicalCheckupPage from './Pages/MedicalCheckupPage'
import SurgeryPage from "./Pages/SurgeryPage"
import VaccinationPage from "./Pages/VaccinationPage"
import PetAndWellnessPage from './Pages/PetWellnessPage';
import Dashboard from './AdminPanel/AdminPages/Dashboard/Dashboard.jsx';
import Inventory from './AdminPanel/AdminPages/Inventory/Inventory.jsx';
import UserManagement from './AdminPanel/AdminPages/User/UserManagement.jsx';
import MainActivities from './AdminPanel/AdminPages/Activities/MainActivities.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/About" element={<AboutPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/AdminLogin" element={<AdminLoginPage />} />
        <Route path="/ContactUs" element={<ContactUsPage />} />
        <Route path='/VeterinaryService' element={<VeterianaryServicePage/>}/>
        <Route path='/dental-care' element={<DentalCarePage/>}/>
        <Route path='/grooming' element={<GroomingPage/>}/>
        <Route path='/medical-checkup' element={<MedicalCheckupPage/>}/>
        <Route path='/surgery' element={<SurgeryPage/>}/>
        <Route path='/vaccinations' element={<VaccinationPage/>}/>
        <Route path='/Pet-wellness-care' element={<PetAndWellnessPage/>}/>
        <Route path="/Admin-dashboard" element={<Dashboard />} />
        <Route path="/admin-inventory" element={<Inventory />} />
        <Route path="/admin-user" element={<UserManagement />} /> 
        <Route path="/Admin-activities" element={<MainActivities />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      
    </Router>
  );
}

export default App;
