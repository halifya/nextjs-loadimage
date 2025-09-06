"use client";

import Image from "next/image";
import { useState } from "react";

const demoImages = {
  s3: "https://easy-grocery-system-bucket.s3.ap-southeast-1.amazonaws.com/global/SN-004.jpg",
  unsplash: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800",
  githubRaw:
    "https://raw.githubusercontent.com/vercel/next.js/canary/examples/image-component/public/vercel.png",
  imgur: "https://i.imgur.com/0Z8FQ3M.jpeg",
};

export default function ImagesDemoPage() {
  const [imgUrl, setImgUrl] = useState(demoImages.unsplash);

  return (
    <main className="min-h-dvh px-4 py-10 space-y-8">
      <h1 className="text-2xl font-bold">External Image Loading Examples</h1>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Choose source</h2>
        <div className="flex flex-wrap gap-2">
          {Object.entries(demoImages).map(([key, url]) => (
            <button
              key={key}
              className="rounded border px-3 py-1 hover:bg-gray-50"
              onClick={() => setImgUrl(url)}
            >
              {key}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <h3 className="font-semibold">1) next/image with remotePatterns</h3>
          <div className="relative h-[300px] w-full overflow-hidden rounded border">
            <Image src={imgUrl} alt="demo" fill sizes="100vw" className="object-cover" />
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">2) next/image unoptimized</h3>
          <div className="relative h-[300px] w-full overflow-hidden rounded border">
            <Image
              src={imgUrl}
              alt="demo unoptimized"
              fill
              sizes="100vw"
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">3) &lt;img&gt; tag (no optimization)</h3>
          <div className="rounded border p-2">
            <img src={imgUrl} alt="plain img" className="h-[300px] w-full object-cover" />
            <p className="text-sm text-gray-600 mt-2">
              If the remote host blocks hotlinking or lacks CORS, the image may fail.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">4) Proxy API route</h3>
          <ProxyExample src={imgUrl} />
        </div>
      </section>
    </main>
  );
}

function ProxyExample({ src }: { src: string }) {
  const proxyUrl = `/api/image-proxy?url=${encodeURIComponent(src)}`;

  return (
    <div className="space-y-2">
      <div className="relative h-[300px] w-full overflow-hidden rounded border">
        <Image src={proxyUrl} alt="via proxy" fill sizes="100vw" className="object-cover" />
      </div>
      <code className="block text-xs break-all">GET {proxyUrl}</code>
    </div>
  );
}


