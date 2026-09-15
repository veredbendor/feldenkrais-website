# Sonoma Feldenkrais website

Marketing site for Vered Ben-Dor's Feldenkrais practice in Rohnert Park,
Sonoma County. Next.js App Router, shadcn/ui, Tailwind v4, pnpm, deployed on
Vercel to sonomafeldenkrais.com.

The visitor this site is written for has never heard the word Feldenkrais and
is Googling their own pain. Every copy decision serves that person.

## Where things live

- `app/page.tsx` — the entire homepage, including the `FAQ` array
- `app/layout.tsx` — title, meta description, Open Graph
- `lib/site.ts` — booking URL, phone, email, site name. Never hardcode these
- `app/workshop/` — group class page and registration form
- `components/ui/` — shadcn primitives. Do not edit these

## Current state (delete this section once merged)

Branch `pilot-copy-v2` holds a full homepage copy rewrite, committed but not
merged to main. Any new copy work should branch from `pilot-copy-v2`, not from
main, or the rewrite is lost.

## Voice

- No em dashes anywhere
- US spelling
- Second person. Write to the reader, never about "the client" or "the
  practitioner"
- Plain language only. Banned: "somatic education", "organic intelligence",
  "kinesthetic", "modality", "holistic", "journey", "align", "energy work"
- Lead with the reader's problem, never with the method
- Concrete over abstract. "Turning to look behind you while driving" beats
  "improved rotational mobility"
- Say "nervous system", never "brain". The word brain reads as neuroscience
  marketing; nervous system reads as physiology
- Never promise a cure and never imply medical treatment. Feldenkrais is
  education with therapeutic benefits, not therapy
- Short sentences

## Facts that must stay accurate

- Vered Ben-Dor, Guild Certified Feldenkrais Practitioner since 1994, trained
  four years at Emerson College, England
- Private lesson: $120, 60 minutes, one to one
- Location: quiet home studio in Rohnert Park. Near Cotati, Penngrove,
  Petaluma, south Santa Rosa. Exact address goes out with the booking
  confirmation
- Group class: Release Your Neck & Shoulders, 4 Thursdays from September 24,
  9-10 AM, $20 drop-in, at Cotati Wellness Center. Different venue from the
  private studio and must stay clearly labelled as such
- Public phone is the Google Voice number (707) 583-9472. Never put a personal
  cell on the site
- Dosage line, keep consistent everywhere: most people notice something after
  one lesson, and know by the fourth to sixth whether it is working
- No package pricing on the site. Packages are offered verbally only

## Constraints

- Copy and layout changes only unless asked otherwise. Do not add
  dependencies, do not restructure the component architecture
- Keep the existing design tokens and Tailwind classes. New sections are built
  from the Card and Accordion patterns already on the page
- The FAQPage JSON-LD is generated from the `FAQ` array in `app/page.tsx`.
  Edit the array, never the schema by hand

## Working in this repo

`.next/` is committed to git, so `git status` and `git diff` are noisy. Scope
changes to `app/`, `components/` and `lib/`, and never stage anything under
`.next/`. The `chore-gitignore-next` branch fixes this properly.

Verify before committing:

    npx tsc --noEmit
    pnpm build

Both must pass clean. Commit to a branch. Do not push, merge to main, or
deploy without being asked.
