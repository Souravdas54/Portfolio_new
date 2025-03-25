import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://portfolio-new-five-eosin.vercel.app/',
      lastModified: new Date(),
      // changeFrequency: 'yearly',
      // priority: 1,
    },
    {
      url: 'https://portfolio-new-five-eosin.vercel.app/about',
      lastModified: new Date(),
      // changeFrequency: 'monthly',
      // priority: 0.8,
    },
    {
      url: 'https://portfolio-new-five-eosin.vercel.app/contect',
      lastModified: new Date(),
      // changeFrequency: 'weekly',
      // priority: 0.5,
    },
    {
      url: 'https://portfolio-new-five-eosin.vercel.app/project',
      lastModified: new Date(),
      // changeFrequency: 'weekly',
      // priority: 0.5,
    },
    
  ]
}