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
    title: 'Project',
    path: '#projects',
  },
  {
    title: 'Experience',
    path: '#experience',
  },
  {
    title: 'Certificate',
    path: '#certificate',
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
    gitUrl: 'https://github.com/dhianharyono/dhian-app',
    previewUrl: '/',
    tech: ['Next.js', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'My Fashion Store',
    description:
      'An elegant and user-friendly fashion e-commerce website. Features include product browsing, shopping cart, and secure checkout, providing a seamless online shopping experience.',
    image: '/images/projects/fashion-thumbnail.png',
    gitUrl: 'https://github.com/dhianharyono/myfashion',
    previewUrl: 'https://myfashion-ten.vercel.app/',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 1,
    title: 'FAB Digital - Core',
    description:
      'A digital platform from Telkom Indonesia to manage end-to-end Fulfillment, Assurance, and Billing (purchase order, billing statement, payment, invoice, settlement, Tax invoice) via API and web application.',
    image: '/images/projects/fabd.png',
    gitUrl: null,
    previewUrl: null,
    tech: ['React.js', 'Vite', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'MyTenS - Dashboard Management Data',
    description:
      'MyTenS - Dashboard Management Data is a digital portal that makes it easier for management to see all AM activity. By seeing all AM activity, management can provide the best plan for our product to get the highest income for the company. This portal is used for internal Telkom Group.',
    image: null,
    gitUrl: null,
    previewUrl: null,
    tech: ['React.js'],
  },
  {
    id: 3,
    title: 'MyTDS - Product Catalog Dashboard',
    description:
      'MyTDS - Product Catalog Dashboard is a digital portal that makes it easier for product owners and management to add, submit, and approve product additions to product catalog content. By adding this product, it will guarantee the newness of the product before it is used by the user. This portal is used for internal Telkom Group.',
    image: null,
    gitUrl: null,
    previewUrl: null,
    tech: ['React.js'],
  },
  {
    id: 4,
    title: 'Digital Touch Point Digital Service Assurance (DTP-DSA)',
    description:
      'Digital Touch Point Digital Service Assurance (DTP DSA) is a digital portal that plays a role in making it easier for Product Owners (POs) to apply for product testing. Through this tester, product quality will be guaranteed before being used by users. This portal is used for internal Telkom Group.',
    image: null,
    gitUrl: null,
    previewUrl: null,
    tech: ['React.js'],
  },
  {
    id: 5,
    title: 'Dashboard Smart City Nusantara',
    description:
      'Internship project at Tribe Smart City, Digital Services Division. I was seconded to develop the Smart City Nusantara Dashboard at the Front End. The programming language used is React Js.',
    image: null,
    gitUrl: null,
    previewUrl: null,
    tech: ['React.js'],
  },
  {
    id: 6,
    title: 'Sistem Informasi Calon Legislatif DIY',
    description:
      'Is one of the projects during practical work in Jogjasite. Creating a legislative candidate information portal for a political party. This portal is equipped with dynamic content that can be controlled via the admin panel.',
    image: null,
    gitUrl: null,
    previewUrl: null,
    tech: [],
  },
  {
    id: 7,
    title: 'The Java Holidays - Travel Website',
    description:
      'Is one of the projects during practical work in Jogjasite. Creating a tourist information portal and can also be used to book tour packages. This portal is equipped with dynamic content that can be controlled via the admin panel.',
    image: null,
    gitUrl: null,
    previewUrl: null,
    tech: [],
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
    duration: 'Aug 2019 - Present • 5 years 11 months',
    location: 'Bandung Area, West Java, Indonesia',
    description:
      'As a Frontend Developer in the Digital Product Engineer, Digital Business Technology Chapter, I develop user-friendly web pages using React.js. I also collaborate closely with back-end developers and web designers to enhance usability and overall user experience.',
    startYear: 'NOW',
  },
  {
    id: 2,
    title: 'Frontend Developer (Internship)',
    company: 'Telkom Indonesia',
    duration: 'Jan 2019 - Jun 2019 • 6 months',
    location: 'Bandung Area, West Java, Indonesia',
    description:
      'During my internship with the Tribe Smart City, Digital Service Division, I contributed to the Smart City Nusantara project as a Junior Frontend Developer. My responsibilities included creating a user-friendly dashboard website.',
    startYear: '2019',
  },
  {
    id: 3,
    title: 'Mobile Web Specialist',
    company: 'Google Developers Kejar',
    duration: 'Nov 2018 - Dec 2018 • 2 months',
    location: 'Bandung',
    description:
      'This was a collaborative, community-based learning program that combined online materials with offline study groups. The program, known as KEJAR (Study Group), was initiated by the Google Developers team.',
    startYear: '2018',
  },
  {
    id: 4,
    title: 'Junior Web Developer',
    company: 'Jogjasite',
    duration: 'Jun 2018 - Jul 2018 • 2 months',
    location: 'Yogyakarta Area, Yogyakarta, Indonesia',
    description:
      'As a Junior Web Developer at Jogjasite, Superspace Corp., I completed two website projects. The first was for JavaHolidays travel, and the second was a political website designed to provide information about electoral candidates.',
    startYear: '2018',
  },
];
