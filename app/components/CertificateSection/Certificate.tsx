'use client';

import React, { useRef, useState } from 'react';
import { certificates } from '../utils';
import { motion, useInView } from 'framer-motion';

const Certificate = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [visibleCertificates, setVisibleCertificates] = useState(3);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleShowMore = () => {
    setVisibleCertificates((prev) => prev + 3);
  };

  return (
    <div id='certificate' className='flex justify-center mt-8'>
      <div className='w-full shadow-xl rounded-2xl'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
          Certificate
        </h2>

        <ul
          ref={ref}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {certificates.slice(0, visibleCertificates).map((item, index) => (
            <motion.li
              key={item.id}
              variants={cardVariants}
              initial='initial'
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <div
                className='bg-gray-100 dark:bg-[#1e1e1e] p-6 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]
                         border border-transparent hover:border-blue-300 flex flex-col justify-between'
              >
                <div>
                  <h3 className='text-xl font-bold text-blue-300 mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-gray-700 dark:text-gray-300 text-sm mb-2'>
                    <span className='font-semibold'>{item.company}</span> &bull;{' '}
                    {item.duration}
                  </p>
                  <p className='text-gray-800 dark:text-gray-200 text-base mb-4'>
                    {item.description}
                  </p>
                </div>

                <div className='flex flex-wrap gap-x-4 mt-auto'>
                  {item.link && (
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center text-gray-500 hover:text-gray-400 text-sm font-medium mt-2'
                    >
                      Show Credential
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
              </div>
            </motion.li>
          ))}
        </ul>

        {visibleCertificates < certificates.length && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className='flex justify-center mt-8 mb-4'>
              <button
                onClick={handleShowMore}
                className='px-6 py-3 rounded-full text-white bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-gradient-to-tl transition-all duration-300'
              >
                Show More
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Certificate;
