/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
  generateIndexSitemap: false,
  exclude: [
    '/404',
    // '/slice-simulator',
  ],
}
