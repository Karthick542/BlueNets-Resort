import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import './Enquiry.css';

export default function Enquiry({ selectedPackageChoice, setSelectedPackageChoice }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: selectedPackageChoice ? `Enquiry: ${selectedPackageChoice}` : '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync package choice to subject if it updates
  useEffect(() => {
    if (selectedPackageChoice) {
      setForm((prev) => ({
        ...prev,
        subject: `Enquiry: ${selectedPackageChoice}`
      }));
    }
  }, [selectedPackageChoice]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Clear package selection on submission
    if (setSelectedPackageChoice) {
      setSelectedPackageChoice('');
    }
  };

  return (
    <section className="section-padding enquiry-section">
      <div className="container-resort">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Connect with Us</span>
          <h2 className="section-title">Send Us Your Enquiry</h2>
          <p className="section-desc">
            Have questions about custom stays, local excursions, or corporate bookings? Fill out the enquiry form below, and our relations desk will revert to you within 24 hours.
          </p>
        </div>

        <div className="row g-5 align-items-stretch">
          
          {/* Left Column: Contact info & Google Map */}
          <div className="col-lg-5">
            <motion.div 
              className="enquiry-info-panel h-100 d-flex flex-column justify-content-between"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="enquiry-details-card glass-panel p-4 mb-4">
                <div className="enquiry-details-list">
                  <div className="enquiry-detail-item">
                    <div className="detail-icon-wrap">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="detail-label">Address Coordinates</h4>
                      <p className="detail-val text-muted small">BlueNest Resort, Pallivasal Groves, Munnar, Kerala 685612</p>
                    </div>
                  </div>

                  <div className="enquiry-detail-item">
                    <div className="detail-icon-wrap">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="detail-label">Reservations Desk</h4>
                      <p className="detail-val text-muted small">+91 4865 242 777 | +91 98450 12345</p>
                    </div>
                  </div>

                  <div className="enquiry-detail-item">
                    <div className="detail-icon-wrap">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="detail-label">Email Channels</h4>
                      <p className="detail-val text-muted small">reservations@bluenestmunnar.com</p>
                    </div>
                  </div>

                  <div className="enquiry-detail-item">
                    <div className="detail-icon-wrap">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 className="detail-label">Desk Hours</h4>
                      <p className="detail-val text-muted small">24 Hours / 7 Days Active Support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="enquiry-map-wrapper rounded overflow-hidden shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15701.328329617343!2d77.0597193!3d10.0889333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0799794e772db3%3A0x6b7db0bc0a137834!2sMunnar%2C%20Kerala%20685612!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="220" 
                  style={{ border: 0, display: 'block' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BlueNest Location Map"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Quick Enquiry Form */}
          <div className="col-lg-7">
            <motion.div 
              className="enquiry-form-card glass-panel h-100"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="form-card-title mb-2">Get in Touch</h3>
                    <p className="text-muted small mb-4">Complete the fields below to submit a custom query.</p>

                    <form onSubmit={handleFormSubmit} className="enquiry-form row g-3">
                      {/* Name */}
                      <div className="col-md-6 d-flex flex-column">
                        <label htmlFor="enquiryName" className="form-label-custom">Full Name</label>
                        <input 
                          type="text" 
                          id="enquiryName" 
                          name="name"
                          value={form.name} 
                          onChange={handleInputChange} 
                          placeholder="William Wordsworth" 
                          required 
                        />
                      </div>
                      
                      {/* Email */}
                      <div className="col-md-6 d-flex flex-column">
                        <label htmlFor="enquiryEmail" className="form-label-custom">Email Address</label>
                        <input 
                          type="email" 
                          id="enquiryEmail" 
                          name="email"
                          value={form.email} 
                          onChange={handleInputChange} 
                          placeholder="william@example.com" 
                          required 
                        />
                      </div>

                      {/* Phone */}
                      <div className="col-12 d-flex flex-column">
                        <label htmlFor="enquiryPhone" className="form-label-custom">Phone Number</label>
                        <input 
                          type="tel" 
                          id="enquiryPhone" 
                          name="phone"
                          value={form.phone} 
                          onChange={handleInputChange} 
                          placeholder="+91 98765 43210" 
                          required 
                        />
                      </div>

                      {/* Subject */}
                      <div className="col-12 d-flex flex-column">
                        <label htmlFor="enquirySubject" className="form-label-custom">Subject</label>
                        <input 
                          type="text" 
                          id="enquirySubject" 
                          name="subject"
                          value={form.subject} 
                          onChange={handleInputChange} 
                          placeholder="General Stay Query" 
                          required 
                        />
                      </div>

                      {/* Message */}
                      <div className="col-12 d-flex flex-column">
                        <label htmlFor="enquiryMessage" className="form-label-custom">Message</label>
                        <textarea 
                          id="enquiryMessage" 
                          name="message"
                          value={form.message} 
                          onChange={handleInputChange} 
                          placeholder="Tell us about your requirements..." 
                          rows="4"
                          required 
                        />
                      </div>

                      {/* Submit */}
                      <div className="col-12 mt-4">
                        <button type="submit" className="btn-resort btn-resort-primary w-100 py-3 d-flex align-items-center justify-content-center">
                          <Send size={16} className="me-2" /> Send Enquiry
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    className="enquiry-success-wrapper text-center h-100 d-flex flex-column align-items-center justify-content-center py-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CheckCircle size={60} className="text-success mb-3" />
                    <h3 className="text-success fw-bold mb-3">Enquiry Submitted!</h3>
                    <p className="text-muted mb-4 small">
                      Thank you, <strong>{form.name}</strong>. We have received your query. A resort representative will contact you via email shortly.
                    </p>

                    <div className="p-3 bg-light rounded text-start mb-4 border w-100 small">
                      <span className="fw-bold d-block mb-2 border-bottom pb-1">Enquiry Logs:</span>
                      <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                        <li><strong>Subject:</strong> {form.subject}</li>
                        <li><strong>Email:</strong> {form.email}</li>
                        <li><strong>Phone:</strong> {form.phone}</li>
                        <li><strong>Message:</strong> {form.message}</li>
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
                          subject: '',
                          message: ''
                        });
                      }}
                    >
                      New Enquiry
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
