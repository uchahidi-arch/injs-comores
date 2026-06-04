'use client'
import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'

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

export default function FormationsInscriptionPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .fi-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .fi-main { flex: 1; min-width: 0; }
        .fi-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .fi-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 16px; line-height: 1.15; }
        .fi-text { font-size: 16px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0 0 40px; }
        .fi-form { display: flex; flex-direction: column; gap: 20px; }
        .fi-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .fi-group { display: flex; flex-direction: column; gap: 6px; }
        .fi-label-field { font-size: 12px; font-weight: 700; color: var(--encre); font-family: var(--font-syne); letter-spacing: 0.06em; text-transform: uppercase; }
        .fi-input { padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 6px; font-size: 15px; font-family: var(--font-syne); color: var(--encre); background: #fff; outline: none; transition: border-color 0.15s; width: 100%; box-sizing: border-box; }
        .fi-input:focus { border-color: var(--vert); }
        .fi-select { padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 6px; font-size: 15px; font-family: var(--font-syne); color: var(--encre); background: #fff; outline: none; width: 100%; box-sizing: border-box; cursor: pointer; }
        .fi-textarea { padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 6px; font-size: 15px; font-family: var(--font-syne); color: var(--encre); background: #fff; outline: none; width: 100%; box-sizing: border-box; min-height: 100px; resize: vertical; }
        .fi-submit { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; background: var(--vert); color: #fff; font-size: 14px; font-weight: 700; font-family: var(--font-syne); border: none; border-radius: 6px; cursor: pointer; transition: opacity 0.2s; align-self: flex-start; }
        .fi-submit:hover { opacity: 0.85; }
        .fi-note { font-size: 13px; color: #aaa; font-family: var(--font-syne); line-height: 1.7; margin-top: 8px; }
        @media (max-width: 900px) { .fi-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .fi-wrap { padding: 40px 20px 60px; } .fi-row { grid-template-columns: 1fr; } }
      `}</style>

      <PageHero label="Formations" titre="Inscription en ligne" description="Inscrivez-vous aux formations officielles de l'INJS — arbitrage, coaching et éducation sportive." image="/benevolat_2027.jpg" imageAlt="Inscription formations INJS" />

      <div className="fi-wrap">
        <SectionNav blocs={nav} />
        <main className="fi-main">
          <span className="fi-label">Candidature</span>
          <h2 className="fi-title">Formulaire d'inscription</h2>
          <p className="fi-text">Remplissez ce formulaire pour vous inscrire à une formation officielle de l'INJS. Votre candidature sera examinée et vous recevrez une confirmation par email dans un délai de 5 jours ouvrés.</p>

          <form className="fi-form" onSubmit={e => e.preventDefault()}>
            <div className="fi-row">
              <div className="fi-group">
                <label className="fi-label-field">Prénom</label>
                <input className="fi-input" type="text" placeholder="Votre prénom" />
              </div>
              <div className="fi-group">
                <label className="fi-label-field">Nom</label>
                <input className="fi-input" type="text" placeholder="Votre nom" />
              </div>
            </div>
            <div className="fi-row">
              <div className="fi-group">
                <label className="fi-label-field">Email</label>
                <input className="fi-input" type="email" placeholder="votre@email.com" />
              </div>
              <div className="fi-group">
                <label className="fi-label-field">Téléphone</label>
                <input className="fi-input" type="tel" placeholder="+269 XXX XX XX" />
              </div>
            </div>
            <div className="fi-group">
              <label className="fi-label-field">Formation souhaitée</label>
              <select className="fi-select">
                <option value="">Choisir une formation</option>
                <option>Diplôme d'État d'Entraîneur Sportif</option>
                <option>Brevet d'Arbitre National</option>
                <option>Certificat d'Éducateur Sportif</option>
                <option>Formation Premiers Secours en Sport</option>
                <option>Brevet de Moniteur de Natation</option>
                <option>Diplôme de Gestionnaire Sportif</option>
              </select>
            </div>
            <div className="fi-group">
              <label className="fi-label-field">Île de résidence</label>
              <select className="fi-select">
                <option value="">Choisir une île</option>
                <option>Grande Comore (Ngazidja)</option>
                <option>Anjouan (Ndzuani)</option>
                <option>Mohéli (Mwali)</option>
              </select>
            </div>
            <div className="fi-group">
              <label className="fi-label-field">Expérience sportive</label>
              <textarea className="fi-textarea" placeholder="Décrivez brièvement votre expérience dans le sport (club, discipline, années de pratique...)" />
            </div>
            <div>
              <button type="submit" className="fi-submit">Envoyer ma candidature →</button>
              <p className="fi-note">Réponse sous 5 jours ouvrés. Les places sont limitées et attribuées selon l'ordre de réception des dossiers complets.</p>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}
