import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const port = Number(process.env.PORT || 3010);
const host = process.env.HOST || "127.0.0.1";
const root = resolve(process.cwd(), "out");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function safePath(pathname) {
  const decoded = decodeURIComponent(pathname.split("?")[0] || "/");
  const cleaned = normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  return cleaned.startsWith("/") ? cleaned.slice(1) : cleaned;
}

function findFile(pathname) {
  const clean = safePath(pathname);
  const direct = resolve(root, clean || "index.html");

  if (!direct.startsWith(root)) return null;

  if (existsSync(direct) && statSync(direct).isFile()) return direct;

  if (!extname(clean)) {
    const htmlFile = resolve(root, `${clean}.html`);
    if (htmlFile.startsWith(root) && existsSync(htmlFile)) return htmlFile;

    const indexFile = resolve(root, clean, "index.html");
    if (indexFile.startsWith(root) && existsSync(indexFile)) return indexFile;
  }

  const fallback404 = join(root, "404.html");
  return existsSync(fallback404) ? fallback404 : null;
}

createServer((request, response) => {
  const filePath = findFile(request.url || "/");

  if (!filePath) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  const ext = extname(filePath);
  const is404 = filePath.endsWith("404.html") && !existsSync(resolve(root, safePath(request.url || "/")));

  response.writeHead(is404 ? 404 : 200, {
    "Content-Type": mimeTypes[ext] || "application/octet-stream",
    "Cache-Control": "no-store",
  });

  createReadStream(filePath).pipe(response);
}).listen(port, host, () => {
  console.log(`ZOMEI static preview: http://${host}:${port}`);
});
