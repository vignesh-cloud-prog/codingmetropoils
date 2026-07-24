# CodeMadeBiz analytics (GA4)

Measurement ID: `G-X7WQNRNVYV`  
Env var: `NEXT_PUBLIC_GA_MEASUREMENT_ID`

## Decisions supported

- Which pages/offers drive consultation intent
- Whether WhatsApp is a meaningful alternate path
- Whether the chatbot assists conversion
- Where users drop before the consultation form

## Events

| Event | Properties | Trigger |
| --- | --- | --- |
| `page_view` | `page_path` | First load + client route changes |
| `consultation_cta_clicked` | `location`, `intent` | Book / intent CTAs |
| `appointment_viewed` | `intent` | `/appointment` mount |
| `form_started` | `intent` | Load consultation form (button or near-viewport) |
| `contact_whatsapp_clicked` | `location` | WhatsApp links |
| `contact_email_clicked` | `location` | Mailto links |
| `chat_opened` | — | Chat launcher open |
| `chat_contact_shown` | — | Chat contact strip first shown |

## Key events to mark in GA4 Admin

1. `form_started` (primary conversion proxy)
2. `appointment_viewed`
3. `consultation_cta_clicked`
4. `contact_whatsapp_clicked`

Do **not** mark `page_view` or `chat_opened` as conversions.

## Known gap

JotForm runs in an iframe, so true form submit (`lead_submitted`) is not tracked on-site yet. Wire a JotForm webhook or thank-you postMessage later.

## Validation checklist

1. Open GA4 **DebugView** / Realtime after deploy (and set the env var on Vercel).
2. Home → Book consultation → confirm `consultation_cta_clicked`.
3. Appointment page → confirm `appointment_viewed`, then Load form → `form_started`.
4. Open chat → force contact strip → `chat_opened`, `chat_contact_shown`.
5. Click WhatsApp in footer/chat → `contact_whatsapp_clicked`.
6. Soft-navigate between pages and confirm pageviews without obvious doubles.

## Ownership

Site maintainer. Tracking helpers live in `lib/analytics.js` and `components/common/GoogleAnalytics.js`.
