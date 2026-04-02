import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import blog1 from '../../assets/images/blog1.webp';
import blog2 from '../../assets/images/blog2.webp';
import blog3 from '../../assets/images/blog3.webp';
import blog4 from '../../assets/images/blog4.webp';

const blogImages = [blog1, blog2, blog3, blog4];


const Blogs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const posts = [
    { title: "The 7 Principles of Art and Design", date: "Nov 24, 2024", desc: "Understanding balance, contrast, and movement is key to creating compelling artworks that resonate with viewers." },
    { title: "Art Educators Meet in Raigad", date: "Oct 12, 2024", desc: "Bringing together the brightest minds in art education to discuss the future of creativity in our schools." },
    { title: "Drawing Pencils: A Buying Guide", date: "Sept 15, 2024", desc: "From 2B to 8B, learn how to choose the right pencil for your sketching style and technical needs." },
    { title: "The Stationery & Write Show", date: "Aug 30, 2024", desc: "A recap of our presence at India's largest stationery exhibition and the launch of our newest products." }
  ];

  useGSAP(() => {
    gsap.from(contentRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center py-20 px-10"
      style={{
        background: 'radial-gradient(circle at 15% 15%, #bfdbfe 0%, transparent 40%), radial-gradient(circle at 85% 85%, #d8b4fe 0%, transparent 40%), #f8fafc',
      }}
    >
      {/* Decorative background noise */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />

      <div ref={contentRef} className="relative z-10 max-w-6xl w-full text-center">
        <h1 className="text-[10vw] titan-one-regular text-[#111] leading-none mb-4 uppercase tracking-tighter">
          Our <span className="text-blue-500">Blogs</span>
        </h1>
        <p className="text-[1.5vw] josefin-sans text-gray-700 tracking-wide max-w-3xl mx-auto mb-16 italic">
          Insights and inspiration from the world of creativity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {posts.map((post, i) => (
            <div key={i} className="group flex flex-col md:flex-row items-center gap-6 bg-white/50 backdrop-blur-lg p-8 rounded-[2.5rem] border border-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-[12vw] h-[12vw] min-w-[120px] min-h-[120px] bg-blue-100 rounded-[1.5rem] overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform">
                <img src={blogImages[i % blogImages.length]} className='w-full h-full object-cover p-4 opacity-70 group-hover:opacity-100 transition-opacity' alt="" />
              </div>
              <div className="text-left flex-grow">
                <span className="text-sm font-bold text-blue-500 josefin-sans uppercase tracking-[0.2vw] mb-2 block">{post.date}</span>
                <h3 className="text-3xl font-bold sour-gummy mb-3 text-[#111] group-hover:text-blue-600 transition-colors uppercase leading-none">{post.title}</h3>
                <p className="text-gray-600 averia-libre-regular leading-snug">{post.desc}</p>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full sour-gummy text-lg hover:bg-blue-700 transition-colors">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
