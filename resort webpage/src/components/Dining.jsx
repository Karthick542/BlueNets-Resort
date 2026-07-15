import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Leaf, Flame } from 'lucide-react';
import './Dining.css';

import cardamomBreakfast from '../assets/images/dining/cardamom-breakfast.jpg';
import bananaLeafSadya from '../assets/images/dining/banana-leaf-sadya.jpg';
import logFireBbq from '../assets/images/dining/log-fire-bbq.jpg';

const diningOffers = [
  {
    id: 1,
    title: "Organic Cardamom Breakfast",
    category: "Morning Harvest",
    price: "Complimentary Stay Offer",
    desc: "Start your day with freshly brewed high-grown black tea, organic forest wild honey, and steam appam stews.",
    icon: <Coffee size={20} />,
    image: cardamomBreakfast
  },
  {
    id: 2,
    title: "Kerala Banana Leaf Sadya",
    category: "Traditional Feast",
    price: "₹650 per guest",
    desc: "An authentic local culinary experience featuring 15+ organic vegetarian delicacies served fresh on banana leaves.",
    icon: <Leaf size={20} />,
    image: bananaLeafSadya
  },
  {
    id: 3,
    title: "High Peak Log Fire Barbecue",
    category: "Evening Gathering",
    price: "₹1,200 per guest",
    desc: "Gather under the stars for open log campfire barbecues. Enjoy local spice-marinated skewers, flatbreads, and folk music.",
    icon: <Flame size={20} />,
    image: logFireBbq
  }
];

export default function Dining() {
  return (
    <section className="section-padding dining-section" id="dining">
      <div className="container-resort">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Fine Dining</span>
          <h2 className="section-title">The Cardamom Spice Kitchen</h2>
          <p className="section-desc">
            Savor farm-to-table culinary offerings prepared fresh with local herbs, vegetables, and cardamoms harvested on our estate.
          </p>
        </div>

        {/* Grid layout */}
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
              {/* Card Image and floating badge */}
              <div className="dining-card-img-wrap">
                <img src={offer.image} alt={offer.title} className="dining-card-img" />
                <div className="dining-icon-floating">
                  {offer.icon}
                </div>
                <span className="dining-card-cat-badge text-uppercase fw-bold">
                  {offer.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="dining-card-body">
                <h3 className="dining-card-title">{offer.title}</h3>
                <p className="dining-card-desc text-muted small">{offer.desc}</p>
                
                {/* Price and Button stacked vertically to avoid overlaps */}
                <div className="dining-card-price-row border-top pt-3 mt-auto">
                  <div className="fw-bold text-success text-center mb-3 small">{offer.price}</div>
                  <a href="#contact" className="btn-resort btn-resort-outline w-100 py-2">
                    Reserve Table
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
