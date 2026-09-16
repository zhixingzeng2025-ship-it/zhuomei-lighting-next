"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type ProductGalleryProps = {
  images: string[];
  alt: string;
};

function GalleryArrow({
  direction,
  className,
}: {
  direction: "left" | "right" | "up" | "down";
  className?: string;
}) {
  const rotation = {
    left: "",
    right: "rotate(180 12 20)",
    up: "rotate(90 12 20)",
    down: "rotate(-90 12 20)",
  }[direction];

  return (
    <svg
      width="24"
      height="40"
      viewBox="0 0 24 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 9L6 20L16 31"
        transform={rotation}
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const galleryCopy = {
  en: {
    placeholderTitle: "Product image placeholder",
    placeholderText: "Replace with real product images later",
    prevThumb: "Previous product image",
    nextThumb: "Next product image",
    thumb: "View product image",
    prevLarge: "Previous large image",
    nextLarge: "Next large image",
  },
  zh: {
    placeholderTitle: "产品图片占位",
    placeholderText: "后续可替换为真实产品图",
    prevThumb: "上一张产品图",
    nextThumb: "下一张产品图",
    thumb: "查看产品图",
    prevLarge: "上一张大图",
    nextLarge: "下一张大图",
  },
  ru: {
    placeholderTitle: "Место для изображения",
    placeholderText: "Позже можно заменить реальными фото продукта",
    prevThumb: "Предыдущее изображение продукта",
    nextThumb: "Следующее изображение продукта",
    thumb: "Открыть изображение продукта",
    prevLarge: "Предыдущее большое изображение",
    nextLarge: "Следующее большое изображение",
  },
};

function Placeholder({ copy }: { copy: (typeof galleryCopy)["en"] }) {
  return (
    <div className="grid h-full min-h-[260px] place-items-center border border-dashed border-white/28 bg-white/[0.04] p-6 text-center text-white/62">
      <div>
        <div className="mx-auto mb-3 h-10 w-10 border border-white/35" />
        <div className="text-sm font-semibold uppercase tracking-[0.16em]">{copy.placeholderTitle}</div>
        <div className="mt-2 text-xs leading-5">{copy.placeholderText}</div>
      </div>
    </div>
  );
}

function productDisplayImage(image: string) {
  const cleanImage = image.replace(
    "https://img.zomeiled.com/images/generated/products/detail/",
    "https://img.zomeiled.com/images/generated/products/clean/transparent/",
  );
  return `${cleanImage}?v=clean-centered-20260728`;
}

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const { locale } = useLanguage();
  const copy = galleryCopy[locale as "en" | "zh" | "ru"] || galleryCopy.en;
  const galleryImages = useMemo(() => {
    if (images.length > 0) {
      const firstImage = images[0];
      return Array.from({ length: 4 }, (_, index) => images[index] || firstImage);
    }
    return [];
  }, [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = galleryImages[activeIndex];

  const goPrev = () => {
    if (galleryImages.length <= 1) return;
    setActiveIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length);
  };

  const goNext = () => {
    if (galleryImages.length <= 1) return;
    setActiveIndex((current) => (current + 1) % galleryImages.length);
  };

  return (
    <div className="grid gap-2 md:grid-cols-[96px_minmax(0,640px)]">
      <div className="relative hidden h-[420px] grid-rows-4 gap-2 md:grid">
        <button
          type="button"
          aria-label={copy.prevThumb}
          onClick={goPrev}
          className="absolute left-1/2 top-1 z-20 grid h-9 w-9 -translate-x-1/2 place-items-center text-white/45 transition hover:scale-110 hover:text-white/78"
        >
          <GalleryArrow direction="up" className="h-8 w-8" />
        </button>
        {(galleryImages.length > 0 ? galleryImages : [""]).map((image, thumb) => (
          <button
            key={`${image}-${thumb}`}
            type="button"
            aria-label={`${copy.thumb} ${thumb + 1}`}
            onClick={() => setActiveIndex(thumb)}
            className={[
              "grid min-h-0 overflow-hidden place-items-center border bg-white p-2 transition hover:border-brand-gold",
              activeIndex === thumb ? "border-brand-gold" : "border-white/15",
            ].join(" ")}
          >
            {image ? (
              <img
                src={productDisplayImage(image)}
                alt=""
                className="mx-auto h-full max-h-[86%] w-full max-w-[92%] object-contain"
              />
            ) : (
              <Placeholder copy={copy} />
            )}
          </button>
        ))}
        <button
          type="button"
          aria-label={copy.nextThumb}
          onClick={goNext}
          className="absolute bottom-1 left-1/2 z-20 grid h-9 w-9 -translate-x-1/2 place-items-center text-white/45 transition hover:scale-110 hover:text-white/78"
        >
          <GalleryArrow direction="down" className="h-8 w-8" />
        </button>
      </div>

      <div className="relative h-[420px] overflow-hidden bg-white">
        <button
          type="button"
          aria-label={copy.prevLarge}
          onClick={goPrev}
          className="absolute -left-1 top-1/2 z-20 grid h-[72px] w-12 -translate-y-1/2 place-items-center text-brand-gold transition hover:scale-110"
        >
          <GalleryArrow direction="left" className="h-14 w-10" />
        </button>
        <div className="absolute inset-[20%] z-10 grid place-items-center">
          {activeImage ? (
            <img
              src={productDisplayImage(activeImage)}
              alt={alt}
              className="block h-full w-full object-contain object-center"
            />
          ) : (
            <Placeholder copy={copy} />
          )}
        </div>
        <button
          type="button"
          aria-label={copy.nextLarge}
          onClick={goNext}
          className="absolute -right-1 top-1/2 z-20 grid h-[72px] w-12 -translate-y-1/2 place-items-center text-brand-gold transition hover:scale-110"
        >
          <GalleryArrow direction="right" className="h-14 w-10" />
        </button>
      </div>
    </div>
  );
}
