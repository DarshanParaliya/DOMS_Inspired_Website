import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleTrail from './ParticleTrail';

import heroBadge from '../../assets/images/hero_badge.png';
import pencilImage from '../../assets/images/pencil_image.png';
import heroImage2 from '../../assets/images/hero_image2.jpg';
import heroImage1 from '../../assets/images/hero_image1.jpg';

// ScrollTrigger is registered once in App.tsx — imported here for GSAP to resolve the plugin at runtime
void ScrollTrigger; // prevent tree-shaking of the side-effecting plugin reference

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
  const badgeRef = useRef<HTMLDivElement>(null);


  useGSAP(() => {
    if (!isLoaded) return;

    // 1. Initial Position and Intro - IMAGES NOW INSTANTLY VISIBLE
    const tlIntro = gsap.timeline();


    // Subtle settling for images
    tlIntro.from(pencilWrapperRef.current, {
      y: -20,
      duration: 1.2,
      ease: "power3.out"
    }, 0);

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

    // 2b. Badge Circular Animation (Rotation + Small Orbital Float)
    gsap.to(badgeRef.current, {
      rotation: 360,
      duration: 25,
      repeat: -1,
      ease: "none"
    });

    // Orbital motion (Moving in a circle)
    gsap.to(badgeRef.current, {
      x: 20,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    gsap.to(badgeRef.current, {
      y: 20,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: -2.5 // Phase shift for circular path
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

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, { dependencies: [isLoaded], scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden z-[10]"
      style={{
        background: 'radial-gradient(circle at 20% 20%, #cbc8f1ff 0%, transparent 40%), radial-gradient(circle at 75% 45%, #cbffd8ff 0%, transparent 50%), radial-gradient(circle at 20% 90%, #f6f7dcff 0%, transparent 40%), #8ea1f3ff',
      }}

    >

      <div ref={badgeRef} className='absolute top-[60%] right-[7%] w-[15vw] opacity-[50%]'>
        <img src={heroBadge} className=" h-[15vw] object-cover" alt="Badge" />
      </div>


      <div ref={bgOverlayRef} className="absolute inset-0 opacity-0 z-[50] pointer-events-none" />

      <div ref={particleRef} className="absolute inset-0 z-[2] pointer-events-none">
        <ParticleTrail />
      </div>

      <div
        ref={textWrapperRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[20] text-center w-full pointer-events-none"
      >
        <h1 className="text-[17vw] font-extrabold text-black leading-[0.9] tracking-[-1vw] m-0 select-none mix-blend-difference">
          DOMS
        </h1>
        <p className="text-[1.2vw] font-[700] uppercase text-black tracking-[0.3vw] mt-[-1vw] pt-[2vw]">
          EVERY AMBITION NEEDS A PREPARATION.
        </p>
      </div>


      {/* Outer container handles CSS Centering */}
      <div className="absolute top-[26%] left-1/2 -translate-x-1/2 z-[30] pointer-events-none origin-center">
        {/* Inner wrapper handles GSAP Animations */}
        <div
          ref={pencilWrapperRef}
          className="will-change-transform"
        >
          <img
            ref={heroPencilRef}
            src={pencilImage}
            alt="DOMS Premium Pencil"
            className="w-[23vw] min-w-[300px] h-auto opacity-[95%] pointer-events-auto select-none drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>

      <img
        ref={notepadRef}
        src={heroImage2}
        alt="Notepad"
        className="absolute top-[15%] left-[15%] z-[15] w-[8vw] min-w-[150px] opacity-[65%] h-auto -rotate-[22deg] drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)] rounded-[10px]"
      />

      <img
        ref={paletteRef}
        src={heroImage1}
        alt="Palette"
        className="absolute bottom-[10%] left-[15%] z-[15] w-[10vw] opacity-[65%] min-w-[180px] h-auto rotate-[5deg] drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
      />
    </div>
  );
};

export default Hero;
