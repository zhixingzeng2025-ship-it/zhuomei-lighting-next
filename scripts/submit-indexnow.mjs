import { mkdir, readFile, writeFile } from "node:fs/promises";

const key = process.env.INDEXNOW_KEY;
const host = process.env.INDEXNOW_HOST || "www.zomeiled.com";
const prepareOnly = process.argv.includes("--prepare-only");
if (!key) throw new Error("INDEXNOW_KEY is required.");

const sitemap = await readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
if (!urls.length) throw new Error("No URLs found in out/sitemap.xml. Run npm run build first.");

await mkdir(new URL("../public/", import.meta.url), { recursive: true });
await writeFile(new URL(`../public/${key}.txt`, import.meta.url), key, "utf8");
await writeFile(new URL(`../out/${key}.txt`, import.meta.url), key, "utf8");
if (prepareOnly) {
  console.log(`Prepared IndexNow key file for ${host}. Deploy the site before submitting URLs.`);
  process.exit(0);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList: urls }),
});

if (!response.ok) throw new Error(`IndexNow submission failed: ${response.status} ${await response.text()}`);
console.log(`Submitted ${urls.length} URLs to IndexNow.`);
