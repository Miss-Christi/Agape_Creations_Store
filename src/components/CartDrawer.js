"use client";
import { useStore } from '../store/useStore'; // Fixed path
import Drawer from './ui/Drawer';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function CartDrawer() {
  const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal } = useStore();

  return (
    <Drawer isOpen={isCartOpen} onClose={toggleCart} title={`Your Bag (${cart.length})`}>
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.05]">
         <span className="font-serif text-[7rem] md:text-[10rem] font-bold text-[#2E2433] -rotate-32 select-none opacity-[0.85] text-[#2E2433] shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">agape</span>
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[50vh] text-[#4A3B52]">
            <p className="font-medium text-lg">Your bag is empty.</p>
            <button onClick={toggleCart} className="mt-4 text-[#8C6A9E] underline underline-offset-4 font-bold">Continue Shopping</button>
          </div>
        ) : (
          <div className="space-y-4 overflow-y-auto pb-32 p-1">
            {cart.map((item) => (
              <div key={item.uniqueItemId} className="flex gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-purple-100 shadow-sm">
                <div className="w-20 h-24 bg-purple-50 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-sm text-[#2E2433] leading-tight">{item.name}</h3>
                      <p className="font-bold text-[#2E2433]">${item.price * item.quantity}</p>
                    </div>
                    {item.selectedVariant && Object.entries(item.selectedVariant).map(([key, val]) => (
                      <p key={key} className="text-xs text-[#5D4B66] font-medium">{key}: {val}</p>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-purple-200 rounded-lg bg-white">
                      <button onClick={() => updateQuantity(item.uniqueItemId, item.quantity - 1)} className="p-1 px-3 hover:bg-purple-50 text-[#2E2433]"><Minus size={14}/></button>
                      <span className="text-xs w-6 text-center font-bold text-[#2E2433]">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.uniqueItemId, item.quantity + 1)} className="p-1 px-3 hover:bg-purple-50 text-[#2E2433]"><Plus size={14}/></button>
                    </div>
                    <button onClick={() => removeFromCart(item.uniqueItemId)} className="text-[#8C6A9E] hover:text-red-500 transition">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Footer fixed at bottom */}
        {cart.length > 0 && (
          <div className="absolute bottom-0 left-0 w-full bg-white border-t border-purple-100 p-6 z-20 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between text-lg font-serif font-bold mb-4 text-[#2E2433]">
              <span>Subtotal</span>
              <span>${cartTotal()}</span>
            </div>
            <Link href="/checkout" onClick={toggleCart} className="block w-full text-center bg-[#2E2433] text-white py-4 rounded-xl font-bold tracking-widest hover:bg-[#8C6A9E] transition text-sm shadow-lg transform active:scale-95 duration-200">
              PROCEED TO CHECKOUT
            </Link>
          </div>
        )}
      </div>
    </Drawer>
  );
}