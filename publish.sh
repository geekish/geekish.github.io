#!/usr/bin/env bash

[ -z "$NETLIFY_ID" ] && echo "Need to pass Netlify site ID as: NETLIFY_ID" && exit 1;
[ -z "$NETLIFY_TOKEN" ] && echo "Need to pass Netlify access token as: NETLIFY_TOKEN" && exit 1;

netlify deploy --site-id="$NETLIFY_ID" --api-token="$NETLIFY_TOKEN"
