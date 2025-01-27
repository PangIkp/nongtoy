"use client";
import React, { useState, useRef, useEffect } from "react";
import "../Styles/Navbar.scss";
import Link from "next/link";
import FilterNavbar from "./FilterNavbar";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const filterNavbarRef = useRef<HTMLDivElement | null>(null); // ref สำหรับ FilterNavbar

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen); // สลับสถานะของเมนู
  };

  const handleMouseEnter = (): void => {
    setIsHovering(true); // แสดง dropdown เมื่อ hover ที่ปุ่มหรือที่ dropdown
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>): void => {
    const relatedTarget = event.relatedTarget;

    // เช็คว่าถ้าเมาส์อยู่ใน FilterNavbar หรือ dropdown ไม่ให้ซ่อน
    if (
      relatedTarget &&
      dropdownRef.current &&
      !dropdownRef.current.contains(relatedTarget as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(relatedTarget as Node) &&
      !filterNavbarRef.current?.contains(relatedTarget as Node) // เช็คว่าเมาส์อยู่ใน FilterNavbar
    ) {
      setIsHovering(false); // ซ่อน dropdown หลังจากดีเลย์
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

  const handleClickOutside = (event: MouseEvent): void => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false); // ปิด Sidebar
    }
  };

  return (
    <div className="navbar">
      <div className="container">
        <a href="/">
          <img src="/Images/Logo.png" alt="Logo" className="Logo" />
        </a>
      </div>

      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <div>
          <a href="/toymatch">Toy Match</a>
        </div>

        <div
          className="art-toy-dropdown"
          ref={buttonRef}
          onMouseEnter={handleMouseEnter} // แสดง dropdown เมื่อ hover
          onMouseLeave={handleMouseLeave} // ซ่อน dropdown เมื่อ mouse ออกจากทั้งสอ
        >
          <a href="/arttoy" style={{ padding: "35px" }}>
            Art Toy{" "}
          </a>
          {isHovering && (
            <div
              className="dropdown-content"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter} // เมื่อ hover ที่ dropdown
              onMouseLeave={handleMouseLeave} // เมื่อเมาส์ออกจาก dropdown
            >
              <div ref={filterNavbarRef}>
                <FilterNavbar />
              </div>
            </div>
          )}
        </div>

        <div>
          <a href="/community">Community</a>
        </div>
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
        ref={menuRef}
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
