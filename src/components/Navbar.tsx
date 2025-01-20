import React from 'react';
import '../Styles/Navbar.scss'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/" className="logo">MyLogo</a>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
