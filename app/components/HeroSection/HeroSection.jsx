'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='lg:py-16 relative'>
      {/* Animated Background Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10'
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -30, 30, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className='absolute top-10 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10'
      />

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-7 place-self-center text-center sm:text-left justify-self-start'
        >
          <h1 className='text-white mb-2 text-3xl font-extrabold tracking-tight pb-4'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 glow-text'>
              Hello, I&apos;m
            </span>
          </h1>
          <div className='block min-h-[60px] sm:min-h-[80px] lg:min-h-[100px] text-4xl sm:text-5xl lg:text-7xl font-bold text-white'>
            Dhian Haryono
          </div>
          <p className='text-[#ADB7BE] text-lg sm:text-xl lg:text-5xl mb-3 leading-relaxed max-w-2xl font-bold'>
            Senior Front-End Engineer
          </p>
          <p className='text-[#ADB7BE] text-lg mb-8 leading-relaxed max-w-2xl'>
            5+ years building scalable and beautiful web interfaces. Currently
            freelancing and open for projects.
          </p>
          <div>
            <Link href={'#contact'}>
              <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:from-blue-600 hover:via-primary-400 hover:to-secondary-200 text-white shadow-lg hover:shadow-cyan-500/50 transition-all duration-300'>
                Hire Me
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-5 place-self-center mt-4 lg:mt-0'
        >
          <div className='rounded-full bg-[#121212] w-[250px] h-[250px] ml-16 lg:w-[400px] lg:h-[400px] relative'>
            <div className='absolute inset-0 rounded-full'></div>
            <Image
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
              src={'/images/hero-image.jpg'}
              width={300}
              height={300}
              alt='hero-image'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
