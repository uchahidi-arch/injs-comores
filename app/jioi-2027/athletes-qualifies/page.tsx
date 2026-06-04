import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'
import CountdownBanner from '@/components/ui/CountdownBanner'

export const metadata = {
  title: "Athlètes qualifiés — JIOI 2027 Comores",
  description: "Les athlètes comoriens sélectionnés pour représenter l'Union des Comores aux JIOI 2027.",
}

const nav = [{ titre: "JIOI 2027", liens: [
  { label: "Vue d'ensemble", href: "/jioi-2027" },
  { label: "Présentation", href: "/jioi-2027/presentation" },
  { label: "Disciplines", href: "/jioi-2027/sports" },
  { label: "Calendrier", href: "/jioi-2027/calendrier" },
  { label: "Délégations", href: "/jioi-2027/delegations" },
  { label: "Athlètes qualifiés", href: "/jioi-2027/athletes-qualifies" },
  { label: "Billetterie", href: "/jioi-2027/billetterie" },
  { label: "Médias & Presse", href: "/jioi-2027/medias" },
  { label: "Résultats live", href: "/jioi-2027/resultats" },
]}]

const disciplines = [
  {
    sport: "Athlétisme",
    athletes: [
      { nom: "Salim Mchangama", discipline: "100m / 200m", statut: "Qualifié" },
      { nom: "Faouzia Said Omar", discipline: "400m haies", statut: "Qualifiée" },
      { nom: "Ali Hamidou", discipline: "Saut en longueur", statut: "Qualifié" },
    ],
  },
  {
    sport: "Judo",
    athletes: [
      { nom: "Nassuf Abdallah", discipline: "Moins de 66kg", statut: "Qualifié" },
      { nom: "Houmadi Combo", discipline: "Moins de 73kg", statut: "Qualifié" },
      { nom: "Mariama Moussa", discipline: "Moins de 52kg", statut: "Qualifiée" },
    ],
  },
  {
    sport: "Natation",
    athletes: [
      { nom: "Toufiki Ahmed", discipline: "100m nage libre", statut: "Qualifié" },
      { nom: "Anziza M'Changama", discipline: "200m dos", statut: "Qualifiée" },
    ],
  },
  {
    sport: "Boxe",
    athletes: [
      { nom: "Bacar Youssouf", discipline: "Moins de 69kg", statut: "Qualifié" },
      { nom: "Said Ali Combo", discipline: "Moins de 75kg", statut: "En attente" },
    ],
  },
]

export default function JioiAthletesPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .ja-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .ja-main { flex: 1; min-width: 0; }
        .ja-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .ja-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 8px; line-height: 1.15; }
        .ja-sub { font-size: 15px; color: #888; font-family: var(--font-syne); margin: 0 0 40px; }
        .ja-bloc { margin-bottom: 48px; }
        .ja-sport { font-size: 18px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 12px; padding-bottom: 10px; border-bottom: 2px solid var(--vert); }
        .ja-list { display: flex; flex-direction: column; gap: 2px; }
        .ja-item { display: grid; grid-template-columns: 1fr 160px auto; gap: 20px; padding: 14px 0; border-bottom: 1px solid #f5f5f5; align-items: center; }
        .ja-item:last-child { border-bottom: none; }
        .ja-nom { font-size: 15px; font-weight: 600; font-family: var(--font-syne); color: var(--encre); }
        .ja-discipline { font-size: 13px; color: #888; font-family: var(--font-syne); }
        .ja-statut-ok { font-size: 11px; font-weight: 700; color: #2D6A4F; background: #e8f5ee; padding: 3px 8px; border-radius: 4px; font-family: var(--font-syne); white-space: nowrap; }
        .ja-statut-wait { font-size: 11px; font-weight: 700; color: #b45309; background: #fef3c7; padding: 3px 8px; border-radius: 4px; font-family: var(--font-syne); white-space: nowrap; }
        .ja-note { margin-top: 20px; padding: 20px 24px; border: 1px solid #eee; border-radius: 8px; font-size: 14px; color: #888; font-family: var(--font-syne); line-height: 1.7; }
        @media (max-width: 900px) { .ja-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .ja-wrap { padding: 40px 20px 60px; } .ja-item { grid-template-columns: 1fr auto; } .ja-discipline { display: none; } }
      `}</style>
      <PageHero label="JIOI 2027" titre="Athlètes qualifiés" description="Les athlètes comoriens sélectionnés pour représenter l'Union des Comores aux Jeux des Îles 2027." image="/jioi-hero.jpg" imageAlt="Athlètes qualifiés JIOI 2027" bandColor="#deeee3" />
      <div className="ja-wrap">
        <SectionNav blocs={[...nav, { titre: "Compte à rebours", contenu: <CountdownBanner /> }]} />
        <main className="ja-main">
          <span className="ja-label">Sélection nationale</span>
          <h2 className="ja-title">Athlètes comoriens qualifiés</h2>
          <p className="ja-sub">Liste provisoire — mise à jour au fil des qualifications officielles.</p>
          {disciplines.map(d => (
            <div key={d.sport} className="ja-bloc">
              <h3 className="ja-sport">{d.sport}</h3>
              <div className="ja-list">
                {d.athletes.map(a => (
                  <div key={a.nom} className="ja-item">
                    <div className="ja-nom">{a.nom}</div>
                    <div className="ja-discipline">{a.discipline}</div>
                    <div className={a.statut === 'En attente' ? 'ja-statut-wait' : 'ja-statut-ok'}>{a.statut}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="ja-note">La liste complète des athlètes qualifiés sera publiée après la clôture des sélections nationales. Les critères de qualification sont définis par chaque fédération nationale en coordination avec l'INJS.</div>
        </main>
      </div>
    </div>
  )
}
