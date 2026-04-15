'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Fédérations', href: '/federations' },
  { label: 'Services', href: '/services' },
  { label: 'Jeunesse', href: '/jeunesse' },
  { label: 'JIOI 2027', href: '/jioi' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav
        id="navbar"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 200,
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--gris-2)',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 clamp(16px, 3vw, 40px)',
          gap: '0',
        }}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 no-underline flex-shrink-0">
          <div
            style={{ width: '38px', height: '38px', border: '1.5px solid var(--gris-2)', borderRadius: '6px' }}
            className="bg-white flex items-center justify-center"
          >
            <Image src="/logo_injs.png" alt="Logo INJS" width={30} height={30} className="object-contain" />
          </div>
          <div>
            <strong
              style={{ display: 'block', fontSize: '13px', color: 'var(--vert)', letterSpacing: '0.04em' }}
              className="font-[family-name:var(--font-syne)]"
            >
              INJS
            </strong>
            <span
              style={{ fontSize: '9px', color: 'var(--fumee)', letterSpacing: '0.02em' }}
              className="nav-subtitle"
            >
              Institut National de la Jeunesse et des Sports
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links-desktop">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: '12.5px',
                color: 'var(--fumee)',
                letterSpacing: '0.03em',
                borderRadius: '4px',
                padding: '7px 14px',
                whiteSpace: 'nowrap',
              }}
              className="font-medium no-underline transition-colors hover:text-[var(--vert)] hover:bg-[var(--vert-light)]"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop Right actions */}
        <div className="nav-actions-desktop">
          <Link
            href="/connexion"
            style={{
              fontSize: '12px',
              color: 'var(--fumee)',
              border: '1px solid var(--gris-2)',
              borderRadius: '4px',
              padding: '7px 14px',
              whiteSpace: 'nowrap',
            }}
            className="font-medium no-underline transition-colors hover:border-[var(--vert)] hover:text-[var(--vert)]"
          >
            Se connecter
          </Link>
          <Link
            href="/services"
            style={{
              background: 'var(--vert)',
              borderRadius: '4px',
              letterSpacing: '0.05em',
              padding: '7px 18px',
              whiteSpace: 'nowrap',
            }}
            className="inline-flex items-center gap-1.5 text-white text-xs font-semibold no-underline transition-colors hover:bg-[var(--vert-2)] font-[family-name:var(--font-syne)]"
          >
            <ArrowRight size={10} />
            Accéder aux services
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            marginLeft: 'auto',
            color: 'var(--encre)',
            borderRadius: '6px',
            border: '1px solid var(--gris-2)',
            padding: '8px',
            background: 'white',
          }}
          className="nav-hamburger flex items-center justify-center"
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(16px)',
            zIndex: 199,
            borderTop: '1px solid var(--gris-2)',
            padding: '16px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
          className="nav-drawer"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: '16px',
                color: 'var(--encre)',
                borderRadius: '6px',
                padding: '14px 16px',
                letterSpacing: '0.01em',
              }}
              className="font-[family-name:var(--font-syne)] font-semibold no-underline transition-colors hover:bg-[var(--vert-light)] hover:text-[var(--vert)]"
            >
              {l.label}
            </Link>
          ))}

          <div style={{ borderTop: '1px solid var(--gris-2)', marginTop: '12px', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link
              href="/connexion"
              onClick={() => setOpen(false)}
              style={{
                fontSize: '14px',
                color: 'var(--fumee)',
                border: '1px solid var(--gris-2)',
                borderRadius: '6px',
                padding: '12px 16px',
                textAlign: 'center',
              }}
              className="font-medium no-underline"
            >
              Se connecter
            </Link>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              style={{
                background: 'var(--vert)',
                borderRadius: '6px',
                padding: '14px 16px',
                textAlign: 'center',
                letterSpacing: '0.04em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
              className="text-white text-[13px] font-bold no-underline font-[family-name:var(--font-syne)]"
            >
              <ArrowRight size={12} />
              Accéder aux services
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .nav-links-desktop {
          display: none;
          align-items: center;
          flex: 1;
          padding-left: 24px;
          gap: 2px;
        }
        .nav-actions-desktop {
          display: none;
          align-items: center;
          gap: 8px;
          margin-left: auto;
          flex-shrink: 0;
        }
        .nav-hamburger {
          display: flex;
        }
        .nav-subtitle {
          display: none;
        }
        @media (min-width: 640px) {
          .nav-subtitle {
            display: block;
          }
        }
        @media (min-width: 900px) {
          .nav-links-desktop {
            display: flex;
          }
          .nav-actions-desktop {
            display: flex;
          }
          .nav-hamburger {
            display: none;
          }
        }
        .nav-drawer {
          display: flex;
        }
        @media (min-width: 900px) {
          .nav-drawer {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}
