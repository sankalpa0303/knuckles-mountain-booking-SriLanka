export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="min-h-[85vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="min-h-[85vh] bg-black/50">
          <div className="mx-auto flex max-w-7xl items-center px-6 py-24">
            <div className="max-w-3xl">
              <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                Welcome to the Wilderness
              </p>

              <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                Explore the Knuckles Mountain Range With Guided Eco Adventures
              </h1>

              <p className="mt-6 text-lg text-slate-200 md:text-xl">
                Discover misty peaks, waterfall trails, camping experiences, and
                unforgettable mountain journeys in Sri Lanka.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
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
    </section>
  );
}