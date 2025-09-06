This is a Next.js 15 demo showing different ways to load external images.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Routes

- `/images`: Demo page with multiple methods

## Methods shown

- next/image with `remotePatterns` configured in `next.config.ts`
- next/image with `unoptimized`
- Plain `<img />` (no optimization)
- Proxy API route at `src/app/api/image-proxy/route.ts` to bypass CORS/hotlinking

## Configure external hosts

Edit `next.config.ts` → `images.remotePatterns` to add domains you need.

```ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "images.unsplash.com" },
    { protocol: "https", hostname: "picsum.photos" }
  ]
}
```

## Notes

- Some hosts block hotlinking or require specific headers. If images don’t render via direct URL, try the proxy method.
- The proxy is for demo only. Add rate limiting, validation, and security checks for production.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
