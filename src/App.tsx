import { useState, useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Loader from './components/Loader/Loader';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Structure from './components/Structure/Structure';
import Marquee from './components/Marquee/Marquee';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loaded, setLoaded] = useState(false);

  // Unlock scroll after loader finishes
  useEffect(() => {
    if (loaded) {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowY = 'auto';
      document.documentElement.style.overflowX = 'hidden';
      
      // Defer refresh to allow animations to start smoothly
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [loaded]);

  return (
    /*
      ReactLenis wraps the page for smooth inertia scroll.
      It does NOT inject a custom scrollbar — the browser's
      native scrollbar stays as the only one.
    */
    <ReactLenis root options={{ duration: 1.2, smoothWheel: true }}>
      <div className="w-full min-h-screen">
        <Navbar />
        <Loader setLoaded={setLoaded} />

        <div className="relative w-full overflow-x-hidden">
          <section className="relative w-full h-screen">
            <Hero isLoaded={loaded} />
          </section>

          <Marquee />

          <section className={`relative w-full ${loaded ? 'visible' : 'invisible'}`}>
            <Structure />
          </section>
        </div>
      </div>
    </ReactLenis>
  );
};

export default App;