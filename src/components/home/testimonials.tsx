import { testimonials } from "@/components/data/site-data";

export function Testimonials() {
  return (
    <section className="bg-emerald-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Voices From The Trail
          </h2>
          <p className="mt-3 text-emerald-100">
            Hear what travelers say about their Knuckles journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-emerald-50">“{item.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-emerald-200">{item.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}