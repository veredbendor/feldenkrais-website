---
description: Make a copy change to the Sonoma Feldenkrais site on a new branch
---

Read `CLAUDE.md` first. It holds the voice rules, the facts that must stay
accurate, and the repo conventions. Follow them.

Branch off `pilot-copy-v2` (not `main`) into a new, clearly named branch.

## The change

$ARGUMENTS

## Before you write

Read `app/page.tsx` in full, plus `app/layout.tsx` and `lib/site.ts`. Match the
register of the copy already there. If the change touches a section that exists,
show me the current text and your replacement side by side before editing.

## Verify

    npx tsc --noEmit
    pnpm build

Both must pass clean. Then start the dev server and read the changed section
back to me.

## Finish

Commit to the branch with a message saying what changed and why. Do not push,
do not merge to main, do not deploy. Tell me the branch name.
