"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

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
        onClick={() => setOpen((value) => !value)}
      >
        {locale.toUpperCase()}
      </button>

      {open ? (
        <ul className="absolute right-0 top-[calc(100%+10px)] z-50 min-w-24 rounded-[18px] border border-white/10 bg-[#071128] p-2 shadow-card">
          {options.map((option) => (
            <li key={option.locale}>
              <button
                type="button"
                className={[
                  "block w-full rounded-2xl px-4 py-2 text-left text-sm font-semibold transition hover:bg-white/8",
                  option.locale === locale ? "text-white" : "text-white/78",
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
