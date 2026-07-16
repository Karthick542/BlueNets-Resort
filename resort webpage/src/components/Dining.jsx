import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChefHat, Flame, Utensils } from 'lucide-react';
import './Dining.css';

import bananaLeafSadya from '../assets/images/dining/banana-leaf-sadya.jpg';
import cardamomBreakfast from '../assets/images/dining/cardamom-breakfast.jpg';
import logFireBbq from '../assets/images/dining/log-fire-bbq.jpg';

// Content arrays representing signature culinary offerings
const diningOffers = [
  {
    id: 1,
    title: "Kerala Banana Leaf Sadya",
    desc: "Savor a traditional feast of 24+ vegetarian items served on fresh banana leaves, including red rice, aviyal, sambar, and payasam.",
    price: "₹1,200 per guest",
    icon: <ChefHat size={20} />,
    image: bananaLeafSadya
  },
  {
    id: 2,
    title: "Cardamom Groves Breakfast",
    desc: "Wake up to fresh estate cardamom-infused teas, steam idlis, and crispy appams served directly in a scenic garden plantation spot.",
    price: "Complimentary (Select Packages)",
    icon: <Utensils size={20} />,
    image: cardamomBreakfast
  },
  {
    id: 3,
    title: "Log-Fire Barbecue Nights",
    desc: "Gather under starlit Munnar skies for hot grilled skewered meats, jacket potatoes, and toasted marshmallows by a warm crackling campfire.",
    price: "₹1,800 per package",
    icon: <Flame size={20} />,
    image: logFireBbq
  }
];

export default function Dining() {
  const navigate = useNavigate();

  return (
    <section className="section-padding dining-section" id="dining">
      <div className="container-resort">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Fine Estate Dining</span>
          <h2 className="section-title">Wilderness Culinary Experiences</h2>
          <p className="section-desc">
            Indulge in authentic spices and farm-to-table freshness. Every plate at BlueNest captures the unique flavors of Kerala's mist-covered hills.
          </p>
        </div>

        {/* Dining Offers Cards */}
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
          {diningOffers.map((offer) => (
            <motion.div 
              key={offer.id}
              className="dining-card resort-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -8 }}
            >
              {/* Card Image */}
              <div className="dining-card-img-wrap">
                <img src={offer.image} alt={offer.title} className="dining-card-img" />
                <div className="dining-card-icon">
                  {offer.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="dining-card-body">
                <h3 className="dining-card-title">{offer.title}</h3>
                <p className="dining-card-desc text-muted small">{offer.desc}</p>
                
                {/* Price and Action Button */}
                <div className="dining-card-footer">
                  <div className="dining-card-price">{offer.price}</div>
                  <button 
                    onClick={() => navigate('/booking')} 
                    className="btn-resort btn-resort-outline"
                    style={{ border: '1px solid var(--resort-green-deep)', cursor: 'pointer' }}
                  >
                    Reserve Table
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
