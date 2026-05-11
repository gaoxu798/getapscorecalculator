export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://getapscorecalculator.xyz";

  const routes = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/subjects`, lastModified: new Date() },
    { url: `${baseUrl}/faq`, lastModified: new Date() },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date() },
    { url: `${baseUrl}/cookie-policy`, lastModified: new Date() },
    { url: `${baseUrl}/refund-policy`, lastModified: new Date() },
  ];

  // Add all 38 subject pages
  const subjectSlugs = [
    "ap-calculus-ab",
    "ap-calculus-bc",
    "ap-biology",
    "ap-chemistry",
    "ap-physics-1",
    "ap-physics-2",
    "ap-physics-c-mechanics",
    "ap-physics-c-electricity-magnetism",
    "ap-environmental-science",
    "ap-statistics",
    "ap-us-history",
    "ap-world-history",
    "ap-european-history",
    "ap-us-government",
    "ap-comparative-government",
    "ap-english-language",
    "ap-english-literature",
    "ap-psychology",
    "ap-human-geography",
    "ap-macroeconomics",
    "ap-microeconomics",
    "ap-computer-science-a",
    "ap-computer-science-principles",
    "ap-art-history",
    "ap-music-theory",
    "ap-studio-art",
    "ap-spanish-language",
    "ap-spanish-literature",
    "ap-french-language",
    "ap-german-language",
    "ap-latin",
    "ap-chinese-language",
    "ap-japanese-language",
    "ap-italian-language",
    "ap-research",
    "ap-seminar",
  ];

  const subjectRoutes = subjectSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...subjectRoutes];
}
