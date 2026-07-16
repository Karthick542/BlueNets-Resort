import React from 'react';
import { 
  Star, MapPin, Phone, Mail, Flame, Utensils, Compass, Users, Car, Wifi, Clock, ChefHat 
} from 'lucide-react';
import './Footer.css';
import Logo from './Logo';

export default function Footer({ setCurrentView }) {
  const handleFooterLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setCurrentView('home');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <footer className="footer-section">
      <div className="container-resort">
        
        {/* Main Footer columns grid */}
        <div className="row g-5 footer-columns-grid">
          
          {/* Column 1: Brand & Reviews */}
          <div className="col-lg-3 col-md-6 footer-col">
            <h4 className="footer-col-title">BlueNest Resort</h4>
            <p className="footer-brand-desc mb-3">
              Experience luxury forest stays in our unique A-Frame cottages with misty mountain views, campfire nights, and authentic Kerala hospitality in Munnar.
            </p>
            <div className="rating-block d-flex flex-column gap-1">
              <div className="stars-row d-flex align-items-center gap-1 text-warning">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <span className="rating-num ms-1 fw-bold text-white">5.0 / 5</span>
              </div>
              <span className="reviews-count text-white-50 small">120+ Verified Guest Reviews</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6 footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list list-unstyled d-flex flex-column gap-2">
              <li><a href="#home" onClick={(e) => handleFooterLinkClick(e, '#home')}>Home</a></li>
              <li><a href="#rooms" onClick={(e) => handleFooterLinkClick(e, '#rooms')}>Rooms & Suites</a></li>
              <li><a href="#experiences" onClick={(e) => handleFooterLinkClick(e, '#experiences')}>Experiences</a></li>
              <li><a href="#packages" onClick={(e) => handleFooterLinkClick(e, '#packages')}>Packages</a></li>
              <li><a href="#gallery" onClick={(e) => handleFooterLinkClick(e, '#gallery')}>Gallery</a></li>
              <li><a href="#dining" onClick={(e) => handleFooterLinkClick(e, '#dining')}>Dining</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="col-lg-3 col-md-6 footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <div className="footer-contact-list d-flex flex-column gap-3">
              <div className="footer-contact-item d-flex gap-2">
                <MapPin size={18} className="text-success-light flex-shrink-0 mt-1" />
                <div>
                  <span className="d-block text-white small">BlueNest Resort Estate, Pallivasal Cardamom Groves</span>
                  <span className="d-block text-white-50 small">Munnar, Kerala 685612, India</span>
                </div>
              </div>

              <div className="footer-contact-item d-flex gap-2">
                <Phone size={18} className="text-success-light flex-shrink-0 mt-1" />
                <div>
                  <span className="d-block text-white small">+91 88482 49652</span>
                  <span className="d-block text-white-50 small">24/7 Support</span>
                </div>
              </div>

              <div className="footer-contact-item d-flex gap-2">
                <Mail size={18} className="text-success-light flex-shrink-0 mt-1" />
                <div>
                  <span className="d-block text-white small">reservations@bluenestmunnar.com</span>
                  <span className="d-block text-white-50 small">Email us anytime</span>
                </div>
              </div>

              <div className="footer-contact-item d-flex gap-2">
                {/* Inline SVG for Instagram */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success-light flex-shrink-0 mt-1"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <div>
                  <span className="d-block text-white small">@bluenestresort</span>
                  <span className="d-block text-white-50 small">Follow us on Instagram</span>
                </div>
              </div>

              <div className="footer-contact-item d-flex gap-2">
                {/* Inline SVG for Facebook */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success-light flex-shrink-0 mt-1"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <div>
                  <span className="d-block text-white small">@bluenestresort</span>
                  <span className="d-block text-white-50 small">Like us on Facebook</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Our Services */}
          <div className="col-lg-4 col-md-6 footer-col">
            <h4 className="footer-col-title">Our Services</h4>
            <div className="footer-services-grid">
              <div className="service-item d-flex align-items-center gap-2">
                <Flame size={14} className="text-success-light" /> <span>Free Fire Camp Nights</span>
              </div>
              <div className="service-item d-flex align-items-center gap-2">
                <Utensils size={14} className="text-success-light" /> <span>Authentic South Indian Cuisine</span>
              </div>
              <div className="service-item d-flex align-items-center gap-2">
                <Compass size={14} className="text-success-light" /> <span>Tea Plantation Tours</span>
              </div>
              <div className="service-item d-flex align-items-center gap-2">
                <Users size={14} className="text-success-light" /> <span>Expert Tourist Guides</span>
              </div>
              <div className="service-item d-flex align-items-center gap-2">
                <Car size={14} className="text-success-light" /> <span>Free Parking</span>
              </div>
              <div className="service-item d-flex align-items-center gap-2">
                <Wifi size={14} className="text-success-light" /> <span>Complimentary WiFi</span>
              </div>
              <div className="service-item d-flex align-items-center gap-2">
                <Clock size={14} className="text-success-light" /> <span>24/7 Room Service</span>
              </div>
              <div className="service-item d-flex align-items-center gap-2">
                <ChefHat size={14} className="text-success-light" /> <span>Kitchenette & Open Space Cooking</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="footer-bottom-bar d-flex justify-content-between align-items-center mt-5 pt-4">
          <div className="copyright-text small text-white-50">
            &copy; {new Date().getFullYear()} BlueNest Resort All rights reserved. | Gudarala Rd, Mattupetty, Munnar, Kerala 685612  
          </div>
          <a href="#contact" onClick={(e) => handleFooterLinkClick(e, '#contact')} className="btn-footer-cta btn-resort">
            Contact Us Today
          </a>
        </div>

      </div>
    </footer>
  );
}

