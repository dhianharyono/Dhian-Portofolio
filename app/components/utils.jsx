import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
} from 'react-icons/si';
import { FaUniversity } from 'react-icons/fa';
import { HiOutlineBadgeCheck } from 'react-icons/hi';

export const TAB_DATA = [
  {
    title: 'Tech Stack',
    id: 'skills',
    content: (
      <ul className='grid grid-cols-2 gap-1 pl-2'>
        <li className='flex items-center gap-2'>
          <SiJavascript className='text-yellow-400' /> JavaScript
        </li>
        <li className='flex items-center gap-2'>
          <SiTypescript className='text-blue-500' /> TypeScript
        </li>
        <li className='flex items-center gap-2'>
          <SiReact className='text-cyan-400' /> React.js
        </li>
        <li className='flex items-center gap-2'>
          <SiNextdotjs className='text-white' /> Next.js
        </li>
        <li className='flex items-center gap-2'>
          <SiTailwindcss className='text-sky-400' /> Tailwind CSS
        </li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-none pl-2'>
        <li className='flex items-center gap-2'>
          <FaUniversity className='text-red-500' />
          Telkom University – B.Sc. in Informatics
        </li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className='list-none pl-2'>
        <li className='flex items-center gap-2'>
          <HiOutlineBadgeCheck className='text-gray-400' /> Coming Soon
        </li>
      </ul>
    ),
  },
];

export const navLinks = [
  {
    title: 'About Me',
    path: '#about',
  },
  {
    title: 'View My Work',
    path: '#projects',
  },
  {
    title: 'Contact Me!',
    path: '#contact',
  },
];

export const projectsData = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'A personal portfolio website to showcase my skills, projects, and experience as a frontend developer. Built with React, Tailwind CSS, and TypeScript.',
    image: '/images/projects/porto-thumbnail.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/dhianharyono/dhian-app',
    previewUrl: '/',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'My Fashion Store',
    description:
      'An elegant and user-friendly fashion e-commerce website. Features include product browsing, shopping cart, and secure checkout, providing a seamless online shopping experience.',
    image: '/images/projects/fashion-thumbnail.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/dhianharyono/myfashion',
    previewUrl: 'https://myfashion-ten.vercel.app/',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS'],
  },
];
