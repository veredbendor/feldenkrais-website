import type { ElementType } from "react"
import Image from "next/image"

export function WhatFeldenkraisSection({
  as: Heading = "h2",
  heading = "You have not lost the movement. You have forgotten it.",
  lead,
}: {
  as?: ElementType
  heading?: string
  lead?: string
}) {
  return (
    <section id="what" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <Heading className="text-2xl md:text-3xl font-light">{heading}</Heading>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                {lead ? <p className="text-foreground">{lead}</p> : null}
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
  )
}
