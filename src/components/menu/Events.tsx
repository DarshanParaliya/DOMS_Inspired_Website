import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Events = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const events = [
    { title: "Stationery & Write Show", date: "Jan 09-12, 2025", location: "BEC, Mumbai, India", desc: "India's largest B2B exhibition for the stationery industry. Witness the latest range of DOMS innovative products." },
    { title: "Art Educators Meet - Raigad", date: "Oct 12, 2024", location: "Raigad, India", desc: "A special gathering focused on revolutionizing the way art is taught in primary and secondary education." },
    { title: "Global School Connect", date: "Nov 20, 2024", location: "International Schools", desc: "Expanding our reach to international institutions, providing premium tools to the next generation of global citizens." }
  ];

  useGSAP(() => {
    gsap.from(contentRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-20 px-10"
      style={{
        background: 'radial-gradient(circle at 80% 20%, #86efac 0%, transparent 40%), radial-gradient(circle at 20% 80%, #fef08a 0%, transparent 40%), #ecfdf5',
      }}
    >
      {/* Decorative background noise */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />

      <div ref={contentRef} className="relative z-10 max-w-6xl w-full text-center">
        <h1 className="text-[10vw] titan-one-regular text-[#111] leading-none mb-4 uppercase tracking-tighter">
          Our <span className="text-green-600">Events</span>
        </h1>
        <p className="text-[1.5vw] josefin-sans text-gray-700 tracking-wide max-w-3xl mx-auto mb-16 uppercase italic">
          Join us in the celebration of creativity and community.
        </p>

        <div className="flex flex-col gap-10 mt-10">
          {events.map((event, i) => (
            <div key={i} className="group relative flex flex-col md:flex-row items-center gap-10 bg-white/60 backdrop-blur-md p-10 rounded-[3rem] border border-white/80 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
               <div className="absolute top-0 right-0 w-[40%] h-full bg-green-500/10 -skew-x-[20deg] translate-x-[20%] group-hover:bg-green-500/20 transition-all duration-500 z-0" />
              
              <div className="flex-shrink-0 w-full md:w-[200px] text-center md:text-left z-10">
                <span className="text-[2.5vw] font-bold titan-one-regular text-green-600 leading-none block">{event.date.split(',')[0]}</span>
                <span className="text-lg font-bold josefin-sans text-gray-500 uppercase tracking-widest">{event.date.includes(',') ? event.date.split(',')[1] : ""}</span>
              </div>

              <div className="text-left flex-grow z-10 border-l border-gray-300 md:pl-10">
                <h3 className="text-4xl font-bold sour-gummy mb-3 text-[#111] group-hover:text-green-600 transition-colors uppercase">{event.title}</h3>
                <span className="text-sm font-bold text-gray-400 josefin-sans uppercase tracking-[0.2vw] mb-3 block">{event.location}</span>
                <p className="text-gray-600 averia-libre-regular text-xl leading-relaxed">{event.desc}</p>
                 <button className="mt-8 px-8 py-3 bg-[#111] text-white rounded-full sour-gummy text-xl hover:bg-green-700 transition-colors">Register Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-[10%] left-[5%] w-[15vw] opacity-20 -rotate-[15deg]">
        <img src="/assets/images/drop11.png" alt="" className="w-full" />
      </div>
       <div className="absolute bottom-[10%] right-[5%] w-[12vw] opacity-20 rotate-[10deg]">
        <img src="/assets/images/drop14.png" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Events;
