import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Logo } from "@/components/logo"
import Image from "next/image"
import Link from "next/link"
import { BOOKING_URL, SITE_URL, SITE_NAME } from "@/lib/site"


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "One-to-one Feldenkrais Functional Integration sessions with Vered Ben-Dor, Guild Certified Feldenkrais Practitioner, in Rohnert Park, Sonoma County.",
  founder: "Vered Ben-Dor",
  email: "bendor.vered@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rohnert Park",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: ["Rohnert Park", "Cotati", "Penngrove", "Petaluma", "Santa Rosa"],
  potentialAction: {
    "@type": "ReserveAction",
    target: BOOKING_URL,
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10 text-primary" />
            <span className="text-xl font-semibold">FELDENKRAIS<sup className="text-xs">®</sup></span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/workshop" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
              Workshop
            </Link>
            <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#visit" className="text-foreground/70 hover:text-foreground transition-colors">
              Your visit
            </a>
            <a href="#offerings" className="text-foreground/70 hover:text-foreground transition-colors">
              Offerings
            </a>
            <a href="#bio" className="text-foreground/70 hover:text-foreground transition-colors">
              Bio
            </a>
          </nav>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a Session</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Logo className="h-12 w-12 text-primary mx-auto" />
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
              Feldenkrais<sup>®</sup> &middot; Rohnert Park, Sonoma County
            </p>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-balance">
              Move with less effort
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              The Feldenkrais Method with Vered Ben-Dor, Guild Certified since 1994. Private sessions in a quiet home studio in Rohnert Park.
            </p>
            <p className="text-sm md:text-base font-light italic text-muted-foreground/80">
              Reconnect with your organic intelligence. Awaken ease. Restore balance.
            </p>
            <div className="flex justify-center pt-2">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a session</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Strip */}
      <section id="workshop" className="py-5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between rounded-lg border border-border/60 bg-card/60 px-5 py-4">
              <div className="space-y-1">
                <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Group class</p>
                <h2 className="text-lg font-light">Release Your Neck &amp; Shoulders</h2>
                <p className="text-sm text-muted-foreground">
                  4 Thursdays from September 24 &middot; 9&ndash;10 AM &middot; $20 drop-in &middot; Cotati Wellness Center
                </p>
              </div>
              <Button variant="outline" className="border-primary/30 whitespace-nowrap" asChild>
                <Link href="/workshop">Learn more</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-light">{"What actually happens"}</h2>
                <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
                  <p>
                    The Feldenkrais Method uses gentle, guided movement and close attention to change how you organize yourself. Nothing is stretched, adjusted, or corrected.
                  </p>
                  <p>
                    You lie on a table fully clothed, I move you slowly, and your nervous system finds an easier way to do what it was already doing.
                  </p>
                  <p className="text-foreground">
                    Most people notice the difference standing up.
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
            <h2 className="text-3xl md:text-4xl font-light text-center mb-8">{"What changes"}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Neck and shoulders that turn further, with less effort",
                "Standing and sitting without bracing",
                "Fuller, quieter breathing",
                "Better coordination in turning, reaching and walking",
                "Less pain and stiffness for many people",
                "More ease in dance, sport and martial arts",
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-center mb-8">{"What clients say"}</h2>
            <div className="space-y-6">
              {[
                {
                  quote:
                    "Working with Vered is a joy. The beautiful, soulfully slow pace brings me to a peaceful place. On a scale of 10, I feel an 11.",
                  full:
                    "As a trigger point myotherapist, I feel the profoundly calming, integrating, soft energy of the Feldenkrais process as a completion of the other body/mind treatments in my own healing. Working with Vered is a joy, and I'm able to trust completely how the beautiful, soulfully slow pace brings me to a peaceful place. Those deeper, often hidden and stuck, encapsulated body experiences are given allowance and new freedom to let go, in a soft, flowing way that lasts. On a scale of 10, I feel an 11.",
                  name: "Robin Birdfeather",
                  credentials: "BA, MTPT (Trigger Point Myotherapist)",
                },
              ].map((t, index) => (
                <Card key={index} className="border border-primary/20 bg-card shadow-md">
                  <CardContent className="p-6 md:p-8 space-y-4">
                    <blockquote className="text-lg md:text-xl font-light leading-relaxed text-balance">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    {t.full && (
                      <p className="text-sm leading-relaxed text-muted-foreground">{t.full}</p>
                    )}
                    <footer className="pt-2 border-t border-border">
                      <p className="text-sm font-medium">{t.name}</p>
                      {t.credentials && (
                        <p className="text-xs text-muted-foreground">{t.credentials}</p>
                      )}
                    </footer>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Your Visit Section */}
      <section id="visit" className="py-10 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-light text-center">{"Your visit"}</h2>
            <p className="text-base leading-relaxed text-muted-foreground text-center max-w-xl mx-auto">
              Sessions are held in a quiet home studio in Rohnert Park, a few minutes from Cotati, Penngrove and south Santa Rosa. Parking is easy. The exact address comes with your booking confirmation.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  q: "What do I wear?",
                  a: "Soft clothes you can move in. Nothing comes off and there is nothing to change into.",
                },
                {
                  q: "Does it hurt?",
                  a: "No. If anything is uncomfortable, say so and we change it.",
                },
                {
                  q: "How many do I need?",
                  a: "Most people notice something after one. Three or four is where the change tends to hold.",
                },
              ].map((item, index) => (
                <Card key={index} className="border-border/50 bg-card">
                  <CardContent className="p-5 space-y-2">
                    <p className="text-base font-medium">{item.q}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-center mb-6">{"Session details"}</h2>
            <Card className="border border-primary/20 bg-card shadow-md">
              <CardContent className="p-5 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">{"Private session"}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Functional Integration, one to one, tailored to what you want to move more easily.
                  </p>
                </div>
                <div className="flex justify-between text-sm pt-3 border-t border-border">
                  <div>
                    <span className="text-muted-foreground">Duration: </span>
                    <span className="font-medium">60 min</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Price: </span>
                    <span className="font-medium">$120</span>
                  </div>
                </div>
                <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book your session</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="py-8 md:py-10 bg-secondary/30">
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
              <div className="space-y-3">
                <div>
                  <p className="text-base font-medium">Vered Ben-Dor</p>
                  <p className="text-xs text-muted-foreground">
                    Guild Certified Feldenkrais Practitioner &middot; Rohnert Park, California
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  I completed the four-year Feldenkrais training at Emerson College in England in 1994 and have been practicing ever since, alongside a long career in software engineering. Decades of Tai Chi, Qi Gong, dance and other somatic practices sit underneath the work: awareness, fluidity, embodied presence, and intelligent movement.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  I see clients one to one in a quiet studio at my home in Rohnert Park, and I have taught in Sonoma County wellness settings for years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-8">
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
                  <p className="text-sm text-muted-foreground">Scan to book, or email me</p>
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
            <p className="text-xs text-muted-foreground">Rohnert Park, Sonoma County, California</p>
            <p className="text-xs text-muted-foreground">
              © 2026 Vered Ben-Dor. Feldenkrais® is a registered service mark of the Feldenkrais Guild® of North America.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
