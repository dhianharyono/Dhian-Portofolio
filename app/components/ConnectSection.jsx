'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from '../../public/github-icon.svg';
import LinkedinIcon from '../../public/linkedin-icon.svg';
import InstagramIcon from '../../public/ig-image.png';

const ConnectSection = () => {
  return (
    <section id='contact' className='relative py-24'>
      <span className='anchor' />
      <div className='relative z-10 grid md:grid-cols-2 gap-8 items-center px-4'>
        <div>
          <h2 className='text-3xl font-bold text-white mb-4'>Let’s Connect</h2>
          <p className='text-[#ADB7BE] text-base max-w-md mb-6'>
            I’m currently open for freelance frontend developer roles. If you
            have a question, opportunity, or just want to say hi — feel free to
            reach out. I’ll do my best to get back to you promptly.
          </p>

          <div className='flex gap-4 items-center'>
            <Link
              href='https://github.com/dhianharyono'
              target='_blank'
              aria-label='GitHub'
            >
              <Image
                src={GithubIcon}
                alt='GitHub Icon'
                className='hover:scale-110 transition-transform duration-200'
                width={32}
                height={32}
              />
            </Link>
            <Link
              href='https://www.linkedin.com/in/dhian-haryono/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <Image
                src={LinkedinIcon}
                alt='LinkedIn Icon'
                className='hover:scale-110 transition-transform duration-200'
                width={32}
                height={32}
              />
            </Link>
            <Link
              href='https://www.instagram.com/dhianharyono/'
              target='_blank'
              aria-label='Instagram'
            >
              <Image
                src={InstagramIcon}
                alt='Instagram Icon'
                className='hover:scale-110 transition-transform duration-200'
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
