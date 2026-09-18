export type Locale = "en" | "zh" | "ru";

export const locales: Locale[] = ["en", "zh", "ru"];

export function localeFromPathname(pathname: string): Locale | null {
  const segment = pathname.split("/").filter(Boolean)[0];
  return locales.includes(segment as Locale) ? (segment as Locale) : null;
}

export function localizePath(pathname: string, locale: Locale) {
  if (!pathname.startsWith("/") || pathname.startsWith("//")) return pathname;
  const [path, hash = ""] = pathname.split("#", 2);
  const [pathOnly, query = ""] = path.split("?", 2);
  const segments = pathOnly.split("/").filter(Boolean);
  if (locales.includes(segments[0] as Locale)) segments.shift();
  const localized = `/${locale}${segments.length ? `/${segments.join("/")}` : ""}`;
  return `${localized}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
}
