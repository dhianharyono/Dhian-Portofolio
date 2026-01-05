import React from 'react';
import { experiences } from '../utils';

const Experience = () => {
  return (
    <div id='experience' className='relative px-4 md:px-0'>
      <div className='w-full'>
        <h2 className='text-xl md:text-4xl font-bold text-white mb-2 glow-text text-center'>
          Work Experience
        </h2>
        <p className='text-center text-sm md:text-xl text-gray-400 mb-12 md:mb-16'>
          Roles, responsibilities, and measurable impact
        </p>

        <div className='relative w-full max-w-6xl mx-auto'>
          {/* Central Line */}
          <div className='absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 -translate-x-1/2 hidden md:block'></div>
          <div className='absolute left-5 top-0 bottom-0 w-[2px] bg-gray-800 md:hidden'></div>

          <div className='space-y-12'>
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`flex flex-col md:flex-row items-center justify-between md:gap-12 relative w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className='absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-[#121212] -translate-x-1/2 z-10 shadow-[0_0_0_4px_rgba(59,130,246,0.2)] md:block hidden'></div>
                  <div className='absolute left-5 top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-[#121212] -translate-x-2 z-10 md:hidden'></div>

                  {/* Empty Side (Desktop) */}
                  <div className='hidden md:block w-5/12'></div>

                  {/* Content Card */}
                  <div className='w-full md:w-5/12 pl-12 md:pl-0'>
                    <div className='p-5 md:p-8 rounded-2xl bg-[#181818] border border-white/5 hover:border-primary-500/30 transition-all duration-300 relative group'>

                      {/* Date Badge */}
                      <div className='flex items-center gap-2 mb-4'>
                        <div className='p-2 rounded-lg bg-primary-500/10'>
                          <svg className='w-4 h-4 text-primary-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'></path></svg>
                        </div>
                        <span className='text-sm font-semibold text-primary-300'>{exp.duration}</span>
                        {index === 0 && (
                          <span className='px-2 py-0.5 rounded text-[10px] font-bold bg-primary-500 text-white uppercase tracking-wider'>
                            Current
                          </span>
                        )}
                      </div>

                      <h3 className='text-lg md:text-2xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors'>
                        {exp.title}
                      </h3>

                      <div className="flex flex-col mb-4">
                        <span className='text-base font-medium text-gray-300'>{exp.company}</span>
                        <span className='text-sm text-gray-400'>{exp.type} • {exp.location}</span>
                      </div>

                      <p className='text-gray-300 mb-6 text-sm md:text-base leading-relaxed'>
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <div className='mb-4'>
                        <h4 className='text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2'>
                          <span className='w-1 h-1 rounded-full bg-primary-500'></span>
                          Responsibilities
                        </h4>
                        <ul className='space-y-2'>
                          {exp.responsibilities?.map((item, idx) => (
                            <li key={idx} className='flex items-start text-sm md:text-sm text-gray-400'>
                              <span className='mr-2 mt-1.5 h-1 w-1 rounded-full bg-gray-600 flex-shrink-0'></span>
                              <span className='text-gray-300 md:text-gray-400'>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      {exp.achievements?.length > 0 && (
                        <div>
                          <h4 className='text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2'>
                            <span className='w-1 h-1 rounded-full bg-secondary-500'></span>
                            Key Achievements
                          </h4>
                          <ul className='space-y-2'>
                            {exp.achievements.map((item, idx) => (
                              <li key={idx} className='flex items-start text-sm md:text-sm text-gray-400'>
                                <span className='mr-2 mt-1.5 h-1 w-1 rounded-full bg-gray-600 flex-shrink-0'></span>
                                <span className='text-gray-300 md:text-gray-400'>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
