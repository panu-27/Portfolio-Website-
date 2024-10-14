'use client';
import React from 'react';

const Copyright = () => {
  return (
    <div className='text-white bg-gray-800 py-4 text-center'> 
      <p className='text-sm'>
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
      <div className='mt-2'>
        <a href="/privacy-policy" className='text-orange-400 hover:underline mx-2'>Privacy Policy</a>
        <span>|</span>
        <a href="/terms-of-service" className='text-orange-400 hover:underline mx-2'>Terms of Service</a>
      </div>
    </div>
  );
};

export default Copyright;
