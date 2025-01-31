import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import Account from "@/components/Account";
import Menu from "@/components/Menu";

function account() {
  return (
    <div
      style={{ backgroundColor: "white", minHeight: "100vh", width: "100vw" }}
    >
      <Header />
      <Navbar />

      <div
        style={{
          paddingLeft: "15vw",
          paddingRight: "15vw",
          paddingTop: "220px",
          paddingBottom: "10vw",
        }}
      >
        <div className="order_container">
          <div className="menu_section">
            <Menu />
          </div>

          <div className="order_section">
            <Account />
          </div>
        </div>
      </div>

      <Footer />
      <Copyrights />
    </div>
  );
}

export default account;
