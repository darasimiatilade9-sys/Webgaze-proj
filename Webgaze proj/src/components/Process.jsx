const STEPS = [
  {
    n: '01',
    title: 'Discovery & Understanding',
    tagline: 'We listen before we act.',
    body: 'We get clear on your goals, your audience, and the context around the work — defining what success looks like before a single pixel moves.',
    tags: ['Kickoff Call', 'Goals', 'Research'],
  },
  {
    n: '02',
    title: 'Direction & Planning',
    tagline: 'We map the path forward.',
    body: 'With the picture in place, we set scope, priorities, and the practical steps to move — keeping everything aligned, realistic, and built for results.',
    tags: ['Scope', 'Sitemap', 'Timeline'],
  },
  {
    n: '03',
    title: 'Development & Refinement',
    tagline: 'We build and iterate.',
    body: 'Design, content, and systems are shaped through an iterative loop — focused on quality, consistency, and purpose at every stage.',
    tags: ['Design', 'Build', 'Feedback'],
  },
  {
    n: '04',
    title: 'Delivery & Implementation',
    tagline: 'We launch with confidence.',
    body: "We bring it together, run final checks, and hand over a site that's complete and ready to perform — with support so nothing slips.",
    tags: ['QA', 'Launch', 'Handover'],
  },
]

const Process = () => {
  return (
    <section id="process" className="relative overflow-hidden bg-[#131316] py-24">
      {/* corner red glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-28 -top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(232,16,42,0.2),transparent_65%)] blur-[60px]" />
        <div className="absolute -right-28 -top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(232,16,42,0.18),transparent_65%)] blur-[60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="h-0.5 w-8 bg-[#e8102a]" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#e8102a]">
            How we work
          </span>
        </div>

        {/* Header */}
        <div className="mt-7 grid gap-6 lg:grid-cols-2 lg:gap-16">
          <h2 className="max-w-[540px] text-[34px] font-bold leading-[1.08] tracking-tight text-white sm:text-[42px]">
            A process built for clarity, not chaos.
          </h2>
          <p className="max-w-[460px] text-[17px] leading-relaxed text-gray-400 lg:pt-2">
            From the first conversation to final delivery, every step is intentional — keeping
            you informed, on time, and confident in the outcome.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* connector line */}
          <span
            className="absolute left-0 right-0 top-[22px] hidden h-px bg-gradient-to-r from-white/15 via-white/10 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.n} className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#1a1a1d] text-[13px] font-bold text-[#e8102a] shadow-[0_0_0_6px_#131316]">
                  {step.n}
                </div>

                <h3 className="mt-7 text-[19px] font-bold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-semibold text-[#e8102a]">{step.tagline}</p>
                <p className="mt-4 text-[15px] leading-[1.65] text-gray-400">{step.body}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
