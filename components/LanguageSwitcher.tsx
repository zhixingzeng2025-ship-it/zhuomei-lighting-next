"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDownIcon } from "./Icons";

const options = [
  { locale: "en" as const, label: "EN" },
  { locale: "zh" as const, label: "中文" },
  { locale: "ru" as const, label: "RU" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (ref.current && !ref.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className="inline-flex h-10 items-center gap-1 rounded-full border border-white/10 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {locale.toUpperCase()}
        <ChevronDownIcon />
      </button>

      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 top-[calc(100%+10px)] z-50 min-w-28 rounded-[18px] border border-brand-line bg-white p-2 shadow-[0_20px_60px_rgba(8,26,59,0.16)]"
        >
          {options.map((option) => (
            <li key={option.locale}>
              <button
                type="button"
                className={[
                  "block w-full rounded-2xl px-4 py-2 text-left text-sm font-semibold transition hover:bg-brand-background",
                  option.locale === locale ? "text-brand-deep" : "text-brand-text",
                ].join(" ")}
                onClick={() => {
                  setLocale(option.locale);
                  setOpen(false);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
