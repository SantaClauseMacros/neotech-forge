import React from 'react';
import { Link } from 'react-router-dom';

const prebuiltSystems = [
  {
    name: "Gaming Beast",
    specs: {
      cpu: "Intel Core i9-14900K",
      gpu: "NVIDIA GeForce RTX 4090",
      ram: "32GB DDR5-6000",
      storage: "2TB NVMe SSD",
      price: 3999.99
    }
  },
  {
    name: "Content Creator Pro",
    specs: {
      cpu: "AMD Ryzen 9 7950X3D",
      gpu: "NVIDIA GeForce RTX 4080",
      ram: "64GB DDR5-5600",
      storage: "4TB NVMe SSD",
      price: 3499.99
    }
  },
  {
    name: "Balanced Performer",
    specs: {
      cpu: "Intel Core i7-14700K",
      gpu: "NVIDIA GeForce RTX 4070 Ti",
      ram: "32GB DDR5-5200",
      storage: "1TB NVMe SSD",
      price: 2499.99
    }
  },
  {
    name: "Budget Gamer",
    specs: {
      cpu: "AMD Ryzen 5 7600X",
      gpu: "NVIDIA GeForce RTX 4060 Ti",
      ram: "16GB DDR5-4800",
      storage: "1TB NVMe SSD",
      price: 1499.99
    }
  }
];

function Prebuilts() {
  return (
    <div className="container">
      <h1 className="logo">Prebuilt Systems</h1>
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
      
      <Link to="/" className="cta-button">Back to Home</Link>
    </div>
  );
}

export default Prebuilts;
