/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Alle Bilder sind jetzt lokal gehostet - keine externen Domains erforderlich
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        // Security Headers
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        // Cache Headers for Static Assets (Images, CSS, JS) - Reduces LCP/TBT
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/img/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Dynamic Pages Cache (ISR-like)
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=3600, max-age=0' },
        ],
      },
    ];
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    optimizeCss: true,
  },
  // swcMinify is enabled by default in Next.js 14+, so this line is redundant
  // swcMinify: true,
};

module.exports = nextConfig;
