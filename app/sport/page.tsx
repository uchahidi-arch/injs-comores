import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/ui/PageHero'

export const metadata = {
  title: "Sport — INJS Comores",
  description: "Le sport comorien — fédérations, compétitions, infrastructures et résultats.",
}

const sections = [
  {
    categorie: "Organisation",
    titre: "Fédérations nationales",
    description: "Les 9 fédérations sportives nationales agréées par l'INJS — football, judo, boxe, athlétisme et plus.",
    href: "/federations",
    image: "/accueil.jpg",
  },
  {
    categorie: "Compétitions",
    titre: "Compétitions & résultats",
    description: "Calendrier des compétitions nationales, résultats et classements par discipline et par saison.",
    href: "/sport/competitions",
    image: "/accueil.jpg",
  },
  {
    categorie: "Équipements",
    titre: "Infrastructures sportives",
    description: "Stades, gymnases, dojos et piscines — les équipements sportifs de l'INJS sur les trois îles.",
    href: "/infrastructures",
    image: "/accueil.jpg",
  },
  {
    categorie: "Athlètes",
    titre: "Athlètes nationaux",
    description: "Les athlètes comoriens en activité — profils, palmarès et sélections nationales.",
    href: "/sport/athletes",
    image: "/accueil.jpg",
  },
]

export default function SportHubPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .sh-inner { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; }
        .sh-intro { max-width: 800px; margin: 0 0 56px; }
        .sh-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .sh-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 16px; line-height: 1.15; }
        .sh-text { font-size: 17px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0; }
        .sh-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .sh-card { display: flex; flex-direction: column; overflow: hidden; border: 1px solid #eee; text-decoration: none; background: white; transition: box-shadow 0.3s ease; }
        .sh-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.10); }
        .sh-img-wrap { position: relative; height: 240px; overflow: hidden; }
        .sh-img { object-fit: cover; transition: transform 0.5s ease; }
        .sh-card:hover .sh-img { transform: scale(1.04); }
        .sh-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.06); transition: background 0.3s ease; }
        .sh-card:hover .sh-overlay { background: rgba(0,0,0,0.16); }
        .sh-body { padding: 24px 28px; border-top: 3px solid transparent; transition: border-color 0.3s ease; }
        .sh-card:hover .sh-body { border-color: var(--vert); }
        .sh-cat { font-size: 9px; font-family: var(--font-syne); font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); display: block; margin-bottom: 8px; }
        .sh-nom { font-size: 20px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); line-height: 1.2; margin-bottom: 0; transition: margin-bottom 0.3s ease; }
        .sh-card:hover .sh-nom { margin-bottom: 14px; }
        .sh-hover { max-height: 0; overflow: hidden; opacity: 0; transition: max-height 0.4s ease, opacity 0.3s ease; }
        .sh-card:hover .sh-hover { max-height: 120px; opacity: 1; }
        .sh-desc { font-size: 14px; color: #555; line-height: 1.7; font-family: var(--font-syne); margin-bottom: 10px; }
        .sh-lien { font-size: 12px; font-weight: 700; color: var(--vert); font-family: var(--font-syne); }
        @media (max-width: 768px) { .sh-inner { padding: 40px 20px 60px; } .sh-grid { grid-template-columns: 1fr; } .sh-hover { max-height: none; opacity: 1; } .sh-nom { margin-bottom: 12px; } }
      `}</style>

      <PageHero label="INJS" titre="Sport" description="Fédérations, compétitions, infrastructures et athlètes — tout le sport comorien organisé et structuré par l'INJS." image="/accueil.jpg" imageAlt="Sport INJS Comores" />

      <div className="sh-inner">
        <div className="sh-intro">
          <span className="sh-label">Sport national</span>
          <h2 className="sh-title">Le sport comorien en un coup d'œil</h2>
          <p className="sh-text">L'INJS structure l'ensemble du système sportif national — des fédérations aux infrastructures, des compétitions à la détection des talents. Retrouvez ici toutes les informations sur le sport comorien.</p>
        </div>
        <div className="sh-grid">
          {sections.map(s => (
            <Link key={s.href} href={s.href} className="sh-card">
              <div className="sh-img-wrap">
                <Image src={s.image} alt={s.titre} fill className="sh-img" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="sh-overlay" />
              </div>
              <div className="sh-body">
                <span className="sh-cat">{s.categorie}</span>
                <h3 className="sh-nom">{s.titre}</h3>
                <div className="sh-hover">
                  <p className="sh-desc">{s.description}</p>
                  <span className="sh-lien">Explorer →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
