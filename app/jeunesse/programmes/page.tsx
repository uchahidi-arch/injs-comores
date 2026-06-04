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

export const metadata = { title: "Programmes nationaux — INJS Comores" }
const programmes = [
  { titre: "Sport à l'École", cible: "6–16 ans", description: "Programme d'éducation physique et sportive dans les établissements primaires et secondaires des Comores.", statut: "En cours" },
  { titre: "Sport Universitaire", cible: "18–25 ans", description: "Développement du sport universitaire — championnats inter-facultés et soutien aux associations sportives estudiantines.", statut: "En cours" },
  { titre: "Sport & Santé", cible: "Tous âges", description: "Programme de sensibilisation à l'activité physique régulière comme facteur de santé publique.", statut: "En cours" },
  { titre: "Sport Féminin", cible: "Femmes", description: "Promotion et développement de la pratique sportive féminine sur les trois îles — accès, formation et compétition.", statut: "En cours" },
  { titre: "Para-sport", cible: "Personnes handicapées", description: "Développement du sport adapté et para-sportif aux Comores — inclusion et accès aux compétitions régionales.", statut: "En développement" },
]
export default function ProgrammesPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .pg-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .pg-main { flex: 1; min-width: 0; }
        .pg-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .pg-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 16px; line-height: 1.15; }
        .pg-text { font-size: 16px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0 0 40px; }
        .pg-bloc-title { font-size: 20px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 20px; padding-bottom: 10px; border-bottom: 2px solid var(--vert); }
        .pg-list { display: flex; flex-direction: column; gap: 2px; }
        .pg-item { display: grid; grid-template-columns: 1fr 100px auto; gap: 20px; padding: 20px 0; border-bottom: 1px solid #f0f0f0; align-items: start; }
        .pg-item:first-child { border-top: 1px solid #f0f0f0; }
        .pg-item:last-child { border-bottom: none; }
        .pg-item-titre { font-size: 16px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); margin-bottom: 4px; }
        .pg-item-desc { font-size: 13px; color: #888; font-family: var(--font-syne); line-height: 1.6; }
        .pg-cible { font-size: 12px; font-weight: 600; color: #555; font-family: var(--font-syne); padding-top: 3px; }
        .pg-statut-ok { font-size: 10px; font-weight: 700; color: #2D6A4F; background: #e8f5ee; padding: 3px 8px; border-radius: 4px; font-family: var(--font-syne); white-space: nowrap; align-self: center; }
        .pg-statut-dev { font-size: 10px; font-weight: 700; color: #b45309; background: #fef3c7; padding: 3px 8px; border-radius: 4px; font-family: var(--font-syne); white-space: nowrap; align-self: center; }
        @media (max-width: 900px) { .pg-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .pg-wrap { padding: 40px 20px 60px; } .pg-item { grid-template-columns: 1fr auto; } .pg-cible { display: none; } }
      `}</style>
      <PageHero label="Jeunesse" titre="Programmes nationaux" description="Les programmes d'éducation physique et sportive de l'INJS dans les établissements scolaires et la société comorienne." image="/accueil.jpg" imageAlt="Programmes nationaux INJS" />
      <div className="pg-wrap">
        <SectionNav blocs={nav} />
        <main className="pg-main">
          <span className="pg-label">Éducation & inclusion</span>
          <h2 className="pg-title">Programmes nationaux</h2>
          <p className="pg-text">L'INJS pilote plusieurs programmes nationaux visant à démocratiser l'accès au sport à tous les âges et pour tous les publics. De l'école primaire à l'université, du sport féminin au para-sport, ces programmes structurent la politique sportive et jeunesse de l'Union des Comores.</p>
          <h3 className="pg-bloc-title">Programmes en cours</h3>
          <div className="pg-list">
            {programmes.map((p, i) => (
              <div key={i} className="pg-item">
                <div>
                  <div className="pg-item-titre">{p.titre}</div>
                  <div className="pg-item-desc">{p.description}</div>
                </div>
                <div className="pg-cible">{p.cible}</div>
                <div className={p.statut === 'En cours' ? 'pg-statut-ok' : 'pg-statut-dev'}>{p.statut}</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
