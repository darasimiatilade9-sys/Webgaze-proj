const ArrowRight = () => (
  <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2.5 8h11m0 0L9.5 4m4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowDown = () => (
  <svg className="h-4 w-4 animate-bounce text-gray-500" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 2.5v11m0 0L4.5 10m3.5 3.5L11.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Rings = ({ className, count = 7, step = 90 }) => (
  <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]"
        style={{ width: (i + 1) * step, height: (i + 1) * step }}
      />
    ))}
  </div>
)

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0a0a0b] pt-[72px]">
      {/* Background decor */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* red glow */}
        <div className="absolute -left-32 -top-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(232,16,42,0.32),transparent_65%)] blur-[70px]" />
        {/* grid lines */}
        <div className="absolute left-[25%] top-0 h-full w-px bg-white/[0.06]" />
        <div className="absolute left-[47%] top-0 h-full w-px bg-white/[0.06]" />
        <div className="absolute left-0 top-[38%] h-px w-[60%] bg-white/[0.06]" />
        {/* radar clusters */}
        <Rings className="-left-28 -top-36 h-[660px] w-[660px]" count={7} step={95} />
        <Rings className="-left-40 bottom-[-140px] h-[440px] w-[440px]" count={5} step={88} />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[640px] max-w-7xl flex-col justify-center px-4 pb-44 pt-16 sm:px-6 lg:min-h-[720px]">
        <div className="ml-auto w-full max-w-[800px] text-center">
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[72px]">
            We build modern brands
            <br className="hidden sm:block" /> and digital experiences
          </h1>

          <h2 className="mt-7 text-2xl font-bold tracking-tight sm:text-3xl lg:text-[42px]">
            <span className="text-gray-400">Designed to </span>
            <span className="text-[#e8102a]">deliver result</span>
          </h2>

          <p className="mx-auto mt-10 max-w-[560px] text-left text-[17px] leading-relaxed text-gray-400">
            A strategic web design, branding, and SEO studio creating clear, practical work
            that helps Australian businesses grow.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:justify-end">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#e8102a] px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-white shadow-[0_12px_30px_rgba(232,16,42,0.4)] transition-all duration-200 hover:bg-[#ff1d36] hover:shadow-[0_16px_38px_rgba(232,16,42,0.55)]"
            >
              Start a Project
              <ArrowRight />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/5"
            >
              See Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex" aria-hidden="true">
        <span className="text-[11px] font-semibold tracking-[0.3em] text-gray-500">SCROLL</span>
        <ArrowDown />
      </div>
    </section>
  )
}

export default Hero
