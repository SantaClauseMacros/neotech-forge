import React, { useState, useMemo } from 'react';
import { ChevronDown, Cpu, HardDrive, MemoryStick, Monitor, Zap, Fan, Package } from 'lucide-react';

const pcParts = {
  cpu: [
    // Intel i5 Series
    { name: 'Intel Core i5-10400', socket: 'LGA1200', ramType: 'DDR4', price: 149.99 },
    { name: 'Intel Core i5-10400F', socket: 'LGA1200', ramType: 'DDR4', price: 139.99 },
    { name: 'Intel Core i5-10500', socket: 'LGA1200', ramType: 'DDR4', price: 159.99 },
    { name: 'Intel Core i5-10600', socket: 'LGA1200', ramType: 'DDR4', price: 169.99 },
    { name: 'Intel Core i5-10600K', socket: 'LGA1200', ramType: 'DDR4', price: 189.99 },
    { name: 'Intel Core i5-10600KF', socket: 'LGA1200', ramType: 'DDR4', price: 179.99 },
    { name: 'Intel Core i5-11400', socket: 'LGA1200', ramType: 'DDR4', price: 159.99 },
    { name: 'Intel Core i5-11400F', socket: 'LGA1200', ramType: 'DDR4', price: 149.99 },
    { name: 'Intel Core i5-11500', socket: 'LGA1200', ramType: 'DDR4', price: 169.99 },
    { name: 'Intel Core i5-11600', socket: 'LGA1200', ramType: 'DDR4', price: 179.99 },
    { name: 'Intel Core i5-11600K', socket: 'LGA1200', ramType: 'DDR4', price: 199.99 },
    { name: 'Intel Core i5-11600KF', socket: 'LGA1200', ramType: 'DDR4', price: 189.99 },
    { name: 'Intel Core i5-12400', socket: 'LGA1700', ramType: 'DDR5', price: 179.99 },
    { name: 'Intel Core i5-12400F', socket: 'LGA1700', ramType: 'DDR5', price: 169.99 },
    { name: 'Intel Core i5-12500', socket: 'LGA1700', ramType: 'DDR5', price: 189.99 },
    { name: 'Intel Core i5-12600', socket: 'LGA1700', ramType: 'DDR5', price: 199.99 },
    { name: 'Intel Core i5-12600K', socket: 'LGA1700', ramType: 'DDR5', price: 219.99 },
    { name: 'Intel Core i5-12600KF', socket: 'LGA1700', ramType: 'DDR5', price: 209.99 },
    { name: 'Intel Core i5-13400', socket: 'LGA1700', ramType: 'DDR5', price: 209.99 },
    { name: 'Intel Core i5-13400F', socket: 'LGA1700', ramType: 'DDR5', price: 199.99 },
    { name: 'Intel Core i5-13500', socket: 'LGA1700', ramType: 'DDR5', price: 219.99 },
    { name: 'Intel Core i5-13600', socket: 'LGA1700', ramType: 'DDR5', price: 229.99 },
    { name: 'Intel Core i5-13600K', socket: 'LGA1700', ramType: 'DDR5', price: 249.99 },
    { name: 'Intel Core i5-13600KF', socket: 'LGA1700', ramType: 'DDR5', price: 239.99 },
    { name: 'Intel Core i5-14400', socket: 'LGA1700', ramType: 'DDR5', price: 229.99 },
    { name: 'Intel Core i5-14400F', socket: 'LGA1700', ramType: 'DDR5', price: 219.99 },
    { name: 'Intel Core i5-14500', socket: 'LGA1700', ramType: 'DDR5', price: 239.99 },
    { name: 'Intel Core i5-14600K', socket: 'LGA1700', ramType: 'DDR5', price: 269.99 },
    { name: 'Intel Core i5-14600KF', socket: 'LGA1700', ramType: 'DDR5', price: 259.99 },
    // Intel i7 Series
    { name: 'Intel Core i7-10700', socket: 'LGA1200', ramType: 'DDR4', price: 259.99 },
    { name: 'Intel Core i7-10700F', socket: 'LGA1200', ramType: 'DDR4', price: 249.99 },
    { name: 'Intel Core i7-10700K', socket: 'LGA1200', ramType: 'DDR4', price: 279.99 },
    { name: 'Intel Core i7-10700KF', socket: 'LGA1200', ramType: 'DDR4', price: 269.99 },
    { name: 'Intel Core i7-11700', socket: 'LGA1200', ramType: 'DDR4', price: 269.99 },
    { name: 'Intel Core i7-11700F', socket: 'LGA1200', ramType: 'DDR4', price: 259.99 },
    { name: 'Intel Core i7-11700K', socket: 'LGA1200', ramType: 'DDR4', price: 289.99 },
    { name: 'Intel Core i7-11700KF', socket: 'LGA1200', ramType: 'DDR4', price: 279.99 },
    { name: 'Intel Core i7-12700', socket: 'LGA1700', ramType: 'DDR5', price: 329.99 },
    { name: 'Intel Core i7-12700F', socket: 'LGA1700', ramType: 'DDR5', price: 319.99 },
    { name: 'Intel Core i7-12700K', socket: 'LGA1700', ramType: 'DDR5', price: 349.99 },
    { name: 'Intel Core i7-12700KF', socket: 'LGA1700', ramType: 'DDR5', price: 339.99 },
    { name: 'Intel Core i7-13700', socket: 'LGA1700', ramType: 'DDR5', price: 369.99 },
    { name: 'Intel Core i7-13700F', socket: 'LGA1700', ramType: 'DDR5', price: 359.99 },
    { name: 'Intel Core i7-13700K', socket: 'LGA1700', ramType: 'DDR5', price: 389.99 },
    { name: 'Intel Core i7-13700KF', socket: 'LGA1700', ramType: 'DDR5', price: 379.99 },
    { name: 'Intel Core i7-14700', socket: 'LGA1700', ramType: 'DDR5', price: 399.99 },
    { name: 'Intel Core i7-14700F', socket: 'LGA1700', ramType: 'DDR5', price: 389.99 },
    { name: 'Intel Core i7-14700K', socket: 'LGA1700', ramType: 'DDR5', price: 419.99 },
    { name: 'Intel Core i7-14700KF', socket: 'LGA1700', ramType: 'DDR5', price: 409.99 },
    // Intel i9 Series
    { name: 'Intel Core i9-10900', socket: 'LGA1200', ramType: 'DDR4', price: 399.99 },
    { name: 'Intel Core i9-10900F', socket: 'LGA1200', ramType: 'DDR4', price: 389.99 },
    { name: 'Intel Core i9-10900K', socket: 'LGA1200', ramType: 'DDR4', price: 419.99 },
    { name: 'Intel Core i9-10900KF', socket: 'LGA1200', ramType: 'DDR4', price: 409.99 },
    { name: 'Intel Core i9-11900', socket: 'LGA1200', ramType: 'DDR4', price: 419.99 },
    { name: 'Intel Core i9-11900F', socket: 'LGA1200', ramType: 'DDR4', price: 409.99 },
    { name: 'Intel Core i9-11900K', socket: 'LGA1200', ramType: 'DDR4', price: 439.99 },
    { name: 'Intel Core i9-11900KF', socket: 'LGA1200', ramType: 'DDR4', price: 429.99 },
    { name: 'Intel Core i9-12900', socket: 'LGA1700', ramType: 'DDR5', price: 489.99 },
    { name: 'Intel Core i9-12900F', socket: 'LGA1700', ramType: 'DDR5', price: 479.99 },
    { name: 'Intel Core i9-12900K', socket: 'LGA1700', ramType: 'DDR5', price: 509.99 },
    { name: 'Intel Core i9-12900KF', socket: 'LGA1700', ramType: 'DDR5', price: 499.99 },
    { name: 'Intel Core i9-13900', socket: 'LGA1700', ramType: 'DDR5', price: 549.99 },
    { name: 'Intel Core i9-13900F', socket: 'LGA1700', ramType: 'DDR5', price: 539.99 },
    { name: 'Intel Core i9-13900K', socket: 'LGA1700', ramType: 'DDR5', price: 569.99 },
    { name: 'Intel Core i9-13900KF', socket: 'LGA1700', ramType: 'DDR5', price: 559.99 },
    { name: 'Intel Core i9-14900', socket: 'LGA1700', ramType: 'DDR5', price: 589.99 },
    { name: 'Intel Core i9-14900F', socket: 'LGA1700', ramType: 'DDR5', price: 579.99 },
    { name: 'Intel Core i9-14900K', socket: 'LGA1700', ramType: 'DDR5', price: 609.99 },
    { name: 'Intel Core i9-14900KF', socket: 'LGA1700', ramType: 'DDR5', price: 599.99 },
    // AMD Ryzen 5 Series
    { name: 'AMD Ryzen 5 3600', socket: 'AM4', ramType: 'DDR4', price: 169.99 },
    { name: 'AMD Ryzen 5 3600X', socket: 'AM4', ramType: 'DDR4', price: 189.99 },
    { name: 'AMD Ryzen 5 5600', socket: 'AM4', ramType: 'DDR4', price: 179.99 },
    { name: 'AMD Ryzen 5 5600X', socket: 'AM4', ramType: 'DDR4', price: 199.99 },
    { name: 'AMD Ryzen 5 5600G', socket: 'AM4', ramType: 'DDR4', price: 189.99 },
    { name: 'AMD Ryzen 5 7600', socket: 'AM5', ramType: 'DDR5', price: 229.99 },
    { name: 'AMD Ryzen 5 7600X', socket: 'AM5', ramType: 'DDR5', price: 249.99 },
    { name: 'AMD Ryzen 5 7600G', socket: 'AM5', ramType: 'DDR5', price: 239.99 },
    // AMD Ryzen 7 Series
    { name: 'AMD Ryzen 7 3700X', socket: 'AM4', ramType: 'DDR4', price: 279.99 },
    { name: 'AMD Ryzen 7 3800X', socket: 'AM4', ramType: 'DDR4', price: 299.99 },
    { name: 'AMD Ryzen 7 5700G', socket: 'AM4', ramType: 'DDR4', price: 289.99 },
    { name: 'AMD Ryzen 7 5800', socket: 'AM4', ramType: 'DDR4', price: 309.99 },
    { name: 'AMD Ryzen 7 5800X', socket: 'AM4', ramType: 'DDR4', price: 329.99 },
    { name: 'AMD Ryzen 7 5800X3D', socket: 'AM4', ramType: 'DDR4', price: 389.99 },
    { name: 'AMD Ryzen 7 7700', socket: 'AM5', ramType: 'DDR5', price: 349.99 },
    { name: 'AMD Ryzen 7 7700X', socket: 'AM5', ramType: 'DDR5', price: 369.99 },
    { name: 'AMD Ryzen 7 7700G', socket: 'AM5', ramType: 'DDR5', price: 359.99 },
    { name: 'AMD Ryzen 7 7800X3D', socket: 'AM5', ramType: 'DDR5', price: 429.99 },
    // AMD Ryzen 9 Series
    { name: 'AMD Ryzen 9 3900X', socket: 'AM4', ramType: 'DDR4', price: 399.99 },
    { name: 'AMD Ryzen 9 3950X', socket: 'AM4', ramType: 'DDR4', price: 449.99 },
    { name: 'AMD Ryzen 9 5900X', socket: 'AM4', ramType: 'DDR4', price: 449.99 },
    { name: 'AMD Ryzen 9 5950X', socket: 'AM4', ramType: 'DDR4', price: 549.99 },
    { name: 'AMD Ryzen 9 7900', socket: 'AM5', ramType: 'DDR5', price: 499.99 },
    { name: 'AMD Ryzen 9 7900X', socket: 'AM5', ramType: 'DDR5', price: 549.99 },
    { name: 'AMD Ryzen 9 7900X3D', socket: 'AM5', ramType: 'DDR5', price: 599.99 },
    { name: 'AMD Ryzen 9 7900X3D', socket: 'AM5', ramType: 'DDR5', price: 599.99 },
    { name: 'AMD Ryzen 9 7950X', socket: 'AM5', ramType: 'DDR5', price: 699.99 },
    { name: 'AMD Ryzen 9 7950X3D', socket: 'AM5', ramType: 'DDR5', price: 749.99 },
  ],
gpu: [
    // NVIDIA GTX 16 Series
    { name: 'NVIDIA GeForce GTX 1650', price: 149.99 },
    { name: 'NVIDIA GeForce GTX 1650 Super', price: 169.99 },
    { name: 'NVIDIA GeForce GTX 1660', price: 219.99 },
    { name: 'NVIDIA GeForce GTX 1660 Super', price: 239.99 },
    { name: 'NVIDIA GeForce GTX 1660 Ti', price: 279.99 },
    // NVIDIA RTX 20 Series
    { name: 'NVIDIA GeForce RTX 2060', price: 299.99 },
    { name: 'NVIDIA GeForce RTX 2060 Super', price: 399.99 },
    { name: 'NVIDIA GeForce RTX 2070', price: 499.99 },
    { name: 'NVIDIA GeForce RTX 2070 Super', price: 599.99 },
    { name: 'NVIDIA GeForce RTX 2080', price: 699.99 },
    { name: 'NVIDIA GeForce RTX 2080 Super', price: 799.99 },
    { name: 'NVIDIA GeForce RTX 2080 Ti', price: 999.99 },
    // NVIDIA RTX 30 Series
    { name: 'NVIDIA GeForce RTX 3050', price: 249.99 },
    { name: 'NVIDIA GeForce RTX 3060', price: 329.99 },
    { name: 'NVIDIA GeForce RTX 3060 Ti', price: 399.99 },
    { name: 'NVIDIA GeForce RTX 3070', price: 499.99 },
    { name: 'NVIDIA GeForce RTX 3070 Ti', price: 599.99 },
    { name: 'NVIDIA GeForce RTX 3080 10GB', price: 699.99 },
    { name: 'NVIDIA GeForce RTX 3080 12GB', price: 749.99 },
    { name: 'NVIDIA GeForce RTX 3080 Ti', price: 1199.99 },
    { name: 'NVIDIA GeForce RTX 3090', price: 1499.99 },
    { name: 'NVIDIA GeForce RTX 3090 Ti', price: 1999.99 },
    // NVIDIA RTX 40 Series
    { name: 'NVIDIA GeForce RTX 4060', price: 299.99 },
    { name: 'NVIDIA GeForce RTX 4060 Ti 8GB', price: 399.99 },
    { name: 'NVIDIA GeForce RTX 4060 Ti 16GB', price: 449.99 },
    { name: 'NVIDIA GeForce RTX 4070', price: 599.99 },
    { name: 'NVIDIA GeForce RTX 4070 Ti', price: 799.99 },
    { name: 'NVIDIA GeForce RTX 4080', price: 1199.99 },
    { name: 'NVIDIA GeForce RTX 4090', price: 1599.99 },
  ],
  motherboard: [
    // Intel LGA1200 Motherboards
    { name: 'ASUS ROG Maximus XII Hero', socket: 'LGA1200', ramType: 'DDR4', price: 399.99 },
    { name: 'MSI MPG Z490 Gaming Carbon WiFi', socket: 'LGA1200', ramType: 'DDR4', price: 269.99 },
    { name: 'Gigabyte Z490 AORUS Elite AC', socket: 'LGA1200', ramType: 'DDR4', price: 219.99 },
    { name: 'ASRock Z490 Phantom Gaming 4', socket: 'LGA1200', ramType: 'DDR4', price: 159.99 },
    // Intel LGA1700 Motherboards
    { name: 'ASUS ROG Maximus Z690 Hero', socket: 'LGA1700', ramType: 'DDR5', price: 599.99 },
    { name: 'MSI MPG Z690 Carbon WiFi', socket: 'LGA1700', ramType: 'DDR5', price: 399.99 },
    { name: 'Gigabyte Z690 AORUS Pro', socket: 'LGA1700', ramType: 'DDR5', price: 329.99 },
    { name: 'ASRock Z690 Steel Legend', socket: 'LGA1700', ramType: 'DDR5', price: 269.99 },
    // AMD AM4 Motherboards
    { name: 'ASUS ROG Crosshair VIII Dark Hero', socket: 'AM4', ramType: 'DDR4', price: 449.99 },
    { name: 'MSI MPG B550 Gaming Edge WiFi', socket: 'AM4', ramType: 'DDR4', price: 179.99 },
    { name: 'Gigabyte X570 AORUS Elite', socket: 'AM4', ramType: 'DDR4', price: 199.99 },
    { name: 'ASRock B550M Steel Legend', socket: 'AM4', ramType: 'DDR4', price: 139.99 },
    // AMD AM5 Motherboards
    { name: 'ASUS ROG Crosshair X670E Hero', socket: 'AM5', ramType: 'DDR5', price: 699.99 },
    { name: 'MSI MEG X670E ACE', socket: 'AM5', ramType: 'DDR5', price: 699.99 },
    { name: 'Gigabyte X670 AORUS Elite AX', socket: 'AM5', ramType: 'DDR5', price: 289.99 },
    { name: 'ASRock X670E Steel Legend', socket: 'AM5', ramType: 'DDR5', price: 279.99 },
  ],
  ram: [
    // DDR4 RAM
    { name: 'Corsair Vengeance LPX 16GB (2x8GB) DDR4-3200', type: 'DDR4', price: 79.99 },
    { name: 'G.Skill Ripjaws V 32GB (2x16GB) DDR4-3600', type: 'DDR4', price: 129.99 },
    { name: 'Crucial Ballistix 64GB (2x32GB) DDR4-3600', type: 'DDR4', price: 269.99 },
    { name: 'Kingston HyperX Fury 16GB (2x8GB) DDR4-3200', type: 'DDR4', price: 84.99 },
    // DDR5 RAM
    { name: 'Corsair Dominator Platinum RGB 32GB (2x16GB) DDR5-5200', type: 'DDR5', price: 249.99 },
    { name: 'G.Skill Trident Z5 RGB 32GB (2x16GB) DDR5-6000', type: 'DDR5', price: 279.99 },
    { name: 'Crucial 32GB (2x16GB) DDR5-4800', type: 'DDR5', price: 189.99 },
    { name: 'Kingston Fury Beast 64GB (2x32GB) DDR5-5200', type: 'DDR5', price: 389.99 },
  ],
  storage: [
    // SATA SSDs
    { name: 'Samsung 870 EVO 1TB SATA SSD', price: 119.99 },
    { name: 'Crucial MX500 2TB SATA SSD', price: 199.99 },
    { name: 'Western Digital Blue 4TB SATA SSD', price: 399.99 },
    // NVMe SSDs
    { name: 'Samsung 980 Pro 1TB NVMe SSD', price: 179.99 },
    { name: 'Western Digital Black SN850X 2TB NVMe SSD', price: 249.99 },
    { name: 'Corsair MP600 Pro XT 4TB NVMe SSD', price: 649.99 },
    // HDDs
    { name: 'Seagate BarraCuda 2TB 7200RPM HDD', price: 54.99 },
    { name: 'Western Digital Black 4TB 7200RPM HDD', price: 149.99 },
    { name: 'Toshiba X300 8TB 7200RPM HDD', price: 209.99 },
  ],
  psu: [
    { name: 'Corsair RM750x 750W 80+ Gold', price: 129.99 },
    { name: 'EVGA SuperNOVA 850 G5 850W 80+ Gold', price: 149.99 },
    { name: 'Seasonic FOCUS GX-1000 1000W 80+ Gold', price: 199.99 },
    { name: 'be quiet! Straight Power 11 750W 80+ Platinum', price: 169.99 },
    { name: 'Thermaltake Toughpower GF1 850W 80+ Gold', price: 139.99 },
  ],
  cooler: [
    // Air Coolers
    { name: 'Noctua NH-D15 chromax.black', price: 89.99 },
    { name: 'be quiet! Dark Rock Pro 4', price: 89.90 },
    { name: 'Scythe Fuma 2 Rev.B', price: 59.99 },
    { name: 'Cooler Master Hyper 212 EVO V2', price: 39.99 },
    // AIO Liquid Coolers
    { name: 'NZXT Kraken X53 240mm', price: 129.99 },
    { name: 'Corsair iCUE H100i ELITE CAPELLIX 240mm', price: 149.99 },
    { name: 'Arctic Liquid Freezer II 280mm', price: 119.99 },
    { name: 'Lian Li Galahad AIO 360 RGB', price: 159.99 },
  ],
  case: [
    { name: 'Phanteks Eclipse P300A', price: 59.99 },
    { name: 'Corsair 4000D Airflow', price: 94.99 },
    { name: 'Lian Li PC-O11 Dynamic', price: 149.99 },
    { name: 'Fractal Design Meshify C', price: 89.99 },
    { name: 'NZXT H510 Flow', price: 89.99 },
  ],
};
const PartSelector = ({ icon: Icon, label, options, selected, onSelect }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-blue-300 mb-1">{label}</label>
    <div className="relative">
      <select
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
        className="block appearance-none w-full bg-gray-800 border border-gray-700 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name} - ${option.price.toFixed(2)}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
        <ChevronDown size={20} />
      </div>
    </div>
  </div>
);

const PCPartsSelector = () => {
  const [selectedParts, setSelectedParts] = useState({
    cpu: '',
    motherboard: '',
    ram: '',
    gpu: '',
    storage: '',
    psu: '',
    cooler: '',
    case: '',
  });

  const handlePartSelect = (part, value) => {
    setSelectedParts((prev) => ({ ...prev, [part]: value }));
    
    // Reset incompatible parts
    if (part === 'cpu') {
      setSelectedParts((prev) => ({ ...prev, motherboard: '', ram: '' }));
    }
  };

  const getCompatibleParts = (partType) => {
    const selectedCPU = pcParts.cpu.find((cpu) => cpu.name === selectedParts.cpu);
    
    if (!selectedCPU) return pcParts[partType];
    
    switch (partType) {
      case 'motherboard':
        return pcParts.motherboard.filter(
          (mb) => mb.socket === selectedCPU.socket && mb.ramType === selectedCPU.ramType
        );
      case 'ram':
        return pcParts.ram.filter((ram) => ram.type === selectedCPU.ramType);
      default:
        return pcParts[partType];
    }
  };

  const totalCost = useMemo(() => {
    return Object.entries(selectedParts).reduce((total, [part, selectedName]) => {
      const selectedPart = pcParts[part].find((p) => p.name === selectedName);
      return total + (selectedPart ? selectedPart.price : 0);
    }, 0);
  }, [selectedParts]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        Futuristic PC Parts Selector
      </h1>
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PartSelector
            icon={Cpu}
            label="CPU"
            options={pcParts.cpu}
            selected={selectedParts.cpu}
            onSelect={(value) => handlePartSelect('cpu', value)}
          />
          <PartSelector
            icon={Monitor}
            label="Motherboard"
            options={getCompatibleParts('motherboard')}
            selected={selectedParts.motherboard}
            onSelect={(value) => handlePartSelect('motherboard', value)}
          />
          <PartSelector
            icon={MemoryStick}
            label="RAM"
            options={getCompatibleParts('ram')}
            selected={selectedParts.ram}
            <PartSelector
            icon={MemoryStick}
            label="RAM"
            options={getCompatibleParts('ram')}
            selected={selectedParts.ram}
            onSelect={(value) => handlePartSelect('ram', value)}
          />
          <PartSelector
            icon={Cpu}
            label="GPU"
            options={pcParts.gpu}
            selected={selectedParts.gpu}
            onSelect={(value) => handlePartSelect('gpu', value)}
          />
          <PartSelector
            icon={HardDrive}
            label="Storage"
            options={pcParts.storage}
            selected={selectedParts.storage}
            onSelect={(value) => handlePartSelect('storage', value)}
          />
          <PartSelector
            icon={Zap}
            label="Power Supply"
            options={pcParts.psu}
            selected={selectedParts.psu}
            onSelect={(value) => handlePartSelect('psu', value)}
          />
          <PartSelector
            icon={Fan}
            label="CPU Cooler"
            options={pcParts.cooler}
            selected={selectedParts.cooler}
            onSelect={(value) => handlePartSelect('cooler', value)}
          />
          <PartSelector
            icon={Package}
            label="Case"
            options={pcParts.case}
            selected={selectedParts.case}
            onSelect={(value) => handlePartSelect('case', value)}
          />
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Total Cost</h2>
          <p className="text-3xl font-bold text-green-500">${totalCost.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default PCPartsSelector;
