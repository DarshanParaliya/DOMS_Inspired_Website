import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-start pt-32 pb-20 px-10"
      style={{
        background: 'radial-gradient(circle at 10% 20%, #fde68a 0%, transparent 40%), radial-gradient(circle at 90% 80%, #fca5a5 0%, transparent 40%), #f5f4f0',
      }}
    >
      {/* Decorative background noise */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />

      <div ref={contentRef} className="relative z-10 max-w-6xl w-full">
        <div className="text-center mb-20">
          <h1 className="text-[10vw] titan-one-regular text-[#111] leading-none mb-4 uppercase tracking-tighter">
            Our <span className="text-orange-500">Legacy</span>
          </h1>
          <p className="text-[1.3vw] josefin-sans text-gray-700 tracking-wide max-w-4xl mx-auto italic">
            "Every ambition needs a preparation." - Tracing our journey from a small partnership to a global stationery giant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8 text-left">
            <h2 className="text-4xl titan-one-regular text-[#111] uppercase">The Story of <span className="text-orange-500">DOMS</span></h2>
            <p className="text-lg averia-libre-regular text-gray-600 leading-relaxed">
              Our roots trace back to **1976**, when we began as **R.R. Industries**, founded by the visionaries **Late Shri Rasiklal Amritlal Raveshia** and **Late Shri Mansukhlal Jamnadas Rajani** in Valsad, Gujarat.
            </p>
            <p className="text-lg averia-libre-regular text-gray-600 leading-relaxed">
              In **2005**, the flagship brand **"DOMS"** was launched, marking a new era of innovation. By **2012**, we partnered with the Italian leader **F.I.L.A.**, and in **2023**, we celebrated our IPO, truly becoming a brand loved across the globe.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-orange-200/50 blur-3xl rounded-full scale-75" />
            <img src="/assets/images/DOMS_image1.webp" alt="Legacy" className="relative z-10 w-full h-auto rounded-[3rem] shadow-2xl border-8 border-white" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { title: "Our Mission", desc: "Delivering high-quality, affordable stationery and art materials that inspire creativity for students and professionals." },
            { title: "Our Vision", desc: "To be the leading integrated stationery brand from India, recognized for global product leadership and innovation." },
            { title: "Core Values", desc: "Quality, Integrity, Innovation, and a deep-seated commitment to Sustainability and Customer-Centricity." }
          ].map((item, i) => (
            <div key={i} className="bg-white/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/60 shadow-xl hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold sour-gummy mb-4 text-[#111] uppercase tracking-tighter">{item.title}</h3>
              <p className="text-gray-600 averia-libre-regular leading-relaxed text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-[15%] right-[10%] w-[12vw] opacity-30 animate-pulse">
        <img src="/assets/images/pencil_image.png" alt="" className="w-full rotate-45" />
      </div>
    </div>
  );
};

export default AboutUs;
