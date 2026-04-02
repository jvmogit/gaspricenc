# gaspricenc
# Costco Matthews — Gas Price Tracker

Gas price at Costco in Matthews, NC

Live site: https://gaspricenc.netlify.app

Tracks regular unleaded gas prices at Costco #367, Matthews NC.
Data collection started Feb 27, 2026 (day before Iran-Israel war began).

## How to update prices

1. Open `index.html` in this repo
2. Click the pencil (Edit) icon
3. Find the `GAS_PRICES` array near the top of the file
4. Add a new line at the bottom of the array:
   `{ date: "Mon DD", price: X.XXX },`
5. Click "Commit changes"

Netlify auto-deploys within ~30 seconds of each commit.

## Stack

Single HTML file — React + Recharts + Babel, all loaded from CDN.
No build step required.
