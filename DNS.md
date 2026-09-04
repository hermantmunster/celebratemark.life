# Pointing celebratemark.life at this site (GoDaddy)

The site is served by GitHub Pages from https://github.com/hermantmunster/celebratemark.life.
GitHub already knows the custom domain (the `CNAME` file in this repo says `celebratemark.life`).
The last step is telling GoDaddy where to send visitors.

## What to enter in GoDaddy

Sign in at godaddy.com → My Products → next to **celebratemark.life** choose **DNS** (Manage DNS).

**1. Delete the parking records.** Today the domain has two `A` records pointing at GoDaddy's
parking service (76.223.105.230 and 13.248.243.5). Delete both. Also delete any `A` or `AAAA`
record whose name is `@`, and any GoDaddy "Forwarding" set up for the domain.

**2. Add these four `A` records** (one at a time; Name is `@`; TTL can stay at the default):

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**3. Optional, for IPv6 (recommended):** add these four `AAAA` records, Name `@`:

| Type | Name | Value |
|---|---|---|
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |

**4. Fix the `www` record.** There is an existing `CNAME` named `www` pointing at
`celebratemark.life`. Edit it so it points at:

| Type | Name | Value |
|---|---|---|
| CNAME | www | hermantmunster.github.io |

Leave the `NS` records and any `SOA` record alone. Everything else under "DNS Records" can go
unless you added it for email.

## Then

- DNS usually updates within 10 to 60 minutes; GoDaddy can take up to 48 hours in rare cases.
- Check with: https://dnschecker.org/#A/celebratemark.life (should show the four 185.199.x.153 addresses).
- Open https://github.com/hermantmunster/celebratemark.life/settings/pages. Under **Custom domain**
  it will say "DNS check successful" once GoDaddy has updated. GitHub then issues a free HTTPS
  certificate automatically; that takes from a few minutes to about an hour.
- When the certificate is ready, tick **Enforce HTTPS** on that same settings page (the box is
  greyed out until the certificate exists).
- Visit https://celebratemark.life. Done.

## Optional: protect the domain

On https://github.com/settings/pages, "Add a domain" lets you verify celebratemark.life with a
TXT record so nobody else can claim it on GitHub Pages. GitHub shows the exact TXT name and
value to add in GoDaddy when you click it.
