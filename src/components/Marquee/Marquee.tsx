
const MARQUEE_SENTENCE = "EVERY AMBITION NEEDS PREPARATION • DOMS PREMIUM STATIONERY • SHARPEN YOUR CREATIVITY • ";

// Keyframe defined once at module level — avoids style tag re-injection on every render
const MARQUEE_STYLE = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    display: flex;
    animation: marquee 15s linear infinite;
    will-change: transform;
  }
`;

const Marquee = () => {
  return (
    <div className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-4 overflow-hidden select-none">
      {/* style tag is a static string constant — no rebuild on re-render */}
      <style>{MARQUEE_STYLE}</style>
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Only 2 copies needed: CSS translateX(-50%) creates seamless loop */}
        <span className="text-white text-[1.5rem] font-[900] uppercase tracking-[0.4rem] pr-10 orbitron">
          {MARQUEE_SENTENCE}
        </span>
        <span className="text-white text-[1.5rem] font-[900] uppercase tracking-[0.4rem] pr-10 orbitron">
          {MARQUEE_SENTENCE}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
