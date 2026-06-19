'use client';
import { useCartStore } from '@/store/useCartStore';

export default function CartDrawer() {
  const { isCartOpen, toggleCart, cart, addToCart, decreaseQuantity, removeFromCart, getCartTotal } = useCartStore();

  return (
    <>
      {isCartOpen && (
        <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 transition-opacity" onClick={toggleCart} />
      )}
      
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-slate-800">Your Cart</h2>
          <button onClick={toggleCart} className="text-slate-400 hover:text-slate-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <p className="text-slate-500 text-center mt-10">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 items-center bg-slate-50 p-4 rounded-2xl border border-slate-100/50">
                <div className="w-16 h-16 bg-white rounded-xl border border-slate-100 overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                </div>
                
                {/* Orta Kısım: Ürün Adı, Tekil Fiyat ve Sayaç Kontrolü */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-slate-800 truncate">{item.name}</h3>
                  <p className="text-xs text-brand font-semibold mt-0.5">${item.price.toFixed(2)}</p>
                  
                  {/* Yeni Premium Sayaç (Stepper) Kontrolü */}
                  <div className="flex items-center space-x-2 mt-2.5">
                    <button 
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-7 h-7 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-50 hover:text-brand hover:border-brand-50 transition-colors text-sm font-semibold select-none shadow-sm"
                    >
                      −
                    </button>
                    <span className="text-sm font-bold text-slate-800 w-6 text-center">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => addToCart(item)}
                      className="w-7 h-7 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-50 hover:text-brand hover:border-brand-50 transition-colors text-sm font-semibold select-none shadow-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Sağ Kısım: Toplam Fiyat ve Hızlı Silme (Çöp Kutusu) */}
                <div className="text-right flex flex-col justify-between items-end self-stretch py-0.5">
                  <p className="text-sm font-bold text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="text-slate-400 hover:text-red-500 transition-colors mt-auto p-1 rounded-md hover:bg-slate-100"
                    title="Remove item entirely"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-slate-100 bg-white">
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-slate-600">Total</span>
            <span className="font-bold text-xl text-slate-900">${getCartTotal().toFixed(2)}</span>
          </div>
          <button className="w-full bg-brand text-white font-medium py-3 rounded-xl hover:bg-brand-light transition-colors shadow-sm disabled:opacity-50" disabled={cart.length === 0}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}