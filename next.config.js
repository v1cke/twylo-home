const withPlugins = require("next-compose-plugins");

const nextConfig = {
  // distDir: '../../dist/functions/next'
  images: {
    domains: ["pbs.twimg.com"],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Hier können Anpassungen vorgenommen werden
    return config;
  },
};

module.exports = withPlugins([], nextConfig);
