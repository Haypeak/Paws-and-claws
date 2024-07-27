import { useEffect, useState } from 'react';
import logo from "../../assets/Paws&Claws logo.png";
import menu from "../../assets/menu.png";
import "./Navbar.css"
import PropTypes from 'prop-types';
const Navbar = ({color}) => {

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () =>{
     
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }
  return (
      <nav className={`container ${sticky ? 'dark-nav' : ''}`} style={{backgroundColor: `${color}`}}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu ? 'mobile-menu' : 'hide-mobile-menu'}>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/#products'>Products</a></li>
        <li><a href='/#services'>Services</a></li>
        <li><a href='/#tips'>Tips & Updates</a></li>
        <li>
          {/* <button className='btn'> */}
          <a href='/login'>Contact Us</a>
          {/* </button> */}
          </li>
      </ul>
      <img src={menu} alt='' className='menu' onClick={toggleMenu}/>
    </nav>
  )
}
Navbar.propTypes = {
  color: PropTypes.string.isRequired
}

export default Navbar
