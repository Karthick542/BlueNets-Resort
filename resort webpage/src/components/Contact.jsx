import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="section-padding contact-section" id="contact">
      <div className="container-resort">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Reach Sanctuary</span>
          <h2 className="section-title">Contact & Location</h2>
          <p className="section-desc">
            Plan your journey to BlueNest Resort. Find our address coordinates, call channels, or email descriptors to get in touch with our front desk team in Munnar.
          </p>
        </div>

        <div className="row g-5 align-items-stretch">
          
          {/* Left Column: Contact Coordinates */}
          <div className="col-lg-6">
            <motion.div 
              className="contact-info-panel h-100 d-flex flex-column justify-content-between"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="contact-details-card glass-panel p-4 h-100 d-flex align-items-center">
                <div className="contact-details-list w-100">
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
            </motion.div>
          </div>

          {/* Right Column: Google Map */}
          <div className="col-lg-6">
            <motion.div 
              className="contact-map-banner-interactive rounded overflow-hidden shadow-sm h-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15701.328329617343!2d77.0597193!3d10.0889333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0799794e772db3%3A0x6b7db0bc0a137834!2sMunnar%2C%20Kerala%20685612!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, display: 'block', minHeight: '380px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="BlueNest Resort Munnar Location Map"
              ></iframe>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
