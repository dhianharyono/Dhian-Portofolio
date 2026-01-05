'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
    CodeIcon,
    TerminalIcon,
    DeviceMobileIcon,
    CubeTransparentIcon,
    ServerIcon,
    ShieldCheckIcon
} from '@heroicons/react/outline';

const expertiseData = [
    {
        id: 1,
        icon: CodeIcon,
        title: 'Frontend Engineering',
        items: [
            'React.js, Next.js & Vue.js',
            'TypeScript & Modern ES6+',
            'Tailwind CSS & SCSS',
            'Performance Optimization'
        ]
    },
    {
        id: 2,
        icon: DeviceMobileIcon,
        title: 'Responsive Design',
        items: [
            'Mobile-First Approach',
            'Cross-Browser Compatibility',
            'Adaptive Layouts',
            'PWA Development'
        ]
    },
    {
        id: 3,
        icon: TerminalIcon,
        title: 'Development Workflow',
        items: [
            'Git & Version Control',
            'CI/CD Pipelines',
            'Agile / Scrum Methodologies',
            'Code Review & Mentoring'
        ]
    },
    {
        id: 4,
        icon: ServerIcon,
        title: 'Backend Integration',
        items: [
            'RESTful APIs & GraphQL',
            'Node.js & Express Basics',
            'Authentication (Auth.js/Firebase)',
            'Database Management (MongoDB/SQL)'
        ]
    },
    {
        id: 5,
        icon: CubeTransparentIcon,
        title: 'State Management',
        items: [
            'Redux Toolkit & Context API',
            'Zustand & Recoil',
            'Server State (React Query)',
            'Complex Form Handling'
        ]
    },
    {
        id: 6,
        icon: ShieldCheckIcon,
        title: 'Code Quality',
        items: [
            'Unit Testing (Jest/RTL)',
            'E2E Testing (Cypress/Playwright)',
            'Clean Code Principles',
            'Web Accessibility (WCAG)'
        ]
    }
];

const CoreExpertise = () => {
    return (
        <section id='services' className='relative'>
            <div className='text-center mb-16'>
                <h2 className='text-xl md:text-4xl font-bold text-white mb-2 glow-text'>
                    Core Expertise
                </h2>
                <p className='text-sm md:text-xl text-gray-400'>
                    What I consistently deliver
                </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {expertiseData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className='p-6 rounded-2xl bg-[#121212] border border-white/5 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 group'
                        >
                            <div className='h-12 w-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors'>
                                <Icon className='h-6 w-6 text-primary-400 group-hover:text-primary-300' />
                            </div>

                            <h3 className='text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors'>
                                {item.title}
                            </h3>

                            <ul className='space-y-2'>
                                {item.items.map((subItem, idx) => (
                                    <li key={idx} className='flex items-start text-sm text-gray-400 group-hover:text-gray-300'>
                                        <span className='mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500/50 flex-shrink-0'></span>
                                        {subItem}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default CoreExpertise;
