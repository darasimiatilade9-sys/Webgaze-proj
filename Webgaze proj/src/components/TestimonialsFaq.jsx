import { useState } from 'react'

/* Third testimonial is first-shown to match the screenshot state
   (WINSTAMAC / WM with the last progress bar active). */
const TESTIMONIALS = [
  {
    initials: 'CP',
    quote:
      'WebGaze rebuilt our website from the ground up and made the whole process simple. We finally have a site that reflects who we are — and the enquiries have followed.',
    name: 'Care Partners Australia',
    role: 'Digital Presence',
  },
  {
    initials: 'PS',
    quote:
      'The team listened first, then delivered a site that is fast, clear, and easy for us to update. Communication was sharp at every stage of the project.',
    name: 'Phytoscience Australia',
    role: 'Web & Branding',
  },
  {
    initials: 'WM',
    quote:
      'The level of craft and attention to detail was impressive. Our brand now feels cohesive and professional across every touchpoint.',
    name: 'WINSTAMAC',
    role: 'Brand & Design',
  },
]

const FAQS = [
  {
    q: 'What does WebGaze actually do?',
    a: "We're a web design, branding, and SEO studio. We design and build websites, create brand systems, and help Australian businesses get found online — practical work focused on real results, not vanity metrics.",
  },
  {
    q: 'How much does a website cost?',
    a: 'It depends on scope. A focused small-business site typically starts around a few thousand dollars, while larger custom builds are quoted per project. Tell us what you need and we\u2019ll send a clear, fixed proposal — no surprises.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Most projects take 4–8 weeks from kickoff to launch, depending on size and how quickly content and feedback come back. Larger or custom builds may take longer, and we\u2019ll set a realistic timeline before we start.',
  },
  {
    q: 'Can you redesign or improve an existing website?',
    a: 'Yes. We redesign existing sites for better clarity, speed, and conversion — keeping what already works, fixing what doesn\u2019t, and migrating your content carefully so nothing important is lost.',
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Yes. Our maintenance plans cover updates, security, performance checks, and small content changes so your site stays fast, secure, and up to date long after launch.',
  },
]

const Eyebrow = ({ children }) => (
  <div className="flex items-center gap-3">
    <span className="h-0.5 w-8 bg-[#e8102a]" />
    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#e8102a]">{children}</span>
  </div>
)

const TestimonialsFaq = () => {
  const [slide, setSlide] = useState(2)
  const [openFaq, setOpenFaq] = useState(null)
  const active = TESTIMONIALS[slide]

  return (
    <section className="bg-[#f6f6f7] py-24 text-[#111]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Testimonials */}
          <div id="testimonials">
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className="mt-6 text-[34px] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[50px]">
              What clients think.
            </h2>
            <p className="mt-5 max-w-[370px] text-[17px] leading-relaxed text-gray-600">
              Real outcomes for real businesses — built with strategy, clarity, and craft.
            </p>

            <div className="mt-10 rounded-2xl bg-[#ededee] p-8 sm:p-10">
              <div key={slide} className="animate-fade-in">
                <div className="mx-auto flex h-16 w-20 items-center justify-center rounded-xl bg-white text-xl font-bold text-[#111] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                  {active.initials}
                </div>
                <p className="mt-9 text-[21px] italic leading-[1.55] text-[#3f3f46]">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <div className="mt-8 border-t border-gray-300/70 pt-6">
                  <div className="text-sm font-bold text-[#111]">{active.name}</div>
                  <div className="mt-1 text-sm text-gray-500">{active.role}</div>
                </div>
              </div>
            </div>

            {/* Slide indicators */}
            <div className="mt-6 flex gap-2.5">
              {TESTIMONIALS.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setSlide(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-1 flex-1 rounded-full transition-colors duration-200 ${
                    i === slide ? 'bg-[#111]' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div id="faq">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-6 text-[34px] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[50px]">
              Questions, answered.
            </h2>
            <p className="mt-5 max-w-[380px] text-[17px] leading-relaxed text-gray-600">
              Can&apos;t find the answer you&apos;re looking for? Reach out directly — we&apos;re
              happy to help.
            </p>

            <div className="mt-10 border-b border-gray-200">
              {FAQS.map((faq, i) => {
                const isOpen = openFaq === i
                return (
                  <div key={faq.q} className="border-t border-gray-200">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className="text-[17px] font-medium text-[#111]">{faq.q}</span>
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-400 text-gray-600 transition-all duration-300 ${
                          isOpen ? 'rotate-45 border-[#e8102a] text-[#e8102a]' : ''
                        }`}
                      >
                        <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-5 pr-10 text-[15px] leading-relaxed text-gray-600">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <a
              href="mailto:hello@webgaze.com.au"
              className="mt-10 inline-flex rounded-full bg-[#e8102a] px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-white shadow-[0_10px_26px_rgba(232,16,42,0.35)] transition-all duration-200 hover:bg-[#ff1d36] hover:shadow-[0_14px_32px_rgba(232,16,42,0.5)]"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsFaq
