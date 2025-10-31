import type { NextConfig } from "next";

// CHQ: Gemini AI corrected
const nextConfig: NextConfig = {
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
