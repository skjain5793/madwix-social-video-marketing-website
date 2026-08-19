# GrowVision Media — Video Marketing Agency Website

A single-page, premium, responsive business website for a fictional video marketing agency, **GrowVision Media**. Built as a pure static site — no build tools, no frameworks, no compilation step required.

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- [Bootstrap 5.3](https://getbootstrap.com/) — layout grid, navbar, accordion, carousel components (via CDN)
- [Bootstrap Icons](https://icons.getbootstrap.com/) — icon set (via CDN)
- [AOS](https://michalsnik.github.io/aos/) — scroll-reveal animations (via CDN)
- [GLightbox](https://biati-digital.github.io/glightbox/) — fullscreen video modal/lightbox (via CDN)
- Google Fonts: Plus Jakarta Sans + Manrope

No npm, Node.js, React, Vue, TypeScript, Tailwind, or any bundler is used. All third-party libraries are loaded from CDN `<link>`/`<script>` tags directly in `index.html`.

## Project Structure

```
├── index.html          All page sections (nav, hero, services, portfolio, pricing, FAQ, contact, footer, etc.)
├── css/
│   └── style.css       All custom styling, design tokens, and responsive rules
├── js/
│   └── script.js       Smooth scroll, scrollspy, AOS/GLightbox init, animated counters
├── assets/
│   ├── images/         Local placeholder photos (thumbnails, about section, testimonial avatars, CTA background)
│   └── videos/         Local placeholder MP4 clips used in the hero and portfolio video lightbox
└── README.md
```

### Asset licensing

All images and videos are stored locally in `assets/` and are free to use with no license restrictions:

- **Images** (`assets/images/`) — Sourced via [Lorem Picsum](https://picsum.photos) (backed by Unsplash photos, usable under the [Unsplash License](https://unsplash.com/license)). Testimonial avatars are generated, text-based placeholder images from [UI Avatars](https://ui-avatars.com) (no real photos, no copyright concerns).
- **Videos** (`assets/videos/`) — Public domain / no-license-restriction sample clips from [samplelib.com](https://samplelib.com), [MDN's CC0 video collection](https://developer.mozilla.org/), and W3Schools' public demo assets.

Swap any file in `assets/images/` or `assets/videos/` with your own real content — the filenames referenced in `index.html` stay the same, so replacing a file is enough (no code changes needed) as long as you keep the same filename, or update the corresponding `src`/`href` in `index.html` if you rename it.

## Running Locally

Because it's a static site, you can just open `index.html` directly in a browser. For the best experience (and to avoid any browser restrictions on local file access), serve it with any static file server, for example:

```bash
# Python
python -m http.server 8080

# Node (if you have it available, purely as a dev convenience — not required to build the site)
npx serve .
```

Then visit `http://localhost:8080`.

## Customizing Content

Everything in this build is clearly-labeled sample/placeholder content meant to be swapped for real content:

- **Videos & thumbnails** — All portfolio and hero videos live in `assets/videos/` with matching thumbnails in `assets/images/`. Replace the file in place (keeping the same filename) or update the `href` (video) and `img src` (thumbnail) attributes on each `.glightbox` link inside the **Hero** and **Our Work** (`#work`) sections.
- **Stats** (`#growth`) — Marked with a visible "Example figure" tag and a disclaimer note; update `data-count` attributes and labels with real numbers when available.
- **Pricing** (`#pricing`) — Marked with a "Sample pricing" tag; update package names, features, and prices freely.
- **Testimonials** (`#testimonials`) — Marked with a "Sample testimonial" tag; swap in real client quotes, names, and photos in `assets/images/`.
- **Contact details** — The phone number (`tel:+919876543210`) and email (`mailto:hello@growvisionmedia.com`) are clickable links in both the Contact section and Footer — update the number/email in both the visible text and the `tel:`/`mailto:` href attributes.
- **Social links** — Update the `href="#"` placeholders on the social icons in the Contact section and Footer.

## Sections Included

Home · Services · Turn Views Into Attention (growth stats) · How It Works · Our Work (portfolio + video lightbox) · Social Media · Why Choose Us · About · Testimonials · Pricing · FAQ · Contact (click-to-call/email) · Final CTA banner · Footer.

All sections live on one page (`index.html`) with anchor-based smooth scrolling and a scrollspy-highlighted sticky navbar.
