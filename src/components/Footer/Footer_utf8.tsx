import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#e0f0ff] flex items-center justify-center py-20 px-4 md:px-10 overflow-hidden ">
      {/* Cartoonish background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-2xl animate-bounce duration-[3s]" />

             {/* Polaroid Image */}
            <div className="w-[14vw] h-[17vw] overflow-hidden bg-gray-50 flex items-center justify-center border-6 border-gray-300 absolute top-0 left-0 mr-[5vw] mt-[5vw] z-10 rotate-[15deg] left-60 top-[-0.5%]">
              <img
                src="/assets/images/footer1.png"
                alt="Creativity takes courage"
                className="w-full h-full object-cover"
              />
            </div>

      <div className="relative w-full max-w-7xl bg-white py-6 pl-20 pr-10 md:py-10 md:pl-20 md:pr-10 flex flex-col items-center border-4 border-green-500">
        {/* Top Section:Email */}
        <div className="w-full flex flex-col md:flex-row items-center gap-12 relative">

          {/* Email Subscription Section */}
          <div className="flex-1 w-full space-y-8">
            <div className="pl-[10vw] relative flex items-center w-full">

              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-[65%] bg-transparent border-b-2 border-gray-200 py-4 px-2 outline-none focus:border-purple-400 transition-colors josefin-sans text-xl placeholder:text-gray-300"
                />
                {/* Decorative brush stroke under the input */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '65%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute bottom-[-2px] left-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 rounded-full"
                />
              </div>
<div className="relative inline-block group top-5 right-50">
  {/* 1. Yeh piche wala dabba hai (The Offset Background) */}
  <div className="absolute inset-0 translate-x-[-10px] translate-y-[-8px]  border-2 border-black z-100"></div>

  {/* 2. Yeh upar wala dabba hai (The Main Button/Box) */}
  <button className="relative z-10 px-8 py-4 bg-yellow-300 uppercase tracking-wider z-0 text-black font-bold hover:translate-x-1 hover:translate-y-1 transition-transform">
    REGISTER NOW
  </button>
</div>
            </div>

            {/* Animated brush trail (Visual flair from screenshot) */}
            <div className="hidden md:block absolute top-[44%] right-[45%] pointer-events-none opacity-40 translate-x-[50%]">
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
        <div className="w-full grid grid-cols-2 md:grid-cols-4 pl-[10vw] pt-[5vw] pb-5 gap-12 md:gap-8 border-t border-gray-50">
          <div className="space-y-6">
            <h4 className="titan-one-regular text-[#111] uppercase text-sm tracking-widest border-b border-gray-100 pb-2 inline-block">ABOUT US</h4>
            <ul className="space-y-3 josefin-sans text-gray-600 font-medium">
              <li className="hover:text-purple-500 cursor-pointer transition-colors">Our Company</li>
              <li className="hover:text-purple-500 cursor-pointer transition-colors">History</li>
               <li className="hover:text-purple-500 cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-purple-500 cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="titan-one-regular text-[#111] uppercase text-sm tracking-widest border-b border-gray-100 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 josefin-sans text-gray-600 font-medium">
              <li className="hover:text-purple-500 cursor-pointer transition-colors">Terms of Use</li>
              <li className="hover:text-purple-500 cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="titan-one-regular text-[#111] uppercase text-sm tracking-widest border-b border-gray-100 pb-2 inline-block">All Products</h4>
            <ul className="space-y-3 josefin-sans text-gray-600 font-medium">
              <li className="hover:text-purple-500 cursor-pointer transition-colors">Pencils & Erasers</li>
              <li className="hover:text-purple-500 cursor-pointer transition-colors">Pens & Fine Art</li>
              <li className="hover:text-purple-500 cursor-pointer transition-colors">Office Supplies</li>
              <li className="hover:text-purple-500 cursor-pointer transition-colors">Craft & Gifting</li>
            </ul>
          </div>
        </div>

        {/* Address and Socials */}
        <div className="w-full flex flex-col md:flex-row items-center justify-around gap-10 pt-10 border-t border-gray-100">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="w-[4vw] h-[4vw]">

              <img src="/doms_logo2.png" className="w-full h-full object-contain"/>
            </div>  
            <p className="max-w-md josefin-sans text-gray-500 leading-relaxed text-sm">
              Plot No. 117, G.I.D.C., 52 Hector Expansion Area, Umbergaon â€“ 396171, Dist. Valsad, Gujarat, India
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { id: 'youtube', icon: 'M10 15 L10 9 L15 12 Z' },
              { id: 'facebook', icon: 'M18 2 L15 2 C 12.79 2 11 3.79 11 6 L11 9 L8 9 L8 13 L11 13 L11 22 L15 22 L15 13 L18 13 L19 9 L15 9 L15 6 C 15 5.45 15.45 5 16 5 L19 5 L19 2 Z' },
              { id: 'instagram', icon: 'M12 2 C 9.27 2 8.91 2 7.83 2.05 C 4.75 2.19 3.01 3.93 2.86 7.01 C 2.82 8.09 2.82 8.45 2.82 11.18 C 2.82 13.91 2.82 14.27 2.86 15.35 C 3.01 18.42 4.75 20.17 7.83 20.3 C 8.91 20.35 9.27 20.35 12 20.35 C 14.73 20.35 15.09 20.35 16.17 20.3 C 19.25 20.17 20.99 18.43 21.14 15.35 C 21.18 14.27 21.18 13.91 21.18 11.18 C 21.18 8.45 21.18 8.09 21.14 7.01 C 20.99 3.93 19.25 2.19 16.17 2.05 C 15.09 2 14.73 2 12 2 M 12 6.5 C 14.76 6.5 17 8.74 17 11.5 C 17 14.26 14.76 16.5 12 16.5 C 9.24 16.5 7 14.26 7 11.5 C 7 8.74 9.24 6.5 12 6.5 M 17.5 5 C 18.33 5 19 5.67 19 6.5 C 19 7.33 18.33 8 17.5 8 C 16.67 8 16 7.33 16 6.5 C 16 5.67 16.67 5 17.5 5' },
              { id: 'twitter', icon: 'M23 3 A 10.9 10.9 0 0 1 19.88 4.61 A 4.41 4.41 0 0 0 22.8 1.63 A 8.86 8.86 0 0 1 20 2.69 A 4.41 4.41 0 0 0 12.82 6.58 A 12.51 12.51 0 0 1 3.78 2 A 4.41 4.41 0 0 0 5.14 7.88 A 4.4 4.4 0 0 1 3.14 7.33 L 3.14 7.38 A 4.41 4.41 0 0 0 6.67 11.71 A 4.41 4.41 0 0 1 4.68 11.78 A 4.41 4.41 0 0 0 8.79 14.84 A 8.86 8.86 0 0 1 1 17.53 A 12.48 12.48 0 0 0 7.76 19.5 A 12.45 12.45 0 0 0 20.29 7 A 8.9 8.9 0 0 0 22.14 4.74 A 8.74 8.74 0 0 1 19.66 5.43 A 4.43 4.43 0 0 0 21.56 3.08 A 8.86 8.86 0 0 1 23 3 Z' },
            ].map((social) => (
              <motion.div
                key={social.id}
                whileHover={{ scale: 1.1, backgroundColor: '#111', color: '#fff' }}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer transition-all duration-300 text-gray-800"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d={social.icon} />
                </svg>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-16 text-center text-[10px] text-gray-300 josefin-sans uppercase tracking-[3px]">
          Â© {new Date().getFullYear()} DOMS Industries Ltd. All rights reserved.
        </div>

      </div>

      {/* Background blobs for more 'cartoonish' feel */}
      <div className="absolute top-[10%] right-[5%] w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-[10%] left-[5%] w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
    </section>
  );
};

export default Footer;
