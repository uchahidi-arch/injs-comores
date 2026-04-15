import Link from 'next/link'
import { ArrowRight, LayoutGrid } from 'lucide-react'

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundImage: "url('/accueil.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        minHeight: 'clamp(420px, 88vh, 900px)',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(10,40,18,0.88) 0%, rgba(26,77,46,0.82) 100%)',
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 'clamp(60px, 10vh, 120px) clamp(16px, 3vw, 40px) clamp(32px, 6vh, 80px)',
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: '3px',
            padding: '5px 12px',
            fontSize: '10px',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.85)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          <span
            style={{ width: '6px', height: '6px', background: '#4ADE80', borderRadius: '50%' }}
            className="animate-blink"
          />
          Portail officiel
        </div>

        {/* Title */}
        <h1
          style={{
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            color: '#fff',
            marginBottom: '20px',
            fontSize: 'clamp(36px, 6vw, 82px)',
          }}
          className="font-[family-name:var(--font-syne)] font-extrabold"
        >
          <span
            style={{
              display: 'block',
              color: 'rgba(255,255,255,0.55)',
              fontWeight: 400,
              fontSize: '0.60em',
              letterSpacing: '-0.01em',
              marginBottom: '4px',
            }}
            className="font-[family-name:var(--font-dm-sans)]"
          >
            Institut National de la
          </span>
          Jeunesse<br />& Sports
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: 'clamp(13px, 1.6vw, 17px)',
            fontWeight: 400,
            color: '#ffffff',
            lineHeight: 1.7,
            maxWidth: '520px',
            marginBottom: '32px',
            textShadow: '0 1px 8px rgba(0,0,0,0.5)',
          }}
        >
          Le portail officiel de l&apos;État comorien pour organiser, structurer et valoriser le sport et la jeunesse aux Comores.
        </p>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link
            href="/services"
            style={{
              background: 'var(--vert)',
              borderRadius: '4px',
              letterSpacing: '0.04em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'white',
              padding: '12px clamp(16px, 2.5vw, 28px)',
              fontSize: '13px',
              fontWeight: 700,
              textDecoration: 'none',
            }}
            className="font-[family-name:var(--font-syne)] transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <LayoutGrid size={12} />
            Accéder aux services
          </Link>
          <Link
            href="/federations"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1.5px solid rgba(255,255,255,0.3)',
              borderRadius: '4px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'white',
              padding: '12px clamp(16px, 2.5vw, 28px)',
              fontSize: '13px',
              fontWeight: 500,
              textDecoration: 'none',
            }}
            className="transition hover:bg-white/20"
          >
            Les fédérations <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  )
}
