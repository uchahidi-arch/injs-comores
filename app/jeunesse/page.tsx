import RepBar from '@/components/layout/RepBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jeunesse · INJS Comores',
  description: "Programmes d'engagement, de formation et d'insertion des jeunes comoriens.",
}

export default function JeunessePage() {
  return (
    <>
      <RepBar />
      <Navbar />
      <main>
        <div style={{ background: 'var(--ivoire)', borderBottom: '1px solid var(--gris-2)', padding: '60px 40px' }}>
          <div style={{ maxWidth: '1200px' }} className="mx-auto">
            <div style={{ fontSize: '10px', color: 'var(--vert)', letterSpacing: '0.18em' }} className="font-bold uppercase mb-3">
              Pôle Jeunesse — INJS
            </div>
            <h1
              style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
              className="font-[family-name:var(--font-syne)] font-bold text-[clamp(32px,4vw,52px)] text-[var(--encre)] mb-4"
            >
              La jeunesse comorienne,<br />actrice du changement
            </h1>
            <p style={{ fontSize: '16px', color: 'var(--fumee)', lineHeight: 1.7, maxWidth: '600px' }}>
              L&apos;INJS organise l&apos;engagement, la formation et l&apos;insertion des jeunes comoriens de 16 à 30 ans.
            </p>
          </div>
        </div>
        <div style={{ maxWidth: '1200px', padding: '60px 40px' }} className="mx-auto">
          <p style={{ color: 'var(--fumee)', fontSize: '15px' }}>Contenu de la page Jeunesse — à développer.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
