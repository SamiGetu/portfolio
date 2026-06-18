import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full p-4 md:p-6 flex justify-between items-center z-[60] mix-blend-difference text-[#ffffff] pointer-events-none">
        <div className="font-headline text-2xl tracking-widest pointer-events-auto">SG.</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium uppercase pointer-events-auto items-center">
          <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
          <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
          <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
          <li>
            <button 
              onClick={() => document.documentElement.classList.toggle('dark')}
              className="ml-4 w-8 h-8 rounded-full border border-[#f5f4f0] flex items-center justify-center hover:bg-[#f5f4f0] hover:text-[#0a0a0a] transition-colors"
              aria-label="Toggle Theme"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-end w-8 h-8 space-y-[5px] pointer-events-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-full h-[2px] bg-[#f5f4f0] transition-all duration-300"
          ></motion.span>
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-3/4 h-[2px] bg-[#f5f4f0] transition-all duration-300"
          ></motion.span>
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -7, width: '100%' } : { rotate: 0, y: 0, width: '50%' }}
            className="block h-[2px] bg-[#f5f4f0] transition-all duration-300"
          ></motion.span>
        </button>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] bg-[#0a0a0a] text-[#f5f4f0] flex flex-col justify-center px-6 md:px-12 border-b-8 border-[#f5f4f0]"
          >
            <div className="border-b border-[#f5f4f0]/30 mb-8 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Navigation / Index</span>
            </div>
            
            <ul className="flex flex-col space-y-6">
              {['About', 'Experience', 'Projects', 'Contact'].map((item, i) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setIsOpen(false)}
                    className="text-6xl font-headline uppercase hover:text-accent transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            <div className="absolute bottom-8 left-6 right-6 border-t border-[#f5f4f0]/30 pt-4 flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <span>Samuel Getachew</span>
              <span>Portfolio Edition</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
