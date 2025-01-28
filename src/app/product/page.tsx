import React from 'react'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductDetail from '@/components/ProductDetail'
import Copyrights from '@/components/Copyrights'

function product() {
    return (
        <div>
            <Header />
            <Navbar />
            <ProductDetail />
            <Footer />
            <Copyrights />
        </div>
    );
}

export default product