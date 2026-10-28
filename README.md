# Healing Souls Wellness Center — hybrid microsite

This is a separate, fast, SEO-focused site meant to sit **alongside** your Wix site
(healingsoulsmt.com), not replace it. It targets high-intent local searches
("salt room Akron," "couples massage Akron," "massage Portage Lakes") with
dedicated pages your Wix site doesn't have, and links back to your main site
and booking everywhere. It is plain HTML/CSS/JS, ready for GitHub Pages.

## 1. Before you go live — three things to fix

1. **Pick your subdomain and find/replace the placeholder domain.**
   Every page uses `https://visit.healingsoulsmt.com/` in the canonical tags,
   Open Graph tags, and the JSON-LD schema on the homepage. If you want a
   different subdomain (e.g. `book.healingsoulsmt.com`), do a find-and-replace
   for `visit.healingsoulsmt.com` across all six `.html` files and `sitemap.xml`
   before publishing.

2. **Add your studio hours.** I didn't invent hours since getting them wrong
   hurts local SEO more than leaving them blank. Open `contact.html`, find the
   `<!-- UPDATE: add exact studio hours -->` comment, and fill in the real hours.

3. **Swap the placeholder review quote** on `index.html` (search for
   "placeholder — swap in a real quote") for a real one from Google.

## 2. Add your photos

Every photo spot is a dashed-border box that automatically shows a "Add photo
here" label with the exact filename until you drop the real image in. Once you
add a correctly-named file to the `/images` folder, it displays automatically —
no code changes needed.

| Filename | Suggested size | What it's for |
|---|---|---|
| `hero-treatment-room.jpg` | 1200×750 | Homepage hero |
| `couples-room.jpg` | 1000×625 | Homepage couples room teaser |
| `salt-room.jpg` | 1000×625 | Homepage salt room teaser |
| `ken-portrait.jpg` | 800×800 | Homepage "our approach" |
| `og-cover.jpg` | 1200×630 | Social share preview image (used in meta tags) |
| `facial-treatment.jpg` | 1000×625 | Services page |
| `salt-room-wide.jpg` | 1200×750 | Salt room page hero |
| `salt-room-detail.jpg` | 800×800 | Salt room page detail shot |
| `couples-room-wide.jpg` | 1200×750 | Couples room page hero |
| `couples-room-detail.jpg` | 800×800 | Couples room page detail shot |
| `team-ken.jpg` | 700×700 | Team page |
| `team-juliann.jpg` | 700×700 | Team page |
| `team-amanda.jpg` | 700×700 | Team page |
| `team-alex.jpg` | 700×700 | Team page |
| `studio-exterior.jpg` | 1000×625 | Contact page |
| `body-wrap.jpg` | 1000×625 | Services page, body wrap section |
| `sauna.jpg` | 1000×625 | Salt and sauna page, sauna section |

## 3. Publish on GitHub Pages

1. Create a new GitHub repo (e.g. `healingsoulsenergy/healing-souls-site`,
   following the pattern of your other repos).
2. Upload every file in this folder (`index.html`, `services.html`,
   `salt-sauna.html`, `couples-room.html`, `team.html`, `contact.html`,
   `styles.css`, `script.js`, `robots.txt`, `sitemap.xml`, and `/images`)
   to the repo root.
3. In the repo, go to **Settings → Pages**, set the source branch to `main`
   and folder to `/ (root)`.
4. It'll be live at `https://yourusername.github.io/healing-souls-site/`
   within a few minutes.

## 4. Point your subdomain at it (makes it a real hybrid)

1. In your DNS provider (wherever healingsoulsmt.com's DNS is managed),
   add a `CNAME` record: `visit` (or whatever subdomain you chose) pointing
   to `yourusername.github.io`.
2. In the GitHub repo, go to **Settings → Pages → Custom domain** and enter
   `visit.healingsoulsmt.com`. GitHub will create a `CNAME` file in your repo
   automatically. Check "Enforce HTTPS" once it's available.
3. DNS can take a few hours to propagate.

## 5. After launch — the parts that actually move rankings

A well-built site is maybe a third of local SEO. To actually compete for
"#1 in Akron," these matter as much or more:

- **Google Business Profile**: make sure your GBP is fully filled out, matches
  your NAP (name/address/phone) exactly, and gets a handful of new reviews
  each month. This is usually the single biggest lever for local ranking.
- **Submit both sitemaps** to Google Search Console: this one
  (`visit.healingsoulsmt.com/sitemap.xml`) and your Wix one.
- **Backlinks**: get listed on Akron/Canton local directories, chamber of
  commerce, ABMP directory, and link from any partner businesses.
- **Fresh content**: a couple of blog posts a month (you've already written
  a few on your Wix site) tends to outperform a static site that never
  changes.

Happy to help with any of these next, or generate the Google Business Profile
copy and a Search Console submission checklist.
