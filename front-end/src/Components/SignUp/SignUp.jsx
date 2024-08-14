import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import acceptDisabled from '../../assets/acceptDisabled.png';
import './SignUp.css';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long, and include 1 uppercase letter, 1 lowercase letter, and 1 number.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Retrieve existing profiles from localStorage
    const existingProfiles = JSON.parse(localStorage.getItem('userProfiles')) || [];

    // Create new profile
    const newProfile = { name, email, image: null };

    // Add new profile to existing profiles
    const updatedProfiles = [...existingProfiles, newProfile];

    // Store updated profiles in localStorage
    localStorage.setItem('userProfiles', JSON.stringify(updatedProfiles));

    // Navigate to the appointments page if validation passes
    navigate('/appointments');
  };

  return (
    <div className="Log-in">
      <div className="login-container">
        <div className="login-form">
          <div className="ll-header" style={{ marginBottom: '10px'}}>
            <h2 className="ll">Welcome</h2>
            <h4 className="lolo">to Paws and Claws Veterinary Pet Shop Registration Portal</h4>
          </div>
          <form className="login-login" onSubmit={handleSignUp}>
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
                <p>8 Characters</p>
              </div>
              <div className="password-requirement">
                <img src={acceptDisabled} alt=''/>
                <p>1 Uppercase Letter</p>
              </div>
              <div className="password-requirement">
                <img src={acceptDisabled} alt=''/>
                <p>1 Lowercase Letter</p>
              </div>
              <div className="password-requirement">
                <img src={acceptDisabled} alt=''/>
                <p>1 Number</p>
              </div>
            </div>

            {error && <p className="error-message">{error}</p>}

            <div className="login-signup">
              <button type="submit" className="btn-btn-1">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
