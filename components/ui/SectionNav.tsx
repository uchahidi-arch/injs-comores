'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLien {
  label: string
  href: string
}

interface BlocNav {
  titre: string
  liens?: NavLien[]
  contenu?: React.ReactNode
}

interface SectionNavProps {
  blocs: BlocNav[]
}

export default function SectionNav({ blocs }: SectionNavProps) {
  const pathname = usePathname()

  return (
    <aside style={{
      width: '260px',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      alignSelf: 'flex-start',
      position: 'sticky',
      top: '24px',
    }}>
      {blocs.map((bloc, i) => (
        <div key={i} style={{
          border: '1px solid #eee',
          borderRadius: '8px',
          background: '#fff',
          overflow: 'hidden',
        }}>
          {/* En-tête */}
          <div style={{
            padding: '14px 20px',
            borderBottom: '1px solid #f0f0f0',
            fontSize: '11px',
            fontWeight: 700,
            fontFamily: 'var(--font-syne)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--vert)',
          }}>
            {bloc.titre}
          </div>

          {/* Liens */}
          {bloc.liens && (
            <nav>
              {bloc.liens.map((lien) => {
                const actif = pathname === lien.href
                return (
                  <Link
                    key={lien.href}
                    href={lien.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '11px 20px',
                      fontSize: '14px',
                      fontFamily: 'var(--font-syne)',
                      fontWeight: actif ? 700 : 500,
                      color: actif ? 'var(--vert)' : '#444',
                      textDecoration: 'none',
                      borderLeft: actif ? '3px solid var(--vert)' : '3px solid transparent',
                      background: actif ? '#f5faf6' : 'transparent',
                      transition: 'all 0.15s',
                      borderBottom: '1px solid #f8f8f8',
                    }}
                    onMouseEnter={e => {
                      if (!actif) {
                        const el = e.currentTarget as HTMLElement
                        el.style.color = 'var(--vert)'
                        el.style.background = '#f9fdf9'
                      }
                    }}
                    onMouseLeave={e => {
                      if (!actif) {
                        const el = e.currentTarget as HTMLElement
                        el.style.color = '#444'
                        el.style.background = 'transparent'
                      }
                    }}
                  >
                    <span style={{
                      fontSize: '10px',
                      color: actif ? 'var(--vert)' : '#ccc',
                      transition: 'color 0.15s',
                      flexShrink: 0,
                    }}>›</span>
                    {lien.label}
                  </Link>
                )
              })}
            </nav>
          )}

          {/* Contenu libre */}
          {bloc.contenu && (
            <div style={{ padding: '16px 20px' }}>
              {bloc.contenu}
            </div>
          )}
        </div>
      ))}
    </aside>
  )
}