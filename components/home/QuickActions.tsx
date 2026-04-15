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
      <div
        style={{ maxWidth: '1200px', gap: '1px' }}
        className="mx-auto grid grid-cols-2 lg:grid-cols-4"
      >
        {items.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            style={{ padding: '20px 20px', background: 'var(--ivoire)' }}
            className="flex items-center gap-3 no-underline cursor-pointer transition-colors hover:bg-[var(--vert-light)] group"
          >
            <div
              style={{ width: '38px', height: '38px', background: 'var(--vert)', borderRadius: '6px' }}
              className="flex items-center justify-center flex-shrink-0"
            >
              <item.icon size={15} color="white" />
            </div>
            <div className="flex-1 min-w-0">
              <strong
                style={{ display: 'block', fontSize: '12.5px', color: 'var(--encre)', marginBottom: '2px' }}
                className="font-[family-name:var(--font-syne)] font-semibold leading-tight"
              >
                {item.label}
              </strong>
              <span style={{ fontSize: '11px', color: 'var(--fumee)' }}>{item.sub}</span>
            </div>
            <ChevronRight size={11} style={{ color: 'var(--gris-2)' }} className="ml-auto flex-shrink-0 transition-colors group-hover:text-[var(--vert)]" />
          </Link>
        ))}
      </div>
    </div>
  )
}
