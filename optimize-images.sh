#!/bin/bash
set -e

IMG_DIR="public/img"
DELETED_COUNT=0
DELETED_SIZE=0

echo "🖼️ IMAGE OPTIMIZATION SCRIPT"
echo "======================================"
echo ""

# Function to delete file and track size
delete_file() {
  local file=$1
  if [ -f "$file" ]; then
    local size=$(du -b "$file" | cut -f1)
    rm -f "$file"
    DELETED_COUNT=$((DELETED_COUNT + 1))
    DELETED_SIZE=$((DELETED_SIZE + size))
    echo "✓ DELETED: $file ($(numfmt --to=iec-i --suffix=B $size 2>/dev/null || echo ${size} bytes))"
  fi
}

echo "PHASE 1A: Remove duplicate JPG files (where WebP exists)"
echo "-------------------------------------------------------"

# Check for duplicate video-thumbnail files
if [ -f "$IMG_DIR/new/video-thumbnail.jpg" ] && [ -f "$IMG_DIR/new/video-thumbnail.webp" ]; then
  delete_file "$IMG_DIR/new/video-thumbnail.jpg"
fi

if [ -f "$IMG_DIR/new/video-thumbnail.jpeg" ] && [ -f "$IMG_DIR/new/video-thumbnail.webp" ]; then
  delete_file "$IMG_DIR/new/video-thumbnail.jpeg"
fi

echo ""
echo "PHASE 1B: Remove duplicate PNG files (where WebP exists)"
echo "-------------------------------------------------------"

# team-model-reinigung
if [ -f "$IMG_DIR/kundenbilder/team-model-reinigung.png" ] && [ -f "$IMG_DIR/kundenbilder/team-model-reinigung.webp" ]; then
  delete_file "$IMG_DIR/kundenbilder/team-model-reinigung.png"
fi

# solaranlagenreinigung-vorher-nachher
if [ -f "$IMG_DIR/flux/solaranlagenreinigung-vorher-nachher.png" ] && [ -f "$IMG_DIR/flux/solaranlagenreinigung-vorher-nachher.webp" ]; then
  delete_file "$IMG_DIR/flux/solaranlagenreinigung-vorher-nachher.png"
fi

echo ""
echo "SUMMARY"
echo "======================================"
echo "Files Deleted: $DELETED_COUNT"
if command -v numfmt &> /dev/null; then
  echo "Size Freed: $(numfmt --to=iec-i --suffix=B $DELETED_SIZE)"
else
  echo "Size Freed: $((DELETED_SIZE / 1024 / 1024)) MB"
fi
echo ""
