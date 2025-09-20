/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['flux.com', 'www.komfort-gebaeudeservice24.de'], // Externe Bild-Domains für Next/Image-Optimierung
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flux.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  swcMinify: true,
};

module.exports = nextConfig;
