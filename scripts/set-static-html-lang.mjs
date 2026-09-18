import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDir = path.resolve("out");
const localeLang = { en: "en", zh: "zh-CN", ru: "ru" };

async function htmlFiles(target) {
  const entries = await readdir(target, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(target, entry.name);
    if (entry.isDirectory()) return htmlFiles(fullPath);
    return entry.isFile() && entry.name.endsWith(".html") ? [fullPath] : [];
  }));
  return nested.flat();
}

for (const [locale, lang] of Object.entries(localeLang)) {
  const rootFile = path.join(outputDir, `${locale}.html`);
  const files = [rootFile, ...(await htmlFiles(path.join(outputDir, locale)))];
  for (const file of files) {
    const source = await readFile(file, "utf8");
    const updated = source.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);
    if (updated !== source) await writeFile(file, updated);
  }
}
