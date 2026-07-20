import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import About from './components/AboutSection/AboutSection';
import Project from './components/ProjectSection/Project';
import Footer from './components/Footer/Footer';
import Connect from './components/ConnectSection/ConnectSection';
import Experience from './components/ExperienceSection/Experience';
import CoreExpertise from './components/CoreExpertise/CoreExpertise';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { ArrowDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212] overflow-x-hidden relative'>
      <Navbar />

      {/* Hero Section */}
      <section className='w-full pt-24 pb-12 bg-[#121212]'>
        <div className='container mx-auto px-6'>
          <HeroSection />
          <Link href={'#about'} className='hidden md:block' aria-label="Scroll to About Section">
            <ArrowDownIcon className='h-24 w-6 mx-auto mt-10 text-gray-500 animate-bounce' />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className='w-full py-16 bg-[#181818]'>
        <div className='container mx-auto px-6'>
          <About />
        </div>
      </section>

      {/* Experience Section */}
      <section className='w-full py-16 bg-[#121212]'>
        <div className='container mx-auto px-6'>
          <Experience />
        </div>
      </section>

      {/* Project Section */}
      <section className='w-full py-16 bg-[#181818]'>
        <div className='container mx-auto px-6'>
          <Project />
        </div>
      </section>

      {/* CoreExpertise Section */}
      <section className='w-full py-16 bg-[#121212]'>
        <div className='container mx-auto px-6'>
          <CoreExpertise />
        </div>
      </section>

      {/* Connect Section */}
      <section className='w-full py-16 bg-[#181818]'>
        <div className='container mx-auto px-6'>
          <Connect />
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
