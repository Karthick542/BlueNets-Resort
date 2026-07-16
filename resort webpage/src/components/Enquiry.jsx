import React, { useEffect } from 'react';
import { getWhatsAppLink } from '../config';

export default function Enquiry() {
  useEffect(() => {
    // Automatically redirect to the resort's official WhatsApp Click-to-Chat line
    window.location.replace(getWhatsAppLink());
  }, []);

  return (
    <div 
      className="container-resort text-center d-flex flex-column align-items-center justify-content-center" 
      style={{ marginTop: '160px', marginBottom: '100px', minHeight: '300px' }}
    >
      <h2 style={{ color: 'var(--resort-green-deep)', marginBottom: '1rem' }}>Redirecting to WhatsApp...</h2>
      <p style={{ color: 'var(--resort-text-muted)', fontSize: '1.05rem' }}>
        If you are not redirected automatically within a few seconds, please{' '}
        <a 
          href={getWhatsAppLink()} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: 'var(--resort-green-medium)', fontWeight: '700', textDecoration: 'underline' }}
        >
          click here to open the chat
        </a>.
      </p>
    </div>
  );
}
