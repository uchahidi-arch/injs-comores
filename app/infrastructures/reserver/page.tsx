'use client'
import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import SectionNav from '@/components/ui/SectionNav'

const nav = [{ titre: "Infrastructures", liens: [
  { label: "Tous les équipements", href: "/infrastructures" },
  { label: "Réserver un créneau", href: "/infrastructures/reserver" },
]}]

const equipements = [
  "Stade de Malouzini",
  "Gymnase National de Moroni",
  "Salle de Judo INJS",
  "Piscine Olympique de Moroni",
  "Courts de Tennis INJS",
  "Stade Municipal de Mutsamudu",
  "Gymnase de Fomboni",
]

const creneaux = ["06h00–08h00","08h00–10h00","10h00–12h00","14h00–16h00","16h00–18h00","18h00–20h00"]

export default function ReserverPage() {
  const [etape, setEtape] = useState(1)
  const [form, setForm] = useState({ equipement: '', date: '', creneau: '', club: '', contact: '', motif: '' })

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <style>{`
        .rv-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 40px 80px; display: flex; gap: 48px; align-items: flex-start; }
        .rv-main { flex: 1; min-width: 0; }
        .rv-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--vert); font-family: var(--font-syne); margin-bottom: 14px; display: block; }
        .rv-title { font-size: 30px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin: 0 0 32px; line-height: 1.15; }

        /* Étapes */
        .rv-etapes { display: flex; gap: 0; margin-bottom: 40px; border: 1px solid #eee; border-radius: 8px; overflow: hidden; }
        .rv-etape { flex: 1; padding: 14px 16px; text-align: center; font-size: 13px; font-weight: 600; font-family: var(--font-syne); color: #aaa; border-right: 1px solid #eee; cursor: pointer; transition: background 0.15s; }
        .rv-etape:last-child { border-right: none; }
        .rv-etape.actif { background: var(--vert); color: #fff; }
        .rv-etape.done { color: var(--vert); background: #f5faf6; }

        /* Formulaire */
        .rv-form { display: flex; flex-direction: column; gap: 20px; }
        .rv-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .rv-group { display: flex; flex-direction: column; gap: 6px; }
        .rv-field-label { font-size: 12px; font-weight: 700; color: var(--encre); font-family: var(--font-syne); letter-spacing: 0.06em; text-transform: uppercase; }
        .rv-input { padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 6px; font-size: 15px; font-family: var(--font-syne); color: var(--encre); outline: none; transition: border-color 0.15s; width: 100%; box-sizing: border-box; }
        .rv-input:focus { border-color: var(--vert); }
        .rv-select { padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 6px; font-size: 15px; font-family: var(--font-syne); color: var(--encre); outline: none; width: 100%; box-sizing: border-box; cursor: pointer; background: #fff; }
        .rv-textarea { padding: 12px 16px; border: 1px solid #e0e0e0; border-radius: 6px; font-size: 15px; font-family: var(--font-syne); color: var(--encre); outline: none; width: 100%; box-sizing: border-box; min-height: 100px; resize: vertical; }

        /* Créneaux */
        .rv-creneaux { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .rv-creneau { padding: 14px; border: 1px solid #eee; border-radius: 6px; text-align: center; font-size: 14px; font-weight: 600; font-family: var(--font-syne); color: #555; cursor: pointer; transition: all 0.15s; }
        .rv-creneau:hover { border-color: var(--vert); color: var(--vert); }
        .rv-creneau.selected { background: var(--vert); color: #fff; border-color: var(--vert); }

        /* Navigation */
        .rv-nav { display: flex; gap: 12px; margin-top: 8px; }
        .rv-btn-next { padding: 13px 28px; background: var(--vert); color: #fff; font-size: 13px; font-weight: 700; font-family: var(--font-syne); border: none; border-radius: 6px; cursor: pointer; transition: opacity 0.2s; }
        .rv-btn-next:hover { opacity: 0.85; }
        .rv-btn-back { padding: 13px 28px; border: 1px solid #ccc; color: #555; font-size: 13px; font-weight: 600; font-family: var(--font-syne); background: none; border-radius: 6px; cursor: pointer; transition: border-color 0.15s; }
        .rv-btn-back:hover { border-color: #999; }

        /* Récap */
        .rv-recap { border: 1px solid #eee; border-radius: 8px; overflow: hidden; }
        .rv-recap-row { display: grid; grid-template-columns: 140px 1fr; border-bottom: 1px solid #f5f5f5; }
        .rv-recap-row:last-child { border-bottom: none; }
        .rv-recap-key { padding: 14px 20px; font-size: 12px; font-weight: 700; color: #aaa; font-family: var(--font-syne); text-transform: uppercase; letter-spacing: 0.08em; background: #fafafa; }
        .rv-recap-val { padding: 14px 20px; font-size: 14px; font-weight: 600; font-family: var(--font-syne); color: var(--encre); }

        /* Succès */
        .rv-success { text-align: center; padding: 48px 32px; border: 1px solid #e8f5ee; border-radius: 8px; background: #f5faf6; }
        .rv-success-icon { font-size: 40px; margin-bottom: 16px; }
        .rv-success-titre { font-size: 22px; font-weight: 800; font-family: var(--font-syne); color: var(--encre); margin-bottom: 10px; }
        .rv-success-sub { font-size: 15px; color: #666; font-family: var(--font-syne); line-height: 1.7; }

        @media (max-width: 900px) { .rv-wrap { flex-direction: column; } }
        @media (max-width: 768px) { .rv-wrap { padding: 40px 20px 60px; } .rv-row { grid-template-columns: 1fr; } .rv-creneaux { grid-template-columns: repeat(2, 1fr); } .rv-etape { font-size: 11px; padding: 12px 8px; } }
      `}</style>

      <PageHero label="Infrastructures" titre="Réserver un créneau" description="Réservez en ligne votre créneau dans les équipements sportifs de l'INJS — disponible pour tous les clubs agréés." image="/accueil.jpg" imageAlt="Réservation INJS" />

      <div className="rv-wrap">
        <SectionNav blocs={nav} />
        <main className="rv-main">
          <span className="rv-label">Réservation en ligne</span>
          <h2 className="rv-title">Réserver un équipement</h2>

          {/* Indicateur étapes */}
          <div className="rv-etapes">
            {["Équipement & date", "Créneau", "Coordonnées", "Confirmation"].map((e, i) => (
              <div key={i} className={`rv-etape${etape === i+1 ? ' actif' : etape > i+1 ? ' done' : ''}`} onClick={() => etape > i+1 && setEtape(i+1)}>{e}</div>
            ))}
          </div>

          {/* Étape 1 */}
          {etape === 1 && (
            <div className="rv-form">
              <div className="rv-group">
                <label className="rv-field-label">Équipement souhaité</label>
                <select className="rv-select" value={form.equipement} onChange={e => set('equipement', e.target.value)}>
                  <option value="">Choisir un équipement</option>
                  {equipements.map(eq => <option key={eq}>{eq}</option>)}
                </select>
              </div>
              <div className="rv-group">
                <label className="rv-field-label">Date souhaitée</label>
                <input className="rv-input" type="date" value={form.date} onChange={e => set('date', e.target.value)} />
              </div>
              <div className="rv-nav">
                <button className="rv-btn-next" onClick={() => form.equipement && form.date && setEtape(2)}>Suivant →</button>
              </div>
            </div>
          )}

          {/* Étape 2 */}
          {etape === 2 && (
            <div className="rv-form">
              <div className="rv-group">
                <label className="rv-field-label">Choisir un créneau horaire</label>
                <div className="rv-creneaux">
                  {creneaux.map(c => (
                    <div key={c} className={`rv-creneau${form.creneau === c ? ' selected' : ''}`} onClick={() => set('creneau', c)}>{c}</div>
                  ))}
                </div>
              </div>
              <div className="rv-nav">
                <button className="rv-btn-back" onClick={() => setEtape(1)}>← Retour</button>
                <button className="rv-btn-next" onClick={() => form.creneau && setEtape(3)}>Suivant →</button>
              </div>
            </div>
          )}

          {/* Étape 3 */}
          {etape === 3 && (
            <div className="rv-form">
              <div className="rv-row">
                <div className="rv-group">
                  <label className="rv-field-label">Nom du club</label>
                  <input className="rv-input" type="text" placeholder="Nom du club ou de l'organisation" value={form.club} onChange={e => set('club', e.target.value)} />
                </div>
                <div className="rv-group">
                  <label className="rv-field-label">Contact (email ou téléphone)</label>
                  <input className="rv-input" type="text" placeholder="contact@monclub.km" value={form.contact} onChange={e => set('contact', e.target.value)} />
                </div>
              </div>
              <div className="rv-group">
                <label className="rv-field-label">Motif de la réservation</label>
                <textarea className="rv-textarea" placeholder="Entraînement, compétition, événement..." value={form.motif} onChange={e => set('motif', e.target.value)} />
              </div>
              <div className="rv-nav">
                <button className="rv-btn-back" onClick={() => setEtape(2)}>← Retour</button>
                <button className="rv-btn-next" onClick={() => form.club && form.contact && setEtape(4)}>Vérifier →</button>
              </div>
            </div>
          )}

          {/* Étape 4 — Récap */}
          {etape === 4 && (
            <div className="rv-form">
              <div className="rv-recap">
                {[
                  { k: "Équipement", v: form.equipement },
                  { k: "Date", v: form.date },
                  { k: "Créneau", v: form.creneau },
                  { k: "Club", v: form.club },
                  { k: "Contact", v: form.contact },
                  { k: "Motif", v: form.motif },
                ].map(r => (
                  <div key={r.k} className="rv-recap-row">
                    <div className="rv-recap-key">{r.k}</div>
                    <div className="rv-recap-val">{r.v || '—'}</div>
                  </div>
                ))}
              </div>
              <div className="rv-nav">
                <button className="rv-btn-back" onClick={() => setEtape(3)}>← Modifier</button>
                <button className="rv-btn-next" onClick={() => setEtape(5)}>Confirmer la réservation →</button>
              </div>
            </div>
          )}

          {/* Succès */}
          {etape === 5 && (
            <div className="rv-success">
              <div className="rv-success-icon">✓</div>
              <div className="rv-success-titre">Demande envoyée</div>
              <p className="rv-success-sub">Votre demande de réservation a été transmise à l'INJS. Vous recevrez une confirmation par email ou par téléphone dans un délai de 24h ouvrées.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
