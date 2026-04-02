import { useEffect, useState } from "react";

const MARQUEE_SENTENCE =
  "EVERY AMBITION NEEDS PREPARATION • DOMS PREMIUM STATIONERY • SHARPEN YOUR CREATIVITY • ";

const Marquee = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      // 🔥 Perfect scroll sync
      setOffset((prev) => prev - delta);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-4 overflow-hidden select-none">
      <div
        className="flex whitespace-nowrap"
        style={{ transform: `translateX(${offset}px)` }}
      >
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