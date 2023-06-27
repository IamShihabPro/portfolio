import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white font-bold text-2xl">Shihab</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                
                <a href="" className="text-white hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium">
                <Link to='Home' smooth duration={500} >Home</Link>
                </a>

                <a href="" className="text-white hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium">
                <Link to='About' smooth duration={500} >About</Link>
                </a>

                <a href="" className="text-white hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium">
                <Link to='Skill' smooth duration={500} >Skill</Link>
                </a>

                <a href="" className="text-white hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium">
                <Link to='Portfolio' smooth duration={500} >Portfolio</Link>
                </a>

                <a href="" className="text-white hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium">
                <Link to='Contact' smooth duration={500} >Contact</Link>
                </a>

                
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <a href="" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
          <Link to='Home' smooth duration={500} >Home</Link>
          </a>
          <a href="" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
          <Link to='About' smooth duration={500} >About</Link>
          </a>
          <a href="" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
          <Link to='Skill' smooth duration={500} >Skill</Link>
          </a>
          <a href="#portfolio" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
          <Link to='Portfolio' smooth duration={500} >Portfolio</Link>
          </a>
          <a href="" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
          <Link to='Contact' smooth duration={500} >Contact</Link>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
