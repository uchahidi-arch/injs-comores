'use client'
import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'

const bureaux = [
  { titre: "Siège principal — Moroni", adresse: "Boulevard de Strasbourg, Moroni, Grande Comore", tel: "+269 773 XX XX", email: "contact@injs.km", horaires: "Lun–Ven : 8h00–15h30" },
  { titre: "Antenne d'Anjouan", adresse: "Avenue de l'Indépendance, Mutsamudu, Anjouan", tel: "+269 774 XX XX", email: "anjouan@injs.km", horaires: "Lun–Ven : 8h00–14h30" },
  { titre: "Antenne de Mohéli", adresse: "Fomboni, Mohéli", tel: "+269 775 XX XX", email: "moheli@injs.km", horaires: "Lun–Ven : 8h00–14h00" },
]

const departements = [
  { titre: "Sport & Fédérations", email: "sport@injs.km" },
  { titre: "Jeunesse & Action citoyenne", email: "jeunesse@injs.km" },
  { titre: "Formations & Certifications", email: "formations@injs.km" },
  { titre: "JIOI 2027", email: "jioi2027@injs.km" },
  { titre: "Presse & Communication", email: "presse@injs.km" },
  { titre: "Administration & Licences", email: "admin@injs.km" },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .ct-inner { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; }
        .ct-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .ct-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 16px; line-height: 1.15; }
        .ct-text { font-size: 16px; color: #555; line-height: 1.85; font-family: var(--font-syne); margin: 0 0 56px; }
        .ct-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; }
        .ct-bloc-title { font-size: 20px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 24px; padding-bottom: 10px; border-bottom: 2px solid var(--vert); }

        /* Bureaux */
        .ct-bureaux { display: flex; flex-direction: column; gap: 24px; }
        .ct-bureau { border: 1px solid #eee; border-radius: 8px; padding: 22px 24px; display: flex; flex-direction: column; gap: 8px; }
        .ct-bureau-nom { font-size: 15px; font-weight: 700; font-family: var(--font-syne); color: var(--encre); }
        .ct-bureau-info { font-size: 13px; color: #666; font-family: var(--font-syne); line-height: 1.6; display: flex; flex-direction: column; gap: 3px; }
        .ct-bureau-info a { color: var(--vert); text-decoration: none; }
        .ct-bureau-info a:hover { text-decoration: underline; }
        .ct-horaires { font-size: 11px; font-weight: 700; color: var(--vert); font-family: var(--font-syne); letter-spacing: 0.06em; text-transform: uppercase; }

        /* Départements */
        .ct-depts { display: flex; flex-direction: column; gap: 2px; margin-bottom: 32px; }
        .ct-dept { display: flex; align-items: center; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #f5f5f5; }
        .ct-dept:first-child { border-top: 1px solid #f0f0f0; }
        .ct-dept-nom { font-size: 14px; font-weight: 600; font-family: var(--font-syne); color: var(--encre); }
        .ct-dept-mail { font-size: 13px; color: var(--vert); font-family: var(--font-syne); text-decoration: none; }
        .ct-dept-mail:hover { text-decoration: underline; }

        /* Formulaire */
        .ct-form { display: flex; flex-direction: column; gap: 16px; }
        .ct-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .ct-group { display: flex; flex-direction: column; gap: 6px; }
        .ct-field-label { font-size: 12px; font-weight: 700; color: var(--encre); font-family: var(--font-syne); letter-spacing: 0.06em; text-transform: uppercase; }
        .ct-input { padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 6px; font-size: 15px; font-family: var(--font-syne); color: var(--encre); outline: none; transition: border-color 0.15s; width: 100%; box-sizing: border-box; }
        .ct-input:focus { border-color: var(--vert); }
        .ct-select { padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 6px; font-size: 15px; font-family: var(--font-syne); color: var(--encre); outline: none; width: 100%; box-sizing: border-box; background: #fff; cursor: pointer; }
        .ct-textarea { padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 6px; font-size: 15px; font-family: var(--font-syne); color: var(--encre); outline: none; width: 100%; box-sizing: border-box; min-height: 130px; resize: vertical; transition: border-color 0.15s; }
        .ct-textarea:focus { border-color: var(--vert); }
        .ct-submit { padding: 13px 28px; background: var(--vert); color: #fff; font-size: 13px; font-weight: 700; font-family: var(--font-syne); border: none; border-radius: 6px; cursor: pointer; transition: opacity 0.2s; align-self: flex-start; }
        .ct-submit:hover { opacity: 0.85; }
        .ct-success { padding: 24px; background: #f5faf6; border: 1px solid #e8f5ee; border-radius: 8px; font-size: 15px; font-weight: 600; font-family: var(--font-syne); color: var(--vert); }

        @media (max-width: 900px) { .ct-grid { grid-template-columns: 1fr; gap: 48px; } }
        @media (max-width: 768px) { .ct-inner { padding: 40px 20px 60px; } .ct-row { grid-template-columns: 1fr; } .ct-title { font-size: 24px; } }
      `}</style>

      <PageHero label="INJS" titre="Contact" description="Contactez l'Institut National de la Jeunesse et des Sports — siège de Moroni et antennes d'Anjouan et Mohéli." image="/accueil.jpg" imageAlt="Contact INJS" />

      <div className="ct-inner">
        <span className="ct-label">Nous contacter</span>
        <h2 className="ct-title">Toutes nos coordonnées</h2>
        <p className="ct-text">L'INJS est présent sur les trois îles de l'archipel. Retrouvez ci-dessous les coordonnées de nos bureaux et l'email de chaque département pour toute demande spécifique.</p>

        <div className="ct-grid">

          {/* Colonne gauche — bureaux + départements */}
          <div>
            <h3 className="ct-bloc-title">Nos bureaux</h3>
            <div className="ct-bureaux">
              {bureaux.map(b => (
                <div key={b.titre} className="ct-bureau">
                  <div className="ct-bureau-nom">{b.titre}</div>
                  <div className="ct-bureau-info">
                    <span>{b.adresse}</span>
                    <a href={`tel:${b.tel}`}>{b.tel}</a>
                    <a href={`mailto:${b.email}`}>{b.email}</a>
                  </div>
                  <div className="ct-horaires">{b.horaires}</div>
                </div>
              ))}
            </div>

            <h3 className="ct-bloc-title" style={{ marginTop: '40px' }}>Contacts par département</h3>
            <div className="ct-depts">
              {departements.map(d => (
                <div key={d.titre} className="ct-dept">
                  <div className="ct-dept-nom">{d.titre}</div>
                  <a href={`mailto:${d.email}`} className="ct-dept-mail">{d.email}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite — formulaire */}
          <div>
            <h3 className="ct-bloc-title">Envoyer un message</h3>
            {sent ? (
              <div className="ct-success">✓ Message envoyé — nous vous répondrons sous 48h ouvrées.</div>
            ) : (
              <form className="ct-form" onSubmit={e => { e.preventDefault(); setSent(true) }}>
                <div className="ct-row">
                  <div className="ct-group">
                    <label className="ct-field-label">Prénom</label>
                    <input className="ct-input" type="text" placeholder="Votre prénom" required />
                  </div>
                  <div className="ct-group">
                    <label className="ct-field-label">Nom</label>
                    <input className="ct-input" type="text" placeholder="Votre nom" required />
                  </div>
                </div>
                <div className="ct-group">
                  <label className="ct-field-label">Email</label>
                  <input className="ct-input" type="email" placeholder="votre@email.com" required />
                </div>
                <div className="ct-group">
                  <label className="ct-field-label">Objet</label>
                  <select className="ct-select">
                    <option value="">Choisir un objet</option>
                    <option>Demande de licence</option>
                    <option>Agrément de club</option>
                    <option>Réservation d'infrastructure</option>
                    <option>Formations & certifications</option>
                    <option>JIOI 2027</option>
                    <option>Jeunesse & Action citoyenne</option>
                    <option>Presse & communication</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="ct-group">
                  <label className="ct-field-label">Message</label>
                  <textarea className="ct-textarea" placeholder="Votre message..." required />
                </div>
                <button type="submit" className="ct-submit">Envoyer le message →</button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
