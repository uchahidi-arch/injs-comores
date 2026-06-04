import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'

export const metadata = { title: "Demande de licence — INJS Comores" }

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

const etapes = [
  { num: "01", titre: "Créer un compte", texte: "Créez votre compte sur la plateforme INJS avec votre adresse email et vos informations personnelles." },
  { num: "02", titre: "Remplir le formulaire", texte: "Complétez le formulaire de demande de licence avec vos informations sportives et votre fédération d'appartenance." },
  { num: "03", titre: "Joindre les pièces", texte: "Photo d'identité, certificat médical de moins de 3 mois, pièce d'identité — à télécharger en ligne." },
  { num: "04", titre: "Payer les frais", texte: "Réglez les frais de licence en ligne ou auprès de votre fédération. Tarif fixé annuellement par l'INJS." },
  { num: "05", titre: "Recevoir la licence", texte: "Votre licence numérique est générée sous 72h. Elle est valable pour la saison sportive en cours." },
]

const types = [
  { type: "Licence Sportif Amateur", tarif: "2 500 FC", description: "Pour tous les licenciés des clubs affiliés aux fédérations nationales." },
  { type: "Licence Sportif Professionnel", tarif: "5 000 FC", description: "Pour les athlètes inscrits dans un programme de haut niveau reconnu par l'INJS." },
  { type: "Licence Encadrant", tarif: "3 000 FC", description: "Entraîneurs, arbitres et éducateurs sportifs certifiés par l'INJS." },
  { type: "Licence Dirigeant", tarif: "2 000 FC", description: "Présidents, secrétaires et membres de bureau des clubs affiliés." },
]

export default function LicencesPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .lc-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .lc-main { flex: 1; min-width: 0; }
        .lc-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .lc-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 16px; line-height: 1.15; }
        .lc-text { font-size: 16px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0 0 14px; }
        .lc-bloc { margin-bottom: 56px; }
        .lc-bloc-title { font-size: 20px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 20px; padding-bottom: 10px; border-bottom: 2px solid var(--vert); }

        /* Types */
        .lc-types { display: flex; flex-direction: column; gap: 2px; }
        .lc-type { display: grid; grid-template-columns: 1fr 100px; gap: 20px; padding: 18px 0; border-bottom: 1px solid #f0f0f0; align-items: start; }
        .lc-type:first-child { border-top: 1px solid #f0f0f0; }
        .lc-type:last-child { border-bottom: none; }
        .lc-type-titre { font-size: 15px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); margin-bottom: 4px; }
        .lc-type-desc { font-size: 13px; color: #888; font-family: var(--font-syne); line-height: 1.6; }
        .lc-tarif { font-size: 16px; font-weight: 800; color: var(--vert); font-family: var(--font-syne); text-align: right; padding-top: 2px; }

        /* Étapes */
        .lc-etapes { display: flex; flex-direction: column; gap: 2px; }
        .lc-etape { display: grid; grid-template-columns: 44px 1fr; gap: 20px; padding: 18px 0; border-bottom: 1px solid #f0f0f0; align-items: start; }
        .lc-etape:last-child { border-bottom: none; }
        .lc-etape-num { font-size: 13px; font-weight: 800; color: var(--vert); font-family: var(--font-syne); padding-top: 2px; }
        .lc-etape-titre { font-size: 16px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); margin-bottom: 4px; }
        .lc-etape-texte { font-size: 14px; color: #666; font-family: var(--font-syne); line-height: 1.7; }

        /* CTA */
        .lc-cta { margin-top: 40px; padding: 32px; border: 1px solid #e8f5ee; border-radius: 8px; background: #f5faf6; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .lc-cta-text { font-size: 17px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); }
        .lc-cta-sub { font-size: 13px; color: #888; font-family: var(--font-syne); margin-top: 4px; }
        .lc-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--vert); color: #fff; font-size: 13px; font-weight: 700; font-family: var(--font-syne); text-decoration: none; border-radius: 4px; white-space: nowrap; transition: opacity 0.2s; }
        .lc-btn:hover { opacity: 0.85; }

        @media (max-width: 900px) { .lc-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .lc-wrap { padding: 40px 20px 60px; } .lc-cta { flex-direction: column; align-items: flex-start; } }
      `}</style>

      <PageHero label="Services" titre="Demande de licence" description="Obtenez votre licence sportive officielle INJS — valable sur l'ensemble des compétitions nationales." image="/accueil.jpg" imageAlt="Licence INJS" />

      <div className="lc-wrap">
        <SectionNav blocs={nav} />
        <main className="lc-main">

          <div className="lc-bloc">
            <span className="lc-label">Licence nationale</span>
            <h2 className="lc-title">La licence sportive INJS</h2>
            <p className="lc-text">La licence sportive est le document officiel qui identifie chaque athlète, entraîneur, arbitre ou dirigeant au sein du système sportif comorien. Elle est obligatoire pour participer à toute compétition officielle organisée ou reconnue par l'INJS.</p>
            <p className="lc-text">La licence est nominative, annuelle et liée à une fédération sportive nationale. Elle peut être demandée directement en ligne via la plateforme INJS.</p>
          </div>

          <div className="lc-bloc">
            <h3 className="lc-bloc-title">Types de licences & tarifs</h3>
            <div className="lc-types">
              {types.map(t => (
                <div key={t.type} className="lc-type">
                  <div>
                    <div className="lc-type-titre">{t.type}</div>
                    <div className="lc-type-desc">{t.description}</div>
                  </div>
                  <div className="lc-tarif">{t.tarif}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lc-bloc" style={{ marginBottom: 0 }}>
            <h3 className="lc-bloc-title">Comment faire la demande</h3>
            <div className="lc-etapes">
              {etapes.map(e => (
                <div key={e.num} className="lc-etape">
                  <div className="lc-etape-num">{e.num}</div>
                  <div>
                    <div className="lc-etape-titre">{e.titre}</div>
                    <div className="lc-etape-texte">{e.texte}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lc-cta">
              <div>
                <div className="lc-cta-text">Faire ma demande de licence</div>
                <div className="lc-cta-sub">Traitement sous 72h — licence numérique immédiate</div>
              </div>
              <a href="/services/licences/demande" className="lc-btn">Commencer la demande →</a>
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}
