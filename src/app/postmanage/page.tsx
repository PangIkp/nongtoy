import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import Create from "@/components/Post";

function Postmanage() {
  return (
    <div
      style={{ backgroundColor: "white", minHeight: "100vh", width: "100vw" }}>
      <Header />
      <Navbar />

      <div
        style={{
          // paddingLeft: "5vw",
          // paddingRight: "5vw",
          paddingTop: "170px",
          paddingBottom: "10vw",
        }}>

      <Create/>

      </div>

      <Footer />
      <Copyrights />
    </div>
  );
}

export default Postmanage;
