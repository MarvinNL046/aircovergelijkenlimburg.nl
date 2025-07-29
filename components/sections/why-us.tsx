"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Clock, Shield, Award, Phone } from "lucide-react"

const features = [
  {
    icon: CheckCircle2,
    title: "Gratis Offerte",
    description: "Vrijblijvende offerte binnen 24 uur. Geen verborgen kosten."
  },
  {
    icon: Award,
    title: "Gecertificeerde Monteurs",
    description: "F-gassen gecertificeerd team met jarenlange ervaring."
  },
  {
    icon: Clock,
    title: "Snelle Service",
    description: "Binnen 1 week geïnstalleerd. Bij storing binnen 24 uur ter plaatse."
  },
  {
    icon: Shield,
    title: "5 Jaar Garantie",
    description: "Uitgebreide garantie op alle installaties en onderdelen."
  }
]

export function WhyUsSection() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Waarom Kiezen voor AircoverGelijkenlimburg.nl?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Als onderdeel van StayCool Airco bieden wij de beste service in heel Limburg
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Lokale Expertise, Landelijke Kwaliteit
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5" />
                  <span className="text-gray-700">Werkzaam in heel Limburg</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5" />
                  <span className="text-gray-700">Onderhoud vanaf €11 per maand</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5" />
                  <span className="text-gray-700">Alle topmerken: Daikin, LG, Samsung, Mitsubishi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5" />
                  <span className="text-gray-700">4.7/5 score op basis van 163 Google reviews</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-xl p-6">
                <p className="text-2xl font-bold mb-2">Direct Contact?</p>
                <p className="text-4xl font-bold mb-4">046 202 1430</p>
                <p className="text-sm mb-4">Ma-Vr: 09:00-17:00 | Za: Gesloten</p>
                <Link href="tel:0462021430">
                  <Button className="w-full bg-white text-orange-500 hover:bg-gray-100">
                    <Phone className="mr-2 h-4 w-4" />
                    Bel Nu
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/offerte">
            <Button size="lg" className="btn-primary">
              Start met uw Gratis Offerte
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}