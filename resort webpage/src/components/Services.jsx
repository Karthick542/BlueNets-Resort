import React from 'react';
import { motion as m } from 'framer-motion';
import { Flame, Utensils, Compass, Users, Car, Wifi, Clock, ChefHat } from 'lucide-react';
import './Services.css';

// Import local downloaded images
import campfireImg from '../assets/images/services/service-campfire.jpg';
import cuisineImg from '../assets/images/services/service-cuisine.jpg';
import teaTourImg from '../assets/images/services/service-tea-tour.jpg';
import guideImg from '../assets/images/services/service-guide.jpg';
import parkingImg from '../assets/images/services/service-parking.jpg';
import wifiImg from '../assets/images/services/service-wifi.jpg';
import roomServiceImg from '../assets/images/services/service-room-service.jpg';
import kitchenetteImg from '../assets/images/services/service-kitchenette.jpg';

const servicesList = [
  {
    icon: Flame,
    title: "Free Fire Camp Nights",
    desc: "Gather under the starlight as we ignite a warm wood bonfire amidst organic cardamom groves.",
    image: campfireImg
  },
  {
    icon: Utensils,
    title: "Authentic South Indian Cuisine",
    desc: "Savor traditional Kerala spice profiles and leaf Sadya delicacies cooked by local estate chefs.",
    image: cuisineImg
  },
  {
    icon: Compass,
    title: "Tea Plantation Tours",
    desc: "Guided walking tours through misty, green heritage tea terraces that wrap around our cottages.",
    image: teaTourImg
  },
  {
    icon: Users,
    title: "Expert Tourist Guides",
    desc: "Navigate secret waterfall paths and trekking summits with our expert local naturalists.",
    image: guideImg
  },
  {
    icon: Car,
    title: "Free Parking",
    desc: "Enjoy stress-free arrivals with secure, complimentary private valet parking inside our gates.",
    image: parkingImg
  },
  {
    icon: Wifi,
    title: "Complimentary WiFi",
    desc: "Stay seamlessly connected with high-speed fiber internet coverage across all rooms and gardens.",
    image: wifiImg
  },
  {
    icon: Clock,
    title: "24/7 Room Service",
    desc: "Indulge in fresh mocktails or hot herbal teas delivered to your private verandah anytime.",
    image: roomServiceImg
  },
  {
    icon: ChefHat,
    title: "Kitchenette & Open Cooking",
    desc: "Prepare customized organic meals using estate-fresh spices in our fully-equipped open spaces.",
    image: kitchenetteImg
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Services() {
  return (
    <section className="section-padding services-section" id="services">
      <div className="container-resort">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Our Amenities</span>
          <h2 className="section-title">Resort Experiences & Services</h2>
          <p className="section-desc">
            To ensure a seamless nature getaway, we provide premium guest services that keep you connected, pampered, and close to Munnar's wilderness.
          </p>
        </div>

        {/* Services Card Grid */}
        <m.div 
          className="services-cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <m.div 
                key={index} 
                className="service-card glass-panel"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Photographic Header */}
                <div className="service-card-image-wrap">
                  <img src={service.image} alt={service.title} className="service-card-img" />
                  <div className="service-icon-floating">
                    <IconComponent className="service-card-icon" />
                  </div>
                </div>

                {/* Card Body content */}
                <div className="service-card-body">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.desc}</p>
                </div>
              </m.div>
            );
          })}
        </m.div>

      </div>
    </section>
  );
}
