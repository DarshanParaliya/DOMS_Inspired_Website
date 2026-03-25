
const Social = () => {
  return (
    <section className="w-full py-20 bg-white overflow-hidden " id="social">
      <div className="w-[1300px] mx-auto px-10">
        <h1 className="relative z-10 text-[2.5rem] font-[500] text-[#111] pb-[20px] border-b border-gray-300 font-roboto-condensed tracking-tight uppercase text-center md:text-left">Follow our Socials links</h1>
        <div className="flex items-center justify-between">

        {/* Left Side: Large Image */}
        <div className="w-[30%] h-[600px] flex justify-center items-center pt-10">
          <div className="w-full h-full rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="/assets/images/social3.png"
              alt="Social World"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right Side: Content and Icons */}
        <div className="w-[55%] flex flex-col items-start gap-12">

          <p className="text-gray-500 text-lg font-['Outfit'] leading-relaxed max-w-[600px]">
            Join a community of over 2 million artists and creative thinkers. Share your work with #DOMSCreations.
          </p>

          <div className="flex gap-20">
            {/* Instagram */}
            <div className="group cursor-pointer">
              <div className="w-[200px] h-[200px] rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:shadow-2xl group-hover:-translate-y-2">
                <img src="/assets/images/social1.png" alt="Instagram" className="w-[70%] h-[70%] object-contain" />
              </div>
            </div>

            {/* YouTube */}
            <div className="group cursor-pointer">
              <div className="w-[200px] h-[200px]  rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:shadow-2xl group-hover:-translate-y-2">
                <img src="/assets/images/social2.png" alt="YouTube" className="w-[70%] h-[70%] object-contain" />
              </div>
            </div>
          </div>

          <div className="w-full pt-6 pr-12 border-t border-gray-100 flex items-center justify-between">
            <div className="flex gap-3">
              <div className="w-4 h-4 rounded bg-[#ff6d79]"></div>
              <div className="w-4 h-4 rounded bg-[#ff9e5e]"></div>
              <div className="w-4 h-4 rounded bg-[#4e54a1]"></div>
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              © 2026 DOMS INDUSTRIES
            </span>
          </div>

        </div>
      </div>
    </div>
    </section>
  );
};

export default Social;
