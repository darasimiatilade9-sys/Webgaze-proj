/* Placeholder client logos — simplified marks designed to match the
   colours/feel of the originals. Swap for real image assets later. */

const Viride = () => (
  <div className="flex items-center gap-2.5">
    <svg className="h-8 w-8 shrink-0" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M4 7h10l-5 18L4 7Z" fill="#2fa36b" />
      <path d="M15 7h9l-6 12-3-4 5-8h-5Z" fill="#1e4fd8" />
      <path d="M20 20l6-6 3 6-4 4h-5Z" fill="#7cc242" />
    </svg>
    <div className="leading-none">
      <div className="text-[17px] font-extrabold italic tracking-tight text-[#1e4fd8]">VIRIDE</div>
      <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-[#1e4fd8]/80">
        Energy Africa
      </div>
    </div>
  </div>
)

const Camden = () => (
  <div className="flex items-center gap-2.5">
    <svg className="h-8 w-8 shrink-0" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="11" stroke="#2f7d32" strokeWidth="4" strokeDasharray="46 24" transform="rotate(-40 16 16)" />
      <circle cx="16" cy="16" r="4.5" fill="#8bb03e" />
    </svg>
    <div className="leading-none">
      <div className="text-[16px] font-extrabold tracking-tight text-[#2f7d32]">CAMDEN</div>
      <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.22em] text-[#2f7d32]/75">
        Tire Recycle
      </div>
    </div>
  </div>
)

const CarePartners = () => (
  <div className="flex items-center gap-2.5">
    <svg className="h-8 w-8 shrink-0" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="13" cy="14" r="8" fill="#2b6cb0" />
      <circle cx="20" cy="18" r="8" fill="#e8622a" fillOpacity="0.9" />
      <circle cx="13" cy="14" r="3" fill="#ffffff" />
    </svg>
    <div className="leading-none">
      <div className="text-[14px] font-extrabold tracking-tight text-[#e8622a]">CARE PARTNERS</div>
      <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.3em] text-[#2b6cb0]">
        Australia
      </div>
    </div>
  </div>
)

const Agcci = () => (
  <div className="flex items-center gap-2.5">
    <svg className="h-8 w-8 shrink-0" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="11" stroke="#e8102a" strokeWidth="4.5" strokeDasharray="18 52" />
      <circle cx="16" cy="16" r="11" stroke="#f5b800" strokeWidth="4.5" strokeDasharray="18 52" transform="rotate(120 16 16)" />
      <circle cx="16" cy="16" r="11" stroke="#1e4fd8" strokeWidth="4.5" strokeDasharray="18 52" transform="rotate(240 16 16)" />
    </svg>
    <div className="leading-none">
      <div className="text-[17px] font-extrabold tracking-tight text-[#123a8f]">AGCCI</div>
      <div className="mt-1 text-[6.5px] font-semibold uppercase tracking-[0.08em] text-gray-500">
        Australian Chamber of Commerce
      </div>
    </div>
  </div>
)

const Salaka = () => (
  <div className="flex items-center gap-2.5">
    <svg className="h-8 w-8 shrink-0" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 3c6 5 7 12 1 24-6-12-5-19 1-24Z" fill="#e8871e" />
      <path d="M16 10c3 3 3.5 7 .5 13C13.5 17 14 13 16 10Z" fill="#f5c26b" />
    </svg>
    <div className="leading-none">
      <div className="text-[17px] font-bold tracking-tight text-[#e8871e]">Salaka</div>
      <div className="mt-1 text-[7px] font-semibold uppercase tracking-[0.16em] text-gray-500">
        Trade &amp; Invest
      </div>
    </div>
  </div>
)

const Nila = () => (
  <div className="flex items-center gap-2">
    <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="#c4c4c8" strokeWidth="2.5" />
      <circle cx="12" cy="12" r="3" fill="#c4c4c8" />
    </svg>
    <div className="text-[15px] font-semibold tracking-tight text-[#c4c4c8]">nila</div>
  </div>
)

const LOGOS = [Viride, Camden, CarePartners, Agcci, Salaka, Nila]

const LogoRow = () => (
  <div className="flex shrink-0 items-center gap-14 pr-14">
    {LOGOS.map((Logo, i) => (
      <div key={i} className="opacity-85 transition-opacity duration-200 hover:opacity-100">
        <Logo />
      </div>
    ))}
  </div>
)

const TrustedBy = () => {
  return (
    <section className="relative z-10 -mt-16 rounded-t-[40px] bg-white pt-10 pb-9">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 sm:px-6">
        <div className="hidden w-[150px] shrink-0 text-[10px] font-bold uppercase leading-[1.7] tracking-[0.12em] text-gray-400 md:block">
          Trusted by
          <br />
          organisations
          <br />
          across Australia
        </div>

        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="marquee-track flex w-max animate-marquee hover:[animation-play-state:paused]">
            <LogoRow />
            <LogoRow />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
