/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    basePath: '/personal',
    assetPrefix: '/personal',
    exportPathMap: function () {
        return {
          '/': { page: '/' },
        };
      },
      trailingSlash: true,
};

module.exports = nextConfig;
