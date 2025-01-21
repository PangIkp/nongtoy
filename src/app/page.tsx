"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import Preview from "@/components/Preview";
import ProductCard from "@/components/ProductCard";

function Page() {
  const [padding, setPadding] = useState({ left: 140, right: 140, top: 150 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 2840) {
        setPadding({ left: 300, right: 300, top: 180 }); // สำหรับหน้าจอที่กว้างกว่า 2840px
      } else if (window.innerWidth <= 480) {
        setPadding({ left: 20, right: 20, top: 110 }); // หน้าจอเล็ก
      } else if (window.innerWidth <= 768) {
        setPadding({ left: 50, right: 50, top: 110 });
      } else if (window.innerWidth <= 1024) {
        setPadding({ left: 100, right: 100, top: 140 });
      } else {
        setPadding({ left: 140, right: 140, top: 150 }); // ค่าเริ่มต้น
      }
    };

    handleResize(); // Set initial padding
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = ["/Images/Preview1.png", "/Images/Preview2.png"];

 
  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <Header />
      <Navbar />
      <div
        style={{
          backgroundColor: "white",
          paddingLeft: `${padding.left}px`,
          paddingRight: `${padding.right}px`,
          paddingTop: `${padding.top}px`,
        }}
      >
        <Preview images={images} />

        <div>
          <h1
            style={{
              color: "black",
              marginTop: "100px",
              fontSize: "28px",
              fontWeight: "500",
            }}
          >
            New Product
          </h1>
          <ProductCard
            productName="Mega space Moolly 100% Series 2"
            productPrice="$10.00"
            productImage="/Images/Preview1.png"
            productDescription="This is the description of Product 1."
            // onAddToCart={handleAddToCart}
          />
        </div>
      </div>

      <Footer />
      <Copyrights />
    </div>
  );
}

export default Page;
