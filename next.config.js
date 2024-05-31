const nextConfig = {
  distDir: "build", // Specify the output directory for the build
  webpack(config, { isServer }) {
    // Add custom webpack configurations here
    return config;
  },
  // Add other configurations as needed
};

module.exports = nextConfig;
