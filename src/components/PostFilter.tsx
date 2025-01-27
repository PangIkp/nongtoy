"use client";
import React, { useState } from "react";
import PostCard from "./PostCard";
import "../Styles/PostFilter.scss";

const PostFilter = () => {
  const [isExpandedRange, setIsExpandedRange] = useState(true);
  const [isExpandedCon, setIsExpandedCon] = useState(true);
  const [showFilter, setShowFilter] = useState(false);

  const toggleRange = () => {
    setIsExpandedRange((prev) => !prev);
  };

  const toggleCon = () => {
    setIsExpandedCon((prev) => !prev);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter); // เปลี่ยนสถานะการแสดงฟิลเตอร์
  };

  return (
    <div
      className="post-container"
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
          <div className="filter-header" onClick={toggleRange}>
            <h4>Price Range</h4>
            <button className="toggle-button">
              {isExpandedRange ? "▴" : "▾"}
            </button>
          </div>

          {/* ตัวเลือกหมวดหมู่ (ซ่อน/แสดง) */}
          {isExpandedRange && (
            <div className="filter-options">
              <label>
                <input
                  type="checkbox"
                  className="filter-checkbox"
                  value="electronics"
                />{" "}
                Low to High
              </label>
              <label>
                <input
                  type="checkbox"
                  className="filter-checkbox"
                  value="clothing"
                />{" "}
                High to low
              </label>
            </div>
          )}
        </div>

        {/* หมวดหมู่: สี */}
        <div className="filter-container">
          {/* Header พร้อมปุ่มเปิด/ปิด */}
          <div className="filter-header" onClick={toggleCon}>
            <h4>Condition</h4>
            <button className="toggle-button">
              {isExpandedCon ? "▴" : "▾"}
            </button>
          </div>

          {/* ตัวเลือกหมวดหมู่ (ซ่อน/แสดง) */}
          {isExpandedCon && (
            <div className="filter-options">
              <label>
                <input
                  type="checkbox"
                  className="filter-checkbox"
                  value="red"
                />{" "}
                New
              </label>
              <label>
                <input
                  type="checkbox"
                  className="filter-checkbox"
                  value="blue"
                />{" "}
                Used
              </label>
            </div>
          )}
        </div>

        <div className="filter-container">
          {/* Header พร้อมปุ่มเปิด/ปิด */}
          <div className="filter-header" onClick={toggleRange}>
            <h4>Post Date</h4>
            <button className="toggle-button">
              {isExpandedRange ? "▴" : "▾"}
            </button>
          </div>

          {/* ตัวเลือกหมวดหมู่ (ซ่อน/แสดง) */}
          {isExpandedRange && (
            <div className="filter-options">
              <label>
                <input
                  type="checkbox"
                  className="filter-checkbox"
                  value="electronics"
                />{" "}
                Newest
              </label>
              <label>
                <input
                  type="checkbox"
                  className="filter-checkbox"
                  value="clothing"
                />{" "}
                Oldest
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
                <h4>Price Range</h4>
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
                  Low to high
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="filter-checkbox"
                    value="Hirono"
                  />{" "}
                  High to low
                </label>
              </div>

              <div className="popup-header">
                <h4>Condition</h4>
              </div>

              <div className="popup-options">
                <label>
                  <input
                    type="checkbox"
                    className="filter-checkbox"
                    value="POP MART"
                  />{" "}
                  New
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="filter-checkbox"
                    value="POP MART"
                  />{" "}
                  Used
                </label>
              </div>

              <div className="popup-header">
                <h4>Post Date</h4>
              </div>

              <div className="popup-options">
                <label>
                  <input
                    type="checkbox"
                    className="filter-checkbox"
                    value="POP MART"
                  />{" "}
                  Newest
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="filter-checkbox"
                    value="POP MART"
                  />{" "}
                  Oldest
                </label>
              </div>
            </div>
          </div>
        )}
        
        <div className="post-container">
          <PostCard
            postName="HIRONO Reshape Series Figures"
            postPrice="฿380.00"
            postImage="/Images/PostHino.png"
            postProvince="Bangkok"
          />

          <PostCard
            postName="HIRONO Reshape Series Figures"
            postPrice="฿380.00"
            postImage="/Images/PostHino.png"
            postProvince="Bangkok"
          />

          <PostCard
            postName="HIRONO Reshape Series Figures"
            postPrice="฿380.00"
            postImage="/Images/PostHino.png"
            postProvince="Bangkok"
          />

          <PostCard
            postName="HIRONO Reshape Series Figures"
            postPrice="฿380.00"
            postImage="/Images/PostHino.png"
            postProvince="Bangkok"
          />
        </div>
      </div>
    </div>
  );
};

export default PostFilter;
