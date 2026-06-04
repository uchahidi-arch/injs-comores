import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'
import CountdownBanner from '@/components/ui/CountdownBanner'

export const metadata = {
  title: "Disciplines — JIOI 2027 Comores",
  description: "Les 18 disciplines sportives au programme des Jeux des Îles de l'Océan Indien 2027 aux Comores.",
}

const nav = [
  {
    titre: "JIOI 2027",
    liens: [
      { label: "Vue d'ensemble", href: "/jioi-2027" },
      { label: "Présentation", href: "/jioi-2027/presentation" },
      { label: "Disciplines", href: "/jioi-2027/sports" },
      { label: "Calendrier", href: "/jioi-2027/calendrier" },
      { label: "Délégations", href: "/jioi-2027/delegations" },
      { label: "Athlètes qualifiés", href: "/jioi-2027/athletes-qualifies" },
      { label: "Billetterie", href: "/jioi-2027/billetterie" },
      { label: "Médias & Presse", href: "/jioi-2027/medias" },
      { label: "Résultats live", href: "/jioi-2027/resultats" },
    ],
  },
]

const sports = [
  { num: "01", titre: "Athlétisme", site: "Stade de Malouzini", athletes: 120, epreuves: 24 },
  { num: "02", titre: "Football", site: "Stade de Malouzini", athletes: 80, epreuves: 2 },
  { num: "03", titre: "Basketball", site: "Gymnase National", athletes: 60, epreuves: 2 },
  { num: "04", titre: "Volleyball", site: "Gymnase National", athletes: 60, epreuves: 2 },
  { num: "05", titre: "Natation", site: "Piscine Olympique de Moroni", athletes: 80, epreuves: 18 },
  { num: "06", titre: "Judo", site: "Salle de Judo INJS", athletes: 56, epreuves: 14 },
  { num: "07", titre: "Boxe", site: "Gymnase National", athletes: 40, epreuves: 10 },
  { num: "08", titre: "Handball", site: "Salle Polyvalente Moroni", athletes: 60, epreuves: 2 },
  { num: "09", titre: "Tennis de table", site: "Gymnase National", athletes: 32, epreuves: 5 },
  { num: "10", titre: "Badminton", site: "Gymnase National", athletes: 32, epreuves: 5 },
  { num: "11", titre: "Cyclisme", site: "Circuit de Moroni", athletes: 40, epreuves: 6 },
  { num: "12", titre: "Karaté", site: "Salle de Judo INJS", athletes: 48, epreuves: 12 },
  { num: "13", titre: "Taekwondo", site: "Salle Polyvalente Moroni", athletes: 32, epreuves: 8 },
  { num: "14", titre: "Pétanque", site: "Terrain de Pétanque Moroni", athletes: 24, epreuves: 3 },
  { num: "15", titre: "Tennis", site: "Courts de Tennis INJS", athletes: 24, epreuves: 4 },
  { num: "16", titre: "Escrime", site: "Gymnase National", athletes: 28, epreuves: 6 },
  { num: "17", titre: "Haltérophilie", site: "Salle de Force INJS", athletes: 24, epreuves: 8 },
  { num: "18", titre: "Pétanque", site: "Terrain de Pétanque Moroni", athletes: 20, epreuves: 3 },
]

export default function JioiSportsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .js-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 40px 80px;
          display: flex;
          gap: 48px;
          align-items: flex-start;
        }

        .js-main { flex: 1; min-width: 0; }

        .js-section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--vert);
          font-family: var(--font-syne);
          margin-bottom: 14px;
        }

        .js-section-title {
          font-size: 30px;
          font-weight: 800;
          font-family: var(--font-syne);
          color: var(--encre);
          margin: 0 0 8px;
          line-height: 1.15;
        }

        .js-section-sub {
          font-size: 16px;
          color: #888;
          font-family: var(--font-syne);
          margin: 0 0 36px;
        }

        /* ── Liste sports ── */
        .js-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .js-item {
          display: grid;
          grid-template-columns: 44px 1fr auto;
          gap: 20px;
          padding: 20px 0;
          border-bottom: 1px solid #f0f0f0;
          align-items: center;
        }

        .js-item:first-child { border-top: 1px solid #f0f0f0; }

        .js-num {
          font-size: 12px;
          font-weight: 700;
          color: var(--vert);
          font-family: var(--font-syne);
          letter-spacing: 0.08em;
        }

        .js-body { display: flex; flex-direction: column; gap: 4px; }

        .js-titre {
          font-size: 17px;
          font-weight: 700;
          font-family: var(--font-syne);
          color: var(--encre);
        }

        .js-site {
          font-size: 13px;
          color: #888;
          font-family: var(--font-syne);
        }

        .js-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }

        .js-meta-val {
          font-size: 13px;
          font-weight: 600;
          color: #555;
          font-family: var(--font-syne);
          white-space: nowrap;
        }

        .js-meta-label {
          font-size: 11px;
          color: #bbb;
          font-family: var(--font-syne);
        }

        @media (max-width: 900px) {
          .js-wrap { flex-direction: column; }
        }

        @media (max-width: 768px) {
          .js-wrap { padding: 40px 20px 60px; }
          .js-section-title { font-size: 24px; }
          .js-item { grid-template-columns: 36px 1fr; }
          .js-meta { display: none; }
        }
      `}</style>

      <PageHero
        label="JIOI 2027"
        titre="Disciplines sportives"
        description="Les 18 sports au programme des Jeux des Îles de l'Océan Indien 2027 — sites, épreuves et nombre d'athlètes engagés."
        image="/jioi-hero.jpg"
        imageAlt="Disciplines JIOI 2027"
        bandColor="#deeee3"
      />

      <div className="js-wrap">
        <SectionNav blocs={[
          ...nav,
          { titre: "Compte à rebours", contenu: <CountdownBanner /> },
        ]} />

        <main className="js-main">
          <div className="js-section-label">Programme officiel</div>
          <h2 className="js-section-title">18 disciplines sportives</h2>
          <p className="js-section-sub">Programme définitif — sous réserve de modifications par le comité d'organisation.</p>

          <div className="js-list">
            {sports.map(s => (
              <div key={s.num} className="js-item">
                <div className="js-num">{s.num}</div>
                <div className="js-body">
                  <div className="js-titre">{s.titre}</div>
                  <div className="js-site">{s.site}</div>
                </div>
                <div className="js-meta">
                  <div className="js-meta-val">{s.athletes} athlètes</div>
                  <div className="js-meta-label">{s.epreuves} épreuves</div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
