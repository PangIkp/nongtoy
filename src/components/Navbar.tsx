import React from 'react';
import '../Styles/Navbar.scss'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/" className="logo">MyLogo</a>
      <ul className="nav-links">
        <li><a href="/">Toy Match</a></li>
        <li><a href="/about">Art Toy</a></li>
        <li><a href="/contact">Community</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
