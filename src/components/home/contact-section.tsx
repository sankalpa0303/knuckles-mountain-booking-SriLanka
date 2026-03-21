export function ContactSection() {
  return (
    <section id="contact" className="bg-slate-950 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Get In Touch
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Questions, bookings, or trail talk?
          </h2>
          <p className="mt-4 max-w-xl text-slate-300">
            Reach out for package details, transport options, private tours, or
            custom trekking plans.
          </p>

          <div className="mt-8 space-y-3 text-slate-300">
            <p>Email: info@knucklesbooking.com</p>
            <p>Phone: +94 77 123 4567</p>
            <p>Location: Knuckles Region, Sri Lanka</p>
            <p>Hours: Monday - Sunday | 9:00 - 18:00</p>
          </div>
        </div>

        <form className="rounded-3xl bg-white p-6 text-slate-900 shadow-xl">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="First Name"
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 md:col-span-2"
            />
            <input
              type="text"
              placeholder="Subject"
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 md:col-span-2"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 md:col-span-2"
            />
          </div>

          <button
            type="submit"
            className="mt-5 w-full rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}