function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  target,
  rel,
}) {
  const baseClasses =
    'group inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-black transition-all duration-300'

  const variants = {
    primary:
      'bg-[#546b8c] text-white shadow-lg shadow-[#546b8c]/20 hover:-translate-y-0.5 hover:bg-[#435772] hover:shadow-xl hover:shadow-[#546b8c]/25',
    secondary:
      'border border-[#bcc7d4] bg-white/80 text-[#546b8c] shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-[#546b8c] hover:bg-white',
    light:
      'bg-white text-[#546b8c] shadow-lg shadow-black/10 hover:-translate-y-0.5 hover:bg-[#ebeef1]',
    outlineLight:
      'border border-white/35 bg-white/5 text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/12',
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  )
}

export default Button