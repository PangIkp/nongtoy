import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import OrderItem from "@/components/OrderItem";

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
];

function OrderDetail() {
  return (
    <div
      style={{ backgroundColor: "white", minHeight: "100vh", width: "100vw" }}
    >
      <Header />
      <Navbar />

      <div
        className="order_wrapper"
        style={{
          paddingLeft: "20vw",
          paddingRight: "20vw",
          paddingTop: "220px",
          paddingBottom: "10vw",
        }}
      >
        {/* ใช้ div ครอบ Menu และ Order */}
        <div className="order_history_detail">
          <div className="order_section">
            <p className="info_header_text">Order Detail</p>
            <div>
              {orders.map((order, index) => (
                <OrderItem key={index} {...order} />
              ))}
            </div>
          </div>
        </div>

        <div className="order-number">
          <h3>
            Order Number : <span>OR90123456 </span>
          </h3>
          <div className="order-details">
            <p className="label">Payment Method<span>Mobile Banking</span></p>
            <p className="label">Order Placed Time<span>2025-01-29 10:30</span></p>
            <p className="label">Shipping Time<span>2025-01-30 2:00</span></p>
            <p className="label">Delivered Time<span>2025-02-02 3:15</span></p>
          </div>
        </div>

        <div className="order-tracking">
          <h3>
            Tracking Number : <span>TH123456789XYZ</span>
          </h3>
          <div className="tracking-details">
            <p className="label">Address</p>
            <p className="address">
              Itsara Klongklaew 123/45 Moo 5, Soi Sukhumvit 10, Sukhumvit Road,
              Bang Na, Bang Na District, Bangkok 10260, Thailand
            </p>
            <p className="label">Phone number</p>
            <p className="phone">(+66) 080 786 8975</p>
          </div>
        </div>
      </div>

      <Footer />
      <Copyrights />
    </div>
  );
}

export default OrderDetail;
