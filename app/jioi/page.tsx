import RepBar from '@/components/layout/RepBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JIOI 2027 · INJS Comores',
  description: "Les Comores accueillent les Jeux des Îles de l'Océan Indien en 2027.",
}

export default function JioiPage() {
  return (
    <>
      <RepBar />
      <Navbar />
      <main>
        <div style={{ background: 'var(--rouge)', padding: '60px 40px' }}>
          <div style={{ maxWidth: '1200px' }} className="mx-auto">
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.18em' }} className="font-bold uppercase mb-3">
              Jeux des Îles de l&apos;Océan Indien
            </div>
            <h1
              style={{ letterSpacing: '-0.02em', lineHeight: 1.1, color: 'white' }}
              className="font-[family-name:var(--font-syne)] font-bold text-[clamp(32px,4vw,52px)] mb-4"
            >
              JIOI 2027 — Moroni, Comores
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: '600px' }}>
              Les Comores accueillent les Jeux des Îles de l&apos;Océan Indien pour la première fois. Une opportunité historique pour le sport comorien.
            </p>
          </div>
        </div>
        <div style={{ maxWidth: '1200px', padding: '60px 40px' }} className="mx-auto">
          <p style={{ color: 'var(--fumee)', fontSize: '15px' }}>Contenu de la page JIOI 2027 — à développer.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
