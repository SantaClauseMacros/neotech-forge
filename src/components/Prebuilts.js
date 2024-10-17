import React from 'react';
import { Link } from 'react-router-dom';

const prebuiltSystems = [
  {
    name: "NeoTech Titan",
    specs: {
      cpu: "Intel Core i9-14900K",
      gpu: "NVIDIA GeForce RTX 4090",
      ram: "64GB DDR5-6000",
      storage: "2TB NVMe Gen4 SSD + 4TB HDD",
      price: 4999.99
    }
  },
  {
    name: "Quantum Surge",
    specs: {
      cpu: "AMD Ryzen 9 7950X3D",
      gpu: "AMD Radeon RX 7900 XTX",
      ram: "32GB DDR5-5600",
      storage: "1TB NVMe Gen4 SSD + 2TB HDD",
      price: 3999.99
    }
  },
  {
    name: "Celestial Voyager",
    specs: {
      cpu: "Intel Core i7-14700K",
      gpu: "NVIDIA GeForce RTX 4080",
      ram: "32GB DDR5-5200",
      storage: "1TB NVMe Gen4 SSD",
      price: 2999.99
    }
  },
  {
    name: "Nebula Striker",
    specs: {
      cpu: "AMD Ryzen 7 7800X3D",
      gpu: "NVIDIA GeForce RTX 4070 Ti",
      ram: "32GB DDR5-5200",
      storage: "1TB NVMe Gen4 SSD",
      price: 2499.99
    }
  },
  {
    name: "Cyber Sentinel",
    specs: {
      cpu: "Intel Core i5-14600K",
      gpu: "NVIDIA GeForce RTX 4070",
      ram: "16GB DDR5-5200",
      storage: "1TB NVMe Gen4 SSD",
      price: 1999.99
    }
  },
  {
    name: "Astro Pulse",
    specs: {
      cpu: "AMD Ryzen 5 7600X",
      gpu: "AMD Radeon RX 7700 XT",
      ram: "16GB DDR5-5200",
      storage: "1TB NVMe Gen4 SSD",
      price: 1799.99
    }
  },
  {
    name: "Photon Blitz",
    specs: {
      cpu: "Intel Core i5-14400F",
      gpu: "NVIDIA GeForce RTX 4060 Ti",
      ram: "16GB DDR5-4800",
      storage: "512GB NVMe SSD + 1TB HDD",
      price: 1499.99
    }
  },
  {
    name: "Cosmic Cruiser",
    specs: {
      cpu: "AMD Ryzen 5 5600X",
      gpu: "NVIDIA GeForce RTX 3060",
      ram: "16GB DDR4-3600",
      storage: "1TB NVMe SSD",
      price: 1299.99
    }
  },
  {
    name: "Lunar Lancer",
    specs: {
      cpu: "Intel Core i3-14100F",
      gpu: "NVIDIA GeForce RTX 3050",
      ram: "16GB DDR4-3200",
      storage: "512GB NVMe SSD",
      price: 999.99
    }
  },
  {
    name: "Nova Nexus",
    specs: {
      cpu: "AMD Ryzen 5 5600G",
      gpu: "Integrated Radeon Graphics",
      ram: "16GB DDR4-3200",
      storage: "512GB NVMe SSD",
      price: 799.99
    }
  }
];

function Prebuilts() {
  return (
    <div className="container prebuilts-container">
      <h1 className="logo">NeoTech Forge Prebuilts</h1>
      <p className="tagline">Ready-to-Go High-Performance PCs</p>
      
      <div className="prebuilt-list">
        {prebuiltSystems.map((system, index) => (
          <div key={index} className="prebuilt-item">
            <h2>{system.name}</h2>
            <ul>
              <li>CPU: {system.specs.cpu}</li>
              <li>GPU: {system.specs.gpu}</li>
              <li>RAM: {system.specs.ram}</li>
              <li>Storage: {system.specs.storage}</li>
            </ul>
            <p className="price">Price: ${system.specs.price.toFixed(2)}</p>
            <button className="cta-button">Add to Cart</button>
          </div>
        ))}
      </div>
      
      <Link to="/" className="cta-button back-btn">Back to Home</Link>
    </div>
  );
}

export default Prebuilts;
