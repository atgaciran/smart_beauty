import { Product, SkinType } from './types';

const mockProducts: Product[] = [
  // --- KURU (DRY) CİLT TİPİ İÇİN ÜRÜNLER ---
  { 
    id: 'dry-1', 
    name: 'Nano-Hydra Complex Serum', 
    price: 45.00, 
    skinType: 'kuru', 
    image: '/images/product.png', 
    description: 'Deep cellular hydration powered by nano-encapsulated hyaluronic acid. Plumps and restores moisture barrier.' 
  },
  { 
    id: 'dry-2', 
    name: 'Ceramide Barrier Cream', 
    price: 52.50, 
    skinType: 'kuru', 
    image: '/images/product.png', 
    description: 'Rich, melting texture that instantly relieves tightness. Infused with 5 types of essential ceramides.' 
  },
  { 
    id: 'dry-3', 
    name: 'Silk Essence Cleanser', 
    price: 28.00, 
    skinType: 'kuru', 
    image: '/images/product.png', 
    description: 'A non-foaming, milky cleanser that gently removes impurities while leaving a soft hydrating film.' 
  },
  { 
    id: 'dry-4', 
    name: 'Overnight Recovery Mask', 
    price: 65.00, 
    skinType: 'kuru', 
    image: '/images/product.png', 
    description: 'Intensive night treatment that repairs micro-damages and locks in moisture for 48 hours.' 
  },

  // --- YAĞLI (OILY) CİLT TİPİ İÇİN ÜRÜNLER ---
  { 
    id: 'oily-1', 
    name: 'Aero-Matte Control Gel', 
    price: 38.00, 
    skinType: 'yagli', 
    image: '/images/product.png', 
    description: 'Ultra-lightweight cooling gel that neutralizes excess sebum without stripping the skin.' 
  },
  { 
    id: 'oily-2', 
    name: 'BHA Pore Purifying Liquid', 
    price: 32.50, 
    skinType: 'yagli', 
    image: '/images/product.png', 
    description: 'Contains 2% Salicylic Acid to unclog pores, reduce redness, and smooth skin texture.' 
  },
  { 
    id: 'oily-3', 
    name: 'Charcoal Detox Cleanser', 
    price: 24.00, 
    skinType: 'yagli', 
    image: '/images/product.png', 
    description: 'Deep-cleansing gel formula with activated charcoal to draw out impurities and daily pollution.' 
  },
  { 
    id: 'oily-4', 
    name: 'Zinc Mineral Sunscreen SPF 50', 
    price: 42.00, 
    skinType: 'yagli', 
    image: '/images/product.png', 
    description: 'A sheer, oil-free mineral SPF that dries down to an invisible, powder-like matte finish.' 
  },

  // --- KARMA (COMBINATION) CİLT TİPİ İÇİN ÜRÜNLER ---
  { 
    id: 'combo-1', 
    name: 'Equilibrium Active Toner', 
    price: 29.00, 
    skinType: 'karma', 
    image: '/images/product.png', 
    description: 'Smart-adapting formula that targets oily T-zones while providing hydration to dry cheeks.' 
  },
  { 
    id: 'combo-2', 
    name: 'Dual-Action Biome Serum', 
    price: 48.00, 
    skinType: 'karma', 
    image: '/images/product.png', 
    description: 'Balances the skin microbiome. Reduces T-zone shine and improves overall skin elasticity.' 
  },
  { 
    id: 'combo-3', 
    name: 'Matcha Antioxidant Cleanser', 
    price: 26.50, 
    skinType: 'karma', 
    image: '/images/product.png', 
    description: 'A pH-balanced foaming gel rich in antioxidants to clean deeply without over-drying.' 
  },
  { 
    id: 'combo-4', 
    name: 'Vitamin C Glow Drops', 
    price: 55.00, 
    skinType: 'karma', 
    image: '/images/product.png', 
    description: '15% pure Vitamin C formula to even out skin tone and deliver a natural, healthy radiance.' 
  }
];

export const fetchProductsBySkinType = async (type: SkinType): Promise<Product[]> => {
  // AI simülasyonu: 3 saniyelik asenkron bekleme süresi
  await new Promise((resolve) => setTimeout(resolve, 3000));
  
  // Sadece seçilen cilt tipine ait ürünleri filtreleyerek döndür
  return mockProducts.filter((product) => product.skinType === type);
};