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

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Get early access</h2>
            <p className="text-sm text-zinc-300">
              Join the waitlist and help shape the future of Intent.
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
              Join the waitlist
            </button>
          </form>
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
