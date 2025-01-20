import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import Preview from "@/components/Preview";

function Page() {
  const images = ["/Images/Preview1.png", "/Images/Preview2.png"];
  return (
    <div>
      <Header />
      <Navbar />
      <div  style={{
          backgroundColor: "white", 
          paddingLeft: "140px", 
          paddingRight: "140px", 
          paddingTop:"50px",
          paddingBottom:"50px",
        }}>
        <Preview images={images} />
      </div>
      <Footer />
      <Copyrights />
    </div>
  );
}

export default Page;
