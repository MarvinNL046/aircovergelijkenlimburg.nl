"use client"

import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/forms/contact-form"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export function ContactOptimized() {
  return (
    <section className="section bg-gray-50" id="contact">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Neem Contact Op
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vraag direct een gratis offerte aan of neem contact op voor advies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Direct Contact
              </h3>
              
              <div className="space-y-6">
                <a href="tel:0462021430" className="flex items-start gap-4 group">
                  <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 transition-colors">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telefoon</p>
                    <p className="text-gray-600">046 202 1430</p>
                  </div>
                </a>

                <a href="https://wa.me/31636481054" className="flex items-start gap-4 group">
                  <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-gray-600">06 3648 1054</p>
                  </div>
                </a>

                <a href="mailto:info@staycoolairco.nl" className="flex items-start gap-4 group">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">E-mail</p>
                    <p className="text-gray-600">info@staycoolairco.nl</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Werkgebied</p>
                    <p className="text-gray-600">Heel Limburg</p>
                    <p className="text-sm text-gray-500 mt-1">Geen bezoekadres</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Openingstijden</p>
                    <div className="text-gray-600 text-sm mt-1">
                      <p>Ma-Di-Do-Vr: 09:00 - 17:00</p>
                      <p>Woensdag: 09:00 - 17:00</p>
                      <p>Vrijdag: 09:00 - 16:00</p>
                      <p>Weekend: Gesloten</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-orange-50 rounded-lg">
                <p className="text-orange-900 font-semibold mb-2">
                  Spoed? Bel direct!
                </p>
                <p className="text-orange-800">
                  Voor storingen en urgente zaken zijn wij binnen 24 uur ter plaatse.
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Vraag een Gratis Offerte Aan
              </h3>
              <p className="text-gray-600 mb-6">
                Vul het formulier in en ontvang binnen 24 uur een vrijblijvende offerte.
              </p>
              <ContactForm />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}