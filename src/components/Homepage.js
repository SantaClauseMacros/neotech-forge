import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="container">
      <h1 className="logo">NeoTech Forge</h1>
      <p className="tagline">Forging the Future of Custom PCs</p>
      <ul className="feature-list">
        <li>High-Core Count CPUs</li>
        <li>Ray-Tracing GPUs</li>
        <li>Ultra-Fast NVMe SSDs</li>
        <li>Advanced Liquid Cooling</li>
        <li>PCIe 5.0 Compatibility</li>
      </ul>
      <div className="cta-container">
        <Link to="/custom" className="cta-button">Craft Your Custom Rig</Link>
        <Link to="/prebuilts" className="cta-button">Explore Our Prebuilts</Link>
      </div>
    </div>
  );
}

export default Homepage;
