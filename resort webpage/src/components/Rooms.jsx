import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Users, Bed, Eye, ArrowRight, Check } from 'lucide-react';
import './Rooms.css';

import woodlandSuite from '../assets/images/rooms/woodland-suite.jpg';
import treehouseCabin from '../assets/images/rooms/treehouse-cabin.jpg';
import poolSanctuary from '../assets/images/rooms/pool-sanctuary.jpg';

// Static options representing different lodge choices
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
        inclusions: ["Luxury Cottage Stay", "Welcome Estate Juice", "Guided Valley Walk"]
      },
      { 
        name: "Breakfast Inclusive", 
        price: "₹4,200", 
        inclusions: ["Luxury Cottage Stay", "Kerala Banana Leaf Feast", "Sunrise Guided Valley Walk"]
      }
    ]
  },
  {
    id: 2,
    name: "Canopy Treehouse Villa",
    startPrice: "₹5,500",
    size: "620 sq ft",
    capacity: "2 Guests",
    bed: "Premium King Bed",
    view: "Misty Valley & Forest Canopy",
    image: treehouseCabin,
    desc: "Perched 20 feet high in a rustic hill station forest, this wooden sanctuary provides sweeping panoramic views of the Western Ghats.",
    amenities: ["Free Wi-Fi", "Espresso Machine", "Elevated Private Deck", "Soaking Tub", "Mini Bar"],
    packages: [
      { 
        name: "Breakfast Inclusive", 
        price: "₹5,500", 
        inclusions: ["Treehouse Stay", "Cardamom Breakfast Basket", "Waterfall Hiking Guide"] 
      },
      { 
        name: "Full Board Wilderness Experience", 
        price: "₹7,200", 
        inclusions: ["Treehouse Stay", "All Culinary Feasts", "Guided Plantation Safari", "Campfire Grill"] 
      }
    ]
  },
  {
    id: 3,
    name: "Valley Infinity Pool Sanctuary",
    startPrice: "₹8,500",
    size: "950 sq ft",
    capacity: "3 Guests (Max)",
    bed: "Grand Emperor Bed",
    view: "Infinity Pool & Mountain Horizon",
    image: poolSanctuary,
    desc: "A premium private villa featuring a personal heated infinity pool hanging over the misty valley edge for ultimate luxury.",
    amenities: ["Free Wi-Fi", "Wine Cellar Fridge", "Heated Private Pool", "Outdoor Jacuzzi", "24/7 Butler Service"],
    packages: [
      { 
        name: "Honeymoon / Couple Special", 
        price: "₹8,500", 
        inclusions: ["Private Villa Stay", "Infinity Pool Access", "Private Chef Dining", "Ayurvedic Aromatherapy"] 
      },
      { 
        name: "Grand Wilderness Board", 
        price: "₹10,500", 
        inclusions: ["Private Villa Stay", "Infinity Pool Access", "All Premium Feasts", "Private Tea Sommelier Session", "Airport Shuttle Transfer"] 
      }
    ]
  }
];

export default function Rooms({ setSelectedRoomChoice }) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedPkgIndex, setSelectedPkgIndex] = useState(0);
  
  const navigate = useNavigate();

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
          {roomOptions.map((room) => (
            <motion.div 
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
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Slide-out details drawer / modal */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div 
            className="room-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
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
                        navigate('/booking');
                      }} 
                      className="btn-resort btn-resort-primary py-2 px-4"
                      style={{ border: 'none', cursor: 'pointer' }}
                    >
                      Book Selected
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
