import { useEffect, useRef } from 'react'

const SERVICES = [
  {
    title: 'Web Design & Development',
    body: 'At WebGaze, we design and build websites that work for your business. Every site is carefully designed and built to help your brand stand out, perform well online, and connect with the right audience.',
    tags: ['React.js', 'E-Commerce', 'WordPress'],
  },
  {
    title: 'AI & Custom Business Systems',
    body: 'We build custom tools, internal apps, automations, and AI-assisted systems that solve real business problems — from tracking work to managing learning, chats, records, and daily operations.',
    tags: ['AI Tools', 'Automation', 'Custom Apps'],
  },
  {
    title: 'Visual Branding',
    body: 'Visual branding is how people recognise your brand. We create cohesive brand visuals — from logos to colour systems — that help your business stand out, stay consistent, and connect with the right audience.',
    tags: ['Graphic Design', 'Logo Design', 'Brand Guide'],
  },
  {
    title: 'Website Maintenance',
    body: 'Every website needs ongoing maintenance to stay secure, fast, and up to date. Regular care helps prevent issues and ensures a smooth experience for your visitors, so your site keeps performing at its best.',
    tags: ['Security', 'Performance', 'Support'],
  },
]

const ArrowRight = ({ className = 'h-3.5 w-3.5' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2.5 8h11m0 0L9.5 4m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Services = () => {
  const cardRefs = useRef([])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = null

    const update = () => {
      frame = null
      const cards = cardRefs.current.filter(Boolean)

      if (!desktop.matches || reducedMotion.matches) {
        cards.forEach((card) => {
          const inner = card.firstElementChild
          if (inner) {
            inner.style.transform = ''
            inner.style.opacity = ''
          }
        })
        return
      }

      cards.forEach((card, i) => {
        const next = cards[i + 1]
        const inner = card.firstElementChild
        if (!inner) return

        if (!next) {
          inner.style.transform = 'none'
          inner.style.opacity = '1'
          return
        }

        // How much of this card the next card has rolled over (0 → 1)
        const rect = card.getBoundingClientRect()
        const nextTop = next.getBoundingClientRect().top
        const coverage = Math.min(Math.max((rect.bottom - nextTop) / rect.height, 0), 1)

        inner.style.transform = `scale(${(1 - 0.04 * coverage).toFixed(4)})`
        inner.style.opacity = String(1 - 0.35 * coverage)
      })
    }

    const onScroll = () => {
      if (frame == null) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    desktop.addEventListener('change', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      desktop.removeEventListener('change', onScroll)
      if (frame != null) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section id="services" className="bg-[#f6f6f7] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — sticky intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-[34px] font-bold leading-[1.08] tracking-tight text-[#111] sm:text-5xl lg:text-[52px]">
              Everything You Need to Build a Strong Online Presence
            </h2>
            <p className="mt-6 max-w-[470px] text-[17px] leading-relaxed text-gray-600">
              From strategy and design to optimisation and ongoing support, our services work
              together to help your business grow online — with clarity and confidence at every
              step.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-[#e8102a] px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-white shadow-[0_10px_26px_rgba(232,16,42,0.35)] transition-all duration-200 hover:bg-[#ff1d36] hover:shadow-[0_14px_32px_rgba(232,16,42,0.5)]"
              >
                Contact Us
              </a>
              <a
                href="#proposal"
                className="inline-flex items-center rounded-full border border-[#111]/70 px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-[#111] transition-colors duration-200 hover:bg-[#111] hover:text-white"
              >
                Request a Proposal
              </a>
            </div>
          </div>

          {/* Right — stacking cards */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {SERVICES.map((service, i) => (
              <article
                key={service.title}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                className="lg:sticky"
                style={{ top: `calc(6.5rem + ${i} * 14px)` }}
              >
                <div className="origin-top rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_12px_34px_rgba(17,17,17,0.06)] md:p-9">
                  <h3 className="text-[22px] font-semibold tracking-tight text-[#111]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-gray-600">{service.body}</p>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-gray-300 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-6">
                    <a
                      href="#services"
                      className="group inline-flex items-center gap-2 rounded-full border border-[#111]/80 px-5 py-2.5 text-sm font-medium text-[#111] transition-colors duration-200 hover:bg-[#111] hover:text-white"
                    >
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </a>
                    <a
                      href="#projects"
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-[#111] transition-colors duration-200 hover:text-[#e8102a]"
                    >
                      View Our Work
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
