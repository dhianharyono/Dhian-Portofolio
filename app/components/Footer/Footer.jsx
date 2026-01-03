import React from 'react';

const Footer = () => {
  return (
    <footer className='border-t border-white/10 text-white py-8 glass-effect relative z-10'>
      <div className='container mx-auto px-4 text-center'>
        <p className='text-sm text-gray-400'>
          &copy; {new Date().getFullYear()} Dhian Haryono. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
