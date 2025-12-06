"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Leaf, Phone, ArrowLeft, X, ChevronLeft, ChevronRight, Camera, Utensils, Home } from "lucide-react"
import { galleryImages, type GalleryImage } from "@/lib/galleryData"

const filterOptions = [
  { id: "all", label: "All", icon: Camera },
  { id: "interior", label: "The Vibe", icon: Home },
  { id: "food", label: "Culinary Art", icon: Utensils },
  { id: "action", label: "Behind the Scenes", icon: Camera },
] as const

type FilterId = (typeof filterOptions)[number]["id"]

function MasonryGrid({ images, onImageClick }: { images: GalleryImage[]; onImageClick: (index: number) => void }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
          className="break-inside-avoid"
        >
          <button
            onClick={() => onImageClick(index)}
            className="group relative w-full overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div
              className={`relative ${
                image.aspectRatio === "wide"
                  ? "aspect-[3/2]"
                  : image.aspectRatio === "tall"
                    ? "aspect-[3/4]"
                    : "aspect-square"
              }`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-sm text-foreground font-medium line-clamp-2">{image.alt}</p>
              </div>
            </div>
          </button>
        </motion.div>
      ))}
    </div>
  )
}

function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryImage[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const currentImage = images[currentIndex]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 bg-card/50 border border-border rounded-full text-foreground hover:text-primary hover:border-primary/50 transition-all z-10"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Navigation buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-4 md:left-8 p-3 bg-card/50 border border-border rounded-full text-foreground hover:text-primary hover:border-primary/50 transition-all z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-4 md:right-8 p-3 bg-card/50 border border-border rounded-full text-foreground hover:text-primary hover:border-primary/50 transition-all z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image */}
      <motion.div
        key={currentImage.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="max-w-5xl max-h-[80vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src || "/placeholder.svg"}
          alt={currentImage.alt}
          className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
        />
        <div className="mt-4 text-center">
          <p className="text-foreground font-medium">{currentImage.alt}</p>
          <p className="text-sm text-muted-foreground mt-1">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages =
    activeFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter)

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length)
    }
  }

  // Keyboard navigation
  if (typeof window !== "undefined") {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "Escape") setLightboxIndex(null)
    }

    if (lightboxIndex !== null) {
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
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

            <a
              href="tel:+917666722055"
              className="hidden sm:flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91-7666722055
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Visual Stories</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight text-balance">
            A Sensory Journey
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Immerse yourself in the artistry of our kitchen, the warmth of our space, and the passion that goes into
            every dish we create.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 z-30 bg-background/80 backdrop-blur-md border-b border-border/50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 justify-center flex-wrap">
            {filterOptions.map((filter) => {
              const Icon = filter.icon
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {filter.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MasonryGrid images={filteredImages} onImageClick={setLightboxIndex} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">Experience It In Person</h2>
          <p className="text-muted-foreground mb-8">
            Photos can only capture so much. Visit us to experience the full sensory journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#reservation"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Reserve Your Table
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-card hover:border-primary/50 transition-all"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">All images are representative of our cuisine and ambiance.</p>
          <Link href="/" className="text-primary hover:text-primary/80 text-sm font-medium mt-2 inline-block">
            Back to Home
          </Link>
        </div>
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={filteredImages}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>
    </main>
  )
}
