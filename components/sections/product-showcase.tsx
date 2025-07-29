"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Check, Zap, Wind, Leaf, Volume2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const productCategories = [
  {
    id: "premium",
    name: "Premium Design",
    description: "Stijlvolle airco's die perfect passen in uw interieur",
    icon: Star,
    products: [
      {
        id: 1,
        brand: "Daikin",
        model: "Emura 3",
        image: "/images/daikin-emura-wit.webp",
        
        features: ["Fluisterstil", "WiFi Control", "A+++", "Design Award"],
        colors: ["wit", "zilver", "zwart"]
      },
      {
        id: 2,
        brand: "Daikin",
        model: "Stylish",
        image: "/images/daikin-stylish-wit.webp",
        
        features: ["Coanda Effect", "Smart Control", "A+++", "Compact Design"],
        colors: ["wit", "zilver", "zwart"]
      },
      {
        id: 3,
        brand: "LG",
        model: "ArtCool Gallery",
        image: "/images/lg-artcool-mirror.webp",
        
        features: ["Kunstwerk Frame", "ThinQ", "A++", "Customizable"],
        colors: ["mirror", "black"]
      },
      {
        id: 4,
        brand: "Samsung",
        model: "WindFree Elite",
        image: "/images/samsung/windfreeElite/WindFree Elite_S2_Front_Web_RGB.webp",
        
        features: ["WindFree Cooling", "AI Control", "A+++", "Silent Mode"],
        colors: ["wit"]
      }
    ]
  },
  {
    id: "comfort",
    name: "Comfort Serie",
    description: "Betrouwbare airco's met uitstekende prijs-kwaliteit",
    icon: Wind,
    products: [
      {
        id: 5,
        brand: "Daikin",
        model: "Perfera",
        image: "/images/daikin-perfera-wit.webp",
        
        features: ["3D Luchtstroom", "Flash Streamer", "A+++", "Quiet Operation"]
      },
      {
        id: 6,
        brand: "Toshiba",
        model: "Seiya Plus",
        image: "/images/Seiya-plus-wit-vooraanzicht_12_11zon.webp",
        
        features: ["Plasma Filter", "WiFi Ready", "A++", "Magic Coil"]
      },
      {
        id: 7,
        brand: "Samsung",
        model: "WindFree Comfort",
        image: "/images/samsung/windfreeComfort/WindFree Comfort_S2_Front_Web_RGB.webp",
        
        features: ["WindFree", "Fast Cooling", "A++", "Easy Filter"]
      },
      {
        id: 8,
        brand: "LG",
        model: "DualCool Premium",
        image: "/images/LG-dualcool-indoor-premium.webp",
        
        features: ["Dual Inverter", "ThinQ", "A++", "10 Year Warranty"]
      }
    ]
  },
  {
    id: "floor",
    name: "Vloermodellen",
    description: "Krachtige vloermodellen voor optimale warmteverdeling",
    icon: Zap,
    products: [
      {
        id: 9,
        brand: "Daikin",
        model: "Perfera FVXM",
        image: "/images/Perfera-vloermodel-left.webp",
        
        features: ["Vloerverwarming", "Double Flow", "A++", "Low Height"]
      },
      {
        id: 10,
        brand: "Toshiba",
        model: "Console",
        image: "/images/toshiba-console-vloermodel-wit_13_11zon.webp",
        
        features: ["Floor Standing", "Powerful", "A+", "Easy Install"]
      },
      {
        id: 11,
        brand: "Mitsubishi",
        model: "SRF-ZS",
        image: "/images/Mitsubishi heavy indus/Mitsubishi-Heavy-SRF-35-ZS-W-Vloer-unit-35-kW-Exclusief-buiten-unit.webp",
        
        features: ["Hyper Heating", "Weekly Timer", "A++", "3D Auto"]
      }
    ]
  },
  {
    id: "eco",
    name: "Eco Friendly",
    description: "Duurzame oplossingen met het laagste energieverbruik",
    icon: Leaf,
    products: [
      {
        id: 12,
        brand: "Daikin",
        model: "Ururu Sarara",
        image: "/images/Ururu-Sarara-right.webp",
        
        features: ["Luchtbevochtiger", "Luchtzuivering", "A+++", "R-32"]
      },
      {
        id: 13,
        brand: "Toshiba",
        model: "Haori",
        image: "/images/Haori-grijs-links_19_11zon.webp",
        
        features: ["Textile Design", "Ultra Pure Filter", "A+++", "Eco Mode"],
        colors: ["grijs", "zwart", "bruin", "crème", "blauw"]
      }
    ]
  },
  {
    id: "silent",
    name: "Ultra Stil",
    description: "De stilste airco's voor slaapkamers en kantoren",
    icon: Volume2,
    products: [
      {
        id: 14,
        brand: "Toshiba",
        model: "Daiseikai 10",
        image: "/images/Daiseikai 10-Wit-vooraanzicht_4_11zon.webp",
        
        features: ["19dB Silent", "Plasma Ionizer", "A+++", "PM2.5 Filter"]
      },
      {
        id: 15,
        brand: "Samsung",
        model: "WindFree Avant",
        image: "/images/samsung/windreeAvantBlack/WindFree Avant Black_Front_Web_RGB.webp",
        
        features: ["21dB Operation", "WindFree", "A++", "Black Design"]
      }
    ]
  }
]

export function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState(productCategories[0])
  const [currentProductIndex, setCurrentProductIndex] = useState(0)

  const nextProduct = () => {
    setCurrentProductIndex((prev) => 
      prev === selectedCategory.products.length - 1 ? 0 : prev + 1
    )
  }

  const prevProduct = () => {
    setCurrentProductIndex((prev) => 
      prev === 0 ? selectedCategory.products.length - 1 : prev - 1
    )
  }

  const currentProduct = selectedCategory.products[currentProductIndex]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ontdek Onze Premium Airco Collectie
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Van stijlvolle design modellen tot krachtige klimaatsystemen. 
            Wij hebben de perfecte airco voor elke ruimte en elk budget.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-2">
          {productCategories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category)
                  setCurrentProductIndex(0)
                }}
                variant={selectedCategory.id === category.id ? "default" : "outline"}
                className={`flex items-center gap-1 sm:gap-2 text-sm sm:text-base px-3 sm:px-4 ${
                  selectedCategory.id === category.id 
                    ? "bg-orange-500 hover:bg-orange-600 text-white" 
                    : "hover:bg-orange-50 hover:border-orange-300"
                }`}
              >
                <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </Button>
            )
          })}
        </div>

        {/* Product Display */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Product Image Carousel */}
          <div className="relative order-2 lg:order-1">
            <Card className="overflow-hidden bg-gray-50 border-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProduct.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square"
                >
                  <Image
                    src={currentProduct.image}
                    alt={`${currentProduct.brand} ${currentProduct.model}`}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-orange-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-semibold text-sm sm:text-base">
                    Op aanvraag
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>

            {/* Navigation Arrows */}
            {selectedCategory.products.length > 1 && (
              <>
                <button
                  onClick={prevProduct}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all"
                  aria-label="Vorige product"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={nextProduct}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all"
                  aria-label="Volgende product"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>
            )}

            {/* Product Dots */}
            {selectedCategory.products.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {selectedCategory.products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProductIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentProductIndex 
                        ? "bg-orange-500 w-8" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Ga naar product ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {currentProduct.brand} {currentProduct.model}
                  </h3>
                  <p className="text-gray-600">
                    {selectedCategory.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {currentProduct.features?.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-orange-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Color Options */}
                {currentProduct.colors && (
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 mb-3">Beschikbare kleuren:</p>
                    <div className="flex gap-3">
                      {currentProduct.colors.map((color) => (
                        <div
                          key={color}
                          className="w-8 h-8 rounded-full border-2 border-gray-300"
                          style={{
                            backgroundColor: 
                              color === "wit" ? "#ffffff" :
                              color === "zwart" ? "#000000" :
                              color === "zilver" ? "#C0C0C0" :
                              color === "grijs" ? "#808080" :
                              color === "bruin" ? "#8B4513" :
                              color === "crème" ? "#FFFDD0" :
                              color === "blauw" ? "#4169E1" :
                              color === "mirror" ? "#E5E5E5" :
                              color === "black" ? "#000000" : "#ffffff"
                          }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/offerte" className="w-full sm:w-auto">
                    <Button className="btn-primary w-full">
                      Vraag Uw Prijs Op
                    </Button>
                  </Link>
                  <Link href="tel:0462021430" className="w-full sm:w-auto">
                    <Button variant="outline" className="btn-secondary w-full">
                      Bel Voor Advies
                    </Button>
                  </Link>
                </div>

                {/* Trust Badge */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>✓ Maatwerk offerte</strong> binnen 24 uur in uw mailbox
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Meer dan {productCategories.reduce((acc, cat) => acc + cat.products.length, 0)} modellen op voorraad
          </p>
          <Link href="/producten">
            <Button size="lg" className="btn-primary">
              Bekijk Alle Producten
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}