import { useMemo, useState } from 'react'
import { FILTERS, PROJECTS } from '../data/projects.js'

const ProjectCard = ({ project }) => {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <article className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-200 ring-1 ring-black/5">
        {/* Coloured fallback — also what shows while/if the preview fails to load */}
        <div
          className="absolute inset-0 flex items-end p-5"
          style={{
            background: `linear-gradient(135deg, ${project.accent}, ${project.accent}bb 55%, #18181b)`,
          }}
          aria-hidden="true"
        >
          <span className="text-2xl font-bold tracking-tight text-white/90">
            {project.name}
          </span>
        </div>

        {!imageFailed && (
          <img
            src={project.image}
            alt={`${project.name} — website preview`}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        )}
      </div>

      <h3 className="mt-5 text-[19px] font-semibold leading-snug tracking-tight text-zinc-900">
        {project.name}
      </h3>
      <p className="mt-1.5 text-[15px] text-zinc-500">{project.services.join(' · ')}</p>
    </article>
  )
}

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All')

  const visible = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(filter))),
    [filter],
  )

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0a0b] pt-[72px]">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -right-40 -top-52 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(232,16,42,0.30),transparent_65%)] blur-[80px]" />
          <div className="absolute -left-52 top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(232,16,42,0.14),transparent_65%)] blur-[80px]" />
          <div className="absolute left-[38%] top-0 h-full w-px bg-white/[0.05]" />
          <div className="absolute left-0 top-[72%] h-px w-[55%] bg-white/[0.05]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-20">
          <h1 className="text-[56px] font-bold leading-[0.95] tracking-tight text-white sm:text-8xl lg:text-[112px]">
            Our Work
          </h1>
          <p className="mt-8 max-w-[430px] text-[17px] leading-relaxed text-gray-400">
            Selected websites, brands, and digital systems built for businesses across
            Australia.
          </p>
        </div>
      </section>

      {/* Selected work grid */}
      <section id="projects" className="bg-[#f4f3f1] pb-24 pt-16 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-zinc-900">
                Selected Work
              </span>
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                {visible.length} {visible.length === 1 ? 'Project' : 'Projects'}
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter projects">
              {FILTERS.map((option) => {
                const isActive = filter === option
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFilter(option)}
                    aria-pressed={isActive}
                    className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8102a]/50 ${
                      isActive
                        ? 'bg-[#e8102a] text-white shadow-[0_8px_20px_rgba(232,16,42,0.35)]'
                        : 'border border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400 hover:text-zinc-900'
                    }`}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          </div>

          <hr className="mt-8 border-zinc-300/70" />

          <div
            key={filter}
            className="animate-fade-in mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {visible.length === 0 && (
            <p className="mt-16 text-center text-[15px] text-zinc-500">
              No projects in this category yet — try another filter.
            </p>
          )}
        </div>
      </section>
    </main>
  )
}

export default ProjectsPage
