'use client';

import React, { useRef } from 'react';
import { experience } from '../utils';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className='flex justify-center mt-8'>
      <div className='w-full shadow-xl rounded-2xl'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
          Experience
        </h2>

        <ul
          ref={ref}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {experience.map((experience, index) => (
            <motion.li
              key={experience.id}
              variants={cardVariants}
              initial='initial'
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <div
                className='bg-gray-100 dark:bg-[#1e1e1e] p-6 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]
                         border border-transparent hover:border-gray-500 dark:hover:border-gray-400 flex flex-col justify-between'
              >
                <div>
                  <h3 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-2'>
                    {experience.title}
                  </h3>
                  <p className='text-gray-700 dark:text-gray-300 text-sm mb-2'>
                    <span className='font-semibold'>{experience.company}</span>{' '}
                    &bull; {experience.duration}
                  </p>
                  <p className='text-gray-800 dark:text-gray-200 text-base mb-4'>
                    {experience.description}
                  </p>
                </div>

                <div className='flex flex-wrap gap-x-4 mt-auto'>
                  {experience.link && (
                    <a
                      href={experience.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center text-gray-500 hover:text-gray-400 text-sm font-medium mt-2'
                    >
                      View Experience
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 ml-1'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                        />
                      </svg>
                    </a>
                  )}
                  {experience.github && (
                    <a
                      href={experience.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center text-gray-500 hover:text-gray-400 text-sm font-medium mt-2'
                    >
                      GitHub Repo
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 ml-1'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                        />
                      </svg>
                    </a>
                  )}
                </div>

                <div className='text-white'>
                  {experience.tech.length > 0 && (
                    <div className='flex flex-wrap gap-2'>
                      {experience.tech.map((item, idx) => (
                        <span
                          key={idx}
                          className='text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-100'
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
