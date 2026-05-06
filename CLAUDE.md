# CLAUDE.md — Context for ChenHsin Lee's Personal Website

This file gives Claude Code the full context it needs to work on this codebase intelligently.
Read this before making any changes.

---

## Who This Site Is For

**ChenHsin Lee** — product builder based in SF / Taipei.

Background relevant to this work:
- Product & UX designer at **KKBOX** (Asia's major music streaming platform), leading personalization and discovery systems at scale (10M+ active users, 5+ markets). Core insight from this work: roughly 90% of catalog is never heard — the discovery problem is structural, not algorithmic.
- **Co-lead and panel moderator at PLAY 2026**, Berkeley's flagship media & entertainment conference (Spieker Forum, UC Berkeley Haas). Full editorial independence; theme "The Reinvention Era." Brought in speakers from Suno, Descript, Amazon Music, Patreon, Google DeepMind, PlayStation, YouTube, and others.
- Resonated with a thesis a speaker from PLAY (John Voss from Descript) built around the **"mediocre middle"** — the vast majority of music produced but never surfaced to audiences — and what it means for creative tools to expand access without displacing craft.
- Thinks seriously about **AI, judgment, and what should stay human**: who controls discovery, where attention flows, and what gets lost in the gap between creation and release.

Contact: chenhsinlee@gmail.com

---

## Fellowship Context: a16z New Media Fellowship

**Target fellowship:** a16z New Media Fellowship (run through **Existency**)

**What Existency cares about:**
Existency is building out its new media market team, content team, operating team, and GTM roles for their portfolio companies. Fellowship reviewers are specifically looking for people who understand:
- How to position companies' products into compelling strategies, stories, and narratives
- Storytelling and brand voice at a strategic level (not just execution)
- How new media formats, creative tools, and distribution shifts create product and market opportunities

**Goal of this website in the fellowship context:**
The site serves as ChenHsin's primary application artifact. A reviewer visiting this site should come away thinking: *"This person understands the new media landscape, can shape how a product gets positioned and talked about, and has a clear point of view on where things are heading."*

This is **not a portfolio of visual design work**. It is a demonstration of strategic thinking, taste, and narrative judgment — the exact profile Existency needs for content, GTM, and media-facing roles.

**Tone throughout the site:**
Write like a thoughtful operator with taste. Clear, specific, calm, grounded. No hype. No abstraction. Concrete insight and real human voice. This is a strategic opinion from someone who knows the industry — not a marketing pitch, not AI-sounding polish.

---

## Current Website: What Exists

The site is built with **Astro** (static site generator). Run `npm run dev` to start the dev server at `localhost:4321`. Build with `npm run build`.

### Pages

#### `/` — Homepage (`src/pages/index.astro`)
- Hero: Dark card on a geometric pink/magenta (#C94EAC) background. Headline: *"I craft stories people connect with."* Two CTAs: "View work" and "Read Noises of AI."
- About section: Short bio paragraph covering ChenHsin's background at the intersection of tech, media, and audience. Tags: Product Design, AI Tools, Creative Technology, Media Strategy.
- Section previews: Two cards linking to Portfolio and Noises of AI.
- Contact strip: "Open to conversations about media, AI products, and creative work."

**Bio copy on homepage:**
> "I work at the intersection of tech, media, and audience. My background is in product, but the thread across my work is finding the story behind what a company builds and making people care about it. I've done that in music streaming at scale, and on the conference stage with founders and leaders from Descript, Suno, Patreon, PlayStation, and Discord. I'm especially interested in how AI reshapes creativity and judgment, and what helps technology support better thinking rather than replace it."

---

#### `/portfolio` — Portfolio index (`src/pages/portfolio/index.astro`)
Lists two case studies. Each links to a full case study page.

#### `/portfolio/kkbox-revamp` — Case study 1
**"How KKBOX Found Its Story Against Spotify"**
- Role: Product & Project Lead
- Dates: 2021–2023
- Markets: 5+ Asian markets; 10M+ active users
- Key narrative: KKBOX's competitive answer to Spotify wasn't catalog size or algorithm sophistication — it was *context*. Local platform, built by people who understood daily life in the region, could know *when and why* you needed music, not just what you liked.
- Work covered: Homepage redesign; initiated user research; built personalized feed (familiar → exploratory axis); "Your Scenes" feature (Relax / Focus / Refreshing moods); AI-powered playlists; Surprise Picks (80/20 familiar/stretch principle).
- Metrics: Customer satisfaction 81% → 95%; +2% retention; +5% homepage play rate; +38% AI playlist play rate.
- Key design insight surfaced: *"What needed to be communicated here, and who is it for?"*

#### `/portfolio/play-2026` — Case study 2
**"PLAY 2026: The Reinvention Era"**
- Role: Conference Co-Lead & Panel Moderator
- Date: March 2026, Spieker Forum, UC Berkeley Haas
- Key narrative: Rejected the standard vertical-by-industry conference format. Built the day as a through-line — each session one layer of the same larger question about how creation, distribution, and tools are being reinvented in parallel.
- Work covered: Full speaker recruitment across all sessions; curated the Information panel (journalism professor + TLDR founder + YouTube lead); Tech & Startup panel (Suno + Descript + DevStream Labs + content marketing veteran); added first-ever Creator Economy keynote (Patreon COO); added Startup Showcase.
- Panel moderated: **"New Tools, New Media Products"** — anchored on the "mediocre middle" concept (from John Voss at Descript). Moved through three layers: origin stories → what they're building and for whom → harder questions about taste, craft, and what stays human when AI handles the easy parts.
- Speaker logos: Suno, Descript, Amazon Music, Patreon, Google DeepMind, Sony PlayStation, Supercell, YouTube, TLDR, DevStream Labs, Berkeley Journalism, Matter Ventures, Playful AI, Linden Labs, Kuku Studios.
- Testimonials from: Beth Murphy (Amazon Music), Paige Fitzgerald (Patreon COO), Avi Naim (Suno Staff Product Designer), Tiger Souvannakoumane (Google DeepMind PMM), Bruce Lam (DevStream Labs founder).

---

#### `/noises-of-ai` — Writing index (`src/pages/noises-of-ai/index.astro`)
Masonry grid of writing cards. Description: *"Notes on AI, media, and product judgment. What's worth building, what's overhyped, and what should stay human."*

#### `/noises-of-ai/[slug]` — Individual posts

**Three posts exist:**

1. **"AI and the Judgment Problem"** (March 15, 2026)
   - Tags: ai, product, judgment
   - Thesis: The decision automation problem isn't about stakes — it's about *legibility*. A task can be automated well when its success criteria are clear, measurable, and stable. The interesting tools know where they stop and return control to the human where legibility is low. Most AI products outsource judgment with plausible deniability instead.
   - Closing question: *"What would it look like to build a tool that actively flagged the moments when you should override it?"*

2. **"What Suno and Descript get right that most AI tools don't"** (Feb 28, 2026)
   - Tags: ai, creative-tools, product
   - Thesis: They don't try to replace the creative act — they expand the scope of who can attempt it. Suno targets people with aesthetic sensibilities but no technical execution skills. Descript targets the 80% video editing case, not professional editors. Pattern: *AI creative tools that work expand access without displacing expertise. The ones that fail try to match or replace expert output.*
   - Key claim: The market opportunity in creative AI isn't at the top of the skill curve — it's at the point of entry.

3. **"Curiosity as a design constraint"** (Jan 10, 2026)
   - Tags: design, ai, product
   - Thesis: The best products make you curious, not just efficient. A recommendation that gets it exactly right is satisfying; one that gets it 80% right — close enough that you can feel the algorithm's model of you — is more interesting. Asks whether the industry is over-optimizing for accuracy at the expense of productive surprise.

---

## Tech Stack

- **Framework:** Astro (static)
- **Content:** Markdown (`src/content/blog/*.md`) for posts; JSON (`src/content/portfolio/*.json`) for portfolio case studies
- **Styling:** Plain CSS with design tokens in `src/styles/theme.css`; each page has scoped `<style>` blocks
- **Fonts:** DM Serif Display (headings) + DM Sans (body) via Google Fonts
- **Color palette:** Cream bg `#FAF8F5`, near-black `#0E0E0E`, accent magenta `#C94EAC` (hero/blocks), accent gold `#C9A84C` (links/hover)
- **Components:** `src/components/Layout/` (Header, Footer); `src/components/Portfolio/` (MediaBlock, StatBlock, PullQuote, etc.); `src/components/Shared/PageIntro.astro`
- **GIF animations:** Used for hero photo and section preview cards (referenced from `/images/`)
- **Build:** `npm run build` → `./dist/`

---

## Voice and Writing Rules

When writing or editing any copy on this site:

1. **No em dashes.** Use a period or restructure the sentence.
2. **No hype words.** Nothing "transformative," "game-changing," "cutting-edge," or generically aspirational.
3. **Concrete over abstract.** Name the specific insight, product, person, or number. Avoid floating claims.
4. **Short sentences.** If a sentence is doing more than one thing, split it.
5. **Active voice.** "I initiated the revamp" not "the revamp was initiated."
6. **Honest framing.** ChenHsin's writing tends to sit with tension rather than resolve it neatly. Don't over-conclude.
7. **Operator's voice.** This person has shipped things and moderated rooms full of senior industry leaders. The writing should feel like it comes from someone who has earned their opinions.

---

## Fellowship Positioning Summary

The through-line a reviewer should see across the entire site:

> ChenHsin understands that the real work in new media is not production — it is positioning. At KKBOX, the product problem was a story problem: KKBOX had to stop broadcasting and start listening. At PLAY, the conference problem was a framing problem: vertical silos were producing conversations about industries instead of conversations about the questions industries are being asked to answer. In the Noises of AI writing, the AI products problem is a judgment problem: most tools outsource thinking rather than support it.
>
> The pattern across all three: find the real question underneath the surface one, build toward that, and make the story clear enough that other people can act on it.
>
> That is exactly the profile Existency needs for new media, content, and GTM roles — someone who can sit with a portfolio company and ask: what is the real thing this product does, who is it actually for, and how do we say that in a way people trust?
