import { create } from 'zustand';

export const useStore = create((set, get) => ({
  // --- Data & Cart ---
  cart: [],
  selectedCategory: "All", 
  
  // --- UI States ---
  isCartOpen: false,
  isMenuOpen: false,
  activeProduct: null, 
  
  // --- NEW: Order Success Modal State ---
  isOrderSuccessOpen: false, 

  // --- Actions ---
  setCategory: (cat) => set({ selectedCategory: cat }),
  
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  
  openProductDrawer: (product) => set({ activeProduct: product }),
  closeProductDrawer: () => set({ activeProduct: null }),

  // --- NEW: Checkout Actions (Fixes the error) ---
  openOrderSuccess: () => set({ isOrderSuccessOpen: true, cart: [] }), 
  closeOrderSuccess: () => set({ isOrderSuccessOpen: false }),

  // --- Cart Logic ---
  addToCart: (product, variantSelection = null) => set((state) => {
    // Generate unique ID based on variants
    const variantKey = variantSelection ? `-${Object.values(variantSelection).join('-')}` : '';
    const uniqueItemId = `${product.id}${variantKey}`;
    
    // Price Adjustment Logic
    let finalPrice = product.basePrice;
    if (variantSelection?.Size?.includes("A4") || variantSelection?.Size === "L") finalPrice += 5;
    if (variantSelection?.Size?.includes("A3") || variantSelection?.Size === "XL") finalPrice += 10;

    const existing = state.cart.find((item) => item.uniqueItemId === uniqueItemId);

    if (existing) {
      return {
        cart: state.cart.map((item) =>
          item.uniqueItemId === uniqueItemId 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        ),
        isCartOpen: true 
      };
    }

    return { 
      cart: [...state.cart, { 
        ...product, 
        uniqueItemId, 
        selectedVariant: variantSelection, 
        price: finalPrice, 
        quantity: 1 
      }], 
      isCartOpen: true 
    };
  }),

  removeFromCart: (uniqueItemId) => set((state) => ({
    cart: state.cart.filter((item) => item.uniqueItemId !== uniqueItemId)
  })),

  updateQuantity: (uniqueItemId, qty) => set((state) => ({
    cart: state.cart.map((item) => 
      item.uniqueItemId === uniqueItemId ? { ...item, quantity: Math.max(1, qty) } : item
    )
  })),

  cartTotal: () => get().cart.reduce((total, item) => total + item.price * item.quantity, 0),
}));