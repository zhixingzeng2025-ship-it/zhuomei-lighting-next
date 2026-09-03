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

- This site is currently a static Next.js site. It does not yet have a connected online backend CMS.
- Blog posts are maintained in `data/blog.ts`. Add a new object to `blogArticles`, set a unique `slug`, and place the cover image under `public/images/...`.
- Product, solution, project, and company content are maintained in TypeScript data files:
  - Products: `data/productSeries.ts`, `data/productDetailImages.ts`, `data/productDetailGalleries.ts`
  - Solutions: `data/solutions.ts`
  - Projects: `data/projects.ts`
  - Contact and global site details: `data/site.ts`
- Company and website images live under `public/images`. Keep new assets in stable folders such as `public/images/company/website-assets` or `public/images/generated`.
- After changing content, run `npm run build` to verify the static pages compile correctly.

### Recommended CMS direction

For later maintenance, the best next step is a local/admin content system rather than editing code by hand every time:

1. Create an `/admin` page for blog, product, case, solution, and company-info forms.
2. Save drafts as structured files such as Markdown or JSON.
3. Generate the existing `data/*.ts` files from those structured files.
4. Rebuild the static site after review.

The detailed first-stage CMS plan is in `docs/ZOMEILED_LOCAL_CMS_DESIGN.md`.

## Contact form

- Form submissions are posted to `/api/contact`
- The recommended free setup is Formspree. The current Formspree endpoint is `https://formspree.io/f/xgoqenro`, which should send notifications to `shine@zomeiled.com`
- If `FORMSPREE_ENDPOINT` is missing, `/api/contact` can still fall back to an external `BACKEND_CONTACT_URL` or the legacy PostgreSQL inquiry API when database variables are configured
- Current contact email: `shine@zomeiled.com`
- Current WhatsApp: `+86 177 7966 7635`
- Current phone: `+86 17779667635`
