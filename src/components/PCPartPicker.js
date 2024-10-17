import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const pcParts = {
  // Your entire pcParts object goes here
  // (I'm not including it here due to character limits, but it should be the same as what you provided)
};

function PCPartPicker() {
  const [selectedParts, setSelectedParts] = useState({
    cpu: '',
    gpu: '',
    motherboard: '',
    ram: '',
    storage: '',
    psu: '',
    cooler: '',
    case: '',
    fans: ''
  });

  const handlePartSelect = (partType, partName) => {
    setSelectedParts(prev => ({ ...prev, [partType]: partName }));
  };

  const totalCost = useMemo(() => {
    return Object.entries(selectedParts).reduce((total, [partType, partName]) => {
      const part = pcParts[partType].find(p => p.name === partName);
      return total + (part ? part.price : 0);
    }, 0);
  }, [selectedParts]);

  return (
    <div className="container">
      <h1 className="logo">PC Part Picker</h1>
      <p className="tagline">Build Your Dream Machine</p>
      
      {Object.entries(pcParts).map(([partType, parts]) => (
        <div key={partType} className="part-selector">
          <label htmlFor={partType}>{partType.toUpperCase()}:</label>
          <select
            id={partType}
            value={selectedParts[partType]}
            onChange={(e) => handlePartSelect(partType, e.target.value)}
          >
            <option value="">Select {partType}</option>
            {parts.map(part => (
              <option key={part.name} value={part.name}>
                {part.name} - ${part.price}
              </option>
            ))}
          </select>
        </div>
      ))}
      
      <div className="total-cost">
        <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
      </div>
      
      <Link to="/" className="cta-button">Back to Home</Link>
    </div>
  );
}

export default PCPartPicker;
