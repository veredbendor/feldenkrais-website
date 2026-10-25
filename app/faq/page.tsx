import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PrimaryCta } from "@/components/primary-cta"
import { FaqSection, faqSchema } from "@/components/sections/faq"

export const metadata: Metadata = {
  title: "Feldenkrais Questions & Answers | Sonoma Feldenkrais",
  description:
    "Common questions about Feldenkrais lessons in Rohnert Park: what happens in a session, how it differs from massage and physical therapy, cost, and how many lessons you need.",
  alternates: { canonical: "/faq" },
}

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD: static schema with no <, >, or & so React text escaping is a no-op */}
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <SiteHeader />
      <main>
        <FaqSection as="h1" />
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
