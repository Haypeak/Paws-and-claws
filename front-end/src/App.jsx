import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import AppointmentsPage from './Pages/AppointmentPage';
import AdminLogin from './Components/AdminLogin/AdminLogin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/" element={<AdminLogin />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      
    </Router>
  );
}

export default App;
