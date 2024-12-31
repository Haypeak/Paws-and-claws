import  { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { authState, loginUser } = useContext(AuthContext);

  useEffect(() => {
    // Check if user is already logged in
    if (authState.isAuthenticated) {
      navigate('/appointments'); // or whatever your destination page is
    }
  }, [authState.isAuthenticated, navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    try {
      const result = await loginUser(email, password);
      if (result.success) {
        navigate('/appointments'); // or whatever your destination page is
      } else {
        setError(result.error || 'Login failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', error);
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Implement forgot password logic here
  };

  // If user is already authenticated, don't render the login form
  if (authState.isAuthenticated) {
    return null; // or you could return a loading spinner here
  }

  return (
    <div className="login-container">
      <div className="Log-in">

        <form className="login-form" onSubmit={handleLogin}>
       
        <div className="ll-header">
          <h2 className="ll">Welcome</h2>
          <h4 className="lolo" style={{textAlign:'center'}}>to Paws and Claws Veterinary Pet Shop Portal</h4>
        </div>
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
            <button type="submit" className="btn-btn" style={{marginBottom:'5px'}}>Log In</button>
            <button type="button" className="btn-btn" onClick={() => navigate('/SignUp')}>Sign Up</button>
          </div>

          <p>
            <a onClick={handleForgotPassword}>Forgot password?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
