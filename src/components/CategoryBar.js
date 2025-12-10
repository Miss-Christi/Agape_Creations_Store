"use client";
import { useStore } from '../store/useStore';
import { Shirt, BookOpen, Coffee, Gift, Home, Sparkles } from 'lucide-react';

export default function CategoryBar() {
  const { selectedCategory, setCategory } = useStore();

  const CATEGORIES = [
    { name: "All", icon: <Sparkles size={18} /> },
    { name: "Apparel", icon: <Shirt size={18} /> },
    { name: "Stationery", icon: <BookOpen size={18} /> },
    { name: "Home", icon: <Home size={18} /> },
    { name: "Gifts", icon: <Gift size={18} /> },
    { name: "Posters", icon: <Coffee size={18} /> },
  ];

  return (
    <div className="sticky top-[64px] md:top-[80px] z-30 py-4 pointer-events-none">
      {/* Container: Centered, Rounded, Glassmorphism, Pointer events enabled for children */}
      <div className="max-w-fit mx-auto bg-[#F8F5FC]/95 backdrop-blur-md border border-purple-100/50 shadow-md rounded-full px-15 py-1 pointer-events-auto flex justify-center">
        <div className="flex gap-7 md:gap-8 overflow-x-auto no-scrollbar items-center">
          {CATEGORIES.map((cat) => (
            <button 
              key={cat.name} 
              onClick={() => {
                setCategory(cat.name);
                document.getElementById('shop-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`flex flex-col items-center gap-1 min-w-[60px] transition-all group py-1 ${
                selectedCategory === cat.name ? 'opacity-100 scale-105' : 'opacity-70 hover:opacity-100'
              }`}
            >
              {/* Icon Circle Container */}
              <div className={`p-2 rounded-full transition-colors ${
                selectedCategory === cat.name 
                  ? 'bg-[#2E2433] text-white shadow-md' 
                  : 'bg-transparent text-[#5D4B66] group-hover:bg-[#BFA2DB] group-hover:text-white'
              }`}>
                {cat.icon}
              </div>
              <span className={`text-[10px] font-bold tracking-wide uppercase whitespace-nowrap ${selectedCategory === cat.name ? 'text-[#2E2433]' : 'text-[#5D4B66]'}`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}