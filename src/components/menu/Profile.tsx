import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import profileImg from '../../assets/images/founder2.png';
import drop15 from '../../assets/images/drop15.png';


const Profile = () => {
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
      className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center py-8 px-6 md:px-12"
      style={{
        background: 'radial-gradient(circle at 5% 5%, #ecfdf5 0%, transparent 35%), radial-gradient(circle at 95% 95%, #fffbeb 0%, transparent 35%), radial-gradient(circle at 50% 50%, #f0f9ff 0%, transparent 60%), #fafaf9',
      }}
    >
      {/* Dynamic Background Noise */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />

      <div ref={contentRef} className="relative z-10 max-w-4xl w-full">
        {/* Header Section - Condensed */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-6 gap-2">
          <div className="text-left">
            <h1 className="text-[6vw] md:text-[4vw] titan-one-regular text-[#1c1c1c] leading-[0.85] uppercase tracking-tighter mix-blend-multiply">
              Creator <span className="text-yellow-500">Space</span>
            </h1>
            <p className="text-sm md:text-base josefin-sans text-gray-500 font-bold uppercase tracking-[0.3em] mt-2 pl-1">
              Your Creative Identity
            </p>
          </div>
          <div className="hidden md:flex gap-2 mb-1">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-8 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-400 w-2/3" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Profile Card - Scaled Down */}
        <div className="group relative">
          {/* Card Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-emerald-400 to-sky-400 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-white/75 backdrop-blur-3xl p-6 md:p-10 rounded-[2.5rem] border border-white/50 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-14 overflow-hidden">
            
            {/* Left Column: Avatar & Quick Stats - Resized */}
            <div className="flex flex-col items-center gap-6 flex-shrink-0">
              <div className="relative group/avatar">
                {/* Animated Ring */}
                <div className="absolute -inset-3 border-2 border-dashed border-gray-200 rounded-full animate-[spin_20s_linear_infinite] group-hover/avatar:border-yellow-400/50 transition-colors"></div>
                
                <div className="w-[15vw] h-[15vw] min-w-[150px] min-h-[150px] rounded-full overflow-hidden border-[6px] border-white shadow-xl relative z-10 transition-all duration-700 group-hover/avatar:scale-105">
                  <img 
                    src={profileImg} 
                    alt="Profile" 
                    className="w-full h-full object-cover scale-110 grayscale brightness-110 group-hover/avatar:grayscale-0 group-hover/avatar:scale-125 transition-all duration-700 ease-out" 
                  />
                </div>
                
                <div className="absolute -bottom-1 -right-1 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-50 cursor-pointer hover:scale-110 active:scale-95 transition-all">
                  <i className="ri-camera-lens-line text-lg text-yellow-600"></i>
                </div>
              </div>

              <div className="flex gap-3 w-full">
                <div className="flex-1 bg-gray-50/50 p-2.5 rounded-xl text-center border border-gray-100">
                  <p className="text-lg font-bold text-[#111] orbitron">24</p>
                  <p className="text-[8px] uppercase tracking-widest text-gray-400 font-bold">Projects</p>
                </div>
                <div className="flex-1 bg-gray-50/50 p-2.5 rounded-xl text-center border border-gray-100">
                  <p className="text-lg font-bold text-emerald-500 orbitron">1.2k</p>
                  <p className="text-[8px] uppercase tracking-widest text-gray-400 font-bold">Inspiration</p>
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Details - Compacted */}
            <div className="flex-grow text-center lg:text-left pt-2">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 mb-6">
                <div>
                  <h2 className="text-3xl md:text-5xl titan-one-regular text-[#111] leading-none mb-2 tracking-tight">
                    Darshan <span className="text-yellow-500">P.</span>
                  </h2>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    <span className="px-3 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded-full uppercase tracking-wider josefin-sans">Master Artist</span>
                    <span className="px-3 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full uppercase tracking-wider josefin-sans">Pro Member</span>
                  </div>
                </div>
                <p className="text-[9px] font-bold text-gray-400 orbitron uppercase tracking-[0.2em] mb-1">Prep ID: #D82490</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-300 mb-2 ml-1">The Motto</h4>
                  <p className="text-xl averia-libre-bold-italic text-gray-600 leading-snug">
                    "Fueling my <span className="text-emerald-500 italic">ambition</span> with the right <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">preparation</span> since 1975."
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 pt-2">
                  <div className="group/item">
                    <span className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-gray-400 font-black mb-1 transition-colors group-hover/item:text-yellow-600">
                      <i className="ri-mail-send-line text-xs"></i> Connection
                    </span>
                    <div className="h-8 flex items-center">
                      <p className="text-base font-bold text-[#1a1a1a] josefin-sans truncate group-hover/item:text-yellow-600 transition-colors">darshan@domsindia.com</p>
                    </div>
                  </div>
                  <div className="group/item">
                    <span className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-gray-400 font-black mb-1 transition-colors group-hover/item:text-emerald-600">
                      <i className="ri-map-pin-user-line text-xs"></i> Headquarters
                    </span>
                    <div className="h-8 flex items-center">
                      <p className="text-base font-bold text-[#1a1a1a] josefin-sans group-hover/item:text-emerald-600 transition-colors">Mumbai | Gujarat, IN</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-3">
                  <button className="relative overflow-hidden px-8 py-3 bg-[#111] text-white rounded-xl group/btn transition-all hover:scale-105 active:scale-95 shadow-xl">
                    <span className="relative z-10 text-base font-bold sour-gummy uppercase tracking-wider">Settings</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button className="px-8 py-3 border-2 border-gray-100 text-[#111] bg-white/50 backdrop-blur rounded-xl font-bold sour-gummy text-base hover:bg-red-50 hover:border-red-100 hover:text-red-500 transition-all shadow-md active:scale-95">
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Drop Illustration - Resized */}
        <div className="absolute -bottom-6 -right-12 w-[18vw] opacity-[0.06] pointer-events-none rotate-[20deg] mix-blend-multiply">
          <img src={drop15} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};



export default Profile;
