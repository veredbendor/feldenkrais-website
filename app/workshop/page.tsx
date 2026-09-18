import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Logo } from "@/components/logo"
import Image from "next/image"
import Link from "next/link"
import { RegistrationForm } from "./registration-form"

export const metadata: Metadata = {
  title: "Release Your Neck & Shoulders – Feldenkrais® Workshop Series",
  description:
    "A 4-week Feldenkrais Awareness Through Movement® workshop to relieve neck and shoulder tension. Thursdays 9-10 AM starting October 29, 2026 in Sebastopol, Sonoma County.",
}

export default function WorkshopPage() {
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
            <a href="#register">Register</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <p className="text-sm font-medium tracking-widest uppercase text-primary">4-Week Workshop Series</p>
            <h1 className="text-3xl md:text-5xl font-light tracking-tight">Release Your Neck & Shoulders</h1>
            <p className="text-lg md:text-xl font-light text-muted-foreground italic">
              Awareness Through Movement<sup className="text-xs">®</sup>
            </p>
          </div>
        </div>
      </section>

      {/* What the Method is */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl md:text-3xl font-light text-center">
              About the Feldenkrais Method<sup className="text-sm">®</sup>
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                The Feldenkrais Method<sup className="text-[10px]">®</sup> of somatic education uses
                gentle movement and directed attention to help you find easier, more effective ways
                of doing what matters to you. You can expand your range of motion, improve
                flexibility and coordination, and rediscover your natural capacity for graceful,
                efficient movement. Because how you move is how you move through life, these changes
                often carry over into your thinking, emotional balance, and problem solving.
              </p>
              <p>
                The Method draws on physics, biomechanics, and a practical understanding of how
                humans learn and develop. As Moshe Feldenkrais put it, &ldquo;We move according to
                our perceived self-image.&rdquo; As your awareness grows, habits and unnecessary
                tension become visible, and new options appear. That sensitivity is what lets you
                live more fully, efficiently, and comfortably.
              </p>
              <p className="text-foreground">There are two ways to experience the work.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="border-border/50 bg-card">
                <CardContent className="p-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Awareness Through Movement<sup className="text-[10px]">®</sup>
                    </span>{" "}
                    lessons are taught in a group, with students following the teacher&rsquo;s
                    verbal guidance.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card">
                <CardContent className="p-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Functional Integration<sup className="text-[10px]">®</sup>
                    </span>{" "}
                    sessions are one-on-one lessons in which the fully clothed student is guided
                    through touch, movement, and words.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Details + Description */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-[1fr_280px] gap-8">
              {/* Description */}
              <div className="space-y-5">
                <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Do you carry tension in your neck and shoulders? Do you wake up stiff, or find yourself hunching over your desk by midday? You are not alone — and there is a gentle, effective path to lasting relief.
                  </p>
                  <p>
                    In this 4-week Feldenkrais series, you will explore slow, mindful movement lessons that help your brain and body discover new patterns of ease. Rather than stretching or strengthening by force, the Feldenkrais Method works with your nervous system to release deeply held tension from the inside out.
                  </p>
                  <p>
                    Each session builds on the last, guiding you through Awareness Through Movement<sup className="text-[9px]">®</sup> lessons specifically designed for the neck and shoulder region. You will be lying on a mat and guided through gentle movements — no special equipment or experience needed.
                  </p>
                </div>
              </div>

              {/* Details Card */}
              <div>
                <Card className="border border-primary/20 bg-card shadow-md sticky top-24">
                  <CardContent className="p-5 space-y-4">
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">When</p>
                        <p className="font-medium">Thursdays, 9:00 – 10:00 AM</p>
                        <p className="text-muted-foreground">October 29, November 5, 12 &amp; 19, 2026</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Where</p>
                        <p className="font-medium">Sebastopol, Sonoma County</p>
                        <p className="text-muted-foreground">Exact venue with your registration confirmation</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Duration</p>
                        <p className="font-medium">4 weekly sessions</p>
                        <p className="text-muted-foreground">60 minutes each</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Investment</p>
                        <p className="font-medium">$20 drop-in</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Bring</p>
                        <p className="text-muted-foreground">Comfortable clothing. Mats provided.</p>
                      </div>
                    </div>
                    <RegistrationForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Sessions */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-center mb-6">The 4 sessions</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { week: "Week 1", date: "October 29", title: "Organizing from Your Center", desc: "Discover how your whole body supports your neck — building awareness of the connections between your center and your head." },
                { week: "Week 2", date: "November 5", title: "Restoring Mobility", desc: "Gently explore the full range of your neck and shoulders, finding where movement has become restricted and inviting it to open." },
                { week: "Week 3", date: "November 12", title: "Softening the Shoulders", desc: "Learn to let go of habitual shoulder tension through movements that connect your arms, shoulders, and spine." },
                { week: "Week 4", date: "November 19", title: "Rediscovering Ease", desc: "Integrate the lessons of the series into a felt sense of lightness, freedom, and new postural possibilities." },
              ].map((session, index) => (
                <Card key={index} className="border-border/50 bg-card">
                  <CardContent className="p-5">
                    <div className="flex justify-between items-baseline mb-2">
                      <p className="text-xs font-medium tracking-widest uppercase text-primary">{session.week}</p>
                      <p className="text-xs text-muted-foreground">{session.date}</p>
                    </div>
                    <p className="text-base font-medium mb-1">{session.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{session.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practitioner + Register CTA */}
      <section className="py-8 bg-secondary/30">
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
                <h2 className="text-xl font-light">Your practitioner</h2>
                <p className="text-base font-medium">Vered Ben-Dor</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  I completed my four-year Feldenkrais training in 1994 and have been a long-time somatic practitioner ever since. I continue to weave Feldenkrais principles into my life and work, drawing on decades of Tai Chi, Qi Gong, and other somatic and dance practices to support awareness, fluidity, embodied presence, and intelligent movement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="register" className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-sm mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-light text-center">Ready to feel the difference?</h2>
            <p className="text-base text-muted-foreground text-center">
              Space is limited. Register to reserve your spot.
            </p>
            <Card className="border border-primary/20 bg-card shadow-md">
              <CardContent className="p-5">
                <RegistrationForm />
              </CardContent>
            </Card>
            <p className="text-center text-sm text-muted-foreground">
              Questions? <a href="mailto:bendor.vered@gmail.com?subject=Neck%20%26%20Shoulders%20Workshop%20Question" className="text-primary hover:underline">Email us</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-4 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <p className="text-sm font-medium">FELDENKRAIS<sup className="text-[8px]">®</sup></p>
            <p className="text-xs text-muted-foreground">
              © 2026 Vered Ben-Dor. Feldenkrais® is a registered service mark of the Feldenkrais Guild® of North America.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
