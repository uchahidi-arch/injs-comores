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

export const metadata = { title: "Camps sportifs — INJS Comores" }
const camps = [
  { titre: "Camp National de Détection", date: "Juil. 2026", lieu: "Moroni", age: "12–17 ans", sports: "Athlétisme, Judo, Natation, Football", places: "120" },
  { titre: "Camp de Perfectionnement Judo", date: "Août 2026", lieu: "Moroni", age: "14–22 ans", sports: "Judo", places: "40" },
  { titre: "Camp JIOI — Préparation Nationale", date: "Sept.–Déc. 2026", lieu: "3 îles", age: "16–35 ans", sports: "Toutes disciplines JIOI", places: "Sélectionnés" },
  { titre: "Camp Vacances Sportives", date: "Juil. & Août 2026", lieu: "3 îles", age: "10–16 ans", sports: "Multisports", places: "200" },
]
export default function CampsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .ca-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .ca-main { flex: 1; min-width: 0; }
        .ca-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .ca-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 16px; line-height: 1.15; }
        .ca-text { font-size: 16px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0 0 40px; }
        .ca-bloc-title { font-size: 20px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 20px; padding-bottom: 10px; border-bottom: 2px solid var(--vert); }
        .ca-list { display: flex; flex-direction: column; gap: 20px; }
        .ca-item { border: 1px solid #eee; border-radius: 8px; padding: 24px; display: flex; flex-direction: column; gap: 10px; transition: border-color 0.2s, box-shadow 0.2s; }
        .ca-item:hover { border-color: var(--vert-2); box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
        .ca-item-top { display: flex; align-items: start; justify-content: space-between; gap: 16px; }
        .ca-item-titre { font-size: 17px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); }
        .ca-item-date { font-size: 12px; font-weight: 700; color: var(--vert); background: #e8f5ee; padding: 4px 10px; border-radius: 4px; font-family: var(--font-syne); white-space: nowrap; flex-shrink: 0; }
        .ca-item-infos { display: flex; gap: 20px; flex-wrap: wrap; }
        .ca-info { font-size: 13px; color: #777; font-family: var(--font-syne); display: flex; gap: 4px; }
        .ca-info-label { color: #aaa; }
        .ca-btn { align-self: flex-start; padding: 9px 16px; background: var(--vert); color: #fff; font-size: 12px; font-weight: 700; font-family: var(--font-syne); text-decoration: none; border-radius: 4px; transition: opacity 0.2s; }
        .ca-btn:hover { opacity: 0.85; }
        @media (max-width: 900px) { .ca-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .ca-wrap { padding: 40px 20px 60px; } .ca-item-top { flex-direction: column; } }
      `}</style>
      <PageHero label="Jeunesse" titre="Camps sportifs" description="Camps de détection, de perfectionnement et de préparation physique organisés sur les trois îles des Comores." image="/accueil.jpg" imageAlt="Camps sportifs INJS" />
      <div className="ca-wrap">
        <SectionNav blocs={nav} />
        <main className="ca-main">
          <span className="ca-label">Programmes de terrain</span>
          <h2 className="ca-title">Calendrier des camps sportifs</h2>
          <p className="ca-text">L'INJS organise tout au long de l'année des camps sportifs sur les trois îles — détection de talents, perfectionnement technique, préparation aux compétitions nationales et vacances sportives pour les plus jeunes.</p>
          <h3 className="ca-bloc-title">Camps 2026</h3>
          <div className="ca-list">
            {camps.map((c, i) => (
              <div key={i} className="ca-item">
                <div className="ca-item-top">
                  <div className="ca-item-titre">{c.titre}</div>
                  <div className="ca-item-date">{c.date}</div>
                </div>
                <div className="ca-item-infos">
                  <div className="ca-info"><span className="ca-info-label">Lieu :</span> {c.lieu}</div>
                  <div className="ca-info"><span className="ca-info-label">Âge :</span> {c.age}</div>
                  <div className="ca-info"><span className="ca-info-label">Places :</span> {c.places}</div>
                  <div className="ca-info"><span className="ca-info-label">Sports :</span> {c.sports}</div>
                </div>
                <a href="/jeunesse/inscription" className="ca-btn">S'inscrire →</a>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
