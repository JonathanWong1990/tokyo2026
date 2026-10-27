# Dad's trip page

A phone-first, read-only page for the family (Traditional Chinese by default, with an English toggle). It will be hosted on GitHub Pages.

- `trip-data.js` holds **all the content**. `calendar` is the day-by-day plan (shown in the 每日 tab, one page per date at `#/day/YYYY-MM-DD`); `ideas` is now empty: the old options tab (選擇) was removed on 27 Oct 2026 once the plan settled. Each day can also have `xmas`, the Christmas lights and markets for that day, shown as a separate section under the day plan so it doesn't mix with the itinerary or restaurants. Update this file when the plan changes. The format is described at the top of the file.
- `place-info.js` holds each place's description: `about`, `todo` (what to do) and `tips`, keyed by the place id from `trip-data.js`.
- `place-img.js` plus `img/` hold the photos. Use free-licensed Wikimedia Commons images only, resized to about 960px, and fill in the credit fields (the page is public).
- `index.html` holds the layout and design: a small app with a bottom tab bar and a page per place (`#/place/<id>`). It shouldn't need changes when the content changes.
- `_drafts/` holds design explorations. Don't publish it.

Planning research lives in the markdown files in the parent folder. That's the source of truth, and `trip-data.js` is the family-friendly version of it. Each round:

1. Increase `version` and set `updated`. Do NOT add a `changes` note: the page presents the current itinerary only. Never write what was removed, moved or changed (no 已移除 / 改為 / 原先 / "previously" / "now"); just describe the plan as it stands.
   Also bump the `?v=` number on the three `<script src>` tags in `index.html` to the same version, so browsers fetch the new data instead of a cached copy.
2. Use first names: John, Vanjai, Ben, Christine ("我們" for the planners is fine). All Chinese must be formal written Chinese (書面語) with Hong Kong vocabulary, not Cantonese. Don't put booking references, passport details or phone numbers in it while the page is public.
3. Keep `status` as 計劃中 until the trip is final.

## Photos

Every place shown on the page should have a photo (decided by John, 27 Oct 2026). Order of preference:
1. A free-licensed Wikimedia Commons photo.
2. The venue's own photo from its official site or booking page (usually its `og:image`). Credit it with `by` = the owner, `lic: { zh: "© 官方相片", en: "© official photo" }` and `page` = the page it came from. Prefer official sources over user-posted photos.
3. A Commons photo of the surrounding area, with a `note` saying it shows the area rather than the venue.

Download every photo into `img/` at about 960px wide; never hotlink. Don't use photos where private individuals, especially children, are the main subject. If a photo shows a building's outside, a similar dish or a past year's event rather than the venue itself, add a `note: {zh, en}` caption.
