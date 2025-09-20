/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ESLint aktiviert für bessere Code-Qualität
    ignoreDuringBuilds: false,
  },
  images: {
    domains: ['solar-komfort.de'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
  },
  // Ensure all assets are loaded from the correct port
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://solar-komfort-reinigung.de' : '',
  basePath: '',
  publicRuntimeConfig: {
    basePath: '',
  },
  async redirects() {
    return [
      {
        source: '/gartenpflege',
        destination: '/gebaeudeservice/gartenpflege',
        permanent: true,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Fixes npm packages that depend on `fs` module
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false
      }
    }
    return config;
  },
};

module.exports = nextConfig;
