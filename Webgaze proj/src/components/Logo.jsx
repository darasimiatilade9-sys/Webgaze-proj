const Logo = ({ className = '' }) => (
  <span className={`inline-block text-[28px] font-semibold leading-none tracking-tight ${className}`}>
    <span className="relative text-[#e8102a]">
      <span className="absolute -top-[6px] left-[3px] block h-[5px] w-[5px] rounded-full bg-[#e8102a]" />
      W
    </span>
    <span className="text-white">ebgaze</span>
  </span>
)

export default Logo
