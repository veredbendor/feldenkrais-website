import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PricingSection } from "@/components/sections/pricing"

export const metadata: Metadata = {
  title: "Pricing | Sonoma Feldenkrais",
  description:
    "A private Feldenkrais lesson is $120 for 60 minutes, one to one, in Rohnert Park. Most people know within four to six lessons whether it is working.",
  alternates: { canonical: "/pricing" },
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PricingSection as="h1" />
      </main>
      <SiteFooter />
    </div>
  )
}
