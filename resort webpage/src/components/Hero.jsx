import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import './Hero.css';

import heroTahr from '../assets/images/hero/hero-tahr.jpg';
import heroBungalow from '../assets/images/hero/hero-bungalow.jpg';
import heroPlantation from '../assets/images/hero/hero-plantation.jpg';

// Content arrays for the auto-cycling carousel
const slides = [
  {
    id: 1,
    image: heroTahr,
    title: 'Discover Munnar Wildlife',
    desc: 'Meet the rare Nilgiri Tahr mountain goats perched along our winding misty mountain lanes.'
  },
  {
    id: 2,
    image: heroBungalow,
    title: 'Heritage Estate Sanctuary',
    desc: 'Rest inside historical tea plantation bungalows tucked neatly into Munnar\'s evergreen slopes.'
  },
  {
    id: 3,
    image: heroPlantation,
    title: 'Majestic Tea Hills',
    desc: 'Breathe in the fresh mountain air while overlooking endless rolling horizons of green tea terraces.'
  }
];

export default function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const navigate = useNavigate();

  // Auto-play timer for sliding background
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  // Parallax scroll values
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 300]);
  const opacityParallax = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="hero-section" id="home">
      
      {/* Background Slides with Parallax translation */}
      <motion.div 
        className="hero-background-wrapper"
        style={{ y: yParallax, opacity: opacityParallax }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
            className="hero-bg-slide"
            style={{ backgroundImage: `url(${slides[currentSlideIndex].image})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <div className="hero-dark-overlay"></div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Hero text overlay contents */}
      <div className="container-resort hero-overlay-content">
        <div className="row align-items-center min-vh-100 py-5">
          <div className="col-lg-8">
            <motion.span 
              className="hero-tagline-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              🌿 Natural Living & Luxury
            </motion.span>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlideIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <h1 className="hero-display-title text-white">
                  {slides[currentSlideIndex].title}
                </h1>
                <p className="hero-display-desc text-white-50">
                  {slides[currentSlideIndex].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.div 
              className="hero-cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button 
                onClick={() => navigate('/booking')} 
                className="btn-resort btn-resort-primary hero-btn-gap"
                style={{ border: 'none', cursor: 'pointer' }}
              >
                <Calendar size={18} className="me-2" /> Book Stay
              </button>
              <a href="#rooms" className="btn-resort btn-resort-white-outline">
                Explore Rooms <ArrowRight size={18} className="ms-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
