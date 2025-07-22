"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import { sendEmail } from "@/src/utils/email"
import { useRouter } from "next/navigation"

interface ContactFormProps {
  cityName?: string
}

export function ContactForm({ cityName }: ContactFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: cityName 
      ? `Ik wil graag een offerte aanvragen voor een airco in ${cityName}.`
      : "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await sendEmail({
        ...formData,
        city: cityName || "Limburg"
      }, cityName ? 'city_contact_form' : 'contact_form')
      
      // Track analytics (if implemented)
      // trackFormSubmission('contact_form', true)
      // trackPixelFormSubmission('contact_form', true)
      
      toast.success("Uw aanvraag is succesvol verzonden!")
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: cityName 
          ? `Ik wil graag een offerte aanvragen voor een airco in ${cityName}.`
          : "",
      })
      
      // Redirect to thank you page after a short delay
      setTimeout(() => {
        router.push('/tot-snel')
      }, 1000)
    } catch (error) {
      toast.error("Er ging iets mis. Probeer het later opnieuw.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Uw naam"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <Input
        type="email"
        placeholder="Uw e-mailadres"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <Input
        type="tel"
        placeholder="Uw telefoonnummer"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
      />
      <Textarea
        placeholder="Uw bericht"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
        rows={4}
      />
      <Button 
        type="submit" 
        className="w-full bg-green-600 hover:bg-green-700" 
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Bezig met verzenden...
          </>
        ) : (
          "Verstuur Aanvraag"
        )}
      </Button>
    </form>
  )
}