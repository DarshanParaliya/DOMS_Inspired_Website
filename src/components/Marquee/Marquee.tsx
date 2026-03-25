
const Marquee = () => {
  const sentence = "EVERY AMBITION NEEDS PREPARATION • DOMS PREMIUM STATIONERY • SHARPEN YOUR CREATIVITY • ";
  const repeatedText = Array(10).fill(sentence).join("");

  return (
    <div className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500  py-4 overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-white text-[1.5rem] font-[900] uppercase tracking-[0.4rem] pr-10">
          {repeatedText}
        </span>
        <span className="text-white text-[1.5rem] font-[900] uppercase tracking-[0.4rem] pr-10">
          {repeatedText}
        </span>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
