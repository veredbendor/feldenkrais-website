import type { Metadata } from "next"
import { existsSync } from "fs"
import path from "path"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PrimaryCta } from "@/components/primary-cta"
import { cn } from "@/lib/utils"

const TITLE = "Try Feldenkrais in one minute | Sonoma Feldenkrais"
const DESCRIPTION =
  "Three one-minute guided movement lessons for your back, neck and balance, from Feldenkrais practitioner Vered Ben-Dor in Rohnert Park."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/try" },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "/try",
    locale: "en_US",
    images: [{ url: "/images/try/sit-bones.jpg", width: 928, height: 1152, alt: "Find your sit bones" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/try/sit-bones.jpg"],
  },
}

type Lesson = {
  id: string
  title: string
  image: string
  alt: string
  audio: string
  script: string[]
}

const LESSONS: Lesson[] = [
  {
    id: "sit-bones",
    title: "Find your sit bones",
    image: "/images/try/sit-bones.jpg",
    alt: "Find your sit bones",
    audio: "sit-bones.mp3",
    script: [
      "Wherever you're sitting right now, try this.",
      "Notice the two bones you're sitting on. Your sit bones.",
      "Slowly, roll your pelvis a little forward. And a little back.",
      "Make it small. So small that no one across the room would see it.",
      "Again. Forward. And back. Easy.",
      "Now stop. And notice.",
      "Are you sitting differently than a minute ago?",
      "No stretching. No effort. You just gave your nervous system better information.",
    ],
  },
  {
    id: "eyes-lead",
    title: "Let your eyes lead",
    image: "/images/try/eyes-lead.jpg",
    alt: "Let your eyes lead",
    audio: "eyes-lead.mp3",
    script: [
      "Sit or lie comfortably.",
      "Slowly turn your head to the right. Only as far as it goes easily. No strain.",
      "Come back to the middle.",
      "Now to the left. Notice: is one side easier?",
      "Come back.",
      "This time, let your eyes go first. Look to the right, and let your head follow.",
      "And back.",
      "Eyes to the left. The head follows.",
      "Rest. Then turn once more, simply.",
      "Is it smoother? Does it go a little farther?",
      "You didn't stretch anything. You changed how the movement is organized.",
    ],
  },
  {
    id: "weight",
    title: "Where is your weight right now?",
    image: "/images/try/weight.jpg",
    alt: "Where is your weight right now?",
    audio: "weight.mp3",
    script: [
      "Stand wherever you are.",
      "Notice your two feet. Is there more weight on one? More on the heels, or the toes?",
      "Slowly, shift a little more weight to your right foot. And come back.",
      "Now to the left. And back.",
      "Keep it small. Feel your ankles, your knees, your hips quietly rearrange.",
      "Again. Right. And left.",
      "Now come to the middle, and stand.",
      "Is the middle where you started?",
      "Balance is a skill. Your body keeps refining it for as long as you give it something to feel.",
    ],
  },
]

type Idea = {
  id: string
  title: string
  image: string
  alt: string
  body: string
}

const IDEAS: Idea[] = [
  {
    id: "skeleton",
    title: "Let your skeleton do its job",
    image: "/images/try/skeleton.jpg",
    alt: "Let your skeleton do its job",
    body:
      "Most of us try to fix how we move with willpower. Sit up straight, shoulders back, hold it. It lasts about a minute, because holding is work. When you can clearly feel where your bones are and how they carry your weight, your muscles can stop doing the skeleton's job. Posture becomes something that happens, with nothing to hold.",
  },
  {
    id: "habits",
    title: "Habits change when you feel an easier option",
    image: "/images/try/habits.jpg",
    alt: "Habits change when you feel an easier option",
    body:
      "The way you move was organized years ago, often around an old injury that has long since healed. Habits like that do not change by force. They change when your nervous system feels a clearer, easier option. That is why this work is slow and gentle on purpose. It is closer to learning than to treatment.",
  },
  {
    id: "do-less",
    title: "Do less. Feel more.",
    image: "/images/try/do-less.jpg",
    alt: "Do less. Feel more.",
    body:
      "When a movement is hard, we push. But effort is noisy, and it drowns out the small signals your nervous system needs in order to find a better way. So we go slowly and make things small. In the quiet, your system notices what it could not notice before, and something that was hard becomes simply easier.",
  },
]

/** Checked at build time on the server, so a player only renders when its file exists. */
function audioExists(file: string) {
  return existsSync(path.join(process.cwd(), "public", "audio", "try", file))
}

const imageClasses =
  "relative aspect-[4/5] w-full max-w-sm md:max-w-none mx-auto rounded-lg overflow-hidden"
const imageSizes = "(min-width: 768px) 40vw, 100vw"

export default function TryPage() {
  const lessons = LESSONS.map((lesson) => ({
    ...lesson,
    hasAudio: audioExists(lesson.audio),
  }))

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Intro */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h1 className="text-3xl md:text-4xl font-light">Feel it for yourself</h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Three one-minute lessons you can do right where you are. No equipment, no
                stretching, no effort.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground/80">
                Go slowly and stay comfortable. Make every movement smaller than you think you
                need to. If anything hurts, stop.
              </p>
            </div>
          </div>
        </section>

        {/* Three one-minute lessons */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-light text-center mb-12 md:mb-16">
                Three one-minute lessons
              </h2>
              <div className="space-y-16 md:space-y-24">
                {lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    id={lesson.id}
                    className="grid md:grid-cols-2 gap-10 items-start scroll-mt-24"
                  >
                    <div className={cn(imageClasses, index % 2 === 1 && "md:order-2")}>
                      <Image
                        src={lesson.image}
                        alt={lesson.alt}
                        fill
                        sizes={imageSizes}
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-5">
                      <h3 className="text-xl md:text-2xl font-light">{lesson.title}</h3>
                      {lesson.hasAudio ? (
                        <audio controls preload="none" className="w-full">
                          <source src={`/audio/try/${lesson.audio}`} type="audio/mpeg" />
                          Your browser does not support the audio player.
                        </audio>
                      ) : null}
                      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
                        {lesson.script.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Three ideas behind the work */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-light text-center mb-12 md:mb-16">
                Three ideas behind the work
              </h2>
              <div className="space-y-16 md:space-y-24">
                {IDEAS.map((idea, index) => (
                  <div
                    key={idea.id}
                    id={idea.id}
                    className="grid md:grid-cols-2 gap-10 items-center scroll-mt-24"
                  >
                    <div className={cn(imageClasses, index % 2 === 1 && "md:order-2")}>
                      <Image
                        src={idea.image}
                        alt={idea.alt}
                        fill
                        sizes={imageSizes}
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-5">
                      <h3 className="text-xl md:text-2xl font-light">{idea.title}</h3>
                      <p className="text-base leading-relaxed text-muted-foreground">{idea.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing call to action */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6 mb-8">
              <h2 className="text-2xl md:text-3xl font-light">Want to feel more of this?</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                In a private session I work with you one to one, with slow, gentle touch, on
                whatever you most want to do more easily.
              </p>
            </div>
            <PrimaryCta />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
