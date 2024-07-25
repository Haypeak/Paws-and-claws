import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import AppointmentsPage from './Pages/AppointmentPage';
import LoginPage from './Pages/LoginPage';
import AdminLoginPage from './Pages/AdminLoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/syslogin" element={<AdminLoginPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      
    </Router>
  );
}

export default App;
