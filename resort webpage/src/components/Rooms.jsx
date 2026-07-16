import React, { useState } from 'react';
import { motion as m, AnimatePresence as Ap } from 'framer-motion';
import { Maximize2, Users, Bed, Eye, ArrowRight, Check } from 'lucide-react';
import './Rooms.css';

import woodlandSuite from '../assets/images/rooms/woodland-suite.jpg';
import treehouseCabin from '../assets/images/rooms/treehouse-cabin.jpg';
import poolSanctuary from '../assets/images/rooms/pool-sanctuary.jpg';

const roomOptions = [
  {
    id: 1,
    name: "Woodland Heritage Suite",
    startPrice: "₹3,500",
    size: "480 sq ft",
    capacity: "2 Guests",
    bed: "King Bed",
    view: "Plantation Garden",
    image: woodlandSuite,
    desc: "A beautiful lodge constructed with local teak wood, featuring a spacious porch that opens directly into the aromatic cardamom plantation.",
    amenities: ["Free Wi-Fi", "Espresso Machine", "Private Verandah", "Rain Shower", "Mini Bar"],
    packages: [
      { 
        name: "Room Only", 
        price: "₹3,500", 
        inclusions: ["Cardamom Plantation Stay", "High-speed Wi-Fi", "Free Valet Parking", "Garden Walking Access"] 
      },
      { 
        name: "Room + Breakfast", 
        price: "₹4,200", 
        inclusions: ["Cardamom Plantation Stay", "Complimentary Organic Breakfast", "High-speed Wi-Fi", "Free Valet Parking"] 
      },
      { 
        name: "Room + Breakfast + Dinner", 
        price: "₹5,500", 
        inclusions: ["Cardamom Plantation Stay", "Organic Breakfast", "Traditional Kerala Sadya Dinner", "High-speed Wi-Fi"] 
      },
      { 
        name: "Family Getaway Package", 
        price: "₹7,200", 
        inclusions: ["Plantation Stay (Extra bed included)", "All Meals included", "Guided Estate Trekking", "Evening Bonfire Gathering"] 
      }
    ]
  },
  {
    id: 2,
    name: "Canopy Treehouse Villa",
    startPrice: "₹6,000",
    size: "620 sq ft",
    capacity: "2 Guests",
    bed: "Royal Emperor Bed",
    view: "Mist & Valley Views",
    image: treehouseCabin,
    desc: "Suspended 35 feet high amidst ancient trees, this high-end sanctuary offers panoramic views of Munnar's rolling fog fields from a private jacuzzi deck.",
    amenities: ["Deck Jacuzzi", "Complimentary Wine", "Butler Service", "Aroma Diffuser", "Valley Balcony"],
    packages: [
      { 
        name: "Room Only", 
        price: "₹6,000", 
        inclusions: ["Canopy Treehouse Stay", "Private Valley View Deck", "High-speed Wi-Fi", "Espresso Bar Access"] 
      },
      { 
        name: "Room + Breakfast", 
        price: "₹6,800", 
        inclusions: ["Canopy Treehouse Stay", "Complimentary Breakfast", "Valley View Deck", "High-speed Wi-Fi"] 
      },
      { 
        name: "Room + Breakfast + Dinner", 
        price: "₹8,200", 
        inclusions: ["Canopy Treehouse Stay", "Breakfast & Candlelight Dinner", "Valley View Deck", "High-speed Wi-Fi"] 
      },
      { 
        name: "Honeymoon Special", 
        price: "₹10,500", 
        inclusions: ["Treehouse Stay", "All Meals", "Forest Couple Spa therapy (60m)", "Jacuzzi flower candle setup"] 
      }
    ]
  },
  {
    id: 3,
    name: "Valley Infinity Pool Sanctuary",
    startPrice: "₹12,000",
    size: "980 sq ft",
    capacity: "4 Guests",
    bed: "2 Royal King Beds",
    view: "360° Western Ghats Peaks",
    image: poolSanctuary,
    desc: "Our ultimate signature villa features a heated private infinity plunge pool, spacious separate living lounge, private chef options, and absolute privacy.",
    amenities: ["Private Pool", "Home Theatre", "Private Butler", "In-villa Dining", "Free Airport Transfer"],
    packages: [
      { 
        name: "Room Only", 
        price: "₹12,000", 
        inclusions: ["Infinity Pool Villa Stay", "Private Plunge Pool Access", "Personal Butler Service", "High-speed Wi-Fi"] 
      },
      { 
        name: "Room + Breakfast", 
        price: "₹13,000", 
        inclusions: ["Infinity Pool Villa Stay", "Floating Pool Breakfast", "Personal Butler Service", "High-speed Wi-Fi"] 
      },
      { 
        name: "Room + Breakfast + Dinner", 
        price: "₹15,000", 
        inclusions: ["Infinity Pool Villa Stay", "Floating Breakfast & Deck Dinner", "Private Butler", "High-speed Wi-Fi"] 
      },
      { 
        name: "Luxury Family Explorer", 
        price: "₹18,000", 
        inclusions: ["Infinity Pool Villa Stay", "All Meals (Private Chef Options)", "Guided Jeep Safari", "Bonfire Skewers Night"] 
      }
    ]
  }
];

export default function Rooms({ setCurrentView, setSelectedRoomChoice }) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedPkgIndex, setSelectedPkgIndex] = useState(0);

  const handleOpenRoomModal = (room) => {
    setSelectedRoom(room);
    setSelectedPkgIndex(0); // Reset package index on modal open
  };

  return (
    <section className="section-padding rooms-section" id="rooms">
      <div className="container-resort">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Luxury Sanctuary</span>
          <h2 className="section-title">Lodges & Private Villas</h2>
          <p className="section-desc">
            Each stay combines organic architecture with high-end modern convenience, framing breathtaking views of Munnar's wilderness.
          </p>
        </div>

        {/* Rooms Grid */}
        <m.div 
          className="resort-grid-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {roomOptions.map((room) => (
            <m.div 
              key={room.id}
              className="room-card resort-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -8 }}
            >
              {/* Card Image and Start Price */}
              <div className="room-card-img-wrap">
                <img src={room.image} alt={room.name} className="room-card-img" />
                <span className="room-card-price">
                  <span className="price-unit">Starts from</span>
                  <span className="price-num ms-1">{room.startPrice}</span>
                  <span className="price-unit">/ night</span>
                </span>
              </div>

              {/* Card Body */}
              <div className="room-card-body">
                <h3 className="room-card-title">{room.name}</h3>
                <p className="room-card-desc text-muted small">{room.desc}</p>
                
                {/* Meta details */}
                <div className="room-card-specs">
                  <div className="spec-pill">
                    <Maximize2 size={14} /> <span>{room.size}</span>
                  </div>
                  <div className="spec-pill">
                    <Users size={14} /> <span>{room.capacity}</span>
                  </div>
                  <div className="spec-pill">
                    <Bed size={14} /> <span>{room.bed}</span>
                  </div>
                  <div className="spec-pill">
                    <Eye size={14} /> <span>{room.view}</span>
                  </div>
                </div>

                <button 
                  className="btn-resort btn-resort-outline w-100 room-card-btn"
                  onClick={() => handleOpenRoomModal(room)}
                >
                  Explore Stay Packages <ArrowRight size={16} className="ms-2" />
                </button>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>

      {/* Slide-out details drawer / modal */}
      <Ap>
        {selectedRoom && (
          <m.div 
            className="room-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <m.div 
              className="room-modal-content glass-panel"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ maxHeight: '90vh', overflowY: 'auto' }}
            >
              <div className="modal-header-section">
                <h3 className="modal-room-title">{selectedRoom.name}</h3>
                <button className="modal-close-btn" onClick={() => setSelectedRoom(null)}>×</button>
              </div>

              <div className="modal-body-section row g-4">
                <div className="col-lg-6">
                  <img src={selectedRoom.image} alt={selectedRoom.name} className="modal-room-img img-fluid rounded mb-3" />
                  <p className="modal-room-desc text-muted mb-4">{selectedRoom.desc}</p>
                  
                  <h4 className="modal-amenities-title h6 fw-bold text-uppercase">Villa Features</h4>
                  <div className="modal-amenities-list mb-4">
                    {selectedRoom.amenities.map((am, index) => (
                      <span key={index} className="modal-amenity-tag">✓ {am}</span>
                    ))}
                  </div>
                </div>

                {/* Right Package Selection Grid */}
                <div className="col-lg-6 border-start-lg ps-lg-4">
                  <h4 className="modal-amenities-title h6 fw-bold text-uppercase text-success mb-3">Choose Stay Package</h4>
                  <div className="packages-selection-grid">
                    {selectedRoom.packages.map((pkg, idx) => (
                      <div 
                        key={idx}
                        className={`pkg-option-card ${selectedPkgIndex === idx ? 'selected-pkg' : ''}`}
                        onClick={() => setSelectedPkgIndex(idx)}
                      >
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="pkg-option-name m-0">{pkg.name}</h5>
                          {selectedPkgIndex === idx && (
                            <span className="pkg-selected-indicator d-flex align-items-center justify-content-center">
                              <Check size={12} className="text-white" />
                            </span>
                          )}
                        </div>
                        <div className="pkg-option-price mb-2">
                          <span className="price-num text-success fw-bold">{pkg.price}</span>
                          <span className="price-unit text-muted small"> / night</span>
                        </div>
                        <ul className="pkg-option-inclusions list-unstyled m-0 ps-0">
                          {pkg.inclusions.map((inc, i) => (
                            <li key={i} className="small text-muted d-flex align-items-center gap-2 mb-1">
                              <span className="bullet text-success">✓</span> {inc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Summary & Book Action */}
                  <div className="border-top pt-4 mt-4 d-flex justify-content-between align-items-center">
                    <div>
                      <span className="text-muted small d-block">Selected Package Rate</span>
                      <span className="h3 fw-bold text-success m-0">
                        {selectedRoom.packages[selectedPkgIndex].price}
                        <span className="small text-muted fw-normal" style={{ fontSize: '0.85rem' }}> / night</span>
                      </span>
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedRoomChoice(selectedRoom.name);
                        setSelectedRoom(null);
                        setCurrentView('booking');
                      }} 
                      className="btn-resort btn-resort-primary py-2 px-4"
                      style={{ border: 'none', cursor: 'pointer' }}
                    >
                      Book Selected
                    </button>
                  </div>
                </div>

              </div>
            </m.div>
          </m.div>
        )}
      </Ap>
    </section>
  );
}
