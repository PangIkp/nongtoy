import React from "react";
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import Account from "@/components/Account";

function account() {
    return (
        <div>
            <Header />
            <Navbar />
            <Account />
            <Footer />
            <Copyrights />
        </div>
    );
}

export default account;

