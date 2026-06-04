const partners = ['CIO', 'COSIC', 'JIOI 2027', 'FIFA', 'FIDE', 'Ministère de la Jeunesse']

export default function Partners() {
  return (
    <section style={{ background: '#fff', borderBottom: '1px solid var(--gris-2)', padding: '32px 40px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '40px' }}>
        <div style={{
          fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em',
          color: 'var(--fumee)', fontFamily: 'var(--font-syne)',
          whiteSpace: 'nowrap', flexShrink: 0,
        }}>
          PARTENAIRES OFFICIELS
        </div>
        <div style={{ width: '1px', height: '20px', background: 'var(--gris-2)', flexShrink: 0 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
          {partners.map((p) => (
            <span key={p} style={{
              fontSize: '12px', fontWeight: 600, color: 'var(--gris-2)',
              fontFamily: 'var(--font-syne)', letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
