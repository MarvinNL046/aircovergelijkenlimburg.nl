"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Wrench, Shield, Settings, Phone, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Installatie",
    description: "Professionele installatie van alle topmerken airco's door gecertificeerde monteurs.",
    features: [
      "Gratis inmeting en advies",
      "Binnen 1 week geïnstalleerd",
      "5 jaar garantie op installatie"
    ],
    cta: "Offerte aanvragen",
    href: "/offerte"
  },
  {
    icon: Shield,
    title: "Onderhoud",
    description: "Regelmatig onderhoud voor optimale prestaties en langere levensduur van uw airco.",
    features: [
      "Vanaf €11 per maand",
      "Jaarlijkse controle",
      "24/7 storingsdienst"
    ],
    cta: "Onderhoudscontract",
    href: "/diensten/onderhoud"
  },
  {
    icon: Settings,
    title: "Reparatie",
    description: "Snelle en vakkundige reparatie bij storingen. Altijd binnen 24 uur ter plaatse.",
    features: [
      "24 uur service",
      "Vaste prijzen",
      "Erkend installateur"
    ],
    cta: "Storing melden",
    href: "tel:0462021430"
  }
]

export function ServicesOptimized() {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Onze Diensten in Limburg
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van installatie tot onderhoud, wij zorgen voor uw perfecte binnenklimaat
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href={service.href}>
                <Button className="w-full btn-primary">
                  {service.cta}
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Bekijk Hoe Wij Werken
          </h3>
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/9m-jkGgfLog" 
              title="StayCool Airco Bedrijfsvideo" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">
              Ontdek waarom meer dan 1000 klanten in Limburg voor ons kiezen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/offerte">
                <Button className="btn-primary">
                  Gratis Offerte Aanvragen
                </Button>
              </Link>
              <Link href="tel:0462021430">
                <Button variant="outline" className="btn-secondary">
                  <Phone className="mr-2 h-4 w-4" />
                  Bel Direct: 046 202 1430
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}