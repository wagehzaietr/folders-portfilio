import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import clicksound from '/clicksound.mp3';
import pop from '/pop.ogg';
import axios from 'axios';
import { useEffect } from 'react'


function Navbar({ dark, handleClick, handleModal }) {
  const [play] = useSound(clicksound, { volume: 0.3 });
  const [playpop] = useSound(pop, { volume: 0.3 });
  


  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center w-8 h-8 object-cover">
            <Link 
              to="/" 
              className="text-2xl font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <img src="./logo1.jpg" alt="" className='w-full h-full object-cover rounded-full'/>
            </Link>
          </div>

          {/* Desktop Navigation */}

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => {
                handleClick();
                play();
              }}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? (
                <SunIcon className="w-5 h-5 text-yellow-400" />
              ) : (
                <MoonIcon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            
            <button 
              onClick={() => {
                handleModal();
                playpop();
              }}
              className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Open menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6 dark:text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;