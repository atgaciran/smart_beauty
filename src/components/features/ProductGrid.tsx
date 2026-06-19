'use client';
import { Product } from '@/lib/types';
import { useCartStore } from '@/store/useCartStore';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 animate-in slide-in-from-bottom-4 fade-in duration-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow">
            <div className="w-full h-48 bg-slate-50 rounded-2xl mb-4 overflow-hidden flex items-center justify-center relative group">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => e.currentTarget.style.display = 'none'} />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-1">{product.name}</h3>
            <p className="text-slate-500 text-sm mb-6 line-clamp-2">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
              <button 
                onClick={() => addToCart(product)}
                className="bg-brand text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-brand-light transition-colors shadow-sm"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}