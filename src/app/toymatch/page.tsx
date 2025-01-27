"use client";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OptionCard from "@/components/OptionCard";
import Copyrights from "@/components/Copyrights";

function Toymatch() {
  // สร้าง ref สำหรับการเลื่อนไปยัง OptionCard
  const optionCardRef = useRef<HTMLDivElement>(null);

  const handleScrollToOptions = () => {
    // ใช้ scrollIntoView เพื่อเลื่อนหน้าไปยัง OptionCard
    if (optionCardRef.current) {
      optionCardRef.current.scrollIntoView({
        behavior: "smooth", // ใช้การเลื่อนที่ราบรื่น
        block: "start", // เลื่อนไปที่เริ่มต้นของ div
      });
    }
  };
  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <Header />
      <Navbar />

      <div className="image-container">
        <img src="/Images/Toymatch.png" alt="Toymatch" className="Toymatch" />
        <button
          className="toymatch-button"
          onClick={handleScrollToOptions}
        >
          Take the Quiz
        </button>
      </div>

      <div className="tagline-container">
        <p className="tagline">
          Be yourself and answer honest questions to find the right art toy for
          you.
        </p>
      </div>

      <div
        style={{
          paddingLeft: "10vw",
          paddingRight: "10vw",
          paddingTop: "10vw",
        }}
        ref={optionCardRef}
      >
        <OptionCard />
        <p className="close-line"></p>
        <OptionCard />
        <p className="close-line"></p>
        <OptionCard />
        <p className="close-line"></p>
        <OptionCard />
        <p className="close-line"></p>
        <OptionCard />
        <p className="close-line"></p>
        <OptionCard />
        <p className="close-line"></p>
        <OptionCard />
      </div>

      <div className="result-button-container">
        <button
          className="result-button"
          onClick={() => alert("Button clicked!")}
        >
          Get my results
        </button>
      </div>

      <Footer />
      <Copyrights />
    </div>
  );
}

export default Toymatch;
