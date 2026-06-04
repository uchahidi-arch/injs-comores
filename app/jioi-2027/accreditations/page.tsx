import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'
import CountdownBanner from '@/components/ui/CountdownBanner'

export const metadata = {
  title: "Accréditations — JIOI 2027 Comores",
  description: "Demandez votre accréditation officielle pour les Jeux des Îles de l'Océan Indien 2027 aux Comores.",
}

const nav = [{ titre: "JIOI 2027", liens: [
  { label: "Vue d'ensemble", href: "/jioi-2027" },
  { label: "Présentation", href: "/jioi-2027/presentation" },
  { label: "Disciplines", href: "/jioi-2027/sports" },
  { label: "Calendrier", href: "/jioi-2027/calendrier" },
  { label: "Délégations", href: "/jioi-2027/delegations" },
  { label: "Athlètes qualifiés", href: "/jioi-2027/athletes-qualifies" },
  { label: "Billetterie", href: "/jioi-2027/billetterie" },
  { label: "Médias & Presse", href: "/jioi-2027/medias" },
  { label: "Résultats live", href: "/jioi-2027/resultats" },
]}]

const types = [
  {
    code: "MED",
    titre: "Médias & Presse",
    description: "Journalistes, photographes, cameramen et équipes de diffusion accrédités par un organe de presse reconnu.",
    acces: ["Salle de presse", "Zones mixtes", "Zones médias bord terrain", "Conférences de presse"],
  },
  {
    code: "OFF",
    titre: "Officiels & Arbitres",
    description: "Officiels sportifs, arbitres et juges désignés par les fédérations nationales et internationales.",
    acces: ["Zones techniques", "Vestiaires officiels", "Salle de réunion arbitrage", "Accès terrain"],
  },
  {
    code: "DLG",
    titre: "Membres de délégation",
    description: "Athlètes, entraîneurs, staff médical et membres officiels des délégations nationales participantes.",
    acces: ["Village des athlètes", "Zones d'échauffement", "Accès compétition", "Transport officiel"],
  },
  {
    code: "VOL",
    titre: "Bénévoles",
    description: "Volontaires sélectionnés par le comité d'organisation pour assurer le bon déroulement des Jeux.",
    acces: ["Zone d'affectation", "Espaces bénévoles", "Accès sites de compétition", "Uniforme officiel"],
  },
]

const etapes = [
  { num: "01", titre: "Soumettre la demande", texte: "Remplissez le formulaire en ligne avec vos informations et justificatifs." },
  { num: "02", titre: "Vérification", texte: "Le comité d'organisation vérifie votre dossier sous 15 jours ouvrés." },
  { num: "03", titre: "Confirmation", texte: "Vous recevez votre confirmation et un QR code d'accréditation par email." },
  { num: "04", titre: "Retrait du badge", texte: "Récupérez votre badge accréditation au centre d'accréditation à Moroni." },
]

export default function JioiAccreditationsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .jac-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .jac-main { flex: 1; min-width: 0; }
        .jac-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .jac-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 16px; line-height: 1.15; }
        .jac-text { font-size: 16px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0 0 48px; }
        .jac-bloc { margin-bottom: 56px; }
        .jac-bloc-title { font-size: 20px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 20px; padding-bottom: 10px; border-bottom: 2px solid var(--vert); }

        /* Types */
        .jac-types { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .jac-type { border: 1px solid #eee; border-radius: 8px; padding: 24px; display: flex; flex-direction: column; gap: 12px; transition: border-color 0.2s, box-shadow 0.2s; }
        .jac-type:hover { border-color: var(--vert-2); box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
        .jac-type-top { display: flex; align-items: center; gap: 12px; }
        .jac-code { font-size: 11px; font-weight: 700; background: var(--vert-light); color: var(--vert); padding: 4px 8px; border-radius: 4px; font-family: var(--font-syne); letter-spacing: 0.08em; }
        .jac-type-titre { font-size: 17px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); }
        .jac-type-desc { font-size: 14px; color: #666; line-height: 1.7; font-family: var(--font-syne); margin: 0; }
        .jac-acces { display: flex; flex-direction: column; gap: 4px; }
        .jac-acces-item { font-size: 13px; color: #555; font-family: var(--font-syne); display: flex; align-items: center; gap: 8px; }
        .jac-acces-item::before { content: '›'; color: var(--vert); font-weight: 700; }
        .jac-btn { margin-top: 4px; display: inline-flex; align-items: center; gap: 6px; padding: 9px 16px; background: var(--vert); color: #fff; font-size: 12px; font-weight: 700; font-family: var(--font-syne); text-decoration: none; border-radius: 4px; align-self: flex-start; transition: opacity 0.2s; }
        .jac-btn:hover { opacity: 0.85; }

        /* Étapes */
        .jac-etapes { display: flex; flex-direction: column; gap: 2px; }
        .jac-etape { display: grid; grid-template-columns: 44px 1fr; gap: 20px; padding: 18px 0; border-bottom: 1px solid #f0f0f0; align-items: start; }
        .jac-etape:last-child { border-bottom: none; }
        .jac-etape-num { font-size: 13px; font-weight: 800; color: var(--vert); font-family: var(--font-syne); padding-top: 2px; }
        .jac-etape-titre { font-size: 16px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); margin-bottom: 4px; }
        .jac-etape-texte { font-size: 14px; color: #666; font-family: var(--font-syne); line-height: 1.7; }

        @media (max-width: 900px) { .jac-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .jac-wrap { padding: 40px 20px 60px; } .jac-types { grid-template-columns: 1fr; } }
      `}</style>
      <PageHero label="JIOI 2027" titre="Accréditations" description="Obtenez votre accréditation officielle pour accéder aux sites de compétition et zones réservées des JIOI 2027." image="/jioi-hero.jpg" imageAlt="Accréditations JIOI 2027" bandColor="#deeee3" />
      <div className="jac-wrap">
        <SectionNav blocs={[...nav, { titre: "Compte à rebours", contenu: <CountdownBanner /> }]} />
        <main className="jac-main">
          <span className="jac-label">Accès officiel</span>
          <h2 className="jac-title">Accréditations JIOI 2027</h2>
          <p className="jac-text">L'accréditation est obligatoire pour accéder aux zones réservées des Jeux des Îles 2027. Elle détermine vos droits d'accès selon votre rôle — presse, officiel, délégation ou bénévole. Les demandes ouvrent 6 mois avant les Jeux.</p>

          <div className="jac-bloc">
            <h3 className="jac-bloc-title">Types d'accréditation</h3>
            <div className="jac-types">
              {types.map(t => (
                <div key={t.code} className="jac-type">
                  <div className="jac-type-top">
                    <span className="jac-code">{t.code}</span>
                    <div className="jac-type-titre">{t.titre}</div>
                  </div>
                  <p className="jac-type-desc">{t.description}</p>
                  <div className="jac-acces">
                    {t.acces.map(a => <div key={a} className="jac-acces-item">{a}</div>)}
                  </div>
                  <a href="/jioi-2027/accreditations/demande" className="jac-btn">Faire une demande →</a>
                </div>
              ))}
            </div>
          </div>

          <div className="jac-bloc" style={{ marginBottom: 0 }}>
            <h3 className="jac-bloc-title">Comment ça marche</h3>
            <div className="jac-etapes">
              {etapes.map(e => (
                <div key={e.num} className="jac-etape">
                  <div className="jac-etape-num">{e.num}</div>
                  <div>
                    <div className="jac-etape-titre">{e.titre}</div>
                    <div className="jac-etape-texte">{e.texte}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
