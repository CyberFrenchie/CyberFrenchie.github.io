import { access, readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("../_site/", import.meta.url);
const required = ["index.html", "writing/index.html", "reports/index.html", "cves/index.html", "about/index.html", "feed.xml", "sitemap.xml"];

for (const file of required) {
  await access(new URL(file, root));
}

const htmlFiles = [];
async function walk(path) {
  for (const entry of await readdir(path, { withFileTypes: true })) {
    const full = join(path, entry.name);
    if (entry.isDirectory()) await walk(full);
    if (entry.isFile() && entry.name.endsWith(".html")) htmlFiles.push(full);
  }
}

await walk(root.pathname);
for (const file of htmlFiles) {
  const body = await readFile(file, "utf8");
  if (!body.includes("<title>")) throw new Error(`Missing title: ${file}`);
  if (body.includes("undefined")) throw new Error(`Undefined output: ${file}`);
}

console.log(`Checked ${htmlFiles.length} generated HTML pages.`);
