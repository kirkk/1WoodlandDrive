#!/usr/bin/env bash
# Optimize listing photos in public/assets/images.
# Usage: ./scripts/optimize-images.sh
# Resizes anything wider than 1920px and recompresses JPEGs (quality 80, metadata stripped).
# Safe to run repeatedly; requires ImageMagick (`brew install imagemagick`).
set -euo pipefail
cd "$(dirname "$0")/.."

shopt -s nullglob globstar
for f in public/assets/images/**/*.{jpg,jpeg,JPG,JPEG}; do
  before=$(wc -c < "$f")
  magick "$f" -auto-orient -resize '1920x1920>' -quality 80 -strip "$f.tmp"
  after=$(wc -c < "$f.tmp")
  if [ "$after" -lt "$before" ]; then
    mv "$f.tmp" "$f"
    echo "$(printf '%-70s' "$f") $((before/1024))KB -> $((after/1024))KB"
  else
    rm "$f.tmp"
    echo "$(printf '%-70s' "$f") already optimized ($((before/1024))KB)"
  fi
done
