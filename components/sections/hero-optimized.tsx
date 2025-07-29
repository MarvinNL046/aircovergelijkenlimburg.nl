"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/forms/contact-form"
import { Phone, Star, Clock, Shield, CheckCircle } from "lucide-react"

const rotatingHeadlines = [
  "Professionele Airco Installatie in Limburg",
  "Gecertificeerde Monteurs voor uw Woning",
  "Optimaal Klimaatcomfort het Hele Jaar",
  "Airconditioning Service vanaf €11/mnd"
]

export function HeroOptimized() {
  const [currentHeadline, setCurrentHeadline] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false)
      setTimeout(() => {
        setCurrentHeadline((prev) => (prev + 1) % rotatingHeadlines.length)
        setIsTyping(true)
      }, 200)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-16 lg:py-24 text-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-grid-white/[0.05]" aria-hidden="true" />
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
      
      {/* Aanbieding Ribbon */}
      <div className="absolute top-8 -right-12 bg-orange-500 text-white px-12 py-2 rotate-45 shadow-lg z-10 hidden sm:block">
        <span className="text-sm font-bold">AANBIEDING</span>
      </div>
      
      <div className="container-custom relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start lg:items-center">
          <div className="flex flex-col justify-center relative z-10">
            <h1 
              id="hero-heading" 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 block">
                <span className="block lg:inline">Aircovergelijken</span>
                <span className="block lg:inline">limburg.nl</span>
              </span>
            </h1>
            
            <div className="mt-4 min-h-[4rem] md:min-h-[5rem] flex items-center">
              <p className={`text-xl md:text-2xl lg:text-3xl font-semibold text-orange-500 ${isTyping ? 'typewriter' : 'opacity-0'} transition-opacity`}>
                {rotatingHeadlines[currentHeadline]}
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-6 flex items-center gap-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
                <span className="ml-2 text-lg font-semibold">4.7/5</span>
              </div>
              <span className="text-gray-300">163 Google reviews</span>
            </div>
            
            <p className="mt-6 text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl">
              Dé airco specialist van Limburg! Geniet van een perfect binnenklimaat met onze professionele installatie en onderhoud service.
            </p>
            
            {/* Dual CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/offerte">
                <Button size="lg" className="btn-primary w-full sm:w-auto">
                  Gratis Offerte Aanvragen
                </Button>
              </Link>
              <Link href="tel:0462021430">
                <Button size="lg" variant="outline" className="btn-secondary w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  046 202 1430
                </Button>
              </Link>
            </div>
            
            {/* Urgency Messaging */}
            <div className="mt-8 bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-500" />
                <span className="text-orange-500 font-semibold">Binnen 24 uur reactie</span>
              </div>
            </div>
            
            {/* USPs */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: CheckCircle, text: "Gratis offerte" },
                { icon: Shield, text: "5 jaar garantie" },
                { icon: Star, text: "Erkend installateur" },
                { icon: Clock, text: "Vanaf €11/mnd" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <item.icon className="h-4 w-4 text-orange-500" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form - Glassmorphic Style */}
          <div className="relative mt-12 lg:mt-0 order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-600/20 rounded-2xl blur-xl" />
            <Card className="relative glass shadow-2xl border-white/10 p-6 md:p-8 max-w-md mx-auto lg:max-w-none">
              <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Direct Contact</h2>
                <p className="text-sm md:text-base text-gray-600 mt-2">Vul het formulier in voor een gratis offerte</p>
              </div>
              <ContactForm />
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Of bel direct: <a href="tel:0462021430" className="text-orange-500 font-semibold">046 202 1430</a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}