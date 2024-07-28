import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import acceptDisabled from '../../assets/acceptDisabled.png'
import './SignUp.css';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [, setError] = useState('');
  const navigate = useNavigate();

 

  return (
    <div className="Log-in">
      <div className="login-container">
        {/* <h2 className="Log-in-title">Book An Appointment</h2> */}
        <div className="login-form">
          <div className="ll-header" style={{ marginBottom: '10px'}}>
            <h2 className="ll">Welcome</h2>
            <h4 className="lolo">to Paws and Claws Veterinary Pet Shop Registration Portal</h4>
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
        
              <button className="btn-btn-1" onClick={() => navigate('/SignUp')}>Sign Up</button>
            </div>
        
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
