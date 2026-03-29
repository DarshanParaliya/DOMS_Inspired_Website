import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface LoaderProps {
  setLoaded: (loaded: boolean) => void;
}

const Loader = ({ setLoaded }: LoaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Sophisticated Counter Logic
  useEffect(() => {
    const duration = 2500; // 2.5 seconds total
    const interval = 30;
    const steps = duration / interval;
    const increment = 100 / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment + (Math.random() * 2);
      if (current >= 100) {
        setProgress(100);
        clearInterval(timer);
      } else {
        setProgress(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    if (progress < 100) return;

    const tl = gsap.timeline({
      delay: 0.8,
      onComplete: () => setLoaded(true)
    });

    // 1. Logo Blur and Float Away
    tl.to(logoRef.current, {
      y: -100,
      opacity: 0,
      filter: "blur(20px)",
      scale: 1.1,
      duration: 1,
      ease: "power3.inOut"
    });

    // 2. Staggered Vertical Panels Exit
    if (panelsRef.current) {
      const panels = panelsRef.current.children;
      tl.to(panels, {
        yPercent: -100,
        duration: 1.4,
        stagger: {
          each: 0.08,
          from: "center",
        },
        ease: "expo.inOut"
      }, "-=0.6");
    }

    // 3. Final Container Hidden
    tl.set(containerRef.current, { visibility: 'hidden' });

  }, [progress, setLoaded]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-screen z-[10000] flex items-center justify-center overflow-hidden"
    >
      {/* Background Staggered Panels */}
      <div ref={panelsRef} className="absolute inset-0 flex w-full h-full pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="flex-1 h-full bg-gradient-to-b from-[#2a015e] via-[#210149] to-[#0f0022] border-r border-white/5 shadow-[20px_0_40px_rgba(0,0,0,0.4)]"
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6">

        {/* Grainy Texture Overlay */}
        <div
          className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none scale-125"
          style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
        />

        <div ref={logoRef} className="flex flex-col items-center">

          {/* Glowing Logo Section */}
          <div className="relative mb-12">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-white/20 blur-[50px] scale-150 rounded-full animate-pulse opacity-40" />

            <div className="bg-white p-12 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative z-10 overflow-hidden group">
              {/* Shine effect */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -rotate-45 group-hover:left-[200%] transition-all duration-[2s] pointer-events-none" />

              <img
                src="/assets/images/doms-treehouse.png"
                alt="DOMS Logo"
                className="w-[200px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Percentage & Progress System */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-baseline gap-2">
              <span className="text-[5.5vw] titan-one-regular text-white leading-none tracking-tighter tabular-nums drop-shadow-lg">
                {progress}
              </span>
              <span className="text-[2vw] josefin-sans text-white/40 font-bold">%</span>
            </div>

            {/* Premium Progress Bar */}
            <div className="w-[20vw] h-[3px] bg-white/5 rounded-full relative overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-white/20 via-white to-white/20 transition-all duration-300 ease-out shadow-[0_0_15px_white]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="sour-gummy text-white/40 tracking-[0.6vw] font-bold uppercase text-[1.1vw] animate-pulse whitespace-nowrap">
              Preparation For Every Ambition
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Loader;
