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

## Version 1.1 updates

- Corrected gallery labels:
  - Twilight front elevation -> Street View Exterior
  - Detached shop and driveway -> Twilight Front Elevation
  - Street view exterior -> Detached Garage/Shop and Attached Garage
- Replaced combined home/shop exterior image with the updated evening photo.
- Updated property hero and social preview image to use the updated combined exterior photo.
