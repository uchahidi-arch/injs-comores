import RepBar from '@/components/layout/RepBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { federations } from '@/lib/data/federations'
import { Check, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fédérations sportives · INJS Comores',
  description: "Registre national des fédérations sportives comoriennes reconnues par l'État.",
}

export default function FederationsPage() {
  return (
    <>
      <RepBar />
      <Navbar />
      <main>
        {/* Page header */}
        <div style={{ background: 'var(--ivoire)', borderBottom: '1px solid var(--gris-2)', padding: '60px 40px' }}>
          <div style={{ maxWidth: '1200px' }} className="mx-auto">
            <div style={{ fontSize: '10px', color: 'var(--vert)', letterSpacing: '0.18em' }} className="font-bold uppercase mb-3">
              Registre national
            </div>
            <h1
              style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
              className="font-[family-name:var(--font-syne)] font-bold text-[clamp(32px,4vw,52px)] text-[var(--encre)] mb-4"
            >
              Fédérations affiliées à l&apos;INJS
            </h1>
            <p style={{ fontSize: '16px', color: 'var(--fumee)', lineHeight: 1.7, maxWidth: '600px' }}>
              Fédérations sportives comoriennes reconnues par l&apos;État, sous tutelle du Ministère de la Jeunesse et des Sports.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div style={{ maxWidth: '1200px', padding: '60px 40px' }} className="mx-auto">
          <div
            style={{ background: 'var(--gris-2)', border: '1px solid var(--gris-2)', borderRadius: '8px', gap: '2px' }}
            className="grid grid-cols-3 overflow-hidden"
          >
            {federations.map((fed) => (
              <Link
                key={fed.code}
                href={`/federations/${fed.slug}`}
                style={{ padding: '28px' }}
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
                <div style={{ fontSize: '12px', color: 'var(--fumee)', marginBottom: '14px' }}>{fed.disciplines}</div>
                {fed.jioi ? (
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10.5px', fontWeight: 600, color: 'var(--vert)' }}>
                    <Check size={9} /> Engagée JIOI 2027
                  </div>
                ) : (
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10.5px', fontWeight: 600, color: 'var(--fumee)' }}>
                    <Clock size={9} /> En attente de certification
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
