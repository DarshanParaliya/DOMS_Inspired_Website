import { useEffect, useRef, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  scale: number;
  color: string;
  life: number;
}

const PETAL_COLORS = [
  '#22c55e', '#facc15', '#f97316', '#ec4899', '#6366f1', '#06b6d4', '#ef4444', '#a855f7',
];

let petalId = 0;

const CursorFX = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [petals, setPetals] = useState<Petal[]>([]);
  const [isPointer, setIsPointer] = useState(false);
  const mouse = useRef({ x: -999, y: -999 });
  const animRef = useRef<number>(0);
  const petalsRef = useRef<Petal[]>([]);

  useEffect(() => {
    // Force cursor: none on everything so no native cursor ever shows
    const styleTag = document.createElement('style');
    styleTag.id = 'cursor-none-override';
    styleTag.textContent = `*, *::before, *::after { cursor: none !important; }`;
    document.head.appendChild(styleTag);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }

      // Check if hovered element is naturally a pointer
      const target = e.target as Element;
      if (target) {
        const computed = window.getComputedStyle(target).cursor;
        // 'pointer' means it's a link/button/clickable = show hand
        setIsPointer(computed === 'pointer');
      }
    };

    const onClick = (e: MouseEvent) => {
      const burstCount = 12;
      const newPetals: Petal[] = [];

      for (let i = 0; i < burstCount; i++) {
        newPetals.push({
          id: petalId++,
          x: e.clientX,
          y: e.clientY,
          angle: (Math.PI * 2 * i) / burstCount + (Math.random() - 0.5) * 0.5,
          speed: 3 + Math.random() * 6,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 15,
          scale: 0.5 + Math.random() * 0.8,
          color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
          life: 1,
        });
      }

      petalsRef.current = [...petalsRef.current, ...newPetals];
    };

    // Animation loop to update petals
    const animate = () => {
      petalsRef.current = petalsRef.current
        .map(p => ({
          ...p,
          x: p.x + Math.cos(p.angle) * p.speed,
          y: p.y + Math.sin(p.angle) * p.speed + 1.5,
          rotation: p.rotation + p.rotationSpeed,
          speed: p.speed * 0.93,
          life: p.life - 0.025,
        }))
        .filter(p => p.life > 0);

      setPetals([...petalsRef.current]);
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);

    return () => {
      document.getElementById('cursor-none-override')?.remove();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <>
      {/* Petals layer */}
      <div className="fixed inset-0 z-[9998] pointer-events-none overflow-hidden">
        {petals.map(p => (
          <div
            key={p.id}
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              width: 18,
              height: 9,
              borderRadius: '50%',
              backgroundColor: p.color,
              opacity: p.life,
              transform: `translate(${p.x - 9}px, ${p.y - 4}px) rotate(${p.rotation}deg) scale(${p.scale})`,
              boxShadow: `0 0 4px ${p.color}`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>

      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        {isPointer ? (
          /* Hand icon when hovering clickable elements */
          <svg
            width="28"
            height="32"
            viewBox="0 0 28 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block', filter: 'drop-shadow(0 2px 6px rgba(34,197,94,0.8))' }}
          >
            {/* Palm */}
            <rect x="5" y="14" width="18" height="16" rx="4" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
            {/* Index finger */}
            <rect x="11" y="4" width="5" height="14" rx="2.5" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
            {/* Middle finger */}
            <rect x="17" y="7" width="5" height="12" rx="2.5" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
            {/* Ring finger */}
            <rect x="22" y="10" width="4" height="10" rx="2" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
            {/* Thumb */}
            <rect x="2" y="17" width="5" height="8" rx="2.5" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
            {/* Glint */}
            <path d="M13 6 L13 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
          </svg>
        ) : (
          /* Arrow icon default */
          <svg
            width="28"
            height="32"
            viewBox="0 0 28 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block', filter: 'drop-shadow(0 2px 6px rgba(34,197,94,0.7))' }}
          >
            <path
              d="M2 2 L2 26 L8 20 L13 30 L17 28 L12 18 L20 18 Z"
              fill="#22c55e"
              stroke="#15803d"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M4 4 L4 14 L8 10"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeOpacity="0.5"
            />
          </svg>
        )}
      </div>
    </>
  );
};

export default CursorFX;
