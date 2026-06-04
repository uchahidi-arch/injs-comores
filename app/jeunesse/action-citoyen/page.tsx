import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'
import Link from 'next/link'

export const metadata = {
  title: "Action Citoyenne · INJS Comores",
  description: "Le programme national d'engagement citoyen de la jeunesse comorienne — formation, leadership et service communautaire.",
}

const nav = [{ titre: "Jeunesse", liens: [
  { label: "Vue d'ensemble", href: "/jeunesse" },
  { label: "Action Citoyenne", href: "/jeunesse/action-citoyen" },
  { label: "Volontariat national", href: "/jeunesse/volontariat" },
  { label: "Clubs citoyens", href: "/jeunesse/clubs-citoyens" },
  { label: "Bourses sportives", href: "/jeunesse/bourses" },
  { label: "Camps sportifs", href: "/jeunesse/camps" },
  { label: "Programmes nationaux", href: "/jeunesse/programmes" },
]}]

const thematiques = [
  {
    num: "01",
    titre: "Leadership & gouvernance",
    description: "Former une nouvelle génération de leaders comoriens — prise de décision, gestion de projet, représentation citoyenne et engagement dans la vie publique locale.",
  },
  {
    num: "02",
    titre: "Sport & cohésion sociale",
    description: "Utiliser le sport comme vecteur de lien social, de dépassement de soi et de construction identitaire pour la jeunesse des trois îles.",
  },
  {
    num: "03",
    titre: "Environnement & patrimoine",
    description: "Sensibiliser et mobiliser les jeunes Comoriens autour de la protection de l'environnement marin et terrestre, et de la valorisation du patrimoine culturel.",
  },
]

export default function ActionCitoyenPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .ac-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .ac-main { flex: 1; min-width: 0; }
        .ac-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .ac-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 20px; line-height: 1.15; }
        .ac-text { font-size: 16px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0 0 14px; }
        .ac-text:last-of-type { margin-bottom: 0; }
        .ac-bloc { margin-bottom: 56px; }
        .ac-bloc-title { font-size: 20px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 20px; padding-bottom: 10px; border-bottom: 2px solid var(--vert); }

        /* Stats */
        .ac-stats { display: flex; gap: 0; margin-top: 32px; border-top: 1px solid #e8e8e8; padding-top: 24px; flex-wrap: wrap; }
        .ac-stat { display: flex; align-items: baseline; gap: 10px; padding-right: 32px; margin-right: 32px; border-right: 1px solid #e8e8e8; }
        .ac-stat:last-child { border-right: none; padding-right: 0; margin-right: 0; }
        .ac-stat-val { font-size: 22px; font-weight: 800; font-family: var(--font-syne); color: var(--vert); }
        .ac-stat-label { font-size: 13px; color: #888; font-family: var(--font-syne); font-weight: 500; }

        /* Thématiques */
        .ac-thematiques { display: flex; flex-direction: column; gap: 20px; }
        .ac-thematique { border: 1px solid #eee; border-radius: 8px; padding: 28px; display: flex; flex-direction: column; gap: 10px; transition: border-color 0.2s, box-shadow 0.2s; }
        .ac-thematique:hover { border-color: var(--vert-2); box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
        .ac-thematique-num { font-size: 11px; font-weight: 700; color: var(--vert); font-family: var(--font-syne); letter-spacing: 0.1em; }
        .ac-thematique-titre { font-size: 19px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); }
        .ac-thematique-desc { font-size: 15px; color: #666; line-height: 1.75; font-family: var(--font-syne); margin: 0; }

        /* CTA */
        .ac-ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 40px; }
        .ac-btn-primary { display: inline-flex; align-items: center; gap: 8px; padding: 13px 24px; background: var(--vert); color: #fff; font-size: 13px; font-weight: 700; font-family: var(--font-syne); text-decoration: none; border-radius: 4px; transition: opacity 0.2s; }
        .ac-btn-primary:hover { opacity: 0.85; }
        .ac-btn-ghost { display: inline-flex; align-items: center; gap: 8px; padding: 13px 24px; border: 1px solid #ccc; color: var(--encre); font-size: 13px; font-weight: 600; font-family: var(--font-syne); text-decoration: none; border-radius: 4px; transition: border-color 0.15s, background 0.15s; }
        .ac-btn-ghost:hover { border-color: var(--encre); background: #f5f5f5; }

        @media (max-width: 900px) { .ac-wrap { flex-direction: column; } }
        @media (max-width: 600px) { .ac-stat { border-right: none; padding-right: 0; margin-right: 0; width: 50%; margin-bottom: 16px; } }
        @media (max-width: 768px) { .ac-wrap { padding: 40px 20px 60px; } .ac-title { font-size: 24px; } }
      `}</style>

      <PageHero
        label="Jeunesse"
        titre="Action Citoyenne"
        description="Le programme national d'engagement de la jeunesse comorienne — leadership, sport et service communautaire."
        image="/benevolat_2027.jpg"
        imageAlt="Action Citoyenne INJS"
        bandColor="#deeee3"
      />

      <div className="ac-wrap">
        <SectionNav blocs={nav} />
        <main className="ac-main">

          <div className="ac-bloc">
            <span className="ac-label">Programme national</span>
            <h2 className="ac-title">Action Citoyenne</h2>
            <p className="ac-text">
              Lancé en 2026, le programme Action Citoyenne est le programme phare de l'INJS
              pour l'engagement de la jeunesse comorienne. Il ambitionne de former une génération
              de jeunes leaders actifs, responsables et engagés dans le développement de leur pays.
            </p>
            <p className="ac-text">
              Le programme couvre les 54 communes des trois îles et s'articule autour de trois thématiques
              fondatrices : le leadership et la gouvernance citoyenne, le sport comme vecteur de cohésion
              sociale, et la protection de l'environnement et du patrimoine culturel comorien.
            </p>

            <div className="ac-stats">
              {[
                { val: "54", label: "communes couvertes" },
                { val: "1 200+", label: "jeunes engagés" },
                { val: "3", label: "thématiques" },
              ].map(c => (
                <div key={c.label} className="ac-stat">
                  <span className="ac-stat-val">{c.val}</span>
                  <span className="ac-stat-label">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ac-bloc">
            <h3 className="ac-bloc-title">Les 3 thématiques</h3>
            <div className="ac-thematiques">
              {thematiques.map(t => (
                <div key={t.num} className="ac-thematique">
                  <div className="ac-thematique-num">{t.num}</div>
                  <div className="ac-thematique-titre">{t.titre}</div>
                  <p className="ac-thematique-desc">{t.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="ac-bloc" style={{ marginBottom: 0 }}>
            <h3 className="ac-bloc-title">Rejoindre le programme</h3>
            <p className="ac-text">Le programme est ouvert à tous les jeunes Comoriens âgés de 18 à 35 ans. L'inscription est gratuite et se fait en ligne. Les participants sélectionnés bénéficient d'un accompagnement sur 6 mois, de formations et d'une mise en réseau avec les leaders citoyens des trois îles.</p>
            <div className="ac-ctas">
              <Link href="/jeunesse/inscription" className="ac-btn-primary">Candidater au programme →</Link>
              <Link href="/jeunesse/communes" className="ac-btn-ghost">Voir les communes</Link>
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}