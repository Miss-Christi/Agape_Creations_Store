"use client";
import { X } from 'lucide-react';

export default function Drawer({ isOpen, onClose, title, children }) {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-[#2c2a26]/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-[#faf9f6] z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-6 border-b border-stone-200">
          <h2 className="text-xl font-serif font-bold text-[#2c2a26]">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-stone-200 rounded-full transition text-[#2c2a26]">
            <X size={20} />
          </button>
        </div>
        <div className="h-full overflow-y-auto pb-20 p-6">
          {children}
        </div>
      </div>
    </>
  );
}