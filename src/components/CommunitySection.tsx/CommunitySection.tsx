
const CommunitySection = () => {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-b from-gray-300 via-[white] to-transparent" id="social">

      <div className="w-[78vw] mx-auto pt-[4vw]">
        <img src="/assets/images/community1.png" alt="Social Heading" className="w-[40vw] h-full object-cover" />
        <div className="flex items-center justify-between">

          {/* Left Side: Large Image */}
          <div className="w-[30%] h-[650px] flex justify-center items-center pt-14 pr-14 mr-14 pl-10">
            <div className="w-full h-full rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/assets/images/social3.png"
                alt="Social World"
                className="w-full h-full object-contain cursor-pointer drop-shadow-[-5px_5px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>

          {/* Right Side: Content and Icons */}
          <div className="w-[60%] flex flex-col items-start gap-12">

            <p className="text-gray-700 text-[1.2vw] sour-gummy font-['Outfit'] leading-relaxed max-w-[900px]">
              Join a community of over 2 million artists and creative thinkers. Share your work with #DOMSCreations.
            </p>

            <div className="flex gap-24">
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

              {/* Facebook */}
              <div className="group cursor-pointer">
                <div className="w-[200px] h-[200px]  rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:shadow-2xl group-hover:-translate-y-2">
                  <img src="/assets/images/social4.png" alt="Facebook" className="w-[50%] h-[50%] object-contain" />
                </div>
              </div>
            </div>

            <div className="w-full pt-6 pr-12 border-t border-gray-800 flex items-center justify-between">
              <div className="flex gap-3">
                <div className="w-4 h-4 rounded bg-[#ff6d79]"></div>
                <div className="w-4 h-4 rounded bg-[#ff9e5e]"></div>
                <div className="w-4 h-4 rounded bg-[#4e54a1]"></div>
              </div>
              <span className="text-[10px] font-bold text-black uppercase tracking-widest">
                © 2026 DOMS INDUSTRIES
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
