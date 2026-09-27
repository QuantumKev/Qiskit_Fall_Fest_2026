#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"
moved=0
if [[ -d app/api ]]; then
  mv app/api /tmp/qff-api
  moved=1
fi
cleanup() {
  if [[ "$moved" == 1 && ! -d app/api ]]; then
    mv /tmp/qff-api app/api
  fi
}
trap cleanup EXIT
GITHUB_PAGES=1 npx next build
touch out/.nojekyll
echo "Static export written to out/"
