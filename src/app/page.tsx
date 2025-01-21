"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import Preview from "@/components/Preview";

function Page() {
  const [padding, setPadding] = useState({ left: 140, right: 140 ,top:150});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setPadding({ left: 20, right: 20, top:110});
      } else if (window.innerWidth <= 768) {
        setPadding({ left: 50, right: 50 , top:110});
      } else if (window.innerWidth <= 1024) {
        setPadding({ left: 100, right: 100 , top:140});
      } else {
        setPadding({ left: 140, right: 140 , top:150});
      }
    };

    handleResize(); // Set initial padding
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = ["/Images/Preview1.png", "/Images/Preview2.png"];

  return (
    <div>
      <Header />
      <Navbar />
      <div
        style={{
          backgroundColor: "white",
          paddingLeft: `${padding.left}px`,
          paddingRight: `${padding.right}px`,
          paddingTop: `${padding.top}px`
        }}
      >
        <Preview images={images} />
      </div>
      <Footer />
      <Copyrights />
    </div>
  );
}

export default Page;

