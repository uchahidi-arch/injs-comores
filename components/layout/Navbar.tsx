'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

/* ─── Structure de navigation ────────────────────────────────────────── */
const MENU = [
  {
    label: "L'Institution",
    href: '/institution',
    cols: 1,
    sections: [
      {
        title: null,
        links: [
          { label: 'Missions & Histoire',        href: '/institution/presentation' },
          { label: 'Direction & équipe',         href: '/institution/organigramme' },
          { label: 'Rapports annuels',           href: '/institution/rapports' },
          { label: 'Contact',                    href: '/contact' },
        ],
      },
    ],
  },
  {
    label: 'JIOI 2027',
    href: '/jioi-2027',
    highlight: true,
    cols: 3,
    sections: [
      {
        title: 'Les Jeux',
        links: [
          { label: 'Présentation',               href: '/jioi-2027/presentation' },
          { label: 'Disciplines aux Jeux',       href: '/jioi-2027/sports' },
          { label: 'Programme des compétitions', href: '/jioi-2027/calendrier' },
          { label: 'Délégations étrangères',     href: '/jioi-2027/delegations' },
        ],
      },
      {
        title: 'Athlètes & Accréditations',
        links: [
          { label: 'Athlètes qualifiés',         href: '/jioi-2027/athletes-qualifies' },
          { label: 'Accréditations numériques',  href: '/jioi-2027/accreditations' },
        ],
      },
      {
        title: 'Médias & Billetterie',
        links: [
          { label: 'Tableau de bord live',       href: '/jioi-2027/resultats' },
          { label: 'Billetterie en ligne',       href: '/jioi-2027/billetterie' },
          { label: 'Espace presse',              href: '/jioi-2027/medias' },
          { label: 'Accréditations',             href: '/jioi-2027/accreditations' },
        ],
      },
    ],
  },
  {
    label: 'Sport',
    href: '/sport',
    cols: 2,
    sections: [
      {
        title: 'Fédérations',
        links: [
          { label: 'Toutes les fédérations',    href: '/federations' },
          { label: 'Football',                   href: '/federations/football' },
          { label: 'Judo',                       href: '/federations/judo' },
          { label: 'Athlétisme',                 href: '/federations/athletisme' },
          { label: 'Basketball',                 href: '/federations/basketball' },
          { label: 'Volleyball',                 href: '/federations/volleyball' },
          { label: 'Boxe',                       href: '/federations/boxe' },
          { label: 'Natation',                   href: '/federations/natation' },
          { label: 'Escrime',                    href: '/federations/escrime' },
          { label: 'Handball',                   href: '/federations/handball' },
        ],
      },
      {
        title: 'Infrastructures',
        links: [
          { label: 'Nos infrastructures',        href: '/infrastructures' },
          { label: 'Réserver un créneau',        href: '/infrastructures/reserver' },
        ],
      },
    ],
  },
  {
    label: 'Jeunesse',
    href: '/jeunesse',
    cols: 2,
    sections: [
      {
        title: null,
        links: [
          { label: 'Programmes nationaux',       href: '/jeunesse/programmes' },
          { label: 'Camps sportifs',             href: '/jeunesse/camps' },
          { label: 'Bourses sportives',          href: '/jeunesse/bourses' },
        ],
      },
      {
        title: 'Action Citoyenne',
        links: [
          { label: 'Programme Action Citoyen',   href: '/jeunesse/action-citoyen' },
          { label: 'Volontariat national',       href: '/jeunesse/volontariat' },
          { label: 'Clubs citoyens',             href: '/jeunesse/clubs-citoyens' },
        ],
      },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    cols: 2,
    sections: [
      {
        title: 'Démarches administratives',
        links: [
          { label: 'Demande de licence',         href: '/services/licences' },
          { label: 'Agrément de club',           href: '/services/agrements' },
          { label: 'Demande de subvention',      href: '/services/subventions' },
          { label: "Autorisation d'événement",   href: '/services/evenements' },
        ],
      },
      {
        title: 'Formations & certifications',
        links: [
          { label: 'Formations officielles',     href: '/formations' },
          { label: 'Inscription en ligne',       href: '/formations/inscription' },
          { label: 'Certifications',             href: '/certifications' },
        ],
      },
    ],
  },
  {
    label: 'Actualités',
    href: '/actualites',
    cols: 1,
    sections: [
      {
        title: null,
        links: [
          { label: 'Toutes les actualités',      href: '/actualites' },
          { label: 'Agenda & événements',        href: '/agenda' },
        ],
      },
    ],
  },
]

/* ─── CSS ────────────────────────────────────────────────────────────── */
const css = `
  /*
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   *  MARGE SITE — référence unique
   *  Utiliser --site-px partout dans le projet
   *  pour garantir l'alignement vertical de
   *  tous les contenus avec le logo navbar.
   * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   */
  :root {
    --site-px: clamp(24px, 5vw, 80px);
  }

  /* ── Header ── */
  .nb-header {
    position: relative;
    background: #fff;
    border-bottom: 1px solid #e8e8e8;
  }

  /* ── Barre principale ── */
  .nb-inner {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 var(--site-px);
    height: 88px;
    display: flex;
    align-items: center;
    gap: 24px;
  }

  /* ── Logo ── */
  .nb-logo {
    display: flex;
    align-items: center;
    gap: 14px;
    text-decoration: none;
    flex-shrink: 0;
  }
  .nb-logo-img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    flex-shrink: 0;
  }
  .nb-logo-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .nb-logo-title {
    font-size: 13px;
    font-weight: 800;
    font-family: var(--font-syne);
    color: var(--encre);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    line-height: 1;
  }
  .nb-logo-sub {
    font-size: 9px;
    color: #888;
    font-family: var(--font-syne);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    line-height: 1.4;
    max-width: 180px;
  }

  /* ── Nav desktop ── */
  .nb-nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
  }
  .nb-item {
    position: relative;
  }
  .nb-trigger {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 18px;
    font-family: var(--font-syne);
    font-weight: 700;
    letter-spacing: -0.01em;
    text-transform: none;
    color: var(--encre);
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px 13px;
    border-radius: 4px;
    transition: background 0.15s, color 0.15s;
    white-space: nowrap;
  }
  .nb-trigger:hover { background: #f5f5f5; }
  .nb-highlight { color: var(--vert) !important; }
  .nb-jioi-badge {
    font-size: 9px;
    font-weight: 700;
    background: var(--vert);
    color: #fff;
    padding: 2px 5px;
    border-radius: 3px;
    letter-spacing: 0.04em;
    margin-left: 2px;
  }
  .nb-chevron {
    opacity: 0.4;
    flex-shrink: 0;
    transition: transform 0.2s;
  }
  .nb-item:hover .nb-chevron { transform: rotate(180deg); opacity: 0.7; }

  /* ── Pont invisible anti-gap ── */
  .nb-item::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 10px;
  }

  /* ── Mega menu ── */
  .nb-mega {
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    background: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    box-shadow: 0 12px 40px rgba(0,0,0,0.10);
    padding: 20px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-6px);
    transition: opacity 0.18s, transform 0.18s;
    z-index: 300;
    min-width: 220px;
  }
  .nb-item:hover .nb-mega {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
  .nb-mega-inner {
    display: grid;
    gap: 0 32px;
  }
  .nb-mega-col { display: flex; flex-direction: column; }
  .nb-mega-title {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--vert);
    font-family: var(--font-syne);
    margin-bottom: 10px;
    padding-bottom: 6px;
    border-bottom: 1px solid #f0f0f0;
  }
  .nb-mega-link {
    font-size: 13px;
    font-family: var(--font-syne);
    font-weight: 500;
    color: #333;
    text-decoration: none;
    padding: 8px 0;
    transition: color 0.15s, padding-left 0.15s;
    border-bottom: 1px solid #f8f8f8;
  }
  .nb-mega-link:last-child { border-bottom: none; }
  .nb-mega-link:hover { color: var(--vert); padding-left: 4px; }

  /* ── Actions droite ── */
  .nb-actions {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    margin-left: auto;
  }
  .nb-sep {
    width: 1px;
    height: 20px;
    background: #e0e0e0;
  }
  .nb-search {
    background: none;
    border: none;
    cursor: pointer;
    color: #666;
    padding: 6px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transition: color 0.15s, background 0.15s;
  }
  .nb-search:hover { color: var(--vert); background: #f5f5f5; }
  .nb-btn-ghost {
    font-size: 12px;
    font-family: var(--font-syne);
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--encre);
    text-decoration: none;
    padding: 8px 13px;
    border: 1.5px solid #d0d0d0;
    border-radius: 4px;
    transition: border-color 0.15s, color 0.15s;
    white-space: nowrap;
  }
  .nb-btn-ghost:hover { border-color: var(--vert); color: var(--vert); }
  .nb-btn-primary {
    font-size: 12px;
    font-family: var(--font-syne);
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    background: var(--vert);
    padding: 9px 18px;
    border-radius: 4px;
    transition: opacity 0.15s;
    white-space: nowrap;
  }
  .nb-btn-primary:hover { opacity: 0.88; }

  /* ── Burger mobile ── */
  .nb-mobile-btn {
    display: none;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--encre);
    padding: 6px;
    border-radius: 4px;
  }

  /* ── Drawer mobile ── */
  .nb-drawer {
    position: fixed;
    inset: 0;
    z-index: 400;
    pointer-events: none;
  }
  .nb-drawer.open { pointer-events: auto; }
  .nb-drawer-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.4);
    opacity: 0;
    transition: opacity 0.25s;
  }
  .nb-drawer.open .nb-drawer-overlay { opacity: 1; }
  .nb-drawer-panel {
    position: absolute;
    top: 0; right: 0; bottom: 0;
    width: min(340px, 90vw);
    background: #fff;
    transform: translateX(100%);
    transition: transform 0.25s cubic-bezier(.4,0,.2,1);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }
  .nb-drawer.open .nb-drawer-panel { transform: translateX(0); }
  .nb-drawer-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    border-bottom: 1px solid #f0f0f0;
  }
  .nb-drawer-head-title {
    font-size: 13px;
    font-weight: 700;
    font-family: var(--font-syne);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--encre);
  }
  .nb-drawer-close {
    background: none;
    border: none;
    font-size: 22px;
    cursor: pointer;
    color: #888;
    line-height: 1;
    padding: 0 4px;
  }
  .nb-drawer-item { border-bottom: 1px solid #f0f0f0; }
  .nb-drawer-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 24px;
    font-size: 13px;
    font-family: var(--font-syne);
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--encre);
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
  }
  .nb-drawer-links { padding: 4px 24px 13px 24px; }
  .nb-drawer-section-title {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--vert);
    font-family: var(--font-syne);
    margin: 12px 0 6px;
  }
  .nb-drawer-link {
    display: block;
    font-size: 13px;
    font-family: var(--font-syne);
    color: #555;
    text-decoration: none;
    padding: 7px 0;
    transition: color 0.15s;
    border-bottom: 1px solid #f0f0f0;
  }
  .nb-drawer-link:last-child { border-bottom: none; }
  .nb-drawer-link:hover { color: var(--vert); }
  .nb-drawer-ctas {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: auto;
  }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .nb-nav { display: none; }
    .nb-mobile-btn { display: flex; }
    .nb-btn-ghost, .nb-btn-primary { display: none; }
  }
  @media (max-width: 600px) {
    .nb-inner { padding: 0 var(--site-px); height: 70px; }
    .nb-logo-img { width: 52px; height: 52px; }
  }
`

/* ─── Composant ──────────────────────────────────────────────────────── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <style>{css}</style>

      <header className="nb-header">
        <div className="nb-inner">

          {/* Logo INJS */}
          <Link href="/" className="nb-logo">
            <Image
              src="/logo_injs.png"
              alt="Logo INJS"
              width={80}
              height={80}
              className="nb-logo-img"
              priority
            />
          </Link>

          {/* Navigation desktop */}
          <nav className="nb-nav" aria-label="Navigation principale">
            {MENU.map((item) => {
              const colCount = item.cols
              const megaWidth = colCount === 1 ? 230 : colCount === 2 ? 460 : 680

              return (
                <div key={item.label} className="nb-item">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`nb-trigger${item.highlight ? ' nb-highlight' : ''}`}
                    >
                      {item.label}
                      {item.highlight && <span className="nb-jioi-badge">2027</span>}
                      <svg className="nb-chevron" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  ) : (
                    <button className={`nb-trigger${item.highlight ? ' nb-highlight' : ''}`}>
                      {item.label}
                      <svg className="nb-chevron" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  )}

                  {/* Mega menu */}
                  <div className="nb-mega" style={{ width: megaWidth }}>
                    <div className="nb-mega-inner" style={{ gridTemplateColumns: `repeat(${colCount}, 1fr)` }}>
                      {item.sections.map((section, si) => (
                        <div key={si} className="nb-mega-col">
                          {section.title && (
                            <div className="nb-mega-title">{section.title}</div>
                          )}
                          {section.links.map(link => (
                            <Link key={link.href} href={link.href} className="nb-mega-link">
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </nav>

            {/* Burger mobile */}
            <button
              className="nb-mobile-btn"
              aria-label="Ouvrir le menu"
              onClick={() => setMobileOpen(true)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
        </div>
      </header>

      {/* ── Drawer mobile ── */}
      <div className={`nb-drawer${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="nb-drawer-overlay" onClick={() => setMobileOpen(false)} />
        <div className="nb-drawer-panel">
          <div className="nb-drawer-head">
            <span className="nb-drawer-head-title">Menu</span>
            <button className="nb-drawer-close" onClick={() => setMobileOpen(false)} aria-label="Fermer">×</button>
          </div>

          {MENU.map((item, idx) => (
            <div key={item.label} className="nb-drawer-item">
              <button
                className="nb-drawer-trigger"
                onClick={() => setMobileExpanded(mobileExpanded === idx ? null : idx)}
              >
                {item.label}
                <svg
                  width="12" height="12" viewBox="0 0 10 10" fill="none"
                  style={{
                    transition: 'transform 0.2s',
                    transform: mobileExpanded === idx ? 'rotate(180deg)' : 'none',
                    opacity: 0.4,
                    flexShrink: 0,
                  }}
                >
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {mobileExpanded === idx && (
                <div className="nb-drawer-links">
                  {item.sections.map((section, si) => (
                    <div key={si}>
                      {section.title && (
                        <div className="nb-drawer-section-title">{section.title}</div>
                      )}
                      {section.links.map(link => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="nb-drawer-link"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="nb-drawer-ctas">
            <Link
              href="/membre/profil"
              className="nb-btn-ghost"
              style={{ textAlign: 'center', display: 'block' }}
              onClick={() => setMobileOpen(false)}
            >
              Espace membre
            </Link>
            <Link
              href="/services/licences"
              className="nb-btn-primary"
              style={{ textAlign: 'center', display: 'block' }}
              onClick={() => setMobileOpen(false)}
            >
              → Demander une licence
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}