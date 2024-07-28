import { useEffect, useState } from 'react';
import logo from "../../assets/Paws&Claws logo.png";
import menu from "../../assets/menu.png";
import "./Navbar.css";
import PropTypes from 'prop-types';

const Navbar = ({ color }) => {
  const [sticky, setSticky] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`} style={{ backgroundColor: `${color}` }}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu ? 'mobile-menu' : 'hide-mobile-menu'}>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/#products'>Products</a></li>
        <li><a href='/#services'>Services</a></li>
        <li><a href='/#tips'>Tips & Updates</a></li>
        <li>
          <button className='btn'>
            <a href='/ContactUs'>Contact Us</a>
          </button>
        </li>
      </ul>
      <img src={menu} alt='' className='menu' onClick={toggleMenu} />
    </nav>
  );
}

Navbar.propTypes = {
  color: PropTypes.string.isRequired
};

export default Navbar;
