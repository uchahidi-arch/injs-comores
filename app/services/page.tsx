import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/ui/PageHero'

export const metadata = {
  title: "Services — INJS Comores",
  description: "Démarches administratives, licences, agréments, formations et certifications — tous les services de l'INJS en ligne.",
}

const services = [
  {
    slug: "licences",
    categorie: "Démarches administratives",
    titre: "Demande de licence",
    description: "Obtenez votre licence sportive officielle en ligne. Valable sur toutes les compétitions nationales organisées par l'INJS.",
    href: "/services/licences",
    image: "/accueil.jpg",
  },
  {
    slug: "agrements",
    categorie: "Démarches administratives",
    titre: "Agrément de club",
    description: "Faites agréer votre club sportif auprès de l'INJS. Procédure en ligne, réponse sous 30 jours.",
    href: "/services/agrements",
    image: "/accueil.jpg",
  },
  {
    slug: "subventions",
    categorie: "Démarches administratives",
    titre: "Demande de subvention",
    description: "Les clubs et fédérations agréés peuvent solliciter une subvention annuelle auprès de l'INJS.",
    href: "/services/subventions",
    image: "/accueil.jpg",
  },
  {
    slug: "evenements",
    categorie: "Démarches administratives",
    titre: "Autorisation d'événement",
    description: "Organisez un événement sportif officiel — demandez votre autorisation en ligne auprès de l'INJS.",
    href: "/services/evenements",
    image: "/accueil.jpg",
  },
  {
    slug: "formations",
    categorie: "Formations & certifications",
    titre: "Formations officielles",
    description: "Stages certifiés pour arbitres, entraîneurs et éducateurs sportifs — calendrier et inscription en ligne.",
    href: "/formations",
    image: "/benevolat_2027.jpg",
  },
  {
    slug: "formations-inscription",
    categorie: "Formations & certifications",
    titre: "Inscription en ligne",
    description: "Inscrivez-vous directement aux formations officielles de l'INJS — arbitrage, coaching, éducation physique.",
    href: "/formations/inscription",
    image: "/benevolat_2027.jpg",
  },
  {
    slug: "certifications",
    categorie: "Formations & certifications",
    titre: "Certifications",
    description: "Retrouvez vos certificats et diplômes délivrés par l'INJS — téléchargement et vérification en ligne.",
    href: "/certifications",
    image: "/accueil.jpg",
  },
]

export default function ServicesHubPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .srv-inner { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; }
        .srv-intro { max-width: 800px; margin: 0 0 56px; }
        .srv-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .srv-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 16px; line-height: 1.15; }
        .srv-text { font-size: 17px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0; }
        .srv-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .srv-card { display: flex; flex-direction: column; overflow: hidden; border: 1px solid #eee; text-decoration: none; background: white; transition: box-shadow 0.3s ease; }
        .srv-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.10); }
        .srv-img-wrap { position: relative; height: 220px; overflow: hidden; }
        .srv-img { object-fit: cover; transition: transform 0.5s ease; }
        .srv-card:hover .srv-img { transform: scale(1.04); }
        .srv-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.06); transition: background 0.3s ease; }
        .srv-card:hover .srv-overlay { background: rgba(0,0,0,0.16); }
        .srv-body { padding: 24px 28px; border-top: 3px solid transparent; transition: border-color 0.3s ease; }
        .srv-card:hover .srv-body { border-color: var(--vert); }
        .srv-cat { font-size: 9px; font-family: var(--font-syne); font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); display: block; margin-bottom: 8px; }
        .srv-nom { font-size: 20px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); line-height: 1.2; margin-bottom: 0; transition: margin-bottom 0.3s ease; }
        .srv-card:hover .srv-nom { margin-bottom: 14px; }
        .srv-hover { max-height: 0; overflow: hidden; opacity: 0; transition: max-height 0.4s ease, opacity 0.3s ease; }
        .srv-card:hover .srv-hover { max-height: 120px; opacity: 1; }
        .srv-desc { font-size: 14px; color: #555; line-height: 1.7; font-family: var(--font-syne); margin-bottom: 10px; }
        .srv-lien { font-size: 12px; font-weight: 700; color: var(--vert); font-family: var(--font-syne); letter-spacing: 0.04em; }
        @media (max-width: 768px) { .srv-inner { padding: 40px 20px 60px; } .srv-grid { grid-template-columns: 1fr; } .srv-hover { max-height: none; opacity: 1; } .srv-nom { margin-bottom: 12px; } }
      `}</style>

      <PageHero
        label="INJS"
        titre="Services en ligne"
        description="Licences, agréments, subventions, formations — toutes vos démarches administratives et certifications en un seul endroit."
        image="/accueil.jpg"
        imageAlt="Services INJS"
      />

      <div className="srv-inner">
        <div className="srv-intro">
          <span className="srv-label">Démarches & formations</span>
          <h2 className="srv-title">Tous vos services en ligne</h2>
          <p className="srv-text">
            L'INJS digitalise progressivement l'ensemble de ses services administratifs. Licences sportives,
            agréments de clubs, demandes de subventions, autorisations d'événements et inscriptions aux
            formations officielles — tout est accessible directement en ligne.
          </p>
        </div>

        <div className="srv-grid">
          {services.map(s => (
            <Link key={s.slug} href={s.href} className="srv-card">
              <div className="srv-img-wrap">
                <Image src={s.image} alt={s.titre} fill className="srv-img" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="srv-overlay" />
              </div>
              <div className="srv-body">
                <span className="srv-cat">{s.categorie}</span>
                <h3 className="srv-nom">{s.titre}</h3>
                <div className="srv-hover">
                  <p className="srv-desc">{s.description}</p>
                  <span className="srv-lien">Accéder →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
