import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'
import CountdownBanner from '@/components/ui/CountdownBanner'

export const metadata = {
  title: "Calendrier — JIOI 2027 Comores",
  description: "Programme complet des compétitions des Jeux des Îles de l'Océan Indien 2027 aux Comores.",
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

const jours = [
  {
    date: "18 juillet 2027",
    label: "Jour 1 — Cérémonie d'ouverture",
    ouverture: true,
    evenements: [
      { heure: "10h00", sport: "Athlétisme", epreuve: "100m — Qualifications H/F", site: "Stade de Malouzini" },
      { heure: "14h00", sport: "Natation", epreuve: "100m Nage libre — Séries", site: "Piscine Olympique" },
      { heure: "16h00", sport: "Judo", epreuve: "Moins de 60kg — Éliminations", site: "Salle Judo INJS" },
      { heure: "20h00", sport: "Cérémonie", epreuve: "Ouverture officielle des Jeux", site: "Stade de Malouzini", special: true },
    ],
  },
  {
    date: "19 juillet 2027",
    label: "Jour 2",
    evenements: [
      { heure: "09h00", sport: "Basketball", epreuve: "Phase de groupes — Maurice vs Comores", site: "Gymnase National" },
      { heure: "10h00", sport: "Athlétisme", epreuve: "400m haies — Qualifications", site: "Stade de Malouzini" },
      { heure: "11h00", sport: "Natation", epreuve: "200m dos — Finales", site: "Piscine Olympique" },
      { heure: "14h00", sport: "Football", epreuve: "Phase de groupes — Comores vs Réunion", site: "Stade de Malouzini" },
      { heure: "16h00", sport: "Judo", epreuve: "Moins de 66kg — Finales", site: "Salle Judo INJS" },
      { heure: "18h00", sport: "Volleyball", epreuve: "Phase de groupes — Madagascar vs Maurice", site: "Gymnase National" },
    ],
  },
  {
    date: "20 juillet 2027",
    label: "Jour 3",
    evenements: [
      { heure: "09h00", sport: "Tennis", epreuve: "1er tour — Simple H/F", site: "Courts INJS" },
      { heure: "10h00", sport: "Cyclisme", epreuve: "Contre-la-montre individuel", site: "Circuit de Moroni" },
      { heure: "11h00", sport: "Boxe", epreuve: "Moins de 60kg — Quarts de finale", site: "Gymnase National" },
      { heure: "14h00", sport: "Athlétisme", epreuve: "Saut en hauteur — Finale H", site: "Stade de Malouzini" },
      { heure: "16h00", sport: "Natation", epreuve: "100m papillon — Finales", site: "Piscine Olympique" },
    ],
  },
  {
    date: "29 juillet 2027",
    label: "Jour 12 — Cérémonie de clôture",
    cloture: true,
    evenements: [
      { heure: "10h00", sport: "Athlétisme", epreuve: "Marathon — Départ", site: "Stade de Malouzini" },
      { heure: "14h00", sport: "Football", epreuve: "Finale", site: "Stade de Malouzini" },
      { heure: "16h00", sport: "Basketball", epreuve: "Finale H/F", site: "Gymnase National" },
      { heure: "20h00", sport: "Cérémonie", epreuve: "Clôture officielle & remise des médailles", site: "Stade de Malouzini", special: true },
    ],
  },
]

export default function JioiCalendrierPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .jc-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 40px 80px;
          display: flex;
          gap: 48px;
          align-items: flex-start;
        }

        .jc-main { flex: 1; min-width: 0; }

        .jc-section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--vert);
          font-family: var(--font-syne);
          margin-bottom: 14px;
        }

        .jc-section-title {
          font-size: 30px;
          font-weight: 800;
          font-family: var(--font-syne);
          color: var(--encre);
          margin: 0 0 8px;
          line-height: 1.15;
        }

        .jc-section-sub {
          font-size: 15px;
          color: #888;
          font-family: var(--font-syne);
          margin: 0 0 40px;
        }

        /* ── Jours ── */
        .jc-jour {
          margin-bottom: 40px;
        }

        .jc-jour-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 2px solid var(--vert);
        }

        .jc-jour-date {
          font-size: 16px;
          font-weight: 800;
          font-family: var(--font-syne);
          color: var(--encre);
        }

        .jc-jour-label {
          font-size: 13px;
          color: #888;
          font-family: var(--font-syne);
        }

        .jc-jour-tag {
          font-size: 10px;
          font-weight: 700;
          background: var(--vert);
          color: #fff;
          padding: 3px 8px;
          border-radius: 4px;
          font-family: var(--font-syne);
          letter-spacing: 0.06em;
          margin-left: auto;
        }

        /* ── Événements ── */
        .jc-events {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .jc-event {
          display: grid;
          grid-template-columns: 56px 100px 1fr auto;
          gap: 16px;
          padding: 13px 0;
          border-bottom: 1px solid #f5f5f5;
          align-items: center;
        }

        .jc-event:last-child { border-bottom: none; }

        .jc-event.special {
          background: #f5faf6;
          padding: 13px 12px;
          border-radius: 6px;
          border-bottom: none;
          margin: 4px 0;
        }

        .jc-event-heure {
          font-size: 13px;
          font-weight: 700;
          color: var(--vert);
          font-family: var(--font-syne);
        }

        .jc-event-sport {
          font-size: 12px;
          font-weight: 700;
          color: #aaa;
          font-family: var(--font-syne);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .jc-event.special .jc-event-sport {
          color: var(--vert);
        }

        .jc-event-epreuve {
          font-size: 14px;
          font-weight: 500;
          font-family: var(--font-syne);
          color: var(--encre);
        }

        .jc-event.special .jc-event-epreuve {
          font-weight: 700;
        }

        .jc-event-site {
          font-size: 12px;
          color: #aaa;
          font-family: var(--font-syne);
          text-align: right;
          white-space: nowrap;
        }

        .jc-note {
          margin-top: 40px;
          padding: 20px 24px;
          border: 1px solid #eee;
          border-radius: 8px;
          font-size: 14px;
          color: #888;
          font-family: var(--font-syne);
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .jc-wrap { flex-direction: column; }
        }

        @media (max-width: 768px) {
          .jc-wrap { padding: 40px 20px 60px; }
          .jc-section-title { font-size: 24px; }
          .jc-event { grid-template-columns: 48px 1fr; }
          .jc-event-sport, .jc-event-site { display: none; }
        }
      `}</style>

      <PageHero
        label="JIOI 2027"
        titre="Calendrier des compétitions"
        description="Programme des épreuves du 18 au 29 juillet 2027 — horaires, sites et disciplines par journée."
        image="/jioi-hero.jpg"
        imageAlt="Calendrier JIOI 2027"
        bandColor="#deeee3"
      />

      <div className="jc-wrap">
        <SectionNav blocs={[
          ...nav,
          { titre: "Compte à rebours", contenu: <CountdownBanner /> },
        ]} />

        <main className="jc-main">
          <div className="jc-section-label">Programme officiel</div>
          <h2 className="jc-section-title">18 — 29 juillet 2027</h2>
          <p className="jc-section-sub">Horaires indicatifs — programme complet disponible à l'approche des Jeux.</p>

          {jours.map((jour, i) => (
            <div key={i} className="jc-jour">
              <div className="jc-jour-header">
                <div className="jc-jour-date">{jour.date}</div>
                <div className="jc-jour-label">{jour.label}</div>
                {(jour.ouverture || jour.cloture) && (
                  <div className="jc-jour-tag">
                    {jour.ouverture ? "Ouverture" : "Clôture"}
                  </div>
                )}
              </div>

              <div className="jc-events">
                {jour.evenements.map((ev, j) => (
                  <div key={j} className={`jc-event${('special' in ev && ev.special) ? ' special' : ''}`}>
                    <div className="jc-event-heure">{ev.heure}</div>
                    <div className="jc-event-sport">{ev.sport}</div>
                    <div className="jc-event-epreuve">{ev.epreuve}</div>
                    <div className="jc-event-site">{ev.site}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="jc-note">
            Le calendrier complet des 12 jours de compétition sera publié six mois avant l'ouverture des Jeux.
            Les horaires sont donnés à titre indicatif et peuvent être modifiés par le comité d'organisation.
          </div>
        </main>
      </div>
    </div>
  )
}
