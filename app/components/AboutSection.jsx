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
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:p'>
        <Image src="/images/about-image.png" width={500} height={500} alt="about-image"/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae accusantium hic, velit aliquid minus itaque maiores id quae ullam assumenda veniam eos ratione cum in iusto consectetur eveniet atque.
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