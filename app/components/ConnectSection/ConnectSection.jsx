'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import emailjs from '@emailjs/browser';

const ConnectSection = () => {
  const form = useRef();
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setEmailError(false);
    setEmailSubmitted(false);

    emailjs
      .sendForm(
        'service_g8mcl72',
        'template_tc7md96',
        form.current,
        'C4ROwvEHT3wxYFxGF'
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          setEmailSubmitted(true);
          setIsSubmitting(false);
          e.target.reset();
        },
        (error) => {
          console.log('Email failed:', error.text);
          setEmailError(true);
          setIsSubmitting(false);
        }
      );
  };
  return (
    <section id='contact' className='relative py-24 mt-12 md:mt-24'>
      <div className='relative z-10 grid md:grid-cols-2 gap-12 md:gap-20 items-start px-4'>
        {/* Left Column: Get in Touch & Socials */}
        <div>
          <h2 className='text-xl md:text-3xl font-bold text-white mb-4'>
            Get In Touch
          </h2>
          <p className='text-[#ADB7BE] text-sm md:text-base mb-8 max-w-md'>
            Have a project in mind? Let`s discuss how I can help bring your
            ideas to life.
          </p>

          <div className='flex flex-col gap-6 mb-12'>
            <Link
              href='https://wa.me/081320005405'
              target='_blank'
              className='flex items-center gap-4 p-4 rounded-xl bg-[#181818] border border-white/5 hover:border-primary-500/50 transition-all group'
            >
              <div className='h-12 w-12 rounded-full bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors'>
                <svg
                  className='w-6 h-6 text-primary-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className='text-white font-semibold group-hover:text-primary-400 transition-colors'>
                  Contact Me
                </h3>
                <p className='text-sm text-gray-400'>Chat via WhatsApp</p>
              </div>
            </Link>

            <Link
              href='mailto:dhianharyono@gmail.com'
              className='flex items-center gap-4 p-4 rounded-xl bg-[#181818] border border-white/5 hover:border-primary-500/50 transition-all group'
            >
              <div className='h-12 w-12 rounded-full bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors'>
                <svg
                  className='w-6 h-6 text-primary-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className='text-white font-semibold group-hover:text-primary-400 transition-colors'>
                  Email
                </h3>
                <p className='text-sm text-gray-400'>dhianharyono@gmail.com</p>
              </div>
            </Link>
          </div>

          <h3 className='text-xl font-semibold text-white mb-4'>
            Connect With Me
          </h3>
          <div className='flex gap-4 items-center'>
            <Link
              href='https://github.com/dhianharyono'
              target='_blank'
              aria-label='GitHub'
              className='p-3 rounded-full bg-[#181818] border border-white/5 hover:bg-white/10 hover:scale-110 transition-all group'
            >
              <FaGithub className='w-6 h-6 text-white group-hover:text-primary-500 transition-colors' />
            </Link>
            <Link
              href='https://www.linkedin.com/in/dhian-haryono/'
              target='_blank'
              aria-label='LinkedIn'
              className='p-3 rounded-full bg-[#181818] border border-white/5 hover:bg-white/10 hover:scale-110 transition-all group'
            >
              <FaLinkedin className='w-6 h-6 text-white group-hover:text-primary-500 transition-colors' />
            </Link>
            <Link
              href='https://www.upwork.com/freelancers/~01004f811bfcb5f1ed'
              target='_blank'
              aria-label='Upwork'
              className='p-3 rounded-full bg-[#181818] border border-white/5 hover:bg-white/10 hover:scale-110 transition-all group'
            >
              <SiUpwork className='w-6 h-6 text-white group-hover:text-primary-500 transition-colors' />
            </Link>
          </div>
        </div>

        {/* Right Column: Form */}
        {/* Right Column: Form */}
        <div>
          <form className='flex flex-col gap-6' ref={form} onSubmit={sendEmail}>
            <div className='mb-2'>
              <label
                htmlFor='email'
                className='text-white block mb-2 text-sm font-medium'
              >
                Your Email
              </label>
              <input
                type='email'
                id='email'
                name='user_email'
                required
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-4 focus:ring-primary-500 focus:border-primary-500 transition-colors'
                placeholder='jacob@google.com'
              />
            </div>
            <div className='mb-2'>
              <label
                htmlFor='subject'
                className='text-white block mb-2 text-sm font-medium'
              >
                Subject
              </label>
              <input
                type='text'
                id='subject'
                name='user_subject'
                required
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-4 focus:ring-primary-500 focus:border-primary-500 transition-colors'
                placeholder='Just saying hi'
              />
            </div>
            <div className='mb-2'>
              <label
                htmlFor='message'
                className='text-white block mb-2 text-sm font-medium'
              >
                Message
              </label>
              <textarea
                name='message'
                id='message'
                required
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-4 focus:ring-primary-500 focus:border-primary-500 transition-colors h-32'
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type='submit'
              disabled={isSubmitting}
              className='bg-primary-600 hover:bg-primary-700 text-white font-medium py-4 px-5 rounded-lg w-full transition-colors duration-200 disabled:opacity-50'
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {emailSubmitted && (
              <p className='text-green-500 text-sm mt-2'>
                Email sent successfully!
              </p>
            )}
            {emailError && (
              <p className='text-red-500 text-sm mt-2'>
                Failed to send email. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
