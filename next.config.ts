import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    // Add common demo hosts; adjust as needed
    remotePatterns: [
      { protocol: "https", hostname: "easy-grocery-system-bucket.s3.ap-southeast-1.amazonaws.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "i.imgur.com" }
    ]
  }
};

export default nextConfig;
