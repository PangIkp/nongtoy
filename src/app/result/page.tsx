import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyrights from "@/components/Copyrights";
import Result from "@/components/Result";

function result() {
  return (
    <div style={{ backgroundColor: "#001835", minHeight: "100vh"}}>
      <Header />
      <Navbar />
      <div>
        <Result />
      </div>

      <Footer />
      <Copyrights />
    </div>
  );
}

export default result;
