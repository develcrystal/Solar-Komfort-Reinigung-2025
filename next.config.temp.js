/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Deaktiviere ESLint während des Builds für Vercel
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
