export function AboutSection() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Our Trail
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Discover the spirit behind every step
          </h2>
          <p className="mt-5 text-slate-600">
            We create guided trekking and nature experiences that help travelers
            connect with the beauty of the Knuckles Mountain Range in a safe,
            simple, and memorable way.
          </p>
          <p className="mt-4 text-slate-600">
            Whether you are a beginner, a photographer, a family, or an
            adventure seeker, we help you choose the right experience for your
            comfort level and travel goals.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
          >
            More About Us
          </a>
        </div>

        <div className="h-[360px] rounded-3xl bg-gradient-to-br from-emerald-100 to-slate-200" />
      </div>
    </section>
  );
}