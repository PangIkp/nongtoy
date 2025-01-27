import React from "react";
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import CartItem from "@/components/CartItem";

function Cart() {
    return (
        <div>
            <Header />
            <Navbar />
            <CartItem/>
            <Footer/>
            <Copyrights />
        </div>
    );

}

export default Cart;

