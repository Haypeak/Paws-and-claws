import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
// Navigate 
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import AppointmentPage from './Pages/AppointmentPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import AdminLoginPage from './Pages/AdminLoginPage';
import ContactUsPage from './Pages/ContactUsPage'
import VeterinaryServicePage from './Pages/VeterinaryServicePage';
import DentalCarePage from './Pages/DentalCarePage';
import GroomingPage from './Pages/GroomingPage';
import MedicalCheckupPage from './Pages/MedicalCheckupPage'
import SurgeryPage from "./Pages/SurgeryPage"
import VaccinationPage from "./Pages/VaccinationPage"
import WellnessVisitPlanPage from './Pages/WellnessVisitPlanPage';
import SprayAndNeuterPage from './Pages/SprayAndNeuterPage';
import PainManagementPage from './Pages/PainManagementPage';
import DiagnosticsPage from './Pages/DiagnosticsPage';
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
        <Route path='/VeterinaryService' element={<VeterinaryServicePage />} />
        <Route path='/dental-care' element={<DentalCarePage />} />
        <Route path='/grooming' element={<GroomingPage />} />
        <Route path='/medical-checkup' element={<MedicalCheckupPage />} />
        <Route path='/surgery' element={<SurgeryPage />} />
        <Route path='/vaccinations' element={<VaccinationPage />} />
        <Route path='/wellness-plan' element={<WellnessVisitPlanPage />} />
        <Route path='/spray-and-neuter' element={<SprayAndNeuterPage />} />
        <Route path='/pain-management' element={<PainManagementPage />} />
        <Route path='/diagnostics' element={<DiagnosticsPage />} />
        <Route path='/Veterinary-Care-And-Product' element={<VetCareAndProductPage />} />
        <Route path='/logout' action={document.cookie = '' && document.location}/>
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
