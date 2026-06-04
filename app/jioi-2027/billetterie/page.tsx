import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'
import CountdownBanner from '@/components/ui/CountdownBanner'

export const metadata = {
  title: "Billetterie — JIOI 2027 Comores",
  description: "Réservez vos places pour les compétitions des Jeux des Îles de l'Océan Indien 2027 aux Comores.",
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

const categories = [
  { titre: "Tribune Officielle", prix: "5 000 FC", description: "Accès aux tribunes officielles avec vue optimale. Siège numéroté, espace VIP.", dispo: true },
  { titre: "Tribune Centrale", prix: "2 500 FC", description: "Tribunes centrales couvertes. Accès prioritaire et placement libre dans la zone.", dispo: true },
  { titre: "Tribune Latérale", prix: "1 000 FC", description: "Accès aux tribunes latérales. Idéal pour les familles. Vue complète du terrain.", dispo: true },
  { titre: "Passe journée", prix: "500 FC", description: "Accès illimité à toutes les compétitions d'une journée sur un même site.", dispo: true },
  { titre: "Pass All Access", prix: "15 000 FC", description: "Accès à toutes les compétitions sur tous les sites pendant les 12 jours des Jeux.", dispo: false },
  { titre: "Cérémonie d'ouverture", prix: "3 000 FC", description: "Accès à la cérémonie officielle d'ouverture au Stade de Malouzini.", dispo: false },
]

export default function JioiBilletteriePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .jb-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .jb-main { flex: 1; min-width: 0; }
        .jb-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .jb-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 8px; line-height: 1.15; }
        .jb-sub { font-size: 15px; color: #888; font-family: var(--font-syne); margin: 0 0 40px; }
        .jb-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 40px; }
        .jb-card { border: 1px solid #eee; border-radius: 8px; padding: 24px; display: flex; flex-direction: column; gap: 10px; transition: border-color 0.2s, box-shadow 0.2s; }
        .jb-card:hover { border-color: var(--vert-2); box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
        .jb-card.indispo { opacity: 0.55; pointer-events: none; }
        .jb-card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
        .jb-card-titre { font-size: 17px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0; }
        .jb-prix { font-size: 18px; font-weight: 800; font-family: var(--font-syne); color: var(--vert); white-space: nowrap; }
        .jb-desc { font-size: 14px; color: #666; line-height: 1.7; font-family: var(--font-syne); margin: 0; flex: 1; }
        .jb-btn { margin-top: 4px; display: inline-flex; align-items: center; gap: 6px; padding: 10px 18px; background: var(--vert); color: #fff; font-size: 12px; font-weight: 700; font-family: var(--font-syne); letter-spacing: 0.06em; text-transform: uppercase; border: none; border-radius: 4px; cursor: pointer; transition: opacity 0.2s; align-self: flex-start; }
        .jb-btn:hover { opacity: 0.85; }
        .jb-bientot { font-size: 11px; font-weight: 700; color: #aaa; font-family: var(--font-syne); letter-spacing: 0.08em; text-transform: uppercase; }
        .jb-note { padding: 20px 24px; border: 1px solid #eee; border-radius: 8px; font-size: 14px; color: #888; font-family: var(--font-syne); line-height: 1.7; }
        @media (max-width: 900px) { .jb-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .jb-wrap { padding: 40px 20px 60px; } .jb-grid { grid-template-columns: 1fr; } }
      `}</style>
      <PageHero label="JIOI 2027" titre="Billetterie" description="Réservez vos places pour assister aux compétitions des Jeux des Îles de l'Océan Indien 2027 aux Comores." image="/jioi-hero.jpg" imageAlt="Billetterie JIOI 2027" bandColor="#deeee3" />
      <div className="jb-wrap">
        <SectionNav blocs={[...nav, { titre: "Compte à rebours", contenu: <CountdownBanner /> }]} />
        <main className="jb-main">
          <span className="jb-label">Accès aux Jeux</span>
          <h2 className="jb-title">Choisissez votre billet</h2>
          <p className="jb-sub">Ouverture de la billetterie en ligne — 6 mois avant les Jeux. Prix en Francs Comoriens.</p>
          <div className="jb-grid">
            {categories.map(c => (
              <div key={c.titre} className={`jb-card${!c.dispo ? ' indispo' : ''}`}>
                <div className="jb-card-top">
                  <h3 className="jb-card-titre">{c.titre}</h3>
                  <div className="jb-prix">{c.prix}</div>
                </div>
                <p className="jb-desc">{c.description}</p>
                {c.dispo
                  ? <button className="jb-btn">Réserver →</button>
                  : <div className="jb-bientot">Bientôt disponible</div>
                }
              </div>
            ))}
          </div>
          <div className="jb-note">La billetterie en ligne sera ouverte début 2027. Pour toute demande d'information ou réservation de groupe, contactez l'INJS à l'adresse billetterie@injs.km</div>
        </main>
      </div>
    </div>
  )
}
