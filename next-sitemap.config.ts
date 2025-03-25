import type { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: "https://sdportfolio.com", // Your portfolio URL
  generateRobotsTxt: true, // Generates robots.txt automatically
  sitemapSize: 7000, // (Optional) Limits the size of each sitemap file
  exclude: ["/studio"], // Exclude specific pages (if needed)
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // Allows search engines to crawl everything
      { userAgent: "Googlebot", allow: "/" }, // Googlebot-specific rule
    ],
  },
};

export default config;
