import PageHero from '@/components/ui/PageHero'

export const metadata = {
  title: "Rapports Annuels — INJS",
  description: "Les rapports d'activité annuels de l'Institut National de la Jeunesse et des Sports des Comores.",
}

const rapports = [
  {
    annee: "2024",
    titre: "Rapport d'activité 2024",
    description: "Bilan des programmes sportifs, résultats des compétitions nationales, avancement des préparatifs JIOI 2027 et perspectives institutionnelles.",
    taille: "PDF — 4,2 Mo",
    href: "/rapports/injs-rapport-2024.pdf",
  },
  {
    annee: "2023",
    titre: "Rapport d'activité 2023",
    description: "Synthèse des actions menées, développement des fédérations, formations dispensées et bilan financier de l'exercice.",
    taille: "PDF — 3,8 Mo",
    href: "/rapports/injs-rapport-2023.pdf",
  },
  {
    annee: "2022",
    titre: "Rapport d'activité 2022",
    description: "Reprise post-pandémie, relance des compétitions nationales et lancement du programme Ya Mkobe — Action Citoyenne.",
    taille: "PDF — 3,1 Mo",
    href: "/rapports/injs-rapport-2022.pdf",
  },
  {
    annee: "2021",
    titre: "Rapport d'activité 2021",
    description: "Maintien des activités sportives dans le contexte sanitaire, adaptation des programmes jeunesse et soutien aux fédérations.",
    taille: "PDF — 2,9 Mo",
    href: "/rapports/injs-rapport-2021.pdf",
  },
  {
    annee: "2020",
    titre: "Rapport d'activité 2020",
    description: "Bilan d'une année marquée par la pandémie — réorganisation des activités, soutien aux athlètes et continuité institutionnelle.",
    taille: "PDF — 2,4 Mo",
    href: "/rapports/injs-rapport-2020.pdf",
  },
]

export default function RapportsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .rp-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 40px 80px;
        }

        .rp-intro {
          max-width: 800px;
          margin: 0 0 56px;
        }

        .rp-section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--vert);
          font-family: var(--font-syne);
          margin-bottom: 14px;
        }

        .rp-section-title {
          font-size: 30px;
          font-weight: 800;
          font-family: var(--font-syne);
          color: var(--encre);
          margin: 0 0 16px;
          line-height: 1.15;
        }

        .rp-intro p {
          font-size: 17px;
          color: #555;
          line-height: 1.85;
          font-family: var(--font-syne);
          margin: 0;
        }

        /* ── Liste rapports ── */
        .rp-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .rp-item {
          display: grid;
          grid-template-columns: 72px 1fr auto;
          gap: 28px;
          padding: 24px 0;
          border-bottom: 1px solid #f0f0f0;
          align-items: center;
          text-decoration: none;
          transition: background 0.15s;
        }

        .rp-item:first-child { border-top: 1px solid #f0f0f0; }

        .rp-item:hover .rp-titre { color: var(--vert); }

        .rp-annee {
          font-size: 22px;
          font-weight: 800;
          color: var(--vert);
          font-family: var(--font-syne);
          line-height: 1;
        }

        .rp-body { display: flex; flex-direction: column; gap: 6px; }

        .rp-titre {
          font-size: 17px;
          font-weight: 700;
          font-family: var(--font-syne);
          color: var(--encre);
          transition: color 0.15s;
        }

        .rp-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.7;
          font-family: var(--font-syne);
          margin: 0;
        }

        .rp-dl {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: var(--vert);
          font-family: var(--font-syne);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .rp-dl-taille {
          font-size: 12px;
          font-weight: 400;
          color: #aaa;
          font-family: var(--font-syne);
        }

        @media (max-width: 768px) {
          .rp-inner { padding: 40px 20px 60px; }
          .rp-item { grid-template-columns: 56px 1fr; gap: 16px; }
          .rp-dl { display: none; }
          .rp-section-title { font-size: 24px; }
        }
      `}</style>

      <PageHero
        label="L'Institution"
        titre="Rapports Annuels"
        description="Les rapports d'activité de l'INJS — bilan annuel des programmes sportifs, de l'encadrement de la jeunesse et des perspectives institutionnelles."
        image="/accueil.jpg"
        imageAlt="Rapports annuels de l'INJS"
      />

      <div className="rp-inner">

        <div className="rp-intro">
          <div className="rp-section-label">Transparence institutionnelle</div>
          <h2 className="rp-section-title">Nos rapports d'activité</h2>
          <p>
            Chaque année, l'INJS publie un rapport complet de ses activités — résultats sportifs,
            programmes jeunesse, formations dispensées et bilan financier. Ces documents constituent
            la mémoire institutionnelle de l'Institut et témoignent de son engagement envers la transparence.
          </p>
        </div>

        <div className="rp-list">
          {rapports.map(r => (
            <a key={r.annee} href={r.href} className="rp-item" target="_blank" rel="noopener noreferrer">
              <div className="rp-annee">{r.annee}</div>
              <div className="rp-body">
                <div className="rp-titre">{r.titre}</div>
                <p className="rp-desc">{r.description}</p>
              </div>
              <div className="rp-dl">
                ↓ Télécharger
                <span className="rp-dl-taille">{r.taille}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}