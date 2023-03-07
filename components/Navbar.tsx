import Link from 'next/link';
import React from 'react';
import { siteConfig } from '../site.config';
import Breadcrumb from './Breadcrumb';

const Navbar = () => {
  return (
    <nav className='relative flex flex-wrap items-center justify-between w-full w-screen py-3 text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light'>
      <div className='flex flex-wrap items-center justify-between w-full px-6 container-fluid'>
        <div
          className='w-full rounded-md bg-grey-light'
          aria-label='breadcrumb'
        >
          <Link href='/'>
            <a className='text-gray-500 hover:text-gray-600'>
              {siteConfig.title}
            </a>
          </Link>
          {/* Breadcrumb */}
          <Breadcrumb />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
