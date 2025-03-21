"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AboutMe from './components/AboutMe';
import Entertainment from './components/Entertainment';
import Projects from './components/Projects';
import Queens from './components/Queens';
import Sports from './components/Sports';
import Travelling from './components/Travelling';
import Experience from "./components/Experience";
import styles from './styles/HomePage.module.css'

type Leaf = {
  id: number;
  left: string;
  delay: string;
  duration: string;
};

export default function Home() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  useEffect(() => {
    // This will run on the client side after the component mounts
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);
  useEffect(() => {
    const generatedLeaves: Leaf[] = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + "%",
      delay: Math.random() * 3 + "s",
      duration: Math.random() * 10 + 5 + "s",
    }));
    setLeaves(generatedLeaves);
  }, []);

  return (
    <>
      <main className="relative flex flex-col items-center justify-center bg-[#EDE0D4] text-[#3B452D] text-5xl font-bold font-serif min-h-screen">
      <nav className="fixed top-0 w-full bg-[#EDE0D4] z-10 shadow-md">
  <div className="flex justify-center space-x-30 py-4">
    <a href="#aboutMe" className="text-[#3B452D] text-lg hover:text-[#9A6D38] hover:underline hover:underline-offset-4">About Me</a>
    <a href="#experience" className="text-[#3B452D] text-lg hover:text-[#9A6D38] hover:underline hover:underline-offset-4">Experience</a>
    <a href="#projects" className="text-[#3B452D] text-lg hover:text-[#9A6D38] hover:underline hover:underline-offset-4">Side Projects</a>
    <a href="#queens" className="text-[#3B452D] text-lg hover:text-[#9A6D38] hover:underline hover:underline-offset-4">University</a>
    <a href="#sports" className="text-[#3B452D] text-lg hover:text-[#9A6D38] hover:underline hover:underline-offset-4">Sports</a>
    <a href="#entertainment" className="text-[#3B452D] text-lg hover:text-[#9A6D38] hover:underline hover:underline-offset-4">Entertainment</a>
    <a href="#travelling" className="text-[#3B452D] text-lg hover:text-[#9A6D38] hover:underline hover:underline-offset-4">Travels</a>
  </div>
</nav>
        {/* Wooden Texture Overlay */}
        <div
          className="absolute w-full h-full opacity-10"
          style={{
            backgroundImage: "url('/images/brown-white-background.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />

        {/* Falling Leaves Animation */}
        {leaves.map((leaf) => (
          <div
            key={leaf.id}
            className="absolute text-[#9A6D38] text-7xl"
            style={{
              left: leaf.left,
              top: "-10%",
              animation: `fall ${leaf.duration} linear ${leaf.delay} infinite`,
            }}
          >
            🍂
          </div>
        ))}

        {/* Welcome Text */}
        <div className="text-center mb-16">
          Hello, I'm Jeremy Selwin！
        </div>

        {/* Circular Photos Inline */}
        <div className="flex flex-row space-x-10 items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#9A6D38] shadow-lg">
            <Image src="/images/mirror-selfie.png" alt="Mirror Selfie" width={256} height={256} className="object-cover" />
          </div>
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#9A6D38] shadow-lg">
            <Image src="/images/nyc-winter.png" alt="NYC Winter" width={256} height={256} className="object-cover" />
          </div>
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#9A6D38] shadow-lg">
            <Image src="/images/cottage-with-steven.png" alt="Cottage with Steven" width={256} height={256} className="object-cover" />
          </div>
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#9A6D38] shadow-lg">
            <Image src="/images/rock-dunder.png" alt="Rock Duner" width={256} height={256} className="object-cover" />
          </div>
        </div>

        <div
          className="flex flex-row space-x-30 items-center"
          style={{ paddingTop: '50px' }}
        >
          <a href="https://www.linkedin.com/in/jeremy-selwin" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer', zIndex: 1 }}>
            <Image src="/images/logos/linkedIn.png" alt="LinkedIn" width={100} height={100} className="object-cover" />
          </a>
          <a href="https://github.com/selwinjeremy" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer', zIndex: 1 }}>
            <Image src="/images/logos/github.png" alt="Github" width={100} height={100} className="object-cover" />
          </a>
          <a href="https://drive.google.com/file/d/1Kn-qKJHxAlWfbmuN1st3blvoh4fcNMl6/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer', zIndex: 1 }}>
            <Image src="/images/logos/resume.png" alt="Resume" width={100} height={100} className="object-cover" />
          </a>
        </div>

      </main>

      {/* AboutMe, Projects, Skills, and Contact sections */}
      <section
        className="w-full py-5 relative"
        id="aboutMe"
        style={{
          backgroundImage: 'url(/images/brown-mountain-background.png)',
          backgroundSize: 'cover',   // Ensures the image covers the section
          backgroundPosition: 'center', // Keeps the image centered
          backgroundAttachment: 'fixed', // Optional: keeps the image fixed while scrolling
        }}
      >
        {/* Side Nature Design (Trees or Foliage) */}

        <div
          className="w-full max-w-8xl mx-auto px-8 "
          style={{
            borderBottom: '5px solid #8B5E3B',
            borderRadius: '4px',
            marginBottom: '2rem'
          }}>
          <AboutMe />
        </div>
      </section>
      <section
        className="w-full py-8 relative"
        id="experience"
        style={{
          backgroundImage: 'url(/images/brown-mountain-background.png)',
          backgroundSize: 'cover',   // Ensures the image covers the section
          backgroundPosition: 'center', // Keeps the image centered
          backgroundAttachment: 'fixed', // Optional: keeps the image fixed while scrolling
        }}
      >
        <div 
          className="w-full max-w-8xl mx-auto px-8"
          style={{
          borderBottom: '5px solid #8B5E3B',
          borderRadius: '4px',
          marginBottom: '2rem'
        }}> {/* Added px-8 for padding */}
          <Experience />
        </div>
      </section>
      <section
        className="w-full py-8 relative"
        id="projects"
        style={{
          backgroundImage: 'url(/images/brown-mountain-background.png)',
          backgroundSize: 'cover',   // Ensures the image covers the section
          backgroundPosition: 'center', // Keeps the image centered
          backgroundAttachment: 'fixed', // Optional: keeps the image fixed while scrolling
        }}
      >
        <div 
        className="w-full max-w-8xl mx-auto px-8"
        style={{
          borderBottom: '5px solid #8B5E3B',
          borderRadius: '4px',
          marginBottom: '2rem'
        }}> {/* Added px-8 for padding */}
          <Projects />
        </div>
      </section>
      <section
        className="w-full py-8 relative"
        id="queens"
        style={{
          backgroundImage: 'url(/images/brown-mountain-background.png)',
          backgroundSize: 'cover',   // Ensures the image covers the section
          backgroundPosition: 'center', // Keeps the image centered
          backgroundAttachment: 'fixed', // Optional: keeps the image fixed while scrolling
        }}
      >
        <div className="w-full max-w-8xl mx-auto px-8"
        style={{
          borderBottom: '5px solid #8B5E3B',
          borderRadius: '4px',
          marginBottom: '2rem'
        }}> {/* Added px-8 for padding */}
          <Queens />
        </div>
      </section>
      <section
        className="w-full py-8 relative"
        id="sports"
        style={{
          backgroundImage: 'url(/images/brown-mountain-background.png)',
          backgroundSize: 'cover',   // Ensures the image covers the section
          backgroundPosition: 'center', // Keeps the image centered
          backgroundAttachment: 'fixed', // Optional: keeps the image fixed while scrolling
        }}
      >
        <div className="w-full max-w-8xl mx-auto px-8" style={{
          borderBottom: '5px solid #8B5E3B',
          borderRadius: '4px',
          marginBottom: '2rem'
        }}> {/* Added px-8 for padding */}
          <Sports />
        </div>
      </section>
      <section
        className="w-full py-8 relative"
        id="entertainment"
        style={{
          backgroundImage: 'url(/images/brown-mountain-background.png)',
          backgroundSize: 'cover',   // Ensures the image covers the section
          backgroundPosition: 'center', // Keeps the image centered
          backgroundAttachment: 'fixed', // Optional: keeps the image fixed while scrolling
        }}
      >
        <div className="w-full max-w-8xl mx-auto px-8" style={{
          borderBottom: '5px solid #8B5E3B',
          borderRadius: '4px',
          marginBottom: '2rem'
        }}> {/* Added px-8 for padding */}
          <Entertainment />
        </div>
      </section>
      <section
        className="w-full py-8 relative"
        id="travelling"
        style={{
          backgroundImage: 'url(/images/brown-mountain-background.png)',
          backgroundSize: 'cover',   // Ensures the image covers the section
          backgroundPosition: 'center', // Keeps the image centered
          backgroundAttachment: 'fixed', // Optional: keeps the image fixed while scrolling
        }}
      >
        <div className="w-full max-w-8xl mx-auto px-8" style={{
          borderBottom: '5px solid #8B5E3B',
          borderRadius: '4px',
          marginBottom: '2rem'
        }}> {/* Added px-8 for padding */}
          <Travelling />
        </div>
      </section>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
          }
        `}
      </style>
    </>
  );
}
