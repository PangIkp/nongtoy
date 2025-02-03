import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import OrderItem from "@/components/OrderItem";
import Menu from "@/components/Menu";

const orders = [
  {
    storeName: "POP MART",
    status: "Delivered",
    subtotal: 3000, // ราคาก่อนรวมค่าจัดส่ง
    shippingFee: 50, // ค่าจัดส่ง
    shippingDiscount: 20, // ส่วนลดค่าจัดส่ง
    totalPrice: 3030, // รวมทั้งหมด
    products: [
      {
        image: "/Images/PostHino.png",
        name: "HIRONO Reshape Series Figures",
        category: "Box Set",
        quantity: 1,
        price: 1500,
      },
      {
        image: "/Images/PostHino.png",
        name: "HIRONO Reshape Series Figures",
        category: "Box Set",
        quantity: 1,
        price: 1500,
      },
    ],
  },
  {
    storeName: "Manga World",
    status: "Processing",
    subtotal: 3000, // ราคาก่อนรวมค่าจัดส่ง
    shippingFee: 70, // ค่าจัดส่ง
    shippingDiscount: 30, // ส่วนลดค่าจัดส่ง
    totalPrice: 3040, // รวมทั้งหมด
    products: [
      {
        image: "/Images/PostHino.png",
        name: "HIRONO Reshape Series Figures",
        category: "Manga",
        quantity: 3,
        price: 1000,
      },
    ],
  },
];


function Order() {
    return (
      <div
        style={{ backgroundColor: "white", minHeight: "100vh", width: "100vw" }}
      >
        <Header />
        <Navbar />
  
        <div
          className="order_wrapper"
          style={{
            paddingLeft: "15vw",
            paddingRight: "15vw",
            paddingTop: "220px",
            paddingBottom: "10vw",
          }}
        >
          {/* ใช้ div ครอบ Menu และ Order */}
          <div className="order_container">
            <div className="menu_section">
              <Menu />
            </div>
  
            <div className="order_section">
              <p className="info_header_text">Order History</p>
  
              <div>
                {orders.map((order, index) => (
                  <OrderItem key={index} {...order} />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
        <Copyrights />
      </div>
    );
  }
  
  export default Order;
  