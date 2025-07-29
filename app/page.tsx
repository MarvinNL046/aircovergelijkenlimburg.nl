import { Metadata } from "next"
import { HeroOptimized } from "@/components/sections/hero-optimized"
import { ServicesOptimized } from "@/components/sections/services-optimized"
import { WhyUsSection } from "@/components/sections/why-us"
import { ProductShowcase } from "@/components/sections/product-showcase"
import { BrandLogosSection } from "@/components/sections/brand-logos"
import { ContactOptimized } from "@/components/sections/contact-optimized"
import { CTABanner } from "@/components/sections/cta-banner"
import { generateOrganizationSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Airco Vergelijken Limburg | #1 in Airconditioning ✓',
  description: 'Dé airco specialist van Limburg! Professionele airco installatie voor woning en bedrijf door StayCool Airco. ✓ Gratis offerte ✓ Erkend installateur ✓ Alle topmerken ✓ 5 jaar garantie. Bel: 046 202 1430',
  alternates: {
    canonical: 'https://aircovergelijkenlimburg.nl'
  }
}

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema()

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <main>
        <CTABanner theme="light" />
        <HeroOptimized />
        <ServicesOptimized />
        <ProductShowcase />
        <WhyUsSection />
        <BrandLogosSection />
        <ContactOptimized />
        <CTABanner theme="dark" />
      </main>
    </>
  )
}
