import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/ui/PageHero'

export const metadata = {
  title: "Fédérations sportives — INJS Comores",
  description: "Les fédérations sportives nationales des Comores — football, judo, boxe, athlétisme et plus.",
}

const federations = [
  { slug: "football", titre: "Football", federation: "FFC", description: "Fédération Comorienne de Football — le sport le plus populaire de l'archipel.", image: "/accueil.jpg" },
  { slug: "judo", titre: "Judo", federation: "FCJ", description: "Fédération Comorienne de Judo — discipline phare des Comores aux compétitions régionales.", image: "/accueil.jpg" },
  { slug: "boxe", titre: "Boxe", federation: "FCB", description: "Fédération Comorienne de Boxe — formation et compétition de haut niveau.", image: "/accueil.jpg" },
  { slug: "athletisme", titre: "Athlétisme", federation: "FCA", description: "Fédération Comorienne d'Athlétisme — courses, sauts et lancers aux Comores.", image: "/accueil.jpg" },
  { slug: "basketball", titre: "Basketball", federation: "FCBB", description: "Fédération Comorienne de Basketball — championnats nationaux hommes et femmes.", image: "/accueil.jpg" },
  { slug: "volleyball", titre: "Volleyball", federation: "FCV", description: "Fédération Comorienne de Volleyball — compétitions sur les trois îles.", image: "/accueil.jpg" },
  { slug: "natation", titre: "Natation", federation: "FCN", description: "Fédération Comorienne de Natation — développement de la natation dans l'archipel.", image: "/accueil.jpg" },
  { slug: "escrime", titre: "Escrime", federation: "FCE", description: "Fédération Comorienne d'Escrime — discipline en plein essor aux Comores.", image: "/accueil.jpg" },
  { slug: "handball", titre: "Handball", federation: "FCH", description: "Fédération Comorienne de Handball — sport collectif en développement.", image: "/accueil.jpg" },
]

export default function FederationsHubPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .fed-inner { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; }

        .fed-intro { max-width: 800px; margin: 0 0 56px; }
        .fed-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .fed-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 16px; line-height: 1.15; }
        .fed-text { font-size: 17px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0; }

        .fed-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }

        .fed-card { display: flex; flex-direction: column; overflow: hidden; border: 1px solid #eee; text-decoration: none; background: white; transition: box-shadow 0.3s ease; }
        .fed-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.10); }

        .fed-img-wrap { position: relative; height: 220px; overflow: hidden; }
        .fed-img { object-fit: cover; transition: transform 0.5s ease; }
        .fed-card:hover .fed-img { transform: scale(1.04); }
        .fed-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.06); transition: background 0.3s ease; }
        .fed-card:hover .fed-overlay { background: rgba(0,0,0,0.16); }

        .fed-body { padding: 24px 28px; border-top: 3px solid transparent; transition: border-color 0.3s ease; }
        .fed-card:hover .fed-body { border-color: var(--vert); }

        .fed-cat { font-size: 9px; font-family: var(--font-syne); font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); display: block; margin-bottom: 8px; }
        .fed-nom { font-size: 20px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); line-height: 1.2; margin-bottom: 0; transition: margin-bottom 0.3s ease; }
        .fed-card:hover .fed-nom { margin-bottom: 14px; }

        .fed-hover { max-height: 0; overflow: hidden; opacity: 0; transition: max-height 0.4s ease, opacity 0.3s ease; }
        .fed-card:hover .fed-hover { max-height: 120px; opacity: 1; }
        .fed-desc { font-size: 14px; color: #555; line-height: 1.7; font-family: var(--font-syne); margin-bottom: 10px; }
        .fed-lien { font-size: 12px; font-weight: 700; color: var(--vert); font-family: var(--font-syne); letter-spacing: 0.04em; }

        @media (max-width: 768px) {
          .fed-inner { padding: 40px 20px 60px; }
          .fed-grid { grid-template-columns: 1fr; }
          .fed-hover { max-height: none; opacity: 1; }
          .fed-nom { margin-bottom: 12px; }
        }
      `}</style>

      <PageHero
        label="Sport"
        titre="Fédérations nationales"
        description="Les fédérations sportives nationales des Comores — structures, compétitions et athlètes sous tutelle de l'INJS."
        image="/accueil.jpg"
        imageAlt="Fédérations sportives Comores"
      />

      <div className="fed-inner">
        <div className="fed-intro">
          <span className="fed-label">Sport national</span>
          <h2 className="fed-title">9 fédérations nationales</h2>
          <p className="fed-text">
            Chaque fédération sportive nationale est agréée par l'INJS et affiliée à sa fédération
            internationale respective. Elles organisent les championnats nationaux, sélectionnent
            les athlètes pour les compétitions régionales et forment les encadrants techniques.
          </p>
        </div>

        <div className="fed-grid">
          {federations.map(f => (
            <Link key={f.slug} href={`/federations/${f.slug}`} className="fed-card">
              <div className="fed-img-wrap">
                <Image src={f.image} alt={f.titre} fill className="fed-img" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="fed-overlay" />
              </div>
              <div className="fed-body">
                <span className="fed-cat">{f.federation}</span>
                <h3 className="fed-nom">{f.titre}</h3>
                <div className="fed-hover">
                  <p className="fed-desc">{f.description}</p>
                  <span className="fed-lien">Voir la fédération →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}