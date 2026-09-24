# celebratemark.life

The website for the Celebration of Life for Mark Charles Gustafson.
Saturday, October 10, 2026, 10 AM to 1 PM, the pavilion at Peoples State Forest, Barkhamsted, CT.

It is plain HTML, CSS, and a little JavaScript. There is nothing to install or build.
GitHub Pages serves it at https://celebratemark.life.

## How to change something

Open the page in any text editor, change the words, save, and push (or edit on github.com and press Commit).
The site updates within a minute or two.

| To change | Edit |
|---|---|
| The time or date | Search every `.html` file for `10 AM to 1 PM` and `October 10`. It appears in the hero on `index.html`, the footer of every page, `celebrate-mark.ics`, and the calendar links. |
| The obituary | `mark.html`, between the lines `OBITUARY BEGINS` and `OBITUARY ENDS`. Use one `<p>…</p>` per paragraph. |
| The photo of Mark | Save the new picture over `assets/mark.jpg`, keeping that exact name. Portrait shape works best; it is shown in a 4:5 frame. |
| Where RSVPs, memories, and photos go | `rsvp.html` and the two forms at the bottom of `mark.html`. `data-mail` is the main recipient (Molly) and `data-cc` gets a copy (Alex), both base64-encoded. The main recipient must be activated with FormSubmit or nothing is delivered. To change one, encode the new address (on a Mac: `echo -n new@example.com \| base64`) and paste it into all three forms. |
| Food, program, flowers, donations | `questions.html`, the answers that say "the family will update this". |
| Places to stay, restaurants, things to do | `travel.html`. Copy an existing `<li>…</li>` block and change the words. |

## The RSVP and memory forms

They are sent by [FormSubmit](https://formsubmit.co), a free service that emails form submissions.
The main recipient must click **Activate** in FormSubmit's one-time email, or every submission is held.
Molly's address is activated. Copies go to Alex without activation. The addresses are never shown on the site.
Uploads are limited to about 5 MB per send; the site shrinks photos first and asks for a link for longer videos.

## Files

- `index.html` – the sign: when and where, and the short version of everything
- `directions.html` – the last mile, a sketch map, routes from every direction, parking
- `travel.html` – where to stay, Mark's favorite restaurants, things to do, with kids
- `mark.html` – about Mark, family, the obituary, share a memory, photos and videos
- `rsvp.html` – RSVP form (`share.html` and `stay.html` redirect for old links)
- `questions.html` – common questions
- `thanks.html`, `404.html`
- `celebrate-mark.ics` – the calendar file behind "Add to calendar"
- `assets/` – styles, script, icons
- `CNAME` – the custom domain for GitHub Pages
