'use client';

import React, { useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../utils';
import { motion, useInView } from 'framer-motion';

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showAllProjects, setShowAllProjects] = useState(false);

  const allProjects = projectsData.filter((project) => project);

  const projectsToDisplay = showAllProjects
    ? allProjects
    : allProjects.slice(0, 3);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleToggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section id='projects' className=' mt-32 relative'>
      <h2 className='text-center text-xl md:text-4xl font-bold text-white mt-4 mb-2'>
        My Projects
      </h2>
      <p className='text-center text-sm md:text-xl text-gray-400 mb-16'>
        Selected Work & Projects
      </p>
      <ul ref={ref} className='grid md:grid-cols-3 gap-6 md:gap-8'>
        {projectsToDisplay.map((project, index) => (
          <motion.li
            key={project.id || index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProjectCard
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tech={project.tech}
            />
          </motion.li>
        ))}
      </ul>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='col-span-4 place-self-center mt-4 lg:mt-0'
      >
        {allProjects.length > 3 && (
          <div className='text-center mt-8'>
            <button
              onClick={handleToggleProjects}
              className='px-6 py-3 rounded-full text-white bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-blue-600 hover:via-primary-400 hover:to-secondary-200 transition-all duration-300'
            >
              {showAllProjects ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Project;
