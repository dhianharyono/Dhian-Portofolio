import React from 'react';
import { certificates } from '../utils';

const Certificate = () => {
  return (
    <div className='flex justify-center mt-8'>
      {' '}
      <div className='w-full shadow-xl rounded-2xl p-5 sm:p-8 '>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
          Certificates
        </h2>

        <div className='relative'>
          {certificates.map((cert, index) => (
            <div key={cert.id} className='mb-6 last:mb-0 relative'>
              <div className='flex items-start'>
                <div className='relative w-7 h-7 sm:w-9 sm:h-9 bg-gray-700 rounded-full flex items-center justify-center shadow-md z-0 flex-shrink-0'>
                  <span className='text-white text-xs sm:text-sm font-bold'>
                    {index + 1}
                  </span>
                </div>

                <div
                  className='bg-gray-100 dark:bg-[#1e1e1e] p-4 sm:p-6 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] ml-3 sm:ml-5 flex-grow
                             border border-transparent hover:border-gray-500 dark:hover:border-gray-400'
                >
                  <h3 className='text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 mb-1.5 sm:mb-2'>
                    {cert.title}
                  </h3>
                  <p className='text-gray-700 dark:text-gray-300 text-xs sm:text-base mb-2'>
                    <span className='font-semibold'>{cert.issuer}</span> &bull;{' '}
                    {cert.date}
                  </p>
                  <p className='text-gray-800 dark:text-gray-200 text-sm sm:text-lg mb-3'>
                    {cert.description}
                  </p>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center text-gray-400 hover:text-gray-300 text-sm sm:text-base font-medium mt-2'
                    >
                      Lihat Sertifikat
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 sm:h-5 sm:w-5 ml-1'
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

              {index < certificates.length - 1 && (
                <div className='absolute left-[13px] sm:left-[17px] top-[26px] sm:top-[34px] h-[calc(100%-26px)] sm:h-[calc(100%-34px)] w-0.5 bg-gray-700 z-0'></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
