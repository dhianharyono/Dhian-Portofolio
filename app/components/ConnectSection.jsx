"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GithubIcon from '../../public/github-icon.svg'
import LinkedinIcon from '../../public/linkedin-icon.svg'
import InstagramIcon from '../../public/ig-image.png'

const ConnectSection = () => {
    return(
        <section id="contact">        
            <span class="anchor"/>
            <div className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
                <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'/>
                <div className='z-10'>
                    <h5 className='text-xl font-bold text-white my-2'>
                        Let`s Connect
                    </h5>
                    <p className='text=[#ADB7BE] mb-4 max-w-md'>
                        {""}
                        I`m currently looking for new freelance frontend developer opportunities, my inbox is always open.
                        Whether you have question or just want to say hi, I`ll try my best to get back to you!`
                    </p>
                    <div className='socials flex gap-2 items-center'>
                        <Link href="https://github.com/dhianharyono" target='_blank'>
                            <Image src={GithubIcon} alt="Github Icon" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/dhian-haryono/" target='_blank'>
                            <Image src={LinkedinIcon} alt="Linkedin Icon" />
                        </Link>
                        <Link href="https://www.instagram.com/dhianharyono/" target='_blank'>
                            <Image src={InstagramIcon} alt="Instagram Icon" height={40}/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConnectSection
