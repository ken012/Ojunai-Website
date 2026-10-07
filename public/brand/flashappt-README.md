# FlashAppt brand assets

Everything here is generated from one vector master, so the mark on the website,
in the app header, on a browser tab and in an email is the same drawing.

## Files

| File | Use |
| --- | --- |
| `flashappt-mark.svg` | **Vector master.** Scale this rather than enlarging a PNG. |
| `flashappt-mark-32.png` | Favicon |
| `flashappt-mark-64.png` | Small UI |
| `flashappt-mark-180.png` | Apple touch icon |
| `flashappt-mark-192.png` / `-512.png` | Web app manifest icons |
| `flashappt-mark-1024.png` | App stores, print, anything large |
| `flashappt-lockup.svg` / `.png` | Mark + wordmark, for light backgrounds |
| `flashappt-lockup-dark.svg` / `.png` | Mark + wordmark, for dark backgrounds |

All PNGs have transparent backgrounds.

## Colour

| Role | Value |
| --- | --- |
| Gradient start | `#6366f1` |
| Gradient end | `#6d28d9` |
| Bolt | `#fde047` |
| Bolt outline | `#18181b` |
| Calendar / knockout | `#ffffff` |
| Wordmark on light | `#18181b` |
| Wordmark on dark | `#ffffff` |

The accent used across the product is `#4f46e5`; the mark's gradient sits either
side of it.

## Wordmark

Set in the system UI stack — San Francisco on Apple devices, Segoe UI on
Windows, Roboto on Android — bold, with `-1` letter-spacing at 32px. The SVG
lockups keep the wordmark as live text, so it renders in whatever the viewer
has. If the team standardises on a licensed typeface, reset the wordmark in that
face and convert it to outlines before shipping, so it stops depending on the
reader's system.

## Using it

- Keep clear space around the mark of at least a quarter of its width.
- Do not recolour the gradient, rotate the mark, or separate the bolt from the
  calendar; they read as one object.
- Below about 24px, use the mark alone rather than the lockup — the wordmark
  stops being legible before the mark does.
- On a dark background use the dark lockup rather than inverting the light one,
  which would flip the bolt's outline too.

## Where these are already used

- `public/favicon.svg` — browser tab, same drawing
- `public/email-mark.png` — letterhead in transactional email, served from
  `https://flashappt.com/email-mark.png`
- `src/components/BrandMark.tsx` — the header mark, drawn in CSS from the same
  shapes rather than loading an image

If the mark changes, regenerate these together so they cannot drift apart.
