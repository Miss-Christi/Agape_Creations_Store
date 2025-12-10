"use client";
import { useStore } from '../store/useStore';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutModal() {
  const { isOrderSuccessOpen, closeOrderSuccess } = useStore();

  if (!isOrderSuccessOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#2E2433]/60 backdrop-blur-sm animate-in fade-in" onClick={closeOrderSuccess} />
      
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full relative z-10 text-center shadow-2xl animate-in zoom-in duration-300">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <Check size={40} strokeWidth={3} />
        </div>
        
        <h2 className="font-serif text-3xl font-bold text-[#2E2433] mb-2">Order Placed!</h2>
        <p className="text-[#5D4B66] mb-8">Thank you for shopping with Agape. Your confirmation email is on the way.</p>
        
        <Link href="/" onClick={closeOrderSuccess} className="block w-full bg-[#2E2433] text-white py-4 rounded-xl font-bold tracking-wide hover:bg-[#8C6A9E] transition">
          CONTINUE SHOPPING
        </Link>
      </div>
    </div>
  );
}