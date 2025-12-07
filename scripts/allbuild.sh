#!/bin/bash

ROOT_DIR=$(pwd)
mkdir -p "$ROOT_DIR/output"

# Install theme packages first (each package under common/theme)
for theme_pkg in $(find common/theme -type f -name package.json); do
  theme_dir=$(dirname "$theme_pkg")
  echo "Installing theme deps in $theme_dir"
  (cd "$theme_dir" && npm install) || { echo "npm install failed in $theme_dir"; }
done

cd "$ROOT_DIR/scripts/node"
npm install
cd "$ROOT_DIR"



for pkg in $(find slides -type f -name package.json); do
  slide_dir=$(dirname "$pkg")
  echo "==== $slide_dir ===="

  cd "$slide_dir" || { echo "cd failed: $slide_dir"; continue; }

  echo "Installing dependencies..."
  bun install || { echo "bun install failed in $slide_dir"; cd "$ROOT_DIR"; continue; }

  rel_path=${slide_dir#slides/}
  echo "Relative path: $rel_path"

  echo "Building slides..."
  bun run build slides.md -o "./dist" --base "/$rel_path" --download "true" || {
    echo "Build failed in $slide_dir"
    cd "$ROOT_DIR"
    continue
  }

  target_dir="$ROOT_DIR/output/$rel_path"
  mkdir -p "$target_dir"
  cp -r "static" "$target_dir/static"
  cp -r dist/* "$target_dir/"
  echo "Copied to $target_dir"
  ls -l "$target_dir"

  echo "Add json data..."
  cd "$ROOT_DIR"
  node "$ROOT_DIR/scripts/node/slideMetaJsonExporter.js" "$ROOT_DIR/slides/$rel_path/slides.md" "$rel_path" || {
    echo "Failed to add json data in $slide_dir"
    cd "$ROOT_DIR"
    continue
  }

  echo "Add redirect rules to vercel.json..."
  cd "$ROOT_DIR"
  node "$ROOT_DIR/scripts/node/vercel.js" "/$rel_path/(.*)" "/$rel_path/index.html" || {
    echo "Failed to add redirect rules in $slide_dir"
    cd "$ROOT_DIR"
    continue
  }

  cd "$ROOT_DIR"
done
