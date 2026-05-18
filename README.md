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
5. Add a Vercel Postgres/Neon integration, or fill `POSTGRES_URL` / `DATABASE_URL`.
6. Optionally add Resend variables for inquiry notifications.

## Content update

- Replace placeholder images in `public/images`
- Update product data in `data/products.ts`
- Update solution data in `data/solutions.ts`
- Update project data in `data/projects.ts`
- Update contact details in `data/site.ts`

## Contact form storage and reminders

- Form submissions are posted to `/api/inquiry`
- Data is stored in a PostgreSQL table named `inquiries`
- Database connection accepts `POSTGRES_URL`, `DATABASE_URL`, `POSTGRES_URL_NON_POOLING`, or `POSTGRES_HOST` + `POSTGRES_USER` + `POSTGRES_PASSWORD` + `POSTGRES_DATABASE`
- If `RESEND_API_KEY`, `NOTIFICATION_EMAIL_FROM` and `NOTIFICATION_EMAIL_TO` are configured, an email notification is sent automatically
- Current contact email: `shine@zomeiled.com`
- Current WhatsApp: `+86 177 7966 7635`
- Current phone: `+86 17779667635`
