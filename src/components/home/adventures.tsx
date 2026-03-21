import { adventures } from "@/components/data/site-data";

export function Adventures() {
  return (
    <section id="adventures" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Knuckles Adventures
          </h2>
          <p className="mt-3 text-slate-600">
            More than trekking — discover unique nature experiences.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {adventures.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-slate-50 p-6 text-center shadow-sm"
            >
              <h3 className="font-semibold text-slate-900">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}