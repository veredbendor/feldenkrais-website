import type { ElementType } from "react"
import Image from "next/image"

export function BioSection({ as: Heading = "h2" }: { as?: ElementType }) {
  return (
    <section id="bio" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Heading className="text-2xl md:text-3xl font-light text-center mb-8">
            Who you will be working with
          </Heading>
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
  )
}
