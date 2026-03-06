export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12 sm:py-16">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">
            Intent · Dating, reimagined
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Find people who match your intent, not just your vibe.
          </h1>
          <p className="max-w-2xl text-base text-zinc-300 sm:text-lg">
            Intent is a mobile-first dating app built around clarity. Say what
            you want, see what others want, and skip the guessing games.
          </p>
        </header>

        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-6 sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.18),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(244,63,94,0.2),transparent_40%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-start">
            <div className="space-y-6">
              <span className="inline-flex w-fit rounded-full border border-emerald-300/40 bg-emerald-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-200">
                Limited early access
              </span>
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                  Date with intention from day one.
                </h2>
                <p className="max-w-xl text-sm text-zinc-300 sm:text-base">
                  Skip mixed signals and endless small talk. Join the waitlist
                  for first access to a dating app built around what people are
                  genuinely looking for.
                </p>
              </div>
              <div className="grid gap-3 text-sm text-zinc-200 sm:grid-cols-2">
                <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  1,200+ singles already on the list
                </p>
                <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  Priority access in your city
                </p>
                <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:col-span-2">
                  Founding member perks: early features, private feedback
                  sessions, and invite drops.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/45 p-5 sm:p-6">
              <div className="mb-4 space-y-1">
                <h3 className="text-xl font-semibold">Reserve your spot</h3>
                <p className="text-sm text-zinc-300">
                  Takes less than a minute.
                </p>
              </div>

              <form className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm">
                  First name
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Jordan"
                    className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm">
                  City
                  <input
                    type="text"
                    name="city"
                    placeholder="Brooklyn, NY"
                    className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm">
                  What are you looking for?
                  <select
                    name="intent"
                    className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-emerald-400 focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose one
                    </option>
                    <option value="serious">Serious relationship</option>
                    <option value="casual">Casual dating</option>
                    <option value="new">Meet new people</option>
                    <option value="unsure">Still figuring it out</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-sm sm:col-span-2">
                  Anything else we should know?
                  <textarea
                    name="details"
                    rows={4}
                    placeholder="Tell us about your ideal match or what you want from Intent."
                    className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300 sm:col-span-2"
                >
                  Get Early Access
                </button>
                <p className="text-center text-xs text-zinc-400 sm:col-span-2">
                  No spam. Just launch updates and your invite.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section className="grid gap-4 text-sm text-zinc-400 sm:grid-cols-3">
          <div>
            <h3 className="text-white">Mobile-first by design</h3>
            <p>
              Built for one-handed swipes, quick decisions, and real-world
              follow-through.
            </p>
          </div>
          <div>
            <h3 className="text-white">Clear intentions</h3>
            <p>
              No more guessing. Know what people want before you invest your
              time.
            </p>
          </div>
          <div>
            <h3 className="text-white">Thoughtful matching</h3>
            <p>
              Smart filters and compatibility signals keep the focus on what
              matters.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
