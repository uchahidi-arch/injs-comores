import Link from 'next/link'
import { CalendarCheck, GraduationCap, ShieldCheck, Flag, ChevronRight } from 'lucide-react'

const items = [
  {
    icon: CalendarCheck,
    label: 'Réserver un terrain',
    sub: 'Planning en temps réel',
    href: '/services/infrastructure',
  },
  {
    icon: GraduationCap,
    label: 'Formations INJS',
    sub: 'Calendrier des stages',
    href: '/services/formations',
  },
  {
    icon: ShieldCheck,
    label: 'Vérifier une licence',
    sub: "Contrôle d'authenticité",
    href: '/services/licences',
  },
  {
    icon: Flag,
    label: 'Bénévolat JIOI 2027',
    sub: 'Recrutement ouvert',
    href: '/jioi',
  },
]

export default function QuickActions() {
  return (
    <div style={{ borderBottom: '1px solid var(--gris-2)', background: 'var(--gris-2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gap: '1px' }} className="qa-grid">
        {items.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            style={{
              padding: 'clamp(16px, 2vw, 24px) clamp(16px, 2.5vw, 28px)',
              background: 'var(--ivoire)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            className="transition-colors hover:bg-[var(--vert-light)] group"
          >
            <div
              style={{ width: '38px', height: '38px', background: 'var(--vert)', borderRadius: '6px', flexShrink: 0 }}
              className="flex items-center justify-center"
            >
              <item.icon size={15} color="white" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <strong
                style={{ display: 'block', fontSize: '13px', color: 'var(--encre)', marginBottom: '2px', lineHeight: 1.3 }}
                className="font-[family-name:var(--font-syne)] font-semibold"
              >
                {item.label}
              </strong>
              <span style={{ fontSize: '11px', color: 'var(--fumee)' }}>{item.sub}</span>
            </div>
            <ChevronRight
              size={11}
              style={{ color: 'var(--gris-2)', flexShrink: 0 }}
              className="transition-colors group-hover:text-[var(--vert)]"
            />
          </Link>
        ))}
      </div>

      <style>{`
        .qa-grid { grid-template-columns: 1fr 1fr; }
        @media (min-width: 900px) {
          .qa-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </div>
  )
}
