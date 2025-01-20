import React from 'react';
import Navbar from '@/components/Navbar';

function Page() {
  return (
    <div>
      <Navbar />  {/* เรียกใช้ Navbar ในหน้าของคุณ */}
      <div>Page Content</div>
    </div>
  );
}

export default Page;
