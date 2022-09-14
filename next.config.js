/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
