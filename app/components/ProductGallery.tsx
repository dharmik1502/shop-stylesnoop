"use client";

import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "./Icons";

export default function ProductGallery({ images, alt, badge }: { images: string[]; alt: string; badge?: string }) {
  const [current, setCurrent] = useState(0);
  const src = images[current] ?? images[0];
  const many = images.length > 1;
  const go = (d: number) => setCurrent((c) => (c + d + images.length) % images.length);

  return (
    <div className="flex flex-col-reverse gap-3 lg:flex-row">
      {many && (
        <div className="scroll-x flex gap-2.5 overflow-x-auto lg:flex-col lg:overflow-visible">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              aria-label={`Show image ${i + 1}`}
              aria-pressed={i === current}
              onClick={() => setCurrent(i)}
              onMouseEnter={() => setCurrent(i)}
              className={`h-16 w-16 shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 bg-[#f7f7f9] p-1 transition lg:h-[72px] lg:w-[72px] ${
                i === current ? "border-brand" : "border-line opacity-75 hover:opacity-100"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
              <img src={img} alt="" className="!h-full w-full object-contain" />
            </button>
          ))}
        </div>
      )}

      <div className="relative flex-1 overflow-hidden rounded-2xl border border-line bg-[#f7f7f9]">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
        <img key={src} src={src} alt={alt} className="block aspect-square !h-auto w-full object-contain p-4" />
        {badge && (
          <span className="absolute top-4 left-4 rounded-md bg-sale px-2 py-1 text-[12px] font-bold text-white shadow">{badge}</span>
        )}
        {many && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => go(-1)}
              className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-ink shadow ring-1 ring-line hover:bg-white"
            >
              <IconChevronLeft />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => go(1)}
              className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-ink shadow ring-1 ring-line hover:bg-white"
            >
              <IconChevronRight />
            </button>
            <span className="absolute right-3 bottom-3 rounded-full bg-black/55 px-2.5 py-0.5 text-[11px] font-medium text-white">
              {current + 1} / {images.length}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
