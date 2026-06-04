import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'
import CountdownBanner from '@/components/ui/CountdownBanner'

export const metadata = {
  title: "Médias & Presse — JIOI 2027 Comores",
  description: "Espace presse et accréditations médias pour les Jeux des Îles de l'Océan Indien 2027 aux Comores.",
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

const communiques = [
  { date: "15 mai 2026", titre: "Lancement officiel du site JIOI 2027", categorie: "Institutionnel" },
  { date: "2 mai 2026", titre: "Les Comores choisissent la mascotte des JIOI 2027", categorie: "Événement" },
  { date: "18 avril 2026", titre: "Réunion du comité d'organisation — point d'étape infrastructures", categorie: "Organisation" },
  { date: "3 mars 2026", titre: "Signature du protocole d'accord avec la COI pour les JIOI 2027", categorie: "Partenariat" },
]

const categories = [
  { titre: "Accréditation presse écrite", description: "Journalistes, correspondants, rédacteurs en chef. Accès salle de presse et zones mixtes.", href: "/jioi-2027/accreditations" },
  { titre: "Accréditation photo & vidéo", description: "Photographes et cameramen. Accès zones de prise de vue officielles sur tous les sites.", href: "/jioi-2027/accreditations" },
  { titre: "Accréditation radio & TV", description: "Équipes de diffusion, commentateurs et présentateurs. Accès studios et zones techniques.", href: "/jioi-2027/accreditations" },
]

export default function JioiMediasPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .jm-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .jm-main { flex: 1; min-width: 0; }
        .jm-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .jm-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 20px; line-height: 1.15; }
        .jm-text { font-size: 16px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0 0 48px; }
        .jm-bloc { margin-bottom: 56px; }
        .jm-bloc-title { font-size: 20px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 20px; padding-bottom: 10px; border-bottom: 2px solid var(--vert); }

        /* Accréditations */
        .jm-accred { display: flex; flex-direction: column; gap: 2px; }
        .jm-accred-item { display: grid; grid-template-columns: 1fr auto; gap: 20px; padding: 20px 0; border-bottom: 1px solid #f0f0f0; align-items: center; }
        .jm-accred-item:last-child { border-bottom: none; }
        .jm-accred-titre { font-size: 16px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); margin-bottom: 4px; }
        .jm-accred-desc { font-size: 13px; color: #888; font-family: var(--font-syne); line-height: 1.6; }
        .jm-accred-btn { display: inline-flex; align-items: center; gap: 6px; padding: 9px 16px; border: 1px solid var(--vert); color: var(--vert); font-size: 12px; font-weight: 700; font-family: var(--font-syne); text-decoration: none; border-radius: 4px; white-space: nowrap; transition: background 0.15s, color 0.15s; }
        .jm-accred-btn:hover { background: var(--vert); color: #fff; }

        /* Communiqués */
        .jm-communiques { display: flex; flex-direction: column; gap: 2px; }
        .jm-communique { display: grid; grid-template-columns: 100px 1fr auto; gap: 20px; padding: 16px 0; border-bottom: 1px solid #f0f0f0; align-items: center; }
        .jm-communique:first-child { border-top: 1px solid #f0f0f0; }
        .jm-com-date { font-size: 13px; font-weight: 600; color: #aaa; font-family: var(--font-syne); }
        .jm-com-titre { font-size: 15px; font-weight: 600; font-family: var(--font-syne); color: var(--encre); }
        .jm-com-cat { font-size: 10px; font-weight: 700; color: var(--vert); background: #e8f5ee; padding: 3px 8px; border-radius: 4px; font-family: var(--font-syne); letter-spacing: 0.06em; white-space: nowrap; }

        @media (max-width: 900px) { .jm-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .jm-wrap { padding: 40px 20px 60px; } .jm-communique { grid-template-columns: 1fr auto; } .jm-com-date { display: none; } .jm-accred-item { grid-template-columns: 1fr; } }
      `}</style>
      <PageHero label="JIOI 2027" titre="Médias & Presse" description="Espace dédié aux professionnels des médias — accréditations, communiqués officiels et ressources pour la couverture des JIOI 2027." image="/jioi-hero.jpg" imageAlt="Médias JIOI 2027" bandColor="#deeee3" />
      <div className="jm-wrap">
        <SectionNav blocs={[...nav, { titre: "Compte à rebours", contenu: <CountdownBanner /> }]} />
        <main className="jm-main">
          <span className="jm-label">Espace professionnel</span>
          <h2 className="jm-title">Médias & Presse</h2>
          <p className="jm-text">Le comité d'organisation des JIOI 2027 accompagne l'ensemble des médias souhaitant couvrir les Jeux. Accréditations, communiqués officiels, ressources visuelles et accès terrain — tout est centralisé ici.</p>

          <div className="jm-bloc">
            <h3 className="jm-bloc-title">Accréditations médias</h3>
            <div className="jm-accred">
              {categories.map(c => (
                <div key={c.titre} className="jm-accred-item">
                  <div>
                    <div className="jm-accred-titre">{c.titre}</div>
                    <div className="jm-accred-desc">{c.description}</div>
                  </div>
                  <a href={c.href} className="jm-accred-btn">Demander →</a>
                </div>
              ))}
            </div>
          </div>

          <div className="jm-bloc" style={{ marginBottom: 0 }}>
            <h3 className="jm-bloc-title">Communiqués officiels</h3>
            <div className="jm-communiques">
              {communiques.map(c => (
                <div key={c.titre} className="jm-communique">
                  <div className="jm-com-date">{c.date}</div>
                  <div className="jm-com-titre">{c.titre}</div>
                  <div className="jm-com-cat">{c.categorie}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
