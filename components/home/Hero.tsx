import Link from 'next/link'
import { ArrowRight, LayoutGrid } from 'lucide-react'

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'max(88vh, 600px)',
        backgroundImage: "url('/accueil.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'flex-end',
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
        style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px' }}
        className="mx-auto px-4 sm:px-10 pt-[80px] sm:pt-[120px] pb-10 sm:pb-20"
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
            marginBottom: '24px',
          }}
        >
          <span
            style={{ width: '6px', height: '6px', background: 'var(--vert)', borderRadius: '50%' }}
            className="animate-blink"
          />
          Portail officiel
        </div>

        {/* Title */}
        <h1
          style={{ lineHeight: 1.0, letterSpacing: '-0.03em', color: '#fff', marginBottom: '24px' }}
          className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(40px,5.5vw,82px)]"
        >
          <span
            style={{
              display: 'block',
              color: 'rgba(255,255,255,0.55)',
              fontWeight: 400,
              fontSize: '0.65em',
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
            fontSize: '15px',
            fontWeight: 400,
            color: '#ffffff',
            lineHeight: 1.7,
            maxWidth: '520px',
            marginBottom: '40px',
            textShadow: '0 1px 8px rgba(0,0,0,0.5)',
          }}
        >
          Le portail officiel de l&apos;État comorien pour organiser, structurer et valoriser le sport et la jeunesse aux Comores.
        </p>

        {/* Actions */}
        <div className="flex gap-3 flex-wrap">
          <Link
            href="/services"
            style={{ background: 'var(--vert)', borderRadius: '4px', letterSpacing: '0.04em' }}
            className="inline-flex items-center gap-2 text-white px-5 sm:px-7 py-3 sm:py-3.5 text-[13px] font-bold no-underline font-[family-name:var(--font-syne)] transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <LayoutGrid size={11} />
            Accéder aux services
          </Link>
          <Link
            href="/federations"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1.5px solid rgba(255,255,255,0.3)',
              borderRadius: '4px',
            }}
            className="inline-flex items-center gap-2 text-white px-5 sm:px-7 py-3 sm:py-3.5 text-[13px] font-medium no-underline transition hover:bg-white/20"
          >
            Les fédérations <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </section>
  )
}
