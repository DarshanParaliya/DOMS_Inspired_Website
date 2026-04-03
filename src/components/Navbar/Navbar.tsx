import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import domsLogo from '../../assets/images/doms_logo2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Blogs', link: '/blogs' },
    { name: 'Events', link: '/events' },
    { name: 'AboutUs', link: '/about-us' },
    { name: 'Profile', link: '/profile' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleNavigation = (link: string) => {
    navigate(link);
    setIsOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-[1000] flex justify-between items-center pt-4 pb-8 px-4 md:px-14 bg-transparent">
      {/* Brand Logo */}
      <img
        src={domsLogo}
        alt="DOMS Logo"
        className="h-[70px] mt-2 pt-2 cursor-pointer hover:opacity-85 transition-opacity"
        onClick={() => navigate('/')}
      />

      <div ref={menuRef} className="relative">
        {/* Menu Toggle Trigger */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer transition-all duration-500 hover:rotate-180 pr-[5vw] flex items-center justify-center"
        >
          <i className={`${isOpen ? 'ri-close-line' : 'ri-align-justify'} text-[42px] text-[#111]`}></i>
        </div>

        {/* Dropdown Menu Container */}
        <div
          className={`absolute top-[70px] right-[5vw] bg-white/95 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.15)] rounded-[1.5rem] p-6 min-w-[240px] border border-white/60 transition-all duration-500 ease-in-out origin-top-right
            ${isOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-90 -translate-y-4 invisible'}
          `}
        >
          <ul className="flex flex-col gap-2 m-0 p-0">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className="group relative list-none cursor-pointer"
                onClick={() => handleNavigation(item.link)}
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-green-500 group-hover:w-4 transition-all duration-300" />
                <span
                  className="block text-[1.3rem] font-bold text-gray-800 sour-gummy tracking-wide py-3 px-6 rounded-xl hover:bg-gray-50 hover:text-green-600 transition-all duration-300 hover:pl-8 no-underline uppercase"
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
