'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { techIcons } from './utils';

const TechStackIcons = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      color: '#60A5FA',
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className='mt-24'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 md:mb-5'>
        Tech Stack
      </h2>
      <p className='text-center text-lg text-gray-300 mb-10 px-4 max-w-xl mx-auto'>
        Discover the key technologies and tools I use to build robust and modern
        web applications.
      </p>
      <motion.div
        className='flex flex-wrap justify-center items-center gap-x-8 gap-y-4 py-6'
        variants={containerVariants}
        initial='hidden'
        animate='show'
      >
        {techIcons.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={tech.id}
              className='flex flex-col items-center group cursor-pointer'
              variants={itemVariants}
              whileHover='hover'
            >
              <IconComponent className='w-12 h-12 text-gray-500 transition-colors duration-200 ease-in-out group-hover:text-blue-300' />
              <p className='text-xs sm:text-sm text-gray-400 mt-2 font-medium group-hover:text-blue-300 transition-colors duration-200 ease-in-out'>
                {tech.name}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TechStackIcons;
