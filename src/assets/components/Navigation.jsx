import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './index.css';

function Navigation() {
  return (
    <div className='navigation'>
    <nav>
      <ul>
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/Portfolio">Portfolio</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Resume">Resume</Link></li>
      </ul>
    </nav>
    </div>
  );
}

export default Navigation;
