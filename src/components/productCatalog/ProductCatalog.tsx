
import { useRef, useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

import img1 from '../../assets/images/structure_img1.png';
import img2 from '../../assets/images/structure_img2.png';
import img3 from '../../assets/images/structure_img3.png';
import img4 from '../../assets/images/structure_img4.png';
import img5 from '../../assets/images/structure_img5.png';
import img6 from '../../assets/images/structure_img6.png';
import img7 from '../../assets/images/structure_img7.png';
import img8 from '../../assets/images/structure_img8.png';

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
    image: img1,
    bgColor: '#ff6d79ff', // Premium Light Cyan
    swatches: [{ color: '#00D1FF' }, { color: '#85E9FF' }, { color: '#b9273fff' }],
  },
  {
    id: 2,
    category: 'Erasers',
    image: img2,
    bgColor: '#D4C9E8', // Premium Soft Purple
    swatches: [{ color: '#9179C4' }, { color: '#B8A8D8' }, { color: '#E5DFF0' }],
  },
  {
    id: 3,
    category: 'Geometry Box',
    image: img3,
    bgColor: '#FCD5B5', // Premium Peach
    swatches: [{ color: '#FF9E5E' }, { color: '#FFB88C' }, { color: '#FFE1CC' }],
  },
  {
    id: 4,
    category: 'Marker pen',
    image: img4,
    bgColor: '#9fa19fff', // Premium Soft Green
    swatches: [{ color: '#70C06A' }, { color: '#9ED39A' }, { color: '#DAF0D8' }],
  },
  {
    id: 5,
    category: 'Gifts',
    image: img5,
    bgColor: '#ebfd99ff', // Premium Baby Blue
    swatches: [{ color: '#5A9BD5' }, { color: '#8EBBDF' }, { color: '#D6E8F7' }],
  },
  {
    id: 6,
    category: 'Pens',
    image: img6,
    bgColor: '#b7fad0ff', // Premium Periwinkle/Navy Tint
    swatches: [{ color: '#4E54A1' }, { color: '#767BB7' }, { color: '#CCD0E6' }],
  },
  {
    id: 7,
    category: 'Colouring',
    image: img7,
    bgColor: '#F4B8D8', // Premium Soft Pink
    swatches: [{ color: '#D85A9B' }, { color: '#E58EBB' }, { color: '#F7D6E8' }],
  },
  {
    id: 8,
    category: 'Books',
    image: img8,
    bgColor: '#f5a07fff', // Premium Soft Teal
    swatches: [{ color: '#56B997' }, { color: '#89D1B9' }, { color: '#D4F0E6' }],
  },
];

const ProductCatalog = () => {
  const containerRef = useRef<HTMLElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);
  const [sectionBg, setSectionBg] = useState('transparent');
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
      className="min-h-screen w-full pt-[70px] font-['Outfit'] relative overflow-hidden transition-colors duration-700 ease-in-out bg-transparent"
      style={{ backgroundColor: sectionBg }}
      id="products-grid"
    >
      <div className="relative z-10 w-[80vw] mx-auto flex flex-col justify-left items-left">
        <h1 className='text-[2.5vw] orbitron text-sky-500  uppercase tracking-normal pl-[2vh] pb-[5vh]'>PRODUCTS</h1>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-x-16 gap-y-10 pb-20">
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
              onMouseLeave={() => setSectionBg('transparent')}
            />
          ))}

          {/* Bottom Row Wrapper for Observation */}
          <div ref={bottomRowRef} className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-4">
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
                onMouseLeave={() => setSectionBg('transparent')}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
