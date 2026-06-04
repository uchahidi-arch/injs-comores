import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'
import Image from 'next/image'

export interface Palmares {
  annee: string
  competition: string
  resultat: string
}

export interface Athlete {
  nom: string
  discipline: string
  niveau: string
}

export interface FederationData {
  code: string
  slug: string
  titre: string
  nomComplet: string
  president: string
  fondation: string
  logo?: string
  image: string
  presentation: string[]
  athletes: Athlete[]
  palmares: Palmares[]
}

export default function FederationPage({ data }: { data: FederationData }) {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .fp-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .fp-main { flex: 1; min-width: 0; }

        .fp-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .fp-header { display: flex; align-items: center; gap: 20px; margin-bottom: 8px; }
        .fp-logo { width: 64px; height: 64px; object-fit: contain; flex-shrink: 0; }
        .fp-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0; line-height: 1.15; }
        .fp-president { font-size: 14px; color: #888; font-family: var(--font-syne); margin: 0 0 24px; }
        .fp-president span { color: var(--encre); font-weight: 600; }
        .fp-text { font-size: 16px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0 0 14px; }
        .fp-text:last-of-type { margin-bottom: 0; }
        .fp-bloc { margin-bottom: 56px; }
        .fp-bloc-title { font-size: 20px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 20px; padding-bottom: 10px; border-bottom: 2px solid var(--vert); }

        /* Athlètes */
        .fp-athletes { display: flex; flex-direction: column; gap: 2px; }
        .fp-athlete { display: grid; grid-template-columns: 1fr 160px auto; gap: 20px; padding: 14px 0; border-bottom: 1px solid #f5f5f5; align-items: center; }
        .fp-athlete:first-child { border-top: 1px solid #f0f0f0; }
        .fp-athlete:last-child { border-bottom: none; }
        .fp-athlete-nom { font-size: 15px; font-weight: 600; font-family: var(--font-syne); color: var(--encre); }
        .fp-athlete-disc { font-size: 13px; color: #888; font-family: var(--font-syne); }
        .fp-athlete-niv { font-size: 11px; font-weight: 700; color: #2D6A4F; background: #e8f5ee; padding: 3px 8px; border-radius: 4px; font-family: var(--font-syne); white-space: nowrap; }

        /* Palmarès */
        .fp-palmares { display: flex; flex-direction: column; gap: 2px; }
        .fp-palmare { display: grid; grid-template-columns: 64px 1fr auto; gap: 20px; padding: 16px 0; border-bottom: 1px solid #f0f0f0; align-items: center; }
        .fp-palmare:first-child { border-top: 1px solid #f0f0f0; }
        .fp-palmare:last-child { border-bottom: none; }
        .fp-palmare-annee { font-size: 15px; font-weight: 800; color: var(--vert); font-family: var(--font-syne); }
        .fp-palmare-comp { font-size: 15px; font-weight: 500; font-family: var(--font-syne); color: var(--encre); }
        .fp-palmare-res { font-size: 13px; font-weight: 600; color: #555; font-family: var(--font-syne); white-space: nowrap; }

        @media (max-width: 900px) { .fp-wrap { flex-direction: column; } }
        @media (max-width: 768px) {
          .fp-wrap { padding: 40px 20px 60px; }
          .fp-title { font-size: 24px; }
          .fp-athlete { grid-template-columns: 1fr auto; }
          .fp-athlete-disc { display: none; }
          .fp-palmare { grid-template-columns: 52px 1fr; }
          .fp-palmare-res { display: none; }
        }
      `}</style>

      <PageHero
        label={`Fédérations — ${data.code}`}
        titre={data.nomComplet}
        description={`Fondée en ${data.fondation} · Affiliée à sa fédération internationale`}
        image={data.image}
        imageAlt={data.titre}
      />

      <div className="fp-wrap">
        <SectionNav blocs={[{
          titre: data.titre,
          liens: [
            { label: "Présentation", href: "#presentation" },
            { label: "Athlètes", href: "#athletes" },
            { label: "Palmarès", href: "#palmares" },
            { label: "Actualités", href: `/federations/${data.slug}/actualites` },
            { label: "Annonces", href: `/federations/${data.slug}/annonces` },
          ],
        }]} />

        <main className="fp-main">

          <div className="fp-bloc" id="presentation">
            <span className="fp-label">Fédération</span>

            {/* Logo + titre sur même ligne */}
            <div className="fp-header">
              {data.logo && (
                <Image
                  src={data.logo}
                  alt={`Logo ${data.titre}`}
                  width={64}
                  height={64}
                  className="fp-logo"
                />
              )}
              <h2 className="fp-title">{data.titre} aux Comores</h2>
            </div>

            <p className="fp-president">Président fédéral : <span>{data.president}</span></p>

            {data.presentation.map((p, i) => (
              <p key={i} className="fp-text">{p}</p>
            ))}
          </div>

          {data.athletes.length > 0 && (
            <div className="fp-bloc" id="athletes">
              <h3 className="fp-bloc-title">Athlètes de référence</h3>
              <div className="fp-athletes">
                {data.athletes.map(a => (
                  <div key={a.nom} className="fp-athlete">
                    <div className="fp-athlete-nom">{a.nom}</div>
                    <div className="fp-athlete-disc">{a.discipline}</div>
                    <div className="fp-athlete-niv">{a.niveau}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.palmares.length > 0 && (
            <div className="fp-bloc" id="palmares" style={{ marginBottom: 0 }}>
              <h3 className="fp-bloc-title">Palmarès</h3>
              <div className="fp-palmares">
                {data.palmares.map((p, i) => (
                  <div key={i} className="fp-palmare">
                    <div className="fp-palmare-annee">{p.annee}</div>
                    <div className="fp-palmare-comp">{p.competition}</div>
                    <div className="fp-palmare-res">{p.resultat}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  )
}