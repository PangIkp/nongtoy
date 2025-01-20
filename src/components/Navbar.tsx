"use client";
import React, { useState } from "react";
import "../Styles/Navbar.scss";
import Link from "next/link";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="container">
        <img src="/Images/Logo.png" alt="Logo" className="Logo" />
      </div>

      <div className="nav-links">
        <a href="/toymatch">Toy Match</a>
        <a href="/arttoy">Art Toy</a>
        <a href="/community">Community</a>
      </div>

      <div className="search-container">
        <div className="search-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Search for art toys"
          />
          <img
            src="/Images/Search.png"
            alt="Search Icon"
            className="search-icon"
          />
        </div>
      </div>

      <div className="container">
        <img src="/Images/Favorite.png" alt="Favorite" className="Favorite" />
        <img src="/Images/Cart.png" alt="Cart" className="Cart" />
        <Link href="/login">
          <p className="gradient-button">Login</p>
        </Link>
      </div>
    </div>

    
  );
};

export default Navbar;
