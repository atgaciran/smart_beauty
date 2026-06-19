'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/store/useCartStore';
import { useUiStore } from '@/store/useUiStore';

export default function Header() {
  const toggleCart = useCartStore((state) => state.toggleCart);
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const resetFlow = useUiStore((state) => state.resetFlow);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-40 w-full transition-all duration-500 ${isScrolled ? 'bg-white/85 backdrop-blur-xl py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        <div className="cursor-pointer flex items-center" onClick={resetFlow}>
          <Image 
            src="/logo.svg" 
            alt="Smart Beauty Logo" 
            width={200} 
            height={64} 
            priority
            className="w-auto h-8 sm:h-10"
          />
        </div>

        <button 
          onClick={toggleCart}
          className={`relative p-2.5 rounded-full transition-all duration-300 ${
            isScrolled ? 'hover:bg-slate-100 text-slate-700' : 'hover:bg-white/20 text-slate-800'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-brand text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}