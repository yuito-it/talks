#!/bin/bash

mkdir -p output

# slides配下のpackage.jsonがあるディレクトリだけを対象にする！
for pkg in $(find slides -type f -name package.json); do
  slide_dir=$(dirname "$pkg")
  echo "==== $slide_dir ===="
  cd "$slide_dir" || continue
  bun install
  # 出力先をoutput/以下に再現する
  rel_path=${slide_dir#slides/}
  bun build --outdir "../../output/$rel_path" --base "/$rel_path" --download "true"
  ls -l "../../output/$rel_path"
  cd - > /dev/null
done