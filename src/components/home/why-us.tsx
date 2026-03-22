"use client";

import { useEffect, useMemo, useState } from "react";
import { whyUsItems } from "@/components/data/site-data";

type Accent = {
  ring: string;
  frameBorder: string;
  innerBorder: string;
  heroBg: string;
};

export function WhyUs() {
  const accents: Accent[] = [
    {
      ring: "ring-emerald-200/70",
      frameBorder: "border-emerald-400",
      innerBorder: "border-emerald-700/60",
      heroBg: "bg-gradient-to-br from-emerald-200 via-emerald-50 to-white",
    },
    {
      ring: "ring-emerald-200/70",
      frameBorder: "border-emerald-400",
      innerBorder: "border-emerald-700/60",
      heroBg: "bg-gradient-to-br from-emerald-100 via-white to-white",
    },
    {
      ring: "ring-sky-200/70",
      frameBorder: "border-emerald-400",
      innerBorder: "border-sky-700/60",
      heroBg: "bg-gradient-to-br from-sky-100 via-white to-white",
    },
  ];

  const visible = 4;
  const [start, setStart] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStart((prev) => (prev + 1) % whyUsItems.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const trackItems = useMemo(() => [...whyUsItems, ...whyUsItems], []);
  const offsetPercent = start * (100 / visible);
  const offsetGapRem = start * 1.5; // gap between cards (rem)

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Why Travel With Us
          </h2>
          <p className="mt-3 text-slate-600">
            Safe, flexible, and memorable experiences in the heart of Knuckles.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white via-white/70 to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white via-white/70 to-transparent" />

          <div
            className="flex gap-6 transition-transform duration-900 ease-in-out"
            style={{
              transform: `translateX(calc(-${offsetPercent}% - ${offsetGapRem}rem))`,
            }}
          >
            {trackItems.map((item, idx) => {
              const accent = accents[idx % accents.length] ?? accents[0];
              if (!accent) return null;
              return (
                <div
                  key={`${item.title}-${idx}`}
                  className={`relative flex h-full min-w-[18rem] flex-1 flex-col items-center overflow-hidden rounded-[999px] bg-white px-6 pt-6 pb-7 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ${accent.ring}`}
                  style={{ flex: "0 0 25%", maxWidth: "25%" }}
                >
                  {/* Outer oval ring */}
                  <div className="pointer-events-none absolute inset-3 rounded-[999px] ring-1 ring-emerald-200/50" />

                  {/* IMAGE (OVAL) */}
                  <div
                    className={`relative mb-5 w-full overflow-hidden rounded-[999px] border-[5px] ${accent.frameBorder}`}
                  >
                    <div
                      className={`absolute inset-2 rounded-[999px] border-2 ${accent.innerBorder}`}
                    />

                    <div className="aspect-[4/3] w-full overflow-hidden rounded-[999px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Badge */}
                    
                  </div>

                  {/* Tag */}
                  <div className="mb-2 rounded-full bg-emerald-600 px-4 py-1 text-[10px] font-semibold text-white uppercase">
                    Knuckles
                  </div>

                  {/* Title */}
                  <h3 className="text-center text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 px-2 text-center text-sm text-slate-600">
                    {item.description}
                  </p>

                  {/* Button */}
                  <button className="mt-4 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700">
                    Explore
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {whyUsItems.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                aria-label={`Go to card ${dotIdx + 1}`}
                onClick={() => setStart(dotIdx)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  start === dotIdx
                    ? "scale-110 bg-emerald-600"
                    : "bg-emerald-200 hover:bg-emerald-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
