import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'

export const metadata = {
  title: "Infrastructures sportives — INJS Comores",
  description: "Les équipements sportifs de l'INJS — stades, gymnases, dojos et piscines sur les trois îles des Comores.",
}

const nav = [{ titre: "Infrastructures", liens: [
  { label: "Tous les équipements", href: "/infrastructures" },
  { label: "Réserver un créneau", href: "/infrastructures/reserver" },
]}]

const infrastructures = [
  { nom: "Stade de Malouzini", type: "Stade de football / Athlétisme", ile: "Grande Comore", capacite: "10 000", disponible: true, description: "Le principal stade national, siège des compétitions officielles de football et d'athlétisme. Site principal des JIOI 2027." },
  { nom: "Gymnase National de Moroni", type: "Gymnase multisports", ile: "Grande Comore", capacite: "2 000", disponible: true, description: "Salle polyvalente accueillant basketball, volleyball, boxe, escrime et cérémonies officielles." },
  { nom: "Salle de Judo INJS", type: "Dojo", ile: "Grande Comore", capacite: "200", disponible: true, description: "Dojo officiel de l'INJS — entraînements quotidiens de la fédération nationale de judo et de karaté." },
  { nom: "Piscine Olympique de Moroni", type: "Piscine", ile: "Grande Comore", capacite: "500", disponible: true, description: "Seule piscine aux normes olympiques des Comores. Site officiel des compétitions de natation des JIOI 2027." },
  { nom: "Courts de Tennis INJS", type: "Tennis", ile: "Grande Comore", capacite: "—", disponible: true, description: "4 courts en dur réservés aux licenciés de la fédération nationale de tennis et aux formations INJS." },
  { nom: "Stade Municipal de Mutsamudu", type: "Stade de football", ile: "Anjouan", capacite: "5 000", disponible: true, description: "Principal équipement sportif d'Anjouan — compétitions régionales et entraînements des clubs anjouanais." },
  { nom: "Gymnase de Fomboni", type: "Gymnase multisports", ile: "Mohéli", capacite: "400", disponible: true, description: "Équipement sportif de Mohéli — sports collectifs et événements sportifs de l'île." },
]

export default function InfrastructuresHubPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .inf-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .inf-main { flex: 1; min-width: 0; }
        .inf-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .inf-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 8px; line-height: 1.15; }
        .inf-sub { font-size: 15px; color: #888; font-family: var(--font-syne); margin: 0 0 40px; }
        .inf-list { display: flex; flex-direction: column; gap: 2px; }
        .inf-item { display: grid; grid-template-columns: 1fr 100px 80px auto; gap: 20px; padding: 22px 0; border-bottom: 1px solid #f0f0f0; align-items: center; }
        .inf-item:first-child { border-top: 1px solid #f0f0f0; }
        .inf-item:last-child { border-bottom: none; }
        .inf-nom { font-size: 16px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); margin-bottom: 4px; }
        .inf-type { font-size: 12px; color: #aaa; font-family: var(--font-syne); }
        .inf-ile { font-size: 13px; color: #555; font-family: var(--font-syne); }
        .inf-cap { font-size: 13px; font-weight: 600; color: #555; font-family: var(--font-syne); text-align: center; }
        .inf-btn { display: inline-flex; padding: 8px 14px; background: var(--vert); color: #fff; font-size: 11px; font-weight: 700; font-family: var(--font-syne); text-decoration: none; border-radius: 4px; white-space: nowrap; transition: opacity 0.2s; }
        .inf-btn:hover { opacity: 0.85; }
        @media (max-width: 900px) { .inf-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .inf-wrap { padding: 40px 20px 60px; } .inf-item { grid-template-columns: 1fr auto; } .inf-ile, .inf-cap { display: none; } }
      `}</style>

      <PageHero label="Sport" titre="Infrastructures sportives" description="Les équipements sportifs gérés par l'INJS — stades, gymnases, dojos et piscines sur les trois îles des Comores." image="/accueil.jpg" imageAlt="Infrastructures INJS" />

      <div className="inf-wrap">
        <SectionNav blocs={nav} />
        <main className="inf-main">
          <span className="inf-label">Équipements nationaux</span>
          <h2 className="inf-title">7 équipements sur 3 îles</h2>
          <p className="inf-sub">Tous les équipements sont réservables en ligne pour les clubs et fédérations agréés.</p>
          <div className="inf-list">
            {infrastructures.map((inf, i) => (
              <div key={i} className="inf-item">
                <div>
                  <div className="inf-nom">{inf.nom}</div>
                  <div className="inf-type">{inf.type}</div>
                </div>
                <div className="inf-ile">{inf.ile}</div>
                <div className="inf-cap">{inf.capacite}</div>
                <Link href="/infrastructures/reserver" className="inf-btn">Réserver →</Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
