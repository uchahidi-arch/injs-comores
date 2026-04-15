import { Medal, Flag, Globe, CircleDot, Crown, Building2 } from 'lucide-react'

const partners = [
  { icon: Medal, name: 'CIO' },
  { icon: Flag, name: 'COSIC' },
  { icon: Globe, name: 'JIOI 2027' },
  { icon: CircleDot, name: 'FIFA' },
  { icon: Crown, name: 'FIDE' },
  { icon: Building2, name: 'Ministère' },
]

export default function Partners() {
  return (
    <div
      style={{
        borderTop: '1px solid var(--gris-2)',
        borderBottom: '1px solid var(--gris-2)',
        background: 'var(--ivoire)',
        padding: '0 clamp(16px, 3vw, 40px)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          gap: '0',
        }}
      >
        <div
          style={{
            fontSize: '9.5px',
            color: 'var(--fumee)',
            letterSpacing: '0.14em',
            paddingRight: '20px',
            borderRight: '1px solid var(--gris-2)',
            whiteSpace: 'nowrap',
            fontWeight: 700,
            flexShrink: 0,
            textTransform: 'uppercase',
          }}
          className="partners-label"
        >
          Partenaires officiels
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(16px, 3vw, 32px)',
            paddingLeft: 'clamp(12px, 2vw, 32px)',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          }}
        >
          {partners.map((p) => (
            <div
              key={p.name}
              style={{ opacity: 0.4, flexShrink: 0, display: 'flex', alignItems: 'center', gap: '6px' }}
              className="transition-opacity hover:opacity-70"
            >
              <div
                style={{ width: '26px', height: '26px', background: 'var(--gris-2)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <p.icon size={12} style={{ color: 'var(--fumee)' }} />
              </div>
              <span
                style={{ fontSize: '11px', fontWeight: 700, color: 'var(--fumee)', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}
              >
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .partners-label { display: none; }
        @media (min-width: 640px) {
          .partners-label { display: block; }
        }
      `}</style>
    </div>
  )
}
