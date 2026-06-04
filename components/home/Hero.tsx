'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const slides = [
  {
    tag: 'Programme Action Citoyen',
    title: '2 700 jeunes mobilisés pour les valeurs citoyennes et les JIOI 2027',
    href: '/jeunesse/action-citoyen',
    cta: 'Découvrir le programme →',
    date: '3 mars 2026',
    image: '/benevolat_2027.jpg',
    imageAlt: 'Jeunes volontaires — Programme Action Citoyen INJS',
  },
  {
    tag: 'Actualité',
    title: 'Les Comores choisissent la mascotte des JIOI 2027',
    href: '/actualites/cosic-jioi-2027',
    cta: "Lire l'article →",
    date: '2 mai 2026',
    image: '/mascotte_comores.jpg',
    imageAlt: 'Mascotte officielle des JIOI 2027 — Comores',
  },
  {
    tag: 'Institution',
    title: 'Institut National de la Jeunesse & des Sports',
    href: '/institution/presentation',
    cta: 'Présentation & missions →',
    date: null,
    image: '/accueil.jpg',
    imageAlt: 'Terrain sportif — Comores',
  },
]

const css = `
  @keyframes zoomDoux {
    0%   { transform: scale(1); }
    100% { transform: scale(1.05); }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .hero-kb {
    animation: zoomDoux 6s ease-out forwards;
  }

  .hero-tag {
    animation: fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
    animation-delay: 0.1s;
    opacity: 0;
  }
  .hero-title {
    animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
    animation-delay: 0.25s;
    opacity: 0;
  }
  .hero-link {
    animation: fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
    animation-delay: 0.4s;
    opacity: 0;
  }

  .hero-lire {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    font-family: var(--font-syne);
    border-bottom: 1px solid rgba(255,255,255,0.4);
    padding-bottom: 2px;
    transition: border-color 0.2s, gap 0.2s;
  }
  .hero-lire:hover {
    border-color: #fff;
    gap: 14px;
  }

  .hero-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.35);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: background 0.25s, transform 0.25s;
  }
  .hero-dot.active {
    background: #fff;
    transform: scale(1.3);
  }
`

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
      setAnimKey((k) => k + 1)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const handleDot = (i: number) => {
    setCurrent(i)
    setAnimKey((k) => k + 1)
  }

  return (
    <section style={{
      position: 'relative',
      height: 'calc(100vh - 88px)',
      minHeight: '560px',
      overflow: 'hidden',
      background: '#0a0a0a',
    }}>
      <style>{css}</style>

      {/* Slides */}
      {slides.map((s, i) => {
        const isActive = i === current
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isActive ? 1 : 0,
              transition: 'opacity 1s ease',
              pointerEvents: isActive ? 'auto' : 'none',
            }}
          >
            {/* Image Ken Burns */}
            <div
              key={isActive ? `kb-${i}-${animKey}` : `kb-${i}-idle`}
              className={isActive ? 'hero-kb' : ''}
              style={{ position: 'absolute', inset: 0, transformOrigin: 'center center' }}
            >
              <Image
                src={s.image}
                alt={s.imageAlt}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority={i === 0}
              />
            </div>

            {/* Gradient latéral gauche → transparent (style HeroCarousel) */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.30) 50%, rgba(10,10,10,0) 100%)',
            }} />
            {/* Léger gradient bas pour les dots */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 30%)',
            }} />

            {/* Contenu — bas gauche, aligné sur --site-px */}
            <div style={{
              position: 'absolute',
              bottom: '72px',
              left: 'var(--site-px)',
              right: 'var(--site-px)',
              maxWidth: '620px',
            }}>
              {/* Tag + date */}
              <div
                key={isActive ? `tag-${i}-${animKey}` : `tag-${i}-idle`}
                className={isActive ? 'hero-tag' : ''}
                style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}
              >
                <span style={{
                  fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em',
                  textTransform: 'uppercase', color: '#fff',
                  background: 'var(--vert)', padding: '4px 10px',
                  fontFamily: 'var(--font-syne)',
                }}>
                  {s.tag}
                </span>
                {s.date && (
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-syne)' }}>
                    {s.date}
                  </span>
                )}
              </div>

              {/* Titre */}
              <h2
                key={isActive ? `title-${i}-${animKey}` : `title-${i}-idle`}
                className={isActive ? 'hero-title' : ''}
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 800,
                  fontSize: 'clamp(26px, 3.8vw, 56px)',
                  color: '#fff',
                  lineHeight: 1.08,
                  letterSpacing: '-0.02em',
                  marginBottom: '28px',
                  margin: '0 0 28px',
                }}
              >
                {s.title}
              </h2>

              {/* Lire l'article */}
              <Link
                key={isActive ? `lnk-${i}-${animKey}` : `lnk-${i}-idle`}
                href={s.href}
                className={`hero-lire${isActive ? ' hero-link' : ''}`}
              >
                {s.cta}
              </Link>
            </div>
          </div>
        )
      })}

      {/* Dots — centrés en bas */}
      <div style={{
        position: 'absolute', bottom: '28px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', gap: '10px', zIndex: 10,
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            className={`hero-dot${i === current ? ' active' : ''}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}