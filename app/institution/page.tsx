import PageHero from '@/components/ui/PageHero'
import Link from 'next/link'

export const metadata = {
  title: "L'Institution — INJS",
  description: "Découvrez l'histoire, les missions et les équipes de l'Institut National de la Jeunesse et des Sports des Comores.",
}

const sections = [
  {
    titre: "Missions & Histoire",
    description: "Créé pour structurer la politique sportive nationale, l'INJS porte depuis sa fondation la mission de développer le sport et d'encadrer la jeunesse comorienne.",
    href: "/institution/presentation",
    image: "/accueil.jpg",
  },
  {
    titre: "Direction & Équipe",
    description: "La direction générale et les départements de l'INJS — encadrants techniques, responsables administratifs et agents au service du sport national.",
    href: "/institution/organigramme",
    image: "/accueil.jpg",
  },
  {
    titre: "Rapports Annuels",
    description: "Les rapports d'activité annuels de l'INJS — bilan des programmes, résultats sportifs, perspectives institutionnelles et financières.",
    href: "/institution/rapports",
    image: "/accueil.jpg",
  },
  {
    titre: "Contact",
    description: "Coordonnées, horaires d'ouverture et formulaire de contact de l'Institut National de la Jeunesse et des Sports de l'Union des Comores.",
    href: "/contact",
    image: "/accueil.jpg",
  },
]

export default function InstitutionPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .inst-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 40px 80px;
        }

        .inst-intro {
          max-width: 800px;
          margin: 0 0 60px;
          text-align: left;
        }

        .inst-intro h2 {
          font-size: 28px;
          font-weight: 800;
          font-family: var(--font-syne);
          color: var(--encre);
          margin: 0 0 16px;
        }

        .inst-intro p {
          font-size: 17px;
          color: #555;
          line-height: 1.8;
          font-family: var(--font-syne);
        }

        .inst-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .inst-card {
          border: 1px solid #eee;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          transition: box-shadow 0.2s, border-color 0.2s;
          cursor: pointer;
        }

        .inst-card:hover {
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
          border-color: var(--vert-2);
        }

        .inst-imgwrap {
          height: 220px;
          overflow: hidden;
          background: #f5faf6;
        }

        .inst-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
          display: block;
        }

        .inst-card:hover .inst-img { transform: scale(1.04); }

        .inst-body {
          padding: 28px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .inst-body h2 {
          font-size: 20px;
          font-weight: 800;
          font-family: var(--font-syne);
          color: var(--encre);
          margin: 0;
        }

        .inst-body p {
          font-size: 15px;
          color: #666;
          line-height: 1.75;
          font-family: var(--font-syne);
          flex: 1;
          margin: 0;
        }

        .inst-lien {
          font-size: 14px;
          font-weight: 600;
          color: var(--vert);
          font-family: var(--font-syne);
        }

        @media (max-width: 768px) {
          .inst-grid { grid-template-columns: 1fr; }
          .inst-inner { padding: 40px 20px 60px; }
        }
      `}</style>

      <PageHero
        label="INJS — Comores"
        titre="L'Institution"
        description="L'Institut National de la Jeunesse et des Sports est l'organe de référence pour le développement du sport, de la jeunesse et de l'éducation physique dans l'Union des Comores."
        image="/accueil.jpg"
        imageAlt="Institut National de la Jeunesse et des Sports"
      />

      <div className="inst-inner">

        <div className="inst-intro">
          <h2>L'Institut National de la Jeunesse et des Sports</h2>
          <p>
            Fondé pour structurer la politique sportive nationale, l'INJS est l'institution de référence
            pour le développement du sport, de la jeunesse et de l'éducation physique dans l'Union des Comores.
            Il pilote les fédérations, forme les encadrants et prépare le pays aux grandes échéances internationales,
            dont les Jeux des Îles de l'Océan Indien 2027.
          </p>
        </div>

        <div className="inst-grid">
          {sections.map(s => (
            <Link key={s.href} href={s.href} className="inst-card">
              <div className="inst-imgwrap">
                <img src={s.image} alt={s.titre} className="inst-img" />
              </div>
              <div className="inst-body">
                <h2>{s.titre}</h2>
                <p>{s.description}</p>
                <span className="inst-lien">Découvrir →</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}