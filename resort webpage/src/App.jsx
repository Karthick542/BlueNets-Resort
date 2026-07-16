import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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
import Enquiry from './components/Enquiry';
import Booking from './components/Booking';
import ScrollToTop from './components/ScrollToTop';

/**
 * Main Content Component containing the routes, navbar, and widgets.
 * Separated to allow hooks like useLocation and useNavigate to run within BrowserRouter context.
 */
function AppContent() {
  const [selectedRoomChoice, setSelectedRoomChoice] = useState('Canopy Treehouse Villa');
  const [selectedPackageChoice, setSelectedPackageChoice] = useState('');
  const [showWidgets, setShowWidgets] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Scroll Progress Springs
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Monitor scroll height to conditionally display floating widgets (Back to Top / Book Stay)
  useEffect(() => {
    return scrollY.onChange((latestScrollY) => {
      setShowWidgets(latestScrollY > 400);
    });
  }, [scrollY]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
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

      {/* Helper to reset scroll position on transition */}
      <ScrollToTop />

      <Navbar />
      
      <main>
        {/* AnimatePresence enables smooth transitions when paths switch */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            
            {/* Landing/Home Page Route */}
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
                <About />
                <Rooms setSelectedRoomChoice={setSelectedRoomChoice} />
                <Services />
                <Experiences />
                <Packages setSelectedPackageChoice={setSelectedPackageChoice} />
                <Dining />
                <Gallery />
                <Contact />
                <Booking 
                  selectedRoomChoice={selectedRoomChoice}
                  setSelectedRoomChoice={setSelectedRoomChoice}
                />
              </motion.div>
            } />

            {/* Quick Enquiry Form Route */}
            <Route path="/enquiry" element={
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
              >
                <Enquiry 
                  selectedPackageChoice={selectedPackageChoice}
                  setSelectedPackageChoice={setSelectedPackageChoice}
                />
              </motion.div>
            } />

            {/* Room Availability / Check-In Route */}
            <Route path="/booking" element={
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
              >
                <Booking 
                  selectedRoomChoice={selectedRoomChoice}
                  setSelectedRoomChoice={setSelectedRoomChoice}
                />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />

      {/* Floating Actions Panel (Back-to-top + Floating Book Now) */}
      <AnimatePresence>
        {showWidgets && (
          <div className="floating-widgets-wrap">
            
            {/* Floating Book Stay button redirects to booking page */}
            <motion.button
              onClick={() => navigate('/booking')}
              className="floating-book-btn shadow-lg d-flex align-items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              <Calendar size={18} className="me-2" /> Book Stay
            </motion.button>

            {/* Back to top scroll button */}
            <motion.button
              onClick={handleScrollToTop}
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
  );
}

/**
 * Root App entry point wrapping components with Smooth Lenis scroll and React Router.
 */
export default function App() {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ReactLenis>
  );
}
