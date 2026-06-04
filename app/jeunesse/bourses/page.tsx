import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'

const nav = [{ titre: "Jeunesse", liens: [
  { label: "Vue d'ensemble", href: "/jeunesse" },
  { label: "Ya Mkobe — Action Citoyenne", href: "/jeunesse/action-citoyen" },
  { label: "Volontariat national", href: "/jeunesse/volontariat" },
  { label: "Clubs citoyens", href: "/jeunesse/clubs-citoyens" },
  { label: "Bourses sportives", href: "/jeunesse/bourses" },
  { label: "Camps sportifs", href: "/jeunesse/camps" },
  { label: "Programmes nationaux", href: "/jeunesse/programmes" },
]}]

export const metadata = { title: "Bourses sportives — INJS Comores" }
const bourses = [
  { titre: "Bourse d'Excellence Sportive", montant: "150 000 FC / an", critere: "Athlète sélectionné en équipe nationale", places: "20" },
  { titre: "Bourse de Formation Sportive", montant: "80 000 FC / an", critere: "Jeune talent détecté en camp national", places: "40" },
  { titre: "Bourse JIOI 2027", montant: "200 000 FC / an", critere: "Athlète qualifié pour les JIOI 2027", places: "Selon qualifications" },
]
export default function BoursesPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .bo-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .bo-main { flex: 1; min-width: 0; }
        .bo-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .bo-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 16px; line-height: 1.15; }
        .bo-text { font-size: 16px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0 0 40px; }
        .bo-bloc-title { font-size: 20px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 20px; padding-bottom: 10px; border-bottom: 2px solid var(--vert); }
        .bo-list { display: flex; flex-direction: column; gap: 2px; }
        .bo-item { display: grid; grid-template-columns: 1fr 140px auto; gap: 20px; padding: 22px 0; border-bottom: 1px solid #f0f0f0; align-items: start; }
        .bo-item:first-child { border-top: 1px solid #f0f0f0; }
        .bo-item:last-child { border-bottom: none; }
        .bo-item-titre { font-size: 16px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); margin-bottom: 4px; }
        .bo-item-critere { font-size: 13px; color: #888; font-family: var(--font-syne); line-height: 1.5; }
        .bo-montant { font-size: 15px; font-weight: 800; color: var(--vert); font-family: var(--font-syne); text-align: right; white-space: nowrap; }
        .bo-places { font-size: 11px; color: #aaa; font-family: var(--font-syne); text-align: right; margin-top: 4px; }
        .bo-cta { margin-top: 40px; padding: 28px 32px; border: 1px solid #e8f5ee; border-radius: 8px; background: #f5faf6; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
        .bo-cta-text { font-size: 17px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); }
        .bo-cta-sub { font-size: 13px; color: #888; font-family: var(--font-syne); margin-top: 4px; }
        .bo-btn { padding: 12px 22px; background: var(--vert); color: #fff; font-size: 13px; font-weight: 700; font-family: var(--font-syne); text-decoration: none; border-radius: 4px; white-space: nowrap; transition: opacity 0.2s; }
        .bo-btn:hover { opacity: 0.85; }
        @media (max-width: 900px) { .bo-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .bo-wrap { padding: 40px 20px 60px; } .bo-item { grid-template-columns: 1fr auto; } .bo-cta { flex-direction: column; align-items: flex-start; } }
      `}</style>
      <PageHero label="Jeunesse" titre="Bourses sportives" description="L'INJS soutient les jeunes athlètes comoriens à fort potentiel — bourses de formation et d'excellence sportive." image="/accueil.jpg" imageAlt="Bourses sportives INJS" />
      <div className="bo-wrap">
        <SectionNav blocs={nav} />
        <main className="bo-main">
          <span className="bo-label">Soutien aux talents</span>
          <h2 className="bo-title">Bourses sportives INJS</h2>
          <p className="bo-text">L'INJS alloue chaque année des bourses sportives aux jeunes athlètes comoriens les plus prometteurs. Ces bourses visent à soutenir leur formation, faciliter leurs déplacements pour les compétitions et leur permettre de se consacrer pleinement à leur discipline.</p>
          <h3 className="bo-bloc-title">Types de bourses disponibles</h3>
          <div className="bo-list">
            {bourses.map((b, i) => (
              <div key={i} className="bo-item">
                <div>
                  <div className="bo-item-titre">{b.titre}</div>
                  <div className="bo-item-critere">{b.critere}</div>
                </div>
                <div>
                  <div className="bo-montant">{b.montant}</div>
                  <div className="bo-places">{b.places} places</div>
                </div>
              </div>
            ))}
          </div>
          <div className="bo-cta">
            <div>
              <div className="bo-cta-text">Faire une demande de bourse</div>
              <div className="bo-cta-sub">Dossier à soumettre avant le 31 mars de chaque année</div>
            </div>
            <a href="/jeunesse/inscription" className="bo-btn">Déposer ma demande →</a>
          </div>
        </main>
      </div>
    </div>
  )
}
