import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import clicksound from '/clicksound.mp3';




function Navbar({ dark, handleClick, }) {
  const [play] = useSound(clicksound, { volume: 0.3 });
  


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
            
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;