'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUpIcon } from '@heroicons/react/solid';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label='Scroll to top'
          className='fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3.5 rounded-full glass-effect border border-white/20 bg-gradient-to-br from-blue-600/80 via-indigo-600/80 to-purple-600/80 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-cyan-500/50 backdrop-blur-md transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#121212]'
        >
          <ChevronUpIcon className='w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300' />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
