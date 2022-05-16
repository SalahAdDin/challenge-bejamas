/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
    deviceSizes: [640, 750, 828, 1080],
    imageSizes: [16, 32, 48, 64],
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
}

module.exports = nextConfig
