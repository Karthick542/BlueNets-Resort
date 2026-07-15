import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Sparkles } from 'lucide-react';
import './About.css';
import aboutExterior from '../assets/images/about/about-exterior.jpg';
import aboutTrail from '../assets/images/about/about-trail.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function About() {
  return (
    <section className="section-padding about-section" id="about">
      <div className="container-resort">
        <motion.div 
          className="row align-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Overlapping Photos Stack */}
          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div className="about-image-stack">
              <motion.div 
                className="about-image-frame frame-primary"
                variants={itemVariants}
              >
                <img 
                  src={aboutExterior} 
                  alt="BlueNest Resort Exterior View" 
                  className="about-img"
                />
              </motion.div>
              <motion.div 
                className="about-image-frame frame-secondary"
                variants={itemVariants}
              >
                <img 
                  src={aboutTrail} 
                  alt="Nature Cardamom Trails Walk" 
                  className="about-img"
                />
              </motion.div>
            </div>
          </div>

          {/* Premium Copywriting Content */}
          <div className="col-lg-6">
            <div className="about-text-area">
              <motion.span className="section-subtitle" variants={itemVariants}>
                Homestay Story
              </motion.span>
              <motion.h2 className="section-title" variants={itemVariants}>
                A Sanctuary Nested in Munnar's Mist
              </motion.h2>
              <motion.p className="section-desc mb-4" variants={itemVariants}>
                BlueNest Resort is an award-winning eco-homestay nestled within 15 acres of organic cardamom groves. Perched at one of the highest points of Munnar, our retreat blends heritage stone architecture with modern organic elegance, overlooking rolling valleys of tea gardens.
              </motion.p>
              
              {/* Feature points */}
              <div className="about-perks-list">
                <motion.div className="perk-item" variants={itemVariants}>
                  <div className="perk-icon-wrap">
                    <Leaf className="perk-icon" />
                  </div>
                  <div>
                    <h4 className="perk-title">Eco-Friendly Stay</h4>
                    <p className="perk-desc text-muted">Sustainable architecture powered entirely by clean solar energy and fresh mountain spring water systems.</p>
                  </div>
                </motion.div>

                <motion.div className="perk-item" variants={itemVariants}>
                  <div className="perk-icon-wrap">
                    <Heart className="perk-icon" />
                  </div>
                  <div>
                    <h4 className="perk-title">Authentic Kerala Hospitality</h4>
                    <p className="perk-desc text-muted">Warm, tailored care reflecting the genuine homestay traditions and spices of the Western Ghats.</p>
                  </div>
                </motion.div>

                <motion.div className="perk-item" variants={itemVariants}>
                  <div className="perk-icon-wrap">
                    <Sparkles className="perk-icon" />
                  </div>
                  <div>
                    <h4 className="perk-title">Ayurvedic Wellness</h4>
                    <p className="perk-desc text-muted">Rejuvenate body and mind with signature massage therapies infused with estate cardamoms and native herbs.</p>
                  </div>
                </motion.div>
              </div>

              <motion.div className="mt-4" variants={itemVariants}>
                <a href="#rooms" className="btn-resort btn-resort-primary">
                  Find Your Perfect Stay
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
