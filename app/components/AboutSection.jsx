"use client"
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'
import { TAB_DATA } from './utils'

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className='text-white'>
      <span class="anchor"></span>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:p'>
        <Image src="/images/about-image.png" width={500} height={500} alt="about-image"/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I am a Frontend Developer based in Indonesia. I specialize in creating beautiful, responsive websites and web applications. I have experience working with modern frontend technologies like React, Next.js, and Tailwind CSS. I am passionate about creating accessible and performant web experiences for users. I am always eager to learn new things and improve my skills as a developer.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange('skills')} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange('education')} active={tab === "education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange('certifications')} active={tab === "certifications"}>Certifications</TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection