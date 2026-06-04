'use client'
import Link from 'next/link'
import Image from 'next/image'


const LEGAL = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Confidentialité',  href: '/confidentialite' },
  { label: 'Accessibilité',    href: '/accessibilite' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#f7f7f5', borderTop: '1px solid #e8e8e4' }}>

      {/* ── Bande JIOI ── */}
      <div style={{
        background: 'var(--vert)',
        padding: '0 40px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: '#fff', opacity: 0.9, flexShrink: 0,
          }} />
          <span style={{
            fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em',
            color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-syne)',
            textTransform: 'uppercase',
          }}>
            Événement national
          </span>
          <span style={{
            fontSize: '13px', fontWeight: 700,
            color: '#fff', fontFamily: 'var(--font-syne)',
          }}>
            Jeux des Îles de l&apos;Océan Indien — Comores 2027
          </span>
        </div>
        <Link href="/jioi-2027" style={{
          fontSize: '11px', fontWeight: 700, color: '#fff',
          textDecoration: 'none', fontFamily: 'var(--font-syne)',
          letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.85,
        }}>
          Découvrir les Jeux →
        </Link>
      </div>

      {/* ── Corps ── */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '56px 80px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '60px',
        flexWrap: 'wrap',
      }}>

        {/* Logos à gauche */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px', flexShrink: 0 }}>

          {/* Logo INJS */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
            <Image
              src="/logo_injs.png"
              alt="Logo INJS Comores"
              width={80}
              height={80}
              style={{ objectFit: 'contain', borderRadius: '50%' }}
            />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 800, fontFamily: 'var(--font-syne)', color: 'var(--encre)', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1 }}>
                INJS
              </div>
              <div style={{ fontSize: '9px', color: '#999', fontFamily: 'var(--font-syne)', marginTop: '4px', letterSpacing: '0.04em', textTransform: 'uppercase', lineHeight: 1.6 }}>
                Institut National<br />Jeunesse &amp; Sports
              </div>
            </div>
          </Link>

          {/* Séparateur */}
          <div style={{ width: '1px', height: '60px', background: '#ddd', flexShrink: 0 }} />

          {/* Sceau de l'État */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Image
              src="/SEAUDeLETAT.png"
              alt="Sceau de l'État — Union des Comores"
              width={80}
              height={80}
              style={{ objectFit: 'contain' }}
            />
            <div style={{ fontSize: '9px', color: '#777', fontFamily: 'var(--font-syne)', letterSpacing: '0.04em', textTransform: 'uppercase', lineHeight: 1.7 }}>
              Ministère de la Jeunesse,<br />des Sports et de la Culture<br />
              <span style={{ color: '#bbb' }}>Union des Comores</span>
            </div>
          </div>
        </div>

        {/* Liens utiles à droite — pas répétés dans la nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {[
            { label: 'Demander une licence',     href: '/services/licences' },
            { label: 'Réserver une salle',        href: '/infrastructures/reserver' },
            { label: 'Carte INJS',                href: '/membre/carte' },
            { label: 'Résultats',                 href: '/resultats' },
            { label: 'Agenda',                    href: '/agenda' },
            { label: 'Espace membre',             href: '/membre/profil' },
          ].map((link, i, arr) => (
            <span key={link.href} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Link
                href={link.href}
                style={{ fontSize: '12px', fontWeight: 600, fontFamily: 'var(--font-syne)', color: '#555', textDecoration: 'none', letterSpacing: '0.03em', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--vert)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#555'}
              >
                {link.label}
              </Link>
              {i < arr.length - 1 && <span style={{ color: '#ccc', fontSize: '11px' }}>·</span>}
            </span>
          ))}
        </nav>

      </div>

      {/* ── Bas de page ── */}
      <div style={{
        borderTop: '1px solid #e8e8e4',
        padding: '14px 40px',
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <span style={{ fontSize: '11px', color: '#aaa', fontFamily: 'var(--font-syne)' }}>
          © 2026 INJS — Institut National de la Jeunesse et des Sports. Union des Comores.
        </span>
        <div style={{ display: 'flex', gap: '20px' }}>
          {LEGAL.map(l => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontSize: '11px', color: '#aaa', textDecoration: 'none', fontFamily: 'var(--font-syne)', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#555'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#aaa'}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

    </footer>
  )
}