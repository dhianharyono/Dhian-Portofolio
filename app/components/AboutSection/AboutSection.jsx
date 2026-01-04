'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id='about' className='text-white mt-12 md:mt-24 relative'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='col-span-4 place-self-center mt-4 lg:mt-0'
      >
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full px-4 md:px-0 max-w-6xl mx-auto'>
          <h2 className='text-xl md:text-4xl font-bold text-white mb-2 glow-text text-center'>
            About Me
          </h2>
          <p className='text-center text-sm md:text-xl text-gray-400 mb-16'>
            Engineer mindset. Product impact.
          </p>
          <div className='max-w-4xl mx-auto'>
            <p className='text-sm md:text-lg text-gray-300 mb-6 leading-relaxed md:leading-loose text-left'>
              I&apos;m Dhian Haryono, a Frontend Developer based in Indonesia
              with over 5 years of experience crafting modern web interfaces. I
              specialize in building fast, accessible, and responsive
              applications using technologies like{' '}
              <strong className='text-white'>React</strong>,{' '}
              <strong className='text-white'>Next.js</strong>, and{' '}
              <strong className='text-white'>Tailwind CSS</strong>.
            </p>
            <p className='text-sm md:text-lg text-gray-300 mb-6 leading-relaxed md:leading-loose text-left'>
              I&apos;m passionate about creating user-focused digital
              experiences and writing clean, scalable code. Whether
              collaborating in teams or working independently, I always aim to
              deliver pixel-perfect, performant results.
            </p>
            <p className='text-sm md:text-lg text-gray-300 leading-relaxed md:leading-loose text-left'>
              Specializing in performance optimization and scalable architecture
              for high-traffic applications. Open to challenging freelance or
              remote opportunities.
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 mb-8'>
            <div className='p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all'>
              <h3 className='text-lg md:text-3xl font-bold text-primary-400 mb-1'>
                5+
              </h3>
              <p className='text-xs md:text-sm text-gray-400'>Years Exp</p>
            </div>
            <div className='p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all'>
              <h3 className='text-lg md:text-3xl font-bold text-secondary-400 mb-1'>
                Enterprise
              </h3>
              <p className='text-xs md:text-sm text-gray-400'>Solutions</p>
            </div>
            <div className='p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all'>
              <h3 className='text-lg md:text-3xl font-bold text-primary-400 mb-1'>
                10+
              </h3>
              <p className='text-xs md:text-sm text-gray-400'>Clients</p>
            </div>
            <div className='p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all'>
              <h3 className='text-lg md:text-3xl font-bold text-secondary-400 mb-1'>
                1.1M+
              </h3>
              <p className='text-xs md:text-sm text-gray-400'>Users Reached</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
