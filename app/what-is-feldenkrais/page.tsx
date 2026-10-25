import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PrimaryCta } from "@/components/primary-cta"
import { WhatFeldenkraisSection } from "@/components/sections/what-feldenkrais"

export const metadata: Metadata = {
  title: "What Is Feldenkrais? | Sonoma Feldenkrais",
  description:
    "Feldenkrais is gentle movement education that works with your nervous system, not your muscles. Learn what it actually is and why the change tends to stay.",
  alternates: { canonical: "/what-is-feldenkrais" },
}

export default function WhatIsFeldenkraisPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <WhatFeldenkraisSection
          as="h1"
          heading="What Feldenkrais actually is"
          lead="You have not lost the movement. You have forgotten it."
        />
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <PrimaryCta />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
