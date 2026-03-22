import { blogs } from "@/components/data/site-data";

export function BlogPreview() {
  return (
    <section id="blogs" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Trail Journal
          </h2>
          <p className="mt-3 text-slate-600">
            Tips, stories, and simple travel guides for the Knuckles range.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="relative flex h-full flex-col items-center overflow-hidden rounded-[34px] bg-white px-6 pb-8 pt-4 shadow-[0_22px_70px_-30px_rgba(0,0,0,0.45)] ring-1 ring-emerald-100"
            >
              <div className="pointer-events-none absolute inset-3 rounded-[30px] ring-1 ring-emerald-200/70" />

              <div className="relative mb-5 w-full overflow-hidden rounded-[30px] border-[6px] border-emerald-400 shadow-xl">
                <div className="absolute inset-2 rounded-[24px] border-2 border-emerald-700/60" />
                <div className="aspect-[4/3] w-full overflow-hidden rounded-[26px]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <h3 className="text-center text-xl font-bold text-slate-900">
                {blog.title}
              </h3>
              <p className="mt-3 text-center text-slate-700">{blog.excerpt}</p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700"
              >
                Read more
                <span aria-hidden>›</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}