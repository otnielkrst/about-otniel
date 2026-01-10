'use client';

import React, { useEffect, useRef } from 'react';
import { Code, Briefcase, Instagram, Linkedin, Github, ChevronDown, ArrowRight, ExternalLink, Car, Users, Mic2, Camera, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (mainRef.current && galleryRef.current) {
      
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        
        
        tl.from(".hero-line", {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out"
        })
        .from(".scroll-indicator", {
          opacity: 0,
          y: -20,
          repeat: -1,
          yoyo: true,
          duration: 1.5
        }, "-=0.5");

        
        gsap.from(".about-card", {
          scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2
        });

        
        const bars = document.querySelectorAll(".skill-bar");
        bars.forEach((bar) => {
            gsap.from(bar, {
                scrollTrigger: {
                    trigger: bar,
                    start: "top 90%"
                },
                width: "0%",
                duration: 1.5,
                ease: "power2.out"
            });
        });

        
        gsap.from(".org-card", {
          scrollTrigger: {
              trigger: "#leadership",
              start: "top 80%",
              toggleActions: "play none none reverse"
          },
          x: -50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2
      });

    
      const gallerySection = document.getElementById("gallery"); 
      const galleryContainer = galleryRef.current;
      
      if (gallerySection && galleryContainer) {
        const totalWidth = galleryContainer.scrollWidth;
        const windowWidth = window.innerWidth;
        const scrollAmount = totalWidth - windowWidth;

        gsap.to(galleryContainer, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: gallerySection,
            start: "top top",
            end: `+=${scrollAmount}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });
      }

        
        gsap.from(".project-card", {
            scrollTrigger: {
                trigger: "#projects", 
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        });

      }, mainRef);

      return () => ctx.revert();
    }
  }, []);

  
  return (
    <div ref={mainRef} className="bg-black text-white min-h-screen font-sans overflow-x-hidden selection:bg-purple-500 selection:text-white">
      
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference bg-gradient-to-b from-black/50 to-transparent backdrop-blur-[2px]">
        <img 
          src="/logo-alfagift.png" 
          alt="Alfagift Logo" 
          className="h-8 md:h-10 w-auto object-contain cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
        
        <div className="hidden md:flex gap-8 items-center bg-zinc-900/80 px-6 py-3 rounded-full border border-zinc-800 backdrop-blur-md">
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">About</button>
          <button onClick={() => scrollToSection('leadership')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Leadership</button>
          <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Life</button>
          <button onClick={() => scrollToSection('projects')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Work</button>
        </div>

        <a href="mailto:putrakristianto22@email.com" className="text-sm font-medium hover:underline decoration-purple-500 underline-offset-4">CONTACT ME</a>
      </nav>

      <section className="h-screen flex flex-col justify-center px-6 relative">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
            <div className="overflow-hidden"><span className="hero-line block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">JAVANESE</span></div>
            <div className="overflow-hidden"><span className="hero-line block text-zinc-200">CREATIVE</span></div>
            <div className="overflow-hidden"><span className="hero-line block text-zinc-800">DEVELOPER.</span></div>
          </h1>
          <p className="hero-line mt-8 text-xl md:text-2xl text-zinc-400 max-w-2xl">
            Halo Cretivox! Aku Otniel. Aku suka ngoding hal yang ribet jadi kelihatan gampang dan interaktif.
          </p>
        </div>

        <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 cursor-pointer" onClick={() => scrollToSection('about')}>
          <span className="text-xs tracking-widest uppercase">Scroll Down</span>
          <ChevronDown />
        </div>
      </section>

      <section id="about" className="about-section min-h-screen py-20 px-6 bg-zinc-950 flex items-center">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="about-card space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              MORE THAN JUST <br/> <span className="text-purple-500">CODE.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Aku bukan cuma nulis baris kode. Aku ngerancang pengalaman. Dari Next.js sampe animasi yang wow pake GSAP, aku selalu ngejar standar "keren" yang gak ngebosenin.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Kenapa Cretivox? Karena aku tau codinganku pasti makin estetik kalo aku join Cretivox.
            </p>
            
            <div className="pt-8 flex gap-4">
              <a href="https://www.instagram.com/otnielkrst/" className="p-3 border border-zinc-700 rounded-full hover:bg-white hover:text-black transition-colors"><Instagram className="w-5 h-5"/></a>
              <a href="https://www.linkedin.com/in/otniel-kristianto-putra-6823b62b3/" className="p-3 border border-zinc-700 rounded-full hover:bg-white hover:text-black transition-colors"><Linkedin className="w-5 h-5"/></a>
              <a href="https://github.com/otnielkrst" className="p-3 border border-zinc-700 rounded-full hover:bg-white hover:text-black transition-colors"><Github className="w-5 h-5"/></a>
            </div>
          </div>

          <div className="about-card bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Code className="text-purple-500"/> Tech Stack
            </h3>
            
            <div className="space-y-6">
              
              <div>
                <div className="flex justify-between mb-2 text-sm font-medium">
                  <span>Next.js / React</span>
                  <span className="text-purple-500">60%</span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="skill-bar h-full bg-purple-500 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2 text-sm font-medium">
                  <span>Tailwind CSS</span>
                  <span className="text-purple-500">60%</span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="skill-bar h-full bg-purple-500 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2 text-sm font-medium">
                  <span>GSAP Animation</span>
                  <span className="text-purple-500">65%</span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="skill-bar h-full bg-purple-500 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2 text-sm font-medium">
                  <span>TypeScript</span>
                  <span className="text-purple-500">70%</span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="skill-bar h-full bg-purple-500 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="leadership" className="org-section min-h-screen py-20 px-6 bg-black flex items-center relative overflow-hidden">
    
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-900/10 blur-[100px] rounded-full -z-10"></div>
        
        <div className="max-w-6xl mx-auto w-full">
           <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 text-left">
            LEADERSHIP <br/> <span className="text-purple-500">JOURNEY.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl">
             
             <div className="org-card bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:bg-zinc-900 transition-colors duration-300">
                <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-6">
                   <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Ketua Komisi Advokasi</h3>
                      <p className="text-purple-400 font-medium">FTI UKSW 2024</p>
                   </div>
                   <div className="bg-zinc-800 p-3 rounded-full">
                      <Users className="w-6 h-6 text-purple-500" />
                   </div>
                </div>
                
                <div className="space-y-4 text-zinc-400 leading-relaxed">
                   <p className="border-l-2 border-purple-500 pl-4">
                      Memimpin upaya advokasi untuk menjembatani aspirasi mahasiswa dengan pihak fakultas, memastikan suara mahasiswa didengar dan ditindaklanjuti.
                   </p>
                   <ul className="space-y-3 mt-4">
                      <li className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                         <span><strong>Koordinator</strong> – Visitasi HMP (Himpunan Mahasiswa Program Studi) dan Ketua Angkatan.</span>
                      </li>
                      <li className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                         <span><strong>Koordinator</strong> – Open Forum Fakultas (Wadah diskusi terbuka mahasiswa & dekanat).</span>
                      </li>
                   </ul>
                </div>

                
                <div className="mt-8 flex flex-wrap gap-2">
                   {['Leadership', 'Public Speaking', 'Conflict Resolution', 'Strategic Planning'].map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-full text-xs text-zinc-500 font-medium tracking-wide">
                        {tag}
                      </span>
                   ))}
                </div>
             </div>

             
             <div className="org-card bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:bg-zinc-900 transition-colors duration-300">
                <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-6">
                   <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Ketua PPKP</h3>
                      <p className="text-purple-400 font-medium">Persatuan Pemuda Kristen Pemalang (2019-2021)</p>
                   </div>
                   <div className="bg-zinc-800 p-3 rounded-full">
                      <Users className="w-6 h-6 text-purple-500" />
                   </div>
                </div>
                
                <div className="space-y-4 text-zinc-400 leading-relaxed">
                   <p className="border-l-2 border-purple-500 pl-4">
                      Membantu mempersatukan dan mewadahi pemuda-pemuda Kristen di Kabupaten Pemalang untuk beribadah bersama.
                   </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                   {['Community Building', 'Event Organizing', 'Unity', 'Youth Leadership'].map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-full text-xs text-zinc-500 font-medium tracking-wide">
                        {tag}
                      </span>
                   ))}
                </div>
             </div>

          </div>
        </div>
      </section>

      <section id="gallery" className="gallery-section h-screen bg-black flex items-center overflow-hidden relative">
        <div className="absolute top-10 left-6 md:left-20 z-10 mix-blend-difference">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            LIFE AT <span className="text-purple-500">20's.</span>
          </h2>
          <div className="flex items-center gap-2 mt-2 text-zinc-400 text-sm">
          </div>
        </div>

        <div ref={galleryRef} className="flex gap-8 px-6 md:px-20 h-[60vh] md:h-[70vh] items-center w-max">
            
            <div className="gallery-item w-[80vw] md:w-[600px] h-full relative group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
               <img 
                 src="/2.jpg"
                 alt="Gallery 1" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
               />
               <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                 <p className="text-white font-bold text-lg">Jejeran Pimpinan</p>
                 <p className="text-zinc-300 text-sm">BMPF FTI 2024</p>
               </div>
            </div>

            <div className="gallery-item w-[80vw] md:w-[400px] h-full relative group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
               <img 
                 src="/1.jpg"
                 alt="Gallery 2" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
               />
               <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                 <p className="text-white font-bold text-lg">Rapat Pleno</p>
                 <p className="text-zinc-300 text-sm">BPMF FTI 2024</p>
               </div>
            </div>

            <div className="gallery-item w-[80vw] md:w-[600px] h-full relative group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
               <img 
                 src="/3.jpg"
                 alt="Gallery 3" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
               />
               <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                 <p className="text-white font-bold text-lg">Sosialisasi Advokasi</p>
                 <p className="text-zinc-300 text-sm">Pelatihan Calon Fungsionaris 2024</p>
               </div>
            </div>

             <div className="gallery-item w-[80vw] md:w-[500px] h-full relative group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
               <img 
                 src="/4.jpg"
                 alt="Gallery 4" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
               />
               <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                 <p className="text-white font-bold text-lg">Para Pemimpi(n)</p>
                 <p className="text-zinc-300 text-sm">BPMF FTI UKSW 2024</p>
               </div>
            </div>

             <div className="gallery-item w-[300px] h-full flex items-center justify-center border border-zinc-800 rounded-3xl bg-zinc-900/50">
                <p className="text-zinc-500 text-center px-4">
                  And many more memories <br/> captured.
                </p>
             </div>

        </div>
      </section>

      <section id="projects" className="project-section min-h-screen py-20 px-6 bg-black flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 text-right">
            SELECTED <br/> <span className="text-purple-500">WORK.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <a 
              href="https://supra-mk-iv.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-card group relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-purple-500 transition-all duration-500 block"
            >
              <div className="h-64 bg-zinc-800 relative overflow-hidden">
                 
                 <img 
                   src="/Supra.jpg" 
                   alt="Toyota Supra MK IV"
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                 />

                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

                 <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full border border-white/10 group-hover:bg-purple-500 group-hover:border-purple-500 transition-colors">
                    <ExternalLink className="w-4 h-4 text-white" />
                 </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-purple-500 transition-colors">Supra MK IV</h3>
                </div>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  Project eksplorasi web otomotif. Sebuah tribute page untuk legenda JDM, Toyota Supra MK IV, dengan fokus pada layout modern dan interaktivitas.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-xs text-zinc-300">HTML/CSS</span>
                  <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-xs text-zinc-300">Responsive Design</span>
                </div>
              </div>
            </a>
            
            <div className="hidden md:flex items-center justify-center border border-zinc-800 border-dashed rounded-3xl text-zinc-600">
                <p className="text-sm">More projects coming soon...</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[100px] rounded-full -z-10"></div>
        <h2 className="text-5xl md:text-7xl font-bold mb-8">LET'S MAKE IT <br/> HAPPEN.</h2>
        <a href="mailto:putrakristianto22@email.com" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
          <Briefcase className="w-5 h-5"/> Hire Me for Internship
        </a>
      </section>

      <footer className="border-t border-zinc-900 bg-black py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-600 text-sm text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Otniel Kristianto Putra. All rights reserved.</p>
            <p className="text-xs mt-1">
              Built with <span className="text-zinc-400">Next.js</span> & <span className="text-purple-500">GSAP</span>. 
              <span className="ml-1 inline-flex items-center gap-1">Made in Salatiga</span>
            </p>
          </div>
          
          <div className="flex gap-6 items-center">
            <a href="https://www.instagram.com/otnielkrst/" className="text-zinc-600 hover:text-white transition-colors text-sm">Instagram</a>
            <a href="https://www.linkedin.com/in/otniel-kristianto-putra-6823b62b3/" className="text-zinc-600 hover:text-white transition-colors text-sm">LinkedIn</a>
            <a href="https://github.com/otnielkrst" className="text-zinc-600 hover:text-white transition-colors text-sm">GitHub</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
