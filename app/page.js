import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import About from './components/AboutSection/AboutSection';
import Project from './components/ProjectSection/Project';
import Footer from './components/Footer/Footer';
import Connect from './components/ConnectSection/ConnectSection';
import Certificate from './components/CertificateSection/Certificate';
import Experience from './components/ExperienceSection/Experience';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar />
      <div className='container mt-24 mx-auto px-12 py-14'>
        <HeroSection />
        <About />
        <Project />
        <Certificate />
        <Experience />
        <Connect />
      </div>
      <Footer />
    </main>
  );
}
