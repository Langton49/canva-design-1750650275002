// ContactSection.jsx
// Mirrored split: left text block, right image. Similar style as hero
import React from 'react';
import '../styles/ContactSection.css';

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2>Reach Out</h2>
        <div className="contact-details">
          <div>Conference Secretariat</div>
          <div>163 Woodlands Place</div>
          <div>Algies Bay, Rodney 0920</div>
          <br />
          <div>123-456-7890</div>
          <div>hello@reallygreatsite.com</div>
          <div>@reallygreatsite</div>
        </div>
        <button className="cta-button">RESERVE YOUR SEAT</button>
      </div>
      <div className="contact-image-container">
        {/* Replace src with your own modern office group shot if desired */}
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
          alt="Modern office meeting"
          className="contact-image"
        />
      </div>
    </section>
  );
}
