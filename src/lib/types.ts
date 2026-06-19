export type SkinType = 'kuru' | 'yagli' | 'karma';

export interface Product {
  id: string;
  name: string;
  price: number;
  skinType: SkinType;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}