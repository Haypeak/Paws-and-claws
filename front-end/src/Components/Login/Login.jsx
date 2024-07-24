import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Call login API here
    console.log('Login button clicked');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Call signup API here
    console.log('Signup button clicked');
  };

  const handleForgotPassword = () => {
    // Call forgot password API here
    console.log('Forgot password button clicked');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>{isSignup? 'Sign up' : 'Log in'}</h2>
        <form>
          {isSignup && (
            <div className="form-group">
              <i className="fas fa-envelope" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          )}
          <div className="form-group">
            <i className="fas fa-user" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <i className="fas fa-lock" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          {isSignup? (
            <button onClick={handleSignup}>Sign up</button>
          ) : (
            <button onClick={handleLogin}>Log in</button>
          )}
        </form>
        <p>
          {isSignup? (
            <span>
              Already have an account? <a onClick={() => setIsSignup(false)}>Log in</a>
            </span>
          ) : (
            <span>
              Don't have an account? <a onClick={() => setIsSignup(true)}>Sign up</a>
            </span>
          )}
        </p>
        <p>
          <a onClick={handleForgotPassword}>Forgot password?</a>
        </p>
      </div>
    </div>
  );
}

export default Login;