import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { getWhatsAppLink } from '../config';
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

// Custom WhatsApp SVG Icon Component for UI requirements
const WhatsAppIcon = ({ size = 16, className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    className={className} 
    fill="currentColor"
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.713-1.465L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 2.028 14.11 1.002 11.49 1c-5.444 0-9.866 4.372-9.87 9.802 0 1.714.452 3.39 1.312 4.869l-1.02 3.73 3.825-1.002zM17.15 14.64c-.29-.145-1.714-.848-1.979-.944-.265-.096-.458-.145-.65.145-.19.29-.739.943-.906 1.134-.167.19-.335.21-.626.066-1.393-.7-2.285-1.12-3.19-2.67-.24-.413.24-.383.687-1.272.073-.146.037-.272-.018-.381-.056-.11-.458-1.102-.627-1.512-.165-.397-.333-.343-.458-.35-.119-.007-.255-.007-.393-.007s-.36.051-.55.25c-.188.201-.72.703-.72 1.713s.735 1.986.837 2.122c.1.137 1.447 2.21 3.506 3.097.49.21.873.336 1.173.431.493.157.942.135 1.298.082.396-.059 1.714-.7 1.957-1.378.243-.679.243-1.258.17-1.378-.073-.12-.265-.19-.556-.335z"/>
  </svg>
);

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

  // The header should be sticky/fixed and show CTA buttons either if scrolled down on the Home page,
  // or on any subpages (like /booking or /enquiry) to prevent content overlaps.
  const shouldBeSticky = location.pathname !== '/' || isSticky;

  // Open WhatsApp link in a new tab for enquiries
  const handleWhatsAppEnquiry = () => {
    setIsOpen(false);
    window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.nav 
      layout
      className={`navbar-resort ${shouldBeSticky ? 'navbar-sticky' : 'navbar-initial'}`}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`container-resort navbar-inner-container ${shouldBeSticky ? 'inner-sticky' : 'inner-initial'}`}>
        
        {/* Logo and Branding Link */}
        <motion.div 
          layout 
          className="nav-branding-section"
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#home" onClick={handleLogoClick} className="nav-logo-anchor">
            <Logo size={shouldBeSticky ? 64 : 150} />
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
          {shouldBeSticky && (
            <div className="nav-actions-container">
              <button 
                onClick={handleWhatsAppEnquiry} 
                className="btn-nav-secondary d-flex align-items-center justify-content-center gap-2"
                style={{ border: 'none', cursor: 'pointer' }}
              >
                <WhatsAppIcon size={16} /> Enquiry Now
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
                  onClick={handleWhatsAppEnquiry} 
                  className="btn-nav-secondary text-center w-100 d-flex align-items-center justify-content-center gap-2"
                  style={{ border: 'none', cursor: 'pointer', padding: '0.75rem 0' }}
                >
                  <WhatsAppIcon size={16} /> Enquiry Now
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
