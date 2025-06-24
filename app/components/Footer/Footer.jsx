import React from 'react';

const Footer = () => {
  return (
    <footer className='border-t border-[#33353F] text-white py-6'>
      <div className='container mx-auto px-4 text-center'>
        <p className='text-sm text-[#ADB7BE]'>
          &copy; {new Date().getFullYear()} Dhian Haryono. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
