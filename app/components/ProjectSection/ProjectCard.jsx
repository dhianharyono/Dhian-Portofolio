import React from 'react';
import { CodeIcon, EyeIcon, LinkIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  tech = [],
}) => {
  const hasLinks = gitUrl || previewUrl;

  return (
    <div className='rounded-xl overflow-hidden bg-[#181818] border border-white/10 p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 group'>
      {/* Header: Title and Links */}
      <div className='flex justify-between items-start mb-4'>
        <div className='flex items-center gap-3'>
          <div className='p-2 rounded-lg bg-primary-500/10 text-primary-400'>
            <CodeIcon className='h-6 w-6' />
          </div>
          <h3 className='text-sm md:text-lg font-bold text-white group-hover:text-primary-400 transition-colors'>
            {title}
          </h3>
        </div>

        <div className='flex items-center gap-3'>
          {gitUrl && (
            <Link
              href={gitUrl}
              target='_blank'
              className='text-gray-400 hover:text-white transition-colors'
              title='View Source Code'
            >
              <CodeIcon className='h-5 w-5' />
            </Link>
          )}
          {previewUrl && (
            <Link
              href={previewUrl}
              target='_blank'
              className='text-gray-400 hover:text-white transition-colors'
              title='View Live Demo'
            >
              <EyeIcon className='h-5 w-5' />
            </Link>
          )}
        </div>
      </div>

      {/* Description */}
      <p className='text-gray-400 mb-6 leading-relaxed flex-grow text-sm md:text-base'>
        {description}
      </p>

      {/* Footer: Tech Stack */}
      {tech.length > 0 && (
        <div className='flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5'>
          {tech.map((item, idx) => (
            <span
              key={idx}
              className='text-xs font-medium text-primary-300'
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
