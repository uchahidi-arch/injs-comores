import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'

export const metadata = { title: "Autorisation d'événement — INJS Comores" }

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

const types = [
  { type: "Compétition nationale", delai: "30 jours avant", description: "Championnat, coupe ou tournoi officiel impliquant plusieurs clubs ou îles." },
  { type: "Tournoi régional", delai: "15 jours avant", description: "Compétition organisée au niveau d'une île ou d'une région." },
  { type: "Match amical international", delai: "45 jours avant", description: "Rencontre impliquant une sélection ou un club étranger." },
  { type: "Stage ou camp sportif", delai: "10 jours avant", description: "Stage de formation, détection ou préparation physique organisé par un club ou fédération." },
]

const etapes = [
  { num: "01", titre: "Vérifier le calendrier INJS", texte: "Consultez le calendrier national pour éviter les conflits de dates avec d'autres événements officiels." },
  { num: "02", titre: "Constituer le dossier", texte: "Fiche technique de l'événement, liste des participants, plan de sécurité, assurance responsabilité civile." },
  { num: "03", titre: "Soumettre la demande", texte: "Déposez votre demande en respectant le délai minimum selon le type d'événement." },
  { num: "04", titre: "Instruction & validation", texte: "L'INJS instruit le dossier et peut demander des compléments. La décision est notifiée par email." },
]

export default function EvenementsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .ev-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .ev-main { flex: 1; min-width: 0; }
        .ev-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .ev-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 16px; line-height: 1.15; }
        .ev-text { font-size: 16px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0 0 14px; }
        .ev-bloc { margin-bottom: 56px; }
        .ev-bloc-title { font-size: 20px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 20px; padding-bottom: 10px; border-bottom: 2px solid var(--vert); }
        .ev-types { display: flex; flex-direction: column; gap: 2px; }
        .ev-type { display: grid; grid-template-columns: 1fr auto; gap: 20px; padding: 18px 0; border-bottom: 1px solid #f0f0f0; align-items: start; }
        .ev-type:first-child { border-top: 1px solid #f0f0f0; }
        .ev-type:last-child { border-bottom: none; }
        .ev-type-titre { font-size: 15px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); margin-bottom: 4px; }
        .ev-type-desc { font-size: 13px; color: #888; font-family: var(--font-syne); line-height: 1.6; }
        .ev-delai { font-size: 12px; font-weight: 700; color: var(--vert); background: #e8f5ee; padding: 4px 10px; border-radius: 4px; font-family: var(--font-syne); white-space: nowrap; align-self: center; }
        .ev-etapes { display: flex; flex-direction: column; gap: 2px; }
        .ev-etape { display: grid; grid-template-columns: 44px 1fr; gap: 20px; padding: 18px 0; border-bottom: 1px solid #f0f0f0; align-items: start; }
        .ev-etape:last-child { border-bottom: none; }
        .ev-etape-num { font-size: 13px; font-weight: 800; color: var(--vert); font-family: var(--font-syne); padding-top: 2px; }
        .ev-etape-titre { font-size: 16px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); margin-bottom: 4px; }
        .ev-etape-texte { font-size: 14px; color: #666; font-family: var(--font-syne); line-height: 1.7; }
        .ev-cta { margin-top: 40px; padding: 32px; border: 1px solid #e8f5ee; border-radius: 8px; background: #f5faf6; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .ev-cta-text { font-size: 17px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); }
        .ev-cta-sub { font-size: 13px; color: #888; font-family: var(--font-syne); margin-top: 4px; }
        .ev-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--vert); color: #fff; font-size: 13px; font-weight: 700; font-family: var(--font-syne); text-decoration: none; border-radius: 4px; white-space: nowrap; transition: opacity 0.2s; }
        .ev-btn:hover { opacity: 0.85; }
        @media (max-width: 900px) { .ev-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .ev-wrap { padding: 40px 20px 60px; } .ev-type { grid-template-columns: 1fr; } .ev-cta { flex-direction: column; align-items: flex-start; } }
      `}</style>

      <PageHero label="Services" titre="Autorisation d'événement" description="Organisez un événement sportif officiel aux Comores — demandez votre autorisation auprès de l'INJS." image="/accueil.jpg" imageAlt="Autorisation événement INJS" />

      <div className="ev-wrap">
        <SectionNav blocs={nav} />
        <main className="ev-main">
          <div className="ev-bloc">
            <span className="ev-label">Organisation sportive</span>
            <h2 className="ev-title">Autorisation d'événement sportif</h2>
            <p className="ev-text">Toute compétition, tournoi, match international ou camp sportif organisé sur le territoire comorien doit faire l'objet d'une autorisation préalable de l'INJS. Cette autorisation garantit la conformité de l'événement avec les règles nationales et assure sa prise en compte dans le calendrier officiel.</p>
          </div>
          <div className="ev-bloc">
            <h3 className="ev-bloc-title">Types d'événements & délais</h3>
            <div className="ev-types">
              {types.map((t, i) => (
                <div key={i} className="ev-type">
                  <div>
                    <div className="ev-type-titre">{t.type}</div>
                    <div className="ev-type-desc">{t.description}</div>
                  </div>
                  <div className="ev-delai">{t.delai}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="ev-bloc" style={{ marginBottom: 0 }}>
            <h3 className="ev-bloc-title">Procédure</h3>
            <div className="ev-etapes">
              {etapes.map(e => (
                <div key={e.num} className="ev-etape">
                  <div className="ev-etape-num">{e.num}</div>
                  <div>
                    <div className="ev-etape-titre">{e.titre}</div>
                    <div className="ev-etape-texte">{e.texte}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="ev-cta">
              <div>
                <div className="ev-cta-text">Déposer une demande d'autorisation</div>
                <div className="ev-cta-sub">Respectez les délais selon le type d'événement</div>
              </div>
              <a href="/services/evenements/demande" className="ev-btn">Faire la demande →</a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
