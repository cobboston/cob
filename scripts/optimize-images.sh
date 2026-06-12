#!/bin/bash
# Resize oversized gallery photos in place and generate the social-share image.
# Uses macOS's built-in `sips` — no installs required.
#
#   bash scripts/optimize-images.sh
#
# What it does:
#   1. Deletes stray .DS_Store files from public/
#   2. Re-encodes any gallery JPG larger than 1600px (max dimension) down to
#      1600px at quality 78 — the largest rendered slot on the site is ~450px,
#      so 1600px keeps full sharpness on 3x retina screens.
#   3. Creates public/og.jpg (1200x630) from the Boston gathering photo,
#      referenced by the og:image metadata in app/layout.tsx.
#
# Originals are modified IN PLACE. If you want to keep the camera originals,
# back them up somewhere outside the repo first.

set -euo pipefail
cd "$(dirname "$0")/.."

MAX=1600
QUALITY=78

echo "public/ before: $(du -sh public | cut -f1)"

find public -name '.DS_Store' -delete

find public/gallery -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) -print0 |
  while IFS= read -r -d '' f; do
    w=$(sips -g pixelWidth "$f" | awk '/pixelWidth/{print $2}')
    h=$(sips -g pixelHeight "$f" | awk '/pixelHeight/{print $2}')
    m=$(( w > h ? w : h ))
    if [ "$m" -gt "$MAX" ]; then
      before=$(du -h "$f" | cut -f1)
      sips -s format jpeg -s formatOptions "$QUALITY" -Z "$MAX" "$f" --out "$f" >/dev/null
      echo "resized  $f  ${w}x${h} (${before}) -> max ${MAX}px ($(du -h "$f" | cut -f1))"
    fi
  done

# Social share image (1200x630) from the Boston gathering photo.
sips -s format jpeg -s formatOptions 80 -Z 1200 public/gallery/boston/boston-1.jpg --out public/og.jpg >/dev/null
sips --cropToHeightWidth 630 1200 public/og.jpg >/dev/null
echo "created  public/og.jpg (1200x630)"

echo "public/ after: $(du -sh public | cut -f1)"
