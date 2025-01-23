"use client";
import React, { useState } from "react";

interface PreviewProps {
  images: string[]; // array ของ URL รูปภาพ
}

const Preview: React.FC<PreviewProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // เก็บดัชนีของภาพ

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "80vw",
        borderRadius: "10px", // เพิ่ม border-radius สำหรับมุมของ container
        overflow: "hidden", // ทำให้เนื้อหาภายในไม่ล้น
      }}
    >
    <button
        onClick={prevImage}
        style={{
          position: "absolute",
          left: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          cursor: "pointer",
          zIndex: 100,        }}
      >
        &lt;
      </button>

      <div style={{ width: "100%", overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${images.length * 50}%`, // กำหนดความกว้างของ container
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Preview ${index + 1}`}
              style={{
                width: "100%", // กำหนดให้ภาพใช้ความกว้างเต็มของ parent
                minWidth: "100%", // ป้องกันการแบ่งเป็นคอลัมน์
              }}
            />
          ))}
        </div>
      </div>

      <button
        onClick={nextImage}
        style={{
          position: "absolute",
          right: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          zIndex: 100,
        }}
      >
        &gt;
      </button>
    </div>
  );
};

export default Preview;
