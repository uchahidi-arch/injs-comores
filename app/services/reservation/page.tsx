'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/home/PageHero'

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const INFRASTRUCTURES = [
  { id: 'gymnase-injs',     nom: 'Gymnase de l\'INJS',            ile: 'Grande Comore', ville: 'Moroni',    type: 'Salle couverte',    capacite: '500 spectateurs',    sports: ['Judo', 'Boxe', 'Handball', 'Basket'], image: '/accueil.jpg', disponible: true  },
  { id: 'salle-boxe',       nom: 'Salle de Boxe INJS',            ile: 'Grande Comore', ville: 'Moroni',    type: 'Salle spécialisée', capacite: '150 spectateurs',    sports: ['Boxe', 'MMA'],                        image: '/accueil.jpg', disponible: true  },
  { id: 'terrain-basket',   nom: 'Terrain de Basketball',         ile: 'Grande Comore', ville: 'Moroni',    type: 'Terrain extérieur', capacite: '300 spectateurs',    sports: ['Basketball'],                         image: '/accueil.jpg', disponible: true  },
  { id: 'stade-omnisports', nom: 'Stade Omnisports de Moroni',    ile: 'Grande Comore', ville: 'Moroni',    type: 'Stade',             capacite: '10 000 spectateurs', sports: ['Football', 'Athlétisme'],             image: '/accueil.jpg', disponible: false },
  { id: 'salle-anjouan',    nom: 'Salle Polyvalente d\'Anjouan',  ile: 'Anjouan',       ville: 'Mutsamudu', type: 'Salle couverte',    capacite: '300 spectateurs',    sports: ['Volleyball', 'Handball', 'Basket'],   image: '/accueil.jpg', disponible: true  },
  { id: 'terrain-moheli',   nom: 'Terrain de Mohéli',             ile: 'Mohéli',        ville: 'Fomboni',   type: 'Terrain extérieur', capacite: '200 spectateurs',    sports: ['Football', 'Basketball'],             image: '/accueil.jpg', disponible: true  },
]

const ILES = ['Toutes les îles', 'Grande Comore', 'Anjouan', 'Mohéli']

/* ─────────────────────────────────────────────
   CSS
───────────────────────────────────────────── */
const css = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .infra-card {
    background: #fff;
    border: 1px solid #e8e8e4;
    overflow: hidden;
    transition: box-shadow 0.2s ease, transform 0.2s ease;
    animation: fadeUp 0.5s ease both;
    display: flex;
    flex-direction: column;
  }
  .infra-card:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.10);
    transform: translateY(-3px);
  }
  .infra-card-img {
    position: relative;
    height: 180px;
    overflow: hidden;
    background: #e8ede9;
  }
  .infra-card:hover .infra-card-img img {
    transform: scale(1.04);
  }
  .infra-card-img img { transition: transform 0.4s ease; }

  .filter-btn {
    padding: 8px 18px;
    font-size: 11px; font-weight: 700;
    font-family: var(--font-syne);
    letter-spacing: 0.08em; text-transform: uppercase;
    border: 1px solid #ddd;
    background: #fff; color: #666;
    cursor: pointer; transition: all 0.15s;
  }
  .filter-btn:hover { border-color: var(--vert); color: var(--vert); }
  .filter-btn.active { background: var(--vert); color: #fff; border-color: var(--vert); }

  .modal-overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.4);
    z-index: 400;
    display: flex; align-items: center; justify-content: center;
    padding: 20px;
    animation: fadeIn 0.2s ease;
  }
  .modal-panel {
    background: #fff; width: 100%; max-width: 560px;
    max-height: 90vh; overflow-y: auto;
    animation: fadeUp 0.25s ease;
  }
  .modal-header {
    padding: 28px 32px 20px;
    border-bottom: 1px solid #f0f0f0;
    display: flex; align-items: flex-start;
    justify-content: space-between; gap: 16px;
    position: sticky; top: 0; background: #fff; z-index: 1;
  }
  .modal-close {
    background: none; border: none; cursor: pointer;
    color: #aaa; font-size: 22px; padding: 0; line-height: 1;
    flex-shrink: 0; transition: color 0.15s;
  }
  .modal-close:hover { color: var(--encre); }

  .form-group { margin-bottom: 20px; }
  .form-label {
    display: block; font-size: 11px; font-weight: 700;
    font-family: var(--font-syne); color: var(--encre);
    letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 7px;
  }
  .form-input {
    width: 100%; padding: 11px 14px;
    border: 1px solid #ddd; font-size: 13px;
    font-family: var(--font-syne); color: var(--encre);
    background: #fff; outline: none;
    transition: border-color 0.15s; box-sizing: border-box;
  }
  .form-input:focus { border-color: var(--vert); }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .btn-submit {
    width: 100%; padding: 14px;
    background: var(--vert); color: #fff; border: none;
    cursor: pointer; font-size: 12px; font-weight: 700;
    font-family: var(--font-syne); letter-spacing: 0.08em;
    text-transform: uppercase; transition: background 0.2s; margin-top: 8px;
  }
  .btn-submit:hover { background: var(--encre); }

  @media (max-width: 768px) {
    .infra-grid { grid-template-columns: 1fr !important; }
    .form-row { grid-template-columns: 1fr !important; }
    .page-inner { padding: 0 20px !important; }
  }
`

/* ─────────────────────────────────────────────
   CARD
───────────────────────────────────────────── */
function InfraCard({ infra, index, onReserver }: { infra: typeof INFRASTRUCTURES[0], index: number, onReserver: () => void }) {
  return (
    <div className="infra-card" style={{ animationDelay: `${index * 0.07}s` }}>
      <div className="infra-card-img">
        <Image src={infra.image} alt={infra.nom} fill style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 12, left: 12, padding: '4px 10px', background: 'rgba(255,255,255,0.92)', fontSize: '9px', fontWeight: 700, fontFamily: 'var(--font-syne)', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#444' }}>
          {infra.ile}
        </div>
        <div style={{ position: 'absolute', top: 12, right: 12, padding: '4px 10px', background: infra.disponible ? 'var(--vert)' : '#cc3333', fontSize: '9px', fontWeight: 800, fontFamily: 'var(--font-syne)', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff' }}>
          {infra.disponible ? 'Disponible' : 'Indisponible'}
        </div>
      </div>

      <div style={{ padding: '20px 22px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <div style={{ fontSize: '10px', color: 'var(--vert)', fontWeight: 700, fontFamily: 'var(--font-syne)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>
            {infra.type} · {infra.ville}
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: 800, fontFamily: 'var(--font-syne)', color: 'var(--encre)', margin: 0, lineHeight: 1.2 }}>
            {infra.nom}
          </h3>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {infra.sports.map(s => (
            <span key={s} style={{ fontSize: '10px', fontWeight: 600, fontFamily: 'var(--font-syne)', color: '#555', background: '#f5f5f3', padding: '3px 9px' }}>
              {s}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid #f0f0f0' }}>
          <span style={{ fontSize: '11px', color: '#888', fontFamily: 'var(--font-syne)' }}>{infra.capacite}</span>
          <button
            onClick={onReserver}
            disabled={!infra.disponible}
            style={{ padding: '8px 16px', background: infra.disponible ? 'var(--vert)' : '#e0e0e0', color: infra.disponible ? '#fff' : '#aaa', border: 'none', cursor: infra.disponible ? 'pointer' : 'not-allowed', fontSize: '11px', fontWeight: 700, fontFamily: 'var(--font-syne)', letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'background 0.15s' }}
            onMouseEnter={e => { if (infra.disponible) (e.currentTarget as HTMLElement).style.background = 'var(--encre)' }}
            onMouseLeave={e => { if (infra.disponible) (e.currentTarget as HTMLElement).style.background = 'var(--vert)' }}
          >
            Réserver →
          </button>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function ReservationPage() {
  const [ileActive, setIleActive] = useState('Toutes les îles')
  const [selected, setSelected] = useState<typeof INFRASTRUCTURES[0] | null>(null)
  const [success, setSuccess] = useState(false)

  const filtered = INFRASTRUCTURES.filter(i => ileActive === 'Toutes les îles' || i.ile === ileActive)

  return (
    <div style={{ background: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{css}</style>

      {/* ══ NAVBAR ══ */}
      <Navbar />

      {/* ══ PAGE HERO ══ */}
      <PageHero
        title="Réservation d'infrastructures"
        image="/accueil.jpg"
        imageAlt="Infrastructures sportives des Comores"
        bandColor="#deeee3"
      />

      {/* Breadcrumb + description sous la photo */}
      <div style={{ textAlign: 'center', padding: '0 40px 36px', background: '#fff' }}>
        <div style={{ fontSize: '10px', color: '#aaa', fontWeight: 700, fontFamily: 'var(--font-syne)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
          <Link href="/services" style={{ color: 'var(--vert)', textDecoration: 'none' }}>Services</Link>
          {' · '}
          <span>Réservation</span>
        </div>
        <p style={{ fontSize: '14px', color: '#888', fontFamily: 'var(--font-syne)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
          Réservez une infrastructure sportive de l&apos;INJS pour vos entraînements, compétitions ou événements.
        </p>
      </div>

      {/* ══ FILTRES ══ */}
      <div className="page-inner" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 80px 28px', width: '100%', boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, fontFamily: 'var(--font-syne)', color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase', marginRight: '4px' }}>Filtrer :</span>
        {ILES.map(ile => (
          <button key={ile} className={`filter-btn${ileActive === ile ? ' active' : ''}`} onClick={() => setIleActive(ile)}>
            {ile}
          </button>
        ))}
        <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#aaa', fontFamily: 'var(--font-syne)' }}>
          {filtered.length} infrastructure{filtered.length > 1 ? 's' : ''}
        </span>
      </div>

      {/* ══ GRILLE ══ */}
      <div className="page-inner infra-grid" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 80px 80px', width: '100%', boxSizing: 'border-box', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        {filtered.map((infra, i) => (
          <InfraCard key={infra.id} infra={infra} index={i} onReserver={() => { setSelected(infra); setSuccess(false) }} />
        ))}
      </div>

      {/* ══ FOOTER ══ */}
      {<Footer />}

      {/* ══ MODAL ══ */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-panel" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <div style={{ fontSize: '10px', color: 'var(--vert)', fontWeight: 700, fontFamily: 'var(--font-syne)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Demande de réservation
                </div>
                <div style={{ fontSize: '18px', fontWeight: 800, fontFamily: 'var(--font-syne)', color: 'var(--encre)', lineHeight: 1.2 }}>{selected.nom}</div>
                <div style={{ fontSize: '12px', color: '#888', fontFamily: 'var(--font-syne)', marginTop: '4px' }}>{selected.ville} · {selected.ile}</div>
              </div>
              <button className="modal-close" onClick={() => setSelected(null)}>×</button>
            </div>

            {success ? (
              <div style={{ padding: '48px 32px', textAlign: 'center' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>✓</div>
                <div style={{ fontSize: '18px', fontWeight: 800, fontFamily: 'var(--font-syne)', color: 'var(--encre)', marginBottom: '10px' }}>Demande envoyée</div>
                <p style={{ fontSize: '13px', color: '#777', fontFamily: 'var(--font-syne)', lineHeight: 1.7, maxWidth: '360px', margin: '0 auto 24px' }}>
                  Votre demande a bien été transmise. L&apos;INJS vous contactera sous 48h.
                </p>
                <button className="btn-submit" style={{ maxWidth: '200px', margin: '0 auto', display: 'block' }} onClick={() => setSelected(null)}>Fermer</button>
              </div>
            ) : (
              <form style={{ padding: '28px 32px 32px' }} onSubmit={e => { e.preventDefault(); setSuccess(true) }}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Prénom</label>
                    <input className="form-input" type="text" placeholder="Votre prénom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Nom</label>
                    <input className="form-input" type="text" placeholder="Votre nom" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Organisation / Club</label>
                  <input className="form-input" type="text" placeholder="Nom du club ou organisme" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" placeholder="votre@email.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Téléphone</label>
                  <input className="form-input" type="tel" placeholder="+269 000 00 00" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Date souhaitée</label>
                    <input className="form-input" type="date" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Créneau</label>
                    <select className="form-input" required>
                      <option value="">Choisir</option>
                      <option>Matin (8h – 12h)</option>
                      <option>Après-midi (13h – 17h)</option>
                      <option>Soirée (18h – 21h)</option>
                      <option>Journée complète</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Type d&apos;activité</label>
                  <select className="form-input" required>
                    <option value="">Choisir</option>
                    <option>Entraînement</option>
                    <option>Compétition nationale</option>
                    <option>Compétition internationale</option>
                    <option>Événement sportif</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Nombre de participants</label>
                  <input className="form-input" type="number" min="1" placeholder="Ex : 30" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Informations complémentaires</label>
                  <textarea className="form-input" rows={3} placeholder="Précisez votre demande si nécessaire…" style={{ resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn-submit">Envoyer la demande →</button>
                <p style={{ fontSize: '11px', color: '#aaa', fontFamily: 'var(--font-syne)', textAlign: 'center', marginTop: '14px', lineHeight: 1.6 }}>
                  Réponse sous 48h · Documents requis à fournir après confirmation
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}