import PageHero from '@/components/ui/PageHero'

export const metadata = {
  title: "Agenda — INJS",
  description: "Les événements sportifs et culturels organisés par l'INJS des Comores.",
}

const evenements = [
  {
    id: 1,
    categorie: "Examens sportifs",
    titre: "Épreuves EPS — Baccalauréat",
    dateDebut: "22 juillet 2026",
    dateFin: "30 juillet 2026",
    lieu: "Gymnase national de Moroni & sites partenaires",
    description:
      "Épreuves d'éducation physique et sportive du baccalauréat national. Tous les élèves de terminale sont convoqués selon les plannings communiqués par les établissements.",
    couleur: "sport",
  },
  {
    id: 2,
    categorie: "Examens sportifs",
    titre: "Épreuves EPS — Brevet",
    dateDebut: "29 juillet 2026",
    dateFin: "2 août 2026",
    lieu: "Gymnase national de Moroni & sites partenaires",
    description:
      "Épreuves d'éducation physique et sportive du brevet des collèges. Organisation assurée par le département formation de l'INJS en coordination avec le ministère de l'Éducation.",
    couleur: "sport",
  },
  {
    id: 3,
    categorie: "Événement socioculturel",
    titre: "La Bataille des Sultans — Tournoi d'échecs & Journée socioculturelle",
    dateDebut: "8 août 2026",
    dateFin: null,
    lieu: "Moroni",
    description:
      "Grand tournoi d'échecs ouvert à tous, accompagné d'une journée socioculturelle célébrant le patrimoine et la jeunesse comorienne. L'événement s'inscrit dans le programme de valorisation culturelle porté par l'INJS à l'approche des JIOI 2027.",
    couleur: "culture",
  },
]

const couleurs: Record<string, { accent: string }> = {
  sport:   { accent: "#0F6E56" },
  culture: { accent: "#185FA5" },
}

export default function AgendaPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .ag-inner { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; }

        .ag-section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--vert);
          font-family: var(--font-syne);
          margin-bottom: 14px;
          display: block;
        }
        .ag-section-title {
          font-size: 30px;
          font-weight: 800;
          font-family: var(--font-syne);
          color: var(--encre);
          margin: 0 0 40px;
          line-height: 1.15;
        }

        .ag-list { display: flex; flex-direction: column; gap: 2px; }

        .ag-event {
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 32px;
          padding: 28px 0;
          border-bottom: 1px solid #f0f0f0;
          align-items: start;
        }
        .ag-event:last-child { border-bottom: none; }

        .ag-date-col { padding-top: 3px; }
        .ag-date-range {
          font-size: 14px;
          font-weight: 700;
          color: var(--encre);
          font-family: var(--font-syne);
          line-height: 1.4;
        }
        .ag-date-sep {
          font-size: 12px;
          color: #aaa;
          font-family: var(--font-syne);
          display: block;
          margin-top: 2px;
        }

        .ag-body { display: flex; flex-direction: column; gap: 10px; }

        .ag-cat {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-family: var(--font-syne);
        }

        .ag-titre {
          font-size: 18px;
          font-weight: 800;
          color: var(--encre);
          font-family: var(--font-syne);
          margin: 0;
          line-height: 1.2;
        }

        .ag-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.75;
          font-family: var(--font-syne);
          margin: 0;
          max-width: 680px;
        }

        .ag-lieu {
          font-size: 12px;
          color: #aaa;
          font-family: var(--font-syne);
        }

        @media (max-width: 768px) {
          .ag-inner { padding: 40px 20px 60px; }
          .ag-event { grid-template-columns: 1fr; gap: 12px; }
          .ag-section-title { font-size: 24px; }
        }
      `}</style>

      <PageHero
        label="Agenda"
        titre="Événements & manifestations"
        description="Les compétitions, examens et événements culturels organisés par l'INJS sur les trois îles des Comores."
        image="/accueil.jpg"
        imageAlt="Agenda INJS"
      />

      <div className="ag-inner">
        <span className="ag-section-label">Calendrier 2026</span>
        <h2 className="ag-section-title">Prochains événements</h2>

        <div className="ag-list">
          {evenements.map((e) => {
            const { accent } = couleurs[e.couleur]
            return (
              <div key={e.id} className="ag-event">
                <div className="ag-date-col">
                  <div className="ag-date-range">{e.dateDebut}</div>
                  {e.dateFin && (
                    <span className="ag-date-sep">→ {e.dateFin}</span>
                  )}
                </div>
                <div className="ag-body">
                  <span className="ag-cat" style={{ color: accent }}>{e.categorie}</span>
                  <h3 className="ag-titre">{e.titre}</h3>
                  <p className="ag-desc">{e.description}</p>
                  <span className="ag-lieu">{e.lieu}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
