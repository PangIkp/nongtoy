"use client";
import React, { useState, useRef, useEffect } from "react";
import "../Styles/Navbar.scss";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // กำหนดประเภทให้ useState
  const menuRef = useRef<HTMLDivElement>(null); // ใช้ Ref สำหรับอ้างอิง Sidebar

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen); // สลับสถานะของเมนู
  };

  const handleClickOutside = (event: MouseEvent): void => {
    // ตรวจสอบว่าคลิกอยู่นอก Sidebar หรือไม่
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false); // ปิด Sidebar
    }
  };

  useEffect(() => {
    // เพิ่ม Event Listener สำหรับตรวจจับการคลิก
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // ลบ Event Listener เมื่อ Component ถูกถอด
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="container">
        <a href="/">
        <img src="/Images/Logo.png" alt="Logo" className="Logo" />
        </a>
      </div>

      {/* เมนูหลัก (แสดงใน desktop) */}
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
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

      {/* Hamburger menu */}
      <div className="bars" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* เมนู sidebar */}
      <div
        className={`mobile-menu ${isMenuOpen ? "active" : ""}`}
        ref={menuRef} // อ้างอิง Sidebar
      >
        <a href="/">Home</a>
        <a href="/toymatch">Toy Match</a>
        <a href="/arttoy">Art Toy</a>
        <a href="/community">Community</a>
        <a href="/favorite">Favorite</a>
        <a href="/cart">Cart</a>
      </div>
    </div>
  );
};

export default Navbar;
