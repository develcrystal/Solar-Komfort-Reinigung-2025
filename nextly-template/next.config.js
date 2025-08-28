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
};

module.exports = nextConfig;
