import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'

export const metadata = { title: "Demande de subvention — INJS Comores" }

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

const criteres = [
  { titre: "Club agréé", texte: "Votre club doit être titulaire d'un agrément INJS en cours de validité." },
  { titre: "Saison active", texte: "Le club doit justifier d'une activité sportive régulière sur la saison précédente." },
  { titre: "Rapport d'activité", texte: "Le rapport d'activité de la saison précédente doit être soumis avec la demande." },
  { titre: "Situation financière saine", texte: "Aucune subvention antérieure non justifiée ne doit être en attente de régularisation." },
]

const etapes = [
  { num: "01", titre: "Vérifier l'éligibilité", texte: "Vérifiez que votre club remplit tous les critères d'éligibilité avant de soumettre votre demande." },
  { num: "02", titre: "Préparer le dossier", texte: "Rapport d'activité, budget prévisionnel, relevé de compte, liste des licenciés actifs." },
  { num: "03", titre: "Soumettre en ligne", texte: "Déposez votre dossier complet via le formulaire en ligne avant la date limite de dépôt." },
  { num: "04", titre: "Commission d'attribution", texte: "La commission de l'INJS se réunit chaque trimestre pour statuer sur les demandes reçues." },
  { num: "05", titre: "Versement", texte: "En cas d'accord, la subvention est versée en deux tranches — 60% à la notification, 40% après rapport intermédiaire." },
]

export default function SubventionsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .sv-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .sv-main { flex: 1; min-width: 0; }
        .sv-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .sv-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 16px; line-height: 1.15; }
        .sv-text { font-size: 16px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0 0 14px; }
        .sv-bloc { margin-bottom: 56px; }
        .sv-bloc-title { font-size: 20px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 20px; padding-bottom: 10px; border-bottom: 2px solid var(--vert); }
        .sv-criteres { display: flex; flex-direction: column; gap: 2px; }
        .sv-critere { display: grid; grid-template-columns: 1fr; gap: 4px; padding: 16px 0; border-bottom: 1px solid #f0f0f0; }
        .sv-critere:first-child { border-top: 1px solid #f0f0f0; }
        .sv-critere:last-child { border-bottom: none; }
        .sv-critere-titre { font-size: 15px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); display: flex; align-items: center; gap: 8px; }
        .sv-critere-titre::before { content: '›'; color: var(--vert); font-weight: 700; }
        .sv-critere-texte { font-size: 14px; color: #888; font-family: var(--font-syne); line-height: 1.65; padding-left: 16px; }
        .sv-etapes { display: flex; flex-direction: column; gap: 2px; }
        .sv-etape { display: grid; grid-template-columns: 44px 1fr; gap: 20px; padding: 18px 0; border-bottom: 1px solid #f0f0f0; align-items: start; }
        .sv-etape:last-child { border-bottom: none; }
        .sv-etape-num { font-size: 13px; font-weight: 800; color: var(--vert); font-family: var(--font-syne); padding-top: 2px; }
        .sv-etape-titre { font-size: 16px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); margin-bottom: 4px; }
        .sv-etape-texte { font-size: 14px; color: #666; font-family: var(--font-syne); line-height: 1.7; }
        .sv-cta { margin-top: 40px; padding: 32px; border: 1px solid #e8f5ee; border-radius: 8px; background: #f5faf6; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .sv-cta-text { font-size: 17px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); }
        .sv-cta-sub { font-size: 13px; color: #888; font-family: var(--font-syne); margin-top: 4px; }
        .sv-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--vert); color: #fff; font-size: 13px; font-weight: 700; font-family: var(--font-syne); text-decoration: none; border-radius: 4px; white-space: nowrap; transition: opacity 0.2s; }
        .sv-btn:hover { opacity: 0.85; }
        @media (max-width: 900px) { .sv-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .sv-wrap { padding: 40px 20px 60px; } .sv-cta { flex-direction: column; align-items: flex-start; } }
      `}</style>

      <PageHero label="Services" titre="Demande de subvention" description="Les clubs et fédérations agréés peuvent solliciter une subvention annuelle auprès de l'INJS." image="/accueil.jpg" imageAlt="Subventions INJS" />

      <div className="sv-wrap">
        <SectionNav blocs={nav} />
        <main className="sv-main">
          <div className="sv-bloc">
            <span className="sv-label">Soutien financier</span>
            <h2 className="sv-title">Subventions sportives</h2>
            <p className="sv-text">L'INJS alloue chaque année un budget de subventions aux clubs et fédérations agréés qui en font la demande. Ces subventions visent à soutenir le développement du sport à la base, la formation des athlètes et l'organisation des compétitions nationales.</p>
            <p className="sv-text">Les demandes sont instruites par la commission d'attribution de l'INJS qui se réunit chaque trimestre. Les montants sont fixés en fonction du dossier présenté, de l'activité du club et des crédits disponibles.</p>
          </div>
          <div className="sv-bloc">
            <h3 className="sv-bloc-title">Critères d'éligibilité</h3>
            <div className="sv-criteres">
              {criteres.map((c, i) => (
                <div key={i} className="sv-critere">
                  <div className="sv-critere-titre">{c.titre}</div>
                  <div className="sv-critere-texte">{c.texte}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="sv-bloc" style={{ marginBottom: 0 }}>
            <h3 className="sv-bloc-title">Procédure de demande</h3>
            <div className="sv-etapes">
              {etapes.map(e => (
                <div key={e.num} className="sv-etape">
                  <div className="sv-etape-num">{e.num}</div>
                  <div>
                    <div className="sv-etape-titre">{e.titre}</div>
                    <div className="sv-etape-texte">{e.texte}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="sv-cta">
              <div>
                <div className="sv-cta-text">Soumettre une demande de subvention</div>
                <div className="sv-cta-sub">Prochaine commission — date à confirmer</div>
              </div>
              <a href="/services/subventions/demande" className="sv-btn">Déposer la demande →</a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
