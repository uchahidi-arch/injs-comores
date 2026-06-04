import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'

const nav = [{ titre: "Jeunesse", liens: [
  { label: "Vue d'ensemble", href: "/jeunesse" },
  { label: "Ya Mkobe — Action Citoyenne", href: "/jeunesse/action-citoyen" },
  { label: "Volontariat national", href: "/jeunesse/volontariat" },
  { label: "Clubs citoyens", href: "/jeunesse/clubs-citoyens" },
  { label: "Bourses sportives", href: "/jeunesse/bourses" },
  { label: "Camps sportifs", href: "/jeunesse/camps" },
  { label: "Programmes nationaux", href: "/jeunesse/programmes" },
]}]

export const metadata = { title: "Clubs citoyens — INJS Comores" }
const clubs = [
  { nom: "Club Citoyen Moroni", ile: "Grande Comore", membres: 28, focus: "Sport & leadership" },
  { nom: "Club Citoyen Mutsamudu", ile: "Anjouan", membres: 22, focus: "Environnement" },
  { nom: "Club Citoyen Fomboni", ile: "Mohéli", membres: 15, focus: "Patrimoine culturel" },
  { nom: "Club Citoyen Domoni", ile: "Anjouan", membres: 18, focus: "Sport & cohésion" },
  { nom: "Club Citoyen Mitsamiouli", ile: "Grande Comore", membres: 20, focus: "Leadership" },
]
export default function ClubsCitoyensPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .cc-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .cc-main { flex: 1; min-width: 0; }
        .cc-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .cc-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 16px; line-height: 1.15; }
        .cc-text { font-size: 16px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0 0 40px; }
        .cc-bloc-title { font-size: 20px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 20px; padding-bottom: 10px; border-bottom: 2px solid var(--vert); }
        .cc-list { display: flex; flex-direction: column; gap: 2px; }
        .cc-item { display: grid; grid-template-columns: 1fr 120px 80px auto; gap: 20px; padding: 18px 0; border-bottom: 1px solid #f0f0f0; align-items: center; }
        .cc-item:first-child { border-top: 1px solid #f0f0f0; }
        .cc-item:last-child { border-bottom: none; }
        .cc-nom { font-size: 16px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); margin-bottom: 3px; }
        .cc-focus { font-size: 12px; color: #aaa; font-family: var(--font-syne); }
        .cc-ile { font-size: 13px; color: #555; font-family: var(--font-syne); }
        .cc-membres { font-size: 14px; font-weight: 700; color: var(--vert); font-family: var(--font-syne); text-align: center; }
        .cc-tag { font-size: 10px; font-weight: 700; color: #2D6A4F; background: #e8f5ee; padding: 3px 8px; border-radius: 4px; font-family: var(--font-syne); white-space: nowrap; }
        .cc-cta { margin-top: 40px; padding: 28px 32px; border: 1px solid #e8f5ee; border-radius: 8px; background: #f5faf6; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
        .cc-cta-text { font-size: 17px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); }
        .cc-cta-sub { font-size: 13px; color: #888; font-family: var(--font-syne); margin-top: 4px; }
        .cc-btn { padding: 12px 22px; background: var(--vert); color: #fff; font-size: 13px; font-weight: 700; font-family: var(--font-syne); text-decoration: none; border-radius: 4px; white-space: nowrap; transition: opacity 0.2s; }
        .cc-btn:hover { opacity: 0.85; }
        @media (max-width: 900px) { .cc-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .cc-wrap { padding: 40px 20px 60px; } .cc-item { grid-template-columns: 1fr auto; } .cc-ile, .cc-membres { display: none; } .cc-cta { flex-direction: column; align-items: flex-start; } }
      `}</style>
      <PageHero label="Jeunesse" titre="Clubs citoyens" description="Créez ou rejoignez un club citoyen dans votre commune — sport, engagement et cohésion sociale." image="/accueil.jpg" imageAlt="Clubs citoyens Comores" />
      <div className="cc-wrap">
        <SectionNav blocs={nav} />
        <main className="cc-main">
          <span className="cc-label">Vie associative</span>
          <h2 className="cc-title">Les clubs citoyens</h2>
          <p className="cc-text">Les clubs citoyens sont des cellules locales d'engagement créées dans le cadre du programme Ya Mkobe. Chaque club regroupe 15 à 30 jeunes d'une même commune autour d'un projet commun — sportif, culturel, environnemental ou social.</p>
          <h3 className="cc-bloc-title">Clubs actifs</h3>
          <div className="cc-list">
            {clubs.map((c, i) => (
              <div key={i} className="cc-item">
                <div>
                  <div className="cc-nom">{c.nom}</div>
                  <div className="cc-focus">{c.focus}</div>
                </div>
                <div className="cc-ile">{c.ile}</div>
                <div className="cc-membres">{c.membres}</div>
                <div className="cc-tag">Actif</div>
              </div>
            ))}
          </div>
          <div className="cc-cta">
            <div>
              <div className="cc-cta-text">Créer un club citoyen</div>
              <div className="cc-cta-sub">Ouvert à tous les jeunes de 18 à 35 ans</div>
            </div>
            <a href="/jeunesse/inscription" className="cc-btn">Lancer mon club →</a>
          </div>
        </main>
      </div>
    </div>
  )
}
