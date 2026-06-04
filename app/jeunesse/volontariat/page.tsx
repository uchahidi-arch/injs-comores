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

export const metadata = { title: "Volontariat national — INJS Comores" }
const missions = [
  { titre: "Encadrement sportif scolaire", lieu: "Grande Comore", duree: "6 mois", profil: "Éducateur sportif" },
  { titre: "Animation jeunesse en commune", lieu: "Anjouan", duree: "3 mois", profil: "Animateur" },
  { titre: "Soutien JIOI 2027", lieu: "Moroni", duree: "12 mois", profil: "Tous profils" },
  { titre: "Préservation patrimoine naturel", lieu: "Mohéli", duree: "4 mois", profil: "Environnement" },
  { titre: "Coaching clubs citoyens", lieu: "3 îles", duree: "6 mois", profil: "Leadership" },
]
export default function VolontariatPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .vl-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .vl-main { flex: 1; min-width: 0; }
        .vl-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .vl-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 16px; line-height: 1.15; }
        .vl-text { font-size: 16px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0 0 40px; }
        .vl-bloc-title { font-size: 20px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 20px; padding-bottom: 10px; border-bottom: 2px solid var(--vert); }
        .vl-list { display: flex; flex-direction: column; gap: 2px; }
        .vl-item { display: grid; grid-template-columns: 1fr 100px 120px auto; gap: 20px; padding: 18px 0; border-bottom: 1px solid #f0f0f0; align-items: center; }
        .vl-item:first-child { border-top: 1px solid #f0f0f0; }
        .vl-item:last-child { border-bottom: none; }
        .vl-item-titre { font-size: 15px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); margin-bottom: 3px; }
        .vl-item-profil { font-size: 12px; color: #aaa; font-family: var(--font-syne); }
        .vl-lieu { font-size: 13px; color: #555; font-family: var(--font-syne); }
        .vl-duree { font-size: 13px; font-weight: 600; color: var(--vert); font-family: var(--font-syne); }
        .vl-btn { display: inline-flex; padding: 8px 14px; background: var(--vert); color: #fff; font-size: 11px; font-weight: 700; font-family: var(--font-syne); text-decoration: none; border-radius: 4px; white-space: nowrap; transition: opacity 0.2s; }
        .vl-btn:hover { opacity: 0.85; }
        @media (max-width: 900px) { .vl-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .vl-wrap { padding: 40px 20px 60px; } .vl-item { grid-template-columns: 1fr auto; } .vl-lieu, .vl-duree { display: none; } }
      `}</style>
      <PageHero label="Jeunesse" titre="Volontariat national" description="Rejoignez le programme de volontariat national — missions d'intérêt général sur les trois îles des Comores." image="/accueil.jpg" imageAlt="Volontariat INJS" />
      <div className="vl-wrap">
        <SectionNav blocs={nav} />
        <main className="vl-main">
          <span className="vl-label">Engagement citoyen</span>
          <h2 className="vl-title">Missions de volontariat</h2>
          <p className="vl-text">Le programme de volontariat national de l'INJS permet aux jeunes Comoriens de s'engager dans des missions d'intérêt général sur les trois îles. Encadrement sportif, animation communautaire, soutien aux JIOI 2027 — chaque mission contribue au développement du sport et de la jeunesse comorienne.</p>
          <h3 className="vl-bloc-title">Missions disponibles</h3>
          <div className="vl-list">
            {missions.map((m, i) => (
              <div key={i} className="vl-item">
                <div>
                  <div className="vl-item-titre">{m.titre}</div>
                  <div className="vl-item-profil">Profil : {m.profil}</div>
                </div>
                <div className="vl-lieu">{m.lieu}</div>
                <div className="vl-duree">{m.duree}</div>
                <a href="/jeunesse/inscription" className="vl-btn">Postuler →</a>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
