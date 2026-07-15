import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Coffee, Map } from 'lucide-react';
import './Packages.css';

const pkgsData = [
  {
    id: 1,
    name: "Misty Cardamom Honeymoon",
    price: "₹18,500",
    duration: "3 Days / 2 Nights",
    tag: "Romantic Stay",
    desc: "A cozy romantic escape set in the high-elevation valleys. Includes candlelight estate dinner and massage therapies.",
    features: [
      "Luxury Valley View Suite",
      "Private Candlelight Dining",
      "60 mins Couples Forest Spa",
      "Guided Plantation Trekking"
    ],
    bgIcon: <Sparkles className="pkg-bg-icon" />
  },
  {
    id: 2,
    name: "Ayurvedic Health Retreat",
    price: "₹28,500",
    duration: "5 Days / 4 Nights",
    tag: "Wellness Plan",
    desc: "Restore your core wellness with personalized daily Ayurvedic healing therapies and meditation sessions.",
    features: [
      "Organic Premium Cottage",
      "Daily Doctor Consultations",
      "Morning Yoga & Guided Meds",
      "Customized Satvik Diet Meals"
    ],
    bgIcon: <Coffee className="pkg-bg-icon" />
  },
  {
    id: 3,
    name: "Weekend Monsoon Caravan",
    price: "₹9,500",
    duration: "2 Days / 1 Night",
    tag: "Adventure Getaway",
    desc: "Experience Munnar's rains. Hike through damp forest lanes and warm up by the evening log fire grills.",
    features: [
      "Heritage Lodge Stay",
      "Estate Guided Trekking",
      "Log Fire Barbecue Dinner",
      "Fresh Tea Plucking Session"
    ],
    bgIcon: <Map className="pkg-bg-icon" />
  }
];

export default function Packages() {
  return (
    <section className="section-padding packages-section" id="packages">
      <div className="container-resort">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Excursions & Offers</span>
          <h2 className="section-title">Special Packages</h2>
          <p className="section-desc">
            Tailored stays crafted to let you discover adventure, romance, or pure healing relaxation.
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
          {pkgsData.map((pkg) => (
            <motion.div
              key={pkg.id}
              className="package-card resort-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -8 }}
            >
              {/* Background Icon */}
              {pkg.bgIcon}

              {/* Tag and Title */}
              <span className="package-tag-badge text-uppercase fw-bold">
                {pkg.tag}
              </span>
              <h3 className="package-title">{pkg.name}</h3>
              <div className="package-duration-row border-bottom pb-3 mb-3 d-flex align-items-center">
                <Calendar size={14} className="me-2 text-success" />
                <span className="small text-muted">{pkg.duration}</span>
              </div>

              {/* Price */}
              <div className="package-price-row mb-3">
                <span className="price-label small text-muted">Starts from</span>
                <span className="price-val h3 fw-bold text-success d-block">{pkg.price}</span>
              </div>

              <p className="package-desc text-muted small mb-4">{pkg.desc}</p>

              {/* Features list */}
              <div className="package-features-list mb-4">
                <h4 className="features-title small text-uppercase fw-bold text-success mb-2">Package Inclusions:</h4>
                <ul className="features-bullets small list-unstyled">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="mb-2 d-flex align-items-center">
                      <span className="bullet-check text-success me-2">✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#contact" className="btn-resort btn-resort-outline w-100 mt-auto">
                Enquire Package
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
