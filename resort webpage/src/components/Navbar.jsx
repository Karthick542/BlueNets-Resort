import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

// Menu items representing sections of the home page
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
  
  const navigate = useNavigate();
  const location = useLocation();

  // Control navbar opacity and style shifts during scroll actions
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Triggers redirection or smooth scrolling depending on current route.
   */
  const handleNavClick = (event, href) => {
    setIsOpen(false);
    
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        // Redirection required first, followed by scroll action
        event.preventDefault();
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      } else {
        // Standard smooth scroll inside same page
        event.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  /**
   * Action when clicking the branding logo
   */
  const handleLogoClick = (event) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      event.preventDefault();
      navigate('/');
    } else {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      layout
      className={`navbar-resort ${isSticky ? 'navbar-sticky' : 'navbar-initial'}`}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`container-resort navbar-inner-container ${isSticky ? 'inner-sticky' : 'inner-initial'}`}>
        
        {/* Logo and Branding Link */}
        <motion.div 
          layout 
          className="nav-branding-section"
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#home" onClick={handleLogoClick} className="nav-logo-anchor">
            <Logo size={isSticky ? 64 : 150} />
          </a>
        </motion.div>

        {/* Navigation links (Desktop Viewports) */}
        <motion.ul 
          layout 
          className="nav-menu-links"
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                onClick={(event) => handleNavClick(event, item.href)}
                className={`nav-link-resort-new ${location.pathname === '/' && window.location.hash === item.href ? 'active-nav-link' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Sticky Action Buttons */}
        <motion.div 
          layout 
          className="nav-actions-section"
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {isSticky && (
            <div className="nav-actions-container">
              <button 
                onClick={() => { setIsOpen(false); navigate('/enquiry'); }} 
                className="btn-nav-secondary"
                style={{ border: 'none', cursor: 'pointer' }}
              >
                Enquiry Now
              </button>
              <button 
                onClick={() => { setIsOpen(false); navigate('/booking'); }} 
                className="btn-nav-primary"
                style={{ border: 'none', cursor: 'pointer' }}
              >
                Book Now
              </button>
            </div>
          )}
        </motion.div>

        {/* Hamburger Mobile Toggle Button */}
        <button 
          className="navbar-toggle-btn" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={26} className="text-white" /> : <Menu size={26} className="text-white" />}
        </button>
      </div>

      {/* Navigation panel (Mobile Viewports) */}
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
                    onClick={(event) => handleNavClick(event, item.href)}
                    className="mobile-nav-link text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mobile-menu-actions" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
                <button 
                  onClick={() => { setIsOpen(false); navigate('/enquiry'); }} 
                  className="btn-nav-secondary text-center w-100"
                  style={{ border: 'none', cursor: 'pointer', padding: '0.75rem 0' }}
                >
                  Enquiry Now
                </button>
                <button 
                  onClick={() => { setIsOpen(false); navigate('/booking'); }} 
                  className="btn-nav-primary text-center w-100"
                  style={{ border: 'none', cursor: 'pointer', padding: '0.75rem 0' }}
                >
                  Book Now
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
