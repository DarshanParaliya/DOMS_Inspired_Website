
import { useRef, useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

interface Product {
  id: number;
  category: string;
  image: string;
  bgColor: string;
  swatches: { color: string }[];
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    category: 'Pencil',
    image: '/assets/images/structure_img1.png',
    bgColor: '#ff6d79ff', // Premium Light Cyan
    swatches: [{ color: '#00D1FF' }, { color: '#85E9FF' }, { color: '#b9273fff' }],
  },
  {
    id: 2,
    category: 'Erasers',
    image: '/assets/images/structure_img2.png',
    bgColor: '#D4C9E8', // Premium Soft Purple
    swatches: [{ color: '#9179C4' }, { color: '#B8A8D8' }, { color: '#E5DFF0' }],
  },
  {
    id: 3,
    category: 'Geometry Box',
    image: '/assets/images/structure_img3.png',
    bgColor: '#FCD5B5', // Premium Peach
    swatches: [{ color: '#FF9E5E' }, { color: '#FFB88C' }, { color: '#FFE1CC' }],
  },
  {
    id: 4,
    category: 'Marker pen',
    image: '/assets/images/strucutr_img4.png',
    bgColor: '#9fa19fff', // Premium Soft Green
    swatches: [{ color: '#70C06A' }, { color: '#9ED39A' }, { color: '#DAF0D8' }],
  },
  {
    id: 5,
    category: 'Gifts',
    image: '/assets/images/structure_img5.png',
    bgColor: '#ebfd99ff', // Premium Baby Blue
    swatches: [{ color: '#5A9BD5' }, { color: '#8EBBDF' }, { color: '#D6E8F7' }],
  },
  {
    id: 6,
    category: 'Pens',
    image: '/assets/images/structure_img6.png',
    bgColor: '#b7fad0ff', // Premium Periwinkle/Navy Tint
    swatches: [{ color: '#4E54A1' }, { color: '#767BB7' }, { color: '#CCD0E6' }],
  },
  {
    id: 7,
    category: 'Colouring',
    image: '/assets/images/structure_img7.png',
    bgColor: '#F4B8D8', // Premium Soft Pink
    swatches: [{ color: '#D85A9B' }, { color: '#E58EBB' }, { color: '#F7D6E8' }],
  },
  {
    id: 8,
    category: 'Books',
    image: '/assets/images/structure_img8.png',
    bgColor: '#f5a07fff', // Premium Soft Teal
    swatches: [{ color: '#56B997' }, { color: '#89D1B9' }, { color: '#D4F0E6' }],
  },
];

const Structure = () => {
  const containerRef = useRef<HTMLElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);
  const [sectionBg, setSectionBg] = useState('#F8F8F8');
  const [isGridVisible, setIsGridVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsGridVisible(true);
          } else {
            setIsGridVisible(false);
          }
        });
      },
      { threshold: 0.7 }
    );

    if (bottomRowRef.current) {
      observer.observe(bottomRowRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen w-full py-[70px] font-['Outfit'] relative bg-cover bg-center bg-no-repeat overflow-hidden transition-colors duration-700 ease-in-out"
      style={{
        backgroundImage: "url('/assets/images/structure_bg.png')",
        backgroundColor: sectionBg
      }}
      id="products-grid"
    >
      <div className="max-w-[1700px] mx-auto px-10 flex flex-col justify-center items-center">
        <h2 className="text-[2.5rem] font-[500] text-[#111] mb-[60px] font-roboto-condensed tracking-tight uppercase text-center md:text-left">
          Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-10">
          {/* Top Row (First 4 cards) */}
          {PRODUCTS.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              categoryName={product.category}
              imageUrl={product.image}
              imageBgColor={product.bgColor}
              colorSwatches={product.swatches}
              isVisible={isGridVisible}
              onMouseEnter={() => setSectionBg(product.bgColor)}
              onMouseLeave={() => setSectionBg('#F8F8F8')}
            />
          ))}

          {/* Bottom Row Wrapper for Observation */}
          <div ref={bottomRowRef} className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-[-10px]">
            {PRODUCTS.slice(4, 8).map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                categoryName={product.category}
                imageUrl={product.image}
                imageBgColor={product.bgColor}
                colorSwatches={product.swatches}
                isVisible={isGridVisible}
                onMouseEnter={() => setSectionBg(product.bgColor)}
                onMouseLeave={() => setSectionBg('#F8F8F8')}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;
