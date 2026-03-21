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

        <div className="grid gap-6 md:grid-cols-3">
          {trekPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                {pkg.duration}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                {pkg.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500">{pkg.subtitle}</p>
              <p className="mt-4 text-slate-600">{pkg.description}</p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-bold text-slate-900">
                  {pkg.price}
                </span>
                <a
                  href="#contact"
                  className="rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}