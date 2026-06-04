import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/ui/PageHero'

export const metadata = {
  title: "Jeunesse — INJS Comores",
  description: "Les programmes jeunesse de l'INJS — action citoyenne, volontariat, bourses et clubs citoyens.",
}

const programmes = [
  {
    slug: "action-citoyen",
    categorie: "Programme phare",
    titre: "Ya Mkobe — Action Citoyenne",
    description: "Le programme national d'engagement citoyen de la jeunesse comorienne. Formation, leadership et service communautaire.",
    href: "/jeunesse/action-citoyen",
    image: "/benevolat_2027.jpg",
    phare: true,
  },
  {
    slug: "volontariat",
    categorie: "Engagement",
    titre: "Volontariat national",
    description: "Rejoignez le programme de volontariat national — missions d'intérêt général sur les trois îles des Comores.",
    href: "/jeunesse/volontariat",
    image: "/accueil.jpg",
  },
  {
    slug: "clubs-citoyens",
    categorie: "Vie associative",
    titre: "Clubs citoyens",
    description: "Créez ou rejoignez un club citoyen dans votre commune — sport, culture, environnement et cohésion sociale.",
    href: "/jeunesse/clubs-citoyens",
    image: "/accueil.jpg",
  },
  {
    slug: "bourses",
    categorie: "Soutien",
    titre: "Bourses sportives",
    description: "L'INJS soutient les jeunes athlètes comoriens à fort potentiel — bourses de formation et d'excellence sportive.",
    href: "/jeunesse/bourses",
    image: "/accueil.jpg",
  },
  {
    slug: "camps",
    categorie: "Formation",
    titre: "Camps sportifs",
    description: "Camps de détection, de perfectionnement et de préparation physique organisés sur les trois îles chaque année.",
    href: "/jeunesse/camps",
    image: "/accueil.jpg",
  },
  {
    slug: "programmes",
    categorie: "Éducation",
    titre: "Programmes nationaux",
    description: "Les programmes d'éducation physique et sportive dans les établissements scolaires et universitaires comoriens.",
    href: "/jeunesse/programmes",
    image: "/accueil.jpg",
  },
]

export default function JeunesseHubPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .jh-inner { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; }
        .jh-intro { max-width: 800px; margin: 0 0 56px; }
        .jh-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .jh-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 16px; line-height: 1.15; }
        .jh-text { font-size: 17px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0; }

        /* Carte phare — pleine largeur */
        .jh-phare { display: flex; flex-direction: column; overflow: hidden; border: 1px solid #eee; text-decoration: none; background: white; transition: box-shadow 0.3s ease; margin-bottom: 24px; }
        .jh-phare:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.10); }
        .jh-phare-img-wrap { position: relative; height: 320px; overflow: hidden; }
        .jh-phare-img { object-fit: cover; transition: transform 0.5s ease; }
        .jh-phare:hover .jh-phare-img { transform: scale(1.03); }
        .jh-phare-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.06); transition: background 0.3s ease; }
        .jh-phare:hover .jh-phare-overlay { background: rgba(0,0,0,0.14); }
        .jh-phare-body { padding: 28px 32px; border-top: 3px solid transparent; transition: border-color 0.3s ease; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .jh-phare:hover .jh-phare-body { border-color: var(--vert); }
        .jh-phare-cat { font-size: 9px; font-family: var(--font-syne); font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); display: block; margin-bottom: 8px; }
        .jh-phare-titre { font-size: 24px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin-bottom: 10px; }
        .jh-phare-desc { font-size: 15px; color: #555; font-family: var(--font-syne); line-height: 1.7; max-width: 600px; }
        .jh-phare-lien { font-size: 13px; font-weight: 700; color: #fff; background: var(--vert); padding: 10px 20px; border-radius: 4px; white-space: nowrap; flex-shrink: 0; }

        /* Grille */
        .jh-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .jh-card { display: flex; flex-direction: column; overflow: hidden; border: 1px solid #eee; text-decoration: none; background: white; transition: box-shadow 0.3s ease; }
        .jh-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.10); }
        .jh-img-wrap { position: relative; height: 200px; overflow: hidden; }
        .jh-img { object-fit: cover; transition: transform 0.5s ease; }
        .jh-card:hover .jh-img { transform: scale(1.04); }
        .jh-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.06); transition: background 0.3s ease; }
        .jh-card:hover .jh-overlay { background: rgba(0,0,0,0.16); }
        .jh-body { padding: 24px 28px; border-top: 3px solid transparent; transition: border-color 0.3s ease; }
        .jh-card:hover .jh-body { border-color: var(--vert); }
        .jh-cat { font-size: 9px; font-family: var(--font-syne); font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); display: block; margin-bottom: 8px; }
        .jh-nom { font-size: 19px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); line-height: 1.2; margin-bottom: 0; transition: margin-bottom 0.3s ease; }
        .jh-card:hover .jh-nom { margin-bottom: 12px; }
        .jh-hover { max-height: 0; overflow: hidden; opacity: 0; transition: max-height 0.4s ease, opacity 0.3s ease; }
        .jh-card:hover .jh-hover { max-height: 120px; opacity: 1; }
        .jh-desc { font-size: 14px; color: #555; line-height: 1.7; font-family: var(--font-syne); margin-bottom: 10px; }
        .jh-lien { font-size: 12px; font-weight: 700; color: var(--vert); font-family: var(--font-syne); }

        @media (max-width: 768px) {
          .jh-inner { padding: 40px 20px 60px; }
          .jh-grid { grid-template-columns: 1fr; }
          .jh-phare-body { flex-direction: column; align-items: flex-start; }
          .jh-hover { max-height: none; opacity: 1; }
          .jh-nom { margin-bottom: 12px; }
        }
      `}</style>

      <PageHero
        label="INJS"
        titre="Jeunesse"
        description="L'INJS accompagne la jeunesse comorienne — programmes d'engagement, volontariat, formation et bourses sportives."
        image="/benevolat_2027.jpg"
        imageAlt="Jeunesse INJS Comores"
      />

      <div className="jh-inner">
        <div className="jh-intro">
          <span className="jh-label">Engagement & formation</span>
          <h2 className="jh-title">La jeunesse au cœur de notre mission</h2>
          <p className="jh-text">
            L'INJS place la jeunesse comorienne au centre de son action. À travers ses programmes d'engagement
            citoyen, de volontariat, de formation et de soutien aux jeunes talents, l'Institut œuvre pour
            une génération active, responsable et fière de son identité comorienne.
          </p>
        </div>

        {/* Carte phare */}
        {programmes.filter(p => p.phare).map(p => (
          <Link key={p.slug} href={p.href} className="jh-phare">
            <div className="jh-phare-img-wrap">
              <Image src={p.image} alt={p.titre} fill className="jh-phare-img" sizes="100vw" />
              <div className="jh-phare-overlay" />
            </div>
            <div className="jh-phare-body">
              <div>
                <span className="jh-phare-cat">{p.categorie}</span>
                <div className="jh-phare-titre">{p.titre}</div>
                <p className="jh-phare-desc">{p.description}</p>
              </div>
              <span className="jh-phare-lien">Découvrir →</span>
            </div>
          </Link>
        ))}

        {/* Grille */}
        <div className="jh-grid">
          {programmes.filter(p => !p.phare).map(p => (
            <Link key={p.slug} href={p.href} className="jh-card">
              <div className="jh-img-wrap">
                <Image src={p.image} alt={p.titre} fill className="jh-img" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="jh-overlay" />
              </div>
              <div className="jh-body">
                <span className="jh-cat">{p.categorie}</span>
                <h3 className="jh-nom">{p.titre}</h3>
                <div className="jh-hover">
                  <p className="jh-desc">{p.description}</p>
                  <span className="jh-lien">Découvrir →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
