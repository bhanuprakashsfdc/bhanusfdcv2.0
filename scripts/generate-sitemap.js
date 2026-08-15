import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const routes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/index.html', priority: '1.0', changefreq: 'weekly' },
  { url: '/about.html', priority: '0.8', changefreq: 'monthly' },
  { url: '/certifications.html', priority: '0.8', changefreq: 'monthly' },
  { url: '/portfolio.html', priority: '0.9', changefreq: 'weekly' },
  { url: '/training.html', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog.html', priority: '0.8', changefreq: 'weekly' },
  { url: '/contact.html', priority: '0.7', changefreq: 'monthly' },
  { url: '/interview.html', priority: '0.7', changefreq: 'monthly' },
];

const generateSitemap = () => {
  const baseUrl = 'https://bhanusfdcv2.0.vercel.app';
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <priority>${route.priority}</priority>
    <changefreq>${route.changefreq}</changefreq>
  </url>`).join('\n')}
</urlset>`;

  writeFileSync(join(__dirname, '..', 'public', 'sitemap.xml'), sitemap, 'utf-8');
  console.log('Sitemap generated successfully at public/sitemap.xml');
};

generateSitemap();