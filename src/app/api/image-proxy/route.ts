import { NextRequest } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    return new Response("Missing url", { status: 400 });
  }

  try {
    const upstream = await fetch(url, {
      headers: {
        // Basic header passthrough; you may expand as needed
        "User-Agent": "nextjs-image-proxy",
        Accept: "image/*, */*",
      },
      // Rely on platform to validate HTTPS
      cache: "no-store",
      redirect: "follow",
    });

    if (!upstream.ok || !upstream.body) {
      return new Response("Upstream error", { status: upstream.status || 502 });
    }

    // Mirror content type
    const contentType = upstream.headers.get("content-type") || "application/octet-stream";

    // Stream to client
    return new Response(upstream.body, {
      status: 200,
      headers: {
        "content-type": contentType,
        // Allow the image to be consumed by browser
        "cache-control": "public, max-age=60",
      },
    });
  } catch (err) {
    return new Response("Proxy failed", { status: 502 });
  }
}


