// SpeakersSection.jsx
// Full-width yellow band with grid of 3 speaker cards, using professional headshots
import React from 'react';
import '../styles/SpeakersSection.css';

const speakers = [
  {
    name: 'Leslie Boatwright',
    title: 'Head of Marketing',
    company: 'The Hobbitbox',
    date: 'September 16',
    // Replace below with your own image if needed
    img: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Nicholas Newark',
    title: 'Director of Design',
    company: 'Studio Ralla',
    date: 'September 17',
    img: 'https://randomuser.me/api/portraits/men/47.jpg'
  },
  {
    name: 'Kin Gyun',
    title: 'Founder and CEO',
    company: 'The Treasurebox Online',
    date: 'September 18',
    img: 'https://randomuser.me/api/portraits/men/77.jpg'
  },
];

export default function SpeakersSection() {
  return (
    <section className="speakers-section">
      <h2 className="speakers-title">Our 2025 Keynote Speakers</h2>
      <div className="speakers-grid">
        {speakers.map((sp, i) => (
          <div className="speaker-card" key={sp.name}>
            <img src={sp.img} alt={`Speaker ${sp.name}`} className="speaker-img" />
            <div className="speaker-info">
              <div className="speaker-name">{sp.name}</div>
              <div className="speaker-meta">{sp.title}</div>
              <div className="speaker-meta">{sp.company}</div>
              <div className="speaker-date">{sp.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
