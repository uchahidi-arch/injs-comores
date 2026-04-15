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
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 'clamp(48px, 7vh, 80px) clamp(16px, 3vw, 40px)',
        }}
      >
        <RevealOnScroll>
          <div style={{ marginBottom: 'clamp(32px, 5vh, 48px)' }}>
            <div
              style={{ fontSize: '10px', color: 'var(--vert)', letterSpacing: '0.18em', marginBottom: '10px' }}
              className="font-bold uppercase"
            >
              Démarches officielles
            </div>
            <h2
              style={{ letterSpacing: '-0.02em', lineHeight: 1.1, fontSize: 'clamp(24px, 3.5vw, 40px)', marginBottom: '12px' }}
              className="font-[family-name:var(--font-syne)] font-bold text-[var(--encre)]"
            >
              Les services de l&apos;INJS
            </h2>
            <p style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: 'var(--fumee)', lineHeight: 1.7, maxWidth: '540px' }}>
              Toutes les démarches administratives sportives centralisées. Accessible depuis n&apos;importe quelle île des Comores.
            </p>
          </div>
        </RevealOnScroll>

        <div
          style={{
            background: 'var(--gris-2)',
            border: '1px solid var(--gris-2)',
            borderRadius: '8px',
            gap: '2px',
            display: 'grid',
          }}
          className="svc-grid"
        >
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon] ?? CalendarCheck
            const delay = ((i % 4) + 1) as 1 | 2 | 3 | 4
            return (
              <RevealOnScroll key={svc.num} delay={delay}>
                <Link
                  href={svc.href}
                  style={{ padding: 'clamp(24px, 3vw, 36px)', position: 'relative', display: 'block', height: '100%', textDecoration: 'none' }}
                  className="bg-white transition-colors hover:bg-[var(--vert-light)] group cursor-pointer"
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
                    style={{ fontSize: 'clamp(14px, 1.6vw, 17px)', lineHeight: 1.3, marginBottom: '8px' }}
                    className="font-[family-name:var(--font-syne)] font-bold text-[var(--encre)]"
                  >
                    {svc.title}
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--fumee)', lineHeight: 1.65, marginBottom: '16px' }}>
                    {svc.description}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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

      <style>{`
        .svc-grid { grid-template-columns: 1fr; }
        @media (min-width: 640px) {
          .svc-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </div>
  )
}
