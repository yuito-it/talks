#!/bin/bash

mkdir output

for dir in $(find slides -type d); do
  for subdir in $(find $dir/. -type d); do
    echo "==== $subdir ===="
    cd "$dir/$subdir"
    ls
    #bun install
    #bunx slidev -y -o ../../output/$dir/$subdir --base "/$dir/$subdir" --download true
  done
done