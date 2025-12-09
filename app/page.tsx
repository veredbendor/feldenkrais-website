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
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-2">
            <Logo className="h-12 w-12 text-primary mx-auto" />
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-balance">FELDENKRAIS<sup className="text-sm">®</sup></h1>
            <p className="text-base md:text-lg font-light text-muted-foreground">
              Reconnect with your organic intelligence. Awaken ease. Restore balance. Feel fully alive.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-light">{"A gentle path to wholeness"}</h2>
                <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
                  <p>
                    The Feldenkrais Method® is a transformative somatic practice that uses gentle movement and directed attention to improve how you move, think, and feel.
                  </p>
                  <p>
                    Through hands-on guidance and awareness-based movement, you'll discover new patterns of ease and efficiency in your body.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
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
      <section className="py-10 md:py-12 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/feldenkrais-session-bg.png"
            alt=""
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
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
                <Card key={index} className="border-border/50 bg-card/80 backdrop-blur-sm">
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
      <section id="offerings" className="py-6 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-xl md:text-2xl font-light text-center mb-4">{"Session details"}</h2>
            <Card className="border border-primary/20 bg-card shadow-md">
              <CardContent className="p-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">{"Private Sessions"}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Personalized, one-on-one sessions tailored to your needs—reducing pain, improving posture, or feeling more at ease in your body.
                  </p>
                </div>
                <div className="flex justify-between text-sm pt-3 border-t border-border">
                  <div>
                    <span className="text-muted-foreground">Duration: </span>
                    <span className="font-medium">45–60 min</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Investment: </span>
                    <span className="font-medium">$90–$110</span>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <a href="https://feldenkraisoi.setmore.com/book" target="_blank" rel="noopener noreferrer">Book Your Session</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-center mb-6">{"About your practitioner"}</h2>
            <div className="grid md:grid-cols-[180px_1fr] gap-6 items-start">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mx-auto md:mx-0 w-full max-w-[180px]">
                <Image
                  src="/images/vered-headshot.png"
                  alt="Vered Ben-Dor, Feldenkrais Practitioner"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <p className="text-base font-medium">Vered Ben-Dor</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  I completed my four-year Feldenkrais training in 1994 and have been a long-time somatic practitioner ever since, even as my professional focus centered on software engineering. I continue to weave Feldenkrais principles into my life and work, drawing on decades of Tai Chi, Qi Gong, and other somatic and dance practices to support awareness, fluidity, embodied presence, and intelligent movement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-6 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center space-y-4">
            <h2 className="text-xl md:text-2xl font-light">{"Book your session"}</h2>
            <Card className="border border-primary/20 bg-card shadow-md">
              <CardContent className="p-4 space-y-4">
                <div className="flex flex-col items-center gap-3">
                  <div className="relative w-28 h-28 rounded overflow-hidden border border-primary/10 bg-white p-1">
                    <Image
                      src="/images/booking-qr-code.jpg"
                      alt="Scan to book your session"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Scan to book or email</p>
                </div>
                <div className="text-sm pt-3 border-t border-border">
                  <a href="mailto:bendor.vered@gmail.com" className="text-primary hover:underline">
                    bendor.vered@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>
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
