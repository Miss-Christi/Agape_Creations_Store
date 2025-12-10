"use client";
import { useState, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import Drawer from './ui/Drawer';

export default function QuickViewDrawer() {
  const { isQuickViewOpen, closeQuickView, activeProduct, addToCart } = useStore();
  const [selectedVariant, setSelectedVariant] = useState({});

  // Reset variants when product changes
  useEffect(() => {
    if (activeProduct?.hasVariants) {
      // Default to first option
      const defaults = {};
      activeProduct.variants.forEach(v => defaults[v.name] = v.options[0]);
      setSelectedVariant(defaults);
    } else {
      setSelectedVariant(null);
    }
  }, [activeProduct]);

  if (!activeProduct) return null;

  return (
    <Drawer isOpen={isQuickViewOpen} onClose={closeQuickView} title="Quick View">
      <div className="p-6">
        <img src={activeProduct.image} className="w-full rounded-lg bg-stone-100 mb-6" alt={activeProduct.name} />
        
        <h2 className="text-2xl font-serif mb-2">{activeProduct.name}</h2>
        <p className="text-xl text-[#9f4a3e] mb-4">${activeProduct.basePrice}</p>
        <p className="text-sm text-gray-600 mb-6">{activeProduct.description}</p>

        {/* Variant Selectors */}
        {activeProduct.hasVariants && activeProduct.variants.map((v) => (
          <div key={v.name} className="mb-4">
            <label className="block text-xs font-bold uppercase tracking-wide mb-2">{v.name}</label>
            <div className="flex gap-2">
              {v.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelectedVariant({...selectedVariant, [v.name]: opt})}
                  className={`px-4 py-2 text-sm border rounded-md transition ${
                    selectedVariant[v.name] === opt 
                      ? 'bg-[#2c2a26] text-white border-[#2c2a26]' 
                      : 'hover:border-[#2c2a26]'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}

        <button 
          onClick={() => { addToCart(activeProduct, selectedVariant); closeQuickView(); }}
          className="w-full mt-6 bg-[#2c2a26] text-white py-4 rounded-lg font-bold hover:bg-[#9f4a3e] transition"
        >
          ADD TO CART
        </button>
      </div>
    </Drawer>
  );
}