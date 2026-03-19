import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Using the domain you provided
  const baseUrl = "https://aayushdevfolio.vercel.app";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Add other routes here if you add more pages to your portfolio
  ];
}
