import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import useHashLink from '../lib/useHashLink.js'

const SERVICE_LINKS = [
  { label: 'Website Design & Development', href: '#services' },
  { label: 'AI & Custom Business Systems', href: '#services' },
  { label: 'Website Maintenance', href: '#services' },
  { label: 'Search Engine Optimisation', href: '#services' },
  { label: 'Visual Branding', href: '#services' },
  { label: 'Consulting & Audit', href: '#services' },
]

const COMPANY_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Insights', href: '#insights' },
]

const ColumnHeading = ({ children }) => (
  <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500">{children}</h3>
)

const LinkedInIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H10V9z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const XIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
  </svg>
)

const ArrowRight = () => (
  <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2.5 8h11m0 0L9.5 4m4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Footer = () => {
  const handleHash = useHashLink()

  return (
    <footer className="bg-[#0c0c0e] pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.15fr]">
          {/* Brand */}
          <div>
            <a href="#home" onClick={(event) => handleHash(event, '#home')} className="inline-block">
              <Logo />
            </a>
            <p className="mt-6 max-w-[280px] text-[15px] leading-relaxed text-gray-400">
              Building high-performance websites, AI-assisted custom systems, and practical
              digital tools for growing businesses.
            </p>
            <div className="mt-7 flex gap-3">
              {[
                { label: 'LinkedIn', Icon: LinkedInIcon },
                { label: 'Instagram', Icon: InstagramIcon },
                { label: 'X', Icon: XIcon },
              ].map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-colors duration-200 hover:border-white/40 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <nav>
            <ColumnHeading>Services</ColumnHeading>
            <ul className="mt-6 space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(event) => handleHash(event, link.href)}
                    className="text-[15px] text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav>
            <ColumnHeading>Company</ColumnHeading>
            <ul className="mt-6 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="text-[15px] text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(event) => handleHash(event, link.href)}
                      className="text-[15px] text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Get in touch */}
          <div>
            <ColumnHeading>Get in Touch</ColumnHeading>
            <ul className="mt-6 space-y-3">
              <li>
                <a href="tel:0422169233" className="text-[15px] text-gray-300 transition-colors duration-200 hover:text-white">
                  0422 169 233
                </a>
              </li>
              <li>
                <a href="mailto:hello@webgaze.com.au" className="text-[15px] text-gray-300 transition-colors duration-200 hover:text-white">
                  hello@webgaze.com.au
                </a>
              </li>
            </ul>

            <div className="mt-7">
              <ColumnHeading>Newsletter</ColumnHeading>
              <form
                className="mt-4 flex gap-3"
                onSubmit={(event) => event.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  aria-label="Your email"
                  className="h-11 min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-5 text-sm text-white outline-none transition-colors duration-200 placeholder:text-gray-500 focus:border-white/30"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8102a] text-white transition-all duration-200 hover:bg-[#ff1d36] hover:shadow-[0_8px_20px_rgba(232,16,42,0.45)]"
                >
                  <ArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-[13px] text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 WebGaze PTY LTD. All rights reserved. ABN 53 694 048 158</p>
          <div className="flex flex-wrap gap-8">
            <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-white">
              Terms &amp; Conditions
            </a>
            <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-white">
              Privacy &amp; Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
