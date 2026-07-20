import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ title, description, role, previewUrl, image, tech = [] }) => {
  const [showAllTech, setShowAllTech] = useState(false);
  const MAX_TECH = 3;
  const displayedTech = tech.slice(0, MAX_TECH);
  const remainingTech = tech.slice(MAX_TECH);

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className='relative group flex flex-col h-full bg-[#1e1e1e] border border-white/5 rounded-2xl hover:border-primary-500/30 transition-all duration-500 shadow-2xl overflow-hidden'
    >
      {/* Subtle Gradient Glow */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none z-10' />

      {/* Thumbnail */}
      {image && (
        <div className='relative w-full aspect-video overflow-hidden rounded-t-2xl flex-shrink-0 bg-[#111]'>
          <Image
            src={image}
            alt={`${title} preview`}
            fill
            className='object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105'
            sizes='(max-width: 768px) 85vw, 33vw'
          />
          {/* Bottom gradient fade */}
          <div className='absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1e1e1e] to-transparent' />
          {/* Role badge on thumbnail */}
          <div className='absolute top-3 left-3'>
            <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-sm border ${role === 'Fullstack Developer' ? 'text-primary-300 bg-primary-500/20 border-primary-500/30' : 'text-secondary-300 bg-secondary-500/20 border-secondary-500/30'}`}>
              {role}
            </span>
          </div>
          {/* Hover overlay with preview icon */}
          <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center'>
            {previewUrl && (
              <div className='flex items-center gap-2 text-white text-sm font-semibold bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20'>
                <ExternalLinkIcon className='h-4 w-4' />
                View Live
              </div>
            )}
          </div>
        </div>
      )}

      <div className='p-6 md:p-7 flex flex-col flex-1 relative z-10'>
        {/* Header Section */}
        <div className='mb-4'>
          <div className='flex items-center justify-between gap-4'>
            <h3 className='text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-primary-400 transition-colors duration-300 line-clamp-1'>
              {title}
            </h3>
          </div>
          {/* Show role text only when no image (fallback) */}
          {!image && (
            <p
              className={`text-sm font-semibold uppercase tracking-widest mt-2 ${role === 'Fullstack Developer' ? 'text-primary-400' : 'text-secondary-400'}`}
            >
              {role}
            </p>
          )}
        </div>

        {/* Description Section */}
        <div className='relative mb-6'>
          <p className='text-gray-400 text-sm leading-relaxed line-clamp-3'>
            {description}
          </p>
        </div>

        {/* Tech Stack Section */}
        {tech.length > 0 && (
          <div className='mt-auto'>
            <div className='flex flex-wrap gap-2 mb-5'>
              {displayedTech.map((item, idx) => (
                <span
                  key={idx}
                  className='text-[10px] md:text-xs font-bold text-primary-300 bg-primary-500/5 border border-primary-500/10 px-3 py-1.5 rounded-lg shadow-sm'
                >
                  {item}
                </span>
              ))}

              {remainingTech.length > 0 && (
                <div className='relative inline-block'>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setShowAllTech(!showAllTech);
                    }}
                    className='text-[10px] md:text-xs font-bold text-gray-500 hover:text-white bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg transition-all hover:bg-white/10'
                  >
                    +{remainingTech.length} more
                  </button>

                  <AnimatePresence>
                    {showAllTech && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className='absolute bottom-full right-0 md:left-0 mb-3 p-3 bg-[#2a2a2a] border border-white/10 rounded-xl shadow-2xl z-50 w-48 md:w-56 flex flex-wrap gap-2 ring-1 ring-white/5 backdrop-blur-xl'
                      >
                        {remainingTech.map((item, idx) => (
                          <span
                            key={idx}
                            className='text-[10px] font-semibold text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10'
                          >
                            {item}
                          </span>
                        ))}
                        {/* Little triangle arrow */}
                        <div className='absolute top-full right-6 md:left-6 w-3 h-3 bg-[#2a2a2a] border-r border-b border-white/10 transform rotate-45 -translate-y-1.5' />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* CTA Button */}
            {previewUrl && (
              <Link
                href={previewUrl}
                target='_blank'
                className='inline-flex items-center justify-center w-full group/btn'
              >
                <div className='w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-600/10 to-primary-500/5 border border-primary-500/20 text-white text-sm font-black tracking-wide transition-all duration-500 group-hover/btn:from-primary-600 group-hover/btn:to-blue-600 group-hover/btn:border-primary-400 group-hover/btn:shadow-[0_0_25px_rgba(37,99,235,0.4)] flex items-center justify-center gap-3'>
                  View Project
                  <ExternalLinkIcon className='h-4 w-4 group-hover/btn:translate-x-1 transition-transform' />
                </div>
              </Link>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
