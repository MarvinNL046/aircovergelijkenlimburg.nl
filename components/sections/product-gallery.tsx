"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, X, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const allProducts = [
  // Daikin
  {
    id: "daikin-emura-wit",
    brand: "Daikin",
    model: "Emura 3",
    category: "premium",
    image: "/images/daikin-emura-wit.webp",
    price: 2499,
    capacity: "2.5-5.0 kW",
    features: ["A+++", "Design Award", "WiFi", "Fluisterstil"],
    energyLabel: "A+++"
  },
  {
    id: "daikin-emura-zilver",
    brand: "Daikin",
    model: "Emura 3 Silver",
    category: "premium",
    image: "/images/daikin-emura-zilver.webp",
    price: 2499,
    capacity: "2.5-5.0 kW",
    features: ["A+++", "Design Award", "WiFi", "Fluisterstil"],
    energyLabel: "A+++"
  },
  {
    id: "daikin-emura-zwart",
    brand: "Daikin",
    model: "Emura 3 Black",
    category: "premium",
    image: "/images/daikin-emura-zwart.webp",
    price: 2499,
    capacity: "2.5-5.0 kW",
    features: ["A+++", "Design Award", "WiFi", "Fluisterstil"],
    energyLabel: "A+++"
  },
  {
    id: "daikin-stylish-wit",
    brand: "Daikin",
    model: "Stylish White",
    category: "premium",
    image: "/images/daikin-stylish-wit.webp",
    price: 1899,
    capacity: "2.0-4.2 kW",
    features: ["A+++", "Coanda Effect", "Compact", "Smart Control"],
    energyLabel: "A+++"
  },
  {
    id: "daikin-stylish-zilver",
    brand: "Daikin",
    model: "Stylish Silver",
    category: "premium",
    image: "/images/daikin-stylish-silver.webp",
    price: 1899,
    capacity: "2.0-4.2 kW",
    features: ["A+++", "Coanda Effect", "Compact", "Smart Control"],
    energyLabel: "A+++"
  },
  {
    id: "daikin-stylish-zwart",
    brand: "Daikin",
    model: "Stylish Black",
    category: "premium",
    image: "/images/daikin-stylish-zwart.webp",
    price: 1899,
    capacity: "2.0-4.2 kW",
    features: ["A+++", "Coanda Effect", "Compact", "Smart Control"],
    energyLabel: "A+++"
  },
  {
    id: "daikin-perfera",
    brand: "Daikin",
    model: "Perfera",
    category: "comfort",
    image: "/images/daikin-perfera-wit.webp",
    price: 1599,
    capacity: "2.0-7.1 kW",
    features: ["A+++", "3D Luchtstroom", "Flash Streamer", "Quiet"],
    energyLabel: "A+++"
  },
  {
    id: "daikin-comfora",
    brand: "Daikin",
    model: "Comfora",
    category: "budget",
    image: "/images/daikin-comfora-right.webp",
    price: 1199,
    capacity: "2.0-6.0 kW",
    features: ["A++", "Onecta App", "Compact", "Stil"],
    energyLabel: "A++"
  },
  {
    id: "daikin-sensira",
    brand: "Daikin",
    model: "Sensira",
    category: "budget",
    image: "/images/daikin-sensira-wit.webp",
    price: 899,
    capacity: "2.0-5.0 kW",
    features: ["A++", "Basis Model", "Betrouwbaar", "Efficiënt"],
    energyLabel: "A++"
  },
  {
    id: "daikin-ururu-sarara",
    brand: "Daikin",
    model: "Ururu Sarara",
    category: "premium",
    image: "/images/Ururu-Sarara-right.webp",
    price: 2999,
    capacity: "2.5-5.0 kW",
    features: ["A+++", "Luchtbevochtiger", "Luchtzuivering", "5-in-1"],
    energyLabel: "A+++"
  },
  {
    id: "daikin-perfera-floor",
    brand: "Daikin",
    model: "Perfera FVXM",
    category: "floor",
    image: "/images/Perfera-vloermodel-left.webp",
    price: 1899,
    capacity: "2.5-5.0 kW",
    features: ["A++", "Vloermodel", "Double Flow", "Low Height"],
    energyLabel: "A++"
  },
  
  // LG
  {
    id: "lg-artcool-mirror",
    brand: "LG",
    model: "ArtCool Gallery Mirror",
    category: "premium",
    image: "/images/lg-artcool-mirror.webp",
    price: 2199,
    capacity: "2.5-5.0 kW",
    features: ["A++", "Kunstwerk Frame", "ThinQ", "Customizable"],
    energyLabel: "A++"
  },
  {
    id: "lg-artcool-black",
    brand: "LG",
    model: "ArtCool Gallery Black",
    category: "premium",
    image: "/images/rac-eu-lg-artcool-black.webp",
    price: 2199,
    capacity: "2.5-5.0 kW",
    features: ["A++", "Kunstwerk Frame", "ThinQ", "Premium Design"],
    energyLabel: "A++"
  },
  {
    id: "lg-dualcool-premium",
    brand: "LG",
    model: "DualCool Premium",
    category: "comfort",
    image: "/images/LG-dualcool-indoor-premium.webp",
    price: 1299,
    capacity: "2.5-6.6 kW",
    features: ["A++", "Dual Inverter", "ThinQ", "10 Year Warranty"],
    energyLabel: "A++"
  },
  {
    id: "lg-standard-plus",
    brand: "LG",
    model: "Standard Plus",
    category: "budget",
    image: "/images/rac-eu-standard-plus-.webp",
    price: 999,
    capacity: "2.5-5.0 kW",
    features: ["A+", "Betrouwbaar", "ThinQ Ready", "Fast Cooling"],
    energyLabel: "A+"
  },
  
  // Samsung
  {
    id: "samsung-windfree-elite",
    brand: "Samsung",
    model: "WindFree Elite",
    category: "premium",
    image: "/images/samsung/windfreeElite/WindFree Elite_S2_Front_Web_RGB.webp",
    price: 2299,
    capacity: "2.5-6.5 kW",
    features: ["A+++", "WindFree Cooling", "AI Control", "PM1.0 Filter"],
    energyLabel: "A+++"
  },
  {
    id: "samsung-windfree-comfort",
    brand: "Samsung",
    model: "WindFree Comfort",
    category: "comfort",
    image: "/images/samsung/windfreeComfort/WindFree Comfort_S2_Front_Web_RGB.webp",
    price: 1399,
    capacity: "2.5-5.0 kW",
    features: ["A++", "WindFree", "Fast Cooling", "Easy Filter"],
    energyLabel: "A++"
  },
  {
    id: "samsung-windfree-avant-black",
    brand: "Samsung",
    model: "WindFree Avant Black",
    category: "premium",
    image: "/images/samsung/windreeAvantBlack/WindFree Avant Black_Front_Web_RGB.webp",
    price: 1799,
    capacity: "2.5-5.0 kW",
    features: ["A++", "Black Design", "WindFree", "Silent Mode"],
    energyLabel: "A++"
  },
  {
    id: "samsung-luzon",
    brand: "Samsung",
    model: "Luzon",
    category: "budget",
    image: "/images/samsung/luzon/Luzon_S2_Front_Web_RGB.webp",
    price: 899,
    capacity: "2.5-5.0 kW",
    features: ["A+", "Digital Inverter", "Fast Cool", "Auto Clean"],
    energyLabel: "A+"
  },
  
  // Toshiba
  {
    id: "toshiba-haori-grijs",
    brand: "Toshiba",
    model: "Haori Grey",
    category: "premium",
    image: "/images/Haori-grijs-links_19_11zon.webp",
    price: 1799,
    capacity: "2.5-4.6 kW",
    features: ["A+++", "Textile Design", "Ultra Pure Filter", "Eco Mode"],
    energyLabel: "A+++"
  },
  {
    id: "toshiba-haori-zwart",
    brand: "Toshiba",
    model: "Haori Black",
    category: "premium",
    image: "/images/Haori-zwart-vooraanzicht_3_11zon.webp",
    price: 1799,
    capacity: "2.5-4.6 kW",
    features: ["A+++", "Textile Design", "Ultra Pure Filter", "Eco Mode"],
    energyLabel: "A+++"
  },
  {
    id: "toshiba-seiya-plus",
    brand: "Toshiba",
    model: "Seiya Plus",
    category: "budget",
    image: "/images/Seiya-plus-wit-vooraanzicht_12_11zon.webp",
    price: 999,
    capacity: "2.5-5.0 kW",
    features: ["A++", "Plasma Filter", "WiFi Ready", "Magic Coil"],
    energyLabel: "A++"
  },
  {
    id: "toshiba-daiseikai-10",
    brand: "Toshiba",
    model: "Daiseikai 10",
    category: "premium",
    image: "/images/Daiseikai 10-Wit-vooraanzicht_4_11zon.webp",
    price: 1999,
    capacity: "2.5-5.0 kW",
    features: ["A+++", "19dB Silent", "Plasma Ionizer", "PM2.5 Filter"],
    energyLabel: "A+++"
  },
  {
    id: "toshiba-kazumi-plus",
    brand: "Toshiba",
    model: "Kazumi Plus",
    category: "comfort",
    image: "/images/Kazumi-plus-white-vooraanzicht_8_11zon.webp",
    price: 1299,
    capacity: "2.5-5.0 kW",
    features: ["A++", "Self Cleaning", "WiFi", "Quiet Mode"],
    energyLabel: "A++"
  },
  {
    id: "toshiba-console",
    brand: "Toshiba",
    model: "Console",
    category: "floor",
    image: "/images/toshiba-console-vloermodel-wit_13_11zon.webp",
    price: 1399,
    capacity: "3.5-5.0 kW",
    features: ["A+", "Floor Standing", "Powerful", "Easy Install"],
    energyLabel: "A+"
  },
  
  // Mitsubishi Heavy Industries
  {
    id: "mitsubishi-titanium",
    brand: "Mitsubishi",
    model: "Titanium ZS-W",
    category: "comfort",
    image: "/images/Mitsubishi heavy indus/Mitsubishi-titanium-zs-wft.webp",
    price: 1499,
    capacity: "2.5-5.0 kW",
    features: ["A++", "Allergen Filter", "3D Auto", "Silent Mode"],
    energyLabel: "A++"
  },
  {
    id: "mitsubishi-floor",
    brand: "Mitsubishi",
    model: "SRF-ZS Floor",
    category: "floor",
    image: "/images/Mitsubishi heavy indus/Mitsubishi-Heavy-SRF-35-ZS-W-Vloer-unit-35-kW-Exclusief-buiten-unit.webp",
    price: 1699,
    capacity: "3.5 kW",
    features: ["A++", "Hyper Heating", "Weekly Timer", "3D Auto"],
    energyLabel: "A++"
  },
  
  // Tosot
  {
    id: "tosot-clivia-wit",
    brand: "Tosot",
    model: "Clivia White",
    category: "budget",
    image: "/images/724-clivia-wit-vooraanzicht.webp",
    price: 799,
    capacity: "2.6-5.3 kW",
    features: ["A++", "WiFi Ready", "I-Feel", "Turbo Mode"],
    energyLabel: "A++"
  },
  {
    id: "tosot-clivia-zwart",
    brand: "Tosot",
    model: "Clivia Black",
    category: "budget",
    image: "/images/712-clivia-zwart-vooraanzicht.webp",
    price: 799,
    capacity: "2.6-5.3 kW",
    features: ["A++", "WiFi Ready", "I-Feel", "Turbo Mode"],
    energyLabel: "A++"
  },
  {
    id: "tosot-pular",
    brand: "Tosot",
    model: "Pular",
    category: "budget",
    image: "/images/568-Pular-indoor-vooraanzicht.webp",
    price: 699,
    capacity: "2.6-5.2 kW",
    features: ["A+", "Basis Model", "I-Feel", "Sleep Mode"],
    energyLabel: "A+"
  },
  {
    id: "tosot-cosmo",
    brand: "Tosot",
    model: "Cosmo",
    category: "comfort",
    image: "/images/787-cosmo-indoor-vooraanzicht.webp",
    price: 1099,
    capacity: "2.6-7.0 kW",
    features: ["A++", "WiFi", "Cold Plasma", "Quiet Technology"],
    energyLabel: "A++"
  },
  {
    id: "tosot-console",
    brand: "Tosot",
    model: "Console Floor",
    category: "floor",
    image: "/images/374-WTS-indoor-console-vloernmodel-tosot.webp",
    price: 1299,
    capacity: "3.5-5.3 kW",
    features: ["A+", "Floor Model", "Powerful", "Remote Control"],
    energyLabel: "A+"
  },
  
  // Mobiele Airco's
  {
    id: "lg-mobiel",
    brand: "LG",
    model: "Mobiele Airco",
    category: "mobile",
    image: "/images/mobiele airco/lg mobiele airco/lg-mobiele-airco-staycoolairco.webp",
    price: 599,
    capacity: "2.6 kW",
    features: ["Mobiel", "Plug & Play", "Timer", "Afstandsbediening"],
    energyLabel: "A"
  },
  {
    id: "tosot-mobiel",
    brand: "Tosot",
    model: "Mobiele Airco",
    category: "mobile",
    image: "/images/mobiele airco/tosot mobiele airco/tosot-mobiele-airco-staycoolairco-1.webp",
    price: 499,
    capacity: "2.6 kW",
    features: ["Mobiel", "3-in-1", "Sleep Mode", "LED Display"],
    energyLabel: "A"
  }
]

const brands = ["Alle", "Daikin", "LG", "Samsung", "Toshiba", "Mitsubishi", "Tosot"]
const categories = [
  { id: "all", name: "Alle", icon: "🏠" },
  { id: "premium", name: "Premium Design", icon: "⭐" },
  { id: "comfort", name: "Comfort Serie", icon: "🌡️" },
  { id: "budget", name: "Budget Vriendelijk", icon: "💰" },
  { id: "floor", name: "Vloermodellen", icon: "📦" },
  { id: "mobile", name: "Mobiele Airco's", icon: "🔌" }
]

const energyLabels = [
  { id: "all", name: "Alle labels" },
  { id: "A+++", name: "A+++ (Zuinigst)" },
  { id: "A++", name: "A++" },
  { id: "A+", name: "A+" },
  { id: "A", name: "A" }
]

export function ProductGallery() {
  const [selectedBrand, setSelectedBrand] = useState("Alle")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedEnergyLabel, setSelectedEnergyLabel] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const filteredProducts = allProducts.filter(product => {
    const matchesBrand = selectedBrand === "Alle" || product.brand === selectedBrand
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = searchQuery === "" || 
      product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesEnergyLabel = selectedEnergyLabel === "all" || product.energyLabel === selectedEnergyLabel

    return matchesBrand && matchesCategory && matchesSearch && matchesEnergyLabel
  })

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ons Complete Airco Assortiment
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Meer dan {allProducts.length} modellen van de beste merken. 
            Vind de perfecte airco voor uw situatie en budget.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Zoek op merk of model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters {showFilters ? "verbergen" : "tonen"}
            </Button>
          </div>

          {/* Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 pt-4 border-t border-gray-200 overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {/* Brand Filter */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Merk</h3>
                    <div className="space-y-2">
                      {brands.map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="brand"
                            checked={selectedBrand === brand}
                            onChange={() => setSelectedBrand(brand)}
                            className="text-orange-500"
                          />
                          <span className="text-gray-700">{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Categorie</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="category"
                            checked={selectedCategory === category.id}
                            onChange={() => setSelectedCategory(category.id)}
                            className="text-orange-500"
                          />
                          <span className="text-gray-700">
                            {category.icon} {category.name}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Energy Label Filter */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Energielabel</h3>
                    <div className="space-y-2">
                      {energyLabels.map((label) => (
                        <label key={label.id} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="energy"
                            checked={selectedEnergyLabel === label.id}
                            onChange={() => setSelectedEnergyLabel(label.id)}
                            className="text-orange-500"
                          />
                          <span className="text-gray-700">{label.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          {filteredProducts.length} producten gevonden
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card 
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative aspect-square bg-gray-50">
                  <Image
                    src={product.image}
                    alt={`${product.brand} ${product.model}`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {product.energyLabel && (
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      {product.energyLabel}
                    </div>
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-gray-900">{product.brand}</h3>
                  <p className="text-lg font-bold text-gray-900 mb-2">{product.model}</p>
                  <p className="text-sm text-gray-600 mb-3">{product.capacity}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4 flex-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-semibold text-gray-600">
                      Prijs op aanvraag
                    </span>
                    <Button size="sm" className="btn-primary">
                      Info
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Product Detail Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                    {selectedProduct.brand} {selectedProduct.model}
                  </h2>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6">
                  <div className="relative aspect-square bg-gray-50 rounded-lg">
                    <Image
                      src={selectedProduct.image}
                      alt={`${selectedProduct.brand} ${selectedProduct.model}`}
                      fill
                      className="object-contain p-8"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-2xl font-bold text-gray-900 mb-2">
                        Interesse in dit model?
                      </p>
                      <p className="text-gray-600 mb-2">
                        Capaciteit: {selectedProduct.capacity}
                      </p>
                      <p className="text-gray-600">
                        Ontvang een persoonlijke offerte op maat
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Kenmerken</h3>
                      <div className="space-y-2">
                        {selectedProduct.features.map((feature: string, index: number) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Link href="/contact" className="flex-1">
                        <Button className="btn-primary w-full">
                          Direct Contact
                        </Button>
                      </Link>
                      <Link href="tel:0462021430">
                        <Button variant="outline" className="btn-secondary">
                          046 202 1430
                        </Button>
                      </Link>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>✓ Persoonlijk advies</strong> van onze airco specialisten
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Benieuwd naar de mogelijkheden?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Ontvang direct persoonlijk advies van onze airco specialisten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                Plan Een Gesprek
              </Button>
            </Link>
            <Link href="tel:0462021430">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Bel Direct: 046 202 1430
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}