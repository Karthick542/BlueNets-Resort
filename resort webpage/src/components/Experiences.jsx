import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Trees, Sparkles, MapPin } from 'lucide-react';
import './Experiences.css';

import sunriseTrek from '../assets/images/experiences/sunrise-trek.jpg';
import mistyWaterfall from '../assets/images/experiences/misty-waterfall.jpg';
import forestSpa from '../assets/images/experiences/spa-healing.jpg';

const expData = [
  {
    id: 1,
    title: "Tea Valley Sunrise Trek",
    category: "Adventure & Vistas",
    image: sunriseTrek,
    desc: "Rise before dawn for a guided trek up rugged hills to witness the sun rise over a floating sea of clouds.",
    icon: <Mountain size={20} />
  },
  {
    id: 2,
    title: "Attukad Waterfall Hike",
    category: "Nature Trails & Mist",
    image: mistyWaterfall,
    desc: "Walk along the lush forest trails to Attukad waterfalls. Listen to the roaring waters cascading down tea-covered boulders.",
    icon: <Trees size={20} />
  },
  {
    id: 3,
    title: "Ayurvedic Spa Sanctuary",
    category: "Wellness & Healing",
    image: forestSpa,
    desc: "Relax with healing deep-tissue massage oil therapies using cardamom-infused organic blends curated on site.",
    icon: <Sparkles size={20} />
  }
];

export default function Experiences() {
  return (
    <section className="section-padding experiences-section" id="experiences">
      <div className="container-resort">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Estate Trails</span>
          <h2 className="section-title">Signature Experiences</h2>
          <p className="section-desc">
            Immerse yourself in nature. We curate daily activities that let you feel the pulse of Munnar's landscape.
          </p>
        </div>

        {/* Grid display */}
        <motion.div 
          className="resort-grid-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {expData.map((exp) => (
            <motion.div
              key={exp.id}
              className="experience-card resort-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -8 }}
            >
              {/* Image Frame */}
              <div className="experience-card-img-wrap">
                <img src={exp.image} alt={exp.title} className="experience-card-img" />
                <div className="experience-card-icon-tag">
                  {exp.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="experience-card-body">
                <span className="experience-card-cat text-uppercase fw-bold">
                  {exp.category}
                </span>
                <h3 className="experience-card-title">{exp.title}</h3>
                <p className="experience-card-desc text-muted small">{exp.desc}</p>
                <div className="experience-card-footer border-top pt-3 d-flex align-items-center">
                  <MapPin size={14} className="me-1 text-success" />
                  <span className="small text-muted">Hosted on Estate</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
