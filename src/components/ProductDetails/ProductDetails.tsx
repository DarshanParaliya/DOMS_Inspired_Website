import { useParams, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Common assets
import img1 from '../../assets/images/structure_img1.png';
import img2 from '../../assets/images/structure_img2.png';
import img3 from '../../assets/images/structure_img3.png';
import img4 from '../../assets/images/structure_img4.png';
import img5 from '../../assets/images/structure_img5.png';
import img6 from '../../assets/images/structure_img6.png';
import img7 from '../../assets/images/structure_img7.png';
import img8 from '../../assets/images/structure_img8.png';

const PRODUCTS = [
  {
    id: 1,
    name: 'X1 Graphite Pencils',
    category: 'Pencil',
    image: img1,
    bgColor: '#ff6d79ff',
    price: '₹50.00',
    description: 'DOMS X1 Graphite Pencils are specially designed for dark and neat writing. The lead is made of high-quality graphite and clay, ensuring a smooth writing experience.',
    features: ['Super dark lead', 'Smooth & easy sharpen', 'High-quality wood', 'Break resistant lead'],
    specs: { Wood: 'Premium Cedar', Shape: 'Hexagonal', Grade: 'HB', Packs: '10 Pencils' }
  },
  {
    id: 2,
    name: 'Dust Free Erasers',
    category: 'Erasers',
    image: img2,
    bgColor: '#D4C9E8',
    price: '₹10.00',
    description: 'High-quality erasers that leave no residue. Premium soft material ensures gentle erasing without damaging the paper surface.',
    features: ['Non-toxic material', 'Extra clean finish', 'Minimal residue', 'Latex free'],
    specs: { Material: 'Synthetic Rubber', Form: 'Rectangular', Safe: 'Child Friendly' }
  },
  {
    id: 3,
    name: 'Mathematical Drawing Set',
    category: 'Geometry Box',
    image: img3,
    bgColor: '#FCD5B5',
    price: '₹120.00',
    description: 'A complete set of high-precision mathematical instruments. Ideal for school students and professionals alike.',
    features: ['High-precision tools', 'Rust-resistant metal', 'Ergonomic design', 'Tough storage case'],
    specs: { Material: 'Zinc & Plastic', Tools: '8 Instruments', Box: 'Metal Tin' }
  },
  {
    id: 4,
    name: 'Fluorescent Markers',
    category: 'Marker pen',
    image: img4,
    bgColor: '#9fa19fff',
    price: '₹25.00',
    description: 'Vibrant fluorescent markers for highlighting important text. Long-lasting ink and consistent flow.',
    features: ['Brilliant colors', 'Quick-dry ink', 'Chisel tip', 'Smudge-proof'],
    specs: { Ink: 'Water-based', Tip: '4mm Chisel', Colors: 'Assorted' }
  },
  {
    id: 5,
    name: 'Art & Hobby Gift Set',
    category: 'Gifts',
    image: img5,
    bgColor: '#ebfd99ff',
    price: '₹450.00',
    description: 'The ultimate gift set for young artists. Includes everything from pencils to crayons and modeling clay.',
    features: ['Comprehensive kit', 'Premium quality', 'Attractive packaging', 'Safe for kids'],
    specs: { Type: 'Combo Pack', Ideal: 'Birthday Gift', Contains: '12+ Items' }
  },
  {
    id: 6,
    name: 'Retractable Ball Pens',
    category: 'Pens',
    image: img6,
    bgColor: '#b7fad0ff',
    price: '₹15.00',
    description: 'Sleek and reliable ball pens for everyday writing. The advanced ink technology ensures a skip-free performance.',
    features: ['Soft grip handle', 'Fluid ink flow', 'Retractable design', 'Long writing distance'],
    specs: { Point: '0.7mm', Type: 'Retractable', Ink: 'Oil-based' }
  },
  {
    id: 7,
    name: 'Bicolor Wax Crayons',
    category: 'Colouring',
    image: img7,
    bgColor: '#F4B8D8',
    price: '₹80.00',
    description: 'Smooth wax crayons with dual-ended colors. Perfect for blending and creating beautiful artwork.',
    features: ['Dual colors', 'Rich pigment', 'Smooth laydown', 'Washable ink'],
    specs: { Length: '80mm', Type: 'Wax Based', Count: '24 Shades' }
  },
  {
    id: 8,
    name: 'Hardbound Sketchbooks',
    category: 'Books',
    image: img8,
    bgColor: '#f5a07fff',
    price: '₹150.00',
    description: 'Premium sketchbooks with high-quality acid-free paper. Designed to withstand multiple layers of graphite and colors.',
    features: ['Acid-free paper', 'Hardbound cover', 'Lay-flat binding', '140 GSM weight'],
    specs: { Size: 'A4', Sheets: '100 Pages', Texture: 'Natural Grain' }
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const product = PRODUCTS.find(p => p.id === Number(id));

  useGSAP(() => {
    if (!product) return;

    const tl = gsap.timeline();

    tl.from(imageRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })
      .from(infoRef.current?.children || [], {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5");

  }, { scope: containerRef, dependencies: [id] });

  if (!product) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <h1 className="text-2xl titan-one-regular">Product Not Found</h1>
        <button onClick={() => navigate('/')} className="ml-4 underline">Go Back</button>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full pt-32 pb-20 px-6 md:px-20 overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${product.bgColor}11 0%, #f5f4f0 100%)` }}
    >
      <button
        onClick={() => navigate('/products-grid')}
        className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-12 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK
      </button>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Dynamic Image Showcase */}
        <div ref={imageRef} className="relative group">
          <div
            className="absolute inset-0 blur-3xl opacity-20 rounded-full scale-110"
            style={{ backgroundColor: product.bgColor }}
          />
          <div className="relative bg-white/40 backdrop-blur-xl p-16 rounded-[4rem] border border-white/60 shadow-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right: Product Story & Stats */}
        <div ref={infoRef} className="flex flex-col gap-10">
          <div className="space-y-4">
            <span className="px-4 py-1 bg-white/80 rounded-full text-xs font-bold tracking-[0.3em] text-gray-400 border border-gray-100 uppercase">
              {product.category}
            </span>
            <h1 className="text-6xl md:text-7xl titan-one-regular text-[#111] uppercase tracking-tighter leading-none">
              {product.name.split(' ')[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-400">
                {product.name.split(' ').slice(1).join(' ')}
              </span>
            </h1>
            <p className="text-3xl font-black orbitron text-gray-800">
              {product.price}
            </p>
          </div>

          <p className="text-xl averia-libre-regular text-gray-600 leading-relaxed italic border-l-4 pl-6 border-black/10">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Key Features</h4>
              <ul className="space-y-3">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg josefin-sans text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-black" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Tech Specs</h4>
              <div className="space-y-3">
                {Object.entries(product.specs).map(([k, v], i) => (
                  <div key={i} className="flex justify-between border-b border-black/5 pb-2">
                    <span className="text-sm font-bold text-gray-400 uppercase">{k}</span>
                    <span className="text-sm font-black text-gray-800">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <button className="flex-1 py-5 bg-[#111] text-white rounded-2xl titan-one-regular text-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl">
              ENQUIRE NOW
            </button>
            <button className="flex-1 py-5 border-2 border-black/10 rounded-2xl titan-one-regular text-2xl hover:bg-black/5 transition-all">
              FIND NEARBY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
