import React from "react";
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import Cart from '@/components/Cart';

function cart() {
    return (
        <div>
            <Header />
            <Navbar />
            <Cart />
            <Footer />
            <Copyrights />
        </div>
    );

}

export default cart;

