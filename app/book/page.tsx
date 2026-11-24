import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BOOKING_SESSION_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site"

export const metadata = {
  title: "Book a session",
}

export default function BookPage() {
  // Only the session calendar exists for now. The ?type=call variant and a
  // dedicated call URL get added once the Setmore call service is live.
  const bookingUrl = BOOKING_SESSION_URL

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-balance">
              Book a session
            </h1>
            <p className="text-base md:text-lg font-light text-muted-foreground">
              Pick a time that works for you. Your lesson is one to one in a quiet home
              studio in Rohnert Park.
            </p>
          </div>

          <div className="mt-8 md:mt-10">
            <iframe
              src={bookingUrl}
              scrolling="yes"
              width="100%"
              frameBorder="0"
              allow="web-share; payment"
              title="Book a session"
              className="w-full min-h-[1100px] md:min-h-[900px] rounded-lg border border-border/50 bg-card"
            />
          </div>

          <div className="mt-6 text-center space-y-2 text-sm text-muted-foreground">
            <p>
              Trouble booking? Call{" "}
              <a href={`tel:${PHONE_TEL}`} className="text-primary hover:underline">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Or open the booking page in a new tab
              </a>
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
