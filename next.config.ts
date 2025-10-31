import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Existing config properties go here (e.g., reactStrictMode: true, etc.)

  // FIX: Resolve Apollo Server v4 dependency issue during Next.js build
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Ensure existing externals are an array (or initialize as empty)
      if (!config.externals) {
        config.externals = [];
      }
      if (!Array.isArray(config.externals)) {
        // Handle cases where externals might be an object or function by merging
        // For simplicity and effectiveness on Vercel, we'll ensure it's an array for our package.
        config.externals = [config.externals];
      }

      const newExternals = ["@yaacovcr/transform"];

      // Add the Apollo-specific external package to the beginning of the list
      // We use unshift to ensure Next.js sees this exclusion early.
      config.externals = newExternals.concat(config.externals);
    }
    // Return the modified config
    return config;
  },
};

export default nextConfig;
