import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BOOKING_URL, PHONE_TEL, PHONE_DISPLAY } from "@/lib/site"

export default function BookPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-balance">Book a Private Session</h1>
            <p className="text-base md:text-lg font-light text-muted-foreground">
              For pain that has not resolved, for balance you can trust, and for moving well at any age
            </p>
          </div>
        </div>
      </section>

      {/* Bio & Session Details */}
      <section className="py-6 md:py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-[180px_1fr] gap-6 items-start">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mx-auto md:mx-0 w-full max-w-[180px]">
                <Image
                  src="/images/vered-headshot.png"
                  alt="Vered Ben-Dor, Feldenkrais Practitioner"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <p className="text-base font-medium">Vered Ben-Dor</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Guild Certified Feldenkrais Practitioner since 1994. I trained for four years at Emerson College in England, which means I have been doing this work for more than thirty years. Through gentle, hands-on guided movement I help you find easier ways to move, so there is less pain and more ease in daily life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Details Card & Booking */}
      <section className="py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto space-y-6">
            <Card className="border border-primary/20 bg-card shadow-md">
              <CardContent className="p-6 space-y-5">
                <div className="text-center space-y-1">
                  <h2 className="text-xl md:text-2xl font-light">Private Session</h2>
                  <p className="text-sm text-muted-foreground">60 min &middot; $120</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book Your Session</a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 border-primary/30">
                    <a href={`tel:${PHONE_TEL}`}>Free 15-minute call</a>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Not sure if this is right for you? Call {PHONE_DISPLAY} and ask.
                </p>
              </CardContent>
            </Card>

            {/* QR Code */}
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-32 h-32 rounded overflow-hidden border border-primary/10 bg-white p-1">
                <Image
                  src="/images/booking-qr-code.jpg"
                  alt="Scan to book your session"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground">Or scan to book</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
