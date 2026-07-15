import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Services', href: '#services' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Packages', href: '#packages' },
  { label: 'Dining', href: '#dining' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' }
];

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky style when user scrolls past 150px
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      layout
      className={`navbar-resort ${isSticky ? 'navbar-sticky' : 'navbar-initial'}`}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`container-resort navbar-inner-container ${isSticky ? 'inner-sticky' : 'inner-initial'}`}>
        
        {/* Branding section with layout shifts */}
        <motion.div 
          layout 
          className="nav-branding-section"
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#home" className="nav-logo-anchor">
            <Logo size={isSticky ? 64 : 150} />
          </a>
        </motion.div>

        {/* Navigation Menu */}
        <motion.ul 
          layout 
          className="nav-menu-links"
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="nav-link-resort-new">
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Action buttons (Only active in sticky state) */}
        <motion.div 
          layout 
          className="nav-actions-section"
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {isSticky && (
            <div className="nav-actions-container">
              <motion.a 
                href="#contact" 
                className="btn-nav-secondary"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                Enquiry Now
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn-nav-primary"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Book Now
              </motion.a>
            </div>
          )}
        </motion.div>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggle-btn" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={26} className="text-white" /> : <Menu size={26} className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="navbar-menu-mobile glass-panel-dark"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-menu-list">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="mobile-nav-link text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mobile-menu-actions" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)} 
                  className="btn-nav-secondary text-center w-100"
                >
                  Enquiry Now
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)} 
                  className="btn-nav-primary text-center w-100"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
