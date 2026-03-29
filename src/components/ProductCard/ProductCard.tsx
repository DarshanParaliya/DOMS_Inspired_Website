
import { forwardRef } from 'react';

interface ProductCardProps {
  id: string | number;
  imageUrl: string;
  categoryName: string;
  colorSwatches: { color: string }[];
  imageBgColor?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isVisible?: boolean; // Controls the reveal state
}

const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(({
  id,
  imageUrl,
  categoryName,
  colorSwatches,
  imageBgColor = '#E3F2FD',
  onMouseEnter,
  onMouseLeave,
  isVisible = false
}, ref) => {
  const filterId = `textured-mask-${id}`;

  // Use a more intense grain for the "textured" feel
  const baseFrequency = 0.8 + (Math.random() * 0.2); // Unique-ish subtle variation per mount or id
  const seed = typeof id === 'number' ? id : parseInt(id) || 1;

  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="bg-white overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 w-80 h-[400px] group cursor-pointer border-10 border-white flex flex-col relative mx-auto"
    >
      {/* Intricate SVG Filter for the Mask */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true" style={{ position: 'absolute' }}>
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          {/* Complex Grain Texture */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency.toString()}
            numOctaves="6"
            seed={seed}
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 0 
                    0 0 0 0 0 
                    0 0 0 0 0 
                    15 0 0 0 -7"
            result="mask"
          />
          {/* Tinting the noise with the theme color */}
          <feFlood floodColor={imageBgColor} result="color" />
          <feComposite in="color" in2="mask" operator="in" />
        </filter>
      </svg>

      {/* Image Container */}
      <div
        className="p-4 flex items-center justify-center aspect-square relative overflow-hidden"
        style={{ backgroundColor: imageBgColor }}
      >
        {/* The Actual Product Image (hidden behind mask initially) */}
        <img
          src={imageUrl}
          alt={categoryName}
          className="w-32 h-32 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-1000 group-hover:scale-110 group-hover:rotate-[2deg] relative z-0"
          style={{
            filter: isVisible ? 'blur(0px)' : 'blur(20px)',
            transform: isVisible ? 'scale(1)' : 'scale(0.8)',
          }}
        />

        {/* Complex Mask Overlay Layer */}
        <div
          className="absolute inset-0 z-10 transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)]"
          style={{
            filter: `url(#${filterId})`,
            backgroundColor: imageBgColor,
            // Diagonal Reveal logic - Wipes diagonally from bottom-left to top-right
            clipPath: isVisible
              ? 'polygon(100% 0, 100% 0, 100% 150%, 150% 100%)'
              : 'polygon(-50% 0, 150% 0, 150% 150%, -50% 150%)',
            opacity: isVisible ? 0 : 1,
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Bottom Info Section - Footer remains sharp and unchanged */}
      <div className="p-3 px-4 flex justify-between items-center bg-white relative z-20 border-t border-gray-50 flex-grow">
        <div className="flex items-center gap-2">
          <h3 className="text-[14px] font-[900] text-[#111] uppercase tracking-widest font-roboto-condensed">
            {categoryName}
          </h3>
        </div>

        {/* Color Swatches */}
        <div className="flex gap-1">
          {colorSwatches.map((swatch, index) => (
            <div
              key={index}
              className="w-[10px] h-[10px] rounded-[1px] shadow-sm transform hover:scale-110 transition-transform"
              style={{ backgroundColor: swatch.color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;


