import { BackgroundLines } from "@/components/ui/background-lines";
import LayoutTextFlipDemo from "@/components/layout-text-flip-demo";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-12 sm:py-16">
        {/* <header className="space-y-4">
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
        </header> */}

        <BackgroundLines className="flex flex-col items-center justify-center px-6 py-14 text-center sm:px-10 sm:py-20">
          <p className="mb-4 rounded-full border border-emerald-300/40 bg-emerald-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-200">
            Limited early access
          </p>
          <LayoutTextFlipDemo />
          <p className="mx-auto mt-2 max-w-2xl text-sm text-zinc-300 sm:text-lg">
            Join the waitlist to get priority access in your city and help shape
            the app that makes intentions clear from the first match.
          </p>
          <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-full border border-white/15 bg-black/45 px-5 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none"
            />
            <button
              type="button"
              className="h-12 rounded-full bg-emerald-400 px-7 text-sm font-semibold text-black transition hover:bg-emerald-300"
            >
              Get Early Access
            </button>
          </div>
          <p className="mt-4 text-xs text-zinc-400">
            No spam. Invite-only updates only.
          </p>
        </BackgroundLines>

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
