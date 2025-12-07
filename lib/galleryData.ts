export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: "interior" | "food" | "action"
  aspectRatio: "wide" | "tall" | "square"
}

export const galleryImages: GalleryImage[] = [
  // Interior / Vibe Shots
  {
    id: "interior-1",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=600&fit=crop",
    alt: "Elegant restaurant interior with warm ambient lighting",
    category: "interior",
    aspectRatio: "wide",
  },
  {
    id: "interior-2",
    src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=800&fit=crop",
    alt: "Private dining alcove with gold accents",
    category: "interior",
    aspectRatio: "tall",
  },
  {
    id: "interior-3",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=600&fit=crop",
    alt: "Intimate table setting with candlelight",
    category: "interior",
    aspectRatio: "square",
  },

  // Food Macro / Texture Shots
  {
    id: "food-1",
    src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=600&fit=crop",
    alt: "Steam rising from freshly prepared Dal Makhani",
    category: "food",
    aspectRatio: "square",
  },
  {
    id: "food-2",
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=800&fit=crop",
    alt: "The golden texture of fresh tandoori naan",
    category: "food",
    aspectRatio: "tall",
  },
  {
    id: "food-3",
    src: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=900&h=600&fit=crop",
    alt: "Sizzling paneer tikka straight from the tandoor",
    category: "food",
    aspectRatio: "wide",
  },
  {
    id: "food-4",
    src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=600&fit=crop",
    alt: "Saffron strands adorning aromatic biryani",
    category: "food",
    aspectRatio: "square",
  },
  {
    id: "food-5",
    src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=900&h=600&fit=crop",
    alt: "Our signature spice blend",
    category: "food",
    aspectRatio: "wide",
  },
  {
    id: "food-6",
    src: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&h=800&fit=crop",
    alt: "The perfect crisp of a Mysore Dosa",
    category: "food",
    aspectRatio: "tall",
  },

  // Action / Chef Shots
  {
    id: "action-1",
    src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&h=600&fit=crop",
    alt: "Chef's hands crafting the perfect presentation",
    category: "action",
    aspectRatio: "wide",
  },
  {
    id: "action-2",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=800&fit=crop",
    alt: "Flames dancing in our traditional tandoor",
    category: "action",
    aspectRatio: "tall",
  },
  {
    id: "action-3",
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=600&fit=crop",
    alt: "The art of the perfect pour",
    category: "action",
    aspectRatio: "square",
  },
  {
    id: "action-4",
    src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&h=600&fit=crop",
    alt: "Final touches before service",
    category: "action",
    aspectRatio: "wide",
  },
]
