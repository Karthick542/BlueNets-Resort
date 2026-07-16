import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Compass, Eye, Heart } from 'lucide-react';
import { getPackageWhatsAppLink } from '../config';
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
      "Canopy Treehouse stay",
      "Ayurvedic Massage Spa session",
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

export default function Packages({ setSelectedPackageChoice }) {
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

              {/* Action Button: Opens WhatsApp chat with package parameters pre-filled */}
              <button 
                onClick={() => {
                  setSelectedPackageChoice(pkg.name);
                  navigate('/enquiry');
                }} 
                className="btn-whatsapp-enquiry"
                style={{ cursor: 'pointer' }}
              >
                <WhatsAppIcon size={16} /> Enquire Package
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
