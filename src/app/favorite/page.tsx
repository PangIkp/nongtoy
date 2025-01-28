import React from "react";
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';
import Favorite from "@/components/Favorite";

function favorite() {
    return (
        <div>
            <Header />
            <Navbar />
            <Favorite />
            <Footer />
            <Copyrights />
        </div>
    );
}

export default favorite;
