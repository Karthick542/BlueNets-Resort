import React from 'react';
import logoImg from '../assets/logo/logo.png';

export default function Logo({ size = 48, className = '' }) {
  return (
    <div className={`d-flex align-items-center ${className}`} style={{ userSelect: 'none' }}>
      <img 
        src={logoImg} 
        alt="BlueNest Resort & Homestay Logo" 
        style={{ 
          height: `${size}px`, 
          width: 'auto',
          objectFit: 'contain',
          display: 'block'
        }} 
      />
    </div>
  );
}
