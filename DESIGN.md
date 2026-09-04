---
name: Celebrate Mark
description: A trailhead kiosk for one Saturday in Peoples State Forest, built as a routed pine board over notice paper.
colors:
  board: "#4a3a2a"
  board-deep: "#2f2218"
  board-edge: "#5e4a36"
  cream: "#f4e9cf"
  cream-dim: "#d7c9a8"
  cream-hover: "#fff6dd"
  paper: "#f6f1e4"
  paper-2: "#ece4d1"
  paper-sheet: "#fffbf1"
  paper-field: "#fffdf7"
  rule: "#cdbf9f"
  ink: "#1f1a14"
  ink-2: "#4d4338"
  pine: "#2f5d3a"
  pine-deep: "#1e3f28"
  pine-hover: "#38704a"
  pine-tint: "#dfe8dc"
  pine-tint-edge: "#b9cbb6"
  blaze: "#c9782e"
  blaze-deep: "#a85f1e"
  blaze-text: "#8a4a12"
  blaze-tint: "#f7e3cc"
  blaze-hover: "#d9873b"
  river: "#6f95a8"
typography:
  display:
    fontFamily: "Rubik, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.7rem, 10.5vw, 5.6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Rubik, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.7rem, 4.5vw, 2.3rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  plank:
    fontFamily: "Rubik, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 4vw, 1.8rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Rubik, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Atkinson Hyperlegible, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Rubik, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  mono:
    fontFamily: "ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
rounded:
  inner: "6px"
  plank: "7px"
  sheet: "8px"
  plaque: "9px"
  board: "10px"
  step: "50%"
  chip: "999px"
spacing:
  hairline: "0.35rem"
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.25rem"
  xl: "1.5rem"
  2xl: "2rem"
  section: "2.5rem"
  section-wide: "4rem"
  gutter: "2rem"
components:
  plaque:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.board-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.plaque}"
    padding: "0.7rem 1.3rem"
    height: "3.25rem"
  plaque-hover:
    backgroundColor: "{colors.cream-hover}"
    textColor: "{colors.board-deep}"
  plaque-blaze:
    backgroundColor: "{colors.blaze}"
    textColor: "{colors.board-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.plaque}"
    padding: "0.7rem 1.3rem"
    height: "3.25rem"
  plaque-blaze-hover:
    backgroundColor: "{colors.blaze-hover}"
    textColor: "{colors.board-deep}"
  plaque-pine:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.plaque}"
    padding: "0.7rem 1.3rem"
    height: "3.25rem"
  plaque-pine-hover:
    backgroundColor: "{colors.pine-hover}"
    textColor: "#ffffff"
  plaque-compact:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.board-deep}"
    rounded: "{rounded.plaque}"
    padding: "0.5rem 1rem"
    height: "2.9rem"
  board:
    backgroundColor: "{colors.board}"
    textColor: "{colors.cream}"
    rounded: "{rounded.board}"
    padding: "1.8rem 1.7rem"
  board-wide:
    backgroundColor: "{colors.board}"
    textColor: "{colors.cream}"
    rounded: "{rounded.board}"
    padding: "3.25rem 3.5rem 2.75rem"
  plank:
    backgroundColor: "{colors.board}"
    textColor: "{colors.cream}"
    typography: "{typography.plank}"
    rounded: "{rounded.plank}"
    padding: "0.55rem 1.1rem 0.6rem"
  plank-pine:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.cream}"
    typography: "{typography.plank}"
    rounded: "{rounded.plank}"
    padding: "0.55rem 1.1rem 0.6rem"
  notice:
    backgroundColor: "{colors.paper-sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "1.25rem 1.35rem"
  notice-blaze:
    backgroundColor: "{colors.blaze-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "1.25rem 1.35rem"
  notice-pine:
    backgroundColor: "{colors.pine-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "1.25rem 1.35rem"
  chip:
    backgroundColor: "{colors.pine-tint}"
    textColor: "{colors.pine-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "0.45rem 1rem"
    height: "2.9rem"
  chip-pressed:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.cream}"
  field:
    backgroundColor: "{colors.paper-field}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sheet}"
    padding: "0.7rem 0.9rem"
    height: "3.25rem"
  field-invalid:
    backgroundColor: "#fff5ea"
    textColor: "{colors.ink}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.sheet}"
    padding: "0.85rem 1rem"
    height: "3rem"
  nav-link-current:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.board-deep}"
  menu-toggle:
    backgroundColor: "rgba(0, 0, 0, 0.22)"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.sheet}"
    padding: "0.4rem 0.9rem"
    height: "2.9rem"
  route-step:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.cream}"
    rounded: "{rounded.step}"
    size: "2.4rem"
  coords-code:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.inner}"
    padding: "0.5rem 0.75rem"
---

# Design System: Celebrate Mark

## Overview

**Creative North Star: "The Routed Park Sign"**

The site is the trailhead kiosk a visitor walks past on the day: a routed pine board with cream letters cut into it, saying when and where before anything else, with a sheet of notice paper pinned under the plexiglass for everything that needs reading. It refuses the memorial template of a cream page, a soft portrait, and a candle. The board is dark, sturdy, and warm; the paper is pale and quiet; the only working colors are the pine green of the trail blaze and the blaze orange of the arrow that says go this way.

Density is low and the type is large because the audience is family and friends in their sixties to eighties, on phones, often grieving. Every fact sits in a ruled row or a plank-headed section; every action is a plaque you can press with a thumb. Motion exists (letters route in, leaves drift down the ridge, the last-mile map draws itself) but it is slow, one-shot, and stops entirely under reduced motion without hiding anything. The voice of the visuals matches the voice of the copy: plain, warm, never cheerful, never urgent.

**Key Characteristics:**
- One dark routed board per page carries the headline facts; everything else reads on notice paper.
- Two working colors only: pine for wayfinding and section variants, blaze for the single primary action in view.
- Rubik at 700 to 800 for anything routed or labelled; Atkinson Hyperlegible for prose, never below 18px.
- Plaques are the only element that lifts and presses; planks, notices, and rows sit flush.
- Inline stroke icons (arrow, pin, calendar, phone, car, plus) are the wayfinding grammar; no icon fonts, no emoji.
- Motion is authored once per element, uses one ease, and is fully removed under `prefers-reduced-motion`.

## Colors

A warm, low-chroma palette of pine board, cream paint, and notice paper, with pine green and blaze orange as the only two colors that do work.

### Primary
- **Blaze** (`--blaze`, #c9782e): the trail-blaze orange. The one primary plaque per view (Directions, Send to the family), the focus ring on paper, the caret in fields, the FAQ plus sign, the drifting leaves, the selection highlight on the board. Rare on purpose.
- **Blaze Deep** (`--blaze-deep`, #a85f1e): invalid field border, the FAQ chevron. The only "something needs your attention" color; it is orange, never red.
- **Blaze Text** (`--blaze-text`, #8a4a12): blaze made dark enough for AA text on paper. Error messages and the distance ribbon ("5 to 15 minutes").
- **Blaze Tint** (`--blaze-tint`, #f7e3cc): the warm notice sheet (`.notice--blaze`) for the thing the visitor must not miss (GPS confusion, book early) and the text selection color on paper.
- **Blaze Hover** (#d9873b): the blaze plaque under the pointer.

### Secondary
- **Pine** (`--pine`, #2f5d3a): the secondary plaque, the pressed chip, the route-step badge, the plank variant for wayfinding sections, the checkbox accent.
- **Pine Deep** (`--pine-deep`, #1e3f28): every heading on paper (h2, page titles, legends, FAQ questions, fact keys), link color on paper, the pine plaque's base edge and the chip's pressed border.
- **Pine Hover** (#38704a): pine plaque under the pointer, and the inner edge of the pine plank.
- **Pine Tint** (`--pine-tint`, #dfe8dc): the calm notice sheet (`.notice--pine`), the resting chip, the checked choice row, the portrait placeholder.
- **Pine Tint Edge** (#b9cbb6): the border on pine-tinted sheets and resting chips.

### Tertiary
- **River** (`--river`, #6f95a8): the Farmington River. Declared for the ridge and map palette; the last-mile map paints the river with its own literal blue (#7fa3b4) so the token is currently reserved rather than working.

### Neutral
- **Board** (`--board`, #4a3a2a): the routed pine board. Header, footer, action bar, hero board, plank headings, input borders, the top rule on ruled lists, the scrollbar thumb.
- **Board Deep** (`--board-deep`, #2f2218): the board's routed inner edge, the 3px base under every plaque, text on cream and blaze plaques, the header's bottom rule.
- **Board Edge** (`--board-edge`, #5e4a36): the lighter second inset line that makes the board read as a routed frame.
- **Board Grain** (`--grain`, `grain.svg`): authored fractal-noise wood grain drawn as a faint dark wash over every board surface. Never a photograph.
- **Cream** (`--cream`, #f4e9cf): the painted letters. All text on board surfaces, the resting plaque, the current nav item, the board's inner painted border.
- **Cream Dim** (`--cream-dim`, #d7c9a8): fine print on the board (the footer domain line).
- **Cream Hover** (#fff6dd): the cream plaque under the pointer.
- **Paper** (`--paper`, #f6f1e4): the notice paper page ground, with a faint warm radial glow (#fffaf0) at the top.
- **Paper 2** (`--paper-2`, #ece4d1): the scrollbar track and the coordinates code block.
- **Paper Sheet** (#fffbf1): the plain pinned notice.
- **Paper Field** (#fffdf7): input, select, textarea, and choice-row backgrounds.
- **Rule** (`--rule`, #cdbf9f): every hairline: section dividers, fact and lodging rows, FAQ rows, family list rows, notice borders, code block border, choice-row borders.
- **Ink** (`--ink`, #1f1a14): body text on paper, h3 titles, lodging names, field text.
- **Ink 2** (`--ink-2`, #4d4338): secondary prose: fine print, hints, section lede lines, town and address lines, family relations.

### Named Rules
**The Two Working Colors Rule.** Pine and blaze are the only chromatic colors that do work. Blaze marks the one primary action in view and the thing you must not miss; pine marks wayfinding, secondary actions, and calm notices. There is no red anywhere, including errors.

**The Cream Letters Rule.** Text on any board surface (header, footer, hero board, plank, action bar) is cream, never white, never ink. Routed text carries the up-and-down text shadow (`0 -1px 0 rgba(0,0,0,0.55), 0 1px 0 rgba(255,245,220,0.18)`) so it reads as cut into the wood.

**The One Board Rule.** A page has one routed board in its main content: the hero sign on Home, the single board on the thank-you and 404 pages, or none on the reading pages. Header, footer, and the phone action bar are the kiosk frame, not additional boards.

## Typography

**Display Font:** Rubik (with Avenir Next, Segoe UI, system-ui)
**Body Font:** Atkinson Hyperlegible (with Avenir Next, Segoe UI, system-ui)
**Label/Mono Font:** ui-monospace, SF Mono, Menlo (coordinates only)

**Character:** Rubik's rounded terminals at 700 and 800 read as router-cut letters in painted wood; Atkinson Hyperlegible, designed for low vision, carries every paragraph. The root is 18px, so the smallest text on the site (`small`, `.fine`, hints) is exactly 18px and body runs at 18.9px.

### Hierarchy
- **Display** (800, `clamp(2.7rem, 10.5vw, 5.6rem)`, 1, -0.03em): the date on the hero board, the largest thing on the site. Used once.
- **Board name / day / time** (800 at `clamp(1.6rem, 5.2vw, 2.4rem)` for the name; 700 at `clamp(1.45rem, 5vw, 2.2rem)` for day and time): the hero board's supporting routed lines. The kicker line above the name ("A Celebration of Life for") is the h1 at 600, `clamp(1.15rem, 3.4vw, 1.55rem)`.
- **Headline** (700, `clamp(1.7rem, 4.5vw, 2.3rem)`, 1.12, -0.01em, pine deep): h2 and inner-page h1 (`.page-title`). On paper, headlines are almost always wrapped in a plank.
- **Plank** (700, `clamp(1.35rem, 4vw, 1.8rem)`, cream on board): the heading text inside a plank; slightly smaller than a bare headline because the wood adds weight.
- **Board title** (`.board-title`, 1.8rem, 2.6rem at 900px and up): the routed h1 on the thank-you and 404 boards.
- **Title** (700, 1.3rem, 1.12 to 1.2, ink): h3 and `.h3`, notice headings, lodging group headings.
- **Body** (400, 1.05rem, 1.55, ink): paragraphs, capped at `--measure` (66ch). Board body copy (`.board-text`) runs at 1.2rem; the life-page prose at 1.12rem; facts, route steps, and fields at 1.1rem.
- **Label** (Rubik 700, 1.05rem, no tracking, no uppercase): fact keys, field labels, plaque text (1.1rem, 1.2rem on the hero), chips (1rem), nav links (1.1rem stacked, 1rem inline), legends (1.15rem), FAQ questions (1.15rem).
- **Fine** (400, 1rem, ink 2): `small` and `.fine`. This is the floor; nothing is set below 1rem.
- **Mono** (1.1rem): the GPS coordinates code block only.

### Named Rules
**The 18px Floor Rule.** `html { font-size: 18px }` and no rule sets text below 1rem. The floor is a fact of the stylesheet, not a target.

**The No Eyebrow Rule.** Labels are never uppercased or letter-spaced. Section context comes from the plank heading and the lede paragraph beneath it, never from a small tracked caps line above.

**The Balanced Heading Rule.** All headings use `text-wrap: balance` and negative tracking (-0.01em); the display date tightens to -0.03em.

## Layout

A single centered column on notice paper. `.wrap` is `min(100% - 2rem, 68rem)` (a 1rem gutter each side on phones); `.narrow` is `min(100% - 2rem, 46rem)` for the thank-you and 404 boards. Reading content caps itself below the container: prose at 66ch, ruled lists and notices at 52rem, the lodging list at 56rem, forms at 40rem, the hero place line at 40rem.

Vertical rhythm is in rem steps: 0.35 between a label and its field or hint, 0.5 between small siblings, 0.75 to 1 inside components, 1.25 between form fields and grid cells, 1.5 for group margins, 2 for `.mt-2`, and 2.5rem of section padding (4rem at 900px and up). Sections are separated by a 2px `--rule` line. The footer sits 3rem below the last section and carries 6.5rem of bottom padding on phones so the fixed action bar never covers its links (2.5rem at 900px and up).

Breakpoints, all width-based:
- **480px and below**: the header compacts (wordmark 1.15rem, icon 1.7rem, header 3.9rem tall, tighter menu toggle).
- **640px and up**: fact rows go from stacked to a two-column grid with an 11rem key column.
- **720px and up**: lodging rows go two-column, name/town/address stacked at left and the call plaques pinned right.
- **900px and up** (desktop): the menu toggle disappears and nav runs inline in the header; the board's padding opens to 3.25rem 3.5rem 2.75rem; the ridge tucks 5.5rem under the board (3rem on phones); section padding grows to 4rem; the home summaries and the life page go two-column (1.4fr 1fr and 22rem 1fr); the fixed action bar is hidden.

The header is sticky (`top: 0`, z-index 50) and 4.25rem tall; `scroll-padding-top: 5rem` keeps anchors clear of it. On phones the home page carries a fixed two-plaque action bar (Directions, Add to calendar) that slides up from the bottom once the hero board has scrolled off, and respects `env(safe-area-inset-bottom)`.

## Elevation & Depth

Depth is material, not atmospheric. The board reads as a physical routed sign through two inset lines (3px `--board-deep`, then 5px `--board-edge`) and a painted cream inner border set 14px in; it is the one surface allowed a real drop shadow (`--shadow-2`). Planks use the same inset-frame treatment at 2px and 4px with no drop shadow, so they sit on the paper. Notices, rows, chips, and fields are flat with hairline borders. Plaques are the only element that lifts: a 3px solid base in `--board-deep` (or `--pine-deep`) below them, a short soft shadow, and a 2px inset edge; pressing them drops the base to 1px and moves the plaque down 2px.

### Shadow Vocabulary
- **Sheet lift** (`--shadow-1`: `0 1px 2px rgba(31,26,20,0.16), 0 8px 20px -10px rgba(31,26,20,0.4)`): the last-mile map figure. A thin sheet resting on the paper.
- **Board lift** (`--shadow-2`: `0 2px 4px rgba(31,26,20,0.2), 0 18px 40px -16px rgba(31,26,20,0.5)`): the routed board, combined with its two inset frame lines.
- **Plaque base** (`inset 0 0 0 2px rgba(74,58,42,0.35), 0 3px 0 var(--board-deep), 0 8px 16px -8px rgba(0,0,0,0.5)`): every plaque at rest. Pine plaques swap the base to `--pine-deep`. Pressed: `0 1px 0` base and `0 4px 8px -6px` shadow.
- **Plank frame** (`inset 0 0 0 2px var(--board-deep), inset 0 0 0 4px var(--board-edge)`): plank headings; the pine plank uses `--pine-deep` and #38704a.
- **Kiosk edge** (header `0 2px 0 var(--board-deep), 0 10px 24px -14px rgba(0,0,0,0.6)`; action bar mirrored upward; footer `inset 0 3px 0 var(--board-deep)`): the board chrome meets the paper with a hard 2 to 3px dark edge and a short soft cast.
- **Route step** (`inset 0 0 0 2px var(--pine-deep), 0 2px 0 var(--pine-deep)`): the numbered pine badge on directions steps, a miniature plaque.

### Named Rules
**The Plaque Lift Rule.** Plaques are the only interactive element that lifts and presses. Chips scale down (0.96) on press but never cast a shadow; nav links and choice rows change fill only.

**The Planks Sit Flush Rule.** A plank heading is framed by inset lines and never carries a drop shadow. If a heading appears to float, it is wrong.

## Shapes

Router-cut corners throughout, tightening as elements get smaller: the board and map at 10px, plaques at 9px, sheets, fields, nav links, and the menu toggle at 8px, planks at 7px, the board's inner painted border, focus rings, and the coordinates block at 6px. Chips are full pills (999px) and route-step badges are circles. Borders are honest 2px lines in the material's own color (board on fields, cream on the menu toggle and the board's inner frame, rule on choice rows, pine-tint edge on chips); hairlines are 1px `--rule`. Ruled lists open with a 2px `--board` top rule and separate rows with 1px `--rule`. The portrait placeholder is the one dashed border (2px, #9fb59c) and marks a slot the family will fill, not a design element. Icons are 24-unit stroke SVGs at 2 to 2.4 stroke width with round caps, sized 1.3em to 1.35em inline and 2.2rem on the hero place pin. Links underline at 2px with 0.18em offset, thickening to 3px on hover.

## Components

### Plaques (buttons and button-links)
A routed plaque screwed to the board: Rubik 700, an inset edge, a solid dark base, a short shadow. The same class serves `<a>` and `<button>`.
- **Shape:** 9px corners, `min-height: 3.25rem` (58.5px), padding 0.7rem 1.3rem, 1.1rem text, 0.6rem gap to a 1.35em icon.
- **Cream (default):** cream fill, board-deep text. The neutral action (Add to calendar, phone numbers, Back to the start).
- **Blaze:** blaze fill, board-deep text. The one primary action in view: Directions on the board and action bar, Send to the family on forms, the first plaque on the 404.
- **Pine:** pine fill, cream text, pine-deep base. Section-summary links on Home (Directions and map, Places to stay).
- **Hover:** fill lightens (#fff6dd, #d9873b, #38704a); text color does not change. **Active:** `translateY(2px) scale(0.985)` with the base dropped to 1px, 0.14s on `--ease`. **Focus:** 3px blaze ring at 3px offset with a paper halo; on board surfaces the ring turns cream with a board halo.
- **Compact:** inside lodging rows and the action bar, plaques drop to `min-height: 2.9rem` (52px), 1rem text, 0.5rem 1rem padding. The hero plaques go the other way: 1.2rem text, 3.6rem tall.
- **Rows:** `.plaque-row` wraps with a 0.8rem gap and lets each plaque grow from 14rem, so two plaques fill a phone in one column and share a row on desktop. `.plaque--wide` spans full width.
- **Copy state:** a plaque with `data-copy` swaps its `.label` to "Copied" for 2.2s and takes `.copied` (pine-deep, bold).
- **Sending state:** the submit plaque disables and reads "Sending…" after a valid submit.

### Chips (lodging area filters)
- **Style:** pine-tint fill, pine-deep text, 2px pine-tint-edge border, full pill, Rubik 700 at 1rem, `min-height: 2.9rem`, padding 0.45rem 1rem, 0.5rem gap in a wrapping row.
- **State:** `aria-pressed="true"` fills pine with cream text and a pine-deep border; hover deepens the tint (#d1dfcd); press scales to 0.96. Exactly one chip is pressed at a time and a visually hidden live region announces the filter.

### The Board
The routed sign. Board fill, grain, a left-to-right light-to-shadow gradient, 10px corners, the two inset frame lines plus `--shadow-2`, and a cream 2px painted border inset 14px with 6px corners at 0.85 opacity. Padding 1.8rem 1.7rem on phones, 3.25rem 3.5rem 2.75rem at 900px and up. All text inside is cream; links are cream and turn white on hover; plaques inside keep their own colors. On Home it holds the h1, the date block, the place grid (pin icon and name over a 2px translucent cream top rule), and a plaque row. On the thank-you and 404 pages it holds `.board-title`, `.board-text`, and a plaque row inside `.narrow`.

### Plank headings
A short board with the section title routed into it: inline-block, board fill and grain, cream Rubik 700 text with the routed text shadow, 7px corners, inset frame lines, padding 0.55rem 1.1rem 0.6rem, 1rem below. Wrapped inside the h2 or page-title h1 so the heading keeps its semantics. `.plank--pine` swaps to pine for wayfinding sections (Getting there, Where to stay, The last mile).

### Notices
A sheet pinned under the plexiglass: 8px corners, 1px border, padding 1.25rem 1.35rem, max 52rem, h3 with 0.5rem below.
- **Plain:** paper-sheet fill, rule border. General asides.
- **Blaze:** blaze-tint fill, #e2bf93 border. The thing you must not miss (GPS gets confused, Book early).
- **Pine:** pine-tint fill, pine-tint-edge border. Calm, helpful (Closest to the forest, Photographs and stories).
- Notices may carry a plaque row (0.9rem above) and tap-to-call links.

### Facts rows
The day's facts as a ruled list: a 2px board top rule, rows padded 0.95rem 0.25rem with 1px rule dividers, max 52rem. Each row is a key (Rubik 700, pine deep, 1.05rem) and a value (1.1rem) with an optional `small` line beneath at 1rem in ink 2. Stacked on phones; at 640px and up a two-column grid with an 11rem key column and 1.05rem 0.5rem padding.

### Route list
Numbered driving steps: a CSS counter drawn as a 2.4rem pine circle (cream Rubik 800 at 1.15rem, inset and base in pine deep) hung 3.4rem into the left padding; rows padded 0.9rem with rule dividers, text at 1.1rem, the step's key phrase in pine-deep bold. The last-mile map beneath it is an inline SVG with a 10px radius, `--shadow-1`, and a #f2ecdc ground; its route path draws itself over 2.4s when it scrolls into view.

### Stay list
Lodging as ruled rows (2px board top rule, 1px rule dividers, padding 1rem 0.25rem, max 56rem). Each row has a name (Rubik 700, 1.2rem, ink; if linked the link inherits ink and has a 2.6rem tap height), a town line and an address in ink 2, and a `.call` group of compact plaques. Rows are grouped under an h3 with a distance ribbon (car icon plus "5 to 15 minutes" in blaze-text Rubik 700 at 1rem); groups hide with the `hidden` attribute when filtered out.

### Fields
- **Style:** paper-field fill, 2px board border, 8px corners, 1.1rem text in ink, `min-height: 3.25rem`, padding 0.7rem 0.9rem, blaze caret; textareas start at 9rem and resize vertically. Labels are Rubik 700 at 1.05rem with 0.35rem below; hints are ink 2 at 1rem between label and field; legends are Rubik 700 at 1.15rem in pine deep.
- **Focus:** border and a 3px outline both turn blaze, 2px offset, 0.15s.
- **Invalid:** `.field.invalid` turns the border blaze-deep and the fill #fff5ea, shows the `.error` line (blaze-text, bold) and sets `aria-invalid`; the state clears as soon as the field has a value. Checks run only on submit and focus the first bad field.
- **Choices:** radio and checkbox rows are 3rem-tall cards (2px rule border, paper-field fill, 8px corners, 1.4rem native controls with pine accent); a checked row turns pine-tint with a pine border via `:has()`.
- **Honeypot:** `.honey` moves the spam field off-screen.

### FAQ details
Native `<details>` in a ruled list (2px board top rule): each summary is a 3.5rem row of Rubik 700 at 1.15rem in pine deep with a blaze-deep plus icon (1.6rem) at the right that rotates 45° to a cross when open (0.3s); hover underlines the question at 3px. Answers pad 1.1rem below and fade in over 0.35s. The first question ships open.

### Header and navigation
A sticky board strip: board fill and grain, cream text, a 2px board-deep bottom edge and a soft cast, 4.25rem tall. The wordmark is a 2rem sign-arrow icon plus "Celebrate Mark" in Rubik 800 at 1.35rem. On phones a `Menu` toggle (2px cream border, translucent dark fill, 2.9rem tall, hamburger swapping to a cross via `aria-expanded`) opens a stacked list of 3rem-tall links that animates in over 0.3s; Escape closes it and returns focus. At 900px and up the list runs inline at 1rem. Links are Rubik 600 cream with 8px corners; hover darkens the fill (`rgba(0,0,0,0.25)`) and whitens the text; `aria-current="page"` inverts to a cream plaque with board-deep text. A skip link in blaze drops in from the top on focus.

### Footer
The bottom of the kiosk: board fill and grain, an inset 3px board-deep top edge, cream text, 2.25rem top padding. Carries the memorial line in routed Rubik 700 at 1.15rem, the when-and-where line with a tap-to-call park number, an inline nav of cream 600 links with 2.75rem tap height, and the domain in cream dim.

### Action bar (Home, phones only)
A fixed board strip at the bottom with two compact plaques in a 1fr 1fr grid (0.6rem gap, 0.6rem 0.75rem padding plus the safe-area inset), a 2px board-deep top edge and an upward cast. Hidden by `translateY(110%)` and slides in over 0.45s once the hero leaves the viewport; hidden entirely at 900px and up.

### Ridge
The single ground picture: a painted October ridge raster (`ridge.jpg`, 1600×560, with a 2× source) full-bleed under the hero board, `object-fit: cover` anchored bottom, height `clamp(190px, 44vw, 420px)`, overlapping the board by 3rem (5.5rem at 900px and up). An SVG overlay adds a blurred white mist ellipse and six blaze-colored leaves that drift down over 14 to 23s, only while the ridge is on screen and the tab is visible.

### Motion
One curve, `--ease: cubic-bezier(0.16, 1, 0.3, 1)`, for everything. Durations by role: 0.14s plaque and chip press, 0.15s field focus, 0.2s fills and the skip link, 0.3s menu and FAQ icon, 0.35s FAQ answer, 0.45s action bar, 0.7s scroll reveal (14px rise, once, with a 2.5s failsafe that shows everything), 0.9s route-in on the hero (letters wipe left to right, staggered 0.12s to 0.7s), 2.4s map draw, 14 to 23s linear leaf drift and a 26s mist sway. Every animation is gated on the `.js` class so the no-script page is static and complete. Under `prefers-reduced-motion: reduce` all travel is removed: smooth scroll off, routed letters and reveals shown at rest, leaves held at 0.9 opacity, the map path drawn, transitions on plaques, chips, fields, the action bar, and the FAQ icon set to none. State changes (open menu, pressed chip, open answer, shown bar) still happen; only the travel goes.

## Do's and Don'ts

### Do:
- **Do** keep the root at 18px and never set text below 1rem; `small` and `.fine` are the floor.
- **Do** give every tappable thing at least 44px: plaques 3.25rem, chips and compact plaques 2.9rem, nav links 3rem, FAQ summaries 3.5rem, footer links 2.75rem, lodging name links 2.6rem.
- **Do** put one routed board in a page's main content at most, and put the when-and-where facts on it.
- **Do** use blaze for exactly one primary plaque per view and pine for the secondary; every other plaque is cream.
- **Do** keep text on board surfaces cream, with the routed text shadow on Rubik headings.
- **Do** frame planks with inset lines only, and let plaques be the only element with a base and a cast shadow.
- **Do** head every paper section with a plank (or a pine plank for wayfinding) followed by a plain lede in ink 2.
- **Do** lay facts out as ruled key/value rows, and state a fact as unknown ("the family will update this") when it is unknown.
- **Do** use inline stroke SVG icons (24-unit, 2 to 2.4 stroke, round caps) beside plaque text and in wayfinding; keep them `aria-hidden`.
- **Do** gate every animation on `.js`, use `--ease` for all of it, and give each element one authored entrance.
- **Do** keep every state change legible under reduced motion; remove travel, not information.
- **Do** show a visible 3px blaze focus ring on paper and a cream ring on board surfaces.

### Don't:
- **Don't** use red anywhere; invalid fields and errors are blaze deep and blaze text.
- **Don't** add eyebrows, kickers, or uppercase tracked labels above headings.
- **Don't** use exclamation points, countdowns, urgency language, or alarm colors.
- **Don't** put white text on the board or ink text on the board; it is cream or nothing.
- **Don't** give planks, notices, chips, rows, or fields a drop shadow.
- **Don't** introduce a second dark field in main content beside the board; reading happens on paper.
- **Don't** use icon fonts, emoji, or raster icons; the only rasters are the ridge, the share card, and the touch icon.
- **Don't** photograph the wood; the grain is the authored `grain.svg` wash.
- **Don't** fabricate a photograph, quote, or fact; the portrait slot stays a dashed placeholder until the family supplies an image.
- **Don't** set body prose wider than 66ch or ruled lists wider than 52rem (56rem for lodging).
- **Don't** animate anything on a loop except the ridge leaves and mist, and stop those when the ridge is off screen.
