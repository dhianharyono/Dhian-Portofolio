'use client';
import Image from 'next/image';
import React, { useState, useTransition } from 'react';
import TabButton from './TabButton';
import { TAB_DATA } from '../utils';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [tab, setTab] = useState('education');
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id='about' className='text-white mt-24'>
      <span className='anchor'></span>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='col-span-4 place-self-center mt-4 lg:mt-0'
      >
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:p-6 mb-10'>
          <div className='relative overflow-hidden transition-transform duration-300 hover:scale-105'>
            <Image
              src='/images/about-image.png'
              width={500}
              height={500}
              alt='Dhian Haryono working illustration'
              loading='lazy'
            />
          </div>
          <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg text-gray-300'>
              I`m Dhian Haryono, a Frontend Developer based in Indonesia with
              over 5 years of experience crafting modern web interfaces. I
              specialize in building fast, accessible, and responsive
              applications using technologies like <strong>React</strong>,{' '}
              <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>.
              <br />
              <br />
              I’m passionate about creating user-focused digital experiences and
              writing clean, scalable code. Whether collaborating in teams or
              working independently, I always aim to deliver pixel-perfect,
              performant results.
              <br />
              <br />
              Currently, I’m leveling up my skills to become a Senior Frontend
              Developer and open to freelance or remote opportunities.
            </p>

            <div className='flex flex-row justify-start mt-8'>
              <TabButton
                selectTab={() => handleTabChange('education')}
                active={tab === 'education'}
              >
                Education
              </TabButton>
              {/* <TabButton selectTab={() => handleTabChange('certifications')} active={tab === "certifications"}>Certifications</TabButton> */}
            </div>

            <div className='mt-8'>
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
