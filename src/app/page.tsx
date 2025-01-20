import React from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Copyrights from '@/components/Copyrights';

function Page() {
  return (
    <div>
      <Header />
      <Navbar />
      <Footer />
      <Copyrights />
    </div>
  );
}

export default Page;
