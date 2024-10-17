import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="container">
      <h1 className="logo">NeoTech Forge</h1>
      <p className="tagline">Forging the Future of Custom PCs</p>
      <div className="feature-list">
        <div className="feature">High-Core Count CPUs</div>
        <div className="feature">Ray-Tracing GPUs</div>
        <div className="feature">Ultra-Fast NVMe SSDs</div>
        <div className="feature">Advanced Liquid Cooling</div>
        <div className="feature">PCIe 5.0 Compatibility</div>
      </div>
      <div className="cta-container">
        <Link to="/pc-part-picker" className="cta-button">Craft Your Custom Rig</Link>
        <Link to="/prebuilt-systems" className="cta-button">Explore Our Prebuilts</Link>
        <Link to="/prebuilts" className="cta-button">Explore Our Prebuilts</Link>
      </div>
    </div>
  );
}

export default Homepage;
