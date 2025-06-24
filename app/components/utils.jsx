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
    title: 'My Work',
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
    tag: ['All', 'Web'],
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
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/dhianharyono/myfashion',
    previewUrl: 'https://myfashion-ten.vercel.app/',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS'],
  },
];

export const certificates = [
  {
    id: 1,
    title: 'React Hooks Tutorial',
    issuer: 'Udemy',
    date: 'February 2025',
    description:
      'Mempelajari cara menggunakan React Hooks seperti useState, useEffect, dan useContext untuk membuat komponen fungsional yang lebih bersih, ringkas, dan performatif.',
    link: 'https://www.linkedin.com/learning/certificates/12ce0153ff37da82512552af73a3324904197fad3c3bced68bb75581f4c61c42',
  },
  {
    id: 2,
    title: 'Understanding TypeScript',
    issuer: 'Udemy',
    date: 'February 2025',
    description:
      'Mendalami TypeScript: Meningkatkan Kualitas dan Skalabilitas Kode JavaScript. Belajar mengintegrasikan type-checking untuk menulis kode yang lebih robust.',
    link: 'https://www.linkedin.com/learning/certificates/4c773dab18f376ab91abf3c01a84eb79d621b39b0c5d88f4949ac778619506c4',
  },
  {
    id: 3,
    title: 'React Design Patterns',
    issuer: 'LinkedIn Learning',
    date: 'April 2024',
    description:
      'Mempelajari React Design Patterns untuk membangun aplikasi yang skalabel & maintainable, termasuk HOC, Render Props, dan Context API.',
    link: 'https://ude.my/UC-0748e4b1-9b76-4304-8872-9cda8b028575',
  },
  {
    id: 4,
    title: 'Advanced TypeScript Concepts',
    issuer: 'LinkedIn Learning',
    date: 'Maret 2024',
    description:
      'Mendalami konsep TypeScript lanjutan untuk mengatasi tantangan pengembangan skala besar, seperti conditional types dan mapped types.',
    link: 'https://ude.my/UC-78b1304f-7e80-4c7e-842a-e2704b0e359f',
  },
];

export const experience = [
  {
    id: 1,
    title: 'FAB Digital - Core',
    company: 'Telkom Indonesia',
    duration: 'Jan 2024 - Now',
    description:
      'A digital platform from Telkom Indonesia to manage end to end Fulfillment, Assurance and Billing (purchase order, billing statement, payment, invoice, settlement, Tax invoice) via API and web application.',
    link: null,
    github: null,
    tech: ['React.js', 'Vite', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'MyTenS - Dashboard Management Data',
    company: 'Telkom Group',
    duration: 'Jun 2020 - Dec 2023',
    description:
      'MyTenS - Dashboard Management Data is a digital portal make management easier to see all AM activity. By see all AM activity, management can profide best plan to our product to get highest income for company. This portal is used for internal Telkom Group',
    link: null,
    github: null,
    tech: ['React.js'],
  },
  {
    id: 3,
    title: 'MyTDS - Product Catalog Dashboard',
    company: 'Telkom Group',
    duration: 'Nov 2019 - May 2020',
    description:
      'MyTDS - Product Catalog Dashboard is a digital portal make product owners and management easier to add, submit, and approve product additions to product catalog content. By adding this product, it will guarantee the newness of the product before it is used by the user. This portal is used for internal Telkom Group',
    link: null,
    github: null,
    tech: ['React.js'],
  },
  {
    id: 4,
    title: 'Digital Touch Point Digital Service Assurance (DTP-DSA)',
    company: 'Telkom Group',
    duration: 'Sep 2019 - Nov 2019',
    description:
      'Digital Touch Point Digital Service Assurance (DTP DSA) is a digital portal that plays a role in making it easier for Product Owners (POs) to apply for product testing. Through this tester, will guarantee the quality of the product before being used by users. This portal is used for internal Telkom Group',
    link: null,
    github: null,
    tech: ['React.js'],
  },
  {
    id: 5,
    title: 'Dashboard Smart City Nusantara',
    company: 'Tribe Smart City, Digital Services Division',
    duration: 'Jan 2019 - Aug 2019',
    description:
      'Internship project at Tribe Smart City, Digital Services Division. I was seconded to develop the Smart City Nusantara Dashboard at the Front End. The programming language used is React Js.',
    link: null,
    github: null,
    tech: ['React.js'],
  },
  {
    id: 6,
    title: 'Sistem Informasi Calon Legislatif DIY',
    company: 'Joglasite',
    duration: 'Jun 2018 - Jul 2018',
    description:
      'Is one of the projects during practical work in Joglasite. Creating a legislative candidate information portal for a political party. This portal is equipped with dynamic content that can be controlled via the admin panel.',
    link: null,
    github: null,
    tech: [],
  },
  {
    id: 7,
    title: 'The Java Holidays - Travel Website',
    company: 'Joglasite',
    duration: 'Jun 2018 - Jul 2018',
    description:
      'Is one of the projects during practical work in Joglasite. Creating a tourist information portal and can also be used to book tour packages. This portal is equipped with dynamic content that can be controlled via the admin panel.',
    link: null,
    github: null,
    tech: [],
  },
];
