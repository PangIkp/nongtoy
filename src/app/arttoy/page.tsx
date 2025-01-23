import React from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import ProductFilter from '@/components/ProductFilter';

function Arttoy() {
  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" ,width:"100vw"}}>
      <Header/>
      <Navbar/>

      <div
        style={{
          paddingLeft: "5vw",
          paddingRight: "5vw",
          paddingTop: "13vw",
          paddingBottom: "10vw",
        }}>
        <ProductFilter/>

      </div>

      <Footer/>
      <Copyrights/>
    </div>
  );
}

export default Arttoy;