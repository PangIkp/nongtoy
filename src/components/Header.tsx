import React from 'react';
import '../Styles/Header.scss'; 

const Header = () => {
  return (
    <div className="header space-x-10">
        <a>Contact us</a>
        <img src="/Images/Facebook.png" alt="Facebook" className="Facebook" />
        <img src="/Images/Instagram.png" alt="Instagram" className="Instagram" />

    </div>
  );
}

export default Header;
