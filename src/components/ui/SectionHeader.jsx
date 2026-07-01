import Reveal from './Reveal'

function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <Reveal className={`max-w-3xl ${alignment}`}>
      <p
        className={`section-eyebrow ${
          light ? 'text-white/80' : 'text-[#546b8c]'
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`section-title mt-3 ${
          light ? 'text-white' : 'text-[#1f2937]'
        } ${align === 'center' ? 'mx-auto' : ''}`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`section-description mt-5 ${
            light ? 'text-white/75' : 'text-[#5f6b7a]'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}

export default SectionHeader