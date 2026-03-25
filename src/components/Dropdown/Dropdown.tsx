
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Dropdown = () => {
  const horizontalSectionRef = useRef<HTMLDivElement>(null);
  const horizontalWrapperRef = useRef<HTMLDivElement>(null);

  // Ref for the noise effect


  useGSAP(() => {
    if (!horizontalSectionRef.current || !horizontalWrapperRef.current) return;

    const calculateScroll = () => {
      if (!horizontalWrapperRef.current) return 0;
      return horizontalWrapperRef.current.scrollWidth - window.innerWidth;
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: horizontalSectionRef.current,
        start: "top top",
        end: () => `+=${calculateScroll()}`,
        pin: true,
        scrub: true, // Strict 1:1 sync
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    // Main horizontal move
    tl.to(horizontalWrapperRef.current, {
      x: () => -calculateScroll(),
      ease: "none",
      duration: 1
    });

    // Grainy reveal animations for road path items
    const revealItems = [
      { sel: '.drop-23', t: 0.12 },
      { sel: '.arrow-7', t: 0.18 },
      { sel: '.drop-24', t: 0.28 },
      { sel: '.arrow-13', t: 0.35 },
      { sel: '.drop-25', t: 0.45 },
      { sel: '.arrow-4', t: 0.55 },
      { sel: '.drop-26', t: 0.65 },
      { sel: '.arrow-5', t: 0.72 },
      { sel: '.drop-27', t: 0.82 },
      { sel: '.arrow-6', t: 0.88 },
      { sel: '.drop-28', t: 0.95 },
    ];

    revealItems.forEach(item => {
      tl.fromTo(`${item.sel} .mask-overlay`,
        { 
          clipPath: 'polygon(-50% 0, 150% 0, 150% 150%, -50% 150%)',
          opacity: 1
        },
        {
          clipPath: 'polygon(100% 0, 100% 0, 100% 150%, 150% 100%)',
          opacity: 0,
          duration: 0.08,
          ease: "power2.inOut"
        },
        item.t // Use relative time in the timeline
      );
    });

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(refreshTimer);
  }, { scope: horizontalSectionRef });

  return (
    <section
      ref={horizontalSectionRef}
      className="relative w-full h-screen overflow-hidden bg-white mt-[-1px]"
      id="dropdown-section"
    >
      {/* Intricate SVG Filter for the Mask (Global for the section) */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id="dropdown-noise" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" seed="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 10 0 0 0 -5" />
          <feComposite in="SourceGraphic" operator="in" />
        </filter>
      </svg>

      <div
        ref={horizontalWrapperRef}
        className="flex h-screen items-center"
        style={{ width: "300vw" }}
      >
        {/* Page 1 */}
        <div
          className="w-screen h-full flex flex-col md:flex-row items-center justify-center px-10 md:pl-55 gap-12 relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-[20%] left-[10%] w-[15vw] opacity-25 z-0 rotate-12 pointer-events-none">
            <img src="/assets/images/drop11.png" alt="Overlay 11" className="w-full h-auto object-contain" />
          </div>
          <div className="absolute bottom-[15%] right-[30%] w-[12vw] opacity-30 z-0 pointer-events-none">
            <img src="/assets/images/drop12.png" alt="Overlay 12" className="w-full h-auto object-contain" />
          </div>
          <div className="absolute left-[10%] bottom-[1%] w-[10vw] opacity-35 z-0 pointer-events-none">
            <img src="/assets/images/drop13.png" alt="Overlay 13" className="w-full h-auto object-contain" />
          </div>
          <div className="absolute top-[10%] right-[10%] w-[18vw] opacity-25 z-0 rotate-[45deg] pointer-events-none">
            <img src="/assets/images/drop14.png" alt="Overlay 14" className="w-1/2 h-auto object-contain" />
          </div>
          <div className="absolute top-[16%] right-[36%] w-[20vw] opacity-20 z-0 -rotate-6 pointer-events-none">
            <img src="/assets/images/drop15.png" alt="Overlay 15" className="w-2/3 h-auto object-contain" />
          </div>

          {/* Left - 6 Columns */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 relative z-10">
            <h2 className="text-[5vw] rubik-bubbles text-[#111] leading-none uppercase tracking-tighter">
              See the world <br /> in a new light
            </h2>
          </div>
          {/* Right - 6 Columns */}
          <div className="w-full md:w-1/2 h-[75vh] flex items-center justify-center relative z-10">
            <img
              src="/assets/images/drop1.png"
              alt="Story"
              className="w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>

        {/* Transition Image between Page 1 and Page 2 */}
        <div className="absolute left-[104vw] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[20vw] pointer-events-none">
          <img
            src="/assets/images/drop22.png"
            alt="Transition"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Page 2 - The Foundation */}
        <div
          className="w-screen h-full relative bg-[#FEF9E7]"
        >
          {/* drop23 (Top-Left)  1*/}
          <div className="absolute left-[12%] top-[12%] w-[22vw] z-10 drop-item drop-23">
            <img src="/assets/images/drop23.png" alt="Reading" className="w-full h-auto object-contain" />
            <div className="mask-overlay absolute inset-0 bg-[#FEF9E7] pointer-events-none z-20" style={{ filter: 'url(#dropdown-noise)' }} />
          </div>

          {/* arrow7 (Curved down-right) 2*/}
          <div className="absolute left-[28%] top-[25%] w-[14vw] z-0 arrow-item arrow-7 rotate-[15deg]">
            <img src="/assets/images/arrow7.png" alt="Arrow" className="w-full h-auto object-contain" />
            <div className="mask-overlay absolute inset-0 bg-[#FEF9E7] pointer-events-none z-20" style={{ filter: 'url(#dropdown-noise)' }} />
          </div>

          {/* drop24 (School Bus) (Middle-Right) 3*/}
          <div className="absolute right-[42%] top-[35%] w-[20vw] z-10 drop-item drop-24 p-[0.6vw]">
            <img src="/assets/images/drop24.png" alt="School Bus" className="w-full h-auto object-contain" />
            <div className="mask-overlay absolute inset-0 bg-[#FEF9E7] pointer-events-none z-20" style={{ filter: 'url(#dropdown-noise)' }} />
          </div>

          {/* arrow13 (Large curve down-left) 4*/}
          <div className="absolute right-[34%] top-[45%] w-[10vw] z-0 arrow-item arrow-13 rotate-[-320deg]">
            <img src="/assets/images/arrow6.png" alt="Arrow" className="w-full h-auto object-contain" />
            <div className="mask-overlay absolute inset-0 bg-[#FEF9E7] pointer-events-none z-20" style={{ filter: 'url(#dropdown-noise)' }} />
          </div>

          {/* drop25 (School Building) (Bottom-Left) 5*/}
          <div className="absolute right-[12%] bottom-[32%] w-[22vw] z-10 drop-item drop-25 p-[0.6vw] ">
            <img src="/assets/images/drop25.png" alt="School" className="w-full h-auto object-contain" />
            <div className="mask-overlay absolute inset-0 bg-[#FEF9E7] pointer-events-none z-20" style={{ filter: 'url(#dropdown-noise)' }} />
          </div>
        </div>







        {/* Page 3 - The Achievement */}
        <div
          className="w-screen h-full relative bg-[#EBF5FB]"
        >
          {/* arrow5 (Spiral joining P2 and P3) 6*/}
          <div className="absolute -left-[20%] bottom-[46%] w-[20vw] z-0 arrow-item arrow-4 rotate-[-110deg]">
            <img src="/assets/images/arrow5.png" alt="Arrow" className="w-full h-auto object-contain" />
            <div className="mask-overlay absolute inset-0 bg-[#EBF5FB] pointer-events-none z-20" style={{ filter: 'url(#dropdown-noise)' }} />
          </div>

          {/* drop26 (Classroom) 7*/}
          <div className="absolute left-[5%] top-[15%] w-[24vw] z-10 drop-item drop-26">
            <img src="/assets/images/drop26.png" alt="Classroom" className="w-full h-auto object-contain" />
            <div className="mask-overlay absolute inset-0 bg-[#EBF5FB] pointer-events-none z-20" style={{ filter: 'url(#dropdown-noise)' }} />
          </div>

          {/* arrow5 (Spiral down-right) 8*/}
          <div className="absolute left-[29%] -top-[12%] w-[22vw] z-0 arrow-item arrow-5 rotate-[280deg]">
            <img src="/assets/images/arrow5.png" alt="Arrow" className="w-full h-auto object-contain" />
            <div className="mask-overlay absolute inset-0 bg-[#EBF5FB] pointer-events-none z-20" style={{ filter: 'url(#dropdown-noise)' }} />
          </div>

          {/* drop28 (Success) 10*/}
          <div className="absolute right-[27%] bottom-[3%] w-[38vw] z-10 drop-item drop-28">
            <img src="/assets/images/drop28.png" alt="Success" className="w-full h-auto object-contain" />
            <div className="mask-overlay absolute inset-0 bg-[#EBF5FB] pointer-events-none z-20" style={{ filter: 'url(#dropdown-noise)' }} />
          </div>

          {/* Success Caption 11*/}
          <div className="absolute right-[10%] top-[25%] z-20 text-right success-caption pointer-events-none">
            <h3 className="text-[4vw] rubik-bubbles text-[#111] leading-none uppercase tracking-tighter">
              Your mindset  <br />is everything
            </h3>
            <p className="text-[1vw] font-black text-gray-500 uppercase tracking-[0.3vw] mt-4 font-roboto-condensed">
              Drawn with DOMS
            </p>
          </div>
        </div>
      </div>

      {/* Grainy Noise Overlay - Only active in this section */}
      <div
        className="absolute inset-0 z-[100] pointer-events-none opacity-[0.03] scale-150 rotate-12"
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      />
    </section>
  );
};

export default Dropdown;
