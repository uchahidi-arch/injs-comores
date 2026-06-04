import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'

export const metadata = { title: "Agrément de club — INJS Comores" }

const nav = [{ titre: "Services", liens: [
  { label: "Tous les services", href: "/services" },
  { label: "Demande de licence", href: "/services/licences" },
  { label: "Agrément de club", href: "/services/agrements" },
  { label: "Demande de subvention", href: "/services/subventions" },
  { label: "Autorisation d'événement", href: "/services/evenements" },
]}, { titre: "Formations", liens: [
  { label: "Formations officielles", href: "/formations" },
  { label: "Inscription en ligne", href: "/formations/inscription" },
  { label: "Certifications", href: "/certifications" },
]}]

const pieces = [
  "Statuts du club signés et datés",
  "PV de l'assemblée générale constitutive",
  "Liste des membres fondateurs avec pièces d'identité",
  "Justificatif de domiciliation du siège social",
  "Attestation d'affiliation à la fédération nationale concernée",
  "Casier judiciaire vierge du président",
]

const etapes = [
  { num: "01", titre: "Constitution du dossier", texte: "Réunissez toutes les pièces justificatives requises. Le dossier incomplet ne sera pas traité." },
  { num: "02", titre: "Dépôt en ligne", texte: "Soumettez votre dossier via le formulaire en ligne. Un accusé de réception vous est envoyé automatiquement." },
  { num: "03", titre: "Instruction", texte: "L'INJS instruit votre dossier dans un délai de 30 jours ouvrés. Un agent peut vous contacter pour des compléments." },
  { num: "04", titre: "Décision", texte: "L'agrément est accordé ou refusé par décision motivée. En cas de refus, un recours est possible sous 15 jours." },
  { num: "05", titre: "Publication", texte: "L'agrément accordé est publié au journal officiel. Votre club est alors officiellement reconnu par l'État comorien." },
]

export default function AgrEmentsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .ag-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .ag-main { flex: 1; min-width: 0; }
        .ag-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .ag-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 16px; line-height: 1.15; }
        .ag-text { font-size: 16px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0 0 14px; }
        .ag-bloc { margin-bottom: 56px; }
        .ag-bloc-title { font-size: 20px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 20px; padding-bottom: 10px; border-bottom: 2px solid var(--vert); }
        .ag-pieces { display: flex; flex-direction: column; gap: 2px; }
        .ag-piece { display: flex; align-items: center; gap: 12px; padding: 14px 0; border-bottom: 1px solid #f5f5f5; font-size: 15px; font-family: var(--font-syne); color: var(--encre); }
        .ag-piece:first-child { border-top: 1px solid #f0f0f0; }
        .ag-piece:last-child { border-bottom: none; }
        .ag-piece::before { content: '›'; color: var(--vert); font-weight: 700; font-size: 16px; flex-shrink: 0; }
        .ag-etapes { display: flex; flex-direction: column; gap: 2px; }
        .ag-etape { display: grid; grid-template-columns: 44px 1fr; gap: 20px; padding: 18px 0; border-bottom: 1px solid #f0f0f0; align-items: start; }
        .ag-etape:last-child { border-bottom: none; }
        .ag-etape-num { font-size: 13px; font-weight: 800; color: var(--vert); font-family: var(--font-syne); padding-top: 2px; }
        .ag-etape-titre { font-size: 16px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); margin-bottom: 4px; }
        .ag-etape-texte { font-size: 14px; color: #666; font-family: var(--font-syne); line-height: 1.7; }
        .ag-cta { margin-top: 40px; padding: 32px; border: 1px solid #e8f5ee; border-radius: 8px; background: #f5faf6; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .ag-cta-text { font-size: 17px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); }
        .ag-cta-sub { font-size: 13px; color: #888; font-family: var(--font-syne); margin-top: 4px; }
        .ag-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--vert); color: #fff; font-size: 13px; font-weight: 700; font-family: var(--font-syne); text-decoration: none; border-radius: 4px; white-space: nowrap; transition: opacity 0.2s; }
        .ag-btn:hover { opacity: 0.85; }
        @media (max-width: 900px) { .ag-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .ag-wrap { padding: 40px 20px 60px; } .ag-cta { flex-direction: column; align-items: flex-start; } }
      `}</style>

      <PageHero label="Services" titre="Agrément de club" description="Faites reconnaître officiellement votre club sportif par l'INJS — procédure en ligne, réponse sous 30 jours." image="/accueil.jpg" imageAlt="Agrément de club INJS" />

      <div className="ag-wrap">
        <SectionNav blocs={nav} />
        <main className="ag-main">

          <div className="ag-bloc">
            <span className="ag-label">Reconnaissance officielle</span>
            <h2 className="ag-title">Agrément de club sportif</h2>
            <p className="ag-text">L'agrément est la reconnaissance officielle de votre club sportif par l'État comorien via l'INJS. Il est obligatoire pour participer aux compétitions nationales, bénéficier des subventions publiques et utiliser les infrastructures de l'INJS.</p>
            <p className="ag-text">L'agrément est accordé pour une durée de 4 ans, renouvelable. Il est lié à une fédération nationale agréée et à une discipline sportive.</p>
          </div>

          <div className="ag-bloc">
            <h3 className="ag-bloc-title">Pièces requises</h3>
            <div className="ag-pieces">
              {pieces.map((p, i) => <div key={i} className="ag-piece">{p}</div>)}
            </div>
          </div>

          <div className="ag-bloc" style={{ marginBottom: 0 }}>
            <h3 className="ag-bloc-title">Procédure</h3>
            <div className="ag-etapes">
              {etapes.map(e => (
                <div key={e.num} className="ag-etape">
                  <div className="ag-etape-num">{e.num}</div>
                  <div>
                    <div className="ag-etape-titre">{e.titre}</div>
                    <div className="ag-etape-texte">{e.texte}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="ag-cta">
              <div>
                <div className="ag-cta-text">Déposer une demande d'agrément</div>
                <div className="ag-cta-sub">Dossier complet requis — traitement sous 30 jours</div>
              </div>
              <a href="/services/agrements/demande" className="ag-btn">Déposer le dossier →</a>
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}
