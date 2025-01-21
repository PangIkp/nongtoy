import React from "react";
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import Login from '@/components/Login';

function login() {
    return (
        <div>
            <Header />
            <Navbar />
            <Login />
            <Footer />
            <Copyrights />
        </div>
    );
}

export default login;