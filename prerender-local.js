import { firefox } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { preview } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const baseUrl = 'http://localhost:4173';

const routes = ['/', '/about', '/courses', '/instructors', '/contact'];

async function prerender() {
  console.log('🚀 Starting local prerender...');

  // Start vite preview server
  const server = await preview({
    preview: {
      port: 4173,
    },
  });

  console.log(`✅ Server started at ${baseUrl}`);

  const browser = await firefox.launch();
  const context = await browser.newContext();

  try {
    for (const route of routes) {
      const url = baseUrl + route;
      const outputPath = path.join(distDir, route === '/' ? 'index.html' : route + '/index.html');

      // Create directory if it doesn't exist
      const outputDir = path.dirname(outputPath);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      console.log(`  Rendering ${route}...`);

      try {
        const page = await context.newPage();

        // Wait for the page to be fully loaded
        await page.goto(url, {
          waitUntil: 'networkidle',
          timeout: 30000,
        });

        // Wait for React to hydrate
        await page.waitForSelector('#root', { timeout: 10000 });

        // Get the HTML
        const html = await page.content();

        // Read the original index.html to get the DOCTYPE and structure
        const originalHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

        // Extract the rendered head and body content
        const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

        if (bodyMatch && headMatch) {
          // Replace the body and head content in the original HTML
          const newHtml = originalHtml
            .replace(/<head[^>]*>[\s\S]*?<\/head>/i, headMatch[0])
            .replace(/<body[^>]*>[\s\S]*?<\/body>/i, bodyMatch[0]);

          fs.writeFileSync(outputPath, newHtml);
          console.log(`  ✅ Saved ${route} to ${outputPath}`);
        } else {
          console.log(`  ⚠️  Could not extract content for ${route}, copying original index.html`);
          fs.copyFileSync(path.join(distDir, 'index.html'), outputPath);
        }

        await page.close();
      } catch (error) {
        console.error(`  ❌ Error rendering ${route}:`, error.message);
        // Copy the original index.html as fallback
        fs.copyFileSync(path.join(distDir, 'index.html'), outputPath);
      }
    }
  } finally {
    await browser.close();
    await server.httpServer.close();
  }

  console.log('✨ Prerender complete!');
}

prerender().catch(console.error);
