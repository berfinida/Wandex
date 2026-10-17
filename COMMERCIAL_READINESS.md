# Commercial readiness

Last reviewed: 17 October 2026. This is an engineering review, not legal advice.

## Ready in code

- Static, crawlable city guides exist for Istanbul, London, Paris, Tokyo and New York. They contain evergreen editorial context and link to the time-stamped live dashboard.
- Affiliate slots are disabled by default in `affiliate-config.js`. They do not invent prices, availability or partners. When a verified partner URL is added, links receive `rel="sponsored noopener noreferrer"`.
- No AdSense, analytics or affiliate tracking script is loaded. A consent mechanism must be added before any non-essential advertising or analytics technology is enabled.
- Market requests use short in-memory TTL caches only after freshness validation: FX 30 minutes, crypto 5 minutes. Invalid responses are not cached.

## Provider status to resolve before commercial launch

| Provider | Use | Status | Required action |
|---|---|---|---|
| Open-Meteo | Weather and air-quality | **Do not assume commercial eligibility** | Confirm a commercial plan/licence and required attribution before monetised traffic. The public project documentation describes free access for non-commercial use. |
| CoinGecko | Crypto prices | **Commercial plan / attribution review required** | Select a plan, obey rate limits, include “Data provided by CoinGecko” with link if required by the selected terms. |
| open.er-api | Daily FX reference | **Unverified** | Review current licence, attribution and commercial limits; move to a contracted provider if needed. |
| REST Countries, Nager.Date, Sunrise-Sunset | Reference data | **Unverified** | Confirm terms, availability and rate limits in writing or replace with contracted/server-side sources. |
| OpenStreetMap standard tiles / Nominatim | Map, search | **Not suitable as an unreviewed high-traffic commercial dependency** | Follow attribution and usage policies; use a commercial tile/geocoding provider or self-host before scale. Do not prefetch tiles. |
| Leaflet, Chart.js, CDN assets | Client libraries | **Licence/version review needed** | Pin reviewed versions, retain licence notices, and consider self-hosting for reliability/CSP. |
| Vercel | Hosting | **Account/plan review required** | Confirm current plan supports the expected commercial traffic and terms. No paid plan was activated by Wandex. |

## Required operator inputs

1. Legal entity/operator name, address, support email and jurisdiction for legal pages.
2. Approved affiliate programme URLs, destination identifiers and disclosure language.
3. AdSense publisher ID and a consent-management decision before adding ads.
4. Analytics provider, data-processing agreement, retention settings and consent configuration.
5. Commercial licences or written confirmations for every production data/map provider.

## Launch blockers

- Do not enable ads, analytics or affiliate tracking without consent and a reviewed privacy/cookie policy.
- Do not claim commercial API permission until each provider’s current terms are reviewed.
- Replace or formally approve shared community map/geocoding infrastructure before high-traffic commercial operation.
- Add real operator contact and legally reviewed policies before public monetisation.
