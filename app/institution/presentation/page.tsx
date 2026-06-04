import PageHero from '@/components/ui/PageHero'

export const metadata = {
  title: "Missions & Histoire — INJS",
  description: "Découvrez les missions, les axes stratégiques et l'histoire de l'Institut National de la Jeunesse et des Sports des Comores.",
}

const axes = [
  {
    num: "01",
    titre: "Formation & Excellence sportive",
    description: "Développer les centres de formation, détecter les talents et accompagner les athlètes vers le haut niveau national et international.",
  },
  {
    num: "02",
    titre: "Encadrement de la jeunesse",
    description: "Mettre en place des programmes d'éducation citoyenne, de volontariat et d'insertion sociale pour la jeunesse comorienne.",
  },
  {
    num: "03",
    titre: "Infrastructures sportives",
    description: "Gérer, entretenir et développer les équipements sportifs sur l'ensemble des trois îles de l'archipel.",
  },
  {
    num: "04",
    titre: "Partenariats & rayonnement",
    description: "Renforcer les liens avec les organisations sportives régionales et internationales pour le rayonnement du sport comorien.",
  },
]

const histoire = [
  {
    annee: "1975",
    texte: "Création de l'INJS après l'indépendance des Comores, pour structurer la politique sportive nationale.",
  },
  {
    annee: "1990",
    texte: "Restructuration de l'Institut avec la mise en place des premières fédérations sportives nationales affiliées.",
  },
  {
    annee: "2005",
    texte: "Ouverture du Gymnase National de Moroni et développement des infrastructures sportives sur les trois îles.",
  },
  {
    annee: "2015",
    texte: "Lancement du programme national de détection des jeunes talents sportifs en partenariat avec les académies régionales.",
  },
  {
    annee: "2024",
    texte: "Déploiement du programme Ya Mkobe — Action Citoyenne, pour l'engagement et la formation des jeunes leaders comoriens.",
  },
]

export default function PresentationPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .pr-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 40px 80px;
        }

        /* ── Bloc mission ── */
        .pr-mission {
          max-width: 800px;
          margin: 0 0 72px;
        }
        .pr-section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--vert);
          font-family: var(--font-syne);
          margin-bottom: 14px;
        }
        .pr-section-title {
          font-size: 30px;
          font-weight: 800;
          font-family: var(--font-syne);
          color: var(--encre);
          margin: 0 0 20px;
          line-height: 1.15;
        }
        .pr-mission p {
          font-size: 17px;
          color: #555;
          line-height: 1.85;
          font-family: var(--font-syne);
          margin: 0 0 14px;
        }
        .pr-mission p:last-child { margin: 0; }

        /* ── Axes stratégiques ── */
        .pr-axes {
          margin: 0 0 80px;
        }
        .pr-axes-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 32px;
        }
        .pr-axe {
          border: 1px solid #eee;
          border-radius: 8px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .pr-axe:hover {
          border-color: var(--vert-2);
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
        }
        .pr-axe-num {
          font-size: 13px;
          font-weight: 700;
          color: var(--vert);
          font-family: var(--font-syne);
          letter-spacing: 0.08em;
        }
        .pr-axe h3 {
          font-size: 18px;
          font-weight: 800;
          font-family: var(--font-syne);
          color: var(--encre);
          margin: 0;
          line-height: 1.2;
        }
        .pr-axe p {
          font-size: 15px;
          color: #666;
          line-height: 1.75;
          font-family: var(--font-syne);
          margin: 0;
        }

        /* ── Histoire ── */
        .pr-histoire { margin: 0; }
        .pr-timeline {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .pr-event {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 24px;
          padding: 20px 0;
          border-bottom: 1px solid #f0f0f0;
          align-items: start;
        }
        .pr-event:last-child { border-bottom: none; }
        .pr-event-annee {
          font-size: 15px;
          font-weight: 800;
          color: var(--vert);
          font-family: var(--font-syne);
          padding-top: 2px;
        }
        .pr-event p {
          font-size: 15px;
          color: #555;
          line-height: 1.75;
          font-family: var(--font-syne);
          margin: 0;
        }

        @media (max-width: 768px) {
          .pr-inner { padding: 40px 20px 60px; }
          .pr-axes-grid { grid-template-columns: 1fr; }
          .pr-section-title { font-size: 24px; }
        }
      `}</style>

      <PageHero
        label="L'Institution"
        titre="Missions & Histoire"
        description="L'INJS — ses missions fondatrices, ses axes stratégiques et les grandes étapes de son histoire au service du sport comorien."
        image="/accueil.jpg"
        imageAlt="Missions et Histoire de l'INJS"
      />

      <div className="pr-inner">

        {/* Mission */}
        <div className="pr-mission">
          <div className="pr-section-label">Notre mission</div>
          <h2 className="pr-section-title">Une institution au service du sport national</h2>
          <p>
            L'Institut National de la Jeunesse et des Sports (INJS) est l'établissement public de référence
            chargé de la politique nationale en matière de sport, d'éducation physique et de jeunesse dans
            l'Union des Comores. Il a pour mission principale de concevoir, coordonner et mettre en œuvre
            les programmes nationaux de développement sportif et d'encadrement de la jeunesse.
          </p>
          <p>
            L'INJS œuvre au quotidien pour la détection et la formation des talents sportifs, le soutien
            aux fédérations nationales, ainsi que la promotion des valeurs citoyennes au sein de la jeunesse comorienne.
          </p>
        </div>

        {/* Axes stratégiques */}
        <div className="pr-axes">
          <div className="pr-section-label">Axes stratégiques</div>
          <h2 className="pr-section-title">Nos priorités d'action</h2>
          <div className="pr-axes-grid">
            {axes.map(a => (
              <div key={a.num} className="pr-axe">
                <div className="pr-axe-num">{a.num}</div>
                <h3>{a.titre}</h3>
                <p>{a.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Histoire */}
        <div className="pr-histoire">
          <div className="pr-section-label">Histoire de l'INJS</div>
          <h2 className="pr-section-title">Cinq décennies au service du sport</h2>
          <div className="pr-timeline">
            {histoire.map(e => (
              <div key={e.annee} className="pr-event">
                <div className="pr-event-annee">{e.annee}</div>
                <p>{e.texte}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}