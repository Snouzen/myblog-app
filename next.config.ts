import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "orderlyscarecrow-us.backendless.app" } ,
      { protocol: "https", hostname: "pixabay.com" }
    ]
  }
};

export default nextConfig;
