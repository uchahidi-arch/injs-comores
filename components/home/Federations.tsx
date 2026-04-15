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
      }}
      className="py-14 sm:py-20"
    >
      <div style={{ maxWidth: '1200px' }} className="mx-auto px-4 sm:px-10">
        <RevealOnScroll className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div
              style={{ fontSize: '10px', color: 'var(--vert)', letterSpacing: '0.18em' }}
              className="font-bold uppercase mb-2.5"
            >
              Registre national
            </div>
            <h2
              style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
              className="font-[family-name:var(--font-syne)] font-bold text-[clamp(26px,3vw,40px)] text-[var(--encre)] mb-3"
            >
              Fédérations affiliées à l&apos;INJS
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--fumee)', lineHeight: 1.7, maxWidth: '540px' }}>
              Fédérations sportives comoriennes reconnues par l&apos;État, sous tutelle du Ministère de la Jeunesse et des Sports.
            </p>
          </div>
          <Link
            href="/federations"
            style={{ color: 'var(--vert)', borderBottom: '1px solid var(--vert)', paddingBottom: '1px', letterSpacing: '0.03em' }}
            className="flex items-center gap-1.5 text-[12.5px] font-semibold no-underline self-start sm:self-auto flex-shrink-0"
          >
            Voir toutes <ArrowRight size={10} />
          </Link>
        </RevealOnScroll>

        <div
          style={{ background: 'var(--gris-2)', border: '1px solid var(--gris-2)', borderRadius: '8px', gap: '2px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden"
        >
          {federations.map((fed, i) => {
            const delay = ((i % 3) + 1) as 1 | 2 | 3
            return (
              <RevealOnScroll key={fed.code} delay={delay}>
                <Link
                  href={`/federations/${fed.slug}`}
                  style={{ padding: '24px' }}
                  className="block bg-white no-underline transition-colors hover:bg-[var(--vert-light)] h-full"
                >
                  <div className="flex items-center justify-between mb-4">
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
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '14px', fontSize: '10.5px', fontWeight: 600, color: 'var(--vert)' }}
                    >
                      <Check size={9} />
                      Engagée JIOI 2027
                    </div>
                  ) : (
                    <div
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '14px', fontSize: '10.5px', fontWeight: 600, color: 'var(--fumee)' }}
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
    </div>
  )
}
