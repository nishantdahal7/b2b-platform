import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // @ts-ignore - newly recommended Next.js property
    allowedDevOrigins: ["192.168.1.67", "localhost:3000"],
  },
};

export default nextConfig;
