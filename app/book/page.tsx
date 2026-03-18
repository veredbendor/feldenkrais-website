import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Logo } from "@/components/logo"
import Image from "next/image"
import Link from "next/link"

export default function BookPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-10 w-10 text-primary" />
            <span className="text-xl font-semibold">FELDENKRAIS<sup className="text-xs">®</sup></span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#about" className="text-foreground/70 hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/#offerings" className="text-foreground/70 hover:text-foreground transition-colors">
              Offerings
            </Link>
            <Link href="/#bio" className="text-foreground/70 hover:text-foreground transition-colors">
              Bio
            </Link>
          </nav>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="https://tinyurl.com/vered-feldenkrais-sch" target="_blank" rel="noopener noreferrer">Book a Session</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-balance">Book a Private Session</h1>
            <p className="text-base md:text-lg font-light text-muted-foreground">
              Retrain your nervous system for ease, comfort & coordination
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
                  Guild Certified Feldenkrais Practitioner with 25 years of experience. Through gentle guided movement and hands-on work, I help you discover new patterns of ease and coordination — reducing pain and improving how you move through daily life.
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
                  <p className="text-sm text-muted-foreground">60 min &middot; $110</p>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base"
                  asChild
                >
                  <a href="https://tinyurl.com/vered-feldenkrais-sch" target="_blank" rel="noopener noreferrer">Book Your Session</a>
                </Button>
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

      {/* Footer */}
      <footer className="border-t border-border/50 py-4 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <p className="text-sm font-medium">FELDENKRAIS<sup className="text-[8px]">®</sup></p>
            <p className="text-xs text-muted-foreground">
              © 2025 Vered Ben-Dor. Feldenkrais® is a registered service mark of the Feldenkrais Guild® of North America.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
