"use client";
import { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { X, Check, ShoppingBag } from 'lucide-react';

export default function ProductDrawer() {
  const { activeProduct, closeProductDrawer, addToCart } = useStore();
  const [selectedVariant, setSelectedVariant] = useState({});
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (activeProduct?.hasVariants) {
      const defaults = {};
      activeProduct.variants.forEach(v => defaults[v.name] = v.options[0]);
      setSelectedVariant(defaults);
    } else {
      setSelectedVariant({});
    }
  }, [activeProduct]);

  if (!activeProduct) return null;

  const handleAdd = () => {
    addToCart(activeProduct, selectedVariant);
    setAdded(true);
    setTimeout(() => { setAdded(false); closeProductDrawer(); }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center pointer-events-none">
      <div className="absolute inset-0 bg-[#2E2433]/50 backdrop-blur-sm pointer-events-auto transition-opacity" onClick={closeProductDrawer} />
      
      <div className="bg-[#F8F5FC] w-full sm:max-w-2xl sm:rounded-2xl rounded-t-2xl shadow-2xl relative pointer-events-auto flex flex-col max-h-[85vh] overflow-hidden animate-in slide-in-from-bottom duration-300">
        
        <div className="p-4 border-b border-purple-100 flex justify-between items-center bg-white">
          <h3 className="font-serif font-bold text-lg text-[#2E2433]">Product Details</h3>
          <button onClick={closeProductDrawer} className="p-2 hover:bg-purple-50 rounded-full text-[#5D4B66]"><X size={20}/></button>
        </div>

        <div className="overflow-y-auto p-6 bg-white">
          <div className="aspect-video w-full bg-purple-50 rounded-lg mb-6 overflow-hidden">
             <img src={activeProduct.image} className="w-full h-full object-cover" alt={activeProduct.name} />
          </div>

          <h2 className="text-3xl font-serif text-[#2E2433] mb-2">{activeProduct.name}</h2>
          <p className="text-2xl font-bold text-[#8C6A9E] mb-4">${activeProduct.basePrice}</p>
          
          <p className="text-[#5D4B66] leading-relaxed mb-8 text-base font-medium">
            {activeProduct.description || "Designed with intention. A beautiful addition to your collection."}
          </p>

          {activeProduct.hasVariants && activeProduct.variants.map((v) => (
            <div key={v.name} className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wide mb-3 text-[#2E2433]">{v.name}</label>
              <div className="flex flex-wrap gap-2">
                {v.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedVariant({...selectedVariant, [v.name]: opt})}
                    className={`px-5 py-2 text-sm border rounded-full transition font-medium ${
                      selectedVariant?.[v.name] === opt 
                        ? 'bg-[#2E2433] text-white border-[#2E2433]' 
                        : 'border-purple-200 text-[#5D4B66] hover:border-[#8C6A9E]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-purple-100 bg-white">
          <button 
            onClick={handleAdd}
            className={`w-full py-4 rounded-xl font-bold tracking-wide transition flex items-center justify-center gap-2 shadow-lg ${
              added ? 'bg-green-700 text-white' : 'bg-[#2E2433] text-white hover:bg-[#8C6A9E]'
            }`}
          >
            {added ? <><Check /> ADDED</> : <><ShoppingBag size={18}/> ADD TO CART</>}
          </button>
        </div>
      </div>
    </div>
  );
}