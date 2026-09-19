import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Logo } from "@/components/logo"
import Image from "next/image"
import Link from "next/link"
import {
  BOOKING_URL,
  SITE_URL,
  SITE_NAME,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
} from "@/lib/site"

const FAQ = [
  {
    q: "What is the Feldenkrais Method?",
    a: "A way of learning to move with less effort. You move slowly and gently, with close attention, and your nervous system works out an easier way to do what you were already doing. It is education, not treatment. Nothing is adjusted, forced or stretched.",
  },
  {
    q: "What actually happens in a session?",
    a: "You lie fully clothed on a low padded table, wider than a massage table. I move you slowly with my hands, and sometimes ask you to notice something. Your job is not to analyze or help. It is only to notice. We finish standing, so you can feel what changed.",
  },
  {
    q: "How is this different from massage?",
    a: "Massage works on soft tissue. Feldenkrais works with your nervous system, which is what decides how much effort you use in the first place. My hands are giving your nervous system information, not releasing muscle. That is why the change tends to stay with you after you leave.",
  },
  {
    q: "How is this different from physical therapy or chiropractic?",
    a: "Physical therapy usually prescribes exercises to strengthen or stretch. Chiropractic adjusts. Feldenkrais does neither. There is no protocol, no adjustment and no homework you have to force yourself through. It also sits alongside them well, and many of my clients see me while they are still seeing someone else.",
  },
  {
    q: "How is this different from yoga or stretching?",
    a: "You do not need to be flexible, you never hold a position, and nothing is stretched. Most people are surprised by how small the movements are. If yoga or stretching has left you sore or discouraged, this is a different experience.",
  },
  {
    q: "Why hasn't stretching fixed this?",
    a: "Stretching pulls on the muscle, and for twenty minutes it feels looser. But the muscle was never the problem. Your nervous system is holding it, and by the end of the hour it has quietly taken the length back. A lesson works on what is doing the holding, which is why the change stays.",
  },
  {
    q: "Will it hurt? Is it strenuous?",
    a: "No, and no. Everything stays inside your comfortable range. If something is uncomfortable you say so and we change it. Most people find it deeply relaxing, and some find it energizing.",
  },
  {
    q: "I am in a lot of pain and cannot move much. Can I still do this?",
    a: "Yes. This work was built for exactly that. The movements are small enough that limited range is not an obstacle, and we work with whatever you have on the day.",
  },
  {
    q: "Will this cure my pain?",
    a: "I will not promise that. What I can say honestly is that a lot of persistent pain is fed by how a person is moving and holding themselves, and that is learnable. Many people get real, lasting relief. Some do not. You will have a good sense of which you are within four to six lessons.",
  },
  {
    q: "How many sessions will I need?",
    a: "Most people notice something after the first one. If Feldenkrais is going to make a meaningful difference for you, you will usually know by the fourth to sixth lesson. Three or four is where change tends to start holding on its own.",
  },
  {
    q: "What should I wear?",
    a: "Soft clothes you can move and lie down in, the sort of thing you would wear to a yoga class. Long trousers are easier than a skirt. Nothing comes off and there is nothing to change into.",
  },
  {
    q: "Do you take insurance?",
    a: "No. Feldenkrais is an educational method with therapeutic benefits rather than a licensed medical treatment, so it is paid directly. Some flexible spending accounts will reimburse it, and I can give you a receipt.",
  },
  {
    q: "Where are you located?",
    a: "A quiet home studio in Rohnert Park, a few minutes from Cotati, Penngrove, Petaluma and south Santa Rosa. Parking is easy. You get the exact address with your booking confirmation.",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "One-to-one Feldenkrais Functional Integration lessons with Vered Ben-Dor, Guild Certified Feldenkrais Practitioner, in Rohnert Park, Sonoma County. Gentle, hands-on movement education for persistent pain, balance and ease of movement.",
  founder: "Vered Ben-Dor",
  email: EMAIL,
  telephone: PHONE_TEL,
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10 text-primary" />
            <span className="text-xl font-semibold">
              FELDENKRAIS<sup className="text-xs">&reg;</sup>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#what" className="text-foreground/70 hover:text-foreground transition-colors">
              What it is
            </a>
            <a href="#method" className="text-foreground/70 hover:text-foreground transition-colors">
              The Feldenkrais Method<sup>&reg;</sup>
            </a>
            <a href="#session" className="text-foreground/70 hover:text-foreground transition-colors">
              A session
            </a>
            <a href="#testimonials" className="text-foreground/70 hover:text-foreground transition-colors">
              Reviews
            </a>
            <a href="#pricing" className="text-foreground/70 hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-foreground/70 hover:text-foreground transition-colors">
              Questions
            </a>
          </nav>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book a session
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <Logo className="h-12 w-12 text-primary mx-auto" />
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
              Feldenkrais<sup>&reg;</sup> &middot; Rohnert Park, Sonoma County
            </p>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-balance">
              Move with more ease, and less pain
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Gentle one-to-one lessons in a quiet home studio in Rohnert Park. For pain that
              has not resolved, for balance you can trust, and for moving well at any age.
              Fully clothed, hands-on, never forced.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a session
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/30">
                <a href={`tel:${PHONE_TEL}`}>Free 15-minute call</a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Not sure if this is right for you? Call {PHONE_DISPLAY} and ask.
            </p>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section id="what" className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl font-light">
                  You have not lost the movement. You have forgotten it.
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Muscles do not tighten on their own. Your nervous system holds them, and after
                    enough years of holding, it stops registering that it is doing it. The muscle
                    feels stiff. It is not stiff. It is being held, and you can no longer feel your
                    own hand on the switch.
                  </p>
                  <p>
                    That is why stretching buys you twenty minutes and then it comes back.
                    Stretching pulls on the muscle. It does not reach the part of you that is doing
                    the holding.
                  </p>
                  <p>
                    A Feldenkrais lesson goes to the switch. You move slowly and gently, with close
                    attention, until the movement is something you can feel again. Once you can feel
                    it, you can change it. That is why the change tends to stay.
                  </p>
                  <p className="text-foreground">
                    A great deal of what gets filed under aging is this, and it can be learned at
                    any age.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/feldenkrais-hands-on.png"
                  alt="A Feldenkrais lesson: gentle hands-on guided movement on a low padded table"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group class strip */}
      <section id="workshop" className="py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between rounded-lg border border-border/60 bg-card/60 px-5 py-4">
              <div className="space-y-1">
                <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                  Group class in Sebastopol
                </p>
                <h2 className="text-lg font-light">Release Your Neck &amp; Shoulders</h2>
                <p className="text-sm text-muted-foreground">
                  4 Thursdays from October 29 &middot; 9&ndash;10 AM &middot; $20 drop-in
                  &middot; Sebastopol
                </p>
                <p className="text-xs text-muted-foreground/80">
                  Same method, done as a class. You follow spoken instructions on a mat instead
                  of being guided by hand.
                </p>
              </div>
              <Button variant="outline" className="border-primary/30 whitespace-nowrap" asChild>
                <Link href="/workshop">Learn more</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Feldenkrais Method */}
      <section id="method" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-light text-center">
              The Feldenkrais Method<sup className="text-sm">&reg;</sup>
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                The Feldenkrais Method<sup className="text-[10px]">&reg;</sup> of somatic education
                uses gentle movement and directed attention to help you find easier, more effective
                ways of doing what matters to you. You can expand your range of motion, improve
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
                      Awareness Through Movement<sup className="text-[10px]">&reg;</sup>
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
                      Functional Integration<sup className="text-[10px]">&reg;</sup>
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

      {/* A session, minute by minute */}
      <section id="session" className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-2xl md:text-3xl font-light">What a lesson is like</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Sixty minutes, one to one. Here is the whole thing, so nothing is a surprise.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  when: "First 10 minutes",
                  what: "We talk. What do you want to do more easily, and what gets in the way? I watch you do a few ordinary things, like standing up, turning, or reaching, so I can see how you currently organize yourself.",
                },
                {
                  when: "The next 40",
                  what: "You lie fully clothed on a low padded table, wider than a massage table. I move you slowly with my hands. Your job is not to help or analyze. It is only to notice where your bones are moving. Nothing is forced. Most people find it deeply restful.",
                },
                {
                  when: "Last 10 minutes",
                  what: "You stand up and walk, and we see together what changed. I usually give you one small thing to play with at home. Nothing that needs discipline.",
                },
              ].map((step) => (
                <Card key={step.when} className="border-border/50 bg-card">
                  <CardContent className="p-6 grid sm:grid-cols-[140px_1fr] gap-4 items-start">
                    <p className="text-sm font-medium tracking-wide uppercase text-primary">
                      {step.when}
                    </p>
                    <p className="text-base leading-relaxed text-muted-foreground">{step.what}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What changes */}
      <section className="py-12 md:py-16 relative">
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
            <h2 className="text-2xl md:text-3xl font-light text-center mb-8">
              What people notice
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Turning further to look behind you, without the effort",
                "Standing and sitting without bracing",
                "Fuller, quieter breathing",
                "Steadier walking on stairs and uneven ground",
                "Less pain, and less of the guarding that feeds it",
                "More range in dance, sport and martial arts",
              ].map((benefit) => (
                <Card key={benefit} className="border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <p className="text-base leading-relaxed">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section id="testimonials" className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-light text-center mb-8">
              What clients say
            </h2>
            <Card className="border border-primary/20 bg-card shadow-md">
              <CardContent className="p-6 md:p-8">
                <div className="grid sm:grid-cols-[140px_1fr] gap-6 md:gap-8 items-start">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden mx-auto sm:mx-0 w-full max-w-[140px]">
                    <Image
                      src="/images/robin-birdfeather.png"
                      alt="Robin Birdfeather, Trigger Point Myotherapist"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div
                      className="flex gap-0.5 text-primary text-lg"
                      role="img"
                      aria-label="Rated 5 out of 5 stars"
                    >
                      <span aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    </div>
                    <blockquote className="text-lg md:text-xl font-light leading-relaxed text-balance">
                      &ldquo;Working with Vered is a joy. The beautiful, soulfully slow pace brings
                      me to a peaceful place. On a scale of 10, I feel an 11.&rdquo;
                    </blockquote>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      As a trigger point myotherapist, I feel the profoundly calming, integrating,
                      soft energy of the Feldenkrais process as a completion of the other body/mind
                      treatments in my own healing. Working with Vered is a joy, and I am able to
                      trust completely how the beautiful, soulfully slow pace brings me to a
                      peaceful place. Those deeper, often hidden and stuck, encapsulated body
                      experiences are given allowance and new freedom to let go, in a soft, flowing
                      way that lasts.
                    </p>
                    <footer className="pt-2 border-t border-border">
                      <p className="text-sm font-medium">Robin Birdfeather</p>
                      <p className="text-xs text-muted-foreground">
                        BA, MTPT (Trigger Point Myotherapist)
                      </p>
                    </footer>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-primary/20 bg-card shadow-md">
              <CardContent className="p-6 md:p-8">
                <div className="grid sm:grid-cols-[140px_1fr] gap-6 md:gap-8 items-start">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden mx-auto sm:mx-0 w-full max-w-[140px]">
                    <Image
                      src="/images/nelle-churchill.jpg"
                      alt="Nelle Churchill, Fascial Stretch Specialist"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div
                      className="flex gap-0.5 text-primary text-lg"
                      role="img"
                      aria-label="Rated 5 out of 5 stars"
                    >
                      <span aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    </div>
                    <blockquote className="text-lg md:text-xl font-light leading-relaxed text-balance">
                      &ldquo;The session was so lovely. I felt very safe and very comfortable as
                      Vered moved my body in ways that felt attuned and intentional.&rdquo;
                    </blockquote>
                    <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                      <p>
                        The movement felt very educational for my body and really boosted my
                        proprioception and body awareness. I have noticed that I am more grounded
                        on my feet. I have had ankle issues that began from a very bad sprain when
                        I was 13, and I am 30 now. I am walking differently and just feeling force
                        move through my body differently. It is really amazing, and the change has
                        been lasting.
                      </p>
                      <p>
                        From my experience with Vered, I think Feldenkrais is a very beneficial
                        modality. From a body awareness and neuromuscular reeducation standpoint, I
                        feel a tremendous benefit, and I feel like my body is more intelligent with
                        how it organizes force transmission through my joints. I&rsquo;m excited to
                        experience more with Vered and deepen my body&rsquo;s understanding of
                        movement.
                      </p>
                    </div>
                    <footer className="pt-2 border-t border-border">
                      <p className="text-sm font-medium">Nelle Churchill</p>
                      <p className="text-xs text-muted-foreground">
                        Fascial Stretch Specialist, Re&middot;Fascia
                      </p>
                    </footer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-light text-center">
              What it costs, and how many you need
            </h2>
            <Card className="border border-primary/20 bg-card shadow-md">
              <CardContent className="p-6 space-y-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-medium">Private lesson</h3>
                    <p className="text-sm text-muted-foreground">
                      One to one, in the Rohnert Park studio
                    </p>
                  </div>
                  <p className="text-2xl font-light">
                    $120
                    <span className="text-sm text-muted-foreground"> / 60 min</span>
                  </p>
                </div>
                <div className="space-y-3 text-sm leading-relaxed text-muted-foreground pt-4 border-t border-border">
                  <p>
                    Most people notice something after the first lesson. If Feldenkrais is going
                    to make a meaningful difference for you, you will usually know by the fourth
                    to sixth. That is a small, checkable commitment, and I would rather you knew
                    it upfront.
                  </p>
                  <p>
                    Three or four lessons is where the change tends to start holding on its own.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button asChild className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                      Book a session
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 border-primary/30">
                    <a href={`tel:${PHONE_TEL}`}>Free 15-minute call</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-2xl md:text-3xl font-light">Questions people ask</h2>
              <p className="text-base text-muted-foreground">
                Including the ones most people are too polite to ask out loud.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {FAQ.map((item, index) => (
                <AccordionItem key={item.q} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section id="bio" className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-center mb-8">
              Who you will be working with
            </h2>
            <div className="grid md:grid-cols-[180px_1fr] gap-8 items-start">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mx-auto md:mx-0 w-full max-w-[180px]">
                <Image
                  src="/images/vered-headshot.png"
                  alt="Vered Ben-Dor, Guild Certified Feldenkrais Practitioner"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-base font-medium">Vered Ben-Dor</p>
                  <p className="text-xs text-muted-foreground">
                    Guild Certified Feldenkrais Practitioner since 1994 &middot; Rohnert Park,
                    California
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  I trained for four years at Emerson College in England and qualified in 1994,
                  which means I have been doing this work for more than thirty years. Underneath
                  it sit decades of Tai Chi, Qi Gong and dance, which is where I learned to watch
                  how a person actually moves.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  I see clients one to one in a quiet studio at my home in Rohnert Park, and I
                  have taught in Sonoma County wellness settings for years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-light">Book a session</h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
              Pick a time that works for you, or call first if you would rather talk it through.
              Rohnert Park, close to Cotati, Penngrove, Petaluma and south Santa Rosa.
            </p>
            <Card className="border border-primary/20 bg-card shadow-md">
              <CardContent className="p-6 space-y-5">
                <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    See available times
                  </a>
                </Button>
                <div className="flex flex-col items-center gap-3">
                  <div className="relative w-28 h-28 rounded overflow-hidden border border-primary/10 bg-white p-1">
                    <Image
                      src="/images/booking-qr-code.jpg"
                      alt="Scan to book a Feldenkrais lesson"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Or scan to book from your phone</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 text-sm pt-4 border-t border-border">
                  <a href={`tel:${PHONE_TEL}`} className="text-primary hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                  <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">
                    {EMAIL}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-6 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <p className="text-sm font-medium">
              FELDENKRAIS<sup className="text-[8px]">&reg;</sup>
            </p>
            <p className="text-xs text-muted-foreground">
              Sonoma Feldenkrais &middot; Rohnert Park, Sonoma County, California &middot;{" "}
              {PHONE_DISPLAY}
            </p>
            <p className="text-xs text-muted-foreground">
              &copy; 2026 Vered Ben-Dor. Feldenkrais&reg; is a registered service mark of the
              Feldenkrais Guild&reg; of North America.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
