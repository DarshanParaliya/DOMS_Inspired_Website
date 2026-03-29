import { useRef } from 'react';

const VideoBox = ({ src, title, poster }: { src: string; title: string; poster?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="flex flex-col items-center gap-6 group">
      <div
        className="w-[24vw] h-[63vh] cursor-pointer  overflow-hidden shadow-2xl bg-[#f0f0f0] border-[0.3vw] border-white transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:shadow-[0_2vw_5vw_rgba(0,0,0,0.3)] relative"
        onMouseEnter={() => videoRef.current?.play()}
        onMouseLeave={() => {
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <h3 className="cursor-pointer text-[1.8vw] josefin-sans text-[#111] uppercase tracking-tight group-hover:text-red-500 transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
};

const ProductIntro = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-transparent">

      {/* Background Decorative Elements */}

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Section Heading */}
        <div className="w-[80vw] justify-center mb-[4vh] pb-8 flex items-center border-b border-gray-200 gap-6">
          <h2 className="text-[2.5vw] orbitron text-sky-500 uppercase tracking-normal">
            NEW PRODUCT LAUNCH
          </h2>
        </div>

        {/* Video Boxes Grid */}
        <div className="w-[90vw] flex items-center justify-center pt-4 gap-[3vw]">
          <VideoBox
            src="/videos/inxon.mp4"
            title="Inxon"
          />
          <VideoBox
            src="/videos/Refilable-Colour-Cake-Compressed.mp4"
            title="Refillable Colour Cake"
            poster="/assets/images/hero_image1.jpg"
          />
          <VideoBox
            src="/videos/Zillion-compressed.mp4"
            title="Zillion"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;
