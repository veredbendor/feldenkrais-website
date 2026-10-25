import Link from "next/link"
import { BOOKING_URL, PHONE_DISPLAY } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 py-6 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <p className="text-sm font-medium">
            FELDENKRAIS<sup className="text-[8px]">&reg;</sup>
          </p>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <Link href="/what-is-feldenkrais" className="hover:text-foreground transition-colors">
              What is Feldenkrais
            </Link>
            <Link href="/pricing" className="hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/faq" className="hover:text-foreground transition-colors">
              Questions
            </Link>
            <Link href="/workshop" className="hover:text-foreground transition-colors">
              Group class
            </Link>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Book a session
            </a>
          </nav>
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
  )
}
