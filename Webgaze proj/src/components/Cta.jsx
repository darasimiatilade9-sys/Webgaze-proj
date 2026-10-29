const ArrowRight = () => (
  <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2.5 8h11m0 0L9.5 4m4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Cta = () => {
  return (
    <section id="proposal" className="relative overflow-hidden border-b border-white/10 bg-[#0c0c0e] pt-20 pb-16">
      {/* faint red glow, top-right */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(232,16,42,0.22),transparent_65%)] blur-[60px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-9 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-6 bg-[#e8102a]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#e8102a]">
              No pressure. Just next steps.
            </span>
          </div>
          <h2 className="mt-4 max-w-[540px] text-[30px] font-bold leading-[1.15] tracking-tight sm:text-[36px]">
            Let&apos;s build something that{' '}
            <span className="text-gray-500">earns its keep.</span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#e8102a] px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-white shadow-[0_12px_30px_rgba(232,16,42,0.4)] transition-all duration-200 hover:bg-[#ff1d36] hover:shadow-[0_16px_38px_rgba(232,16,42,0.55)]"
          >
            Request a Proposal
            <ArrowRight />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/5"
          >
            Book Discovery Call
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Cta
