import Link from 'next/link'
import { Check, Clock, ArrowRight } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { federations } from '@/lib/data/federations'

export default function Federations() {
  return (
    <div
      id="federations"
      style={{
        background: 'var(--ivoire)',
        borderTop: '1px solid var(--gris-2)',
        borderBottom: '1px solid var(--gris-2)',
        padding: 'clamp(48px, 7vh, 80px) 0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(16px, 3vw, 40px)',
        }}
      >
        <RevealOnScroll>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '16px',
              marginBottom: 'clamp(32px, 5vh, 48px)',
            }}
          >
            <div>
              <div
                style={{ fontSize: '10px', color: 'var(--vert)', letterSpacing: '0.18em', marginBottom: '10px' }}
                className="font-bold uppercase"
              >
                Registre national
              </div>
              <h2
                style={{ letterSpacing: '-0.02em', lineHeight: 1.1, fontSize: 'clamp(24px, 3.5vw, 40px)', marginBottom: '12px' }}
                className="font-[family-name:var(--font-syne)] font-bold text-[var(--encre)]"
              >
                Fédérations affiliées à l&apos;INJS
              </h2>
              <p style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: 'var(--fumee)', lineHeight: 1.7, maxWidth: '540px' }}>
                Fédérations sportives comoriennes reconnues par l&apos;État, sous tutelle du Ministère de la Jeunesse et des Sports.
              </p>
            </div>
            <Link
              href="/federations"
              style={{
                color: 'var(--vert)',
                borderBottom: '1px solid var(--vert)',
                paddingBottom: '1px',
                letterSpacing: '0.03em',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12.5px',
                fontWeight: 600,
                textDecoration: 'none',
                flexShrink: 0,
              }}
            >
              Voir toutes <ArrowRight size={10} />
            </Link>
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
          className="fed-grid"
        >
          {federations.map((fed, i) => {
            const delay = ((i % 3) + 1) as 1 | 2 | 3
            return (
              <RevealOnScroll key={fed.code} delay={delay}>
                <Link
                  href={`/federations/${fed.slug}`}
                  style={{ padding: 'clamp(20px, 2.5vw, 28px)', display: 'block', textDecoration: 'none', height: '100%' }}
                  className="bg-white transition-colors hover:bg-[var(--vert-light)]"
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 800,
                        color: 'var(--vert)',
                        background: 'var(--vert-light)',
                        padding: '3px 8px',
                        borderRadius: '3px',
                        letterSpacing: '0.08em',
                      }}
                      className="font-[family-name:var(--font-syne)]"
                    >
                      {fed.code}
                    </span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '10.5px',
                        fontWeight: 600,
                        color: fed.status === 'ok' ? '#166534' : '#92400E',
                      }}
                    >
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: fed.status === 'ok' ? '#16A34A' : '#D97706',
                          display: 'inline-block',
                        }}
                      />
                      {fed.status === 'ok' ? 'Certifiée' : 'En cours'}
                    </span>
                  </div>

                  <div
                    style={{ fontSize: '14px', lineHeight: 1.3, marginBottom: '6px' }}
                    className="font-[family-name:var(--font-syne)] font-semibold text-[var(--encre)]"
                  >
                    {fed.name}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--fumee)' }}>{fed.disciplines}</div>

                  {fed.jioi ? (
                    <div
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '12px', fontSize: '10.5px', fontWeight: 600, color: 'var(--vert)' }}
                    >
                      <Check size={9} />
                      Engagée JIOI 2027
                    </div>
                  ) : (
                    <div
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '12px', fontSize: '10.5px', fontWeight: 600, color: 'var(--fumee)' }}
                    >
                      <Clock size={9} />
                      En attente de certification
                    </div>
                  )}
                </Link>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>

      <style>{`
        .fed-grid { grid-template-columns: 1fr; }
        @media (min-width: 640px) {
          .fed-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .fed-grid { grid-template-columns: 1fr 1fr 1fr; }
        }
      `}</style>
    </div>
  )
}
