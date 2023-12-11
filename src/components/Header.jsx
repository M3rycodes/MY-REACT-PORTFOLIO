import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../public/images/MyCoder-logo.jpg';
import myImage from '../public/images/my-image1.jpg';
import {NavLink} from 'react-router-dom';


function Header() {
   const {pathname} = window.location;
  
   return (
    <header>
      <Navbar />
      <div className="header-hero">
        <img src={myImage} alt="Portfolio Image" />
        <img src={Logo} alt="My Logo" />
        <h1> 👋 , I'm Merrylyn Ulumenfo</h1>
        <p> Full Stack Web Developer</p>
      </div>
    </header>
  );
};

export default Header;