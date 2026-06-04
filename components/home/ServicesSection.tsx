import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    slug: 'carte-injs',
    categorie: 'Identité sportive',
    titre: "Carte INJS",
    description: "L'identifiant officiel de chaque athlète comorien. Demandez votre carte de licencié en ligne.",
    image: '/accueil.jpg',
    href: '/services/licences',
  },
  {
    slug: 'reservation',
    categorie: 'Infrastructures',
    titre: 'Réserver une infrastructure',
    description: "Stades, gymnases, dojos — consultez le planning en temps réel et réservez votre créneau.",
    image: '/accueil.jpg',
    href: '/infrastructures/reserver',
  },
  {
    slug: 'formations',
    categorie: 'Formation',
    titre: 'Formations officielles',
    description: "Stages certifiés pour arbitres, entraîneurs et éducateurs sportifs comoriens.",
    image: '/benevolat_2027.jpg',
    href: '/formations',
  },
  {
    slug: 'demarches',
    categorie: 'Administration',
    titre: 'Démarches administratives',
    description: "Agréments de club, subventions, autorisations — toutes vos démarches en ligne.",
    image: '/mascotte_comores.jpg',
    href: '/services/agrements',
  },
]

const css = `
  .srv-section {
    background: #fff;
    padding: 100px var(--site-px);
    box-sizing: border-box;
  }

  .srv-inner {
    max-width: 1280px;
    margin: 0 auto;
  }

  .srv-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 56px;
    gap: 24px;
  }

  .srv-eyebrow {
    font-size: 10px;
    font-family: var(--font-syne);
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--vert);
    margin-bottom: 10px;
    display: block;
  }

  .srv-title {
    font-size: clamp(26px, 3vw, 38px);
    font-family: var(--font-syne);
    font-weight: 800;
    color: var(--encre);
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin: 0;
  }

  .srv-all {
    font-size: 11px;
    font-family: var(--font-syne);
    font-weight: 700;
    color: var(--encre);
    text-decoration: none;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-bottom: 1px solid var(--encre);
    padding-bottom: 2px;
    white-space: nowrap;
    transition: color 0.2s, border-color 0.2s;
    flex-shrink: 0;
  }
  .srv-all:hover { color: var(--vert); border-color: var(--vert); }

  .srv-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .srv-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    cursor: pointer;
    background: white;
    border: 1px solid #eee;
    transition: box-shadow 0.3s ease;
    text-decoration: none;
  }
  .srv-card:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.10);
  }

  .srv-img-wrap {
    position: relative;
    height: 300px;
    overflow: hidden;
  }

  .srv-img {
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  .srv-card:hover .srv-img {
    transform: scale(1.04);
  }

  .srv-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.06);
    transition: background 0.3s ease;
  }
  .srv-card:hover .srv-overlay {
    background: rgba(0,0,0,0.16);
  }

  .srv-body {
    padding: 28px 32px;
    border-top: 3px solid transparent;
    transition: border-color 0.3s ease;
  }
  .srv-card:hover .srv-body {
    border-color: var(--vert);
  }

  .srv-cat {
    font-size: 9px;
    font-family: var(--font-syne);
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--vert);
    display: block;
    margin-bottom: 8px;
  }

  .srv-name {
    font-size: 20px;
    font-weight: 700;
    font-family: var(--font-syne);
    color: var(--encre);
    line-height: 1.2;
    margin-bottom: 0;
    transition: margin-bottom 0.3s ease;
  }
  .srv-card:hover .srv-name {
    margin-bottom: 14px;
  }

  .srv-hover {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.4s ease, opacity 0.3s ease;
  }
  .srv-card:hover .srv-hover {
    max-height: 120px;
    opacity: 1;
  }

  .srv-desc {
    font-size: 14px;
    color: #555;
    line-height: 1.7;
    font-family: var(--font-syne);
    margin-bottom: 12px;
  }

  .srv-acceder {
    font-size: 12px;
    font-weight: 700;
    color: var(--vert);
    font-family: var(--font-syne);
    letter-spacing: 0.04em;
  }

  @media (max-width: 768px) {
    .srv-grid { grid-template-columns: 1fr; }
    .srv-img-wrap { height: 220px; }
    .srv-section { padding: 64px var(--site-px); }
    .srv-header { flex-direction: column; align-items: flex-start; }
    .srv-hover { max-height: none; opacity: 1; }
    .srv-name { margin-bottom: 12px; }
  }
`

export default function ServicesSection() {
  return (
    <section className="srv-section">
      <style>{css}</style>
      <div className="srv-inner">

        <div className="srv-header">
          <div>
            <span className="srv-eyebrow">Nos services</span>
            <h2 className="srv-title">Le sport comorien, à portée de main</h2>
          </div>
          <Link href="/services" className="srv-all">Voir tous les services →</Link>
        </div>

        <div className="srv-grid">
          {services.map((s) => (
            <Link key={s.slug} href={s.href} className="srv-card">
              <div className="srv-img-wrap">
                <Image
                  src={s.image}
                  alt={s.titre}
                  fill
                  className="srv-img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="srv-overlay" />
              </div>
              <div className="srv-body">
                <span className="srv-cat">{s.categorie}</span>
                <h3 className="srv-name">{s.titre}</h3>
                <div className="srv-hover">
                  <p className="srv-desc">{s.description}</p>
                  <span className="srv-acceder">Accéder →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
