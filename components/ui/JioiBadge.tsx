export default function JioiBadge({ small = false }: { small?: boolean }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: small ? '6px' : '8px',
      background: 'var(--vert)',
      color: '#fff',
      fontFamily: 'var(--font-syne)',
      fontWeight: 700,
      fontSize: small ? '10px' : '11px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      padding: small ? '4px 10px' : '6px 14px',
      borderRadius: '4px',
    }}>
      <span style={{
        width: small ? '6px' : '7px',
        height: small ? '6px' : '7px',
        borderRadius: '50%',
        background: '#fff',
        opacity: 0.85,
        flexShrink: 0,
      }} />
      JIOI 2027
    </span>
  )
}
