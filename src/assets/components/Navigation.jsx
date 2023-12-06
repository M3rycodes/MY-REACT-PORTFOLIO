import React from 'react';
import '../../index.css';
import logo from '../../../public/images/MyCoder-logo.jpg';
import { Link } from 'react-router-dom';



function Navigation() {
  return (
    <div className="header">
    <nav>
      <ul className="nav-menu">
        <li>
          <Link to="/About Me">About Me</Link></li>
        <li>
          <Link to="/Portfolio">Portfolio</Link></li>
        <li>
          <Link to="/Contact">Contact</Link></li>
        <li>
          <Link to="/Resume">Resume</Link></li>
      </ul>
    </nav>
    </div>
  );
}

export default Navigation;
 