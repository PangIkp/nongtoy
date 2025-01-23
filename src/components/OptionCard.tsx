"use client";
import React, { useEffect, useState } from "react";
import "../Styles/Toymatch.scss";

function OptionCard() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // สถานะการคลิก

  const handleClick = (index: number) => {
    setActiveIndex(index); // ตั้งค่าคลิกให้เป็น index ที่เลือก
  };

  const options = [
    "Simple and classic",
    "Creative and unique",
    "Personalized",
    "Practical and useful"
  ]; // ตัวเลือก

  return (
    <div className="">
      <p className="question">
        1.What type of gift do you usually choose for your friends ?
      </p>

      <div className="option-container">
        {options.map((option, index) => (
          <div
            key={index}
            className={`box-option ${activeIndex === index ? "active" : ""}`} // ใช้ active เมื่อคลิก
            onClick={() => handleClick(index)} // จัดการคลิก
          >
            <p className="option">{option}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OptionCard;
