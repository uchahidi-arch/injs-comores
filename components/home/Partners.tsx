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
      style={{ borderTop: '1px solid var(--gris-2)', borderBottom: '1px solid var(--gris-2)', background: 'var(--ivoire)' }}
      className="px-4 sm:px-10"
    >
      <div style={{ maxWidth: '1200px' }} className="mx-auto flex items-center h-14 sm:h-16 gap-0">
        <div
          style={{
            fontSize: '9.5px',
            color: 'var(--fumee)',
            letterSpacing: '0.16em',
            paddingRight: '20px',
            borderRight: '1px solid var(--gris-2)',
            whiteSpace: 'nowrap',
          }}
          className="font-bold uppercase flex-shrink-0 hidden sm:block"
        >
          Partenaires officiels
        </div>
        <div
          style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}
          className="flex items-center gap-6 sm:gap-8 sm:pl-8 w-full"
        >
          {partners.map((p) => (
            <div
              key={p.name}
              style={{ opacity: 0.4 }}
              className="flex items-center gap-1.5 flex-shrink-0 transition-opacity hover:opacity-70"
            >
              <div
                style={{ width: '26px', height: '26px', background: 'var(--gris-2)', borderRadius: '4px' }}
                className="flex items-center justify-center"
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
    </div>
  )
}
