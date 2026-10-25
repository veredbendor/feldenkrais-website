import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PrimaryCta } from "@/components/primary-cta"
import { BioSection } from "@/components/sections/bio"

export const metadata: Metadata = {
  title: "Vered Ben-Dor, GCFP | Sonoma Feldenkrais",
  description:
    "Vered Ben-Dor, Guild Certified Feldenkrais Practitioner since 1994, trained four years at Emerson College, England. One-to-one lessons in Rohnert Park, Sonoma County.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <BioSection as="h1" />
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
