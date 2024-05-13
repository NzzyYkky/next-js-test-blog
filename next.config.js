/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io']
  },
  swcMinify: true,
  swcLoader: true,
}

module.exports = nextConfig
