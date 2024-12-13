/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '/bicameral_demo',
    assetPrefix: '/bicameral_demo/',
  }
  
  module.exports = nextConfig