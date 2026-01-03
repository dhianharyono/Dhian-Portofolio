import { FaUniversity } from 'react-icons/fa';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostman,
  SiVercel,
  SiFigma,
} from 'react-icons/si';

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
    title: 'Home',
    path: '#home',
  },
  {
    title: 'About Me',
    path: '#about',
  },
  {
    title: 'Experience',
    path: '#experience',
  },
  {
    title: 'Project',
    path: '#projects',
  },
  {
    title: 'Skill',
    path: '#services',
  },
  {
    title: 'Contact Me!',
    path: '#contact',
  },
];

export const techIcons = [
  { id: 'react', icon: FaReact, name: 'React' },
  { id: 'nextjs', icon: SiNextdotjs, name: 'Next.js' },
  { id: 'javascript', icon: FaJs, name: 'JavaScript' },
  { id: 'typescript', icon: SiTypescript, name: 'TypeScript' },
  { id: 'tailwind', icon: SiTailwindcss, name: 'Tailwind CSS' },
  { id: 'html5', icon: FaHtml5, name: 'HTML5' },
  { id: 'css3', icon: FaCss3Alt, name: 'CSS3' },
  { id: 'nodejs', icon: FaNodeJs, name: 'Node.js' },
  { id: 'git', icon: FaGitAlt, name: 'Git' },
  { id: 'postman', icon: SiPostman, name: 'Postman' },
  { id: 'vercel', icon: SiVercel, name: 'Vercel' },
  { id: 'figma', icon: SiFigma, name: 'Figma' },
];

export const projectsData = [
  {
    id: 1,
    title: 'Lumina Modern E-Commerce Storefront',
    description:
      'An elegant and user-friendly fashion e-commerce website. Features include product browsing, shopping cart, and secure checkout, providing a seamless online shopping experience.',
    image: '/images/lumina.png',
    gitUrl: 'https://github.com/dhianharyono/lumina',
    previewUrl: 'https://lumina-seven-navy.vercel.app/',
    tech: ['React.js', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    id: 2,
    title: 'Tracer Study SMAN 1 TAWANGSARI',
    description:
      'A web application for tracking and managing alumni data. It allows users to register, update profiles, and view statistics about alumni employment and education history.',
    image: '/images/tracer-study.png',
    gitUrl: 'https://github.com/dhianharyono/tracer-study',
    previewUrl: 'https://tracerstudy-smanta.vercel.app/',
    tech: ['React.js', 'Next.js', 'TypeScript', 'Tailwind'],
  },
];

export const certificates = [
  {
    id: 1,
    title: 'Advanced TypeScript Concepts',
    company: 'LinkedIn Learning',
    duration: 'February 2025',
    description:
      'Delving into advanced TypeScript concepts to tackle large-scale development challenges, such as conditional types and mapped types.',
    link: 'https://www.linkedin.com/learning/certificates/12ce0153ff37da82512552af73a3324904197fad3c3bced68bb75581f4c61c42',
  },
  {
    id: 2,
    title: 'React Design Patterns',
    company: 'LinkedIn Learning',
    duration: 'February 2025',
    description:
      'Learning React Design Patterns to build scalable and maintainable applications, including HOC, Render Props, and Context API.',
    link: 'https://www.linkedin.com/learning/certificates/4c773dab18f376ab91abf3c01a84eb79d621b39b0c5d88f4949ac778619506c4',
  },
  {
    id: 3,
    title: 'Understanding TypeScript',
    company: 'Udemy',
    duration: 'April 2024',
    description:
      'Deepening understanding of TypeScript: Improving JavaScript Code Quality and Scalability. Learning to integrate type-checking for writing more robust code.',
    link: 'https://ude.my/UC-0748e4b1-9b76-4304-8872-9cda8b028575',
  },
  {
    id: 4,
    title: 'React Hooks Tutorial',
    company: 'Udemy',
    duration: 'February 2024',
    description:
      'Learning how to use React Hooks like useState, useEffect, and useContext to create cleaner, more concise, and performant functional components.',
    link: 'https://ude.my/UC-78b1304f-7e80-4c7e-842a-e2704b0e359f',
  },
];

export const experiences = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Telkom Indonesia',
    type: 'Full-time',
    duration: 'Aug 2019 - Present',
    location: 'Bandung Area, West Java, Indonesia',
    description:
      'Developing high-scale digital platforms for Telkom Group using modern frontend technologies.',
    responsibilities: [
      'Developed user-friendly web pages using React.js and Next.js for core enterprise applications.',
      'Collaborated closely with back-end developers and web designers to enhance usability and overall user experience.',
      'Maintained and optimized legacy codebases to improve performance and scalability.',
    ],
    achievements: [
      'Delivered platforms used by 1.1M+ users',
      'Built reusable component system across 10+ projects',
      'Reduced development time by ~40%',
      'Maintained >80% test coverage across projects',
    ],
    startYear: 'NOW',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Telkom Indonesia',
    type: 'Internship',
    duration: 'Jan 2019 - Jun 2019',
    location: 'Bandung Area, West Java, Indonesia',
    description:
      'Contributed to the Smart City Nusantara project as a Junior Frontend Developer.',
    responsibilities: [
      'Built interactive dashboard components for Smart City monitoring systems.',
      'Participated in daily stand-ups and agile development cycles.',
      'Assisted in UI testing and bug fixing for the main portal.',
    ],
    achievements: [
      'Developed a key visualization module for the Smart City dashboard.',
      'Completed the internship with high commendation from the lead engineer.',
    ],
    startYear: '2019',
  },
  {
    id: 3,
    title: 'Mobile Web Specialist',
    company: 'Google Developers Kejar',
    type: 'Scholarship',
    duration: 'Nov 2018 - Dec 2018',
    location: 'Bandung',
    description:
      'Collaborative, community-based learning program initiated by the Google Developers team.',
    responsibilities: [
      'Completed intensive training on Mobile Web technologies (PWA, Service Workers).',
      'Collaborated with peers to build a final project demonstrating mobile-first principles.',
    ],
    achievements: [
      'Certified as a Mobile Web Specialist upon program completion.',
      'Built a fully offline-capable web application as the final project.',
    ],
    startYear: '2018',
  },
  {
    id: 4,
    title: 'Junior Web Developer',
    company: 'Jogjasite',
    type: 'Internship',
    duration: 'Jun 2018 - Jul 2018',
    location: 'Yogyakarta',
    description:
      'Completed two website projects: a travel portal and a political information site.',
    responsibilities: [
      'Developed static and dynamic web pages using PHP and jQuery.',
      'Managed content updates via a custom CMS.',
      'Ensured cross-browser compatibility for client websites.',
    ],
    achievements: [
      'Launched "The Java Holidays" travel website ahead of schedule.',
      'Implemented a dynamic candidate search feature for the political portal.',
    ],
    startYear: '2018',
  },
];
