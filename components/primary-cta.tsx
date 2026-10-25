import { Button } from "@/components/ui/button"
import { BOOKING_URL, PHONE_TEL, PHONE_DISPLAY } from "@/lib/site"

export function PrimaryCta() {
  return (
    <div className="max-w-xl mx-auto w-full space-y-3 text-center">
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          asChild
          size="lg"
          className="group w-full sm:w-auto rounded-full h-11 px-7 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.99]"
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
          size="lg"
          variant="outline"
          className="w-full sm:w-auto rounded-full h-11 px-7 border-primary/25 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.99]"
        >
          <a href={`tel:${PHONE_TEL}`}>Free 15-minute call</a>
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Not sure if this is right for you? Call {PHONE_DISPLAY} and ask.
      </p>
    </div>
  )
}
