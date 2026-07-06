# 1 Woodland Drive Website

Static property website for 1 Woodland Drive, Augusta, Kansas.

## Local project folder

`/Users/kirkk/Documents/1 Woodland Drive/1woodlanddrive_website`

## Deployment

This site is deployed with Cloudflare Pages from the GitHub repository `kirkk/1WoodlandDrive`.

Cloudflare Pages settings:

- Framework preset: None
- Build command: blank
- Build output directory: repository root
- Root directory: repository root

## Updating the site

1. Copy changed files into the local repo folder.
2. Run:

```bash
git status
git add .
git commit -m "Update property website"
git push
```

Cloudflare Pages will automatically deploy the updated site after the push.

## Important configuration

Most site-wide property details are in:

`assets/js/property.js`

Update that file to change contact email, status, site URL, property details, or gallery images.

## Photos

Current photo folders:

- `assets/images/hero`
- `assets/images/exterior`
- `assets/images/interior`
- `assets/images/shop`

When professional photos are ready, add them to the appropriate folder and update `assets/js/property.js`.
