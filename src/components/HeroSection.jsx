// HeroSection.jsx
// Hero split: left text, right image. Vertical centering. Buttons, images, and strict grid per design.
import React from 'react';
import '../styles/HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Selling online is vital to business growth.</h1>
        <span className="hero-subhead">2025 Grow Your e-Commerce Conference</span>
        <div className="hero-details">
          <div>September 16–18, 2025</div>
          <div>Paragon One Plaza and Sky Garden</div>
        </div>
        <button className="cta-button">BOOK NOW FOR EARLY BIRD PRICES</button>
      </div>
      <div className="hero-image-container">
        {/* Replace src with your own group/team image if needed */}
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
          alt="Team in business meeting"
          className="hero-image"
        />
      </div>
    </section>
  );
}
