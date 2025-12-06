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
    src: "/placeholder.svg?height=600&width=900",
    alt: "Elegant restaurant interior with warm ambient lighting",
    category: "interior",
    aspectRatio: "wide",
  },
  {
    id: "interior-2",
    src: "/placeholder.svg?height=800&width=600",
    alt: "Private dining alcove with gold accents",
    category: "interior",
    aspectRatio: "tall",
  },
  {
    id: "interior-3",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Intimate table setting with candlelight",
    category: "interior",
    aspectRatio: "square",
  },

  // Food Macro / Texture Shots
  {
    id: "food-1",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Steam rising from freshly prepared Dal Makhani",
    category: "food",
    aspectRatio: "square",
  },
  {
    id: "food-2",
    src: "/placeholder.svg?height=800&width=600",
    alt: "The golden texture of fresh tandoori naan",
    category: "food",
    aspectRatio: "tall",
  },
  {
    id: "food-3",
    src: "/placeholder.svg?height=600&width=900",
    alt: "Sizzling paneer tikka straight from the tandoor",
    category: "food",
    aspectRatio: "wide",
  },
  {
    id: "food-4",
    src: "/placeholder.svg?height=600&width=600",
    alt: "Saffron strands adorning aromatic biryani",
    category: "food",
    aspectRatio: "square",
  },
  {
    id: "food-5",
    src: "/placeholder.svg?height=600&width=900",
    alt: "Our signature spice blend",
    category: "food",
    aspectRatio: "wide",
  },
  {
    id: "food-6",
    src: "/placeholder.svg?height=800&width=600",
    alt: "The perfect crisp of a Mysore Dosa",
    category: "food",
    aspectRatio: "tall",
  },

  // Action / Chef Shots
  {
    id: "action-1",
    src: "/placeholder.svg?height=600&width=900",
    alt: "Chef's hands crafting the perfect presentation",
    category: "action",
    aspectRatio: "wide",
  },
  {
    id: "action-2",
    src: "/placeholder.svg?height=800&width=600",
    alt: "Flames dancing in our traditional tandoor",
    category: "action",
    aspectRatio: "tall",
  },
  {
    id: "action-3",
    src: "/placeholder.svg?height=600&width=600",
    alt: "The art of the perfect pour",
    category: "action",
    aspectRatio: "square",
  },
  {
    id: "action-4",
    src: "/placeholder.svg?height=600&width=900",
    alt: "Final touches before service",
    category: "action",
    aspectRatio: "wide",
  },
]
