import React from 'react';
import { experiences } from '../utils';

const Experience = () => {
  return (
    <div id='experience' className='flex justify-center mt-24'>
      <div className='w-full shadow-xl rounded-2xl'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
          Experience
        </h2>

        <div className='relative'>
          {experiences.map((exp, index) => (
            <div key={exp.id} className='mb-6 last:mb-0 relative'>
              <div className='flex items-start'>
                <div
                  className={`relative w-7 h-7 sm:w-9 sm:h-9 ${
                    index === 0 ? 'bg-primary-800' : 'bg-gray-800'
                  } rounded-full flex items-center justify-center shadow-md z-0 flex-shrink-0 p-6`}
                >
                  <span className='text-gray-300 text-xs sm:text-sm font-bold'>
                    {exp.startYear}
                  </span>
                </div>

                <div
                  className={`${
                    index === 0
                      ? 'bg-gradient-to-r from-primary-800 to-secondary-700'
                      : 'bg-gray-100 dark:bg-[#1e1e1e]'
                  } p-4 sm:p-6 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] ml-3 sm:ml-5 flex-grow`}
                >
                  <h3 className='text-xl font-bold text-gray-300 mb-2'>
                    {exp.title}
                  </h3>
                  <p className='text-gray-700 dark:text-gray-300 text-xs sm:text-base mb-1'>
                    <span className='font-semibold'>{exp.company}</span>
                  </p>
                  <p className='text-gray-700 dark:text-gray-300 text-xs sm:text-base mb-2'>
                    {exp.duration} &bull; {exp.location}
                  </p>
                  <p className='text-gray-800 dark:text-gray-200 text-sm sm:text-lg mb-3'>
                    {exp.description}
                  </p>
                </div>
              </div>

              {index < experiences.length - 1 && (
                <div
                  className={`absolute left-[23px] sm:left-[23px] top-[26px] sm:top-[34px] h-[calc(100%-26px)] sm:h-[calc(100%-34px)] w-0.5 ${
                    index === 0 ? 'bg-primary-800' : 'bg-gray-800'
                  } z-0`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
