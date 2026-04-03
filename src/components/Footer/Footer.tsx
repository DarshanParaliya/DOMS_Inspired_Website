import { motion } from 'framer-motion';
import { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import footer1 from '../../assets/images/footer1.png';
import domsLogo from '../../assets/images/doms_logo2.png';


const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const colors = ['#facc15', '#ef4444', '#000000', '#22c55e', '#ec4899'];

  const renderColoredText = useCallback((text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} style={{ color: colors[index % colors.length] }}>
        {char}
      </span>
    ));
  }, []);

  // Memoize rendered chars so we don't re-split + re-map on every character typed
  const coloredEmail = useMemo(() => renderColoredText(email), [email, renderColoredText]);

  const socialLinks = [
    { id: 'youtube', icon: 'M10 15 L10 9 L15 12 Z', color: 'hover:bg-red-600' },
    { id: 'facebook', icon: 'M18 2 L15 2 C 12.79 2 11 3.79 11 6 L11 9 L8 9 L8 13 L11 13 L11 22 L15 22 L15 13 L18 13 L19 9 L15 9 L15 6 C 15 5.45 15.45 5 16 5 L19 5 L19 2 Z', color: 'hover:bg-[#1877F2]' },
    { id: 'instagram', icon: 'M12 2 C 9.27 2 8.91 2 7.83 2.05 C 4.75 2.19 3.01 3.93 2.86 7.01 C 2.82 8.09 2.82 8.45 2.82 11.18 C 2.82 13.91 2.82 14.27 2.86 15.35 C 3.01 18.42 4.75 20.17 7.83 20.3 C 8.91 20.35 9.27 20.35 12 20.35 C 14.73 20.35 15.09 20.35 16.17 20.3 C 19.25 20.17 20.99 18.43 21.14 15.35 C 21.18 14.27 21.18 13.91 21.18 11.18 C 21.18 8.45 21.18 8.09 21.14 7.01 C 20.99 3.93 19.25 2.19 16.17 2.05 C 15.09 2 14.73 2 12 2 M 12 6.5 C 14.76 6.5 17 8.74 17 11.5 C 17 14.26 14.76 16.5 12 16.5 C 9.24 16.5 7 14.26 7 11.5 C 7 8.74 9.24 6.5 12 6.5 M 17.5 5 C 18.33 5 19 5.67 19 6.5 C 19 7.33 18.33 8 17.5 8 C 16.67 8 16 7.33 16 6.5 C 16 5.67 16.67 5 17.5 5', color: 'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]' },
    { id: 'twitter', icon: 'M23 3 A 10.9 10.9 0 0 1 19.88 4.61 A 4.41 4.41 0 0 0 22.8 1.63 A 8.86 8.86 0 0 1 20 2.69 A 4.41 4.41 0 0 0 12.82 6.58 A 12.51 12.51 0 0 1 3.78 2 A 4.41 4.41 0 0 0 5.14 7.88 A 4.4 4.4 0 0 1 3.14 7.33 L 3.14 7.38 A 4.41 4.41 0 0 0 6.67 11.71 A 4.41 4.41 0 0 1 4.68 11.78 A 4.41 4.41 0 0 0 8.79 14.84 A 8.86 8.86 0 0 1 1 17.53 A 12.48 12.48 0 0 0 7.76 19.5 A 12.45 12.45 0 0 0 20.29 7 A 8.9 8.9 0 0 0 22.14 4.74 A 8.74 8.74 0 0 1 19.66 5.43 A 4.43 4.43 0 0 0 21.56 3.08 A 8.86 8.86 0 0 1 23 3 Z', color: 'hover:bg-[#1DA1F2]' },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 md:px-10 overflow-hidden bg-gradient-to-b from-green-300 via-white to-blue-300">

      {/* Polaroid Image */}
      <div className="w-[14vw] h-[17vw] overflow-hidden bg-gray-50 flex items-center justify-center border-6 border-gray-300 absolute top-[2%] left-0 mr-[5vw] mt-[5vw] z-10 rotate-[15deg] left-60 top-[-0.5%]">
        <img
          src={footer1}
          alt="Creativity takes courage"
          className="w-full h-full object-cover"
        />
      </div>



      <div className="relative w-full max-w-[1200px] bg-white py-6 pl-20 md:py-10 md:pl-20 flex flex-col items-center border-6 border-green-400">

        {/* Top Section: Email */}
        <div className="w-full flex flex-col md:flex-row items-center gap-12 relative">
          <div className="flex-1 w-full space-y-8">
            <div className="pl-[10vw] relative flex items-center w-full">
              <div className="flex-1 relative h-16">
                <div className="absolute inset-0 py-4 px-2 josefin-sans text-xl pointer-events-none flex items-center w-[65%] overflow-hidden">
                  {!email && <span className="text-gray-300 whitespace-nowrap">Enter your email</span>}
                  <span className="whitespace-pre">{coloredEmail}</span>
                </div>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[65%] h-full bg-transparent border-b-2 border-gray-200 py-4 px-2 outline-none focus:border-purple-400 transition-colors josefin-sans text-xl text-transparent caret-black relative z-10"
                />

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '65%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute bottom-[-2px] left-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 rounded-full"
                />
              </div>

              <div className="relative inline-block top-5 right-50 group cursor-pointer">
                {/* 1. Offset Shadow Box */}
                <div className="absolute inset-0 border-2 border-black rotate-[-5deg] translate-x-[-10px] translate-y-[-8px] group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 pointer-events-none" />

                {/* 2. Main Button */}
                <button className=" cursor-pointer relative z-10 px-10 py-5 bg-[#facc15] rotate-[-5deg] border-2 border-black text-black font-black uppercase tracking-widest rubik-bubbles text-lg transition-all duration-300 group-hover:bg-[#FF6B6B] group-hover:text-white whitespace-nowrap">
                  REGISTER NOW
                </button>
              </div>
            </div>

            <div className="hidden md:block absolute top-[44%] right-[50%] pointer-events-none opacity-40 translate-x-[50%]">
              <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 50 C 40 10, 80 80, 150 20" stroke="url(#paint0_linear)" strokeWidth="8" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear" x1="10" y1="50" x2="150" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9b87f5" />
                    <stop offset="0.5" stopColor="#ff6b6b" />
                    <stop offset="1" stopColor="#ffd93d" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 pl-[10vw] pt-[3vw] pb-5 gap-12 md:gap-8 border-t border-gray-50">
          <div className="space-y-6">
            <ul className="space-y-3 josefin-sans text-gray-600 font-medium text-lg">
              <li className="hover:text-purple-500 cursor-pointer transition-colors sour-gummy">Our Company</li>
              <li className="hover:text-purple-500 cursor-pointer transition-colors sour-gummy">History</li>
              <li className="hover:text-purple-500 cursor-pointer transition-colors sour-gummy">FAQ</li>
              <li className="hover:text-purple-500 cursor-pointer transition-colors sour-gummy">Contact Us</li>
            </ul>
          </div>
          <div className="space-y-6">
            <ul className="space-y-3 josefin-sans text-gray-600 font-medium text-lg">
              <li className="hover:text-purple-500 cursor-pointer transition-colors sour-gummy">Terms of Use</li>
              <li className="hover:text-purple-500 cursor-pointer transition-colors sour-gummy">Privacy Policy</li>
            </ul>
          </div>
          <div className="space-y-6">
            <ul className="space-y-3 josefin-sans text-gray-600 font-medium text-lg">
              <li className="hover:text-purple-500 cursor-pointer transition-colors sour-gummy">Pencils & Erasers</li>
              <li className="hover:text-purple-500 cursor-pointer transition-colors sour-gummy">Pens & Fine Art</li>
              <li className="hover:text-purple-500 cursor-pointer transition-colors sour-gummy">Office Supplies</li>
              <li className="hover:text-purple-500 cursor-pointer transition-colors sour-gummy">Craft & Gifting</li>
            </ul>
          </div>
        </div>

        {/* Address and Socials */}
        <div className="w-full flex flex-col md:flex-row items-center justify-around gap-10 border-t border-gray-100">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="w-[4.5vw] h-[4.5vw] cursor-pointer" onClick={() => navigate('/')}>
              <img src={domsLogo} className="w-full h-full object-contain" />
            </div>
            <p className="max-w-md sour-gummy text-gray-500 leading-relaxed text-md">
              Plot No. 117, G.I.D.C., 52 Hector Expansion Area, Umbergaon – 396171, Dist. Valsad, Gujarat, India
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pr-[6vw]">
            {socialLinks.map((social) => (
              <div
                key={social.id}
                className={`w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer transition-all duration-300 text-gray-800 hover:text-white hover:border-transparent ${social.color} hover:scale-110`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.icon} />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center text-[10px] text-gray-300 josefin-sans uppercase tracking-[3px]">
          © {new Date().getFullYear()} DOMS Industries Ltd. All rights reserved.
        </div>
      </div>

    </section>
  );
};

export default Footer;
