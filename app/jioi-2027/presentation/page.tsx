import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'
import CountdownBanner from '@/components/ui/CountdownBanner'

export const metadata = {
  title: "Présentation — JIOI 2027 Comores",
  description: "Histoire des Jeux des Îles de l'Océan Indien et présentation de l'édition 2027 aux Comores.",
}

const nav = [{
  titre: "JIOI 2027",
  liens: [
    { label: "Vue d'ensemble", href: "/jioi-2027" },
    { label: "Présentation", href: "/jioi-2027/presentation" },
    { label: "Disciplines", href: "/jioi-2027/sports" },
    { label: "Calendrier", href: "/jioi-2027/calendrier" },
    { label: "Délégations", href: "/jioi-2027/delegations" },
    { label: "Athlètes qualifiés", href: "/jioi-2027/athletes-qualifies" },
    { label: "Billetterie", href: "/jioi-2027/billetterie" },
    { label: "Médias & Presse", href: "/jioi-2027/medias" },
    { label: "Résultats live", href: "/jioi-2027/resultats" },
  ],
}]

const editions = [
  { annee: "1979", lieu: "La Réunion" },
  { annee: "1985", lieu: "Maurice" },
  { annee: "1990", lieu: "Maldives" },
  { annee: "1993", lieu: "Seychelles" },
  { annee: "1998", lieu: "Mayotte" },
  { annee: "2003", lieu: "Madagascar" },
  { annee: "2007", lieu: "La Réunion" },
  { annee: "2011", lieu: "Seychelles" },
  { annee: "2015", lieu: "La Réunion" },
  { annee: "2019", lieu: "Maurice" },
  { annee: "2023", lieu: "Madagascar" },
  { annee: "2027", lieu: "Comores", actif: true },
]

export default function JioiPresentationPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .jp-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 40px 80px;
          display: flex;
          gap: 48px;
          align-items: flex-start;
        }

        .jp-main { flex: 1; min-width: 0; }

        .jp-section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--vert);
          font-family: var(--font-syne);
          margin-bottom: 14px;
          display: block;
        }

        .jp-section-title {
          font-size: 30px;
          font-weight: 800;
          font-family: var(--font-syne);
          color: var(--encre);
          margin: 0 0 20px;
          line-height: 1.15;
        }

        .jp-text {
          font-size: 16px;
          color: #555;
          line-height: 1.85;
          font-family: var(--font-syne);
          margin: 0 0 14px;
        }

        .jp-text:last-of-type { margin-bottom: 0; }
        .jp-bloc { margin-bottom: 64px; }

        /* ── Éditions ── */
        .jp-editions {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-top: 28px;
        }

        .jp-edition {
          display: grid;
          grid-template-columns: 64px 1fr auto;
          gap: 20px;
          padding: 14px 0;
          border-bottom: 1px solid #f0f0f0;
          align-items: center;
        }

        .jp-edition:last-child { border-bottom: none; }

        .jp-edition-annee {
          font-size: 15px;
          font-weight: 800;
          font-family: var(--font-syne);
          color: var(--encre);
        }

        .jp-edition-annee.actif { color: var(--vert); }

        .jp-edition-lieu {
          font-size: 15px;
          font-family: var(--font-syne);
          color: #444;
          font-weight: 500;
        }

        .jp-edition-badge {
          font-size: 10px;
          font-weight: 700;
          background: var(--vert);
          color: #fff;
          padding: 3px 8px;
          border-radius: 4px;
          font-family: var(--font-syne);
          letter-spacing: 0.06em;
        }

        @media (max-width: 900px) {
          .jp-wrap { flex-direction: column; }
        }

        @media (max-width: 768px) {
          .jp-wrap { padding: 40px 20px 60px; }
          .jp-section-title { font-size: 24px; }
        }
      `}</style>

      <PageHero
        label="JIOI 2027"
        titre="Présentation des Jeux"
        description="Les Jeux des Îles de l'Océan Indien — histoire, format et enjeux de l'édition 2027 aux Comores."
        image="/jioi-hero.jpg"
        imageAlt="JIOI 2027 Présentation"
        bandColor="#deeee3"
      />

      <div className="jp-wrap">
        <SectionNav blocs={[
          ...nav,
          { titre: "Compte à rebours", contenu: <CountdownBanner /> },
        ]} />

        <main className="jp-main">

          <div className="jp-bloc">
            <span className="jp-section-label">Contexte</span>
            <h2 className="jp-section-title">Les Jeux des Îles de l'Océan Indien</h2>
            <p className="jp-text">
              Créés en 1979 à l'initiative des nations insulaires de l'Océan Indien, les Jeux des Îles
              rassemblent tous les quatre ans les athlètes de Madagascar, Maurice, La Réunion, les Seychelles,
              Mayotte, les Maldives et les Comores dans une compétition multisports de haut niveau.
            </p>
            <p className="jp-text">
              Plus qu'une compétition, les JIOI incarnent la solidarité régionale et la fierté des peuples
              insulaires de l'Océan Indien. Chaque édition renforce les liens culturels, sportifs et diplomatiques
              entre les îles participantes.
            </p>
          </div>

          <div className="jp-bloc">
            <span className="jp-section-label">Édition 2027</span>
            <h2 className="jp-section-title">Une première historique pour les Comores</h2>
            <p className="jp-text">
              Pour la première fois depuis leur adhésion aux Jeux des Îles, les Comores ont l'honneur
              d'accueillir l'événement. L'édition 2027 représente un tournant majeur pour le sport comorien
              et une opportunité unique de développer les infrastructures sportives nationales.
            </p>
            <p className="jp-text">
              L'INJS coordonne l'ensemble des préparatifs : rénovation et construction d'équipements sportifs,
              mise en place du système d'accréditation numérique, organisation de la billetterie et
              accueil des délégations étrangères.
            </p>
          </div>

          <div className="jp-bloc" style={{ marginBottom: 0 }}>
            <span className="jp-section-label">Historique</span>
            <h2 className="jp-section-title">Toutes les éditions</h2>
            <div className="jp-editions">
              {editions.map(e => (
                <div key={e.annee} className="jp-edition">
                  <div className={`jp-edition-annee${e.actif ? ' actif' : ''}`}>{e.annee}</div>
                  <div className="jp-edition-lieu">{e.lieu}</div>
                  {e.actif && <div className="jp-edition-badge">Comores 2027</div>}
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}