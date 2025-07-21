import { Metadata } from "next"
import WebhookTestClient from "./webhook-test-client"

export const metadata: Metadata = {
  title: "Webhook Test | AircovergelijkingLimburg.nl",
  description: "Test page for GHL webhook integration",
  robots: "noindex, nofollow"
}

export default function WebhookTestPage() {
  return <WebhookTestClient />
}