import React from 'react';
import { CodeIcon, EyeIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  tech = [],
}) => {
  return (
    <div className='rounded-xl overflow-hidden shadow-lg bg-[#1e1e1e] hover:shadow-xl transition-shadow duration-300'>
      {/* Image & overlay */}
      <div className='relative h-52 md:h-72 group'>
        <div
          className='w-full h-full bg-center bg-cover transition-transform duration-300 transform group-hover:scale-105'
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
        <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center gap-4 transition-all duration-300'>
          <Link
            href={gitUrl}
            className='h-12 w-12 flex items-center justify-center rounded-full border border-gray-400 hover:border-white transition-colors'
            target='_blank'
          >
            <CodeIcon className='h-6 w-6 text-gray-400 group-hover:text-white' />
          </Link>
          <Link
            href={previewUrl}
            className='h-12 w-12 flex items-center justify-center rounded-full border border-gray-400 hover:border-white transition-colors'
            target='_blank'
          >
            <EyeIcon className='h-6 w-6 text-gray-400 group-hover:text-white' />
          </Link>
        </div>
      </div>

      {/* Text content */}
      <div className='p-5 text-white'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-sm text-gray-300 mb-4'>{description}</p>
        {tech.length > 0 && (
          <div className='flex flex-wrap gap-2'>
            {tech.map((item, idx) => (
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
  );
};

export default ProjectCard;
