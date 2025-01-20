import React from 'react';
import Navbar from '@/components/Navbar';
<<<<<<< Updated upstream
import Header from '@/components/Header';
=======
import Footer from '@/components/Footer';
>>>>>>> Stashed changes

function Page() {
  return (
    <div>
<<<<<<< Updated upstream
      <Header/>
      <Navbar/>
=======
      <Navbar />  {/* เรียกใช้ Navbar ในหน้าของคุณ */}
      <div>Page Content</div>
      <Footer />  {/* เรียกใช้ Footer ในหน้าของคุณ */}
>>>>>>> Stashed changes
    </div>
  );
}

export default Page;
