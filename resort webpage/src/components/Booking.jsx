import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Send, CheckCircle, Clock } from 'lucide-react';
import './Booking.css';

export default function Booking({ selectedRoomChoice, setSelectedRoomChoice }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    roomChoice: selectedRoomChoice || 'Canopy Treehouse Villa',
    specialRequests: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync state if selectedRoomChoice updates
  useEffect(() => {
    if (selectedRoomChoice) {
      setForm((prev) => ({
        ...prev,
        roomChoice: selectedRoomChoice
      }));
    }
  }, [selectedRoomChoice]);

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
    
    // Prevent checkout before checkin
    if (new Date(form.checkOut) <= new Date(form.checkIn)) {
      alert("Check-out date must be after the check-in date.");
      return;
    }

    setIsSubmitted(true);
    // Clear room selection state on submit
    if (setSelectedRoomChoice) {
      setSelectedRoomChoice('Canopy Treehouse Villa');
    }
  };

  return (
    <section className="section-padding booking-section" id="booking">
      <div className="container-resort">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Secure Stay</span>
          <h2 className="section-title">Check Room Availability</h2>
          <p className="section-desc">
            Reserve your lodge amongst Munnar's evergreen slopes. Input your stay dates and special preferences, and our front desk will verify slots instantly.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <motion.div 
              className="booking-form-page-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="form-card-title mb-2">Resort Booking Request</h3>
                    <p className="text-muted small mb-4">Complete the fields below to plan your nature getaway.</p>

                    <form onSubmit={handleFormSubmit} className="booking-form row g-3">
                      {/* Name */}
                      <div className="col-md-6 d-flex flex-column">
                        <label htmlFor="bookName" className="form-label-custom">Full Name</label>
                        <input 
                          type="text" 
                          id="bookName" 
                          name="name"
                          value={form.name} 
                          onChange={handleInputChange} 
                          placeholder="William Wordsworth" 
                          required 
                        />
                      </div>
                      
                      {/* Email */}
                      <div className="col-md-6 d-flex flex-column">
                        <label htmlFor="bookEmail" className="form-label-custom">Email Address</label>
                        <input 
                          type="email" 
                          id="bookEmail" 
                          name="email"
                          value={form.email} 
                          onChange={handleInputChange} 
                          placeholder="william@example.com" 
                          required 
                        />
                      </div>

                      {/* Phone */}
                      <div className="col-12 d-flex flex-column">
                        <label htmlFor="bookPhone" className="form-label-custom">Phone Number</label>
                        <input 
                          type="tel" 
                          id="bookPhone" 
                          name="phone"
                          value={form.phone} 
                          onChange={handleInputChange} 
                          placeholder="+91 98765 43210" 
                          required 
                        />
                      </div>

                      {/* Check In */}
                      <div className="col-md-6 d-flex flex-column">
                        <label htmlFor="bookCheckIn" className="form-label-custom">Check In Date</label>
                        <input 
                          type="date" 
                          id="bookCheckIn" 
                          name="checkIn"
                          value={form.checkIn} 
                          onChange={handleInputChange} 
                          required 
                        />
                      </div>

                      {/* Check Out */}
                      <div className="col-md-6 d-flex flex-column">
                        <label htmlFor="bookCheckOut" className="form-label-custom">Check Out Date</label>
                        <input 
                          type="date" 
                          id="bookCheckOut" 
                          name="checkOut"
                          value={form.checkOut} 
                          onChange={handleInputChange} 
                          required 
                        />
                      </div>

                      {/* Guests Select */}
                      <div className="col-md-6 d-flex flex-column">
                        <label htmlFor="bookGuests" className="form-label-custom">Number of Guests</label>
                        <select 
                          id="bookGuests" 
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
                        <label htmlFor="bookRoom" className="form-label-custom">Cottage Selection</label>
                        <select 
                          id="bookRoom" 
                          name="roomChoice"
                          value={form.roomChoice} 
                          onChange={handleInputChange}
                        >
                          <option>Woodland Heritage Suite</option>
                          <option>Canopy Treehouse Villa</option>
                          <option>Valley Infinity Pool Sanctuary</option>
                        </select>
                      </div>

                      {/* Special Requests */}
                      <div className="col-12 d-flex flex-column">
                        <label htmlFor="bookSpecial" className="form-label-custom">Special Requests</label>
                        <textarea 
                          id="bookSpecial" 
                          name="specialRequests"
                          value={form.specialRequests} 
                          onChange={handleInputChange} 
                          placeholder="E.g. Honeymoon flower decorations, extra bed, airport transfer shuttle request, dietary preferences..." 
                          rows="3"
                        />
                      </div>

                      {/* Submit */}
                      <div className="col-12 mt-4">
                        <button type="submit" className="btn-resort btn-resort-primary w-100 py-3 d-flex align-items-center justify-content-center">
                          <Send size={16} className="me-2" /> Request Availability / Book Now
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
                    <h3 className="text-success fw-bold mb-3">Reservation Request Sent!</h3>
                    <p className="text-muted mb-4 small">
                      Thank you, <strong>{form.name}</strong>. We have logged your request. Our guest relations specialist will email/call you to verify room availability.
                    </p>

                    <div className="p-3 bg-light rounded text-start mb-4 border w-100 small">
                      <span className="fw-bold d-block mb-2 border-bottom pb-1">Enquiry Logs:</span>
                      <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                        <li>📅 Check In: {form.checkIn}</li>
                        <li>📅 Check Out: {form.checkOut}</li>
                        <li>👥 Occupants: {form.guests}</li>
                        <li>🏡 Lodge: {form.roomChoice}</li>
                        <li>📧 Email: {form.email}</li>
                        <li>📞 Phone: {form.phone}</li>
                        {form.specialRequests && <li>✉️ Requests: {form.specialRequests}</li>}
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
                          roomChoice: 'Canopy Treehouse Villa',
                          specialRequests: ''
                        });
                      }}
                    >
                      Book Another Stay
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
