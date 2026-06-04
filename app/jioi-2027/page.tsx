import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/ui/PageHero'
import CountdownBanner from '@/components/ui/CountdownBanner'

export const metadata = {
  title: "JIOI 2027 — Jeux des Îles de l'Océan Indien · Comores",
  description: "Les Comores accueillent les Jeux des Îles de l'Océan Indien 2027. Tout sur les Jeux : disciplines, athlètes, sites, billetterie et actualités.",
}

const rubriques = [
  {
    titre: "Présentation",
    categorie: "Histoire & enjeux",
    description: "Histoire des Jeux des Îles, édition 2027 aux Comores — enjeux, ambitions et programme officiel.",
    href: "/jioi-2027/presentation",
    image: "/jioi-hero.jpg",
  },
  {
    titre: "Disciplines",
    categorie: "Programme sportif",
    description: "Les sports au programme des JIOI 2027 — règles de qualification et calendrier par discipline.",
    href: "/jioi-2027/sports",
    image: "/accueil.jpg",
  },
  {
    titre: "Calendrier",
    categorie: "Planning officiel",
    description: "Programme complet des compétitions — dates, horaires et sites par discipline.",
    href: "/jioi-2027/calendrier",
    image: "/accueil.jpg",
  },
  {
    titre: "Délégations",
    categorie: "Pays participants",
    description: "Les sept îles et leurs délégations officielles aux Jeux des Îles 2027.",
    href: "/jioi-2027/delegations",
    image: "/accueil.jpg",
  },
  {
    titre: "Athlètes qualifiés",
    categorie: "Sélections nationales",
    description: "Les athlètes comoriens sélectionnés pour représenter l'Union des Comores.",
    href: "/jioi-2027/athletes-qualifies",
    image: "/accueil.jpg",
  },
  {
    titre: "Billetterie",
    categorie: "Accès aux compétitions",
    description: "Réservez vos places pour assister aux compétitions des Jeux des Îles 2027.",
    href: "/jioi-2027/billetterie",
    image: "/accueil.jpg",
  },
  {
    titre: "Médias & Presse",
    categorie: "Accréditations",
    description: "Espace presse, galeries photos, vidéos et communiqués officiels des JIOI 2027.",
    href: "/jioi-2027/medias",
    image: "/accueil.jpg",
  },
  {
    titre: "Résultats live",
    categorie: "Pendant les Jeux",
    description: "Tableau de bord en direct — résultats, médailles et classements pendant les Jeux.",
    href: "/jioi-2027/resultats",
    image: "/accueil.jpg",
  },
]

export default function JioiHubPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .jioi-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 40px 80px;
        }

        /* ── Intro + countdown ── */
        .jioi-top {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 48px;
          margin-bottom: 72px;
          align-items: start;
        }

        .jioi-section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--vert);
          font-family: var(--font-syne);
          margin-bottom: 14px;
          display: block;
        }

        .jioi-section-title {
          font-size: 30px;
          font-weight: 800;
          font-family: var(--font-syne);
          color: var(--encre);
          margin: 0 0 20px;
          line-height: 1.15;
        }

        .jioi-intro-text {
          font-size: 17px;
          color: #555;
          line-height: 1.85;
          font-family: var(--font-syne);
          margin: 0;
        }

        /* ── Grille rubriques — style ServicesSection ── */
        .jioi-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .jioi-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid #eee;
          text-decoration: none;
          background: white;
          transition: box-shadow 0.3s ease;
        }

        .jioi-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.10);
        }

        .jioi-img-wrap {
          position: relative;
          height: 240px;
          overflow: hidden;
        }

        .jioi-img {
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .jioi-card:hover .jioi-img {
          transform: scale(1.04);
        }

        .jioi-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.06);
          transition: background 0.3s ease;
        }

        .jioi-card:hover .jioi-overlay {
          background: rgba(0,0,0,0.16);
        }

        .jioi-body {
          padding: 24px 28px;
          border-top: 3px solid transparent;
          transition: border-color 0.3s ease;
        }

        .jioi-card:hover .jioi-body {
          border-color: var(--vert);
        }

        .jioi-cat {
          font-size: 9px;
          font-family: var(--font-syne);
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--vert);
          display: block;
          margin-bottom: 8px;
        }

        .jioi-titre {
          font-size: 20px;
          font-weight: 700;
          font-family: var(--font-syne);
          color: var(--encre);
          line-height: 1.2;
          margin-bottom: 0;
          transition: margin-bottom 0.3s ease;
        }

        .jioi-card:hover .jioi-titre {
          margin-bottom: 14px;
        }

        .jioi-hover {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.4s ease, opacity 0.3s ease;
        }

        .jioi-card:hover .jioi-hover {
          max-height: 120px;
          opacity: 1;
        }

        .jioi-desc {
          font-size: 14px;
          color: #555;
          line-height: 1.7;
          font-family: var(--font-syne);
          margin-bottom: 10px;
        }

        .jioi-lien {
          font-size: 12px;
          font-weight: 700;
          color: var(--vert);
          font-family: var(--font-syne);
          letter-spacing: 0.04em;
        }

        @media (max-width: 900px) {
          .jioi-top { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .jioi-inner { padding: 40px 20px 60px; }
          .jioi-grid { grid-template-columns: 1fr; }
          .jioi-section-title { font-size: 24px; }
          .jioi-img-wrap { height: 200px; }
          .jioi-hover { max-height: none; opacity: 1; }
          .jioi-titre { margin-bottom: 12px; }
        }
      `}</style>

      <PageHero
        label="Comores 2027"
        titre="Jeux des Îles de l'Océan Indien"
        description="Pour la première fois de son histoire, l'Union des Comores accueille les Jeux des Îles de l'Océan Indien. Un moment historique pour le sport comorien."
        image="/jioi-hero.jpg"
        imageAlt="JIOI 2027 Comores"
        bandColor="#deeee3"
      />

      <div className="jioi-inner">

        {/* Intro + countdown */}
        <div className="jioi-top">
          <div>
            <span className="jioi-section-label">Une première historique</span>
            <h2 className="jioi-section-title">Les Comores sur la scène régionale</h2>
            <p className="jioi-intro-text">
              En juillet 2027, l'Union des Comores accueillera pour la première fois les Jeux des Îles
              de l'Océan Indien. Cet événement majeur réunira plus de 1 500 athlètes venus des sept îles
              de l'Océan Indien. L'INJS pilote l'ensemble de la préparation — infrastructures,
              accréditations, sélections nationales et logistique.
            </p>
          </div>
          <CountdownBanner />
        </div>

        {/* Rubriques */}
        <span className="jioi-section-label">Explorer</span>
        <h2 className="jioi-section-title" style={{ marginBottom: '32px' }}>Tout sur les JIOI 2027</h2>

        <div className="jioi-grid">
          {rubriques.map(r => (
            <Link key={r.href} href={r.href} className="jioi-card">
              <div className="jioi-img-wrap">
                <Image src={r.image} alt={r.titre} fill className="jioi-img" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="jioi-overlay" />
              </div>
              <div className="jioi-body">
                <span className="jioi-cat">{r.categorie}</span>
                <h3 className="jioi-titre">{r.titre}</h3>
                <div className="jioi-hover">
                  <p className="jioi-desc">{r.description}</p>
                  <span className="jioi-lien">Découvrir →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}