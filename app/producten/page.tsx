import { Metadata } from "next"
import { ProductGallery } from "@/components/sections/product-gallery"
import { CTABanner } from "@/components/sections/cta-banner"

export const metadata: Metadata = {
  title: 'Airco Producten | Alle Merken & Modellen | Aircovergelijken Limburg',
  description: 'Ontdek ons complete assortiment airco\'s van topmerken zoals Daikin, LG, Samsung, Mitsubishi, Toshiba en Tosot. Van design modellen tot budget-vriendelijke oplossingen.',
  alternates: {
    canonical: 'https://aircovergelijkenlimburg.nl/producten'
  }
}

export default function ProductenPage() {
  return (
    <main>
      <ProductGallery />
      <CTABanner theme="dark" />
    </main>
  )
}