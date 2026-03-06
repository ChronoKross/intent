type BackgroundLinesProps = {
  children: React.ReactNode;
  className?: string;
};

export function BackgroundLines({ children, className = "" }: BackgroundLinesProps) {
  return (
    <div className={`relative isolate overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 ${className}`}>
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]">
        <div
          className="absolute inset-[-50%] bg-[repeating-linear-gradient(100deg,transparent_0_42px,rgba(255,255,255,0.07)_42px_44px)] intent-lines-slow"
          aria-hidden="true"
        />
        <div
          className="absolute inset-[-60%] bg-[repeating-linear-gradient(80deg,transparent_0_64px,rgba(52,211,153,0.16)_64px_66px)] intent-lines-fast"
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.2),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(244,63,94,0.18),transparent_35%)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
