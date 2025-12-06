"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import {
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  Leaf,
  Star,
  Users,
  Calendar,
  Check,
  Loader2,
  UtensilsCrossed,
  Sparkles,
} from "lucide-react"

const menuItems = [
  {
    name: "Paneer Butter Masala",
    description: "Cottage cheese in rich tomato-cashew gravy with aromatic spices",
    price: "₹280",
    tag: "Chef's Special",
    region: "North Indian",
  },
  {
    name: "Masala Dosa",
    description: "Crispy rice crepe with spiced potato filling, served with chutneys",
    price: "₹150",
    tag: "Signature",
    region: "South Indian",
  },
  {
    name: "Dal Makhani",
    description: "Black lentils slow-cooked overnight with butter and cream",
    price: "₹220",
    tag: "Must Try",
    region: "North Indian",
  },
  {
    name: "Hyderabadi Biryani",
    description: "Fragrant basmati rice layered with vegetables and saffron",
    price: "₹320",
    tag: "Popular",
    region: "South Indian",
  },
  {
    name: "Chole Bhature",
    description: "Spiced chickpea curry with fluffy deep-fried bread",
    price: "₹180",
    tag: "Classic",
    region: "North Indian",
  },
  {
    name: "Idli Sambar",
    description: "Steamed rice cakes with lentil soup and coconut chutney",
    price: "₹120",
    tag: "Healthy",
    region: "South Indian",
  },
]

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "19:00",
    guests: "2",
    special_requests: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const supabase = createClient()
      const { error } = await supabase.from("reservations").insert({
        name: formData.name,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        guests: Number.parseInt(formData.guests),
        special_requests: formData.special_requests || null,
      })

      if (error) throw error

      setSubmitStatus("success")
      setFormData({
        name: "",
        phone: "",
        date: "",
        time: "19:00",
        guests: "2",
        special_requests: "",
      })
    } catch (err) {
      setSubmitStatus("error")
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToReservation = () => {
    document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="font-serif text-xl tracking-wide text-foreground">रामाश्रम</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <Link href="/menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Menu
              </Link>
              <Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <a href="#reservation" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Reservations
              </a>
              <a
                href="tel:+917666722055"
                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91-7666722055
              </a>
            </div>
            <button
              onClick={scrollToReservation}
              className="md:hidden px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Book Table
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/dark-moody-indian-food-photography-with-spices-and.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Pure Vegetarian</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight text-balance">
            ॥ रामाश्रम ॥
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-2 tracking-widest uppercase">
            Progressive Indian Cuisine
          </p>

          <p className="text-base text-muted-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
            Where ancient recipes meet modern culinary artistry. Experience the finest vegetarian traditions from South
            and North India, crafted with devotion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToReservation}
              className="group px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Reserve Your Table
              <Sparkles className="inline-block ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
            <Link
              href="/menu"
              className="px-8 py-4 border border-border text-foreground font-medium text-lg rounded-lg hover:bg-card hover:border-primary/50 transition-all duration-300"
            >
              View Menu
            </Link>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm">11 AM - 11 PM</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm">4.8 Rating</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-widest uppercase">Our Story</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
                A Hidden Gem in the Heart of Nagpur
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nestled in the vibrant neighborhood of Taj Nagar,{" "}
                  <span className="text-primary font-medium">॥ रामाश्रम ॥</span> has been serving authentic vegetarian
                  cuisine that honors the rich culinary heritage of India.
                </p>
                <p>
                  Our kitchen bridges the aromatic traditions of South India with the robust flavors of the North,
                  creating a dining experience that is both familiar and extraordinary.
                </p>
                <p>
                  Every dish is prepared with the finest ingredients, traditional techniques passed down through
                  generations, and an unwavering commitment to purity and taste.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years of Legacy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground mt-1">Pure Vegetarian</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground mt-1">Signature Dishes</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/elegant-indian-restaurant-interior-with-warm-light.jpg"
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border p-6 rounded-xl shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <UtensilsCrossed className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Cuisine</div>
                    <div className="font-medium text-foreground">South & North Indian</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Our Menu</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-4 text-balance">
              Signature Creations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              A curated selection of our most beloved dishes, each telling a story of tradition and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.region}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="font-serif text-2xl font-bold text-primary">{item.price}</span>
                  <Leaf className="w-4 h-4 text-primary/50" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm">
              Full menu available at the restaurant. Prices subject to applicable taxes.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-24 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Reservations</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-4 text-balance">
              Book Your Table
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
              Reserve your dining experience and let us prepare something special for you
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 sm:p-10 shadow-xl">
            {submitStatus === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Table Reserved!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for choosing रामाश्रम. We will confirm your reservation shortly via phone.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                      <Calendar className="w-4 h-4 inline-block mr-1" />
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                      <Clock className="w-4 h-4 inline-block mr-1" />
                      Time
                    </label>
                    <select
                      id="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-2">
                      <Users className="w-4 h-4 inline-block mr-1" />
                      Guests
                    </label>
                    <select
                      id="guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="special_requests" className="block text-sm font-medium text-foreground mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="special_requests"
                    value={formData.special_requests}
                    onChange={(e) => setFormData({ ...formData, special_requests: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Any dietary requirements or special occasions?"
                  />
                </div>

                {submitStatus === "error" && (
                  <div className="bg-destructive/10 border border-destructive/30 text-destructive-foreground px-4 py-3 rounded-lg text-sm">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Reserving...
                    </span>
                  ) : (
                    "Confirm Reservation"
                  )}
                </button>

                <p className="text-center text-sm text-muted-foreground">
                  Or call us directly at{" "}
                  <a href="tel:+917666722055" className="text-primary hover:underline">
                    +91-7666722055
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-primary" />
                <span className="font-serif text-2xl text-foreground">॥ रामाश्रम ॥</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Progressive Indian Cuisine
                <br />
                South & North Indian Restaurant
                <br />
                Pure Vegetarian
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Visit Us</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p>
                    Shop No - 01, Plot No - 01, Manewada Rd,
                    <br />
                    near Tukdoji Putla Square, Taj Nagar,
                    <br />
                    Bajrang Nagar, Tukdoji,
                    <br />
                    Nagpur, Maharashtra 440027
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Shop+No+01+Plot+No+01+Manewada+Rd+near+Tukdoji+Putla+Square+Taj+Nagar+Nagpur+Maharashtra+440027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <span>Get Directions</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <a href="tel:+917666722055" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  +91-7666722055
                </a>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>11:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} ॥ रामाश्रम ॥. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
