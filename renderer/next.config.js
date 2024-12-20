/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
}
