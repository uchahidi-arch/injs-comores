'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Fédérations', href: '/federations' },
  { label: 'Services', href: '/services' },
  { label: 'Jeunesse', href: '/jeunesse' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Ferme le menu au changement de route
  useEffect(() => { setOpen(false) }, [pathname])

  // Bloque le scroll du body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

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
        }}
        className="flex items-center px-4 sm:px-8 md:px-10 gap-4 md:gap-10"
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 no-underline flex-shrink-0">
          <div
            style={{ width: '38px', height: '38px', border: '1.5px solid var(--gris-2)', borderRadius: '50%', overflow: 'hidden' }}
            className="bg-white flex items-center justify-center flex-shrink-0"
          >
            <Image src="/logo_injs.png" alt="Logo INJS" width={38} height={38} style={{ width: '38px', height: '38px', objectFit: 'contain' }} />
          </div>
          <div>
            <strong
              style={{ display: 'block', fontSize: '13px', color: 'var(--vert)', letterSpacing: '0.04em' }}
              className="font-[family-name:var(--font-syne)]"
            >
              INJS
            </strong>
            <span style={{ fontSize: '9px', color: 'var(--fumee)', letterSpacing: '0.02em' }} className="hidden sm:block">
              Institut National de la Jeunesse et des Sports
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center flex-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontSize: '12.5px', letterSpacing: '0.03em', borderRadius: '4px' }}
              className={`font-medium no-underline px-4 py-2 transition-colors whitespace-nowrap ${
                pathname === l.href
                  ? 'text-[var(--vert)] bg-[var(--vert-light)]'
                  : 'text-[var(--fumee)] hover:text-[var(--vert)] hover:bg-[var(--vert-light)]'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2.5 ml-auto flex-shrink-0">
          <Link
            href="/connexion"
            style={{ fontSize: '12px', color: 'var(--fumee)', border: '1px solid var(--gris-2)', borderRadius: '4px' }}
            className="font-medium no-underline px-3.5 py-2 transition-colors hover:border-[var(--vert)] hover:text-[var(--vert)]"
          >
            Se connecter
          </Link>
          <Link
            href="/services"
            style={{ background: 'var(--vert)', borderRadius: '4px', letterSpacing: '0.05em' }}
            className="inline-flex items-center gap-1.5 text-white px-5 py-2 text-xs font-semibold no-underline hover:opacity-90 transition-opacity whitespace-nowrap font-[family-name:var(--font-syne)]"
          >
            <ArrowRight size={10} />
            Accéder aux services
          </Link>
        </div>

        {/* Mobile: burger */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={() => setOpen(!open)}
            style={{
              color: 'var(--encre)',
              borderRadius: '6px',
              border: '1px solid var(--gris-2)',
              padding: '8px',
              background: open ? 'var(--vert-light)' : 'white',
              transition: 'background 0.2s',
            }}
            className="flex items-center justify-center"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
        style={{
          zIndex: 198,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          top: '64px',
        }}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div
        className="md:hidden fixed left-0 right-0 overflow-y-auto"
        style={{
          zIndex: 199,
          top: '64px',
          maxHeight: 'calc(100dvh - 64px)',
          background: 'white',
          borderBottom: '1px solid var(--gris-2)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          transform: open ? 'translateY(0)' : 'translateY(-8px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1), opacity 0.2s ease',
        }}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                borderRadius: '8px',
                padding: '14px 16px',
                letterSpacing: '0.01em',
                background: pathname === l.href ? 'var(--vert-light)' : 'transparent',
                color: pathname === l.href ? 'var(--vert)' : 'var(--encre)',
              }}
              className="flex items-center justify-between text-[15px] font-semibold no-underline transition-colors hover:bg-[var(--vert-light)] hover:text-[var(--vert)] font-[family-name:var(--font-syne)]"
            >
              {l.label}
              <ArrowRight size={13} style={{ opacity: 0.3 }} />
            </Link>
          ))}
        </div>

        {/* Séparateur + actions */}
        <div
          style={{ borderTop: '1px solid var(--gris-2)' }}
          className="px-4 py-4 flex flex-col gap-3"
        >
          <Link
            href="/connexion"
            onClick={() => setOpen(false)}
            style={{
              fontSize: '14px',
              color: 'var(--fumee)',
              border: '1px solid var(--gris-2)',
              borderRadius: '8px',
              padding: '13px 16px',
              textAlign: 'center',
            }}
            className="font-medium no-underline hover:border-[var(--vert)] hover:text-[var(--vert)] transition-colors"
          >
            Se connecter
          </Link>
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            style={{ background: 'var(--vert)', borderRadius: '8px', padding: '14px 16px', letterSpacing: '0.04em' }}
            className="flex items-center justify-center gap-2 text-white text-[13px] font-bold no-underline hover:opacity-90 transition-opacity font-[family-name:var(--font-syne)]"
          >
            <ArrowRight size={12} />
            Accéder aux services
          </Link>
        </div>
      </div>
    </>
  )
}
