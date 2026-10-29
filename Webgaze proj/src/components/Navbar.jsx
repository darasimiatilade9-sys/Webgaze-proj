import { useState } from 'react'
import Logo from './Logo.jsx'

/* --- Service icons (inline SVG, stroke-based) --- */
const LayoutIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <path d="M3 9h18" />
    <path d="M9 9v11" />
  </svg>
)

const CodeIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M8 7l-5 5 5 5" />
    <path d="M16 7l5 5-5 5" />
    <path d="M13.5 4l-3 16" />
  </svg>
)

const SeoIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="M16 16l5 5" />
    <path d="M7.5 13l2.5-2.5 2 2 3.5-3.5" />
  </svg>
)

const PenToolIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
)

const CpuIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
    <path d="M9 1v2M15 1v2M9 21v2M15 21v2M1 9h2M1 15h2M21 9h2M21 15h2" />
  </svg>
)

const ClipboardCheckIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="5" y="5" width="14" height="16" rx="2" />
    <path d="M9 5V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
    <path d="M9 13.5l2 2 4-4" />
  </svg>
)

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Web Design', href: '#services', icon: <LayoutIcon /> },
      { label: 'Web Development', href: '#services', icon: <CodeIcon /> },
      { label: 'SEO and Marketing', href: '#services', icon: <SeoIcon /> },
      { label: 'Brand Identity', href: '#services', icon: <PenToolIcon /> },
      {
        label: 'AI and Custom Business System',
        href: '#services',
        icon: <CpuIcon />,
      },
      {
        label: 'Consulting and Auditing',
        href: '#services',
        icon: <ClipboardCheckIcon />,
      },
    ],
  },
  { label: 'Projects', href: '#projects' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

const ChevronDown = () => (
  <svg
    className="h-3 w-3 opacity-70 transition-transform duration-200 group-hover/nav:rotate-180"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2.5 4.5 6 8l3.5-3.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Navbar = () => {
  const [active, setActive] = useState('Home')
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavigate = (label) => {
    setActive(label)
    setMobileOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#0a0a0b]/90 backdrop-blur-md">
      {/* faint decorative arcs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-40 h-[380px] w-[380px] rounded-full border border-white/[0.05]" />
        <div className="absolute left-10 -top-24 h-[260px] w-[260px] rounded-full border border-white/[0.04]" />
        <div className="absolute right-[22%] -top-56 h-[460px] w-[460px] rounded-full border border-white/[0.03]" />
      </div>

      <nav className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavigate('Home')}
          className="relative z-10 shrink-0"
        >
          <Logo />
        </a>

        {/* Center pill (desktop) */}
        <div className="hidden lg:block">
          <ul className="flex items-center rounded-full border border-white/10 bg-white/[0.03] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.label

              if (link.children) {
                return (
                  <li key={link.label} className="group/nav relative">
                    <a
                      href={link.href}
                      onClick={() => handleNavigate(link.label)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8102a]/60 ${
                        isActive
                          ? 'bg-[#e8102a] text-white shadow-[0_4px_16px_rgba(232,16,42,0.45)]'
                          : 'text-[#d4d4d8] hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.label}
                      <ChevronDown />
                    </a>

                    <ul className="invisible absolute left-1/2 top-full z-20 mt-3 w-80 -translate-x-1/2 space-y-1 rounded-2xl border border-black/10 bg-white p-2 opacity-0 shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition-all duration-200 group-hover/nav:visible group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:opacity-100">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            onClick={() => handleNavigate(link.label)}
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors duration-150 hover:bg-zinc-100 hover:text-black"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e8102a]/10 text-[#e8102a]">
                              {child.icon}
                            </span>
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              }

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => handleNavigate(link.label)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block cursor-pointer rounded-full px-2.5 py-1.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8102a]/60 ${
                      isActive
                        ? 'bg-[#e8102a] text-white shadow-[0_4px_16px_rgba(232,16,42,0.45)]'
                        : 'text-[#d4d4d8] hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        {/* CTA (desktop) */}
        <a
          href="#proposal"
          className="relative z-10 hidden shrink-0 rounded-full bg-[#e8102a] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(232,16,42,0.4)] transition-all duration-200 hover:bg-[#ff1d36] hover:shadow-[0_14px_36px_rgba(232,16,42,0.55)] sm:inline-flex"
        >
          Request a Proposal
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/5 lg:hidden"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute inset-x-0 top-full border-b border-white/10 bg-[#0a0a0b] px-5 pb-6 pt-2 shadow-[0_20px_40px_rgba(0,0,0,0.5)] lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.label
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => handleNavigate(link.label)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-[15px] font-medium transition-colors ${
                      isActive
                        ? 'bg-[#e8102a] text-white'
                        : 'text-[#d4d4d8] hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {link.children && <ChevronDown />}
                  </a>
                  {link.children && (
                    <ul className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-4">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            onClick={() => handleNavigate(link.label)}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-[#b9b9c0] hover:bg-white/5 hover:text-white"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#e8102a]/15 text-[#ff5b6e]">
                              {child.icon}
                            </span>
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>

          <a
            href="#proposal"
            onClick={() => setMobileOpen(false)}
            className="mt-4 flex justify-center rounded-full bg-[#e8102a] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(232,16,42,0.4)] sm:hidden"
          >
            Request a Proposal
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
