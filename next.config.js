const nextConfig = {
  experimental: {
    esmExternals: false
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      document: false,
      window: false
    };
    return config;
  }
}

module.exports = nextConfig
