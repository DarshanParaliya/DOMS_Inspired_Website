import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
import legacyImg from '../../assets/images/about_us1.webp';
import manufacturingImg from '../../assets/images/about_us2.webp';
import mascotImg from '../../assets/images/about_us3.webp';


const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mascotRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(contentRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2
    });

    if (mascotRef.current) {
      gsap.from(mascotRef.current, {
        x: 400,
        opacity: 0,
        duration: 2.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: mascotRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }
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
            <img src={legacyImg} alt="Legacy" className="relative z-10 w-full  h-auto rounded-[3rem] shadow-2xl border-4 border-white" />
          </div>
        </div>

        {/* Manufacturing Facilities Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-blue-200/50 blur-3xl rounded-full scale-75" />
            <img src={manufacturingImg} alt="Manufacturing" className="relative z-10 w-full h-[15vw] rounded-[2rem] shadow-1xl border-4 border-white" />
          </div>
          <div className="space-y-8 text-left order-1 lg:order-2">
            <h2 className="text-4xl titan-one-regular text-[#111] uppercase">OUR <span className="text-blue-500">FACILITIES</span></h2>
            <div className="space-y-6">
              <p className="text-lg averia-libre-regular text-gray-600 leading-relaxed">
                DOMS’s manufacturing facilities are sprawled in **Umbergaon, Gujarat** and **Jammu & Kashmir** in India, spreading across **1 million square feet** of built-up area.
              </p>
              <p className="text-lg averia-libre-regular text-gray-600 leading-relaxed">
                To accommodate its immediate growth plan, the company has commenced construction to develop additional production facilities of **625,000 square feet**, expected to be ready in a phased manner.
              </p>
              <p className="text-lg averia-libre-regular text-gray-600 leading-relaxed">
                In **Jammu**, current production facilities are spread across **100,000 square feet** focused on producing high-quality pencils, sourcing one of the best quality wood available in India.
              </p>
            </div>
          </div>
        </div>

        {/* Mascot Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8 text-left">
            <h2 className="text-4xl titan-one-regular text-[#111] uppercase">DOMMY- <span className="text-green-500">THE YOUNG SPIRIT</span></h2>
            <div className="space-y-6">
              <p className="text-lg averia-libre-regular text-gray-600 leading-relaxed font-bold italic">
                DOMMY is the embodiment of the modern-day kid.
              </p>
              <p className="text-lg averia-libre-regular text-gray-600 leading-relaxed">
                He is sharp, quick, technologically savvy and very tuned into the modern world. He is not just academically bright but also creatively sharp. 
              </p>
              <p className="text-lg averia-libre-regular text-gray-600 leading-relaxed">
                Dommy encourages kids to discover their talents and go beyond their limits. At the same time, it encourages them to believe that they need to prepare today for whatever they wish to be in the future.
              </p>
              <p className="text-lg averia-libre-regular text-gray-600 leading-relaxed">
                DOMS has created our mascot **DOMMY** to communicate with kids in a joyful and relatable way. We aimed to create a friend that engages them and generates curiosity in their sharp minds.
              </p>
            </div>
          </div>
          <div ref={mascotRef} className="relative">
            <div className="absolute inset-0 bg-green-200/50 blur-3xl rounded-full scale-75" />
            <img src={mascotImg} alt="DOMMY Mascot" className="relative z-10 w-[20vw] h-[30vw] group-hover:rotate-3 transition-transform duration-500" />
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
    </div>
  );
};

export default AboutUs;
