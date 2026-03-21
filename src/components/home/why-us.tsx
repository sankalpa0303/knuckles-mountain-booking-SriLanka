import { whyUsItems } from "@/components/data/site-data";

export function WhyUs() {
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

        <div className="grid gap-6 md:grid-cols-3">
          {whyUsItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}