import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'
import CountdownBanner from '@/components/ui/CountdownBanner'

export const metadata = {
  title: "Délégations — JIOI 2027 Comores",
  description: "Les sept pays participants aux Jeux des Îles de l'Océan Indien 2027 aux Comores.",
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

const delegations = [
  { pays: "Comores", code: "COM", statut: "Pays hôte", athletes: "—", chef: "À confirmer", note: "Hôte 2027" },
  { pays: "Madagascar", code: "MAD", statut: "Confirmée", athletes: "~280", chef: "À confirmer", note: null },
  { pays: "Maurice", code: "MRI", statut: "Confirmée", athletes: "~260", chef: "À confirmer", note: null },
  { pays: "La Réunion", code: "REU", statut: "Confirmée", athletes: "~240", chef: "À confirmer", note: null },
  { pays: "Seychelles", code: "SEY", statut: "Confirmée", athletes: "~120", chef: "À confirmer", note: null },
  { pays: "Mayotte", code: "MAY", statut: "Confirmée", athletes: "~100", chef: "À confirmer", note: null },
  { pays: "Maldives", code: "MDV", statut: "Confirmée", athletes: "~80", chef: "À confirmer", note: null },
]

export default function JioiDelegationsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .jd-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .jd-main { flex: 1; min-width: 0; }
        .jd-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .jd-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 8px; line-height: 1.15; }
        .jd-sub { font-size: 15px; color: #888; font-family: var(--font-syne); margin: 0 0 40px; }
        .jd-list { display: flex; flex-direction: column; gap: 2px; }
        .jd-item { display: grid; grid-template-columns: 56px 1fr 100px 100px auto; gap: 20px; padding: 20px 0; border-bottom: 1px solid #f0f0f0; align-items: center; }
        .jd-item:first-child { border-top: 1px solid #f0f0f0; }
        .jd-item.hote { background: #f5faf6; padding: 20px 16px; border-radius: 6px; border: 1px solid #d4e8db; margin-bottom: 2px; }
        .jd-code { font-size: 12px; font-weight: 800; color: var(--vert); font-family: var(--font-syne); letter-spacing: 0.1em; }
        .jd-pays { font-size: 17px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); }
        .jd-athletes { font-size: 14px; font-family: var(--font-syne); color: #555; font-weight: 500; }
        .jd-athletes-label { font-size: 11px; color: #bbb; font-family: var(--font-syne); }
        .jd-statut { font-size: 12px; font-weight: 600; font-family: var(--font-syne); color: #2D6A4F; }
        .jd-badge { font-size: 10px; font-weight: 700; background: var(--vert); color: #fff; padding: 3px 8px; border-radius: 4px; font-family: var(--font-syne); letter-spacing: 0.06em; white-space: nowrap; }
        .jd-note { margin-top: 40px; padding: 20px 24px; border: 1px solid #eee; border-radius: 8px; font-size: 14px; color: #888; font-family: var(--font-syne); line-height: 1.7; }
        @media (max-width: 900px) { .jd-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .jd-wrap { padding: 40px 20px 60px; } .jd-item { grid-template-columns: 44px 1fr auto; } .jd-athletes, .jd-statut { display: none; } }
      `}</style>
      <PageHero label="JIOI 2027" titre="Délégations" description="Les sept nations insulaires de l'Océan Indien réunies aux Comores pour les Jeux des Îles 2027." image="/jioi-hero.jpg" imageAlt="Délégations JIOI 2027" bandColor="#deeee3" />
      <div className="jd-wrap">
        <SectionNav blocs={[...nav, { titre: "Compte à rebours", contenu: <CountdownBanner /> }]} />
        <main className="jd-main">
          <span className="jd-label">Pays participants</span>
          <h2 className="jd-title">7 délégations officielles</h2>
          <p className="jd-sub">Données indicatives — effectifs définitifs communiqués 3 mois avant les Jeux.</p>
          <div className="jd-list">
            {delegations.map(d => (
              <div key={d.code} className={`jd-item${d.note ? ' hote' : ''}`}>
                <div className="jd-code">{d.code}</div>
                <div className="jd-pays">{d.pays}</div>
                <div>
                  <div className="jd-athletes">{d.athletes}</div>
                  <div className="jd-athletes-label">athlètes</div>
                </div>
                <div className="jd-statut">{d.statut}</div>
                {d.note ? <div className="jd-badge">{d.note}</div> : <div />}
              </div>
            ))}
          </div>
          <div className="jd-note">Les compositions officielles des délégations seront publiées à l'approche des Jeux. Les chefs de mission seront désignés par chaque comité olympique national.</div>
        </main>
      </div>
    </div>
  )
}
