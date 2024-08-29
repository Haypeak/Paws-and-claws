import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import './AdminLogin.css';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      // Implement your authentication logic here
      if (!email || !password) {
        setError('Please fill in both email and password.');
        return;
      }
  
      try {
        const response = await axios.post('http://127.0.0.1:5000/auth/login', {}, {
          auth: {
            username: email,
            password: password
          }
        });
  
        if (response.status === 200) {
          if (response.data.token) {
            Cookies.set('token', response.data.token);
            navigate('/admin-dashboard');
          } else {
            setError('Login failed. Please check your credentials.');
          }
        } else {
          setError('Login failed. Please check your credentials.');
        }
      } catch (error) {
        setError('An error occurred. Please try again.');
        console.error('Login error:', error);
      }
    };
  
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
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  
export default AdminLogin;
