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

        <div className="grid gap-6 md:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="mb-4 h-44 rounded-xl bg-slate-200" />
              <h3 className="text-xl font-bold text-slate-900">{blog.title}</h3>
              <p className="mt-3 text-slate-600">{blog.excerpt}</p>
              <a
                href="#"
                className="mt-5 inline-block font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}