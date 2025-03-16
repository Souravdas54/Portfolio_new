import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    //   disallow: '/private/',
    },
    sitemap: 'https://portfolio-new-five-eosin.vercel.app/sitemap.xml',
  }
}