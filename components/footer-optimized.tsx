import { Mail, Phone, Clock, Star, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FooterOptimized() {
  const cities = [
    "Maastricht", "Sittard", "Heerlen", "Roermond", "Venlo", 
    "Weert", "Brunssum", "Landgraaf", "Kerkrade", "Geleen"
  ];

  const services = [
    { name: "Airco Installatie", href: "/diensten/installatie" },
    { name: "Onderhoud vanaf €11/mnd", href: "/diensten/onderhoud" },
    { name: "24u Storingsdienst", href: "/diensten/reparatie" },
    { name: "Gratis Advies", href: "/offerte" }
  ];

  const brands = ["Daikin", "LG", "Samsung", "Mitsubishi", "Toshiba", "Tosot"];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* CTA Section */}
      <div className="bg-orange-500">
        <div className="container-custom py-8">
          <div className="text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Klaar voor een Koel Zomer en Warm Winter?
            </h2>
            <p className="text-lg mb-6">
              Vraag nu een gratis offerte aan en ontvang binnen 24 uur reactie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/offerte">
                <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                  Gratis Offerte Aanvragen
                </Button>
              </Link>
              <Link href="tel:0462021430">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="mr-2 h-5 w-5" />
                  046 202 1430
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4">
              AircoverGelijkenlimburg.nl
            </h3>
            <p className="mb-4 text-gray-400">
              Onderdeel van StayCool Airco - Dé airco specialist van Limburg. 
              Professionele installatie, onderhoud en reparatie van alle topmerken.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <span className="text-white font-semibold">4.7/5</span>
              <span className="text-gray-400">163 Google reviews</span>
            </div>

            {/* Social & Contact */}
            <div className="flex gap-4">
              <a href="tel:0462021430" className="hover:text-orange-500">
                <Phone className="w-6 h-6" />
              </a>
              <a href="https://wa.me/31636481054" className="hover:text-green-500">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="mailto:info@staycoolairco.nl" className="hover:text-blue-500">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Onze Diensten
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="hover:text-orange-500 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Werkgebied
            </h4>
            <ul className="space-y-2 text-sm">
              {cities.slice(0, 6).map((city) => (
                <li key={city}>
                  <Link href={`/steden/${city.toLowerCase()}`} className="hover:text-orange-500 transition-colors">
                    Airco {city}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/steden" className="text-orange-500 hover:text-orange-400 font-semibold">
                  Alle steden →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:0462021430" className="flex items-center hover:text-orange-500">
                  <Phone className="w-4 h-4 mr-2" />
                  046 202 1430
                </a>
              </li>
              <li>
                <a href="https://wa.me/31636481054" className="flex items-center hover:text-green-500">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-4 h-4 mr-2 mt-0.5" />
                <div className="text-sm">
                  <p>Ma-Vr: 09:00-17:00</p>
                  <p>Vr: 09:00-16:00</p>
                  <p>Weekend: Gesloten</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Brands */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-center text-gray-400 mb-4">
            Officieel dealer van:
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-500">
            {brands.map((brand) => (
              <span key={brand} className="hover:text-white transition-colors cursor-pointer">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} AircoverGelijkenlimburg.nl - Onderdeel van StayCool Airco
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
              <Link href="/voorwaarden" className="hover:text-white">
                Voorwaarden
              </Link>
              <Link href="/sitemap.xml" className="hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}