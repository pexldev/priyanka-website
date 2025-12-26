#!/bin/bash

echo "📡 Watching priyanka_website folder for changes..."

fswatch -o . | while read num
do
  echo "🔄 Change detected — checking Git status..."

  git add -A

  if ! git diff --cached --quiet; then
    git commit -m "Auto push on save: $(date '+%Y-%m-%d %H:%M:%S')"
    git push origin main
    echo "✅ Code pushed!"
  else
    echo "🟢 Nothing to commit — working tree clean."
  fi
done
