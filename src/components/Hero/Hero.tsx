import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleTrail from './ParticleTrail';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  isLoaded: boolean;
}

const Hero = ({ isLoaded }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pencilWrapperRef = useRef<HTMLDivElement>(null);
  const heroPencilRef = useRef<HTMLImageElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const paletteRef = useRef<HTMLImageElement>(null);
  const notepadRef = useRef<HTMLImageElement>(null);
  const particleRef = useRef<HTMLDivElement>(null);
  const bgOverlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!isLoaded) return;

    // 1. Initial Position and Intro - IMAGES NOW INSTANTLY VISIBLE
    const tlIntro = gsap.timeline();
    
   
    // Subtle settling for images
    tlIntro.from(pencilWrapperRef.current, {
      y: -20,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.6");

    tlIntro.from([notepadRef.current, paletteRef.current], {
      xPercent: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8");

    // 2. Subtle Floating Animation (Independent of mouse parallax)
    gsap.to(heroPencilRef.current, {
      y: 15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(notepadRef.current, {
      y: -15,
      rotation: -18,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(paletteRef.current, {
      y: 20,
      rotation: 10,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // 3. Scroll Animation Sequence
    const tlScroll = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=600",
        scrub: 0.5,
      }
    });

    tlScroll.to(textWrapperRef.current, {
      opacity: 0,
      scale: 0.8,
      y: "-10vh",
      ease: "power2.inOut"
    }, 0)
    .to(pencilWrapperRef.current, {
      x: "100vw",
      y: "-50vh",
      rotation: 45,
      scale: 0.3,
      opacity: 0,
      ease: "power2.inOut"
    }, 0)
    .to(notepadRef.current, {
      x: "-50vw",
      y: "-20vh",
      rotation: -60,
      opacity: 0,
      ease: "power2.inOut"
    }, 0)
    .to(paletteRef.current, {
      x: "-50vw",
      y: "30vh",
      rotation: -30,
      opacity: 0,
      ease: "power2.inOut"
    }, 0)
    .to(bgOverlayRef.current, {
      opacity: 1,
      duration: 0.8
    }, 0);

    // 4. Mouse Move Parallax - RESPONSIVE (0.4s)
    const handleMove = (e: MouseEvent) => {
      if (!pencilWrapperRef.current || !isLoaded) return;
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;
      const rotationY = (clientX / window.innerWidth - 0.5) * 20;

      // Apply to WRAPPER to avoid conflict with INNER image floating
      gsap.to(pencilWrapperRef.current, {
        x: xPos,
        y: yPos,
        rotation: rotationY,
        duration: 0.4, 
        ease: "power1.out",
        overwrite: "auto"
      });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, { dependencies: [isLoaded], scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden z-[10] bg-[#f5f4f0]"
    >
      <img 
        src="/assets/images/hero_banner.jpg" 
        alt="Watercolor Backdrop" 
        className="absolute inset-0 w-full h-full object-cover select-none z-[1]"
      />

      <div ref={bgOverlayRef} className="absolute inset-0 bg-[#f5f4f0] opacity-0 z-[50] pointer-events-none" />

      <div ref={particleRef} className="absolute inset-0 z-[2] pointer-events-none">
        <ParticleTrail />
      </div>

      <div 
        ref={textWrapperRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[20] text-center w-full pointer-events-none"
      >
        <h1 className="text-[15vw] font-[900] text-[#111] leading-[0.9] tracking-[-0.5vw] m-0 select-none">
          DOMS
        </h1>
        <p className="text-[1.2vw] font-[700] text-[#111] uppercase tracking-[0.6vw] opacity-80 mt-[-1vw]">
          EVERY AMBITION NEEDS PREPARATION.
        </p>
      </div>

      {/* Pencil Wrapper - Handles Mouse Parallax and Centering */}
      <div 
        ref={pencilWrapperRef}
        className="absolute top-[28%] left-1/2 -translate-x-1/2 z-[30] pointer-events-none origin-center"
      >
        <img
          ref={heroPencilRef}
          src="/assets/images/pencil_image.png"
          alt="DOMS Premium Pencil"
          className="w-[21vw] min-w-[300px] h-auto pointer-events-auto select-none drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)] will-change-transform"
        />
      </div>

      <img
        ref={notepadRef}
        src="/assets/images/hero_image2.jpg"
        alt="Notepad"
        className="absolute top-[15%] left-[15%] z-[15] w-[8vw] min-w-[150px] h-auto -rotate-[22deg] drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)] rounded-[10px]"
      />

      <img
        ref={paletteRef}
        src="/assets/images/hero_image1.jpg"
        alt="Palette"
        className="absolute bottom-[10%] left-[15%] z-[15] w-[10vw] min-w-[180px] h-auto rotate-[5deg] drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
      />
    </div>
  );
};

export default Hero;
