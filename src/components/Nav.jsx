import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const NAVIGATION_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Events', href: '#events' },
    { label: 'Our Team', href: '#team' },
    { label: 'Gallery', href: '#gallary' },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLink = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      {/* <nav className="bg-white shadow ">
        <div className="max-w-7xl mx-auto px-2 py-3  sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <img src={logo} alt="" className="w-sm" />
              </div>
            </div>
          </div>
        </div>
      </nav> */}
      <nav className="bg-white shadow ">
        <div className="w-screen  px-2 py-3 sm:px-6 lg:px-8">
          <div className=" hidden lg:flex items-center justify-between h-16">
            <div className=" flex items-center justify-center  ">
              <div className=" flex items-center">
                <img src={logo} alt="" className="w-sm" />
              </div>
            </div>
            <div className="flex itemes-center font-light gap-5 text-neutral-600 justify-between">
              {NAVIGATION_LINKS.map((link, index) => (
                <li key={index} className="flex items-center">
                  <a
                    href={link.href}
                    className=""
                    onClick={(e) => handleLink(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <div className="bg-[#2B82FB] text-white px-4 py-2 rounded-md hover:bg-[#1a5bbf] transition-colors ">
                <a href="#">Join Us</a>
              </div>
            </div>
          </div>
          {/* Mobile */}

          <div className=" lg:hidden  flex items-center justify-between h-16">
            <div className=" flex justify-between items-center w-full ">
              <div className=" flex items-center">
                <img src={logo} alt="" className="w-[200px]" />
              </div>
              <div className="flex items-center">
                <button
                  className="focus:outline-none lg:hidden"
                  onClick={toggleMobileMenu}
                >
                  {isMobileMenuOpen ? (
                    <FaTimes className="m-2 h-6 w-5 text-neutral-800" />
                  ) : (
                    <FaBars className="m-2 h-6 w-5 text-neutral-800" />
                  )}
                </button>
              </div>
            </div>
            {isMobileMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
                <ul className="flex flex-col items-center gap-4 px-4 py-2">
                  {NAVIGATION_LINKS.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className=""
                        onClick={(e) => handleLink(e, link.href)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                  <div className="bg-[#2B82FB] text-white px-4 py-2 rounded-md hover:bg-[#1a5bbf] transition-colors ">
                    <a href="#">Join Us</a>
                  </div>
                </ul>
                {/* <ul className="gap-4 px-4 mx-auto relative text-sm flex flex-col ml-4 mt-4 backdrop-blur-md ">
                  {NAVIGATION_LINKS.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className=""
                        onClick={(e) => handleLink(e, link.href)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )} */}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
