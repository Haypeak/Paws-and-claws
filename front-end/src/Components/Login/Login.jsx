import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure you have this import for navigation
import axios from 'axios'
import Cookies from 'js-cookie';

import './Login.css';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async (event) => {
    event.preventDefault();

    const credentials = btoa(`${email}:${password}`);
    const config = {
      headers: {
        'Authorization': `Basic ${credentials}`
      }
    };
    try {
      const response = await axios.post('http://127.0.0.1:5000/auth/login', {}, {
        auth: {
          username: email,
          password:password
        }
      });
      if (response.status === 200) {
        // Handle successful login (e.g., save token, redirect)
        if (response.data.token) {
          // Save the token as a cookie
          Cookies.set('token', response.data.token);

          // Handle successful login (e.g., redirect)
          navigate('/appointments');
          console.log('Login successful:', response.data);
        } else {
          setError('Login failed. Please check your credentials.');
        }
        console.log('Login successful:', response.data);
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', error);
    }
  };

  const handleForgotPassword = () => {
    // Call forgot password API here
    console.log('Forgot password button clicked');
  };

  return (
    <div className="Log-in">
      <div className="login-container">
        {/* <h2 className="Log-in-title">Book An Appointment</h2> */}
        <div className="login-form">
          <div className="ll-header">
            <h2 className="ll">Welcome</h2>
            <h4 className="lolo"> to Paws and Claws Veterinary Pet Shop Portal</h4>
          </div>

          <form className="login-login" onSubmit={handleLogin}>
            <div className="login-info">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>

            <div className="login-info">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>

            <div className="login-signup">
            <button className="btn-btn" type="submit">Log In</button>
              <button className="btn-btn" onClick={() => navigate('/SignUp')}>Sign Up</button>
             
            </div>

            <p>
              <a onClick={handleForgotPassword}>Forgot password?</a>
            </p>
            {/* <p>
              <a onClick={() => navigate('/AdminLogin')}>Staff LogIn</a>
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
