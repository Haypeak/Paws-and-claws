import { useState } from "react";
import {useNavigate } from "react-router-dom";
// import axios from "axios";
import './AdminLogin.css';
// import Dashboard from "../../AdminPanel/AdminPages/Dashboard/Dashboard"

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize navigate
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Implement your authentication logic here
      // console.log('Email:', email);
      // console.log('Password:', password);
      navigate('/Admin-dashboard');
    };
  
  //   try {
  //     // Make a POST request to your login API endpoint
  //     const response = await axios.post('http://your-api-url/auth/login', {
  //       username: email,
  //       password: password,
  //     });

  //     if (response.status === 200) {
  //       // Assuming the API returns a token or some success response
  //       // You can save the token in localStorage or cookies
  //       localStorage.setItem('adminToken', response.data.token);
        
  //       // Navigate to the admin dashboard
  //       navigate('/admin-dashboard');
  //     } else {
  //       setError('Login failed. Please check your credentials.');
  //     }
  //   } catch (error) {
  //     setError('An error occurred. Please try again.');
  //     console.error('Login error:', error);
  //   }
  // };

    return (
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Admin Login</h2>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          {/* {error && <p className="error">{error}</p>} */}
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  
export default AdminLogin;
