import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

/* Placeholder project thumbnails — abstract website/device mockups.
   Swap for real project screenshots when available. */
const ROW_1 = [
  { name: 'CityView Digital', kind: 'site', accent: '#1f6feb', w: 460 },
  { name: 'Care Partners Australia', kind: 'photo', tint: '#c9ced4', accent: '#e8622a', w: 470 },
  { name: 'Australian Ghanaian Chamber of Commerce', kind: 'site', accent: '#e0a800', w: 500 },
  { name: 'WINSTAMAC', kind: 'device', accent: '#1f6feb', w: 430 },
  { name: 'Sababa Global Trade & Logistics', kind: 'photo', tint: '#2e5c86', accent: '#88b7e2', w: 480 },
]

const ROW_2 = [
  { name: 'Connect Support', kind: 'photo', tint: '#d6d2cd', accent: '#e8102a', w: 440 },
  { name: 'Onboard Plumbing', kind: 'site', accent: '#1e7fd4', w: 470 },
  { name: 'Janny Global', kind: 'site', accent: '#2563a8', w: 460 },
  { name: 'Down Under Graphics', kind: 'device', accent: '#e8102a', w: 440 },
  { name: 'Salaka Dance Ensemble', kind: 'site', accent: '#d97706', w: 480 },
  { name: 'Phytoscience Australia', kind: 'site', accent: '#2f7d32', w: 470 },
  { name: 'CarePlus Community', kind: 'photo', tint: '#e3ddd3', accent: '#c2410c', w: 460 },
]

const SiteMock = ({ accent }) => (
  <div className="absolute inset-0 bg-[#f4f4f6] p-4">
    <div className="flex h-9 items-center gap-2 rounded-md px-3" style={{ backgroundColor: accent }}>
      <span className="h-3.5 w-3.5 rounded-full bg-white/85" />
      <span className="h-2 w-14 rounded bg-white/45" />
      <div className="ml-auto hidden gap-2 sm:flex">
        <span className="h-1.5 w-7 rounded bg-white/55" />
        <span className="h-1.5 w-7 rounded bg-white/55" />
        <span className="h-1.5 w-7 rounded bg-white/55" />
      </div>
    </div>
    <div className="mt-3 rounded-lg px-4 py-5" style={{ backgroundColor: `${accent}22` }}>
      <div className="h-3.5 w-1/2 rounded bg-[#3f3f46]" />
      <div className="mt-2.5 h-2 w-3/4 rounded bg-[#71717a]" />
      <div className="mt-4 h-6 w-24 rounded-full" style={{ backgroundColor: accent }} />
    </div>
    <div className="mt-3 grid grid-cols-3 gap-3">
      {[0, 1, 2].map((i) => (
        <div key={i} className="h-14 rounded-md border border-[#e4e4e7] bg-white p-2">
          <div className="h-2 w-2/3 rounded bg-[#a1a1aa]" />
          <div className="mt-2 h-1.5 w-full rounded bg-[#d4d4d8]" />
          <div className="mt-1.5 h-1.5 w-4/5 rounded bg-[#d4d4d8]" />
        </div>
      ))}
    </div>
  </div>
)

const PhotoMock = ({ tint, accent }) => (
  <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${tint}, ${tint}cc)` }}>
    <div
      className="absolute -right-10 -top-12 h-44 w-44 rounded-full blur-3xl"
      style={{ backgroundColor: accent, opacity: 0.35 }}
    />
    <div className="absolute left-5 top-5 space-y-2">
      <div className="h-2.5 w-24 rounded bg-white/70" />
      <div className="h-2 w-16 rounded bg-white/45" />
    </div>
    <div className="absolute bottom-12 right-6 h-28 w-36 rounded-lg bg-white/25 ring-1 ring-white/40 backdrop-blur-[2px]" />
    <div className="absolute bottom-12 left-6 w-40 space-y-2">
      <div className="h-3 w-full rounded bg-white/75" />
      <div className="h-2 w-3/4 rounded bg-white/45" />
    </div>
  </div>
)

const DeviceMock = ({ accent }) => (
  <div className="absolute inset-0 flex items-center justify-center bg-[#e8e8ec]">
    <div className="relative w-[64%]">
      <div className="overflow-hidden rounded-t-lg border-[5px] border-b-0 border-[#1c1c20] bg-white shadow-xl">
        <div className="flex h-4 items-center justify-center border-b border-[#ececef]">
          <span className="h-1.5 w-10 rounded-full bg-[#d4d4d8]" />
        </div>
        <div className="m-2 h-14 rounded" style={{ backgroundColor: `${accent}33` }} />
        <div className="mx-2 mb-2 grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-5 rounded-sm bg-[#ececf0]" />
          ))}
        </div>
      </div>
      <div className="h-2 w-full rounded-b-lg bg-[#c4c4ca]" />
      <div className="absolute -bottom-2 right-[-7%] h-20 w-12 rounded-md border-2 border-[#1c1c20] bg-white p-1 shadow-lg">
        <div className="h-3 w-full rounded-sm bg-[#ececf0]" />
        <div className="mt-1 h-8 rounded-sm" style={{ backgroundColor: `${accent}40` }} />
      </div>
    </div>
  </div>
)

const ProjectCard = ({ name, kind, accent = '#1f6feb', tint = '#d4d4d8', w, seed }) => {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <div
      className="relative h-[270px] shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10"
      style={{ width: w }}
    >
      {/* Base layer — also the fallback if the random photo fails to load */}
      {kind === 'site' && <SiteMock accent={accent} />}
      {kind === 'photo' && <PhotoMock tint={tint} accent={accent} />}
      {kind === 'device' && <DeviceMock accent={accent} />}

      {seed && !imageFailed && (
        <img
          src={`https://picsum.photos/seed/${seed}/${w}/270`}
          alt={name}
          onError={() => setImageFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
      <span className="absolute bottom-4 left-5 right-5 text-[15px] font-semibold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
        {name}
      </span>
    </div>
  )
}

const CardList = ({ projects }) => (
  <div className="flex shrink-0 gap-5 pr-5">
    {projects.map((project) => (
      <ProjectCard key={project.name} {...project} />
    ))}
  </div>
)

const MarqueeRow = ({ projects, reverse = false }) => (
  <div
    className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
    style={{ animationDuration: reverse ? '70s' : '62s' }}
  >
    <CardList projects={projects} />
    <CardList projects={projects} />
  </div>
)

const ArrowUpRight = () => (
  <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M4.5 11.5 11.5 4.5m0 0H5.5m6 0v6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Projects = () => {
  const rowsRef = useRef(null)

  /* One random seed per card per page load — created once here so both
     marquee copies render the identical image and the loop stays seamless. */
  const [seededRows] = useState(() => {
    const withSeeds = (list) =>
      list.map((project) => ({
        ...project,
        seed: Math.random().toString(36).slice(2, 10),
      }))
    return { one: withSeeds(ROW_1), two: withSeeds(ROW_2) }
  })

  /* Scroll-velocity tilt: the rows lean while scrolling and settle
     straight at rest (matches the two screenshot states). */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = null
    let lastY = window.scrollY
    let current = 0
    let target = 0

    const loop = () => {
      const y = window.scrollY
      const velocity = y - lastY
      lastY = y
      target = Math.max(-7, Math.min(7, velocity * 0.3))
      current += (target - current) * 0.15

      if (rowsRef.current) {
        rowsRef.current.style.transform = `rotate(${current.toFixed(2)}deg)`
      }

      if (Math.abs(current) > 0.02 || Math.abs(target) > 0.02) {
        raf = requestAnimationFrame(loop)
      } else {
        current = 0
        if (rowsRef.current) rowsRef.current.style.transform = 'rotate(0deg)'
        raf = null
      }
    }

    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(loop)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf != null) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="projects" className="relative overflow-hidden bg-[#0a0a0b] pt-24 pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-[620px] text-[38px] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              Projects that
              <br className="hidden sm:block" /> speak for themselves.
            </h2>
            <p className="mt-6 max-w-[570px] text-[17px] leading-relaxed text-gray-400">
              A selection of recent websites, brand systems, and digital experiences for
              clients across Australia and beyond.
            </p>
          </div>

          <Link
            to="/projects"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/25 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/5"
          >
            See All Projects
            <ArrowUpRight />
          </Link>
        </div>
      </div>

      {/* Counter-scrolling project rows with scroll-velocity tilt */}
      <div ref={rowsRef} className="mt-24 space-y-5 will-change-transform">
        <MarqueeRow projects={seededRows.one} />
        <MarqueeRow projects={seededRows.two} reverse />
      </div>
    </section>
  )
}

export default Projects
