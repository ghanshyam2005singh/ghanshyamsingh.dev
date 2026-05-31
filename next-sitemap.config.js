/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ghanshyam-singh.me',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
