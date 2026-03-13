'use client';

import React, { useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../utils';
import { motion, useInView } from 'framer-motion';

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const allProjects = projectsData.filter((project) => project);

  // On desktop, we limit display. On mobile, we show all in the slider.
  const projectsToDisplay = showAllProjects 
    ? allProjects 
    : allProjects; // We'll show all in the list, but handle visibility via grid logic for desktop later if needed.
    // Actually, to follow user's "show more" logic on desktop:
  const desktopProjects = showAllProjects ? allProjects : allProjects.slice(0, 3);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleScroll = (e) => {
    const container = e.target;
    const width = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const index = Math.round(scrollLeft / (width * 0.85)); // 0.85 matches our min-w-[85vw]
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section id='projects' className='relative' ref={ref}>
      <h2 className='text-center text-xl md:text-4xl font-bold text-white mt-4 mb-2'>
        My Projects
      </h2>
      <p className='text-center text-sm md:text-xl text-gray-400 mb-12 md:mb-16'>
        Selected Work & Projects
      </p>

      {/* Mobile Slider View */}
      <div className='block md:hidden'>
        <ul 
          onScroll={handleScroll}
          className='flex gap-4 overflow-x-auto pb-6 px-4 snap-x snap-mandatory no-scrollbar'
        >
          {allProjects.map((project, index) => (
            <motion.li
              key={`mobile-${project.id || index}`}
              variants={cardVariants}
              initial='initial'
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className='min-w-[85vw] snap-center'
            >
              <ProjectCard {...project} />
            </motion.li>
          ))}
        </ul>
        
        {/* Slider Indicators (Mobile only) */}
        <div className='flex justify-center gap-2 mt-2'>
          {allProjects.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'w-8 bg-primary-500' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid View */}
      <div className='hidden md:block'>
        <ul className='grid md:grid-cols-3 gap-8'>
          {desktopProjects.map((project, index) => (
            <motion.li
              key={`desktop-${project.id || index}`}
              variants={cardVariants}
              initial='initial'
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.li>
          ))}
        </ul>

        {allProjects.length > 3 && (
          <div className='text-center mt-12'>
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className='px-8 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300'
            >
              {showAllProjects ? 'Show Less' : 'Show More Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
