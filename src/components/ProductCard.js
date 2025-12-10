"use client";
import { useStore } from "../store/useStore";
import { Plus } from "lucide-react";

export default function ProductCard({ product }) {
  const { openProductDrawer, addToCart } = useStore();

  const handleQuickAdd = (e) => {
    e.stopPropagation(); // Prevents opening the drawer when clicking (+)
    addToCart(product);
  };

  // Mocking "Original Price" for the discount visual
  const fakeOriginalPrice = Math.floor(product.basePrice * 1.4);
  const discount = fakeOriginalPrice - product.basePrice;

  return (
    <div 
      onClick={() => openProductDrawer(product)} 
      className="group cursor-pointer flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-50"
    >
      {/* 1. Reduced Image Height (Aspect Ratio changed from 4/5 to video/landscape-ish) */}
      <div className="aspect-[4/3] bg-purple-50 overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full group-hover:scale-105 transition duration-700 ease-out" 
        />
      </div>

      {/* 2. Increased Text Area */}
      <div className="p-5 flex flex-col flex-grow relative">
        <div className="mb-2">
           <p className="text-[10px] font-bold text-[#8C6A9E] uppercase tracking-widest mb-1">{product.category}</p>
           <h3 className="font-serif text-lg text-[#2E2433] leading-tight group-hover:text-[#8C6A9E] transition">{product.name}</h3>
           
           {/* 3. Description Snippet */}
           <p className="text-xs text-[#5D4B66] line-clamp-2 mt-2 leading-relaxed opacity-80">
             {product.description || "A beautiful addition to your collection crafted with purpose."}
           </p>
        </div>
        
        <div className="mt-auto pt-3 flex items-end justify-between">
          {/* 4. Pricing Logic */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-[#2E2433]">₹ {product.basePrice}</span>
              <span className="text-xs text-gray-400 line-through decoration-red-400">${fakeOriginalPrice}</span>
            </div>
            <span className="text-[10px] font-bold text-green-600">(₹ {discount} OFF)</span>
          </div>

          {/* 5. Button moved to bottom right, Lilac Default, Dark Purple Hover */}
          <button 
            onClick={handleQuickAdd}
            className="bg-[#BFA2DB] p-3 rounded-full shadow-md text-white hover:bg-[#8C6A9E] transition active:scale-90"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}