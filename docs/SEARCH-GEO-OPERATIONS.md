# ZOMEI Search and GEO Operations

## What is implemented

- Six representative product pages contain model-specific positioning, selection rules, applications and buyer FAQ in Chinese, English and Russian.
- Product pages expose `Product`, `BreadcrumbList` and `FAQPage` JSON-LD.
- The Almaty Museum and Guangzhou Digital Culture Valley cases include visible, citable project data with a verification method and evidence type.
- Google Search Console and Bing Webmaster ownership verification use environment variables.
- GA4 tracks the main conversion actions without collecting form field contents.
- IndexNow submission is available as a repeatable script.

## Required deployment environment variables

```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=google-token-only
NEXT_PUBLIC_BING_SITE_VERIFICATION=bing-token-only
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
INDEXNOW_KEY=your-indexnow-key
INDEXNOW_HOST=www.zomeiled.com
```

Do not include complete `<meta>` tags in the verification variables. Store only the token value.

## First connection

1. Deploy the website with the Google, Bing and GA4 variables.
2. Add `https://www.zomeiled.com/sitemap.xml` in Google Search Console.
3. Add the same sitemap in Bing Webmaster Tools.
4. Run `npm run build` locally or in CI.
5. Run `npm run seo:indexnow:prepare`. This creates the required key file in `public` and `out`.
6. Deploy the resulting site and confirm `https://www.zomeiled.com/<INDEXNOW_KEY>.txt` opens.
7. Run `npm run seo:indexnow` to submit every sitemap URL.

For later content updates, deploy first and run `npm run seo:indexnow` again after the new pages are publicly available. IndexNow is a discovery signal, not a guarantee of indexing.

## GA4 conversion events

| Event | Trigger |
| --- | --- |
| `generate_lead` | Successful inquiry form response |
| `contact_whatsapp` | WhatsApp link click |
| `contact_email` | Email link click |
| `contact_phone` | Telephone link click |
| `contact_page_open` | Internal contact-page link click |
| `project_page_view` | Detailed project page opened |
| `project_gallery_open` | Project image opened |
| `project_scroll_50` / `project_scroll_90` | Almaty case reading depth |

Mark `generate_lead`, `contact_whatsapp` and `contact_email` as key events in GA4. Do not send names, email addresses, phone numbers or message text to analytics.

## Monthly checks

- Search Console: indexing, sitemap status, Core Web Vitals and search queries.
- Bing: indexed pages, crawl errors and IndexNow status.
- GA4: leads by language and landing page; WhatsApp/email clicks; project-page engagement.
- Content: confirm all published numbers still match project records and product specifications.
- Links: test six representative product pages and both project cases in `/en`, `/zh` and `/ru`.
