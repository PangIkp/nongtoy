import React from "react";
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import Signup from '@/components/Signup';

function signup() {
    return (
        <div>
            <Header />
            <Navbar />
            <Signup />
            <Footer />
            <Copyrights />
        </div>
    );
}

export default signup;