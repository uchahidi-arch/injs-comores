import PageHero from '@/components/ui/PageHero'

export const metadata = {
  title: "Direction & Équipe — INJS",
  description: "Découvrez la direction générale de l'Institut National de la Jeunesse et des Sports des Comores.",
}

const directeurs = [
  {
    initiales: "MAC",
    poste: "Directeur général",
    nom: "Mohmed Ali Chahidi",
    description:
      "Pilote la stratégie institutionnelle de l'INJS, coordonne les départements et représente l'Institut auprès des autorités nationales et des partenaires internationaux.",
    variant: "green" as const,
  },
  {
    initiales: "AH",
    poste: "Directeur administratif et financier",
    nom: "Abdoulfatah Hassani",
    description:
      "Assure la gestion administrative, budgétaire et financière de l'Institut. Supervise les ressources humaines et veille à la bonne exécution des marchés publics.",
    variant: "neutral" as const,
  },
]

const departements = [
  {
    num: "01",
    titre: "Département sport",
    description:
      "Coordination des fédérations nationales, gestion des compétitions officielles et suivi des athlètes de haut niveau.",
    effectif: "12 agents",
  },
  {
    num: "02",
    titre: "Département jeunesse",
    description:
      "Conception et mise en œuvre des programmes d'encadrement, de volontariat et d'action citoyenne pour la jeunesse comorienne.",
    effectif: "8 agents",
  },
  {
    num: "03",
    titre: "Département formations",
    description:
      "Organisation des formations pour les encadrants sportifs, arbitres, entraîneurs et responsables fédéraux.",
    effectif: "6 agents",
  },
  {
    num: "04",
    titre: "Département infrastructures",
    description:
      "Gestion, maintenance et développement des équipements sportifs sur les trois îles de l'archipel.",
    effectif: "15 agents",
  },
  {
    num: "05",
    titre: "Administration & finances",
    description:
      "Gestion administrative, budgétaire et comptable de l'Institut. Ressources humaines et marchés publics.",
    effectif: "10 agents",
  },
  {
    num: "06",
    titre: "Communication & médias",
    description:
      "Rayonnement institutionnel, relations presse, production de contenus et gestion des plateformes numériques.",
    effectif: "4 agents",
  },
]



export default function OrganigrammePage() {
  return (
    <div style={{ minHeight: "100vh", background: "white" }}>
      <style>{`
        .org-inner { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; }

        .org-section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--vert);
          font-family: var(--font-syne);
          margin-bottom: 14px;
        }
        .org-section-title {
          font-size: 30px;
          font-weight: 800;
          font-family: var(--font-syne);
          color: var(--encre);
          margin: 0 0 20px;
          line-height: 1.15;
        }

        /* Mot du directeur */
        .org-mot { max-width: 800px; margin: 0 0 72px; }
        .org-mot p {
          font-size: 17px;
          color: #555;
          line-height: 1.85;
          font-family: var(--font-syne);
          margin: 0 0 14px;
        }
        .org-mot p:last-of-type { margin-bottom: 20px; }
        .org-mot-sig {
          font-size: 14px;
          font-weight: 700;
          color: var(--encre);
          font-family: var(--font-syne);
        }
        .org-mot-sig span {
          display: block;
          font-size: 13px;
          font-weight: 400;
          color: #888;
          margin-top: 2px;
        }



        /* Direction */
        .org-gouvernance { margin-bottom: 80px; }
        .org-dir-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 32px; }

        .org-dir-card {
          border: 1px solid #eee;
          border-radius: 8px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .org-dir-card:hover {
          border-color: var(--vert-2);
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
        }
        .org-dir-poste {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--vert);
          font-family: var(--font-syne);
        }
        .org-dir-nom {
          font-size: 20px;
          font-weight: 800;
          color: var(--encre);
          font-family: var(--font-syne);
          margin: 0;
          line-height: 1.2;
        }
        .org-dir-desc {
          font-size: 15px;
          color: #666;
          line-height: 1.75;
          font-family: var(--font-syne);
          margin: 0;
        }

        /* Départements */
        .org-dept-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 32px;
        }
        .org-dept-card {
          border: 1px solid #eee;
          border-radius: 8px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .org-dept-card:hover {
          border-color: var(--vert-2);
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
        }
        .org-dept-num {
          font-size: 13px;
          font-weight: 700;
          color: var(--vert);
          font-family: var(--font-syne);
          letter-spacing: 0.08em;
        }
        .org-dept-titre {
          font-size: 18px;
          font-weight: 800;
          color: var(--encre);
          font-family: var(--font-syne);
          margin: 0;
          line-height: 1.2;
        }
        .org-dept-desc {
          font-size: 15px;
          color: #666;
          line-height: 1.75;
          font-family: var(--font-syne);
          margin: 0;
          flex: 1;
        }
        .org-dept-badge {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          color: var(--vert);
          font-family: var(--font-syne);
          margin-top: 4px;
        }

        @media (max-width: 860px) {
          .org-stats { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .org-inner { padding: 40px 20px 60px; }
          .org-dir-grid { grid-template-columns: 1fr; }
          .org-dept-grid { grid-template-columns: 1fr; }
          .org-stats { grid-template-columns: 1fr 1fr; }
          .org-section-title { font-size: 24px; }
        }
      `}</style>

      <PageHero
        label="L'institution"
        titre="Direction & Équipe"
        description="La direction générale et les départements de l'INJS — au service du sport et de la jeunesse comorienne."
        image="/directeurINJS.jpg"
        imageAlt="Direction de l'INJS"
      />

      <div className="org-inner">

        {/* Mot du directeur */}
        <div className="org-mot">
          <div className="org-section-label">Mot du Directeur général</div>
          <h2 className="org-section-title">Les Comores entrent dans une nouvelle ère sportive</h2>
          <p>
            L'INJS se donne les outils pour être à la hauteur de cette ambition. Les Jeux des Îles de l'Océan Indien 2027 représentent une opportunité historique pour notre pays. Nous travaillons chaque jour à structurer le sport comorien — ses fédérations, ses athlètes, ses infrastructures — pour que les Comores se présentent à cette échéance avec la dignité et l'organisation qu'elle mérite.
          </p>
          <p>
            L'INJS s'engage à accompagner chaque fédération, chaque jeune talent et chaque partenaire dans cette dynamique nationale. Notre institution ne se limite pas à administrer le sport : elle le construit, elle le pense, elle le défend. Chaque décision prise ici a des répercussions directes sur le terrain, sur les athlètes, sur les jeunes que nous accompagnons dans leur parcours.
          </p>
          <p>
            Ensemble, nous bâtirons un sport comorien fort, visible et reconnu à l'échelle de la région.
          </p>
          <div className="org-mot-sig">
            Mohmed Ali Chahidi
            <span>Directeur général de l'INJS</span>
          </div>
        </div>

        {/* Direction */}
        <div className="org-gouvernance">
          <div className="org-section-label">Gouvernance</div>
          <h2 className="org-section-title">Direction générale</h2>
          <div className="org-dir-grid">
            {directeurs.map((d) => (
              <div key={d.nom} className="org-dir-card">
                <div className="org-dir-poste">{d.poste}</div>
                <h3 className="org-dir-nom">{d.nom}</h3>
                <p className="org-dir-desc">{d.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Départements */}
        <div>
          <div className="org-section-label">Structure</div>
          <h2 className="org-section-title">Nos départements</h2>
          <div className="org-dept-grid">
            {departements.map((d) => (
              <div key={d.titre} className="org-dept-card">
                <div className="org-dept-num">{d.num}</div>
                <h3 className="org-dept-titre">{d.titre}</h3>
                <p className="org-dept-desc">{d.description}</p>
                <span className="org-dept-badge">{d.effectif}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}