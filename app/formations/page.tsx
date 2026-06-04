import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'

export const metadata = { title: "Formations officielles — INJS Comores" }

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

const formations = [
  { titre: "Diplôme d'État d'Entraîneur Sportif", niveau: "Niveau 2", duree: "6 mois", prochaine: "Sept. 2026", places: "20", disciplines: "Toutes disciplines" },
  { titre: "Brevet d'Arbitre National", niveau: "Niveau 1", duree: "3 semaines", prochaine: "Juil. 2026", places: "30", disciplines: "Football, Basketball, Volleyball" },
  { titre: "Certificat d'Éducateur Sportif", niveau: "Niveau 1", duree: "1 mois", prochaine: "Août 2026", places: "25", disciplines: "Toutes disciplines" },
  { titre: "Formation Premiers Secours en Sport", niveau: "Initiation", duree: "2 jours", prochaine: "Juin 2026", places: "40", disciplines: "Toutes disciplines" },
  { titre: "Brevet de Moniteur de Natation", niveau: "Niveau 1", duree: "2 semaines", prochaine: "Oct. 2026", places: "15", disciplines: "Natation" },
  { titre: "Diplôme de Gestionnaire Sportif", niveau: "Niveau 2", duree: "4 mois", prochaine: "2027", places: "12", disciplines: "Administration sportive" },
]

export default function FormationsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .fo-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .fo-main { flex: 1; min-width: 0; }
        .fo-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .fo-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 16px; line-height: 1.15; }
        .fo-text { font-size: 16px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0 0 40px; }
        .fo-list { display: flex; flex-direction: column; gap: 2px; }
        .fo-item { display: grid; grid-template-columns: 1fr 80px 100px auto; gap: 20px; padding: 22px 0; border-bottom: 1px solid #f0f0f0; align-items: center; }
        .fo-item:first-child { border-top: 1px solid #f0f0f0; }
        .fo-item:last-child { border-bottom: none; }
        .fo-item-titre { font-size: 16px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); margin-bottom: 4px; }
        .fo-item-sub { font-size: 12px; color: #aaa; font-family: var(--font-syne); }
        .fo-niveau { font-size: 11px; font-weight: 700; color: var(--vert); background: #e8f5ee; padding: 3px 8px; border-radius: 4px; font-family: var(--font-syne); text-align: center; }
        .fo-date { font-size: 13px; font-weight: 600; color: #555; font-family: var(--font-syne); text-align: center; }
        .fo-btn { display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; background: var(--vert); color: #fff; font-size: 11px; font-weight: 700; font-family: var(--font-syne); text-decoration: none; border-radius: 4px; white-space: nowrap; transition: opacity 0.2s; }
        .fo-btn:hover { opacity: 0.85; }
        @media (max-width: 900px) { .fo-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .fo-wrap { padding: 40px 20px 60px; } .fo-item { grid-template-columns: 1fr auto; } .fo-niveau, .fo-date { display: none; } }
      `}</style>

      <PageHero label="Formations" titre="Formations officielles" description="Stages certifiés pour arbitres, entraîneurs et éducateurs sportifs — organisés par l'INJS sur les trois îles." image="/benevolat_2027.jpg" imageAlt="Formations INJS" />

      <div className="fo-wrap">
        <SectionNav blocs={nav} />
        <main className="fo-main">
          <span className="fo-label">Calendrier des formations</span>
          <h2 className="fo-title">Formations & certifications officielles</h2>
          <p className="fo-text">L'INJS organise tout au long de l'année des formations certifiantes pour les acteurs du sport comorien — entraîneurs, arbitres, éducateurs sportifs et gestionnaires. Toutes les certifications sont reconnues au niveau national et par les fédérations internationales partenaires.</p>

          <div className="fo-list">
            {formations.map((f, i) => (
              <div key={i} className="fo-item">
                <div>
                  <div className="fo-item-titre">{f.titre}</div>
                  <div className="fo-item-sub">{f.duree} · {f.places} places · {f.disciplines}</div>
                </div>
                <div className="fo-niveau">{f.niveau}</div>
                <div className="fo-date">{f.prochaine}</div>
                <a href="/formations/inscription" className="fo-btn">S'inscrire →</a>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
