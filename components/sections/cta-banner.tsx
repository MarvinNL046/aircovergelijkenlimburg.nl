"use client"

import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"
import Link from "next/link"

interface CTABannerProps {
  theme?: "light" | "dark"
}

export function CTABanner({ theme = "light" }: CTABannerProps) {
  const bgColor = theme === "light" ? "bg-orange-50" : "bg-gray-900"
  const textColor = theme === "light" ? "text-gray-900" : "text-white"
  const borderColor = theme === "light" ? "border-orange-100" : "border-gray-800"
  const accentColor = theme === "light" ? "text-orange-600" : "text-orange-500"

  return (
    <div 
      className={`${bgColor} ${borderColor} border-y py-4 transform transition-all duration-300`}
    >
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`${textColor} text-base font-medium flex items-center gap-2`}>
            <span className={`${accentColor} font-bold`}>AANBIEDING:</span>
            <span>Onderhoud vanaf €11/mnd • Binnen 24u reactie • 4.7/5 ⭐ (163 reviews)</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="sm" variant="outline" className="btn-secondary" asChild>
              <Link href="tel:0462021430">
                <Phone className="mr-2 h-4 w-4" />
                046 202 1430
              </Link>
            </Button>
            <Button size="sm" className="btn-primary" asChild>
              <Link href="/offerte">
                <Calendar className="mr-2 h-4 w-4" />
                Gratis Offerte
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
