import React, { useState, useMemo } from 'react';
import { ChevronDown, Cpu, HardDrive, MemoryStick, Monitor, Zap, Fan, Package, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

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
    { name: 'ASUS ROG Crosshair VIII Hero', socket: 'AM4', ramType: 'DDR4', price: 250 },
    { name: 'MSI MAG B550 TOMAHAWK', socket: 'AM4', ramType: 'DDR4', price: 150 },
    { name: 'Gigabyte Z490 AORUS Master', socket: 'LGA1200', ramType: 'DDR4', price: 350 },
    { name: 'ASRock B450 Steel Legend', socket: 'AM4', ramType: 'DDR4', price: 120 },
    { name: 'ASUS ROG Maximus XI Hero', socket: 'LGA1151', ramType: 'DDR4', price: 220 },
    { name: 'MSI MEG Z490 GODLIKE', socket: 'LGA1200', ramType: 'DDR4', price: 600 },
    { name: 'ASUS TUF Gaming X570-Plus', socket: 'AM4', ramType: 'DDR4', price: 180 },
    { name: 'Gigabyte B450 AORUS Elite', socket: 'AM4', ramType: 'DDR4', price: 120 },
    { name: 'ASRock X570 Taichi', socket: 'AM4', ramType: 'DDR4', price: 270 },
    { name: 'EVGA Z490 DARK', socket: 'LGA1200', ramType: 'DDR4', price: 400 },
    { name: 'ASUS ROG Zenith II Extreme Alpha', socket: 'sTRX4', ramType: 'DDR4', price: 700 },
    { name: 'MSI MPG B550 Gaming Edge WiFi', socket: 'AM4', ramType: 'DDR4', price: 160 },
    { name: 'Gigabyte AORUS X570 Master', socket: 'AM4', ramType: 'DDR4', price: 320 },
    { name: 'ASUS Prime Z490-A', socket: 'LGA1200', ramType: 'DDR4', price: 240 },
    { name: 'ASRock X370 Taichi', socket: 'AM4', ramType: 'DDR4', price: 150 },
    { name: 'ASUS ROG Strix Z590-E Gaming', socket: 'LGA1200', ramType: 'DDR4', price: 320 },
    { name: 'MSI X570 Gaming Edge WiFi', socket: 'AM4', ramType: 'DDR4', price: 200 },
    { name: 'ASUS ROG Strix X570-I Gaming', socket: 'AM4', ramType: 'DDR4', price: 270 },
    { name: 'Gigabyte Z390 AORUS Pro WiFi', socket: 'LGA1151', ramType: 'DDR4', price: 240 },
    { name: 'ASRock B550 Phantom Gaming 4', socket: 'AM4', ramType: 'DDR4', price: 120 },
    // ... (more motherboard options)
  ],
  ram: [
    { name: 'Corsair Vengeance LPX 16GB (2 x 8GB) DDR4-3200', type: 'DDR4', price: 60 },
    { name: 'G.Skill Ripjaws V 16GB (2 x 8GB) DDR4-3200', type: 'DDR4', price: 60 },
    { name: 'HyperX Fury 16GB (2 x 8GB) DDR4-3200', type: 'DDR4', price: 60 },
    { name: 'Crucial Ballistix 16GB (2 x 8GB) DDR4-3200', type: 'DDR4', price: 65 },
    { name: 'Corsair Dominator Platinum 16GB (2 x 8GB) DDR4-3200', type: 'DDR4', price: 100 },
    { name: 'G.Skill Trident Z RGB 16GB (2 x 8GB) DDR4-3200', type: 'DDR4', price: 80 },
    { name: 'Kingston HyperX Predator 16GB (2 x 8GB) DDR4-3200', type: 'DDR4', price: 80 },
    { name: 'Patriot Viper 4 16GB (2 x 8GB) DDR4-3200', type: 'DDR4', price: 70 },
    { name: 'Crucial Ballistix MAX 16GB (2 x 8GB) DDR4-3600', type: 'DDR4', price: 75 },
    { name: 'G.Skill Ripjaws V 32GB (2 x 16GB) DDR4-3200', type: 'DDR4', price: 120 },
    { name: 'Corsair Vengeance LPX 32GB (2 x 16GB) DDR4-3200', type: 'DDR4', price: 120 },
    { name: 'Kingston Fury Beast 32GB (2 x 16GB) DDR4-3200', type: 'DDR4', price: 120 },
    { name: 'HyperX Fury 32GB (2 x 16GB) DDR4-3200', type: 'DDR4', price: 130 },
    { name: 'G.Skill Trident Z Neo 32GB (2 x 16GB) DDR4-3600', type: 'DDR4', price: 160 },
    { name: 'Corsair Dominator Platinum 32GB (2 x 16GB) DDR4-3200', type: 'DDR4', price: 160 },
    { name: 'Patriot Viper Steel 32GB (2 x 16GB) DDR4-3200', type: 'DDR4', price: 130 },
    { name: 'G.Skill Ripjaws 32GB (4 x 8GB) DDR4-3200', type: 'DDR4', price: 130 },
    { name: 'Crucial Ballistix 32GB (4 x 8GB) DDR4-3200', type: 'DDR4', price: 130 },
    { name: 'Corsair Vengeance LPX 64GB (2 x 32GB) DDR4-3200', type: 'DDR4', price: 240 },
    { name: 'G.Skill Trident Z RGB 64GB (2 x 32GB) DDR4-3200', type: 'DDR4', price: 280 },
    { name: 'Kingston Fury Beast 64GB (2 x 32GB) DDR4-3200', type: 'DDR4', price: 250 },
    // ... (more RAM options)
  ],
  storage: [
    { name: 'Samsung 970 EVO Plus 1TB NVMe M.2', price: 90 },
    { name: 'Western Digital Black SN750 1TB NVMe M.2', price: 100 },
    { name: 'Crucial P5 1TB NVMe M.2', price: 75 },
    { name: 'Kingston A2000 1TB NVMe M.2', price: 70 },
    { name: 'SanDisk Extreme Pro 1TB NVMe M.2', price: 95 },
    { name: 'Sabrent Rocket Q 1TB NVMe M.2', price: 80 },
    { name: 'Samsung 980 1TB NVMe M.2', price: 65 },
    { name: 'ADATA XPG SX8200 Pro 1TB NVMe M.2', price: 80 },
    { name: 'Patriot P310 1TB NVMe M.2', price: 65 },
    { name: 'Seagate FireCuda 520 1TB NVMe M.2', price: 100 },
    { name: 'Western Digital Blue 3D NAND 1TB SATA', price: 80 },
    { name: 'Crucial MX500 1TB SATA', price: 70 },
    { name: 'Kingston A400 1TB SATA', price: 55 },
    { name: 'SanDisk SSD Plus 1TB SATA', price: 55 },
    { name: 'Samsung 860 EVO 1TB SATA', price: 70 },
    { name: 'Seagate Barracuda 2TB 7200 RPM', price: 50 },
    { name: 'Western Digital Blue 2TB 7200 RPM', price: 50 },
    { name: 'Toshiba X300 2TB 7200 RPM', price: 60 },
    { name: 'Seagate IronWolf 4TB NAS HDD', price: 120 },
    { name: 'Western Digital Red 4TB NAS HDD', price: 130 },
    // ... (more storage options)
  ],
  psu: [
    { name: 'Corsair RM750x (750W)', price: 120 },
    { name: 'EVGA SuperNOVA 750 G5 (750W)', price: 120 },
    { name: 'Seasonic Focus GX-750 (750W)', price: 120 },
    { name: 'Thermaltake Toughpower GF1 750W', price: 130 },
    { name: 'ASUS ROG Strix 750G (750W)', price: 130 },
    { name: 'Cooler Master V750 Gold (750W)', price: 120 },
    { name: 'Corsair HX850i (850W)', price: 200 },
    { name: 'EVGA SuperNOVA 850 G5 (850W)', price: 150 },
    { name: 'Seasonic Prime TX-850 (850W)', price: 200 },
    { name: 'Thermaltake Toughpower GF1 850W', price: 160 },
    { name: 'Be Quiet! Dark Power Pro 12 (850W)', price: 200 },
    { name: 'FSP Hydro G Pro 850W', price: 130 },
    { name: 'Corsair RM1000x (1000W)', price: 200 },
    { name: 'EVGA SuperNOVA 1000 G5 (1000W)', price: 200 },
    { name: 'Seasonic Focus GX-1000 (1000W)', price: 220 },
    { name: 'Cooler Master V1000 (1000W)', price: 220 },
{ name: 'Thermaltake Toughpower GF1 1000W', price: 200 },
    { name: 'Corsair CV650 (650W)', price: 60 },
    { name: 'EVGA 600 W1 (600W)', price: 50 },
    { name: 'Thermaltake Smart 600W', price: 50 },
  ],
  cooler: [
    { name: 'Noctua NH-D15', price: 100 },
    { name: 'be quiet! Dark Rock Pro 4', price: 90 },
    { name: 'Cooler Master Hyper 212 EVO', price: 40 },
    { name: 'Cryorig H7', price: 50 },
    { name: 'Deepcool Gammaxx 400', price: 30 },
    { name: 'Scythe Mugen 5', price: 60 },
    { name: 'Thermalright Dark Rock 4', price: 70 },
    { name: 'Arctic Freezer 34 eSports DUO', price: 50 },
    { name: 'Cooler Master Hyper 212 Black Edition', price: 45 },
    { name: 'Noctua NH-U12S', price: 70 },
    { name: 'Corsair H100i RGB Platinum', price: 130 },
    { name: 'NZXT Kraken X63', price: 150 },
    { name: 'Cooler Master MasterLiquid ML240L RGB', price: 80 },
    { name: 'Thermaltake Floe DX 240', price: 120 },
    { name: 'be quiet! Pure Loop 240', price: 90 },
    { name: 'Arctic Liquid Freezer II 240', price: 100 },
    { name: 'EVGA CLC 280mm', price: 130 },
    { name: 'Deepcool Castle 240EX', price: 100 },
    { name: 'Asus ROG Strix LC 240', price: 140 },
    { name: 'Corsair H115i RGB Platinum', price: 150 },
    { name: 'Cooler Master Hyper T20', price: 30 },
    { name: 'Thermaltake Contac 21', price: 30 },
    { name: 'ARCTIC Freezer 7 X', price: 30 },
    { name: 'Deepcool Gammaxx 200T', price: 25 },
    { name: 'Noctua NH-U14S', price: 80 },
    { name: 'Cryorig R1 Ultimate', price: 90 },
    { name: 'Corsair iCUE H150i Elite Capellix', price: 180 },
    { name: 'NZXT Kraken Z63', price: 200 },
    { name: 'Corsair Hydro Series H90', price: 120 },
    { name: 'Thermalright Le Grand Macho RT', price: 90 },
    { name: 'Phanteks PH-TC14PE', price: 70 },
    { name: 'Cryorig H5 Universal', price: 50 },
    { name: 'Deepcool Assassin III', price: 90 },
    { name: 'AMD Wraith Prism (stock cooler)', price: 0 },
    { name: 'Intel Stock Cooler (varies by CPU)', price: 0 },
    { name: 'Noctua NH-L12S', price: 60 },
    { name: 'be quiet! Pure Rock 2', price: 50 },
    { name: 'Scythe Fuma 2', price: 70 },
    { name: 'EK-AIO 240 D-RGB', price: 130 },
    { name: 'Thermaltake Water 3.0 240 ARGB', price: 100 },
    { name: 'Alphacool Eisbaer 240', price: 100 },
    { name: 'Corsair Hydro Series H75', price: 80 },
    { name: 'Silverstone PF240-ARGB', price: 90 },
    { name: 'Cryorig C7', price: 40 },
    { name: 'Noctua NH-L9i', price: 50 },
    { name: 'be quiet! Shadow Rock LP', price: 50 },
    { name: 'Cooler Master MasterAir G100M', price: 50 },
    { name: 'Arctic Alpine 12', price: 25 },
    { name: 'Noctua NH-L9x65', price: 50 },
    { name: 'Cryorig C1', price: 50 },
    { name: 'Silverstone AR06', price: 35 },
    { name: 'Cooler Master GeminII M4', price: 40 },
    { name: 'EKWB Custom Loop Kit', price: 300 },
    { name: 'Thermaltake Pacific DIY Kit', price: 250 },
    { name: 'Corsair Hydro X Series', price: 200 },
    { name: 'XSPC D5 Photon Kit', price: 250 },
    { name: 'Alphacool Eisbaer LT', price: 150 },
  ],
  case: [
    { name: 'Fractal Design Meshify C', price: 100 },
    { name: 'NZXT H510', price: 80 },
    { name: 'Corsair 4000D Airflow', price: 100 },
    { name: 'be quiet! Pure Base 500', price: 90 },
    { name: 'Lian Li PC-O11 Dynamic', price: 140 },
    { name: 'Cooler Master MasterBox Q300L', price: 60 },
    { name: 'Phanteks Eclipse P300A', price: 80 },
    { name: 'Thermaltake V200', price: 70 },
    { name: 'ASUS ROG Strix Helios', price: 250 },
    { name: 'Corsair 5000D Airflow', price: 150 },
    { name: 'Cooler Master H500', price: 150 },
    { name: 'Lian Li LANCOOL II', price: 100 },
    { name: 'be quiet! Dark Base 700', price: 180 },
    { name: 'Thermaltake View 71', price: 160 },
    { name: 'Fractal Design Define R5', price: 120 },
    { name: 'NZXT H510 Elite', price: 150 },
    { name: 'Corsair Carbide Series 275R', price: 90 },
    { name: 'In Win 101', price: 80 },
    { name: 'Phanteks P400A', price: 90 },
    { name: 'SilverStone Fortress FT06', price: 200 },
    { name: 'Cooler Master Silencio S600', price: 100 },
    { name: 'Thermaltake H200', price: 70 },
    { name: 'Fractal Design Define S2', price: 160 },
    { name: 'Corsair Crystal Series 570X', price: 200 },
    { name: 'be quiet! Pure Base 500DX', price: 110 },
    { name: 'Lian Li PC-011 Air', price: 130 },
    { name: 'Corsair 220T RGB', price: 90 },
    { name: 'Cooler Master MasterCase H500M', price: 300 },
    { name: 'Thermaltake A500', price: 150 },
    { name: 'NZXT H510 Flow', price: 90 },
    { name: 'Phanteks Eclipse P600S', price: 130 },
    { name: 'Cooler Master MasterBox MB511', price: 80 },
    { name: 'Corsair 4000X RGB', price: 130 },
    { name: 'Lian Li PC-Q21', price: 100 },
    { name: 'be quiet! Dark Base Pro 901', price: 200 },
    { name: 'Thermaltake Core P3', price: 130 },
    { name: 'SilverStone RL06', price: 90 },
    { name: 'Fractal Design Node 202', price: 90 },
    { name: 'ASUS TUF Gaming GT501', price: 150 },
    { name: 'In Win 805', price: 130 },
    { name: 'Cooler Master MasterBox Q300P', price: 80 },
    { name: 'Thermaltake Tower 500', price: 130 },
    { name: 'Corsair 600C', price: 160 },
    { name: 'be quiet! Silent Base 601', price: 150 },
    { name: 'Phanteks Enthoo Pro', price: 130 },
    { name: 'Lian Li PC-05SX', price: 150 },
    { name: 'Fractal Design Meshify 2', price: 140 },
    { name: 'Cooler Master HAF 700', price: 250 },
    { name: 'NZXT H510i', price: 110 },
    { name: 'Corsair iCUE 465X RGB', price: 130 },
    { name: 'Thermaltake View 22', price: 80 },
    { name: 'ASUS ROG Strix S500', price: 120 },
    { name: 'Cooler Master MasterBox MB320L', price: 70 },
    { name: 'Lian Li PC-Q30', price: 90 },
    { name: 'be quiet! Pure Base 500 Window', price: 110 },
    { name: 'Corsair 3000D Airflow', price: 160 },
    { name: 'Thermaltake S100', price: 80 },
    { name: 'Fractal Design Define Nano S', price: 90 },
    { name: 'SilverStone SST-RVZ03B', price: 110 },
    { name: 'In Win 928', price: 250 },
    { name: 'Cooler Master Silencio F600', price: 90 },
    { name: 'Phanteks Eclipse P300', price: 70 },
    { name: 'Thermaltake Level 20 VT', price: 150 },
    { name: 'Lian Li PC-A71F', price: 200 },
    { name: 'ASUS ROG Strix Helios GX601', price: 250 },
    { name: 'Corsair Vengeance Series C70', price: 150 },
    { name: 'be quiet! Dark Base 500', price: 130 },
    { name: 'Cooler Master MasterBox Q300L', price: 70 },
    { name: 'Thermaltake Core V21', price: 80 },
    { name: 'Fractal Design Define R6', price: 160 },
    { name: 'Lian Li PC-O11 Dynamic XL', price: 180 },
    { name: 'ASUS TUF Gaming GT501', price: 160 },
    { name: 'Corsair 4000D', price: 100 },
    { name: 'be quiet! Silent Base 601 Window', price: 160 },
    { name: 'Cooler Master MasterCase H500', price: 150 },
    { name: 'Phanteks Enthoo Evolv X', price: 200 },
    { name: 'Thermaltake View 71 RGB', price: 160 },
    { name: 'Lian Li Lancool 2 Mesh', price: 110 },
    { name: 'Fractal Design Meshify C Mini', price: 100 },
    { name: 'SilverStone GD09B', price: 100 },
    { name: 'Cooler Master MasterBox MB520', price: 90 },
    { name: 'Thermaltake H200 TG', price: 80 },
    { name: 'Corsair 275R Airflow', price: 90 },
    { name: 'NZXT H210', price: 80 },
    { name: 'Lian Li PC-O11D Mini', price: 120 },
    { name: 'Fractal Design Define Mini C', price: 90 },
    { name: 'ASUS ROG Strix S340', price: 100 },
    { name: 'Thermaltake Core P5', price: 130 },
    { name: 'Corsair Crystal 280X', price: 140 },
    { name: 'Cooler Master HAF XB', price: 110 },
    { name: 'be quiet! Dark Base Pro 901 Rev. 2', price: 220 },
    { name: 'Lian Li PC-A05FNB', price: 90 },
    { name: 'Phanteks P360A', price: 100 },
    { name: 'Thermaltake H200', price: 70 },
    { name: 'Fractal Design Define R4', price: 100 },
  ],
  fans: [
    { name: 'Noctua NF-A12x25 PWM', price: 30 },
    { name: 'Corsair LL120 RGB', price: 30 },
    { name: 'be quiet! Silent Wings 3', price: 30 },
    { name: 'Cooler Master MasterFan MF120L', price: 15 },
    { name: 'Thermalright TY-147A', price: 15 },
    { name: 'ARCTIC P12 PWM', price: 15 },
    { name: 'Phanteks PH-F120MP', price: 15 },
    { name: 'Fractal Design Aspect 12', price: 20 },
    { name: 'Deepcool CF120', price: 20 },
    { name: 'BitFenix Spectre Pro 120mm', price: 15 },
    { name: 'Noctua NF-A14 PWM', price: 30 },
    { name: 'be quiet! Silent Wings 3 140mm', price: 35 },
    { name: 'Corsair ML140 Pro RGB', price: 30 },
    { name: 'Cooler Master MasterFan MF140L', price: 15 },
    { name: 'ARCTIC P14 PWM', price: 15 },
    { name: 'Thermalright TY-147A (140mm)', price: 20 },
    { name: 'Phanteks PH-F140MP', price: 15 },
    { name: 'Deepcool CF140', price: 20 },
    { name: 'Fractal Design Aspect 14', price: 20 },
    { name: 'NZXT AER P140', price: 30 },
    { name: 'Noctua NF-F12 PWM', price: 30 },
    { name: 'Corsair AF120 Quiet Edition', price: 20 },
    { name: 'Cooler Master JetFlo 120', price: 20 },
    { name: 'ARCTIC P12 PWM PST', price: 15 },
    { name: 'Thermalright TL-C12C', price: 15 },
    { name: 'Phanteks PH-F120SP', price: 15 },
    { name: 'Deepcool RF120', price: 20 },
    { name: 'BitFenix Spectre 120mm', price: 15 },
    { name: 'be quiet! Pure Wings 2 120mm', price: 15 },
    { name: 'Cooler Master SickleFlow 120', price: 15 },
    { name: 'Corsair QL120 RGB', price: 35 },
    { name: 'NZXT AER RGB 2', price: 30 },
    { name: 'Thermaltake Riing 12 RGB', price: 25 },
    { name: 'Cooler Master MasterFan MF120R RGB', price: 25 },
    { name: 'Deepcool RGB 120', price: 20 },
    { name: 'ARCTIC P12 PWM PST A-RGB', price: 20 },
    { name: 'Phanteks Halos RGB Fan Frame', price: 15 },
    { name: 'BitFenix Alchemy 2.0 RGB', price: 20 },
    { name: 'SilverStone AP121', price: 20 },
    { name: 'Zalman ZM-F1', price: 15 },
    { name: 'Noctua NF-S12B Redux', price: 20 },
    { name: 'be quiet! Shadow Wings 2', price: 20 },
    { name: 'ARCTIC F12 Silent', price: 15 },
    { name: 'Cooler Master SickleFlow 120 V2', price: 15 },
    { name: 'Fractal Design Silent Series R3', price: 20 },
    { name: 'Deepcool XFAN 120', price: 15 },
    { name: 'Thermalright TY-121', price: 15 },
    { name: 'Scythe Kaze Flex 120', price: 15 },
    { name: 'Cooler Master MasterFan MF120 Halo', price: 20 },
    { name: 'Noctua NF-A20 PWM', price: 35 },
    { name: 'Corsair LL140 RGB', price: 30 },
    { name: 'be quiet! Dark Wings 3 140mm', price: 35 },
    { name: 'ARCTIC Bionix P140 A', price: 20 },
    { name: 'Thermalright Typhoon 140', price: 20 },
    { name: 'Phanteks PH-F140S', price: 15 },
    { name: 'Deepcool RF140', price: 20 },
    { name: 'Fractal Design Venturi HP-140', price: 30 },
    { name: 'SilverStone AP140', price: 20 },
    { name: 'Noctua NF-A14 iPPC', price: 30 },
  ],
};


const PartSelector = ({ icon: Icon, label, options, selected, onSelect }) => (
  <motion.div
    className="mb-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <label className="block text-sm font-medium text-blue-300 mb-2 flex items-center">
      <Icon className="mr-2" size={18} />
      {label}
    </label>
    <div className="relative group">
      <select
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
        className="block appearance-none w-full bg-gray-800 bg-opacity-50 border border-blue-500 text-white py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-gray-700 focus:border-blue-300 transition-all duration-300 hover:border-blue-400 group-hover:shadow-lg group-hover:shadow-blue-500/50"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name} - ${option.price.toFixed(2)}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-300">
        <ChevronDown size={20} />
      </div>
    </div>
  </motion.div>
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
    fans: '',
  });

  const handlePartSelect = (part, value) => {
    setSelectedParts((prev) => ({ ...prev, [part]: value }));
    
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

  const resetSelection = () => {
    setSelectedParts({
      cpu: '',
      motherboard: '',
      ram: '',
      gpu: '',
      storage: '',
      psu: '',
      cooler: '',
      case: '',
      fans: '',
    });
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80')] opacity-20 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black opacity-80" />
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          NeoTech Forge
        </h1>
        <p className="text-xl text-blue-300">Craft Your Future-Ready PC</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto bg-gray-900 bg-opacity-50 p-8 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-lg border border-blue-500/30 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <PartSelector
            icon={Fan}
            label="Case Fans"
            options={pcParts.fans}
            selected={selectedParts.fans}
            onSelect={(value) => handlePartSelect('fans', value)}
          />
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-300">Total Cost</h2>
          <motion.div
            className="text-6xl font-bold text-green-400 mb-6 flex items-center justify-center"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <DollarSign className="mr-2" size={48} />
            <span>{totalCost.toFixed(2)}</span>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center mx-auto transition-colors duration-200 group"
            onClick={resetSelection}
          >
            <RefreshCw className="mr-2 group-hover:rotate-180 transition-transform duration-300" size={20} />
            Reset Build
          </motion.button>
        </motion.div>
      </motion.div>
      
      <div className="mt-8 text-center text-blue-300 relative z-10">
        <p>&copy; 2024 NeoTech Forge. Empowering the future of custom PCs.</p>
      </div>
    </div>
  );
};

export default PCPartsSelector;
