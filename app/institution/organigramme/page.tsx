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
    icon: "🏆",
    couleur: "sport",
    titre: "Département sport",
    description:
      "Coordination des fédérations nationales, gestion des compétitions officielles et suivi des athlètes de haut niveau.",
    effectif: "12 agents",
  },
  {
    icon: "👥",
    couleur: "jeunesse",
    titre: "Département jeunesse",
    description:
      "Conception et mise en œuvre des programmes d'encadrement, de volontariat et d'action citoyenne pour la jeunesse comorienne.",
    effectif: "8 agents",
  },
  {
    icon: "🎓",
    couleur: "formation",
    titre: "Département formations",
    description:
      "Organisation des formations pour les encadrants sportifs, arbitres, entraîneurs et responsables fédéraux.",
    effectif: "6 agents",
  },
  {
    icon: "🏗️",
    couleur: "infra",
    titre: "Département infrastructures",
    description:
      "Gestion, maintenance et développement des équipements sportifs sur les trois îles de l'archipel.",
    effectif: "15 agents",
  },
  {
    icon: "💼",
    couleur: "admin",
    titre: "Administration & finances",
    description:
      "Gestion administrative, budgétaire et comptable de l'Institut. Ressources humaines et marchés publics.",
    effectif: "10 agents",
  },
  {
    icon: "📢",
    couleur: "com",
    titre: "Communication & médias",
    description:
      "Rayonnement institutionnel, relations presse, production de contenus et gestion des plateformes numériques.",
    effectif: "4 agents",
  },
]

const iconColors: Record<string, { bg: string; color: string }> = {
  sport:    { bg: "#E1F5EE", color: "#0F6E56" },
  jeunesse: { bg: "#E6F1FB", color: "#185FA5" },
  formation:{ bg: "#EEEDFE", color: "#534AB7" },
  infra:    { bg: "#FAEEDA", color: "#854F0B" },
  admin:    { bg: "#F1EFE8", color: "#5F5E5A" },
  com:      { bg: "#FBEAF0", color: "#993556" },
}

export default function OrganigrammePage() {
  return (
    <div style={{ minHeight: "100vh", background: "white" }}>
      <style>{`
        .org-inner { max-width: 1080px; margin: 0 auto; padding: 56px 40px 80px; }

        /* Section labels */
        .org-section-label { font-size: 10px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: #888; margin-bottom: 8px; display: block; font-family: var(--font-syne); }
        .org-section-title { font-size: 20px; font-weight: 500; color: var(--encre); margin-bottom: 28px; font-family: var(--font-syne); }

        /* Direction */
        .org-gouvernance { margin-bottom: 64px; }
        .org-dir-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

        .org-dir-card { display: flex; background: white; border: 0.5px solid #e8e8e4; border-radius: 12px; overflow: hidden; transition: border-color 0.15s; }
        .org-dir-card:hover { border-color: #d0d0cc; }

        .org-dir-avatar { width: 100px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 500; border-right: 0.5px solid #e8e8e4; }
        .org-dir-avatar.green { background: #E1F5EE; color: #0F6E56; }
        .org-dir-avatar.neutral { background: #f5f5f3; color: #888; }

        .org-dir-body { padding: 20px; flex: 1; }
        .org-dir-poste { font-size: 10px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #888; margin-bottom: 6px; display: block; font-family: var(--font-syne); }
        .org-dir-nom { font-size: 16px; font-weight: 500; color: var(--encre); margin: 0 0 10px; font-family: var(--font-syne); }
        .org-dir-desc { font-size: 13px; color: #666; line-height: 1.75; margin: 0; font-family: var(--font-syne); }

        /* Départements */
        .org-dept-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }

        .org-dept-card { background: white; border: 0.5px solid #e8e8e4; border-radius: 12px; padding: 20px; display: flex; flex-direction: column; transition: border-color 0.15s; }
        .org-dept-card:hover { border-color: #d0d0cc; }

        .org-dept-icon { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; font-size: 18px; }
        .org-dept-titre { font-size: 14px; font-weight: 500; color: var(--encre); margin-bottom: 8px; font-family: var(--font-syne); }
        .org-dept-desc { font-size: 13px; color: #666; line-height: 1.7; font-family: var(--font-syne); flex: 1; }
        .org-dept-footer { margin-top: 16px; padding-top: 12px; border-top: 0.5px solid #f0f0ed; }
        .org-dept-badge { display: inline-block; font-size: 11px; font-weight: 500; color: #0F6E56; background: #E1F5EE; padding: 2px 8px; border-radius: 20px; font-family: var(--font-syne); }

        @media (max-width: 860px) { .org-dept-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 768px) {
          .org-inner { padding: 36px 20px 60px; }
          .org-dir-grid { grid-template-columns: 1fr; }
          .org-dept-grid { grid-template-columns: 1fr; }
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

        {/* Gouvernance */}
        <div className="org-gouvernance">
          <span className="org-section-label">Gouvernance</span>
          <h2 className="org-section-title">Direction générale</h2>
          <div className="org-dir-grid">
            {directeurs.map((d) => (
              <div key={d.nom} className="org-dir-card">
                <div className={`org-dir-avatar ${d.variant}`}>{d.initiales}</div>
                <div className="org-dir-body">
                  <span className="org-dir-poste">{d.poste}</span>
                  <h3 className="org-dir-nom">{d.nom}</h3>
                  <p className="org-dir-desc">{d.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Départements */}
        <div>
          <span className="org-section-label">Structure</span>
          <h2 className="org-section-title">Nos départements</h2>
          <div className="org-dept-grid">
            {departements.map((d) => {
              const colors = iconColors[d.couleur]
              return (
                <div key={d.titre} className="org-dept-card">
                  <div
                    className="org-dept-icon"
                    style={{ background: colors.bg, color: colors.color }}
                    aria-hidden="true"
                  >
                    {d.icon}
                  </div>
                  <div className="org-dept-titre">{d.titre}</div>
                  <p className="org-dept-desc">{d.description}</p>
                  <div className="org-dept-footer">
                    <span className="org-dept-badge">{d.effectif}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}