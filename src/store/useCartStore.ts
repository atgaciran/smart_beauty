import { create } from 'zustand';
import { CartItem, Product } from '../lib/types';

interface CartStore {
  cart: CartItem[];
  isCartOpen: boolean;
  toggleCart: () => void;
  addToCart: (product: Product) => void;
  decreaseQuantity: (productId: string) => void; // Yeni fonksiyon tanımı
  removeFromCart: (productId: string) => void; // Tamamen sepetten silmek için (çöp kutusu)
  getCartTotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  isCartOpen: false,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  
  // Ekleme ve Adet Arttırma (Değişmedi, + butonu da bunu tetikleyecek)
  addToCart: (product) => {
    const { cart } = get();
    const existingItem = cart.find((item) => item.id === product.id);
    
    if (existingItem) {
      set({
        cart: cart.map((item) => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      });
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] });
    }
  },

  // Yeni Eklenen Adet Azaltma Mantığı
  decreaseQuantity: (productId) => {
    const { cart } = get();
    const existingItem = cart.find((item) => item.id === productId);
    
    if (!existingItem) return;
    
    if (existingItem.quantity === 1) {
      // Adet 1 iken azaltılırsa sepetten tamamen kaldır
      set({ cart: cart.filter((item) => item.id !== productId) });
    } else {
      // Adet 1'den büyükse 1 azalt
      set({
        cart: cart.map((item) => 
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
      });
    }
  },

  // Ürünü adete bakmaksızın tamamen silen fonksiyon (Çöp kutusu butonu için)
  removeFromCart: (productId) => {
    set({ cart: get().cart.filter((item) => item.id !== productId) });
  },

  getCartTotal: () => {
    return get().cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}));