export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "south-indian" | "north-indian" | "tandoor" | "rice-breads"
  tags: ("vegan" | "jain" | "gluten-free" | "chefs-special" | "popular")[]
  isSpicy?: boolean
}

export const menuItems: MenuItem[] = [
  // South Indian Specials
  {
    id: "mysore-masala-dosa",
    name: "Mysore Masala Dosa",
    description:
      "Fermented rice crepe kissed with fiery red chutney, stuffed with hand-mashed spiced potatoes, served with a coconut chutney trio and aromatic sambar",
    price: 180,
    image: "/crispy-golden-masala-dosa-with-chutney-south-india.jpg",
    category: "south-indian",
    tags: ["vegan", "popular"],
    isSpicy: true,
  },
  {
    id: "idli-sambar-platter",
    name: "Idli Sambar Platter",
    description:
      "Cloud-soft steamed rice cakes, ethereal in texture, floating alongside a warming lentil broth infused with tamarind and curry leaves",
    price: 140,
    image: "/soft-white-idli-with-sambar-and-coconut-chutney-so.jpg",
    category: "south-indian",
    tags: ["vegan", "jain", "gluten-free"],
  },
  {
    id: "medu-vada",
    name: "Medu Vada",
    description:
      "Crisp-fried urad dal doughnuts, golden crusted with a pillowy interior, served with coconut chutney and spiced sambar",
    price: 120,
    image: "/crispy-golden-medu-vada-south-indian-snack.jpg",
    category: "south-indian",
    tags: ["vegan", "gluten-free"],
  },
  {
    id: "rava-uttapam",
    name: "Rava Uttapam",
    description:
      "Semolina pancake adorned with jewels of tomato, onion, and green chilies, griddled to golden perfection",
    price: 160,
    image: "/rava-uttapam-with-vegetables-south-indian-breakfas.jpg",
    category: "south-indian",
    tags: ["popular"],
    isSpicy: true,
  },

  // North Indian Curries
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    description:
      "Velvet cubes of cottage cheese swimming in a silken tomato-cashew gravy, finished with a whisper of kasuri methi and fresh cream",
    price: 320,
    image: "/rich-creamy-paneer-butter-masala-indian-curry.jpg",
    category: "north-indian",
    tags: ["chefs-special", "popular"],
  },
  {
    id: "dal-makhani",
    name: "Dal Makhani",
    description:
      "Black lentils and kidney beans, slow-simmered through the night in brass vessels, enriched with butter and cream until impossibly luxurious",
    price: 280,
    image: "/creamy-dal-makhani-black-lentils-indian-food-dark-.jpg",
    category: "north-indian",
    tags: ["chefs-special", "gluten-free"],
  },
  {
    id: "shahi-paneer",
    name: "Shahi Paneer",
    description:
      "Royal cottage cheese in an aristocratic gravy of cashews, cream, and aromatic spices, fit for Mughal courts",
    price: 340,
    image: "/shahi-paneer-creamy-white-gravy-indian-cuisine.jpg",
    category: "north-indian",
    tags: ["popular"],
  },
  {
    id: "palak-paneer",
    name: "Palak Paneer",
    description:
      "Emerald spinach purée cradling golden-seared paneer cubes, seasoned with cumin, garlic, and a touch of cream",
    price: 290,
    image: "/palak-paneer-spinach-curry-with-paneer-cubes-india.jpg",
    category: "north-indian",
    tags: ["gluten-free"],
  },
  {
    id: "chole-punjabi",
    name: "Chole Punjabi",
    description:
      "Robust chickpeas braised in a dark, tangy gravy of onions and tomatoes, kissed with pomegranate powder and secret spices",
    price: 240,
    image: "/punjabi-chole-chickpea-curry-indian-food-dark.jpg",
    category: "north-indian",
    tags: ["vegan", "jain"],
    isSpicy: true,
  },

  // Tandoor Starters
  {
    id: "paneer-tikka",
    name: "Paneer Tikka",
    description:
      "Marble-cut cottage cheese, marinated in hung curd and char-grilled in the clay oven until edges caramelize and smoke",
    price: 340,
    image: "/charred-paneer-tikka-on-skewers-indian-tandoori-ap.jpg",
    category: "tandoor",
    tags: ["chefs-special", "gluten-free"],
  },
  {
    id: "malai-chaap",
    name: "Malai Chaap",
    description: "Succulent soy chaap bathed in cream and mild spices, slow-roasted in the tandoor to smoky perfection",
    price: 320,
    image: "/malai-chaap-creamy-tandoori-indian-starter.jpg",
    category: "tandoor",
    tags: ["popular"],
  },
  {
    id: "hara-bhara-kebab",
    name: "Hara Bhara Kebab",
    description: "Emerald patties of spinach, peas, and potato, delicately spiced and pan-seared to a golden crust",
    price: 260,
    image: "/green-hara-bhara-kebab-indian-appetizer.jpg",
    category: "tandoor",
    tags: ["vegan", "jain"],
  },
  {
    id: "dahi-ke-kebab",
    name: "Dahi Ke Kebab",
    description:
      "Melt-in-mouth patties of hung curd and paneer, lightly fried to create a crisp shell around a creamy core",
    price: 280,
    image: "/dahi-ke-kebab-yogurt-kebab-indian-starter-white.jpg",
    category: "tandoor",
    tags: ["gluten-free"],
  },

  // Rice & Breads
  {
    id: "veg-biryani",
    name: "Hyderabadi Veg Biryani",
    description:
      "Fragrant aged basmati layered with seasonal vegetables, saffron, and dum-cooked spices, sealed with traditions of the Nizams",
    price: 340,
    image: "/hyderabadi-vegetable-biryani-with-saffron-rice-ind.jpg",
    category: "rice-breads",
    tags: ["chefs-special", "popular"],
  },
  {
    id: "garlic-naan",
    name: "Garlic Naan",
    description:
      "Pillowy leavened bread, slapped against the tandoor walls, generously brushed with garlic butter and fresh coriander",
    price: 80,
    image: "/garlic-naan-bread-with-butter-indian-bread.jpg",
    category: "rice-breads",
    tags: ["popular"],
  },
  {
    id: "butter-roti",
    name: "Butter Roti",
    description: "Whole wheat flatbread, hand-rolled and flame-kissed on the tawa, glistening with pure ghee",
    price: 50,
    image: "/placeholder.svg?height=400&width=600",
    category: "rice-breads",
    tags: ["jain"],
  },
  {
    id: "laccha-paratha",
    name: "Laccha Paratha",
    description:
      "Multi-layered whole wheat bread, each stratum brushed with ghee, creating a flaky, buttery masterpiece",
    price: 70,
    image: "/placeholder.svg?height=400&width=600",
    category: "rice-breads",
    tags: [],
  },
  {
    id: "jeera-rice",
    name: "Jeera Rice",
    description: "Long-grain basmati tempered with cumin seeds and ghee, fluffy and aromatic",
    price: 140,
    image: "/placeholder.svg?height=400&width=600",
    category: "rice-breads",
    tags: ["vegan", "jain", "gluten-free"],
  },
]

export const categories = [
  { id: "south-indian", label: "South Indian Specials", icon: "🍃" },
  { id: "north-indian", label: "North Indian Curries", icon: "🍛" },
  { id: "tandoor", label: "Tandoor Starters", icon: "🔥" },
  { id: "rice-breads", label: "Rice & Breads", icon: "🍚" },
] as const

export type CategoryId = (typeof categories)[number]["id"]
