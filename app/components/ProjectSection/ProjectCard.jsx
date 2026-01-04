import React from 'react';
import { CodeIcon, EyeIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const ProjectCard = ({ title, description, gitUrl, previewUrl, tech = [] }) => {
  return (
    <div className='rounded-xl bg-[#181818] border border-white/10 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 group shadow-lg p-6'>
      {/* Header: Title */}
      <h3 className='text-lg md:text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors'>
        {title}
      </h3>

      {/* Tech Stack - Moved up for context before description */}
      {tech.length > 0 && (
        <div className='flex flex-wrap gap-2 mb-4'>
          {tech.map((item, idx) => (
            <span
              key={idx}
              className='text-[10px] uppercase tracking-wider font-bold text-primary-300 bg-primary-500/10 px-2 py-1 rounded-md'
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {/* Description */}
      <p className='text-gray-400 mb-8 text-sm md:text-base leading-relaxed flex-grow'>
        {description}
      </p>

      {/* Action Buttons */}
      <div className='flex sm:flex-row items-stretch sm:items-center gap-3 mt-auto pt-6 border-t border-white/5'>
        {previewUrl && (
          <Link
            href={previewUrl}
            target='_blank'
            className='flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-xs md:text-sm font-bold transition-all hover:shadow-lg hover:shadow-primary-500/25'
          >
            <EyeIcon className='h-5 w-5' />
            Live Demo
          </Link>
        )}
        {gitUrl && (
          <Link
            href={gitUrl}
            target='_blank'
            className='flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#2A2A2A] hover:bg-[#333] text-white text-xs md:text-sm font-bold transition-colors border border-white/5'
          >
            {/* <CodeIcon className='h-5 w-5' /> */}
            Source Code
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
