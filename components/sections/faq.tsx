import type { ElementType } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const FAQ = [
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

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

export function FaqSection({ as: Heading = "h2" }: { as?: ElementType }) {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <Heading className="text-2xl md:text-3xl font-light">Questions people ask</Heading>
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
  )
}
