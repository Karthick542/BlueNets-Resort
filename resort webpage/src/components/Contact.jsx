import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    roomChoice: 'Canopy Treehouse Villa'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!form.checkIn || !form.checkOut) {
      alert("Please specify check-in and check-out dates.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section className="section-padding contact-section" id="contact">
      <div className="container-resort">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Reach Sanctuary</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-desc">
            Plan your journey to BlueNest Resort. Whether you have inquiries about custom spa retreats, airport transfers, or corporate plantation hire, our guest relations team is here.
          </p>
        </div>

        <div className="row g-5 align-items-stretch">
          
          {/* Left Column: Contact Coordinates & Interactive Map */}
          <div className="col-lg-5">
            <motion.div 
              className="contact-info-panel h-100 d-flex flex-column justify-content-between"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="contact-details-card glass-panel p-4 mb-4">
                <div className="contact-details-list">
                  <div className="contact-detail-item">
                    <div className="detail-icon-wrap">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="detail-label">Location Address</h4>
                      <p className="detail-val text-muted small">BlueNest Resort Estate, Pallivasal Cardamom Groves, Munnar, Kerala 685612</p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="detail-icon-wrap">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="detail-label">Reservations Desk</h4>
                      <p className="detail-val text-muted small">+91 4865 242 777 | +91 98450 12345</p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="detail-icon-wrap">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="detail-label">Email Channels</h4>
                      <p className="detail-val text-muted small">reservations@bluenestmunnar.com</p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="detail-icon-wrap">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="detail-label">Front Desk Hours</h4>
                      <p className="detail-val text-muted small">24 Hours / 7 Days Active Support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Iframe Map Container */}
              <div className="contact-map-banner-interactive rounded overflow-hidden shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15701.328329617343!2d77.0597193!3d10.0889333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0799794e772db3%3A0x6b7db0bc0a137834!2sMunnar%2C%20Kerala%20685612!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="260" 
                  style={{ border: 0, display: 'block' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BlueNest Resort Munnar Location Map"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Controlled Booking Form */}
          <div className="col-lg-7">
            <motion.div 
              className="booking-form-card glass-panel h-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="form-card-title mb-2">Check Room Availability</h3>
                    <p className="text-muted small mb-4">Complete the fields below to plan your nature getaway.</p>

                    <form onSubmit={handleFormSubmit} className="row g-3">
                      {/* Name */}
                      <div className="col-md-6 d-flex flex-column">
                        <label htmlFor="contactName" className="form-label-custom">Full Name</label>
                        <input 
                          type="text" 
                          id="contactName" 
                          name="name"
                          value={form.name} 
                          onChange={handleInputChange} 
                          placeholder="William Wordsworth" 
                          required 
                        />
                      </div>
                      
                      {/* Email */}
                      <div className="col-md-6 d-flex flex-column">
                        <label htmlFor="contactEmail" className="form-label-custom">Email Address</label>
                        <input 
                          type="email" 
                          id="contactEmail" 
                          name="email"
                          value={form.email} 
                          onChange={handleInputChange} 
                          placeholder="william@example.com" 
                          required 
                        />
                      </div>

                      {/* Phone */}
                      <div className="col-12 d-flex flex-column">
                        <label htmlFor="contactPhone" className="form-label-custom">Phone Number</label>
                        <input 
                          type="tel" 
                          id="contactPhone" 
                          name="phone"
                          value={form.phone} 
                          onChange={handleInputChange} 
                          placeholder="+91 98765 43210" 
                          required 
                        />
                      </div>

                      {/* Check In */}
                      <div className="col-md-6 d-flex flex-column">
                        <label htmlFor="contactCheckIn" className="form-label-custom">Check In</label>
                        <input 
                          type="date" 
                          id="contactCheckIn" 
                          name="checkIn"
                          value={form.checkIn} 
                          onChange={handleInputChange} 
                          required 
                        />
                      </div>

                      {/* Check Out */}
                      <div className="col-md-6 d-flex flex-column">
                        <label htmlFor="contactCheckOut" className="form-label-custom">Check Out</label>
                        <input 
                          type="date" 
                          id="contactCheckOut" 
                          name="checkOut"
                          value={form.checkOut} 
                          onChange={handleInputChange} 
                          required 
                        />
                      </div>

                      {/* Guests Select */}
                      <div className="col-md-6 d-flex flex-column">
                        <label htmlFor="contactGuests" className="form-label-custom">Guests</label>
                        <select 
                          id="contactGuests" 
                          name="guests"
                          value={form.guests} 
                          onChange={handleInputChange}
                        >
                          <option>1 Guest</option>
                          <option>2 Guests</option>
                          <option>3 Guests</option>
                          <option>4 Guests</option>
                          <option>Family Lodge (5+)</option>
                        </select>
                      </div>

                      {/* Villa Select */}
                      <div className="col-md-6 d-flex flex-column">
                        <label htmlFor="contactRoom" className="form-label-custom">Cottage Choice</label>
                        <select 
                          id="contactRoom" 
                          name="roomChoice"
                          value={form.roomChoice} 
                          onChange={handleInputChange}
                        >
                          <option>Woodland Heritage Suite</option>
                          <option>Canopy Treehouse Villa</option>
                          <option>Valley Infinity Pool Sanctuary</option>
                        </select>
                      </div>

                      {/* Submit */}
                      <div className="col-12 mt-4">
                        <button type="submit" className="btn-resort btn-resort-primary w-100 py-3 d-flex align-items-center justify-content-center">
                          <Send size={16} className="me-2" /> Request Availability
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    className="booking-success-wrapper text-center h-100 d-flex flex-column align-items-center justify-content-center py-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CheckCircle size={60} className="text-success mb-3" />
                    <h3 className="text-success fw-bold mb-3">Reservation Initiated!</h3>
                    <p className="text-muted mb-4 small">
                      Thank you, <strong>{form.name}</strong>. We have logged your enquiry. Our guest relation specialist will email you to verify room availability.
                    </p>

                    <div className="p-3 bg-light rounded text-start mb-4 border w-100 small">
                      <span className="fw-bold d-block mb-2 border-bottom pb-1">Stay Details:</span>
                      <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                        <li>📅 Check In: {form.checkIn}</li>
                        <li>📅 Check Out: {form.checkOut}</li>
                        <li>👥 Occupants: {form.guests}</li>
                        <li>🏡 Lodge: {form.roomChoice}</li>
                        <li>📧 Email: {form.email}</li>
                        <li>📞 Phone: {form.phone}</li>
                      </ul>
                    </div>

                    <button 
                      className="btn-resort btn-resort-outline"
                      onClick={() => {
                        setIsSubmitted(false);
                        setForm({
                          name: '',
                          email: '',
                          phone: '',
                          checkIn: '',
                          checkOut: '',
                          guests: '2 Guests',
                          roomChoice: 'Canopy Treehouse Villa'
                        });
                      }}
                    >
                      New Reservation Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
