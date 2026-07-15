import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize, Eye } from 'lucide-react';
import './Gallery.css';

import galleryRoom1 from '../assets/images/gallery/gallery-room-1.jpg';
import galleryValleys1 from '../assets/images/gallery/gallery-valleys-1.jpg';
import galleryWaterfall1 from '../assets/images/gallery/gallery-waterfall-1.jpg';
import galleryDining1 from '../assets/images/gallery/gallery-dining-1.jpg';
import galleryCampfire1 from '../assets/images/gallery/gallery-campfire-1.jpg';
import galleryExterior1 from '../assets/images/gallery/gallery-exterior-1.jpg';

const galleryItems = [
  {
    id: 1,
    category: 'Rooms',
    title: 'Heritage Woodland Suite',
    image: galleryRoom1
  },
  {
    id: 2,
    category: 'Experiences',
    title: 'Misty Tea Plantation Hike',
    image: galleryValleys1
  },
  {
    id: 3,
    category: 'Experiences',
    title: 'Attukad Waterfall Trail',
    image: galleryWaterfall1
  },
  {
    id: 4,
    category: 'Dining',
    title: 'Hillside Breakfast Vistas',
    image: galleryDining1
  },
  {
    id: 5,
    category: 'Dining',
    title: 'Traditional Kerala Feast',
    image: galleryCampfire1
  },
  {
    id: 6,
    category: 'Rooms',
    title: 'Eco-Luxury Cottage Exterior',
    image: galleryExterior1
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const categories = ['All', 'Rooms', 'Experiences', 'Dining'];

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section className="section-padding gallery-section" id="gallery">
      <div className="container-resort">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Visual Glimpses</span>
          <h2 className="section-title">Homestay Gallery</h2>
          <p className="section-desc">
            Take a visual tour around the properties, valleys, dining areas, and quiet hideaways of BlueNest Resort.
          </p>
        </div>

        {/* Gallery Filters */}
        <div className="gallery-filters-row mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
              {filter === cat && (
                <motion.span 
                  className="active-filter-bg"
                  layoutId="activeFilterTab"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid display */}
        <motion.div 
          layout
          className="gallery-masonry-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                className="gallery-grid-item"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightbox(item.image)}
              >
                <div className="gallery-img-container">
                  <img src={item.image} alt={item.title} className="gallery-grid-img" />
                  <div className="gallery-grid-overlay">
                    <div className="overlay-info">
                      <span className="small text-uppercase fw-bold text-success-light">{item.category}</span>
                      <h4 className="h6 text-white fw-bold mb-0 mt-1">{item.title}</h4>
                    </div>
                    <div className="overlay-icon-wrap">
                      <Eye size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div 
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button className="lightbox-close-btn" onClick={() => setLightbox(null)}>×</button>
            <motion.img 
              src={lightbox} 
              alt="Lightbox View" 
              className="lightbox-img img-fluid"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
