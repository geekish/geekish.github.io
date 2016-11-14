#!/usr/bin/env bash

if [ $# -ne 1 ]; then
    echo "Usage: ./bin/publish \"commit message\""
    exit 1;
fi

if git diff-index --quiet HEAD --; then
    echo "No changes to commit."
    exit 1;
fi

git checkout develop
./vendor/bin/sculpin generate --env=prod

git add *
git commit -m "$1"
git push origin `git subtree split --prefix output_prod develop`:master --force
