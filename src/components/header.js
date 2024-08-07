// Header.js
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '#trending-events' },
    { name: 'Features', path: '#features' },
    { name: 'FAQs', path: '#faq' },
    { name: 'Contact Us', path: '#footer' },
    { name: 'Organisers', path: '/organisers' }
  ];

  const handleLinkClick = (path) => {
    if (path.startsWith('#') && path !== '#') {
      const targetElement = document.querySelector(path);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`flex items-center justify-between p-4 lg:px-40 ${isSticky ? 'fixed top-0 left-0 right-0 bg-white shadow-md z-50' : ''}`}>
      <div className="header__logo">
        <Link to="/" className="text-xl font-bold">
          <p>Tango Africa</p>
        </Link>
      </div>

      <div className={`header__nav fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:w-auto md:bg-transparent md:shadow-none md:h-auto`}>
        <nav className="flex flex-col p-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:p-0">
          {navItems.map((item, index) => (
            item.name === 'Organisers' && location.pathname === '/organisers' ? (
              <a
                key={index}
                href="https://app.tango.co.zw/" 
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice
                className="bg-[#147481] text-white px-4 py-2 rounded hover:bg-[#106370] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            ) : (
              <NavLink 
                key={index} 
                to={item.path}
                className={({ isActive }) => 
                  `cursor-pointer ${location.pathname === item.path || (item.path.startsWith('#') && location.hash === item.path) ? 'text-[#147481] font-bold' : 'hover:text-blue-600'}`
                }
                onClick={() => {
                  if (item.name !== 'Home' && item.name !== 'Organisers') {
                    handleLinkClick(item.path);
                  } else {
                    setIsMenuOpen(false);
                  }
                }}
              >
                {item.name}
              </NavLink>
            )
          ))}
        </nav>
      </div>

      <div className="header__bars md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg 
          className="w-6 h-6"
          stroke="currentColor" 
          fill="currentColor" 
          strokeWidth="0" 
          viewBox="0 0 448 512" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;