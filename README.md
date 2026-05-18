# ZHUOMEI LIGHTING

Next.js + Tailwind CSS static marketing site for outdoor lighting projects.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm start
```

## Vercel

1. Push the repository to GitHub.
2. Import the repo in Vercel.
3. Keep the default build command: `npm run build`.
4. Keep the output preset as Next.js.
5. The inquiry form uses Formspree endpoint `https://formspree.io/f/xgoqenro` by default. Optionally set `FORMSPREE_ENDPOINT` in Vercel to override it.

## Content update

- Replace placeholder images in `public/images`
- Update product data in `data/products.ts`
- Update solution data in `data/solutions.ts`
- Update project data in `data/projects.ts`
- Update contact details in `data/site.ts`

## Contact form

- Form submissions are posted to `/api/contact`
- The recommended free setup is Formspree. The current Formspree endpoint is `https://formspree.io/f/xgoqenro`, which should send notifications to `shine@zomeiled.com`
- If `FORMSPREE_ENDPOINT` is missing, `/api/contact` can still fall back to an external `BACKEND_CONTACT_URL` or the legacy PostgreSQL inquiry API when database variables are configured
- Current contact email: `shine@zomeiled.com`
- Current WhatsApp: `+86 177 7966 7635`
- Current phone: `+86 17779667635`
