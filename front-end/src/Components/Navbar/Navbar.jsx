import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import logo from "../../assets/Paws&Claws logo.png";
import menu from "../../assets/menu.png";
import profileIcon from '../../assets/profile.png';
import "./Navbar.css";

const Navbar = () => {
  const { authState, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const isUserProfilePage = location.pathname === '/user-profile';

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' onClick={() => navigate('/')}/>
      <ul className={mobileMenu ? 'mobile-menu' : 'hide-mobile-menu'}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/Veterinary-Care-And-Product'>Products</Link></li>
        <li><Link to='/VeterinaryService'>Services</Link></li>
        <li><Link to='/#tips'>Tips & Updates</Link></li>
        <li>
          <button className='btn'>
            <Link to='/ContactUs'>Contact Us</Link>
          </button>
        </li>
      </ul>
      <div className="right-section">
        {authState.isAuthenticated ? (
          isUserProfilePage ? (
            <button className='logout-btn' onClick={handleLogout}>Logout</button>
          ) : (
            <img 
              src={profileIcon} 
              alt="Profile" 
              className="profile-icon" 
              onClick={() => navigate('/user-profile')}
            />
          )
        ) : (
          <div className="login-section">
            <button className='login-btn' onClick={() => navigate('/login')}>
              Login
            </button>
          </div>
        )}
        <img src={menu} alt='' className='menu' onClick={toggleMenu} />
      </div>
    </nav>
  );
}

export default Navbar;
