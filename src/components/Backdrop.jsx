// Global ambient background: deep gradient, fading grid, aurora glow, noise.
export default function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-base-800" />
      {/* aurora glow top */}
      <div className="absolute -top-40 left-1/2 h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-grid-fade blur-2xl" />
      {/* secondary glow */}
      <div className="absolute right-[-12%] top-[28%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(91,157,255,0.10),transparent_70%)] blur-2xl" />
      <div className="absolute left-[-10%] top-[62%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.08),transparent_70%)] blur-2xl" />
      {/* fading grid */}
      <div className="grid-bg grid-bg-mask absolute inset-0 opacity-60" />
      {/* noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.5] mix-blend-soft-light" />
      {/* vignette bottom */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-base-900 to-transparent" />
    </div>
  )
}
