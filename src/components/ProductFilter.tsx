"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "../Styles/ProductFilter.scss";

const ProductFilter = () => {
  const [isExpandedCharacter, setIsExpandedCharacter] = useState(true);
  const [isExpandedBrand, setIsExpandedBrand] = useState(true);
  const [showFilter, setShowFilter] = useState(false);

  const toggleCharacter = () => {
    setIsExpandedCharacter((prev) => !prev);
  };

  const toggleBrand = () => {
    setIsExpandedBrand((prev) => !prev);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter); // เปลี่ยนสถานะการแสดงฟิลเตอร์
  };

  return (
    <div
      className="arttoy-container"
      style={{
        display: "flex",
        justifyContent: "space-between", // เว้นระยะห่างระหว่าง filter และ product-container
        alignItems: "flex-start", // จัดให้อยู่แนวบนสุด
        gap: "20px",
        padding: "20px",
      }}
    >
      {/* ฟิลเตอร์อยู่ทางซ้าย */}
      <div>
        {/* หมวดหมู่: ประเภทสินค้า */}
        <div className="filter-container">
          {/* Header พร้อมปุ่มเปิด/ปิด */}
          <div className="filter-header" onClick={toggleCharacter}>
            <h4>Characters</h4>
            <button className="toggle-button">
              {isExpandedCharacter ? "▴" : "▾"}
            </button>
          </div>

          {/* ตัวเลือกหมวดหมู่ (ซ่อน/แสดง) */}
          {isExpandedCharacter && (
            <div className="filter-options">
              <label>
                <input
                  type="checkbox"
                  className="filter-checkbox"
                  value="electronics"
                />{" "}
                Hirono
              </label>
              <label>
                <input
                  type="checkbox"
                  className="filter-checkbox"
                  value="clothing"
                />{" "}
                Labubu
              </label>
              <label>
                <input
                  type="checkbox"
                  className="filter-checkbox"
                  value="accessories"
                />{" "}
                Crybaby
              </label>
            </div>
          )}
        </div>

        {/* หมวดหมู่: สี */}
        <div className="filter-container">
          {/* Header พร้อมปุ่มเปิด/ปิด */}
          <div className="filter-header" onClick={toggleBrand}>
            <h4>Brand</h4>
            <button className="toggle-button">
              {isExpandedBrand ? "▴" : "▾"}
            </button>
          </div>

          {/* ตัวเลือกหมวดหมู่ (ซ่อน/แสดง) */}
          {isExpandedBrand && (
            <div className="filter-options">
              <label>
                <input
                  type="checkbox"
                  className="filter-checkbox"
                  value="red"
                />{" "}
                POP MART
              </label>
              <label>
                <input
                  type="checkbox"
                  className="filter-checkbox"
                  value="blue"
                />{" "}
                52Toys
              </label>
              <label>
                <input
                  type="checkbox"
                  className="filter-checkbox"
                  value="black"
                />{" "}
                ToyCity
              </label>
              <label>
                <input
                  type="checkbox"
                  className="filter-checkbox"
                  value="white"
                />{" "}
                Finding Unicorn
              </label>
            </div>
          )}
        </div>
      </div>

      <div>
        {/* ปุ่มตัวกรองที่จะแสดงเมื่อหน้าจอเล็กลง */}
        <button
          className="filter-button"
          onClick={toggleFilter} // เมื่อคลิกจะเปิด/ปิดฟิลเตอร์
        >
          Filter
        </button>

        {/* ฟิลเตอร์จะแสดงขึ้นเมื่อ showFilter เป็น true */}
        {showFilter && (
          <div className="filter-popup">
            <div className="popup">
              {/* Header ของฟิลเตอร์ */}
              <div className="popup-header">
                <h4>Character</h4>
                <button
                  className="toggle-button"
                  onClick={toggleFilter} // คลิกเพื่อปิดฟิลเตอร์
                >
                  &times; {/* ไอคอนสำหรับปิดฟิลเตอร์ */}
                </button>
              </div>

              {/* ตัวเลือกของฟิลเตอร์ */}
              <div className="popup-options">
                <label>
                  <input
                    type="checkbox"
                    className="filter-checkbox"
                    value="Hirono"
                  />{" "}
                  Hirono
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="filter-checkbox"
                    value="Hirono"
                  />{" "}
                  Hirono
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="filter-checkbox"
                    value="Hirono"
                  />{" "}
                  Hirono
                </label>
              </div>

              <div className="popup-header">
                <h4>Brand</h4>
              </div>

              <div className="popup-options">
                <label>
                  <input
                    type="checkbox"
                    className="filter-checkbox"
                    value="POP MART"
                  />{" "}
                  POP MART
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="filter-checkbox"
                    value="POP MART"
                  />{" "}
                  POP MART
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="filter-checkbox"
                    value="POP MART"
                  />{" "}
                  POP MART
                </label>
              </div>
            </div>
          </div>
        )}
        <div className="product-container">
          <ProductCard
            productName="Mega space Moolly 100% Series 2"
            productPrice="฿10.00"
            productImage="/Images/Preview1.png"
            productBrand="POP MART"
            productQty="New"
          />

          <ProductCard
            productName="Mega space Moolly 100% Series 2"
            productPrice="฿10.00"
            productImage="/Images/Preview1.png"
            productBrand="POP MART"
            productQty="New"
          />

          <ProductCard
            productName="Mega space Moolly 100% Series 2"
            productPrice="฿10.00"
            productImage="/Images/Preview1.png"
            productBrand="POP MART"
            productQty="New"
          />

          <ProductCard
            productName="Mega space Moolly 100% Series 2"
            productPrice="฿10.00"
            productImage="/Images/Preview1.png"
            productBrand="POP MART"
            productQty="New"
          />

          <ProductCard
            productName="Mega space Moolly 100% Series 2"
            productPrice="฿10.00"
            productImage="/Images/Preview1.png"
            productBrand="POP MART"
            productQty="New"
          />

          <ProductCard
            productName="Mega space Moolly 100% Series 2"
            productPrice="฿10.00"
            productImage="/Images/Preview1.png"
            productBrand="POP MART"
            productQty="New"
          />

          <ProductCard
            productName="Mega space Moolly 100% Series 2"
            productPrice="฿10.00"
            productImage="/Images/Preview1.png"
            productBrand="POP MART"
            productQty="New"
          />

          <ProductCard
            productName="Mega space Moolly 100% Series 2"
            productPrice="฿10.00"
            productImage="/Images/Preview1.png"
            productBrand="POP MART"
            productQty="New"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
