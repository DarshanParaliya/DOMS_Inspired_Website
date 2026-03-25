import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface LoaderProps {
  setLoaded: (loaded: boolean) => void;
}

const Loader = ({ setLoaded }: LoaderProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setLoaded(true);
      }
    });

    // 1. Initial State
    gsap.set(logoRef.current, { scale: 0, opacity: 0 });

    // 2. Logo Popping (Scale 0 to 1 with back ease)
    tl.to(logoRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 0.5
    })
      // 3. Stay for 2 seconds
      .to({}, { duration: 2 })
      // 4. Slide Up Reveal
      .to(loaderRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut"
      });
  }, { scope: loaderRef });

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 w-full h-screen bg-[#210149] flex items-center justify-center z-[1000] overflow-hidden"
    >
      <div 
        ref={logoRef} 
        className="flex flex-col items-center gap-[20px]"
      >
        <img 
          src="/assets/images/doms-treehouse.png" 
          alt="DOMS Treehouse" 
          className="w-[250px] h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        />
        <p className="text-white font-['Outfit'] font-bold tracking-[5px] mt-[10px] opacity-80 text-[1.2rem] text-center">
          PREPARATION FOR EVERY AMBITION
        </p>
      </div>
    </div>
  );
};

export default Loader;
