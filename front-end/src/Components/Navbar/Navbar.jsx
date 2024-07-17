import React, { useEffect, useState } from 'react';
import logo from "../../assets/Paws&Claws logo.png";
import menu from "../../assets/menu.png";
import "./Navbar.css"
const Navbar = () => {

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
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu? '':'hide-mobile-menu'}>
        <button><li><a href='/'>Home</a></li></button>
        <button><li><a href='/#about'>About</a></li></button>
        <button><li><a href='/#products'>Products</a></li></button>
        <button><li><a href='/#services'>Services</a></li></button>
        <button><li><a href='/#tips'>Tips & Updates</a></li></button>
        <li><button className='btn'><a href=''>Contact Us</a></button></li>
      </ul>
      <img src={menu} alt='' className='menu' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
