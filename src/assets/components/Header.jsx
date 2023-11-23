import React from 'react';



function Header() {
  return (
    <header>
      <div className="user">
        <img src="./my_portfolio_1.jpg.jpg" height="390px" width="290px" alt="MY SELF PORTFOLIO" />
        <h3 className="name">Merrylyn Ulumenfo</h3>
        <p className="post">Full Stack Web Developer</p>
      </div>

      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#portofolio">My Portfolio</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
