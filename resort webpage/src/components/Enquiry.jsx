import React, { useState, useEffect } from 'react';
import { User, Phone, Send, MessageSquare } from 'lucide-react';
import { RESORT_CONTACT } from '../config';
import './Enquiry.css';

// Options matching the radio list in the model mockup
const interestOptions = [
  { label: "A-Frame Cottages", value: "A-Frame Cottages" },
  { label: "Budget Rooms", value: "Budget Rooms" },
  { label: "Standard Rooms", value: "Standard Rooms" },
  { label: "Premium Rooms", value: "Premium Rooms" },
  { label: "Family Stay", value: "Family Stay" },
  { label: "Honeymoon / Couple Stay", value: "Honeymoon / Couple Stay" },
  { label: "Experiences & Activities", value: "Experiences & Activities" },
  { label: "Packages", value: "Packages" }
];

export default function Enquiry({ selectedPackageChoice, setSelectedPackageChoice }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    interest: 'A-Frame Cottages',
    message: ''
  });

  // Pre-fill package details if navigating from package selection cards
  useEffect(() => {
    if (selectedPackageChoice) {
      let matchedInterest = 'Packages';
      if (selectedPackageChoice.toLowerCase().includes('honeymoon')) {
        matchedInterest = 'Honeymoon / Couple Stay';
      }

      setForm(prev => ({
        ...prev,
        interest: matchedInterest,
        message: `Hello, I'm interested in the "${selectedPackageChoice}" package. Please share details and availability.`
      }));
    }
  }, [selectedPackageChoice]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (value) => {
    setForm(prev => ({
      ...prev,
      interest: value
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Format enquiry message for WhatsApp delivery
    const textMessage = `Hello,

I would like to enquire about resort stays at BlueNest Resort, Munnar.

Please find my enquiry details below:

\u{1F464} Guest Name: ${form.name}
\u{1F4DE} Phone Number: ${form.phone}
\u{1F6CF}\u{FE0F} Interested In: ${form.interest}
\u{1F4AC} Message/Requests: ${form.message || 'No additional message'}

Kindly share availability and pricing details.

Thank you.`;

    // Encode text and direct user to resort's WhatsApp desk
    const whatsappUrl = `https://wa.me/${RESORT_CONTACT.whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Reset parent choice state on successful trigger
    if (setSelectedPackageChoice) {
      setSelectedPackageChoice('');
    }
  };

  return (
    <section className="section-padding enquiry-section">
      <div className="container-resort">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            
            {/* Main Enquiry Form Card modeled after user spec screenshot */}
            <div className="enquiry-form-page-card">
              <h2 className="enquiry-card-title text-center">Send an Enquiry to BlueNest</h2>
              
              <form onSubmit={handleFormSubmit} className="enquiry-whatsapp-form">
                
                {/* Full Name field with left user icon */}
                <div className="form-group-custom">
                  <label htmlFor="enqName" className="form-label-custom">Full Name *</label>
                  <div className="input-group-custom">
                    <span className="input-group-icon"><User size={18} /></span>
                    <input 
                      type="text" 
                      id="enqName"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required 
                    />
                  </div>
                </div>

                {/* Phone Number field with left phone icon */}
                <div className="form-group-custom">
                  <label htmlFor="enqPhone" className="form-label-custom">Phone Number *</label>
                  <div className="input-group-custom">
                    <span className="input-group-icon"><Phone size={18} /></span>
                    <input 
                      type="tel" 
                      id="enqPhone"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      placeholder="9876543210"
                      required 
                    />
                  </div>
                </div>

                {/* Radio list grid for 'I'm Interested In' selection */}
                <div className="form-group-custom">
                  <label className="form-label-custom">I'm Interested In</label>
                  <div className="interest-radio-grid">
                    {interestOptions.map((opt, idx) => (
                      <label key={idx} className="radio-label-custom">
                        <input 
                          type="radio" 
                          name="interest"
                          value={opt.value}
                          checked={form.interest === opt.value}
                          onChange={() => handleRadioChange(opt.value)}
                        />
                        <span className="radio-checkmark"></span>
                        <span className="radio-text">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message (Optional) field */}
                <div className="form-group-custom">
                  <label htmlFor="enqMsg" className="form-label-custom">Message (Optional)</label>
                  <textarea 
                    id="enqMsg" 
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    placeholder="Travel dates, number of guests, special requests..."
                    rows="4"
                  />
                </div>

                {/* Submit Action Button formatted like the model brown button */}
                <button type="submit" className="btn-whatsapp-submit">
                  <MessageSquare size={18} className="me-2" /> Send Enquiry via WhatsApp
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
