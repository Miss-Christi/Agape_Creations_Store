import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";

export default function Loading() {
  // For showing loader
  const [loading, setLoading] = useState(true);

  // For fade-out
  const [isVisible, setIsVisible] = useState(true);

  const HeartbeatLoader = () => (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        <div className="absolute inset-0 bg-purple-200 rounded-full animate-ping opacity-75"></div>

        <div className="relative bg-white p-4 rounded-full shadow-xl border border-indigo-100">
          <Heart className="w-8 h-8 text-indigo-600 fill-indigo-600 animate-pulse" />
        </div>
      </div>

      <p className="text-indigo-900 font-medium tracking-widest text-sm uppercase animate-pulse">
        Agape Store
      </p>
    </div>
  );

  // Stop loading at 4s
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);      // Start fade-out
      setTimeout(() => setIsVisible(false), 300); // Remove after animation
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // If fully hidden, render nothing
  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center 
        bg-white/80 backdrop-blur-sm transition-opacity duration-250
        ${loading ? "opacity-100" : "opacity-0"}`}
    >
      <HeartbeatLoader />
    </div>
  );
} 

    {/*  // --- OPTION 2: The Divine Light (Modern Spinner) ---
    const SpinnerLoader = () => (
        <div className="flex flex-col items-center justify-center space-y-4">
        <div className="relative w-16 h-16">
            {/* Outer Ring 
            <div className="absolute inset-0 border-4 border-indigo-100 rounded-full"></div>
            {/* Spinning Gradient 
            <div className="absolute inset-0 border-4 border-t-indigo-600 border-r-purple-500 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            {/* Center Cross/Plus (Optional) 
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-indigo-300 text-2xl font-light">+</span>
            </div>
        </div>
        <p className="text-gray-400 text-xs tracking-wider">Loading...</p>
        </div>
    );
  */}

  {/*
  // --- OPTION 3: The Trinity Dots (Minimalist) ---
  const DotsLoader = () => (
    <div className="flex flex-col items-center justify-center">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce"></div>
      </div>
    </div>
  );

  */}