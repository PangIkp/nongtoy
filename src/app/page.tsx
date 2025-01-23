"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import Preview from "@/components/Preview";
import ProductCard from "@/components/ProductCard";

function Page() {
  const [padding, setPadding] = useState({ top: 180 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1240) {
        setPadding({ top: 180 }); // สำหรับหน้าจอที่กว้างกว่า 2840px
      } else if (window.innerWidth <= 480) {
        setPadding({ top: 110 }); // หน้าจอเล็ก
      } else if (window.innerWidth <= 768) {
        setPadding({ top: 110 });
      } else if (window.innerWidth <= 1240) {
        setPadding({ top: 140 });
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
        // style={{
        //   backgroundColor: "white",
        //   paddingLeft: `${padding.left}px`,
        //   paddingRight: `${padding.right}px`,
        //   paddingTop: `${padding.top}px`,
        //   marginBottom: "150px",
        // }}
        style={{
          paddingLeft: "10vw",
          paddingRight: "10vw",
          paddingTop: `${padding.top}px`,
          paddingBottom: "10vw",
        }}
      >
        <Preview images={images} />

        <div style={{ position: "relative", width: "300px" }}></div>

        <div>
          <div>
            <div className="header-container">
              <h1>New Product</h1>
              <a href="/arttoy">
                See More {">"} {">"}
              </a>
            </div>
          </div>

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
          </div>
        </div>

        <div>
          <div>
            <div className="header-container">
              <h1>Recommendation</h1>
              <a href="/arttoy">
                See More {">"} {">"}
              </a>
            </div>
          </div>

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
          </div>
        </div>

        <div>
          <div>
            <div className="header-container">
              <h1>Brand</h1>
            </div>
          </div>

          <div className="brand">
            <a href="/">
              <img
                src="/Images/Popmart.png"
                alt="Popmart"
                className="Popmart"
              />
            </a>

            <a href="/">
              <img src="/Images/52Toys.png" alt="52Toys" className="52Toys" />
            </a>

            <a href="/">
              <img
                src="/Images/Toycity.png"
                alt="Toycity"
                className="Toycity"
              />
            </a>

            <a href="/">
              <img
                src="/Images/Findinguni.png"
                alt="Findinguni"
                className="Findinguni"
              />
            </a>

            <a href="/">
              <img src="/Images/Heyone.png" alt="Heyone" className="Heyone" />
            </a>

            <a href="/">
              <img
                src="/Images/Tntspace.png"
                alt="Tntspace"
                className="Tntspace"
              />
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <Copyrights />
    </div>
  );
}

export default Page;
