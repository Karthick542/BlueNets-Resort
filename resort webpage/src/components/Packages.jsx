import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Compass, Eye, Heart } from 'lucide-react';
import './Packages.css';

// Content arrays representing curated stay packages
const packageOptions = [
  {
    id: 1,
    name: "Wilderness Trekking & Safari",
    tagline: "For Adventure Seekers",
    price: "₹12,500 / 2 Nights",
    icon: <Compass size={24} />,
    features: [
      "Guided Plantation Valley Walk",
      "Off-road Jeep Wildlife Safari",
      "Complimentary Sunrise Trekking",
      "Log-Fire BBQ Night Dinner"
    ]
  },
  {
    id: 2,
    name: "Misty Cardamom Honeymoon",
    tagline: "For Romantics & Couples",
    price: "₹18,900 / 2 Nights",
    icon: <Heart size={24} />,
    features: [
      "Teak Wood Suite or Canopy Treehouse stay",
      "Ayurvedic Couple Massage Spa session",
      "Candlelit Dinner by the Cardamom Groves",
      "Private Sommelier Tea tasting session"
    ]
  },
  {
    id: 3,
    name: "Estate Horizon Sanctuary",
    tagline: "For Rejuvenation & Quiet",
    price: "₹24,500 / 3 Nights",
    icon: <Eye size={24} />,
    features: [
      "Valley Infinity Pool Villa stay",
      "Private Ayurvedic consultation",
      "Organic farm-to-table food board",
      "Personal Butler service & airport shuttle transfer"
    ]
  }
];

export default function Packages({ setSelectedPackageChoice }) {
  const navigate = useNavigate();

  return (
    <section className="section-padding packages-section" id="packages">
      <div className="container-resort">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Curated Stay Experiences</span>
          <h2 className="section-title">Special Packages & Retreats</h2>
          <p className="section-desc">
            Enhance your Munnar holiday with our all-inclusive activity packages. Selected retreats combine luxury stay slots with plantation tours and local safaris.
          </p>
        </div>

        {/* Packages Grid */}
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
          {packageOptions.map((pkg) => (
            <motion.div 
              key={pkg.id}
              className="package-card resort-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -8 }}
            >
              {/* Package Header details */}
              <div className="package-card-header text-center mb-4">
                <div className="package-icon-wrap mx-auto mb-3">
                  {pkg.icon}
                </div>
                <span className="package-tagline">{pkg.tagline}</span>
                <h3 className="package-title mt-2 mb-3">{pkg.name}</h3>
                <div className="package-rate text-success fw-bold">{pkg.price}</div>
              </div>

              {/* Package Inclusions list */}
              <div className="package-card-body mb-4">
                <ul className="package-inclusions-list list-unstyled ps-0">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="small d-flex align-items-start gap-2 mb-3">
                      <span className="check-bullet text-success"><Check size={14} /></span>
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => {
                  setSelectedPackageChoice(pkg.name);
                  navigate('/enquiry');
                }} 
                className="btn-resort btn-resort-outline w-100 mt-auto"
                style={{ cursor: 'pointer' }}
              >
                Enquire Package
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
