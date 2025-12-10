/* Mini Database */
export const PRODUCTS = [
        
      // --- APPAREL ---
    { 
      id: "ap1", 
      category: "Apparel", 
      name: "Agape Boxy Tee", 
      basePrice: 350, 
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80", 
      description: "A premium heavyweight cotton tee designed with a modern boxy silhouette. Soft yet structured, it offers an oversized fit perfect for layering or everyday wear. The fabric holds its shape, making it ideal for both comfort and style throughout the day.", 
      hasVariants: true, 
      variants: [{ name: "Size", options: ["S", "M", "L", "XL"] }] 
    },
    { 
      id: "ap2", 
      category: "Apparel", 
      name: "Chosen Hoodie - Sand", 
      basePrice: 750, 
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80", 
      description: "A warm and durable hoodie crafted from premium fleece, finished with puff-print detailing that adds texture and visual depth. The sand-toned fabric pairs effortlessly with any outfit, making it a cozy and meaningful wardrobe staple.", 
      hasVariants: true, 
      variants: [{ name: "Size", options: ["S", "M", "L", "XL"] }] 
    },
    { 
      id: "ap3", 
      category: "Apparel", 
      name: "Salt & Light Cap", 
      basePrice: 200, 
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80", 
      description: "A classic embroidered dad hat featuring a subtle but bold reminder to be salt and light in the world. Made with breathable cotton and an adjustable strap for a comfortable everyday fit.", 
      hasVariants: false 
    },
    { 
      id: "ap4", 
      category: "Apparel", 
      name: "Grace Carrier Tote", 
      basePrice: 250, 
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80", 
      description: "A sturdy canvas tote built for busy days at school, church, or the market. Its heavyweight material ensures long-term durability while offering a soft, natural feel. Spacious enough to carry books, groceries, and everyday essentials.", 
      hasVariants: false 
    },
    { 
      id: "ap5", 
      category: "Apparel", 
      name: "Truth Cap", 
      basePrice: 200, 
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80", 
      description: "A minimal yet meaningful cap crafted from breathable cotton. Featuring clean linework and a comfortable fit, this piece serves as a daily reminder to walk in truth wherever you go.", 
      hasVariants: false 
    },
    { 
      id: "ap6", 
      category: "Apparel", 
      name: "Sunday Crewneck", 
      basePrice: 550, 
      image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=80", 
      description: "A soft and cozy crewneck designed for slow mornings and peaceful afternoons. The midweight fleece interior ensures warmth, while the relaxed fit makes it perfect for layering throughout the week.", 
      hasVariants: true, 
      variants: [{ name: "Size", options: ["S", "M", "L"] }] 
    },
    {
      id: "ap7",
      name: "Hope Anchor Hoodie",
      category: "Apparel",
      basePrice: 750,
      description: "Made from a durable cotton blend, this hoodie features a comforting message inspired by the truth that hope anchors the soul. Its plush interior, relaxed fit, and timeless design make it a daily essential for cooler days.",
      image: "https://goodmockups.com/wp-content/uploads/2022/04/Free-Hanging-Hoodie-Mockup-PSD.jpg",
      hasVariants: true,
      variants: [
        { name: "Size", options: ["S", "M", "L", "XL"] }
      ]
    },

    // --- STATIONERY (Diaries, Bookmarks) ---
    { 
      id: "st1", 
      category: "Stationery", 
      name: "Daily Prayer Journal", 
      basePrice: 300, 
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80", 
      description: "A beautifully bound linen hardcover journal featuring thick 100gsm pages that prevent bleed-through. Designed for prayer, reflection, and gratitude, it provides structured prompts alongside open space for free writing.", 
      hasVariants: false 
    },
    { 
      id: "st2", 
      category: "Stationery", 
      name: "Floral Verse Bookmarks- Pack of 10", 
      basePrice: 199, 
      image: "https://images.unsplash.com/photo-1634961229506-4ee00b826131?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      description: "A set of five gold-foil bookmarks adorned with delicate floral illustrations and uplifting Scripture verses. Perfect for marking pages in books, journals, or devotionals.", 
      hasVariants: false 
    },
    { 
      id: "st3", 
      category: "Stationery", 
      name: "Quiet Time Notebook", 
      basePrice: 199, 
      image: "https://plus.unsplash.com/premium_photo-1732020862179-e2ce4c18db5c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UXVpZXQlMjBUaW1lJTIwTm90ZWJvb2t8ZW58MHx8MHx8fDA%3D", 
      description: "A minimalist notebook crafted for daily reflections, sermon notes, or creative writing. The smooth matte cover and thick pages offer a clean, uncluttered writing experience.", 
      hasVariants: false 
    },
    { 
      id: "st4", 
      category: "Stationery", 
      name: "Planner 2025", 
      basePrice: 350, 
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80", 
      description: "A thoughtfully designed 2025 planner featuring monthly layouts, weekly spreads, habit trackers, and reflection prompts. Crafted with a durable hardcover and smooth paper suitable for pens and highlighters.", 
      hasVariants: false 
    },
    { 
      id: "st5", 
      category: "Stationery", 
      name: "Pastel Highlighters", 
      basePrice: 120, 
      image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=800&q=80", 
      description: "A gentle set of soft pastel highlighters perfect for Bible journaling, note-taking, and organizing. Designed to be low-bleed with a smooth glide for clean, aesthetic study sessions.", 
      hasVariants: false 
    },
    { 
      id: "st6", 
      category: "Stationery", 
      name: "Gold Foil Bookmarks - Set of 5", 
      basePrice: 99, 
      image: "https://m.media-amazon.com/images/I/81wI5kbPDAL.jpg", 
      description: "Elegantly designed bookmarks with shimmering gold-foil accents. Durable yet lightweight, these bookmarks make beautiful gifts and thoughtful inserts for journals or devotionals.", 
      hasVariants: false 
    },
    { 
      id: "st7", 
      category: "Stationery", 
      name: "Leather Bible Case", 
      basePrice: 349, 
      image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=800&q=80", 
      description: "A premium faux-leather Bible case crafted for protection and style. Features interior pockets for notes, pens, and study essentials, with a secure zipper closure for easy carrying.", 
      hasVariants: false 
    },
    {
      id: "st8",
      name: "Daily Grace Journal",
      category: "Stationery",
      basePrice: 249,
      description: "A hardcover journal with thick 200 GSM pages designed to be ink-friendly and bleed-resistant. Perfect for recording thoughts, prayers, sermon notes, and personal goals in a beautifully structured format.",
      image: "https://plus.unsplash.com/premium_photo-1679404108831-417d6561746b?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hasVariants: false
    },
    {
      id: "p4",
      name: "The Beatitudes Poster",
      category: "Stationery",
      basePrice: 120,
      description: "A matte-finish art print featuring the full text of the Beatitudes in an elegant, modern layout. Ideal for prayer spaces, offices, or living rooms. Available in multiple sizes to suit any décor.",
      image: "https://www.shutterstock.com/image-vector/verse-about-light-christian-poster-600nw-2639787873.jpg",
      hasVariants: true,
      variants: [
        { name: "Size", options: ["A5 ($12)", "A4 ($18)", "A3 ($25)"] }
      ]
    },

    // --- POSTERS & PRINTS ---
    { 
      id: "po1", 
      category: "Posters", 
      name: "The Beatitudes Print", 
      basePrice: 25, 
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80", 
      hasVariants: true, 
      description: "A clean, minimalist print displaying the Beatitudes in a balanced, modern type layout. Printed on premium matte paper for a refined look suitable for framing.", 
      variants: [{ name: "Size", options: ["A5", "A4", "A3"] }] 
    },
    { 
      id: "po2", 
      category: "Posters", 
      name: "Psalm 23 Minimalist", 
      basePrice: 49, 
      image: "https://i0.wp.com/www.flandersfamily.info/web/wp-content/uploads/2024/07/23rd-Psalm-Printable-IG.png?fit=1200%2C1200&ssl=1", 
      hasVariants: true, 
      description: "A serene and minimal print featuring the beloved Psalm 23. Designed with soft typography and spacious layout to evoke peace and reflection.", 
      variants: [{ name: "Size", options: ["A5", "A4", "A3"] }] 
    },
    { 
      id: "po3", 
      category: "Posters", 
      name: "Creation Abstract", 
      basePrice: 180, 
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80", 
      hasVariants: true, 
      description: "An abstract art print inspired by the wonder of creation. Bold shapes and gentle tones come together to create a striking yet soothing visual centerpiece.", 
      variants: [{ name: "Size", options: ["A5", "A4"] }] 
    },
    { 
      id: "po4", 
      category: "Posters", 
      name: "Faith Hope Love", 
      basePrice: 150, 
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=800&q=80", 
      hasVariants: true, 
      description: "A modern typographic poster featuring the timeless trio: faith, hope, and love. Printed on smooth matte paper to ensure longevity and vibrant detail.", 
      variants: [{ name: "Size", options: ["A5", "A4", "A3"] }] 
    },
  
    // --- STICKERS & BADGES ---
    { 
      id: "sb1", 
      category: "Stickers", 
      name: "Vinyl Sticker Pack (x5)", 
      basePrice: 100, 
      image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=800&q=80", 
      description: "A pack of five high-quality vinyl stickers featuring uplifting and aesthetic designs. Fully waterproof and durable, perfect for laptops, water bottles, tablets, and more.", 
      hasVariants: false 
    },
    { 
      id: "sb2", 
      category: "Stickers", 
      name: "Laptop Skin - Marble", 
      basePrice: 150, 
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80", 
      description: "A smooth and stylish marble-pattern vinyl laptop skin designed to protect your device from scratches while giving it a clean, elegant appearance. Fits most 13–15 inch laptops.", 
      hasVariants: false 
    },
    { 
      id: "sb3", 
      category: "Stickers", 
      name: "Enamel Pin - Dove", 
      basePrice: 80, 
      image: "https://images.unsplash.com/photo-1632296727222-3829050d2870?auto=format&fit=crop&w=800&q=80", 
      description: "A beautifully crafted enamel pin shaped like a dove—an enduring symbol of peace. Perfect for jackets, bags, hats, or gifts.", 
      hasVariants: false 
    },
    { 
      id: "sb4", 
      category: "Stickers", 
      name: "Button Badges Set", 
      basePrice: 99, 
      image: "https://images.unsplash.com/photo-1533230408703-090de62725bc?auto=format&fit=crop&w=800&q=80", 
      description: "A set of colorful, lightweight button badges featuring inspiring designs. Great for backpacks, jackets, or sharing with friends.", 
      hasVariants: false 
    },
    {
      id: "sb5",
      name: "Be Still - Laptop Skin",
      category: "Tech",
      basePrice: 150,
      description: "A sleek vinyl laptop skin printed with the comforting message 'Be Still.' Resistant to scratches and bubbling, and easy to apply to most 13–15 inch laptops.",
      image: "https://i.pinimg.com/736x/07/60/e8/0760e8bf5f0e34118617fa280b53f782.jpg",
      hasVariants: false
    },

    // --- HOME (Mugs, Cushions) ---
    { 
      id: "hm1", 
      category: "Home", 
      name: "Morning Mercy Mug", 
      basePrice: 449, 
      image: "https://images.unsplash.com/photo-1617283433230-e0ef1af00cfc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      description: "A ceramic 12oz mug with a smooth finish, perfect for morning coffee or tea. Features an encouraging reminder of fresh mercies each day. Dishwasher and microwave safe.", 
      hasVariants: false 
    },
    { 
      id: "hm2", 
      category: "Home", 
      name: "Linen Cushion Cover", 
      basePrice: 149, 
      image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80", 
      description: "A soft and breathable linen cushion cover embroidered with delicate detailing. Adds warmth and texture to any living space with a simple, elegant aesthetic.", 
      hasVariants: false 
    },
    { 
      id: "hm3", 
      category: "Home", 
      name: "Scented Soy Candle", 
      basePrice: 199, 
      image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80", 
      description: "A hand-poured soy candle scented with frankincense and myrrh, offering a calming and earthy aroma. Burns cleanly and evenly for hours of peaceful ambiance.", 
      hasVariants: false 
    },
    { 
      id: "hm4", 
      category: "Gifts", 
      name: "The Starter Bundle", 
      basePrice: 849, 
      image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=80", 
      description: "A thoughtfully curated gift bundle featuring a cozy hoodie, a high-quality journal, and a ceramic mug. Perfect for new believers, students, or anyone wanting to begin their faith-filled journey with meaningful essentials.", 
      hasVariants: true, 
      variants: [{ name: "Size", options: ["S", "M", "L"] }] 
    },
    {
      id: "hm5",
      name: "St. Francis Tote Bag",
      category: "Accessories",
      basePrice: 199,
      description: "A durable canvas tote inspired by the peaceful spirit of St. Francis. Designed for everyday carry, offering ample space for books, groceries, or personal items with comfortable shoulder straps.",
      image: "https://i.pinimg.com/736x/b4/e2/15/b4e2156269f6f132721667cd12bfed7c.jpg",
      hasVariants: false
    },
  ];
  
// This simulates a Database Query
export async function getProducts() {
  return PRODUCTS;
}

export async function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}
