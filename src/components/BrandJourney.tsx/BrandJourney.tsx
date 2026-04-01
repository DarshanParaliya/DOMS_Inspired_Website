import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// ScrollTrigger is registered once in App.tsx

const StatCounter = ({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) => {
  const spring = useSpring(0, { mass: 1, stiffness: 30, damping: 10 });
  const display = useTransform(spring, (latest) =>
    latest.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    })
  );

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value, spring]);

  return (
    <span ref={ref} className="flex items-center">
      <motion.span>{display}</motion.span>
      <span className="ml-[0.1vw]">{suffix}</span>
    </span>
  );
};

const BrandJourney = () => {
  const horizontalSectionRef = useRef<HTMLDivElement>(null);
  const horizontalWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = horizontalSectionRef.current;
    const wrapper = horizontalWrapperRef.current;

    if (!section || !wrapper) return;

    const calculateScroll = () => {
      return wrapper.scrollWidth - window.innerWidth;
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${calculateScroll()}`,
        pin: true,
        scrub: true, // Strict 1:1 sync
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    // Main horizontal move
    tl.to(wrapper, {
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
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-transparent from-50% to-green-300"
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
        className="flex h-screen items-center relative bg-transparent"
        style={{
          width: "300vw"
        }}

      >

        {/* Page 1 */}
        <div
          className="w-screen h-full flex flex-col md:flex-row items-center justify-center px-10 md:pl-55 gap-12 relative overflow-hidden bg-transparent"
        >

          {/* Background Elements */}
          <div className="absolute top-[20%] left-[10%] w-[15vw] opacity-25 z-0 rotate-12 pointer-events-none">
            <img src="/assets/images/drop11.png" alt="Overlay 11" className="w-full h-auto object-contain" />
          </div>
          <div className="absolute top-[5%] -right-[300%] w-[12vw] opacity-30 z-0 pointer-events-none">
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

          <div className="absolute bottom-[6%] right-[6%] w-[16vw]  pointer-events-none border-b  border-gray-500 pb-[1vw] " >
            <h1 className='text-[1vw] font-[500] text-[#111]'>The Visionaries Behind the Verdict</h1>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 relative z-10">
            <h2 className="text-[5vw] sour-gummy text-[#111] leading-none uppercase tracking-tighter">
              Where Creativity <br />  Meets Critique
            </h2>
          </div>
          {/* Right - 6 Columns */}
          <div className="w-full md:w-[60vh] h-[75vh] z-1 flex items-center justify-center">
            <img
              src="/assets/images/DOMS_image1.webp"
              alt="Story"
              className="w-full h-full object-cover border-red-500 border-10"
            />
          </div>
        </div>

        {/* Page 2 - The Foundation */}
        <div className="w-screen h-full relative bg-transparent">



          <div className='top-[-15.2%] left-[31%] absolute opacity-[10%]'>
            <img src="/assets/images/drop16.png" />
          </div>

          <div className='absolute right-[7%] top-[3%]  border-b-2 border-gray-300 flex items-baseline gap-4'>
            <h1 className='text-[5vw] josefin-sans uppercase tracking-tighter font-bold'>
              meet our
            </h1>
            <h1 className='text-[5vw] titan-one-regular uppercase tracking-tighter text-[#FFD700] font-bold'>
              jury
            </h1>
          </div>



          <div className='w-[30vw] h-[30vw] top-[-30%] left-[-1%] overflow-hidden absolute rotate-[19deg]'>
            <img src="/assets/images/drop5.png" alt="bgElements" className='w-full h-full rounded-full opacity-[45%]' />
          </div>

          <div>

            <div className='left-[5%] bottom-[47%] absolute'>
              <h2 className='font-bold roboto-condensed text-[#111] text-[1.3vw]'>Late Shri Rasikbhai Raveshia</h2>
              <p className='text-[1vw] font-[500] text-[#111]'>Founder of DOMS Industries</p>
            </div>
            <div className='w-[22vw] h-[22vw] absolute bottom-[-2%] left-3'>
              {/* Premium Photo Frame for Person 1 */}
              <div className="absolute top-[1%] left-1/2 -translate-x-1/2 w-[100%] h-[110%] bg-red-300/30 border border-white/40 backdrop-blur-xl rounded-[2vw] shadow-xl z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-blue-300/20 blur-[4vw]" />
              </div>
              <img src="/assets/images/founder1.png" alt="" className='w-full h-full relative z-10' />
            </div>



            <div className='left-[30%] bottom-[39%] absolute'>
              <h2 className='font-bold roboto-condensed text-[#111] text-[1.3vw]'>Shri Mansukhbhai Rajani</h2>
              <p className='text-[1vw] font-[500] text-[#111]'>Founder of DOMS Industries</p>
            </div>
            <div className='w-[20vw] h-[20vw] absolute bottom-[-4%] left-[26%]'>
              {/* Premium Photo Frame for Person 2 */}
              <div className="absolute top-[1%] left-1/2 -translate-x-1/2 w-[110%] h-[110%] bg-yellow-300/50 border border-white/40 backdrop-blur-xl rounded-[2vw] shadow-xl z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-purple-300/20 blur-[4vw]" />
              </div>
              <img src="/assets/images/founder2.png" alt="" className='w-full h-full relative z-10' />
            </div>



            <div className='left-[55%] bottom-[40%] absolute'>
              <h2 className='font-bold  roboto-condensed text-[#111] text-[1.3vw]'>Massimo Candela</h2>
              <p className='text-[1vw] font-[500] text-[#111]'>Chairperson and Non-Executive <br />Director of our Company </p>
            </div>
            <div className='w-[22vw] h-[22vw] absolute bottom-[-4%] left-[52%]'>
              {/* Premium Photo Frame for Person 3 */}
              <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[90%] h-[100%] bg-blue-300/30 border border-white/40 backdrop-blur-xl rounded-[2vw] shadow-xl z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-green-300/20 blur-[4vw]" />
              </div>
              <img src="/assets/images/founder3.png" alt="" className='w-full h-full relative z-10' />
            </div>


            <div className='right-[3%] bottom-[36%] absolute'>
              <h2 className='font-bold roboto-condensed text-[#111] text-[1.3vw]'>Sanjay Rajani</h2>
              <p className='text-[0.9vw] font-[500] text-[#111]'>Whole-time Director and one of <br />the Individual Promoters of our Company</p>
            </div>
            <div className='w-[20vw] h-[20vw] absolute bottom-[-4%] right-[2%]'>
              {/* Premium Photo Frame for Person 4 */}
              <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[110%] h-[105%] bg-orange-300/80 border border-white/40 backdrop-blur-xl rounded-[2vw] shadow-xl z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-orange-300/20 blur-[4vw]" />
              </div>
              <img src="/assets/images/founder4.png" alt="" className='w-full h-full relative z-10' />
            </div>
          </div>

        </div>

        {/* Page 3 - The Achievement */}
        <div className="w-screen h-full relative bg-transparent">



          <div className='w-[25vw] h-[25vw] top-[-15%] left-[40%] absolute opacity-[20%] rotate-[25deg] rounded-lg'>
            <img className='w-full h-full object-cover' src="/assets/images/drop33.png" />
          </div>
          <div className='w-[25vw] h-[25vw] bottom-[-5%] right-[4%] absolute opacity-[20%]'>
            <img className='w-full h-full object-contain' src="/assets/images/drop4.png" />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center pt-[5vh]">
            {/* Section Heading */}
            <div className="mb-[6vh] flex items-center gap-6">
              <div className="w-[48vw] h-[9vw]">
                <img src="/assets/images/drop333.png" alt="Inside the world of" className='w-full h-full object-contain' />
              </div>
              <span className="pt-4.5 text-[4.5vw] averia-libre-bold-italic text-red-400 drop-shadow-sm leading-none font-extrabold">
                DOMS
              </span>
            </div>

            {/* Stats Grid */}
            <div className="w-[85vw] grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-16">

              {/* Stat 1 */}
              <div className="flex flex-col items-start border-l-4 border-[#FFD700] pl-6 transition-transform duration-300 hover:translate-x-2">
                <h3 className="text-[5vw] titan-one-regular text-[#111] leading-none mb-2">
                  <StatCounter value={7850} suffix="+" />
                </h3>
                <p className="text-[1vw] font-black text-gray-500 uppercase tracking-[0.3vw] font-roboto-condensed">
                  Global Workforce
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-start border-l-4 border-[#FF6B6B] pl-6 transition-transform duration-300 hover:translate-x-2">
                <h3 className="text-[5vw] titan-one-regular text-[#111] leading-none mb-2">
                  <StatCounter value={50} suffix="+" />
                </h3>
                <p className="text-[1vw] font-black text-gray-500 uppercase tracking-[0.3vw] font-roboto-condensed">
                  Countries Reached
                </p>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-start border-l-4 border-[#4ECDC4] pl-6 transition-transform duration-300 hover:translate-x-2">
                <h3 className="text-[5vw] titan-one-regular text-[#111] leading-none mb-2">
                  <StatCounter value={3770} suffix="+" />
                </h3>
                <p className="text-[1vw] font-black text-gray-500 uppercase tracking-[0.3vw] font-roboto-condensed">
                  Product SKUs
                </p>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-start border-l-4 border-[#45B7D1] pl-6 transition-transform duration-300 hover:translate-x-2">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-[4vw] titan-one-regular text-[#111] leading-none mb-2">
                    <StatCounter value={72.69} decimals={2} suffix="%" />
                  </h3>
                </div>
                <p className="text-[1vw] font-black text-gray-500 uppercase tracking-[0.3vw] font-roboto-condensed">
                  Gross Product Sales
                </p>
              </div>

              {/* Stat 5 */}
              <div className="flex flex-col items-start border-l-4 border-[#96CEB4] pl-6 transition-transform duration-300 hover:translate-x-2">
                <h3 className="text-[4vw] titan-one-regular text-[#111] leading-none mb-2">
                  <StatCounter value={73.45} decimals={2} suffix="%" />
                </h3>
                <p className="text-[1vw] font-black text-gray-500 uppercase tracking-[0.3vw] font-roboto-condensed">
                  Overall Market Share
                </p>
              </div>

              {/* Stat 6 */}
              <div className="flex flex-col items-start border-l-4 border-[#FFEEAD] pl-6 transition-transform duration-300 hover:translate-x-2">
                <h3 className="text-[5vw] titan-one-regular text-[#111] leading-none mb-2">
                  <StatCounter value={15} suffix="+" />
                </h3>
                <p className="text-[1vw] font-black text-gray-500 uppercase tracking-[0.3vw] font-roboto-condensed">
                  Production Facilities
                </p>
              </div>

            </div>
          </div>

        </div>


        {/* Grainy Noise Overlay - Only active in this section */}
      </div>
      {/* Subtle noise overlay using CSS-only approach — no external fetch */}
      <div
        className="absolute inset-0 z-[100] pointer-events-none opacity-[0.03] scale-150 rotate-12"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }}
      />
    </section>
  );
};

export default BrandJourney;
