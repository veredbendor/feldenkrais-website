import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Logo } from "@/components/logo"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10 text-primary" />
            <span className="text-xl font-semibold">FELDENKRAIS<sup className="text-xs">®</sup></span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#offerings" className="text-foreground/70 hover:text-foreground transition-colors">
              Offerings
            </a>
            <a href="#bio" className="text-foreground/70 hover:text-foreground transition-colors">
              Bio
            </a>
          </nav>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="https://feldenkraisoi.setmore.com/book" target="_blank" rel="noopener noreferrer">Book a Session</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Logo className="h-16 w-16 text-primary mx-auto" />
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-balance">FELDENKRAIS<sup className="text-lg">®</sup></h1>
            <div className="space-y-1 text-lg md:text-xl font-light text-muted-foreground">
              <p className="text-balance">{"Reconnect with your organic intelligence."}</p>
              <p className="text-balance">{"Awaken ease. Restore balance."}</p>
              <p className="text-balance">{"Feel fully alive"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-light">{"A gentle path to wholeness"}</h2>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    {
                      "The Feldenkrais Method® is a transformative somatic practice that uses gentle movement and directed attention to improve how you move, think, and feel."
                    }
                  </p>
                  <p>
                    {
                      "Through hands-on guidance and awareness-based movement, you'll discover new patterns of ease and efficiency in your body."
                    }
                  </p>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/feldenkrais-hands-on.png"
                  alt="Feldenkrais hands-on session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-8">{"Experience the benefits"}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Improve posture and breathing",
                "Reduce chronic pain and stiffness",
                "Increase coordination and flexibility",
                "Regulate your nervous system",
                "Feel more vitality and ease daily",
                "Enhance performance in dance, sports, and martial arts",
              ].map((benefit, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <p className="text-lg leading-relaxed">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="py-10 md:py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-8">{"Session details"}</h2>
            <Card className="border-2 border-primary/20 bg-card shadow-lg">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">{"Private Sessions"}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {
                      "Experience personalized, one-on-one Feldenkrais sessions tailored to your unique needs. Through gentle, hands-on guidance, we'll explore movement patterns that support your goals—whether that's reducing pain, improving posture, enhancing performance, or simply feeling more at ease in your body."
                    }
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border">
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-wide text-muted-foreground">Session Duration</p>
                    <p className="text-2xl font-light">{"45–60 minutes"}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-wide text-muted-foreground">Investment</p>
                    <p className="text-2xl font-light">{"$90–$110 per session"}</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg"
                    asChild
                  >
                    <a href="https://feldenkraisoi.setmore.com/book" target="_blank" rel="noopener noreferrer">{"Book Your Session"}</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-8">{"About your practitioner"}</h2>
            <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mx-auto md:mx-0 w-full max-w-[300px]">
                <Image
                  src="/images/vered-headshot.png"
                  alt="Vered Ben-Dor, Feldenkrais Practitioner"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    <strong className="text-foreground">{"Vered Ben-Dor"}</strong>
                  </p>
                  <p>
                    {
                      "I completed my four-year Feldenkrais training in 1994 and have been a long-time somatic practitioner ever since, even as my professional focus centered on software engineering. I continue to weave Feldenkrais principles into my life and work, drawing on decades of Tai Chi, Qi Gong, and other somatic and dance practices to support awareness, fluidity, embodied presence, and intelligent movement."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-10 md:py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-balance">{"Book your session"}</h2>
            <Card className="border-2 border-primary/20 bg-card shadow-lg">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex flex-col items-center gap-6">
                  <div className="relative w-48 h-48 rounded-lg overflow-hidden border-2 border-primary/10 bg-white p-2">
                    <Image
                      src="/images/booking-qr-code.jpg"
                      alt="Scan to book your session"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl font-light">{"Scan to book your session"}</p>
                    <p className="text-sm text-muted-foreground">
                      {"Use your phone camera to scan the QR code and schedule your appointment"}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-lg pt-6 border-t border-border">
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <p className="text-muted-foreground">{"Email"}</p>
                    <a href="mailto:bendor.vered@gmail.com" className="text-primary hover:underline">
                      {"bendor.vered@gmail.com"}
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground pt-4">
                  {
                    "I typically respond within 24 hours. I look forward to supporting your journey toward greater ease and vitality."
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Logo className="h-12 w-12 text-primary mx-auto" />
            <p className="text-lg font-semibold">FELDENKRAIS<sup className="text-xs">®</sup></p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {"Reconnect with your organic intelligence. Awaken ease. Restore balance. Feel fully alive."}
            </p>
            <div className="pt-6 text-sm text-muted-foreground">
              <p>{"© 2025 Vered Ben-Dor. All rights reserved."}</p>
              <p className="pt-2">
                {
                  "Feldenkrais®, Feldenkrais Method®, and Functional Integration® are registered service marks of the Feldenkrais Guild® of North America."
                }
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
