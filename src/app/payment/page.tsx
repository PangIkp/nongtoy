import React from 'react'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Payment from '@/components/Payment'
import Copyrights from '@/components/Copyrights'



function page() {
    return (
        <div>
            <Header />
            <Navbar />
            <Payment />
            <Footer />
            <Copyrights />
        </div>
    )
}

export default page
