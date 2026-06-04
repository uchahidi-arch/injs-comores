'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface PageHeroProps {
  label?: string
  titre: string
  description?: string
  image: string
  imageAlt?: string
  bandColor?: string
}

function useRetour() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length <= 1) return { label: 'Accueil', href: '/' }
  const parentSegments = segments.slice(0, -1)
  const parentHref = '/' + parentSegments.join('/')
  const parentLabel = parentSegments[parentSegments.length - 1]
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
  return { label: parentLabel, href: parentHref }
}

export default function PageHero({
  label,
  titre,
  description,
  image,
  imageAlt = '',
  bandColor = '#deeee3',
}: PageHeroProps) {
  const retour = useRetour()

  return (
    <div style={{ background: '#fff' }}>

      {/* Bande colorée + photo */}
      <div style={{ position: 'relative', height: '260px', background: '#fff' }}>

        {/* Bande */}
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '100%', maxWidth: 'calc(1280px - 80px)',
          height: '260px', background: bandColor,
        }} />

        {/* Photo */}
        <div style={{
          position: 'absolute', top: '36px', left: '50%', transform: 'translateX(-50%)',
          width: 'calc(100% - 200px)', maxWidth: '1060px',
          height: '420px', overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(0,0,0,0.18)', zIndex: 1,
        }}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>
      </div>

      {/* Espace débordement */}
      <div style={{ height: '196px', background: '#fff' }} />

      {/* Label + retour sur même ligne + titre + description */}
      <div style={{ padding: '56px 40px 60px', position: 'relative' }}>

        {/* Ligne : retour gauche + label centre */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          maxWidth: 'calc(1280px - 80px)',
          margin: '0 auto 20px',
        }}>
          {/* Retour — gauche, aligné début de bande */}
          <Link href={retour.href} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '11px',
            fontWeight: 700,
            fontFamily: 'var(--font-syne)',
            color: '#aaa',
            textDecoration: 'none',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            transition: 'color 0.15s',
            justifySelf: 'start',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--vert)')}
            onMouseLeave={e => (e.currentTarget.style.color = '#aaa')}
          >
            <span style={{ fontSize: '14px' }}>←</span>
            {retour.label}
          </Link>

          {/* Label — centre */}
          {label ? (
            <div style={{
              fontSize: '11px', color: '#aaa', fontWeight: 700,
              fontFamily: 'var(--font-syne)', letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}>
              {label}
            </div>
          ) : <div />}

          <div />
        </div>

        {/* Titre + trait + description — centrés */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800,
            fontFamily: 'var(--font-syne)', color: 'var(--encre)',
            letterSpacing: '-0.02em', lineHeight: 1.1, margin: 0,
          }}>
            {titre}
          </h1>
          <div style={{
            width: '48px', height: '4px', background: bandColor,
            margin: '20px auto',
          }} />
          {description && (
            <p style={{
              fontSize: '17px', color: '#666',
              fontFamily: 'var(--font-syne)',
              maxWidth: '620px', margin: '0 auto', lineHeight: 1.8,
            }}>
              {description}
            </p>
          )}
        </div>

      </div>

    </div>
  )
}