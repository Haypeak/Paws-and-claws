import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Simulated user data for validation
  const registeredUsers = [
    { email: 'user1@example.com', password: 'Password123' },
    { email: 'user2@example.com', password: 'Password456' }
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    const user = registeredUsers.find(user => user.email === email);
    if (user) {
      if (user.password === password) {
        setError('');
        navigate('/Appointments');
      } else {
        setError('Incorrect password. Please try again.');
      }
    } else {
      setError('User not found. Please sign up first.');
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Implement forgot password logic here
  };

  return (
    <div className="Log-in">
      <div className="login-container">
        <div className="login-form">
          <div className="ll-header">
            <h2 className="ll">Welcome</h2>
            <h4 className="lolo">to Paws and Claws Veterinary Pet Shop Portal</h4>
          </div>

          <form className="login-login" onSubmit={handleLogin}>
            <div className="login-info">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
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
                  setError('');
                }}
                placeholder="Password"
                required
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <div className="login-signup">
              <button type="submit" className="btn-btn">Log In</button>
              <button type="button" className="btn-btn" onClick={() => navigate('/SignUp')}>Sign Up</button>
            </div>

            <p>
              <a onClick={handleForgotPassword}>Forgot password?</a>
              <a href='/new-product-edit'>a</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
