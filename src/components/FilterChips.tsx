export default function FilterChips({ active, onToggle }: {
  active: 'recent' | 'shared'
  onToggle: (v: 'recent' | 'shared') => void
}) {
  const chips: { key: 'recent' | 'shared'; label: string }[] = [
    { key: 'recent', label: '최근 본 대본' },
    { key: 'shared', label: '공유된 대본' },
  ]
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      {chips.map(({ key, label }) => {
        const color = active === key ? '#DD373D' : '#858F93'
        return (
          <button
            key={key}
            onClick={() => onToggle(key)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              padding: 10,
              borderRadius: 24,
              border: `1px solid ${color}`,
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            <span style={{
              fontFamily: 'Noto Sans KR',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '20px',
              letterSpacing: '0.2px',
              color,
            }}>
              {label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
