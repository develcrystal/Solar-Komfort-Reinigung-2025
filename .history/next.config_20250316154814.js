/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Deaktiviere ESLint während des Builds für Vercel
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['solar-komfort.de'],
  },
};

module.exports = nextConfig;
