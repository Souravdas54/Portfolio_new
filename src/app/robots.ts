import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      //   disallow: '/private/',
      disallow: ['/admin', '/private'], // Add any restricted routes
      crawlDelay: 10, // Optional: Helps prevent server overload from bots
    },
    sitemap: 'https://portfolio-new-five-eosin.vercel.app/sitemap.xml',
  }
}