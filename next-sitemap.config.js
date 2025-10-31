/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://lola-eventos.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  // SEO: Additional sitemap configuration
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority for important pages
    const priorities = {
      "/": 1.0,
      "/servicios": 0.9,
      "/servicios/eventos": 0.9,
      "/servicios/funcional": 0.9,
      "/servicios/studio": 0.9,
      "/contacto": 0.8,
      "/quienes-somos": 0.8,
      "/blog": 0.7,
      "/galeria": 0.7,
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
