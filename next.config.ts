import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CHQ: Gemini AI corrected
  // ... (existing config properties)

  // FIX: Resolve Apollo Server v4 dependency issue during Next.js build
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Mark optional Apollo Server dependencies as external to prevent build failure
      config.externals.push("@yaacovcr/transform");
    }
    return config;
  },
};

export default nextConfig;
