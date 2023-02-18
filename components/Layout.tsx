import Link from 'next/link';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='flex flex-col items-center w-full max-w-2xl mx-auto'>
        {/*  */}
        <Navbar />
        {/*  */}
        <main></main>
        {/*  */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
