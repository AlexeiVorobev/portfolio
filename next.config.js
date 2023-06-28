/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    basePath: '/portfolio',
    assetPrefix: '/portfolio',
    exportPathMap: function () {
        return {
          '/': { page: '/' },
        };
      },
      trailingSlash: true,
};

module.exports = nextConfig;
