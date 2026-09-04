# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: plain static HTML/CSS/JS, no build step, hosted on GitHub Pages at the
custom domain celebratemark.life. Chosen because the family must be able to edit a
single text file to change facts, and because it will be maintained by no one after
October 2026.

## Users

Family, friends, neighbors, clients, and colleagues of Mark Charles Gustafson of West
Hartford, Connecticut. Many are in their 60s to 80s, arriving from a text message or an
email on a phone, often grieving, and not confident with software. Some will drive in
from out of state and need a bed for the weekend. Their job: learn when and where the
celebration is, get there on the day, book a place to stay, tell the family they are
coming, and share a memory.

Secondary: the family (Martha, Alex and Kristyn, Molly and Sam, Katie), who will edit the
text. They are not developers.

## Product Purpose

The single source of truth for the Celebration of Life for Mark Charles Gustafson
(died August 28, 2026, age 66). It exists so that nobody has to phone the family to ask
"when and where," and so that everyone who loved Mark can find their way to People's
Forest on Saturday, October 10, 2026 and share what he meant to them.

Success: a 78-year-old on an iPhone knows the date, time, and place within five seconds
of the page opening, and can get driving directions with one tap.

## Positioning

A memorial event site, not a funeral-home obituary template. It is one specific
Saturday in one specific forest on the Farmington River, and everything on it serves
getting people there and holding them well once they arrive.

## Operating Context

**The event (confirmed by the family):**
- Saturday, October 10, 2026, beginning at 11:00 AM.
- Peoples State Forest picnic shelter, East River Road, Pleasant Valley section of
  Barkhamsted, CT 06063. GPS 41.92333, -72.99833. Park phone (860) 379-2469.
- Directions from Route 44: take Route 318 in Barkhamsted, cross the steel bridge over
  the Farmington River, immediate left onto East River Road, recreation area about one
  mile up on the left.
- Shelter: covered 30 x 60 ft pavilion, seats about 100, 10 picnic tables, a large
  fireplace (not for cooking). Flush restrooms and drinking water taps on site;
  restrooms about 150 ft from the shelter, parking about 150 ft.
- Park rules (from CT DEEP / ReserveAmerica): shelter use until a half hour before
  sunset; no amplified music; no bounce houses; no generators; no personal or caterer
  vehicles up to the pavilion (handicap vehicles by advance arrangement with the park);
  pets on leash. Parking: free for Connecticut-plated cars; out-of-state plates $15
  on weekends. Park open 8:00 AM to sunset.
- Season: early October is peak foliage in the Litchfield Hills; mornings in the river
  valley can be in the 40s°F, afternoons 55 to 65°F. Cell coverage is unreliable in the
  valley.

**RSVP and memories:** a simple form that emails two family members (Alex and Molly). Their
addresses are stored encoded in share.html and never shown on the site. No accounts, no logins.

**Lodging corridor:** West Hartford to Riverton along Route 44 / Route 318 / Route 20,
plus Bradley International Airport (BDL) for fliers. Verified properties with address
and phone are recorded in the site content file.

## Capabilities and Constraints

- Static pages: Home, Getting there, Where to stay, His life, Share a memory / RSVP,
  Questions, plus a thank-you page and a 404.
- Every fact that could change lives in one small config/content file the family can
  edit without touching layout.
- No photographs of Mark exist in this workspace. The site ships with a clearly marked
  place for them and instructions; nothing is fabricated to stand in.
- The family's obituary (Hartford Courant, September 4, 2026) is carried verbatim on
  the "Mark" page between the OBITUARY BEGINS / ENDS comments.
- In lieu of flowers the obituary asks for donations to Big Brothers Big Sisters of
  Connecticut; this is stated once on Home and on the Questions page.
- Undecided: whether food will be served and whether there is a program. The Questions
  page states these plainly as "the family will update this" rather than inventing
  answers.

## Brand Commitments

- Name: "Celebrate Mark" / celebratemark.life.
- Voice: plain, warm, never cheerful. No exclamation points. Sixth-grade reading level.
  Refers to him as Mark. Never speaks as Mark, never invents quotes, never says "Mark
  would have wanted."
- Grief-aware: no urgency, no countdown, no alarm red.
- The brief pins: extremely modern, interactive, with lots of animation but subtle
  UI/UX, very clean and clear, intuitive and simple for people of all ages and
  especially older people, mobile-first.

## Evidence on Hand

- Family and business facts verified from the family's own project records: Mark
  founded and ran Sonipoint Inc., a commercial sound-masking integrator based in West
  Hartford, for many years, personally designing, installing, and tuning systems in
  offices across the Northeast and beyond. Wife Martha (a teacher). Son Alex (Mark
  Alexander) and his wife Kristyn. Daughters Molly and Katie.
- Obituary facts (Hartford Courant, published September 4, 2026, fetched the same day):
  born November 14, 1959 in Ashtabula, Ohio, to Laurena (Fraser) Kihlstrom and Charles
  "Chuck" Gustafson; second of four children (Craig, Brian, Holly Bensen); B.S. in
  Communications, Ohio University, 1982, where he met Martha Wright Gustafson, his wife
  of 41 years. Children: Mark Alexander "Alex" (Dana Point, CA; wife Kristyn Roth
  Gustafson), Molly Gustafson Barstow (Boulder, CO; husband Samuel Barstow), Kathryn
  Jane "Katie" (Portland, OR). Granddaughters Avery and Blair Gustafson, Isla and
  Laurena Barstow. Sold and installed sound masking across New England and the
  Tri-State area. Loved dogs, fly fishing, walks in the woods, golf, travel, movies, and
  hosting around his grill. A dedicated Big Brother. The obituary gives the celebration
  date only (October 10) and points to this site; the time and place remain the
  family's confirmation above.
- Venue facts verified from ctparks.com, portal.ct.gov (DEEP), and ReserveAmerica on
  2026-09-03.
- Lodging and dining facts verified from property sites and directories on 2026-09-03;
  prices are deliberately not stated.
- Absent, must not be fabricated: photographs, quotes from Mark, program details,
  catering.

## Product Principles

1. When and where first. Everything else is second.
2. One tap to the thing you came for: directions, calendar, a phone number, a bed.
3. Big type, few words, high contrast, generous targets. Older hands and eyes are the
   design target.
4. Nothing on the page is a guess. Unknowns are stated as unknowns.
5. The family can change any fact in one file.

## Accessibility & Inclusion

WCAG 2.2 AA verified, not asserted. Body text no smaller than 18px, touch targets at
least 44px, visible focus, full keyboard operation, reduced-motion path that keeps state
changes legible, works with iOS text-size increases.
