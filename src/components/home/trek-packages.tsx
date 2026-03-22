import { trekPackages } from "@/components/data/site-data";

export function TrekPackages() {
  return (
    <section id="treks" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Trek Routes & Packages
          </h2>
          <p className="mt-3 text-slate-600">
            Pick the adventure that matches your travel style.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {trekPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="relative flex h-full flex-col items-center overflow-hidden rounded-[34px] bg-white px-6 pb-8 pt-4 shadow-[0_22px_70px_-30px_rgba(0,0,0,0.45)] ring-1 ring-emerald-100"
            >
              <div className="pointer-events-none absolute inset-3 rounded-[30px] ring-1 ring-emerald-200/70" />

              <div className="relative mb-5 w-full overflow-hidden rounded-[30px] border-[6px] border-emerald-400 shadow-xl">
                <div className="absolute inset-2 rounded-[24px] border-2 border-emerald-700/60" />
                <div className="aspect-[4/3] w-full overflow-hidden rounded-[26px]">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="absolute right-3 top-3 rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md">
                  {pkg.duration}
                </span>
              </div>

              <h3 className="text-center text-2xl font-bold text-slate-900">
                {pkg.title}
              </h3>
              <p className="mt-2 text-center text-sm text-slate-500">{pkg.subtitle}</p>
              <p className="mt-4 text-center text-slate-700">{pkg.description}</p>

              <div className="mt-6 flex w-full items-center justify-between gap-4">
                <span className="text-lg font-bold text-slate-900">{pkg.price}</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700"
                >
                  Book now
                  <span aria-hidden>›</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}