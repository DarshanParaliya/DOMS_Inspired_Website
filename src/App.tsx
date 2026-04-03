import { useState, useEffect, lazy, Suspense } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Routes, Route, useLocation } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import ProductCatalog from './components/ProductCatalogRefactored/ProductCatalog';
import Marquee from './components/Marquee/Marquee';
import CommunitySection from './components/CommunitySection/CommunitySection';
import BrandJourney from './components/BrandJourney/BrandJourney';
import ProductIntro from './components/ProductCatalogRefactored/ProductIntro';
import Footer from './components/Footer/Footer';
import CursorTrail from './components/CursorTrail/CursorTrail';

// Lazy-loaded menu pages — only fetched when the user navigates to those routes
const Blogs = lazy(() => import('./components/menu/Blogs'));
const Events = lazy(() => import('./components/menu/Events'));
const AboutUs = lazy(() => import('./components/menu/AboutUs'));
const Profile = lazy(() => import('./components/menu/Profile'));
const ProductDetails = lazy(() => import('./components/ProductDetails/ProductDetails'));

// Guard against double-registration (e.g. React StrictMode double-mount) — gsap.registerPlugin is idempotent
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  // Scroll to anchor on hash change or route transition
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
    ScrollTrigger.refresh();
  }, [location.pathname, location.hash]);

  // Unlock scroll after loader finishes and do a single deferred refresh
  useEffect(() => {
    if (loaded) {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowY = 'auto';
      document.documentElement.style.overflowX = 'hidden';

      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [loaded]);

  return (
    <ReactLenis root options={{ duration: 1.2, smoothWheel: true }}>
      <div className="w-full min-h-screen">
        <CursorTrail />
        <Navbar />
        <Loader setLoaded={setLoaded} />

        <Routes>
          {/* Home Route containing all original sections */}
          <Route path="/" element={<Home loaded={loaded} />} />
          <Route path="/products-grid" element={<Home loaded={loaded} scrollToProducts={true} />} />

          {/* Lazy-loaded page routes — each wrapped in Suspense to satisfy React Router children constraints */}
          <Route path="/blogs" element={<Suspense fallback={<LoadingFallback />}><Blogs /></Suspense>} />
          <Route path="/events" element={<Suspense fallback={<LoadingFallback />}><Events /></Suspense>} />
          <Route path="/about-us" element={<Suspense fallback={<LoadingFallback />}><AboutUs /></Suspense>} />
          <Route path="/profile" element={<Suspense fallback={<LoadingFallback />}><Profile /></Suspense>} />
          <Route path="/product/:id" element={<Suspense fallback={<LoadingFallback />}><ProductDetails /></Suspense>} />
        </Routes>
      </div>
    </ReactLenis>
  );
};

// Refactored Home component to support direct section navigation via route
const Home = ({ loaded, scrollToProducts = false }: { loaded: boolean; scrollToProducts?: boolean }) => {
  useEffect(() => {
    if (scrollToProducts && loaded) {
      const element = document.getElementById('products-grid');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [loaded, scrollToProducts]);

  return (
    <div className="relative w-full overflow-x-hidden bg-transparent">
      <section className="relative w-full h-screen bg-transparent">
        <Hero isLoaded={loaded} />
      </section>

      <Marquee />

      <section className={`relative w-full bg-transparent ${loaded ? 'visible' : 'invisible'}`}>
        <ProductCatalog />
      </section>

      <section className={`relative w-full bg-transparent ${loaded ? 'visible' : 'invisible'}`}>
        <ProductIntro />
      </section>

      <section className={`relative w-full ${loaded ? 'visible' : 'invisible'}`}>
        <CommunitySection />
      </section>

      <section className={`relative w-full ${loaded ? 'visible' : 'invisible'}`}>
        <BrandJourney />
      </section>

      <Footer />
    </div>
  );
};

// Simple internal fallback to avoid extra imports
const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center bg-[#f5f4f0] text-gray-400 josefin-sans tracking-widest uppercase">
    Loading...
  </div>
);

export default App;