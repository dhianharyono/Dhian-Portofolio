import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import About from './components/AboutSection/AboutSection';
import Project from './components/ProjectSection/Project';
import Footer from './components/Footer/Footer';
import Connect from './components/ConnectSection/ConnectSection';
import Experience from './components/ExperienceSection/Experience';
import CoreExpertise from './components/CoreExpertise/CoreExpertise';
import { ArrowDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar />
      <div className='container mt-24 mx-auto px-6 py-14'>
        <HeroSection />
        <Link href={'#about'} className='hidden md:block'>
          <ArrowDownIcon className='h-24 w-6 mx-auto mt-10 text-gray-500 animate-bounce' />
        </Link>
        <About />
        <Experience />
        <Project />
        <CoreExpertise />
        <Connect />
      </div>
      <Footer />
    </main>
  );
}
