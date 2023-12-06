import React from 'react';
import Navigation from '../components/Navigation';
import myImage from '../../../public/images/my-image1.jpg';
import Logo from '../../../public/images/MyCoder-logo.jpg';
import {NavLink} from 'react-router-dom';


function Header() {
   const {pathname} = window.location;
  
   return (
    <header>
      <Navigation />
      <div className="header-hero">
        <img src={myImage} alt="Portfolio Image" />
        <h1> 👋 , I'm Merrylyn Ulumenfo</h1>
        <p> Full Stack Web Developer</p>
      </div>
    </header>
  );
};

export default Header;