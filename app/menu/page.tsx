"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Leaf, Phone, ArrowLeft, Flame, Plus, Check, Sparkles, X } from "lucide-react"
import { menuItems, categories, type CategoryId, type MenuItem } from "@/lib/menuData"

const tagLabels: Record<string, { label: string; className: string }> = {
  vegan: { label: "Vegan", className: "bg-green-500/20 text-green-400 border-green-500/30" },
  jain: { label: "Jain", className: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
  "gluten-free": { label: "GF", className: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  "chefs-special": { label: "Chef's Special", className: "bg-primary/20 text-primary border-primary/30" },
  popular: { label: "Popular", className: "bg-rose-500/20 text-rose-400 border-rose-500/30" },
}

function DishCard({ item, onAddToOrder }: { item: MenuItem; onAddToOrder: (item: MenuItem) => void }) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAdd = () => {
    setIsAdded(true)
    onAddToOrder(item)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

        {/* Tags overlay */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-medium px-2 py-0.5 rounded-full border backdrop-blur-sm ${tagLabels[tag]?.className}`}
            >
              {tagLabels[tag]?.label}
            </span>
          ))}
        </div>

        {item.isSpicy && (
          <div className="absolute top-3 right-3">
            <Flame className="w-5 h-5 text-orange-500 drop-shadow-lg" />
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {item.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{item.description}</p>

        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <span className="font-serif text-2xl font-bold text-primary">₹{item.price}</span>
          <button
            onClick={handleAdd}
            disabled={isAdded}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
              isAdded
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                Added
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("south-indian")
  const [cart, setCart] = useState<MenuItem[]>([])
  const [showCart, setShowCart] = useState(false)

  const filteredItems = menuItems.filter((item) => item.category === activeCategory)

  const handleAddToOrder = (item: MenuItem) => {
    setCart((prev) => [...prev, item])
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline text-sm">Back</span>
              </Link>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-primary" />
                <span className="font-serif text-lg tracking-wide text-foreground">रामाश्रम</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {cart.length > 0 && (
                <button
                  onClick={() => setShowCart(!showCart)}
                  className="relative flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                >
                  <span className="text-sm font-medium">₹{cartTotal}</span>
                  <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center font-bold">
                    {cart.length}
                  </span>
                </button>
              )}
              <a
                href="tel:+917666722055"
                className="hidden sm:flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91-7666722055
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Live Menu</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight text-balance">
            Culinary Journey
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our carefully curated selection of authentic vegetarian dishes, each crafted with devotion to
            tradition and taste.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 z-40 bg-background/80 backdrop-blur-md border-b border-border/50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                <span className="text-base">{category.icon}</span>
                {category.label}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item) => (
                <DishCard key={item.id} item={item} onAddToOrder={handleAddToOrder} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Dietary Legend */}
      <section className="py-8 px-4 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-medium text-muted-foreground mb-4 text-center">Dietary Guide</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(tagLabels).map(([key, { label, className }]) => (
              <span key={key} className={`text-xs px-3 py-1.5 rounded-full border ${className}`}>
                {label}
              </span>
            ))}
            <span className="flex items-center gap-1.5 text-xs text-orange-400">
              <Flame className="w-3 h-3" />
              Spicy
            </span>
          </div>
        </div>
      </section>

      {/* Cart Drawer */}
      <AnimatePresence>
        {showCart && cart.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={() => setShowCart(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-card border-l border-border z-50 overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="font-serif text-xl font-semibold">Your Order</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex items-center gap-4 p-3 bg-secondary/50 rounded-lg">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{item.name}</h4>
                      <p className="text-primary font-semibold">₹{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-border bg-background/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-muted-foreground">Total</span>
                  <span className="font-serif text-2xl font-bold text-primary">₹{cartTotal}</span>
                </div>
                <p className="text-xs text-muted-foreground text-center mb-4">
                  This is a demo. Call us to place your order.
                </p>
                <a
                  href="tel:+917666722055"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call to Order
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Prices subject to applicable taxes. Menu items subject to availability.
          </p>
          <Link href="/" className="text-primary hover:text-primary/80 text-sm font-medium mt-2 inline-block">
            Back to Home
          </Link>
        </div>
      </footer>
    </main>
  )
}
