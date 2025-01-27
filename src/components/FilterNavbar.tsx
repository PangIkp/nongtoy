import React, { useState, useRef, useEffect } from "react";
import "../Styles/FilterNavbar.scss";

const FilterNavbar = () => {
  const data = [
    { title: "POP MART", items: ["Hirono", "Labubu", "Crybaby", "Molly"] },
    { title: "52Toys", items: ["Kokoya", "Lilith"] },
    { title: "ToyCity", items: ["Laura Doll", "Hirono"] },
    { title: "Finding Unicorn", items: ["zZoton", "RiCo"] },
    { title: "Heyone", items: ["Soly", "Baobao", "Joy"] },
    { title: "TNT Space", items: ["Baby Zoraa", "DUDOO"] },
  ];

  const handleClick = (name: string) => {
    // คุณสามารถใช้ฟังก์ชันนี้ในการจัดการการคลิก เช่น แสดงข้อมูลเพิ่มเติม
    console.log(`Clicked on: ${name}`);
  };

  return (
    <div className="brands-container">
      {data.map((brand, index) => (
        <div className="brand-column" key={index}>
          {/* ชื่อแบรนด์สามารถคลิกได้ */}
          <div
            className="brand-title"
            onClick={() => handleClick(brand.title)}
            style={{ cursor: 'pointer', fontWeight: '600' }}
          >
            {brand.title}
          </div>
          {/* รายการไอเท็ม */}
          <ul>
            {brand.items.map((item, idx) => (
              <li
                key={idx}
                onClick={() => handleClick(item)} // เมื่อคลิกที่ไอเท็มให้เรียก handleClick
                style={{ cursor: 'pointer', color: 'black' }} // เปลี่ยนสีข้อความของ item เป็นสีดำ
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
  
};

export default FilterNavbar;
