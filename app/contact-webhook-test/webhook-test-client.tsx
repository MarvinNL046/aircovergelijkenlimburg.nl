"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, CheckCircle, XCircle, AlertCircle } from "lucide-react"
import { sendToWebhookOnly } from "@/src/utils/email"

export default function WebhookTestClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "Test User",
    email: "test@example.com",
    phone: "0612345678",
    city: "Maastricht",
    message: "Dit is een test bericht voor de webhook integratie.",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')
    setErrorMessage("")

    try {
      const success = await sendToWebhookOnly(formData)
      
      if (success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMessage("Webhook returned an error response")
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : "Unknown error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>GHL Webhook Test Page</CardTitle>
          <CardDescription>
            Test de GoHighLevel webhook integratie. Deze pagina stuurt alleen naar de webhook, niet naar EmailJS.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Naam</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">E-mail</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Telefoon</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Stad</label>
              <Input
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Bericht</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
              />
            </div>

            {status === 'success' && (
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  Webhook successfully received the data!
                </AlertDescription>
              </Alert>
            )}

            {status === 'error' && (
              <Alert className="bg-red-50 border-red-200">
                <XCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  {errorMessage || "Failed to send data to webhook"}
                </AlertDescription>
              </Alert>
            )}

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Webhook Details
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Data will be sent to the GHL webhook in this format:
              </p>
              <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
{JSON.stringify({
  data: {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    city: formData.city,
    message: formData.message
  }
}, null, 2)}
              </pre>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending to webhook...
                </>
              ) : (
                "Test Webhook"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}