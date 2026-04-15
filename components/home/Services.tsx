import Link from 'next/link'
import { CalendarCheck, GraduationCap, IdCard, FileCheck, ArrowRight } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { services } from '@/lib/data/services'

const iconMap: Record<string, React.ElementType> = {
  CalendarCheck,
  GraduationCap,
  IdCard,
  FileShield: FileCheck,
}

export default function Services() {
  return (
    <div id="services">
      <div style={{ maxWidth: '1200px' }} className="mx-auto px-4 sm:px-10 py-14 sm:py-20">
        <RevealOnScroll className="flex items-end justify-between mb-10 sm:mb-12">
          <div>
            <div
              style={{ fontSize: '10px', color: 'var(--vert)', letterSpacing: '0.18em' }}
              className="font-bold uppercase mb-2.5"
            >
              Démarches officielles
            </div>
            <h2
              style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
              className="font-[family-name:var(--font-syne)] font-bold text-[clamp(26px,3vw,40px)] text-[var(--encre)] mb-3"
            >
              Les services de l&apos;INJS
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--fumee)', lineHeight: 1.7, maxWidth: '540px' }}>
              Toutes les démarches administratives sportives centralisées. Accessible depuis n&apos;importe quelle île des Comores.
            </p>
          </div>
        </RevealOnScroll>

        <div
          style={{ background: 'var(--gris-2)', border: '1px solid var(--gris-2)', borderRadius: '8px', gap: '2px' }}
          className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden"
        >
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon] ?? CalendarCheck
            const delay = ((i % 4) + 1) as 1 | 2 | 3 | 4
            return (
              <RevealOnScroll key={svc.num} delay={delay}>
                <Link
                  href={svc.href}
                  style={{ padding: '28px', position: 'relative' }}
                  className="block bg-white no-underline transition-colors hover:bg-[var(--vert-light)] group cursor-pointer h-full sm:p-9"
                >
                  <div
                    style={{ fontSize: '9.5px', color: 'var(--fumee)', letterSpacing: '0.12em', marginBottom: '16px' }}
                    className="font-[family-name:var(--font-syne)] font-bold uppercase"
                  >
                    {svc.num} — {svc.category}
                  </div>
                  <div
                    style={{ width: '44px', height: '44px', background: 'var(--vert-light)', borderRadius: '8px', marginBottom: '14px' }}
                    className="flex items-center justify-center"
                  >
                    <Icon size={18} style={{ color: 'var(--vert)' }} />
                  </div>
                  <div
                    style={{ fontSize: '16px', lineHeight: 1.3, marginBottom: '8px' }}
                    className="font-[family-name:var(--font-syne)] font-bold text-[var(--encre)]"
                  >
                    {svc.title}
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--fumee)', lineHeight: 1.65, marginBottom: '16px' }}>
                    {svc.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '10.5px',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: '3px',
                        background: svc.status === 'live' ? 'var(--vert-light)' : '#FEF9C3',
                        color: svc.status === 'live' ? 'var(--vert)' : '#854D0E',
                      }}
                    >
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'currentColor', display: 'inline-block', flexShrink: 0 }} />
                      {svc.statusLabel}
                    </span>
                    <ArrowRight
                      size={13}
                      style={{ color: 'var(--gris-2)' }}
                      className="transition-colors group-hover:text-[var(--vert)]"
                    />
                  </div>
                </Link>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </div>
  )
}
