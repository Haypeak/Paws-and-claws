import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
// Navigate 
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import AppointmentPage from './Pages/AppointmentPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import AdminLoginPage from './Pages/AdminLoginPage';
import ContactUsPage from './Pages/ContactUsPage'
import VeterianaryServicePage from './Pages/VeterinaryServicePage';
import DentalCarePage from './Pages/DentalCarePage';
import GroomingPage from './Pages/GroomingPage';
import MedicalCheckupPage from './Pages/MedicalCheckupPage'
import SurgeryPage from "./Pages/SurgeryPage"
import VaccinationPage from "./Pages/VaccinationPage"
import PetAndWellnessPage from './Pages/PetWellnessPage';
import VetCareAndProductPage from './Pages/VetCareAndProductPage';
// import AdminPanel from './Pages/AdminPanel';
import AdminProductFormPage from './Pages/AdminProductFormPage';
import InventoryPage from './Pages/InventoryPage';





const App = () => {
  // const isAdminAuthenticated = localStorage.getItem('adminAuthenticated'); // Check if admin is authenticated

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/ContactUs" element={<ContactUsPage />} />
        <Route path='/VeterinaryService' element={<VeterianaryServicePage />} />
        <Route path='/dental-care' element={<DentalCarePage />} />
        <Route path='/grooming' element={<GroomingPage />} />
        <Route path='/medical-checkup' element={<MedicalCheckupPage />} />
        <Route path='/surgery' element={<SurgeryPage />} />
        <Route path='/vaccinations' element={<VaccinationPage />} />
        <Route path='/Pet-wellness-care' element={<PetAndWellnessPage />} />
        <Route path='/Veterinary-Care-And-Product' element={<VetCareAndProductPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />

        {/* Admin Routes */}
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path='/new-product-edit' element={<AdminProductFormPage/>}/>
        <Route path='/inventory-page' element={<InventoryPage/>}/>
        {/* <Route path="/admin-dashboard" element={isAdminAuthenticated ? <AdminPanel /> : <Navigate to="/admin-login" />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
