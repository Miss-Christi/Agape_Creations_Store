'use client';

import React, { useState } from 'react';

export default function Subscription() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(event.target);

    // KEY SETTINGS
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    formData.append("subject", "New Subscription Request");
    formData.append("from_name", "Agape Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Subscribed successfully!");
        event.target.reset();
        setTimeout(() => {
            setResult("");
        }, 5000);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
          Subscribe to receive encouragement, exclusive offers, and early access to our new faith-inspired collections.
        </p>
        
        <form onSubmit={onSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            {/* Hidden field to prevent bot spam (honeypot) */}
            <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

            <input 
              type="email" 
              name="email" 
              required 
              placeholder="Enter your email address" 
              className="flex-1 appearance-none border border-gray-300 w-full py-3 px-5 bg-white text-gray-700 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
            />
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-800 hover:bg-indigo-900 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "..." : "Subscribe"}
            </button>
        </form>
        
        {/* Success/Error Message */}
        <div className="h-6 mt-4"> 
          {result && (
            <p className={`text-sm font-medium ${result.includes("success") ? "text-green-600" : "text-red-600"}`}>
              {result}
            </p>
          )}
        </div>
        
        <p className="mt-2 text-xs text-gray-400">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    </div>
  );
}