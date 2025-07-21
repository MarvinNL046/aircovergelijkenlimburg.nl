import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Home, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Bedankt voor uw aanvraag | AircovergelijkingLimburg.nl",
  description: "Bedankt voor uw aanvraag. We nemen zo snel mogelijk contact met u op.",
  robots: "noindex, nofollow"
}

export default function TotSnelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Bedankt voor uw aanvraag!
          </h1>
          
          <p className="text-gray-600 mb-8">
            We hebben uw aanvraag ontvangen en nemen zo snel mogelijk contact met u op.
            U kunt binnen 24 uur een reactie van ons verwachten.
          </p>
          
          <div className="space-y-4">
            <Link href="/" className="block">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <Home className="mr-2 h-4 w-4" />
                Terug naar homepagina
              </Button>
            </Link>
            
            <div className="text-sm text-gray-500">
              <p>Heeft u vragen? Bel ons direct:</p>
              <a href="tel:043 123 4567" className="text-green-600 font-semibold hover:underline flex items-center justify-center mt-2">
                <Phone className="h-4 w-4 mr-1" />
                043 123 4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}