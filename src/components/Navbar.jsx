import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../public/images/MyCoder-logo.jpg';
import '../../src/index.css';



function Navbar() {
  return (
    <div className="header">
    <nav>
      <ul className="nav-menu">
        <li>
          <Link to="/About Me">About Me</Link></li>
        <li>
          <Link to="/Skills">Skills</Link></li>
        <li>
          <Link to="/Projects">Projects</Link></li>
        <li>
          <Link to="/Contact">Contact</Link></li>
        <li>
          <Link to="/Resume">Resume</Link></li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;
 