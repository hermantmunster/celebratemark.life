# celebratemark.life

The website for the Celebration of Life for Mark Charles Gustafson.
Saturday, October 10, 2026 at 11:00 AM, Peoples State Forest picnic shelter, Barkhamsted, CT.

It is plain HTML, CSS, and a little JavaScript. There is nothing to install or build.
GitHub Pages serves it at https://celebratemark.life.

## How to change something

Open the page in any text editor, change the words, save, and push (or edit on github.com and press Commit).
The site updates within a minute or two.

| To change | Edit |
|---|---|
| The time or date | Search every `.html` file for `11:00` and `October 10`. It appears in the hero on `index.html`, the footer of every page, `celebrate-mark.ics`, and the calendar links. |
| The obituary | `mark.html`, between the lines `OBITUARY BEGINS` and `OBITUARY ENDS`. Use one `<p>…</p>` per paragraph. |
| A photo of Mark | Put `mark.jpg` in `assets/` and follow the comment in `mark.html` above the photo slot. |
| Where RSVPs and memories go | `share.html`: each form's `data-mail` (main recipient) and `data-cc` (copy) attributes hold the two family addresses base64-encoded so they are not readable in the page. To change one, encode the new address (on a Mac: `echo -n new@example.com \| base64`) and paste the result into both forms. |
| Food, program, flowers, donations | `questions.html`, the answers that say "the family will update this". |
| Places to stay | `stay.html`. Copy an existing `<li>…</li>` block and change the words. |

## The RSVP and memory forms

They are sent by [FormSubmit](https://formsubmit.co), a free service that emails form submissions.
The **first** message ever sent through the form triggers a one-time confirmation email from FormSubmit
to the main recipient. Click **Activate** in that email once. Every message after that arrives normally,
with a copy to the second recipient. The addresses are never shown on the site.

## Files

- `index.html` – the sign: when and where, and the short version of everything
- `directions.html` – the last mile, a sketch map, routes from every direction, parking
- `stay.html` – inns and hotels from Riverton to Bradley Airport
- `mark.html` – about Mark, family, the obituary
- `share.html` – RSVP and share-a-memory forms
- `questions.html` – common questions
- `thanks.html`, `404.html`
- `celebrate-mark.ics` – the calendar file behind "Add to calendar"
- `assets/` – styles, script, icons
- `CNAME` – the custom domain for GitHub Pages
