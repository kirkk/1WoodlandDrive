# 1 Woodland Drive Website

Astro-powered static property website for 1 Woodland Drive, Augusta, KS.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The built static site is output to `dist/`.

## Cloudflare Pages settings

Use these settings in Cloudflare Pages:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Production branch: `main`

## Updating property details

Edit:

```text
src/data/property.js
```

That file controls contact email, status, highlights, and the gallery image list.

## Updating images

Place photos in:

```text
public/assets/images/
```

Then update the gallery list in `src/data/property.js`.

## Swapping in professional photos

1. Drop the new photos into the appropriate `public/assets/images/<category>/` folders
   (exterior, living, bedrooms, bathrooms, shop, hero). Keep filenames simple and lowercase.
2. Run the optimizer so files are web-sized (requires ImageMagick: `brew install imagemagick`):

   ```bash
   ./scripts/optimize-images.sh
   ```

3. Update the `gallery` array in `src/data/property.js` — each entry needs `src`, `title`,
   `category`, and `alt`. Update `heroImage` there too if the main hero shot changes.
4. Page-specific hero images are set at the top of `src/pages/*.astro` in the
   `<section class="hero compact" ...>` line.
5. Build and check locally (`npm run dev`), then commit and push to `main` to deploy.

## Launch checklist (go-live)

- Change `status` in `src/data/property.js` from `Coming Soon` to `For Sale` (shows in footer, contact page, and homepage hero eyebrow).
- Confirm contact email/phone in `src/data/property.js`.
