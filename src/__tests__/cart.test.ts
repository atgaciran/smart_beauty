import { describe, it, expect, beforeEach } from 'vitest';
import { useCartStore } from '../store/useCartStore';
import { Product } from '../lib/types';

describe('Cart Store Toplam Fiyat Hesaplaması', () => {
  const mockProductA: Product = { id: '1', name: 'Serum', price: 30, skinType: 'kuru', image: '', description: '' };
  const mockProductB: Product = { id: '2', name: 'Krem', price: 20, skinType: 'yagli', image: '', description: '' };

  // Her testten önce store'u sıfırla
  beforeEach(() => {
    useCartStore.setState({ cart: [] });
  });

  it('Sepet boşken toplam 0 dönmelidir', () => {
    const store = useCartStore.getState();
    expect(store.getCartTotal()).toBe(0);
  });

  it('Ürün eklendiğinde fiyatı doğru hesaplamalıdır', () => {
    const store = useCartStore.getState();
    store.addToCart(mockProductA);
    expect(useCartStore.getState().getCartTotal()).toBe(30);
  });

  it('Aynı üründen birden fazla eklendiğinde miktarı (quantity) baz alarak doğru çarpmalıdır', () => {
    const store = useCartStore.getState();
    store.addToCart(mockProductA); // 30
    store.addToCart(mockProductA); // + 30
    store.addToCart(mockProductB); // + 20
    expect(useCartStore.getState().getCartTotal()).toBe(80);

  });

  it('decreaseQuantity fonksiyonu miktarı azaltmalı, 1 iken azaltılırsa ürünü sepetten tamamen silmelidir', () => {
    const store = useCartStore.getState();
    store.addToCart(mockProductA); // adet: 1 oldu
    store.addToCart(mockProductA); // adet: 2 oldu
    
    expect(useCartStore.getState().cart[0].quantity).toBe(2);
    
    // 1 adet azaltıyoruz
    store.decreaseQuantity(mockProductA.id); 
    expect(useCartStore.getState().cart[0].quantity).toBe(1);
    expect(useCartStore.getState().getCartTotal()).toBe(30); // Sadece 1 ürün fiyatı kalmalı
    
    // Adet 1 iken tekrar azaltıyoruz (sepetten tamamen uçmalı)
    store.decreaseQuantity(mockProductA.id); 
    expect(useCartStore.getState().cart.length).toBe(0);
    expect(useCartStore.getState().getCartTotal()).toBe(0);
  });

  });
