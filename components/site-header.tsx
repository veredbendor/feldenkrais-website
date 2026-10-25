import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { BOOKING_URL } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-10 w-10 text-primary" />
          <span className="text-xl font-semibold">
            FELDENKRAIS<sup className="text-xs">&reg;</sup>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/what-is-feldenkrais"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            What is Feldenkrais
          </Link>
          <Link
            href="/pricing"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/faq"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Questions
          </Link>
        </nav>
        <Button
          asChild
          className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.99]"
        >
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book a session
          </a>
        </Button>
      </div>
    </header>
  )
}
