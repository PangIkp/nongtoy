import React from 'react'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Product from '@/components/Product'
import Copyrights from '@/components/Copyrights'

function product() {
    return (
        <div>
            <Header />
            <Navbar />
            <Product />
            <Footer />
            <Copyrights />
        </div>
    );
}

export default product