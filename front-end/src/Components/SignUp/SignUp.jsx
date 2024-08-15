import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import acceptDisabled from '../../assets/acceptDisabled.png';
import './SignUp.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long, and include 1 uppercase letter, 1 lowercase letter, and 1 number.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Call signup API here
      const response = await fetch('http://127.0.0.1:5000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, first_name, last_name, phone_number, email, password }),
      });

      if (response.ok) {
        // Retrieve existing profiles from localStorage
        const existingProfiles = JSON.parse(localStorage.getItem('userProfiles')) || [];

        // Create new profile
        const newProfile = { username, email, image: null };

        // Add new profile to existing profiles
        const updatedProfiles = [...existingProfiles, newProfile];

        // Store updated profiles in localStorage
        localStorage.setItem('userProfiles', JSON.stringify(updatedProfiles));

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
    <div className="sign-container">
      <div className="sign-in">
        <div className="ss-header" style={{ marginBottom: '10px', color:'#d07322' }}>
          <h2 className="ss">Welcome</h2>
          <h4 className="soso">to Paws and Claws Veterinary Pet Shop Registration Portal</h4>
        </div>

        <form className="sign-sign" onSubmit={handleSignUp}>
          <div className="sign-info username-input">
            <input
            className='sign-username'
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError(''); // Clear error when user starts typing
              }}
              placeholder="Username"
              required
            />
          </div>

          <div className="sign-info">
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

          <div className="sign-info">
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
            <button className="btn-btn-1" type="submit" onClick={() => navigate('/appointments')}>Sign Up</button>
          </div>
          <p style={{color:'red', textAlign:'center'}}>If an error occurs whiles filling the form the message will be dispalyed here.</p>

          <p>
            <a onClick={() => navigate('/login')}>Already have an account?<span style={{color:'#d07322'}}> Log in</span></a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
