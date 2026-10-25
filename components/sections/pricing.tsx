import type { ElementType } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BOOKING_URL, PHONE_TEL } from "@/lib/site"

export function PricingSection({ as: Heading = "h2" }: { as?: ElementType }) {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          <Heading className="text-2xl md:text-3xl font-light text-center">
            What it costs, and how many you need
          </Heading>
          <Card className="border border-primary/10 bg-card shadow-[var(--shadow-soft)]">
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
                <Button
                  asChild
                  className="group flex-1 rounded-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.99]"
                >
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book a session
                    <span className="flex size-6 items-center justify-center rounded-full bg-primary-foreground/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-3.5"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 rounded-full h-11 border-primary/25 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.99]"
                >
                  <a href={`tel:${PHONE_TEL}`}>Free 15-minute call</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
