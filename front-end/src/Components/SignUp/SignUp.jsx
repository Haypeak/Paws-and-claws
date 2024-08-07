import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import acceptDisabled from '../../assets/acceptDisabled.png'
import './SignUp.css';

function SignUp() {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Call signup API here
      const response = await fetch('http://127.0.0.1:5000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      if (response.ok) {
        // Handle successful signup (e.g., redirect to login page)
        navigate('/login');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="Log-in">
      <div className="login-container">
        {/* <h2 className="Log-in-title">Book An Appointment</h2> */}
        <div className="login-form">
          <div className="ll-header" style={{ marginBottom: '10px'}}>
            <h2 className="ll">Welcome</h2>
            <h4 className="lolo">to Paws and Claws Veterinary Pet Shop Registration Portal</h4>
          </div>
          <form className="login-login" onSubmit={handleSignup}>
            <div className="login-info">
              <input
                type="text"
                value={username}
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

            <div className="login-info">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setError(''); // Clear error when user starts typing
                }}
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="psswrd-requirement-col">
              <div className="password-requirement">
                <img src={acceptDisabled} alt=''/>
                <p> 8 Characters </p>
              </div>
              <div className="password-requirement">
              <img src={acceptDisabled} alt=''/>
              <p> 1 Uppercase Letter </p>
              </div>
              <div className="password-requirement">
              <img src={acceptDisabled} alt=''/>
              <p className="password-requirement">1 Lowercase Letter</p>
              </div>
              <div className="password-requirement">
              <img src={acceptDisabled} alt=''/>
              <p >1 Number</p>
              </div>
            </div>

            <div className="login-signup">
        
              <button className="btn-btn-1" type="submit">Sign Up</button>
            </div>
            <p>
              <a onClick={() => navigate('/login')}>Already have an account? Log in</a>
            </p>        
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
