/** @type {import('next').NextConfig} */
const nextConfig = {
  // This function allows you to hook into the webpack configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // For the client-side bundle (browser), we want to alias
      // the problematic dependency to 'false'. This tells Webpack to
      // treat the module as an external dependency that doesn't need to
      // be bundled, effectively resolving the dynamic require without errors.
      // Since this dependency is only relevant for the server (Node.js)
      // and Apollo is using it optionally, ignoring it on the client is safe.
      config.resolve.alias = {
        ...config.resolve.alias,
        "@yaacovcr/transform": false,
      };
    } else {
      // For the server-side bundle, we may need to specifically exclude it as an external.
      // This is often not strictly necessary as Vercel's Node environment usually handles it,
      // but if the issue persists on the server build, this can help.
      config.externals = [...config.externals, "@yaacovcr/transform"];
    }

    return config;
  },
};

module.exports = nextConfig;
