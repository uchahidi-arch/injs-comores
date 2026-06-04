import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'

export const metadata = { title: "Certifications — INJS Comores" }

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

export default function CertificationsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .ce-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .ce-main { flex: 1; min-width: 0; }
        .ce-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .ce-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 16px; line-height: 1.15; }
        .ce-text { font-size: 16px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0 0 40px; }
        .ce-search { display: flex; gap: 12px; margin-bottom: 40px; }
        .ce-input { flex: 1; padding: 14px 18px; border: 1px solid #e0e0e0; border-radius: 6px; font-size: 15px; font-family: var(--font-syne); outline: none; transition: border-color 0.15s; }
        .ce-input:focus { border-color: var(--vert); }
        .ce-search-btn { padding: 14px 24px; background: var(--vert); color: #fff; font-size: 13px; font-weight: 700; font-family: var(--font-syne); border: none; border-radius: 6px; cursor: pointer; white-space: nowrap; transition: opacity 0.2s; }
        .ce-search-btn:hover { opacity: 0.85; }
        .ce-vide { padding: 48px; text-align: center; border: 1px solid #eee; border-radius: 8px; }
        .ce-vide-titre { font-size: 18px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); margin-bottom: 8px; }
        .ce-vide-sub { font-size: 14px; color: #aaa; font-family: var(--font-syne); }
        .ce-info { margin-top: 40px; padding: 24px; border: 1px solid #eee; border-radius: 8px; }
        .ce-info-titre { font-size: 16px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); margin-bottom: 12px; }
        .ce-info-text { font-size: 14px; color: #666; font-family: var(--font-syne); line-height: 1.75; }
        @media (max-width: 900px) { .ce-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .ce-wrap { padding: 40px 20px 60px; } .ce-search { flex-direction: column; } }
      `}</style>

      <PageHero label="Formations" titre="Certifications" description="Retrouvez et vérifiez les certifications et diplômes délivrés par l'INJS — téléchargement en ligne." image="/accueil.jpg" imageAlt="Certifications INJS" />

      <div className="ce-wrap">
        <SectionNav blocs={nav} />
        <main className="ce-main">
          <span className="ce-label">Espace certifications</span>
          <h2 className="ce-title">Vos certifications INJS</h2>
          <p className="ce-text">Retrouvez et téléchargez l'ensemble de vos certifications et diplômes délivrés par l'INJS. Entrez votre numéro de licence ou votre nom pour accéder à vos documents.</p>

          <div className="ce-search">
            <input className="ce-input" type="text" placeholder="Numéro de licence ou nom complet" />
            <button className="ce-search-btn">Rechercher →</button>
          </div>

          <div className="ce-vide">
            <div className="ce-vide-titre">Plateforme en cours de déploiement</div>
            <p className="ce-vide-sub">La base de données des certifications sera disponible prochainement. Contactez l'INJS directement pour obtenir une copie de vos diplômes.</p>
          </div>

          <div className="ce-info">
            <div className="ce-info-titre">Besoin d'un duplicata ?</div>
            <p className="ce-info-text">Pour toute demande de duplicata de certification ou de diplôme INJS, contactez le service des formations à l'adresse formations@injs.km ou au +269 773 XX XX. Munissez-vous de votre numéro de licence et d'une pièce d'identité.</p>
          </div>
        </main>
      </div>
    </div>
  )
}
