import React, { useState, useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUp, Calendar } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Services from './components/Services';
import Experiences from './components/Experiences';
import Packages from './components/Packages';
import Dining from './components/Dining';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showWidgets, setShowWidgets] = useState(false);
  
  // Scroll trackers
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setShowWidgets(latest > 400);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ReactLenis root>
      <div className="resort-app">
        {/* Top Scroll Progress Indicator */}
        <motion.div 
          className="scroll-progress-bar" 
          style={{ 
            scaleX, 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            height: '4px', 
            backgroundColor: 'var(--resort-green-medium)', 
            transformOrigin: '0%', 
            zIndex: 2000 
          }} 
        />

        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Rooms />
          <Services />
          <Experiences />
          <Packages />
          <Dining />
          <Gallery />
          <Contact />
        </main>
        
        <Footer />

        {/* Floating Actions Panel (Back-to-top + Floating Book Now) */}
        <AnimatePresence>
          {showWidgets && (
            <div className="floating-widgets-wrap">
              {/* Floating Book Stay */}
              <motion.a
                href="#contact"
                className="floating-book-btn shadow-lg d-flex align-items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={18} className="me-2" /> Book Stay
              </motion.a>

              {/* Back to top */}
              <motion.button
                onClick={scrollToTop}
                className="back-to-top-btn shadow-lg d-flex align-items-center justify-content-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Back to top"
              >
                <ArrowUp size={20} />
              </motion.button>
            </div>
          )}
        </AnimatePresence>
      </div>
    </ReactLenis>
  );
}
