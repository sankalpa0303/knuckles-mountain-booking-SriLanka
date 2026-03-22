"use client";

import { useEffect, useState } from "react";

type Slide = {
  image: string;
  kicker: string;
  title: string;
  copy: string;
};

const slides: Slide[] = [
  {
    image: "/images/hero2.jpg",
    kicker: "Welcome to the Wilderness",
    title: "Explore the Knuckles Mountain Range With Guided Eco Adventures",
    copy:
      "Discover misty peaks, waterfall trails, camping experiences, and unforgettable mountain journeys in Sri Lanka.",
  },
  {
    image: "/images/hero1.jpg",
    kicker: "Guided Treks & Camps",
    title: "Small-group hikes tailored to your pace and curiosity",
    copy: "Sunrise summits, cloud forests, and riverside camps led by local guides who know every bend.",
  },
  {
    image: "/images/hero3.jpg",
    kicker: "Sustainable by Design",
    title: "Leave only footprints while we handle the details",
    copy: "Eco-friendly stays, responsible routes, and authentic mountain hospitality in one seamless plan.",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(id);
  }, []);

  const currentSlide = slides[index];
  if (!currentSlide) {
    return null; // Safety for strict indexed access
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, slideIndex) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1200 ease-out ${
              index === slideIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== slideIndex}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[13000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-transform ${
                index === slideIndex ? "scale-115 hero-kenburns" : "scale-100"
              }`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/10" />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-[-18%] right-[-32%] w-[68vw]">
        <div className="h-full w-full rounded-full bg-gradient-to-l from-white/40 via-white/18 to-transparent blur-3xl opacity-80" />
      </div>

      <div className="relative z-10">
        <div className="min-h-[85vh]">
          <div className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-24">
            <div className="max-w-3xl space-y-6">
              <p className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur transition-all duration-700">
                {currentSlide.kicker}
              </p>

              <h1 className="text-4xl font-bold leading-tight text-white transition-all duration-700 md:text-6xl">
                {currentSlide.title}
              </h1>

              <p className="text-lg text-slate-200 transition-all duration-700 md:text-xl">
                {currentSlide.copy}
              </p>

              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="#treks"
                  className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
                >
                  View Treks
                </a>
                <a
                  href="#blogs"
                  className="rounded-xl border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  Read Blogs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${slideIndex + 1}`}
            aria-pressed={index === slideIndex}
            onClick={() => setIndex(slideIndex)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === slideIndex
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}