import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setError] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    console.log('Forgot password button clicked');
  };

  return (
    <div className="Log-in">
      <div className="login-container">
        <h2 className="Log-in-title">Book An Appointment</h2>
        <div className="login-form">
          <div className="ll-header">
            <h2 className="ll">Welcome</h2>
            <h4 className="lolo">to Paws and Claws Veterinary Pet Shop Portal</h4>
          </div>
          <form className="login-login">
            <div className="login-info">
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError(''); // Clear error when user starts typing
                }}
                placeholder="Username"
                required
              />
            </div>
            <div className="login-info">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(''); // Clear error when user starts typing
                }}
                placeholder="Email"
                required
              />
            </div>
            <div className="login-info">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(''); // Clear error when user starts typing
                }}
                placeholder="Password"
                required
              />
            </div>
            <div className="login-signup">
              <button className="btn-btn" onClick={() => navigate('/Appointments')}>Log In</button>
              <button className="btn-btn-1" onClick={() => navigate('/SignUp')}>Sign Up</button>
            </div>
            <p>
              <a onClick={handleForgotPassword}>Forgot password?</a>
            </p>
            <p>
              <a onClick={() => navigate('/AdminLogin')}>Staff LogIn</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
