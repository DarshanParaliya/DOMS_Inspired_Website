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
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-20 px-10"
      style={{
        background: 'radial-gradient(circle at 10% 10%, #dcfce7 0%, transparent 40%), radial-gradient(circle at 90% 90%, #fef3c7 0%, transparent 40%), #f8f9fa',
      }}
    >
      {/* Decorative background noise */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />

      <div ref={contentRef} className="relative z-10 max-w-4xl w-full text-center">
        <h1 className="text-[10vw] titan-one-regular text-[#111] leading-none mb-10 uppercase tracking-tighter">
          Your <span className="text-yellow-600">Profile</span>
        </h1>

        <div className="bg-white/60 backdrop-blur-xl p-16 rounded-[4rem] border border-white/80 shadow-2xl flex flex-col md:flex-row items-center gap-16 text-left relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-[5%] bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400" />

          <div className="relative group/avatar">
            <div className="w-[18vw] h-[18vw] min-w-[200px] min-h-[200px] rounded-full overflow-hidden border-[8px] border-white shadow-xl transition-transform duration-500 group-hover/avatar:scale-110">
              <img src={profileImg} alt="Profile" className="w-full h-full object-cover scale-110 grayscale group-hover/avatar:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform">
              <i className="ri-pencil-line text-xl font-bold text-white"></i>
            </div>
          </div>

          <div className="flex-grow">
            <h2 className="text-[4vw] titan-one-regular text-[#111] leading-tight mb-2">Darshan <span className="text-yellow-500">R.</span></h2>
            <p className="text-xl josefin-sans text-gray-500 font-bold uppercase tracking-[0.4vw] mb-4">DOMS Creative Lead</p>
            <p className="text-lg averia-libre-regular text-gray-400 mb-8 max-w-sm italic">"Fueling my ambition with the right preparation since 2024."</p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#999] block mb-2 font-bold font-roboto-condensed">Email</span>
                <p className="text-xl font-bold text-[#333] josefin-sans overflow-hidden text-ellipsis">darshan@domsindia.com</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#999] block mb-2 font-bold font-roboto-condensed">Community Rank</span>
                <p className="text-xl font-bold text-green-500 josefin-sans uppercase">Master Artist</p>
              </div>
            </div>

            <div className="flex gap-6 mt-12">
              <button className="px-10 py-3 bg-[#111] text-white rounded-full sour-gummy text-xl hover:bg-yellow-600 transition-all transform hover:-translate-y-1 shadow-lg">Settings</button>
              <button className="px-10 py-3 border-2 border-[#111] text-[#111] rounded-full sour-gummy text-xl hover:bg-[#111] hover:text-white transition-all transform hover:-translate-y-1">Logout</button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[20%] right-[5%] w-[12vw] opacity-20 rotate-[35deg]">
        <img src={drop15} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Profile;
