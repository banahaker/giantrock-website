import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl = 'https://www.giantrocktw.com';
const currentDate = new Date().toISOString().split('T')[0];

const pages = [
  { url: '/', changefreq: 'weekly', priority: '1.0', lastmod: currentDate },
  { url: '/about', changefreq: 'monthly', priority: '0.8', lastmod: currentDate },
  { url: '/courses', changefreq: 'weekly', priority: '0.9', lastmod: currentDate },
  { url: '/instructors', changefreq: 'monthly', priority: '0.7', lastmod: currentDate },
  { url: '/contact', changefreq: 'monthly', priority: '0.6', lastmod: currentDate }
];

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(
    path.join(__dirname, 'dist', 'sitemap.xml'),
    sitemap
  );

  console.log('✅ Sitemap generated successfully!');
}

generateSitemap();
